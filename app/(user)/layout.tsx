import React, { Suspense } from "react";
import Loading from "./loading";

export default function UserLayout({children}:{children:React.ReactNode}){
    return (
        <div className="container w-full max-w-screen-xl mx-auto py-10">
          <Suspense fallback={<Loading/>}>  {children}</Suspense>
        </div>
    )
}
