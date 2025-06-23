const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/About"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/work/glt"
            },
            {
                "loc": "/work"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:route-rules",
            "description": "Generated from your route rules config.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:route-rules'] }`."
            ]
        },
        "urls": [
            "/work/glt/",
            "/"
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            "/",
            "/about",
            "/work/",
            "/work/glt",
            {
                "loc": "/work/"
            },
            {
                "loc": "/work/glt/"
            },
            {
                "loc": "/work/glt/"
            },
            {
                "loc": "/work/glt"
            },
            {
<<<<<<< HEAD
=======
                "loc": "/"
            },
            {
>>>>>>> 33819c2039ce9a0becc820c9f2d00c748d6349b7
                "loc": "/about"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
