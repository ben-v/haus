import { useContext } from "react";
// import { Link } from "react-router-dom";

import { ThemeContext, THEMES } from "../../../contexts/ThemeContext";

import ContentIconContainer from "../../../components/containers/ContentIconContainer";
import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import SharpCornerClipContainer from "../../../components/containers/SharpCornerClipContainer";
import CardHeader from "../../../components/layouts/CardHeader";

import PngExistingClientHub from "../../../../public/images/screenshots/client-hub.png";
import SvgMobileScreenButtonSolid from "../../../components/images/icons/SvgMobileScreenButtonSolid";
import SvgAddressBookSolid from "../../../components/images/SvgAddressBookSolid";
import SvgArrowUpRightFromSquareSolid from "../../../components/images/SvgArrowUpRightFromSquareSolid";
import ButtonLink from "../../../components/buttons/ButtonLink";

const ExistingClientsPanel = () => {
    const { theme, } = useContext(ThemeContext);

    return (
        <ContentSectionContainer flexDirection="RTL">
            <div className="relative md:w-1/2 md:ml-16">
                <div className="relative flex flex-col gap-6">
                    <CardHeader
                        title="Existing clients, the client hub is for you!"
                        titleAlignment="Left"
                        descriptionAlignment="Left">
                            The client hub is a self-serve, online experience that allows HAUS clients to approve quotes, check appointment details, pay invoices, print receipts, or request more work—all in one place.
                        </CardHeader>
                    <div className="relative flex flex-col gap-6">
                        <ContentIconContainer
                            title="Convenient Tools..."
                            description="The self serve client hub is available from your phone, tablet or desktop PC.">
                            <SvgMobileScreenButtonSolid fill={theme === THEMES.DARK ? 'white' : 'dark'} className="m-auto w-auto" width={40} height={48} />
                        </ContentIconContainer>

                        <ButtonLink
                            url="https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login"
                            target="_blank"
                            prefixIcon={<SvgAddressBookSolid />}
                            suffixIcon={<SvgArrowUpRightFromSquareSolid />}
                            suffixIconHeight={12}
                            suffixIconWidth={12} 
                            title="Client Hub" />
                    </div>
                </div>
            </div>
            <SharpCornerClipContainer>
                <img src={PngExistingClientHub} className="mx-auto h-80 w-96 rounded-t-3xl border border-gray-300/100 object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="client hub screenshot" width="850" height="1780" />
            </SharpCornerClipContainer>
        </ContentSectionContainer>
    )
}

export default ExistingClientsPanel
