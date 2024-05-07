import { useContext } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import {
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
} from "@material-tailwind/react";
import { THEMES, ThemeContext } from "../contexts/ThemeContext";
import { BaseTemplateProps } from "./Template";

export interface TabTemplateProps extends BaseTemplateProps {
    key: string;
    title: string;
}

export interface TabStripTemplateProps extends BaseTemplateProps {
    defaultTabKey: string;
    tabData: TabTemplateProps[];
}

const TabStripTemplate = (props: TabStripTemplateProps) => {
    const { theme } = useContext(ThemeContext);

    const tabHeadertheme = {
        tab: {
            styles: {
                base: {
                    indicator: {
                        bg: theme === THEMES.DARK ? "bg-gray-700" : "bg-white",
                    },
                },
            },
        },
    };

    const tabPanelTheme = {
        tabPanel: {
            styles: {
                base: {
                    color: theme === THEMES.DARK ? "text-slate-100" : "text-slate-700",
                    fontFamily: "Urbanist",
                    fontSize: "text-base",
                    fontWeight: "font-normal",
                },
            },
        },
    };

    return (
        <Tabs id={props.id} value={props.defaultTabKey} className="tab-strip">
            <ThemeProvider value={tabHeadertheme}>
                <TabsHeader className="tab-strip-header">
                    {props.tabData.map(({ title, key }) => (
                        <Tab key={key} value={key} className="tab-strip-header-tab">
                            {title}
                        </Tab>
                    ))}
                </TabsHeader>
            </ThemeProvider>
            <TabsBody
                animate={{ initial: { y: 250 }, mount: { y: 0 }, unmount: { y: 250 } }}
                className="tab-strip-body"
            >
                {props.tabData.map(({ key, children }) => (
                    <ThemeProvider value={tabPanelTheme}>
                        <TabPanel key={key} value={key} className="tab-strip-body-panel">
                            {children}
                        </TabPanel>
                    </ThemeProvider>
                ))}
            </TabsBody>
        </Tabs>
    );
};

export default TabStripTemplate;
