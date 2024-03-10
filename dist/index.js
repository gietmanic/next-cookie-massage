"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  CookieManager: () => CookieManager_default,
  CookieMessage: () => CookieMessage_default
});
module.exports = __toCommonJS(src_exports);

// src/components/CookieMessage.tsx
var import_link = __toESM(require("next/link"));
var import_react = __toESM(require("react"));
var import_navigation = require("next/navigation");
var import_use_local_storage = __toESM(require("use-local-storage"));
"use client";
var CookieMessage = ({ datenschutzlink }) => {
  const router = (0, import_navigation.useRouter)();
  const [showConsent, setShowConsent] = (0, import_react.useState)(true);
  const [localConsent, setLocalConsent] = (0, import_use_local_storage.default)("localConsent", false);
  const deleteAllCookies = () => {
    document.cookie.split(";").forEach(function(c) {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    });
  };
  (0, import_react.useEffect)(() => {
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
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { "position": "fixed", "right": "0", "left": "0", "bottom": "0", "zIndex": 50, "paddingLeft": "1.5rem", "paddingRight": "1.5rem", "paddingBottom": "0.5rem", "pointerEvents": "none" } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { "backgroundColor": "#ffffff", "padding": "0.75rem", "borderRadius": "0.75rem", "width": "fit-content", "pointerEvents": "auto" } }, /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        type: "button",
        onClick: () => resetCookie(),
        className: "text-sm leading-6 text-foreground"
      },
      "Zustimmung verwalten"
    )));
  } else {
    return /* @__PURE__ */ import_react.default.createElement("div", { style: { "position": "fixed", "right": "0", "left": "0", "bottom": "0", "zIndex": 50, "paddingLeft": "1.5rem", "paddingRight": "1.5rem", "paddingBottom": "1.5rem", "pointerEvents": "none" } }, /* @__PURE__ */ import_react.default.createElement("div", { style: { "backgroundColor": "#ffffff", "padding": "1.5rem", "borderRadius": "0.75rem", "maxWidth": "36rem", "pointerEvents": "auto" } }, /* @__PURE__ */ import_react.default.createElement("p", { style: { "fontSize": "0.875rem" } }, "Um dir ein optimales Erlebnis zu bieten, verwenden wir Technologien wie Cookies, um Ger\xE4teinformationen zu speichern und/oder darauf zuzugreifen. Wenn du diesen Technologien zustimmst, k\xF6nnen wir Daten wie das Surfverhalten oder eindeutige IDs auf dieser Website verarbeiten. Wenn du deine Zustimmung nicht erteilst oder zur\xFCckziehst, k\xF6nnen bestimmte Merkmale und Funktionen beeintr\xE4chtigt werden.", " ", /* @__PURE__ */ import_react.default.createElement(import_link.default, { href: datenschutzlink, className: "font-semibold text-indigo-600 dark:text-indigo-500" }, "Datenschutzerkl\xE4rung")), /* @__PURE__ */ import_react.default.createElement("div", { style: { "display": "flex", "marginTop": "1rem", "columnGap": "1.25rem", "alignItems": "center" } }, /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => acceptCookie() }, "Alle akzeptieren"), /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onClick: () => declineCookie()
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
var import_react2 = __toESM(require("react"));
var import_use_local_storage2 = __toESM(require("use-local-storage"));
var import_google = require("@next/third-parties/google");
"use client";
var CookieManager = ({ GTag, GAnalytics }) => {
  const [localConsent, setLocalConsent] = (0, import_use_local_storage2.default)("localConsent", false);
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, GAnalytics && /* @__PURE__ */ import_react2.default.createElement(import_google.GoogleAnalytics, { gaId: GAnalytics }), GTag && /* @__PURE__ */ import_react2.default.createElement(import_google.GoogleTagManager, { gaId: GTag }));
};
CookieManager.defaultProps = {
  GTag: void 0,
  GAnalytics: void 0
};
var CookieManager_default = CookieManager;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CookieManager,
  CookieMessage
});
