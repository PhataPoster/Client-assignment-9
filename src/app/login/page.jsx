"use client";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import Logo from "../../assets/appointment.png";
import {
  button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { IconBase } from "react-icons";
import { toast } from "react-toastify";
import Image from "next/image";

export default function SignUpPage() {

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    const { data, error } = await authClient.signIn.email(

      {
        email,
        password,
        callbackURL: "/"
      },
    );
    console.log(data, error);
    if (error) {
      toast.error(`Login failed: ${error.message}`);
    }
    else {
      toast.success("Login successful!");
    }

  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    })
  }

  return (
    <div className="px-3 sm:px-0 mb-10">
      <Card className="border mx-auto w-115 py-10 mt-5">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 p-1 shadow-sm w-fit mx-auto">
                                <Image
                                  width={40}
                                  height={40}
                                  src={Logo}
                                  alt="doctor appointment logo"
                                  className="rounded-xl"
                                />
                              </div>
        <h1 className="text-center text-2xl font-bold">Log in</h1>

        <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <FieldError />
          </TextField>

          <div className="mt-4">
            <Button type="submit" className="w-full block">

              Log In
            </Button>

          </div>
          <div className="relative text-sm text-center border-t-2 my-2">
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
              or
            </span>
          </div>
          <Button onClick={handleGoogleSignIn} className="w-full" variant="tertiary">
            <Icon icon="devicon:google" />
            Sign in with Google
          </Button>
          <div className="text-sm text-center border-t-2 mt-4 p-4">have not an account? <Link className="text-blue-500 underline" href="/register">Register</Link></div>
        </Form>
      </Card>
    </div>
  );
}