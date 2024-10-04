'use client'

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button"
import { useFormStatus } from "react-dom"

const SubmitButton = () => {
  const {pending} =useFormStatus();
    return (
    <div>
      <Button className="w-full" type="submit">{pending ? <Loader2 className="mr-2 h-4 w-4 anima"/>: "Create Project "}</Button>
    </div>
  )
}

export default SubmitButton
