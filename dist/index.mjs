// src/components/CookieMessage.tsx
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useLocalStorage from "use-local-storage";
"use client";
var CookieMessage = ({ datenschutzlink }) => {
  const router = useRouter();
  const [showConsent, setShowConsent] = useState(true);
  const [localConsent, setLocalConsent] = useLocalStorage("localConsent", false);
  const deleteAllCookies = () => {
    document.cookie.split(";").forEach(function(c) {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    });
  };
  useEffect(() => {
    setShowConsent(localConsent);
  }, [localConsent, setLocalConsent]);
  const acceptCookie = () => {
    setShowConsent(true);
    setLocalConsent(true);
    router.refresh();
    router.replace(window.location.pathname);
  };
  const resetCookie = () => {
    setShowConsent(true);
    setLocalConsent(false);
    router.refresh();
    router.replace(window.location.pathname);
  };
  const declineCookie = () => {
    setShowConsent(true);
    setLocalConsent(false);
    deleteAllCookies();
    router.refresh();
    router.replace(window.location.pathname);
  };
  if (showConsent) {
    return /* @__PURE__ */ React.createElement("div", { className: "pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-2 z-50" }, /* @__PURE__ */ React.createElement("div", { className: "pointer-events-auto ml-auto w-fit rounded-xl bg-white dark:bg-gray-800 p-3 shadow-lg ring-1 ring-gray-900/10 dark:ring-gray-600/50" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => resetCookie(),
        className: "text-sm leading-6 text-gray-900 dark:text-gray-100"
      },
      "Zustimmung verwalten"
    )));
  } else {
    return /* @__PURE__ */ React.createElement("div", { className: "pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6 z-50" }, /* @__PURE__ */ React.createElement("div", { className: "pointer-events-auto ml-auto max-w-xl rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg ring-1 ring-gray-900/10 dark:ring-gray-600/50" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm leading-6 text-gray-900 dark:text-gray-100" }, "Um dir ein optimales Erlebnis zu bieten, verwenden wir Technologien wie Cookies, um Ger\xE4teinformationen zu speichern und/oder darauf zuzugreifen. Wenn du diesen Technologien zustimmst, k\xF6nnen wir Daten wie das Surfverhalten oder eindeutige IDs auf dieser Website verarbeiten. Wenn du deine Zustimmung nicht erteilst oder zur\xFCckziehst, k\xF6nnen bestimmte Merkmale und Funktionen beeintr\xE4chtigt werden.", " ", /* @__PURE__ */ React.createElement(Link, { href: datenschutzlink, className: "font-semibold text-indigo-600 dark:text-indigo-500" }, "Datenschutzerkl\xE4rung")), /* @__PURE__ */ React.createElement("div", { className: "mt-4 flex items-center gap-x-5" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => acceptCookie(),
        className: "rounded-md bg-gray-900 dark:bg-indigo-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
      },
      "Alle akzeptieren"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => declineCookie(),
        className: "text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
      },
      "Nur erforderliche akzeptieren"
    ))));
  }
};
CookieMessage.defaultProps = {
  datenschutzlink: "/datenschutz"
};
var CookieMessage_default = CookieMessage;

// src/provider/CookieManager.tsx
import React2 from "react";
import useLocalStorage2 from "use-local-storage";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
"use client";
var CookieManager = ({ GTag, GAnalytics }) => {
  const [localConsent, setLocalConsent] = useLocalStorage2("localConsent", false);
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, GAnalytics && /* @__PURE__ */ React2.createElement(GoogleAnalytics, { gaId: GAnalytics }), GTag && /* @__PURE__ */ React2.createElement(GoogleTagManager, { gaId: GTag }));
};
CookieManager.defaultProps = {
  GTag: void 0,
  GAnalytics: void 0
};
var CookieManager_default = CookieManager;
export {
  CookieManager_default as CookieManager,
  CookieMessage_default as CookieMessage
};
