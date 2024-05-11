import { ReactNode, useContext } from "react";
import { ICON_SIZES } from "../images/icons/IconConfig";
import SvgChevronDownSolid from "../images/icons/SvgChevronDownSolid";
import { Accordion, AccordionHeader, AccordionBody, ThemeProvider } from "@material-tailwind/react";
import React from "react";
import { THEMES, ThemeContext } from "../contexts/ThemeContext";
import { logClickAction } from "../analytics/GA";

export interface AccordionItem {
    title: string,
    children: ReactNode
}

export interface AccordionProps {
    items: AccordionItem[],
    source: string
}

const AccordionContainer = (props: AccordionProps) => {
    const { theme, } = useContext(ThemeContext);
    const [isOpen, setOpen] = React.useState(-1);

    const handleOpen = (value: number, label: string) => {
        setOpen(isOpen === value ? -1 : value);
        logClickAction(`Accordion - ${props.source}`, label);
    }

    const accordionTheme = {
        accordion: {
            styles: {
                base: {
                    header: {
                        initial: {
                            color: theme === THEMES.DARK ? "!text-gray-100" : "!text-gray-700",
                            py: "py-2",
                            borderWidth: "border-0",
                        },
                    },
                    body: {
                        py: "py-0",
                        color: theme === THEMES.DARK ? "!text-gray-300" : "!text-gray-600",
                    }
                },
            },
        }
    };

    return (
        <>
            {props.items.map((item, index) => (
                <Accordion
                    open={isOpen === index}
                    icon={
                        <span className={`flex h-7 items-center expandable-item-header transform duration-300 ${index === isOpen ? "rotate-180" : "rotate-0"}`}>
                            <SvgChevronDownSolid width={ICON_SIZES.sm.width} height={ICON_SIZES.sm.height} fill="currentColor" />
                        </span>
                    }>
                    <ThemeProvider value={accordionTheme}>
                        <AccordionHeader onClick={() => handleOpen(index, item.title)} className="expandable-item-header">{item.title}</AccordionHeader>
                        <AccordionBody className="expandable-item-detail">
                            {item.children}
                        </AccordionBody>
                    </ThemeProvider>
                </Accordion>
            ))}
        </>
    );
}

export default AccordionContainer;