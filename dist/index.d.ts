import React from 'react';

declare const CookieMessage: {
    ({ datenschutzlink }: {
        datenschutzlink: string;
    }): React.JSX.Element;
    defaultProps: {
        datenschutzlink: string;
    };
};

declare const CookieManager: {
    ({ GTag, GAnalytics }: {
        GTag: string;
        GAnalytics: string;
    }): React.JSX.Element;
    defaultProps: {
        GTag: undefined;
        GAnalytics: undefined;
    };
};

export { CookieManager, CookieMessage };
