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
import { logClickAction } from "../analytics/GA";

export interface TabProps extends PropsBase {
    key: string;
    title: string;
}

export interface TabStripProps extends PropsBase {
    source: string,
    defaultTabKey: string;
    tabData: TabProps[];
}

const TabStripContainer = (props: TabStripProps) => {
    const { theme } = useContext(ThemeContext);

    const logClick = (label: string | undefined) => {
        if (label) {
            logClickAction(`Tab Strip - ${props.source}`, label);
        }
      };
    
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
                        <Tab key={key} value={key} className="tab-strip-header-tab" onClick={() => {logClick(title)}}>
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
