import Newproj from "@/components/newproj"
import {db} from "@/db"
import { projects } from "@/db/schema"
import { eq } from "drizzle-orm";
import ProjectList from "./projects-list";


export default async function page() {
  const allprojects=await db.select().from(projects);
     
  return (
    <div>
    <Newproj></Newproj> 
    <h1 className="text-3xl text-center font bold ">Your Projects</h1>
    <ProjectList projects={allprojects}></ProjectList>
    
    </div>
  )
}


