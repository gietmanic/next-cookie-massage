'use client'
import {GoogleAnalytics,GoogleTagManager} from "@next/third-parties/google";
import useLocalStorage from "use-local-storage";



const CookieManager = ({GTag,GAnalytics}) => {
    const [localConsent, setLocalConsent] = useLocalStorage("localConsent",false);

    return(
        <>
            {GAnalytics && <GoogleAnalytics gaId={GAnalytics} />}
            {GTag && <GoogleTagManager gaId={GTag} />}
        </>
    )
}


CookieManager.defaultProps = {
    GTag: undefined,
    GAnalytics: undefined,
};

export default CookieManager;