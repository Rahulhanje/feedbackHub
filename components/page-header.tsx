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
    <header className="sticky inset-x-0 top-0 z-30 border">
      <div className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto">
        <div className="flex h-14 items-center justify-between px-2">
          {/* <Image src="/logo.png" alt="logo" ></Image> */}
          <h1>LOGO</h1>
          <div>
            <SignedOut>
              <SignInButton>
                <Button className="">Sign In </Button>
              </SignInButton>
              <SignUpButton>
                <Button className="ml-2">Sign Up </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
             <div className="flex"> <Headermenu />
             <UserButton /></div>
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Pageheader;
