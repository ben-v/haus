
import ReactGA from 'react-ga4';
import generateClientIdGa from './GenerateClientIdGa';

export const initGoogleAnalytics = () => {
    const trackingId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (!trackingId) console.warn("No tracking id is found for Google Analytics")

    ReactGA.initialize([
        {
            trackingId,
            gaOptions: {
                anonymizeIp: true,
                clientId: generateClientIdGa(),
                cookieFlags: "SameSite=None;Secure"
            }
        }
    ]);
}

export const logPageView = (page: string, title: string) => {
    ReactGA.send({ 
        hitType: "pageview", 
        page: page, 
        title: title
    });
}

export const logClickAction = (category: string, label: string) => {
    ReactGA.event({
        category: category,
        action: "Click",
        label: label,
    });
};
