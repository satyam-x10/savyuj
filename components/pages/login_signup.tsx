/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/SGKCb5PNgOH
 */
'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { use, useState } from "react"
import { log } from "console"

export function LoginSignup() {
  const [login, setLogin] = useState(true);
  const [signup, setSignup] = useState(false);
  const handleLogin = () => {
    if (login) {
      setLogin(false);
      setSignup(true);
    }
    else {
      setLogin(true);
      setSignup(false);
    }
  }
  return (
    <div className="mt-[20vh] px-6">
      {login && <div className="mx-auto space-y-6 max-w-sm">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Lets Login</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your information to sign in</p>
        </div>
        <div className="space-y-2">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password </Label>
            <Input id="password" placeholder="ur password??" required type="password" />
          </div>
          <Separator className="my-8" />
          <Button className="w-full">Login</Button>
          <Separator className="my-8" />
          <Link className="flex items-center space-x-2 text-sm underline" href="/forgot_credentials">
            Forgot the Password ? Ok get a new one
            <ChevronRightIcon className="w-4 h-4" />
          </Link>
        </div>
        <Separator className="my-8" />
        <div className="space-y-2">
          <Button onClick={handleLogin} className="w-full">New ?? Create an account</Button>
        </div>

      </div>
      }
      {signup && <div className="mx-auto space-y-6 max-w-sm">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Still Not a Yuj?</h1>
          <p className="text-gray-500 dark:text-gray-400">Lets Hook u Up. Enter your details </p>
        </div>
        <div className="space-y-2">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <Label >Have a Nickname ? </Label>
            <Input placeholder="By default its ur name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Lets give u a Password</Label>
            <Input id="password" placeholder="Choose a good one ..." required type="password" />
          </div>

          <Separator className="my-8" />
          <Button className="w-full">Bring On...</Button>
        </div>
        <Separator className="my-8" />
        <div className="space-y-2">
          <Button onClick={handleLogin} className="w-1/2">Already Here? Login</Button>
        </div>
      </div>}

    </div>
  )
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}