"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Metadata } from "next";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import isEmailValid from "@/lib/is-email-valid";
import { signIn, useSession } from "next-auth/react";
import Wrapper from "./wrapper";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function SignUpForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();
  const [user, setUser] = React.useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/");
    }
  }, [sessionStatus, router]);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (!isEmailValid(user.email.toLowerCase())) {
      setError("Email is invalid");
      return;
    }

    if (!user.password || user.password.length < 8) {
      setError("Password is invalid");
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch("/api/users/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (res.status === 400) {
        setError("Email is already registered");
      }
      if (res.status === 200) {
        setError("");
        router.push("/sign-in");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error.message);
    }

    setTimeout(() => setIsLoading(false), 2000);
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="container relative hidden h-[700px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 border border-gray-100">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-rose-600" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6">
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Kurdevent
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">&ldquo;Be who you wanna be&rdquo;</p>
              <footer className="text-sm">Aland</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>

            <div className="grid gap-6">
              <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label className="" htmlFor="name">
                      Full name
                    </Label>
                    <Input
                      id="name"
                      placeholder="fullname"
                      autoCapitalize="none"
                      autoCorrect="off"
                      disabled={isLoading}
                      onChange={(e) =>
                        setUser({ ...user, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="grid gap-1">
                    <Label className="" htmlFor="username">
                      Username
                    </Label>
                    <Input
                      id="username"
                      placeholder="John-123"
                      type="text"
                      autoCapitalize="none"
                      autoCorrect="off"
                      disabled={isLoading}
                      onChange={(e) =>
                        setUser({ ...user, username: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="grid gap-1">
                    <Label className="" htmlFor="email">
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
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="grid gap-1">
                    <Label className="" htmlFor="password">
                      Password
                    </Label>
                    <Input
                      id="password"
                      placeholder="password"
                      type="password"
                      autoCorrect="off"
                      disabled={isLoading}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button disabled={isLoading}>
                    {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Sign Up
                  </Button>
                  <p className="text-rose-600 text-[16px] mb-4">
                    {error && error}
                  </p>
                </div>
              </form>

              <p className="px-8 text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  href="/sign-in"
                  className="underline underline-offset-4 hover:text-primary">
                  Sign in
                </Link>{" "}
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

              <Button
                variant="outline"
                type="button"
                disabled={isLoading}
                onClick={() => {
                  setIsLoading(true);
                  signIn("github");
                  setTimeout(() => setIsLoading(false), 3000);
                }}>
                {isLoading ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Icons.gitHub className="mr-2 h-4 w-4" />
                )}{" "}
                GitHub
              </Button>
            </div>

            {/* <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary">
                Privacy Policy
              </Link>
              .
            </p> */}
          </div>
        </div>
      </div>
    )
  );
}
