import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, d as renderHead, e as renderComponent, f as renderSlot } from '../astro.f92d64e9.mjs';
/* empty css                           */
const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer>
    Footer
</footer>`;
}, "C:/web-projecs/Bikes and Brews Headless/src/layout/Footer.astro");

const WORDPRESS_API_URL = "https://bikesandbrews.ca/graphql";
async function navQuery() {
  const siteNavQueryRes = await fetch(WORDPRESS_API_URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
                menus {
                  nodes {
                    name
                    menuItems {
                        nodes {
                            uri
                            url
                            order
                            label
                        }
                    }
                  }
                }
                generalSettings {
                    title
                    url
                    description
                }
            }
            `
    })
  });
  const { data } = await siteNavQueryRes.json();
  return data;
}
async function getHomePage() {
  const res = await fetch("https://bikesandbrews.ca/wp-json/wp/v2/pages?slug=home-page");
  const json = await res.json();
  return json;
}

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const res = await navQuery();
  const primaryMenu = res.menus.nodes.filter((menu) => menu.name === "Header")[0];
  res.generalSettings;
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-WDWC7HYJ">
    <a href="/" class="logo-link astro-WDWC7HYJ">
        <span class="logo-tc astro-WDWC7HYJ">Tri-City</span>
        <img src="/img/logo.png" class="astro-WDWC7HYJ">
        <span class="logo-bb astro-WDWC7HYJ">Bikes & Brews</span>
    </a>
    <nav class="astro-WDWC7HYJ">

        <ul class="astro-WDWC7HYJ">
            ${primaryMenu.menuItems.nodes.map((menuItem) => renderTemplate`<li class="astro-WDWC7HYJ">
                    <a${addAttribute(menuItem.uri || "/", "href")} class="astro-WDWC7HYJ">${unescapeHTML(menuItem.label)}</a>
                </li>`)}
        </ul>
    </nav>
</header>




<style>

.logo-link {
    display : flex;
    justify-content: center;
    align-items: center;
    gap : 1rem;
    margin-inline: auto;
    color : #333;
}

.logo-tc {
    font-family: 'Intro Rust';
    font-size: 1.6rem;
}

.logo-bb {
    font-family : 'Intro Script';
    font-size: 1.7rem;
    font-weight: bold;
}


</style>`;
}, "C:/web-projecs/Bikes and Brews Headless/src/layout/Header.astro");

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>${title}</title>

    <link rel="stylesheet" href="/css/main.css">

    <link rel="stylesheet" id="wp-block-library-css" href="https://bikesandbrews.ca/wp-includes/css/dist/block-library/style.min.css?ver=6.1.1" type="text/css" media="all">
    
${renderHead($$result)}</head>
<body>

    ${renderComponent($$result, "Header", $$Header, {})}

    <main>
        
        ${renderSlot($$result, $$slots["default"])}
        
    </main>

    ${renderComponent($$result, "Footer", $$Footer, {})}


<style>

main {
    width : 100%;
    max-width : var(--page-max-width);
    margin-inline: auto;
}

</style></body></html>`;
}, "C:/web-projecs/Bikes and Brews Headless/src/layout/BaseLayout.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const homePage = await getHomePage();
  const homePageContent = homePage[0].content.rendered;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tri-City Bikes and Brews" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div>${unescapeHTML(homePageContent)}</div>` })}`;
}, "C:/web-projecs/Bikes and Brews Headless/src/pages/index.astro");

const $$file = "C:/web-projecs/Bikes and Brews Headless/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
