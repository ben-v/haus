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
import { PropsBase } from "../PropsBase";

export interface TabTemplateProps extends PropsBase {
    key: string;
    title: string;
}

export interface TabStripTemplateProps extends PropsBase {
    defaultTabKey: string;
    tabData: TabTemplateProps[];
}

const TabStripContainer = (props: TabStripTemplateProps) => {
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

export default TabStripContainer;
