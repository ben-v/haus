
import ReactGA from 'react-ga4';
import generateClientIdGa from './GenerateClientIdGa';

export const initGoogleAnalytics = () => {
    // If anything other than true, do not log analytics
    if (import.meta.env.VITE_GA_ENABLED != "true") {
        console.log("Analytics disabled.")
        return;
    }

    const trackingId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (!trackingId) {
        console.warn("No tracking id is found for Google Analytics")
    }

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
    // If anything other than true, do not log analytics
    if (import.meta.env.VITE_GA_ENABLED != "true") {
        return;
    }

    ReactGA.send({
        hitType: "pageview",
        page: page,
        title: title
    });
}

export const logClickAction = (category: string, label: string) => {
    // If anything other than true, do not log analytics
    if (import.meta.env.VITE_GA_ENABLED != "true") {
        return;
    }

    ReactGA.event({
        category: category,
        action: "Click",
        label: label,
    });
};
