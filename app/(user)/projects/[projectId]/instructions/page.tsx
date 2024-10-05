import CopyBtn from "@/components/copy-btn";
import React from "react";
const Page = ({ params }: { params: { projectId: string } }) => {
  
  if(!params.projectId ) return(<div>
    Invalid Project ID
  </div>)
  
  // if(!process.env.widget.umd.js) return(<div>
  //    Missing Widget_URL
  //  </div>
  //  )
  
  return <div>
    <h1 className="font-bold text-xl mb-2">Start Collectiong the feedback</h1>
    <p className=" text-lg mb-2 text-secondary-foreground">Embed the code in out site</p>
   <div className="bg-blue-950 p-6 mt-2 rounded-md relative">
   <code className="text-white">
        {`<my-widget project-id=${params.projectId}></my-widget>`}
        <br></br>
        {`<script src="example.com"</script>`}
    </code>
    <CopyBtn text={`<my-widget project=${params.projectId}></my-widget>\n
       <script src="{example.com"</script>`}></CopyBtn>
   </div>
  </div>;
};

export default Page;
