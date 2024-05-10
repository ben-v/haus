import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";

// NOTE: In order to get the components to work from Material-Tailwind, had to downgrade to React 18.2.42. 
// For more info see https://stackoverflow.com/questions/78296875/typescript-error-using-material-tailwind-react-with-nextjs14

import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import AccordionContainer, { AccordionItem } from "../../../components/containers/AccordionContainer";
import { ReactNode } from "react";

const serviceData: { serviceGroup: string, serviceGroupDetails: string[] }[] = [
  {
    serviceGroup: "General ​Carpentry",
    serviceGroupDetails: [
      "Fence & Gate Repair",
      "Deck & Patio Repair",
      "Interior Woodwork, Trim, Baseboards, Handrails, etc.",
      "Closet Shelving All Types"
    ]
  },
  {
    serviceGroup: "Walls & Floors",
    serviceGroupDetails: [
      "Picture & Mirror Hanging",
      "TV & Fixture Wall-Mounting",
      "Curtain Rods",
      "Blinds",
      "Shelving",
      "Closet Installation",
      "Nail Hole Repair",
    ]
  },
  {
    serviceGroup: "​Bathrooms",
    serviceGroupDetails: [
      "Ventilation Fan Repair",
      "Tub Caulking Removal & Replacement",
      "Vanity & Sink Install & Repair",
      "Medicine Cabinet Install",
      "Shower Curtain Rod Install",
      "Replace GFCI Outlets",
      "Light Fixture Install & Replacement"
    ]
  },
  {
    serviceGroup: "Kitchens",
    serviceGroupDetails: [
      "Faucet Install",
      "Garbage Disposal Install & Replacement",
      "Insta Hot & Water Filtration Systems",
      "Hinge & Drawer Slider Replacements",
      "Light Appliance Repairs",
      "Light Fixture Install & Replacements",
      "GFCI Outlet Install",
      "Cabinet Knob/Handle Install"
    ]
  },
  {
    serviceGroup: "Home Offices & Guest Rooms",
    serviceGroupDetails: [
      "Workspace Maintenance",
      "Keyboard Trays",
      "Ergonomic Computer Desks",
      "Shelving",
      "White Boards & Bulletin Boards"
    ]
  },
  {
    serviceGroup: "​Technology",
    serviceGroupDetails: [
      "Smart Device Setup & Replacement",
      "System Updates",
      "Printer Setup & Troubleshooting",
      "Network Setup & Troubleshooting",
      "Computer, Phone, Tablet Setup & Troubleshooting",
      "Workspace Wiring Organization",
      "Router Wiring Organization",
      "Media Center Wiring Organization"
    ]
  },
  {
    serviceGroup: "Miscellaneous",
    serviceGroupDetails: [
      "Prepping Rental/Vacation Home for the Coming Season",
      "Garage Storage & Organization",
      "Furniture Repair & Assembly",
      "Smoke & Carbon Dioxide/Monoxide Detectors",
      "Portable A/C or Window A/C Installs",
      "Pressure Washing",
      "Dryer Vent Clean-Out",
      "Emergency Services (On Case-By-Case Basis)"
    ]
  },
];

const createHtmlList = (items: string[]):ReactNode => {
  return(
    <ul className="body-text tabpanel-text list-disc mx-8">
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

const ServicesDetailPanel = () => {
  let servicesAccordianList: AccordionItem[] = [];

  serviceData.map((service) => {
    servicesAccordianList.push(
      {
        title: service.serviceGroup,
        children: createHtmlList(service.serviceGroupDetails)
      }
    );
  })
  
  return (
    <ContentSectionContainer flexDirection="Center" containerClassNames="items-start">
      <RoundCornerContainer padding="Small" containerClassNames="w-full">
        <AccordionContainer items={servicesAccordianList} />
      </RoundCornerContainer>
    </ContentSectionContainer>
  );
}

export default ServicesDetailPanel
