'use client'
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {CreditCard, Folder, Menu ,X} from 'lucide-react'
import { Button } from "./ui/button";
import Link from "next/link";
function Headermenu() {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(prevOpen => !prevOpen);
    }
  return (
    <div>
      <DropdownMenu open={open} onOpenChange={toggleMenu}>
      <DropdownMenuTrigger asChild>
        <Button onClick={toggleMenu} className="mr-4" variant="secondary">
          {
            open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />
          }
        </Button>
      </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Link href={'/dashboard'}><DropdownMenuItem><Folder className="mr-2 h-4 w-4"></Folder>Projects</DropdownMenuItem></Link>
          <Link href={'/payments'}><DropdownMenuItem><CreditCard className="mr-2 h-4 w-4" />Billing</DropdownMenuItem></Link>

        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Headermenu;
