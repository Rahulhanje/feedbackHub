import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Plus } from "lucide-react";
import { createProject } from "@/actions/createProject";
import SubmitButton from "./submitproj";

const Newproj = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-full right-0">
            <Plus className="w-4 h-4 mr-2"></Plus>New Project
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] rounded-md">
          <DialogHeader>
            <DialogTitle>New Project</DialogTitle>
            <DialogDescription>
              Create a new project to get started
            </DialogDescription>
          </DialogHeader>
          <form className="flex gap-4 flex-col" action={createProject}>
            <div className=" grid sm:grid-cols-2 gap-4">
              <div className="flex-flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Project Name" />
              </div>
              <div className="flex-flex-col gap-2">
                <Label htmlFor="URL">URL</Label>
                <Input id="url" name="url" placeholder="https://example.com" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Description(optional)"
              ></Textarea>
            </div>
            <SubmitButton></SubmitButton>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Newproj;
