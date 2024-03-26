"use client";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import isEmailValid from "@/lib/is-email-valid";

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const session = useSession();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/");
    }
  }, [session, router]);

  const onLogin = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    // if (!isEmailValid(user.email)) {
    //   setError("Email is invalid");
    //   return;
    // }

    // if (!user.password || user.password.length < 8) {
    //   setError("Password is invalid");
    //   return;
    // }

    const res = await signIn("credentials", {
      redirect: false,
      email: user.email,
      password: user.password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/");
    } else {
      setError("");
    }

    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="container relative h-[700px] flex-col items-center justify-center md:grid lg:max-w-none lg:px-0">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Enter account details
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>

          <div className={cn("grid gap-6")}>
            <form onSubmit={onLogin}>
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <Label className="sr-only" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    // value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-1">
                  <Label className="sr-only" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    id="password"
                    placeholder="**********"
                    type="password"
                    autoCorrect="off"
                    disabled={isLoading}
                    // value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </div>
                <Button disabled={isLoading}>
                  {isLoading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Sign In
                </Button>
                <p className="text-rose-600 text-[16px] mb-4">
                  {error && error}
                </p>
              </div>
            </form>
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="underline underline-offset-4 hover:text-primary">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
