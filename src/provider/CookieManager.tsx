'use client'
import React from "react";
import useLocalStorage from "use-local-storage";
import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google";

const CookieManager = ({GTag,GAnalytics}:{GTag: string,GAnalytics:string}) => {
    const [localConsent, setLocalConsent] = useLocalStorage<boolean>("localConsent",false);

    return(
        <>
            {GAnalytics && <GoogleAnalytics gaId={GAnalytics} />}
            {/*@ts-ignore*/}
            {GTag && <GoogleTagManager gaId={GTag} />}
        </>
    )
}


CookieManager.defaultProps = {
    GTag: undefined,
    GAnalytics: undefined,
};

export default CookieManager;