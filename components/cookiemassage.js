"use client"
import Link from "next/link";
import useLocalStorage from "use-local-storage";
import { useRouter } from "next/navigation";

const CookieMassage = () => {
    const [showConsent, setShowConsent] = useState(true);
    const [localConsent, setLocalConsent] = useLocalStorage < boolean > ("localConsent", false);
    const router = useRouter()

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
        deleteCookie("_ga_B6R1XGYWKB")
        deleteCookie("_ga")
        router.refresh();
        router.replace(window.location.pathname);
    }

    const declineCookie = () => {
        setShowConsent(true)
        setLocalConsent(false)
        router.refresh();
        router.replace(window.location.pathname);
    }

    if (showConsent) {
        return (
            <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-2 z-50">
                <div className="pointer-events-auto ml-auto w-fit rounded-xl bg-background p-3 shadow-lg ring-1 ring-gray-900/10 dark:ring-gray-600/50">
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
            <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6 z-50">
                <div className="pointer-events-auto ml-auto max-w-xl rounded-xl bg-background dark:bg-gray-800 p-6 shadow-lg ring-1 ring-gray-900/10 dark:ring-gray-600/50">
                    <p className="text-sm leading-6 text-foreground dark:text-gray-100">
                        Um dir ein optimales Erlebnis zu bieten, verwenden wir Technologien wie Cookies, um Geräteinformationen zu speichern und/oder darauf zuzugreifen. Wenn du diesen Technologien zustimmst, können wir Daten wie das Surfverhalten oder eindeutige IDs auf dieser Website verarbeiten. Wenn du deine Zustimmung nicht erteilst oder zurückziehst, können bestimmte Merkmale und Funktionen beeinträchtigt werden.{' '}
                        <Link href="/legal/datenschutz" className="font-semibold text-indigo-600 dark:text-indigo-500">
                            Datenschutzerklärung
                        </Link>
                        .
                    </p>
                    <div className="mt-4 flex items-center gap-x-5">
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
export default CookieMassage
