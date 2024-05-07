import ContentIconContainer from "../../../components/containers/ContentIconContainer";
import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import SharpCornerClipContainer from "../../../components/containers/SharpCornerClipContainer";
import CardHeader from "../../../components/layouts/CardHeader";

import JpgExistingClientHub from "../../../../public/images/screenshots/client-hub.jpeg";
import SvgAddressBookSolid from "../../../components/images/icons/SvgAddressBookSolid";
import SvgArrowUpRightFromSquareSolid from "../../../components/images/icons/SvgArrowUpRightFromSquareSolid";
import ButtonLink from "../../../components/navigation/ButtonLink";
import { ICON_SIZES } from "../../../components/images/icons/IconConfig";
import SvgDevicesLight from "../../../components/images/icons/SvgDevicesLight";
import SvgDevicesDark from "../../../components/images/icons/SvgDevicesDark";
import { useContext } from "react";
import { ThemeContext, THEMES } from "../../../components/contexts/ThemeContext";
import StandardLink from "../../../components/navigation/StandardLink";
import { renderToString } from "react-dom/server";

const CurrentClientsPanel = () => {
    const { theme, } = useContext(ThemeContext);

    return (
        <ContentSectionContainer flexDirection="RTL">
            <div className="relative w-full md:w-1/2">
                <div className="relative flex flex-col gap-6">
                    <CardHeader
                        title="Client Hub Is For You!"
                        titleAlignment="Left"
                        childrenAlignment="Left"
                        childrenClassnames="tabpanel-text">
                        For our current clients, the <StandardLink url="https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login" isExternalRoute={true} target="_blank"><span className="font-semibold body-link">Client Hub</span></StandardLink> is a self-service, online platform that enables HAUS clients to approve quotes, check appointment details, pay invoices, print receipts, or request more work.
                    </CardHeader>
                    <div className="relative flex flex-col gap-6">
                        <ContentIconContainer
                            title="Convenient Tools..."
                            description={renderToString(<>The self serve <StandardLink url="https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login" isExternalRoute={true} target="_blank"><span className="font-semibold body-link">Client Hub</span></StandardLink> is available from your phone, tablet or desktop PC.</>)}
                            childrenClassnames="tabpanel-text">
                            {theme === THEMES.DARK ? <SvgDevicesDark width={ICON_SIZES.default.height} height={ICON_SIZES.default.height} /> : <SvgDevicesLight width={ICON_SIZES.default.height} height={ICON_SIZES.default.height} />}
                        </ContentIconContainer>

                        <ButtonLink
                            url="https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login"
                            target="_blank"
                            isExternalRoute={true}
                            prefixIcon={<SvgAddressBookSolid />}
                            suffixIcon={<SvgArrowUpRightFromSquareSolid />}
                            suffixIconSize={ICON_SIZES["2xs"]}
                            prefixIconFill={theme === THEMES.DARK ? "#1e293b" : "white"}
                            suffixIconFill={theme === THEMES.DARK ? "#1e293b" : "white"}>Client Hub</ButtonLink>
                    </div>
                </div>
            </div>
            <div className="relative w-full md:w-1/2">
                <div className="w-full flex flex-col items-center mt-6 md:mt-4">
                    <SharpCornerClipContainer>
                        <img src={JpgExistingClientHub} className="mx-auto h-80 w-96 rounded-t-3xl border border-gray-300/100 object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="client hub screenshot" width="850" height="1780" />
                    </SharpCornerClipContainer>
                </div>
            </div>
        </ContentSectionContainer>
    )
}

export default CurrentClientsPanel
