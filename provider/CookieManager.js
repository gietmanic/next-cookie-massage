'use client'
import {GoogleAnalytics,GoogleTagManager} from "@next/third-parties/google";
import useLocalStorage from "use-local-storage";



const CookieManager = ({GTag,GAnalytics}) => {
    const [localConsent, setLocalConsent] = useLocalStorage<boolean>("localConsent",false);

    if(GTag === undefined){

        return (
            <>
                <GoogleAnalytics gaId={GAnalytics} />
            </>
        )
    }
    if(GAnalytics === undefined){
        return (
            <>
                <GoogleTagManager gaId={GTag} />
            </>
        )
    }
    if(GAnalytics !== undefined && GTag !== undefined){
        return (
            <>
                <GoogleTagManager gaId={GTag} />
                <GoogleAnalytics gaId={GAnalytics} />
            </>
        )
    }





    if (localConsent) {
        return(
            <>
                <GoogleTagManager gtmId="GTM-N946GVBR" />
            <GoogleAnalytics gaId="G-T5X8CBXDK8" />
                </>
        )
    }

}

export default CookieManager;