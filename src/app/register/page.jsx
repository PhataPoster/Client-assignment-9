"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import Logo from "../../assets/appointment.png";
import {
  Button,
  button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";



export default function SignUpPage() {
    const router = useRouter();

    const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, image, email, password);
    const { data, error } = await authClient.signUp.email(
        
        {
            name,
            image,
            email,
            password
        },
    );
    console.log(data, error);
    if (data) {
        router.push("/login");
    }
    else{
        toast.error(`Sign up failed: ${error.message}`);
    }
};
 const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
        provider: "google",
    })
  }
  return (
    <div className="px-3 sm:px-0 mb-10">
      <Card className="border mx-auto w-115 py-3 mt-5">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 p-1 shadow-sm w-fit mx-auto">
                        <Image
                          width={40}
                          height={40}
                          src={Logo}
                          alt="doctor appointment logo"
                          className="rounded-xl"
                        />
                      </div>
      <h1 className="text-center text-2xl font-bold">Registration</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

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
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="mt-4">
          <Button type="submit" className="w-full block">
            
            Register
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
        <div className="text-sm text-center border-t-2 mt-4 p-4">Already have an account? <Link className="text-blue-500 underline" href="/login">Login</Link></div>
      </Form>
    </Card>
    </div>
  );
}