import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, d as renderHead, e as renderComponent, f as renderSlot } from '../astro.f92d64e9.mjs';
/* empty css                           *//* empty css                              *//* empty css                              */
const $$Astro$4 = createAstro("https://bikesandbrews.netlify.app/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
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
async function getNodeByURI(uri) {
  console.log(uri);
  const response = await fetch(WORDPRESS_API_URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query GetNodeByURI($uri: String!) {
                nodeByUri(uri: $uri) {
                  __typename
                  isContentNode
                  isTermNode
                  ... on Post {
                    id
                    title
                    date
                    uri
                    excerpt
                    content
                    categories {
                      nodes {
                        name
                        uri
                      }
                    }
                    featuredImage {
                      node {
                        mediaItemUrl
                        altText
                      }
                    }
                  }
                  ... on Page {
                    id
                    title
                    uri
                    date
                    content
                  }
                  ... on Category {
                    id
                    name
                    posts {
                      nodes {
                        date
                        title
                        excerpt
                        uri
                        categories {
                          nodes {
                            name
                            uri
                          }
                        }
                        featuredImage {
                          node {
                            altText
                            mediaItemUrl
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
      variables: {
        uri
      }
    })
  });
  const { data } = await response.json();
  return data;
}
async function getAllUris() {
  const response = await fetch(WORDPRESS_API_URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query GetAllUris {
            terms {
              nodes {
                uri
              }
            }
            posts(first: 100) {
              nodes {
                uri
              }
            }
            pages(first: 100) {
              nodes {
                uri
              }
            }
          }
          `
    })
  });
  const { data } = await response.json();
  const uris = Object.values(data).reduce(function(acc, currentValue) {
    return acc.concat(currentValue.nodes);
  }, []).filter((node) => node.uri !== null).map((node) => {
    let trimmedURI = node.uri.substring(1);
    trimmedURI = trimmedURI.substring(0, trimmedURI.length - 1);
    if (trimmedURI === "")
      trimmedURI = "home-page";
    return { params: {
      uri: trimmedURI
    } };
  });
  console.log(uris);
  return uris;
}

const $$Astro$3 = createAstro("https://bikesandbrews.netlify.app/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
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

const $$Astro$2 = createAstro("https://bikesandbrews.netlify.app/");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
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

const $$Astro$1 = createAstro("https://bikesandbrews.netlify.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const homePage = await getHomePage();
  const homePageContent = homePage[0].content.rendered;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tri-City Bikes and Brews" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div>${unescapeHTML(homePageContent)}</div>` })}`;
}, "C:/web-projecs/Bikes and Brews Headless/src/pages/index.astro");

const $$file$1 = "C:/web-projecs/Bikes and Brews Headless/src/pages/index.astro";
const $$url$1 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://bikesandbrews.netlify.app/");
async function getStaticPaths() {
  return await getAllUris();
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const uri = `/${Astro2.params.uri}/`;
  const data = await getNodeByURI(uri);
  const node = data.nodeByUri;
  if (!node.content)
    node.content = "No content to display";
  node.content = node.content?.replaceAll('href="https://bikesandbrews.ca/', 'href="/');
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${node.title || "TC Bikes and Brews"} - Tri-City Bikes and Brews`, "class": "astro-UN5WO2EL" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h2 class="astro-UN5WO2EL">${unescapeHTML(node.title)}</h2>${node.isContentNode && renderTemplate`<div class="astro-UN5WO2EL">${unescapeHTML(node.content)}</div>`}` })}`;
}, "C:/web-projecs/Bikes and Brews Headless/src/pages/[...uri].astro");

const $$file = "C:/web-projecs/Bikes and Brews Headless/src/pages/[...uri].astro";
const $$url = "/[...uri]";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a };
