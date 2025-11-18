'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Controller, useForm } from 'react-hook-form';
import { z as zod } from 'zod';

import { paths } from '@/paths';
import { authClient } from '@/lib/auth/client';
import { useUser } from '@/hooks/use-user';

const presetOptions = [
  { value: 'beauty', label: 'Beauty' },
  { value: 'auto', label: 'Auto' },
  { value: 'spa', label: 'Spa' },
  { value: 'medical', label: 'Medical' },
  { value: 'other', label: 'Other' },
];

const schema = zod.object({
  name: zod.string().min(1, { message: 'Name is required' }),
  phone: zod.string().min(1, { message: 'Phone number is required' }).regex(/^[0-9]{10,15}$/, { message: 'Invalid phone number' }),
  password: zod.string().min(6, { message: 'Password should be at least 6 characters' }),
  preset: zod.enum(['beauty', 'auto', 'spa', 'medical', 'other'], { required_error: 'Preset is required' }),
});

type Values = zod.infer<typeof schema>;

const defaultValues = { name: '', phone: '', password: '', preset: 'beauty' } satisfies Values;

export function SignUpForm(): React.JSX.Element {
  const router = useRouter();

  const { checkSession } = useUser();

  const [isPending, setIsPending] = React.useState<boolean>(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Values>({ defaultValues, resolver: zodResolver(schema) });

  const onSubmit = React.useCallback(
    async (values: Values): Promise<void> => {
      setIsPending(true);

      const { error } = await authClient.signUp(values);

      if (error) {
        setError('root', { type: 'server', message: error });
        setIsPending(false);
        return;
      }

      // Refresh the auth state
      await checkSession?.();

      // UserProvider, for this case, will not refresh the router
      // After refresh, GuestGuard will handle the redirect
      router.refresh();
    },
    [checkSession, router, setError]
  );

  return (
    <Stack spacing={3}>
      <Stack spacing={1}>
        <Typography variant="h4">Sign up</Typography>
        <Typography color="text.secondary" variant="body2">
          Already have an account?{' '}
          <Link component={RouterLink} href={paths.auth.signIn} underline="hover" variant="subtitle2">
            Sign in
          </Link>
        </Typography>
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <FormControl error={Boolean(errors.name)}>
                <InputLabel>Name</InputLabel>
                <OutlinedInput {...field} label="Name" />
                {errors.name ? <FormHelperText>{errors.name.message}</FormHelperText> : null}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <FormControl error={Boolean(errors.phone)}>
                <InputLabel>Phone number</InputLabel>
                <OutlinedInput {...field} label="Phone number" type="tel" />
                {errors.phone ? <FormHelperText>{errors.phone.message}</FormHelperText> : null}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <FormControl error={Boolean(errors.password)}>
                <InputLabel>Password</InputLabel>
                <OutlinedInput {...field} label="Password" type="password" />
                {errors.password ? <FormHelperText>{errors.password.message}</FormHelperText> : null}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="preset"
            render={({ field }) => (
              <FormControl error={Boolean(errors.preset)}>
                <InputLabel>Preset</InputLabel>
                <Select {...field} label="Preset">
                  {presetOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.preset ? <FormHelperText>{errors.preset.message}</FormHelperText> : null}
              </FormControl>
            )}
          />
          {errors.root ? <Alert color="error">{errors.root.message}</Alert> : null}
          <Button disabled={isPending} type="submit" variant="contained">
            Sign up
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
