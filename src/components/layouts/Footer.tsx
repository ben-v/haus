import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link";

import DynamicImageManager from "../../managers/DynamicImageManager";

const sectionLinkGroups: NavLinkGroup[] = [
  {
    title: "Company",
    links: [
      { label: "Clients", url: "#" },
      { label: "Services", url: "#" },
      { label: "Service Area", url: "#" },
      { label: "FAQs", url: "#" },
      { label: "Contact", url: "/contact/#" }
    ]
  },
  {
    title: "Client Tools",
    links: [
      { label: "New Client Work Request", url: "/request/#" },
      { label: "Existing Client Hub", url: "https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login", target: "_blank" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Privacy Policy", url: "/privacy/#" },
      { label: "Terms & Conditions", url: "/terms/#" },
      { label: "Partners", url: "/partners/#" },
    ]
  }
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 pt-10 pb-8 dark:border-gray-800">
      <div>
        <div className="m-auto space-y-8 px-4 text-gray-600 dark:text-gray-400 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="grid grid-cols-8 gap-6 md:gap-0">
            <div className="col-span-8 md:col-span-2 lg:col-span-3">
              <div className="flex h-full items-start justify-between gap-6 border-b border-white py-6 dark:border-gray-800 md:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-0">
                <div className='text-sm'>
                  <HashLink to="/#" smooth aria-label="HAUS Property Services Logo" className="flex items-center">
                    {DynamicImageManager.Logo(undefined, "h-8")}
                  </HashLink>
                  <p className='pt-5'>HAUS Property Services</p>
                  <p>A Bozeman, Montana Company.</p>
                </div>

                <div className="flex gap-6 pt-2">
                  <Link to="https://www.facebook.com/haus.property.svcs" target="_blank" aria-label="facebook">
                    <span className="sr-only">Facebook</span>
                    {DynamicImageManager.Facebook()}
                  </Link>
                  <Link to="https://www.instagram.com/haus.property.svcs" target="_blank" aria-label="instagram">
                    <span className="sr-only">Instagram</span>
                    {DynamicImageManager.Instagram()}
                  </Link>
                  <Link to="https://www.yelp.com/biz/haus-property-services-bozeman" target="_blank" aria-label="yelp">
                    <span className="sr-only">Yelp</span>
                    {DynamicImageManager.Yelp()}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-8 md:col-span-6 lg:col-span-5">
              <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:pl-16">
                {sectionLinkGroups.map((section, index) => (
                  <div key={index}>
                    <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">{section.title}</h2>
                    <ul className="mt-4 list-inside space-y-4">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <HashLink to={link.url} target={link.target === undefined ? "_self" : link.target} smooth className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                            <div className="inline-flex items-center justify-left">
                              <div>
                                {link.label}
                              </div>
                              <div className="pl-2">
                                {link.target === "_blank" ? DynamicImageManager.ExternalLink() : ""}
                              </div>
                            </div>
                          </HashLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm md:pl-16">
                <span>Copyright &copy; HAUS Property Services {(new Date()).getFullYear()}.</span>
                <span>All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer