import { useEffect } from "react";

import PageContainer from "../../components/layouts/PageContainer"
import PageHeader from "../../components/layouts/PageHeader"
import ContentBackground from "../../components/effects/ContentBackground";

const WorkRequestPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.setAttribute("clienthub_id", "96f9f173-4904-4f62-94b1-2f43695ff40e");
    script.setAttribute("form_url", "https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/public/work_request/embedded_work_request_form");
    document.body.appendChild(script);
  }, []);

  return (
    <PageContainer id="work-request">
      <PageHeader titlePartA="New" titlePartB=" Work Request" />
      <div className="relative">
        <ContentBackground />
        <div id="96f9f173-4904-4f62-94b1-2f43695ff40e" className="relative" />

        <link rel="stylesheet" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" media="screen" />
      </div>
    </PageContainer>
  )
}

export default WorkRequestPage