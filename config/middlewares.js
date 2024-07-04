module.exports = ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "script-src": ["'self'", "*.tinymce.com", "*.tiny.cloud", "https:"],
          "connect-src": ["'self'", "https:", "*.tinymce.com", "*.tiny.cloud", "blob:", "*.strapi.io"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("CF_PUBLIC_ACCESS_URL") ? env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, "") : "",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("CF_PUBLIC_ACCESS_URL") ? env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, "") : "",
          ],
          "style-src": [
            "'self'",
            "'unsafe-inline'",
            "*.tinymce.com",
            "*.tiny.cloud",
          ],
          "font-src": ["'self'", "*.tinymce.com", "*.tiny.cloud"],          
          upgradeInsecureRequests: null,
        },
        // upgradeInsecureRequests: null,
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
