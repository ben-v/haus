import SvgArrowUpRightFromSquareSolid from "../images/icons/SvgArrowUpRightFromSquareSolid";
import SvgLogo from "../images/SvgLogo";

import { NavLinkGroup } from "../navigation/NavLinkProps";
import StandardLink from "../navigation/StandardLink";
import { ICON_SIZES } from "../images/icons/IconConfig";
import SocialProfileLink, { SocialPlatforms } from "../navigation/SocialProfileLink";
import { logClickAction } from "../analytics/GA";

const sectionLinkGroups: NavLinkGroup[] = [
  {
    title: "Company",
    links: [
      // { children: "Clients", url: "clients", isExternalRoute: false },
      { children: "Services", url: "services", isExternalRoute: false },
      { children: "Service Area", url: "service-area", isExternalRoute: false },
      { children: "FAQs", url: "faqs", isExternalRoute: false },
      { children: "Contact", url: "contact", isExternalRoute: false }
    ]
  },
  // {
  //   title: "Client Tools",
  //   links: [
  //     { children: "Work Request", url: "work-request", isExternalRoute: false },
  //     { children: "Client Hub", url: "https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login", target: "_blank", isExternalRoute: true }
  //   ]
  // },
  {
    title: "Resources",
    links: [
      { children: "Privacy Policy", url: "privacy", isExternalRoute: false },
      { children: "Terms & Conditions", url: "terms", isExternalRoute: false },
      // { children: "Partners", url: "partners", isExternalRoute: false },
    ]
  }
];

const Footer = () => {
  const logClick = (label: string | undefined) => {
    if (label) {
      logClickAction("Footer Navigation", label);
    }
  };
  
  return (
    <footer className="border-t border-gray-100 pt-4 md:pt-8 pb-8 px-4 dark:border-gray-800">
        <div className="text-sm m-auto text-gray-600 dark:text-gray-400 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="grid grid-cols-8 gap-6 md:gap-0">
            <div className="col-span-8 md:col-span-2 lg:col-span-3">
              <div className="flex h-full items-start justify-between gap-6 border-b border-white py-6 dark:border-gray-800 md:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-0">
                <div>
                  <StandardLink url="/" aria-label="HAUS Property Services Logo" className="flex items-center" onClick={() => logClick("Logo")}>
                    <SvgLogo fill="currentColor" className="bi bi-logo h-8 w-auto" />
                  </StandardLink>
                  <p className='pt-5 footer-text'>HAUS Property Services</p>
                  <p className="footer-text">A Bozeman, Montana Company.</p>
                </div>

                <div className="inline-flex gap-3 pt-2">
                  <SocialProfileLink platform={SocialPlatforms.GOOGLE} iconSize={ICON_SIZES.md} useGenericIcon={true} genericIconFill="currentColor" onClick={() => logClick(SocialPlatforms.GOOGLE)}/>
                  <SocialProfileLink platform={SocialPlatforms.FACEBOOK} iconSize={ICON_SIZES.md} useGenericIcon={true}  genericIconFill="currentColor" onClick={() => logClick(SocialPlatforms.FACEBOOK)}/>
                  <SocialProfileLink platform={SocialPlatforms.INSTAGRAM} iconSize={ICON_SIZES.md} useGenericIcon={true}  genericIconFill="currentColor" onClick={() => logClick(SocialPlatforms.INSTAGRAM)}/>
                  <SocialProfileLink platform={SocialPlatforms.YELP} iconSize={ICON_SIZES.md} useGenericIcon={true}  genericIconFill="currentColor" onClick={() => logClick(SocialPlatforms.YELP)}/>
                </div>
              </div>
            </div>
            <div className="col-span-8 md:col-span-6 lg:col-span-5">
              <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:pl-16">
                {sectionLinkGroups.map((section, index) => (
                  <div key={index}>
                    <h2 className="footer-header-text">{section.title}</h2>
                    <ul className="mt-3 list-inside space-y-2">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <StandardLink url={link.url} target={link.target === undefined ? "_self" : link.target} className="footer-link-text" isExternalRoute={link.isExternalRoute} onClick={() => logClick(link.url)}>
                            <div className="inline-flex items-center justify-left">
                              <div>
                                {link.children}
                              </div>
                              {link.target === "_blank" ? <div className="pl-2"><SvgArrowUpRightFromSquareSolid width={ICON_SIZES["2xs"].width} height={ICON_SIZES["2xs"].height} fill="currentColor" /></div> : ""}
                            </div>
                          </StandardLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex justify-between md:pl-16">
                <span className="footer-text">Copyright &copy; {(new Date()).getFullYear()} HAUS Property Services</span>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer