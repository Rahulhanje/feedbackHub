import React from "react";
import { InferSelectModel } from "drizzle-orm";
type Project = InferSelectModel<typeof projects>;

type Props = {
  projects: Project[];
};
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { projects } from "@/db/schema";
import { Button } from "@/components/ui/button";
import SubscribeBtn from "../payments/subscribe-btn";
import { monthlyPlanId } from "@/lib/payments";
import { Lock } from "lucide-react";

const ProjectList = (props: Props) => {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-3 m-5 p-4 gap-4">
        {props.projects.map((project: Project) => (
          <li key={project.id}>
            <Card className="max-w-[350px] flex flex-col h-full">
              <CardHeader className="flex-1">
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`/projects/${project.id}`}>
                  <Button>View Project</Button>
                </Link>
              </CardFooter>
            </Card>
          </li>
        ))}
        <Card className="max-w-[350px] flex flex-col h-full  bg-gray-300">
          <CardHeader className="flex-1">
            <CardTitle className="flex-flex-row"><Lock className="h-8 w-8 mr-2"></Lock>Upgrade to Premium</CardTitle>
            <CardDescription>Unlock unlimited projects</CardDescription>
          </CardHeader>
          <SubscribeBtn price={monthlyPlanId}></SubscribeBtn>
        </Card>
      </ul>
    </div>
  );
};

export default ProjectList;
