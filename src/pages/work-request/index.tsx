import { useEffect } from "react";

import PageContainer from "../../components/layouts/PageContainer";

const workRequestForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.setAttribute("clienthub_id", "96f9f173-4904-4f62-94b1-2f43695ff40e");
    script.setAttribute("form_url", "https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/public/work_request/embedded_work_request_form");
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div id="96f9f173-4904-4f62-94b1-2f43695ff40e" className="w-full lg:w-[100vh]" />

      <link rel="stylesheet" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" media="screen" />
    </>
  )
};

const WorkRequestPage = () => {
  return (
    <PageContainer
      id="work-request"
      titlePartA="New"
      titlePartB=" Work Request"
      showContentBackground={false}
      description="An easy way to get started, is to send us a new work request. Once received, we will review and follow up with you regarding next steps.">
        {workRequestForm()}
      </PageContainer>
  )
}

export default WorkRequestPage