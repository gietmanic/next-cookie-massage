'use client'
const {GoogleAnalytics,GoogleTagManager} =  require("@next/third-parties/google");
const useLocalStorage =  require("use-local-storage");



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