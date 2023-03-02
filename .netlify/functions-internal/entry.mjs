import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, g as deserializeManifest } from './chunks/astro.f92d64e9.mjs';
import { _ as _page0 } from './chunks/pages/all.190cee4a.mjs';
import { _ as _page1 } from './chunks/prerender.4db93fd8.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'html-escaper';
import 'string-width';
/* empty css                                    *//* empty css                                 *//* empty css                                    */
const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/[...uri].astro", _page1],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["_astro/index.91a89d03.css","_astro/_...uri_.98a57e1a.css"],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true,"contentDir":"file:///C:/web-projecs/Bikes%20and%20Brews%20Headless/src/content/"},"pageMap":null,"propagation":[],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/_...uri_.0b0bb588.css","/_astro/_...uri_.98a57e1a.css","/_astro/index.91a89d03.css","/css/footer.css","/css/hero.css","/css/main.css","/css/page.css","/css/utils.css","/css copy/footer.css","/css copy/header-top.css","/css copy/hero.css","/css copy/home.css","/css copy/main.css","/css copy/page.css","/css copy/utils.css","/font/IntroRustG.otf","/font/IntroScriptR.otf","/img/about-image-cropped.jpg","/img/about-image.jpg","/img/fb-large-white.svg","/img/fb-small-red.svg","/img/fb-small-white.svg","/img/footer-logo.png","/img/hero-card-breweries-img.jpg","/img/hero-card-events-img.jpg","/img/hero-card-featured-routes-img.jpg","/img/hero-card-route-archives-img.jpg","/img/hero-image-mobile.jpg","/img/hero-image-wide.jpg","/img/hero-image.jpg","/img/insta-large-white.svg","/img/insta-small-red.svg","/img/insta-small-white.svg","/img/logo copy.png","/img/logo-large-grey.png","/img/logo.png","/img/mobile-menu-close-icon.svg","/img/mobile-menu-icon.svg"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
