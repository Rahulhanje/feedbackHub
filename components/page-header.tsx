import {
  SignInButton,
  SignedIn,
  SignUpButton,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "./ui/button";
import Headermenu from "./headermenu";
const Pageheader = () => {
  return (
    <header className=" w-full sticky inset-x-0 top-0 z-50 border backdrop-blur-lg bg-white/60 border-white/30">
      <div className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto">
        <div className="flex h-14 items-center justify-between px-2 mr-5">
          <Image src="/LOGO.png" alt="logo" width="300" height="250" />

          <div>
            <SignedOut>
              <div className="flex mr-5">
                <SignInButton>
                  <Button className="">Sign In</Button>
                </SignInButton>
                <SignUpButton>
                  <Button className="ml-2">Sign Up</Button>
                </SignUpButton>
              </div>
            </SignedOut>
            <SignedIn>
              <div className="flex">
                <Headermenu />
                <UserButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Pageheader;
