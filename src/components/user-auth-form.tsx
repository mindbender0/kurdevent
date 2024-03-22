'use client';

import * as React from 'react';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<TAuthCredentialsValidator>({
  //   resolver: zodResolver(AuthCredentialsValidator),
  // });

  // const onSubmit = ({
  //   fullname,
  //   username,
  //   email,
  //   password,
  // }: TAuthCredentialsValidator) => {
  //   setIsLoading(true);

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   });
  // };

  async function onSubmit(event) {
    event.preventDefault();
    // setIsLoading(true);

    if (!fullname || !username || !email || !password) {
      setError('Please fill in all fields');
      // setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('api/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname,
          username,
          email,
          password,
        }),
      });
      if (res.ok) {
        const form = event.target;
        form.reset();
      } else {
        console.log('User registration failed');
      }
    } catch (error) {
      console.log('Error during registration: ', error);
    }

    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000);
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="" htmlFor="fullname">
              Full name
            </Label>
            <Input
              // {...register('fullname')}
              // className={cn({
              //   'focus-visible:ring-rose-600': errors.fullname,
              // })}
              id="fullname"
              placeholder="John Doe"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <Label className="" htmlFor="username">
              Username
            </Label>
            <Input
              // {...register('username')}
              id="username"
              placeholder="John-123"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <Label className="" htmlFor="email">
              Email
            </Label>
            <Input
              // {...register('email')}
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <Label className="" htmlFor="password">
              Password
            </Label>
            <Input
              // {...register('password')}
              // className={cn({
              //   'focus-visible:ring-rose-600': errors.password,
              // })}
              id="password"
              placeholder="**********"
              type="password"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div className="grid gap-1">
            <Label className="" htmlFor="password-confirmation">
              Password Confirmation
            </Label>
            <Input
              id="password-confirmation"
              placeholder="**********"
              type="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div> */}
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up
          </Button>
          {error && (
            <div className="bg-pink-600 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        </div>
      </form>

      <p className="px-8 text-center text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link
          href="/sign-in"
          className="underline underline-offset-4 hover:text-primary">
          Sign in
        </Link>{' '}
      </p>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{' '}
        GitHub
      </Button>
    </div>
  );
}
