import { Button } from "@/components/ui/button";

import Image from "next/image";
import { redirect } from "next/navigation";
import LandingPage from "./landingpage";
import Footer from "./landingpage/footer";

export default function Home() {
  return (
    <main className="flex min-h—screen flex—col items—center justify-between p—24">
    <LandingPage></LandingPage>
    </main>
  );
}
