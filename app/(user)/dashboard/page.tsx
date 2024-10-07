import Newproj from "@/components/newproj"
import {db} from "@/db"
import { projects } from "@/db/schema"
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import ProjectList from "./projects-list";
import { getSubscription } from "@/actions/userSubscriptions";
import { maxFreeProjects } from "@/lib/payments";
export default async function page() {
  const{userId}=auth();
  if(!userId){
    return null;
  }

  const userProjects = await db.select().from(projects).where(eq(projects.userId, userId));

  const subscribed = await getSubscription({ userId });

  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-3xl font-bold text-center my-4">Your Projects</h1>{subscribed !== true && userProjects.length > maxFreeProjects ? null : <Newproj />}
      </div>{!subscribed ?<ProjectList projects={userProjects} />:null }</div>
  )
}


