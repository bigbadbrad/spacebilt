// /app/api/stock-prices/route.ts
import { NextResponse } from 'next/server';

interface StockQuote {
  symbol: string;
  name: string;
  price: number | null;
  change?: number;
  changePercent?: number;
  isPrivate?: boolean; // For private companies like SpaceX
}

// Cache stock prices for 60 seconds to avoid rate limiting
const CACHE_DURATION = 60 * 1000; // 60 seconds
let cachedData: { data: StockQuote[]; timestamp: number } | null = null;

async function fetchYahooFinanceQuote(symbol: string): Promise<{ price: number; name: string; change: number } | null> {
  try {
    // Yahoo Finance API endpoint (unofficial but reliable)
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=1d`;
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json',
      },
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      console.error(`Failed to fetch ${symbol}: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    
    if (!data?.chart?.result?.[0]) {
      console.error(`No data for ${symbol}`, data);
      return null;
    }

    const result = data.chart.result[0];
    const quote = result.indicators?.quote?.[0];
    const meta = result.meta;

    if (!quote || !meta) {
      console.error(`No quote or meta for ${symbol}`);
      return null;
    }

    // Get the latest price (last non-null value)
    const prices = quote.close || [];
    let lastPrice: number | null = null;
    for (let i = prices.length - 1; i >= 0; i--) {
      if (prices[i] !== null && prices[i] !== undefined) {
        lastPrice = prices[i] as number;
        break;
      }
    }

    if (lastPrice === null || lastPrice === undefined) {
      // Fallback to regularMarketPrice or previousClose from meta
      lastPrice = meta.regularMarketPrice || meta.previousClose || meta.chartPreviousClose || null;
    }

    if (lastPrice === null || lastPrice === undefined) {
      console.error(`No price found for ${symbol}`);
      return null;
    }

    // Calculate change (current price - previous close)
    const previousClose = meta.previousClose || meta.chartPreviousClose || lastPrice;
    const change = lastPrice - previousClose;

    return {
      price: lastPrice,
      name: meta.longName || meta.shortName || meta.symbol || symbol,
      change: change,
    };
  } catch (error) {
    console.error(`Error fetching ${symbol}:`, error);
    return null;
  }
}

export async function GET() {
  try {
    // Check cache first
    if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
      return NextResponse.json(cachedData.data);
    }

    const symbols = ['VOYG', 'RKLB', 'ASTS', 'LMT', 'NOC', 'LHX', 'NVDA', 'SPACEX'];
    const companyNames: Record<string, string> = {
      'VOYG': 'Voyager Space',
      'RKLB': 'Rocket Lab USA',
      'ASTS': 'AST SpaceMobile',
      'LMT': 'Lockheed Martin',
      'NOC': 'Northrop Grumman',
      'LHX': 'L3Harris Technologies',
      'NVDA': 'NVIDIA',
      'SPACEX': 'SpaceX',
    };

    // Fetch all quotes in parallel
    const quotes = await Promise.all(
      symbols.map(async (symbol) => {
        // Handle SpaceX as private company
        if (symbol === 'SPACEX') {
          return {
            symbol: 'SPCX', // Display symbol for SpaceX
            name: 'SpaceX',
            price: null,
            change: null,
            isPrivate: true,
          };
        }
        
        const quote = await fetchYahooFinanceQuote(symbol);
        
        if (quote) {
          return {
            symbol,
            name: quote.name || companyNames[symbol] || symbol,
            price: quote.price,
            change: quote.change,
          };
        }

        // Fallback to placeholder if API fails
        return {
          symbol,
          name: companyNames[symbol] || symbol,
          price: null,
          change: null,
        };
      })
    );

    // Cache the result
    cachedData = {
      data: quotes,
      timestamp: Date.now(),
    };

    return NextResponse.json(quotes);
  } catch (error) {
    console.error('Error fetching stock prices:', error);
    
    // Return fallback data on error
    const fallback: StockQuote[] = [
      { symbol: 'VOYG', name: 'Voyager Space', price: null, change: null },
      { symbol: 'RKLB', name: 'Rocket Lab USA', price: null, change: null },
      { symbol: 'ASTS', name: 'AST SpaceMobile', price: null, change: null },
      { symbol: 'LMT', name: 'Lockheed Martin', price: null, change: null },
      { symbol: 'NOC', name: 'Northrop Grumman', price: null, change: null },
      { symbol: 'LHX', name: 'L3Harris Technologies', price: null, change: null },
      { symbol: 'NVDA', name: 'NVIDIA', price: null, change: null },
      { symbol: 'SPCX', name: 'SpaceX', price: null, change: null, isPrivate: true },
    ];

    return NextResponse.json(fallback);
  }
}

