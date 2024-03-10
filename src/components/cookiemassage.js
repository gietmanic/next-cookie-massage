"use client"
const Link =  require("next/link");
const {useEffect, useState} =  require("react");
const { useRouter } =  require("next/navigation");
const useLocalStorage =  require("use-local-storage");



const CookieMassage = ({datenschutzlink}) => {
    const router = useRouter()
    const [showConsent, setShowConsent] = useState(true);
    const [localConsent, setLocalConsent] = useLocalStorage("localConsent",false);

    const deleteAllCookies = () => {
        document.cookie.split(";").forEach(function(c) {
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
        });
    };

    useEffect(() => {
        setShowConsent(localConsent)
    }, [localConsent, setLocalConsent]);

    const acceptCookie = () => {
        setShowConsent(true)
        setLocalConsent(true)
        router.refresh();
        router.replace(window.location.pathname);
    }

    const resetCookie = () => {
        setShowConsent(true)
        setLocalConsent(false)
        router.refresh();
        router.replace(window.location.pathname);
    }

    const declineCookie = () => {
        setShowConsent(true)
        setLocalConsent(false)
        deleteAllCookies();
        router.refresh();
        router.replace(window.location.pathname);
    }

    if (showConsent) {
        return (
            <div style={{"position":"fixed","right":"0","left":"0","bottom":"0","zIndex":50,"paddingLeft":"1.5rem","paddingRight":"1.5rem","paddingBottom":"0.5rem","pointerEvents":"none"}}>
                <div style={{"backgroundColor":"#ffffff","padding":"0.75rem","borderRadius":"0.75rem","boxShadow":["var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)","0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"],"width":"fit-content","pointerEvents":"auto"}}>
                    <button
                        type="button"
                        onClick={()=>resetCookie()}
                        className="text-sm leading-6 text-foreground"
                    >
                        Zustimmung verwalten
                    </button>
                </div>
            </div>
        )

    } else {
        return (
            <div style={{"position":"fixed","right":"0","left":"0","bottom":"0","zIndex":50,"paddingLeft":"1.5rem","paddingRight":"1.5rem","paddingBottom":"1.5rem","pointerEvents":"none"}}>
                <div style={{"backgroundColor":"#ffffff","padding":"1.5rem","borderRadius":"0.75rem","boxShadow":["var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)","0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"],"maxWidth":"36rem","pointerEvents":"auto"}}>
                    <p style={{"fontSize":"0.875rem","lineHeight":["1.25rem","1.5rem"]}}>
                        Um dir ein optimales Erlebnis zu bieten, verwenden wir Technologien wie Cookies, um Geräteinformationen zu speichern und/oder darauf zuzugreifen. Wenn du diesen Technologien zustimmst, können wir Daten wie das Surfverhalten oder eindeutige IDs auf dieser Website verarbeiten. Wenn du deine Zustimmung nicht erteilst oder zurückziehst, können bestimmte Merkmale und Funktionen beeinträchtigt werden.{' '}
                        <Link href={datenschutzlink} className="font-semibold text-indigo-600 dark:text-indigo-500">
                            Datenschutzerklärung
                        </Link>
                    </p>
                    <div style={{"display":"flex","marginTop":"1rem","columnGap":"1.25rem","alignItems":"center"}}>
                        <button onClick={() => acceptCookie()}>
                            Alle akzeptieren
                        </button>
                        <button
                            onClick={() => declineCookie()}
                        >
                            Nur erforderliche akzeptieren
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

CookieMassage.defaultProps = {
    datenschutzlink:"/datenschutz",
};
export default CookieMassage
