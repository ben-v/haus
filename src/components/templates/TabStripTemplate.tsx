import { useContext } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import {
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
} from "@material-tailwind/react";
import { THEMES, ThemeContext } from "../../contexts/ThemeContext";
import { BaseTemplateProps } from "./Template";

export interface TabTemplateProps extends BaseTemplateProps {
    title: string
}

export interface TabStripTemplateProps extends BaseTemplateProps {
    value: string;
    tabData: TabTemplateProps[];
}

const TabStripTemplate = (props: TabStripTemplateProps) => {
    const { theme, } = useContext(ThemeContext);

    const tabtheme = {
        tab: {
            styles: {
                base: {
                    indicator: {
                        bg: theme === THEMES.DARK ? "bg-gray-700" : "bg-white"
                    },
                },
            },
        }
    };

    return (
        <Tabs id={props.id} value={props.value} className="tab-strip">
            <ThemeProvider value={tabtheme}>
                <TabsHeader className="tab-strip-header">
                    {props.tabData.map(({ title, id }) => (
                        <Tab key={id} value={id} className="tab-strip-header-tab container-header-text">{title}</Tab>
                    ))}
                </TabsHeader>
            </ThemeProvider>
            <TabsBody animate={{ initial: { y: 250 }, mount: { y: 0 }, unmount: { y: 250 } }} className="tab-strip-body">
                {props.tabData.map(({ id, children }) => (
                    <TabPanel key={id} value={id} className="tab-strip-body-panel">
                        {children}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    )
}

export default TabStripTemplate
