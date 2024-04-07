const Request = () => {
    const clientHubIdAttribute = {"clienthub_id" : "96f9f173-4904-4f62-94b1-2f43695ff40e"};
    const formUrlAttribute = {"form_url" : "https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/public/work_request/embedded_work_request_form"};

    return (
      <section id="work-request" className="py-32 sm:pt-32 md:pt-32 lg:pt-32">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
          <div className="relative z-10 text-start md:mx-auto md:w-5/6 lg:w-4/6">
            <h1 className="relative text-start text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">Work Request</h1>
          </div>
  
          <div className="mt-12 grid gap-12 sm:mx-auto sm:max-w-lg lg:max-w-max lg:grid-cols-2">
            <div className="relative">
                <div className="absolute inset-0 hidden scale-105 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/80"></div>
                <div className="relative">
                    <div id="96f9f173-4904-4f62-94b1-2f43695ff40e"></div>
                    <link rel="stylesheet" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" media="screen" />
                    <script 
                      src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js"
                      {...clientHubIdAttribute}
                      {...formUrlAttribute}
                    >
                    </script>                   
                </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Request