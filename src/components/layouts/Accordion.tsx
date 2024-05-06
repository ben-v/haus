import { ReactNode, useRef, useState } from "react";
import { ICON_SIZES } from "../images/icons/IconConfig";
import StandardLink from "../navigation/StandardLink";
import SvgChevronDownSolid from "../images/icons/SvgChevronDownSolid";

export interface AccordionItem {
    title: string,
    children: ReactNode
}

export interface AccordionProps {
    items: AccordionItem[]
}

const Accordion = (props: AccordionProps) => {
    const [currentExpandedItem, setCurrentExpandedItem] = useState<string | null>();
    let currentExpandedItemBodyRef = useRef<HTMLDivElement>(null);

    const expandItemClickHandler = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const value: string | null = e.currentTarget.getAttribute('data-value');

        // If the value of the element initiating the event is the same of the current expanded item, just close it by setting current to null,
        // otherwise, open it, but setting current to new value.
        setCurrentExpandedItem(value === currentExpandedItem ? null : value);
    }

    return (
        <>
            {props.items.map((item, index) => (
                <div className="divide-y">
                    <div>
                        <dl>
                            <dt>
                                <StandardLink aria-controls={item.title} onClick={expandItemClickHandler} data-value={`${index}`}>
                                    <div className="flex w-full items-start justify-between py-1 expandable-container">
                                        <span className="body-text tabpanel-text w-full expandable-item-header">{item.title}</span>
                                        <span className={`flex h-7 items-center expandable-item-header transform duration-300 ${currentExpandedItem === `${index}` ? "rotate-180" : "rotate-0"}`}>
                                            <SvgChevronDownSolid width={ICON_SIZES.sm.width} height={ICON_SIZES.sm.height} fill="currentColor" />
                                        </span>
                                    </div>
                                </StandardLink>
                            </dt>
                            <dd>
                                <div ref={currentExpandedItemBodyRef} className="block overflow-hidden duration-300 ease-in-out expandable-item-detail" style={{
                                    // Not getting the right scrollHeight for a div (such as a faq)...and does not display entire content. 
                                    // For now, comment out and use 'fit-content'; works but the east-in-out animation does not work.
                                    // maxHeight: currentExpandedItem === `${index}` ? `${currentExpandedItemBodyRef.current?.scrollHeight}px` : "0px"
                                    maxHeight: currentExpandedItem === `${index}` ? "fit-content" : "0px"
                                }}>
                                    {item.children}
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Accordion;