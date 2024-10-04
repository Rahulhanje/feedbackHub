"use client";
import { Copy } from "lucide-react"
import { useState } from "react"




const CopyBtn = ({text}:{text:string}) => {
    const[iscopy,setIscopy]=useState(false);
    const copyToclipboard=(text:string)=>{
        navigator.clipboard.writeText(text).then(()=>{
            setIscopy(true);
            console.log("Copied To Clipboard")

            setTimeout(()=>setIscopy(false),3500);
        })

    }
  return (
    <div>
      <button onClick={()=>copyToclipboard(text)} className="text-slate-50 absolute right-0 text-center p-5 top-0"><Copy/>{iscopy?" Copied" : "copy"}</button>
    </div>
  )
}

export default CopyBtn;
