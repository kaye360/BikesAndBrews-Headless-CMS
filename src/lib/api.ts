
const WORDPRESS_API_URL: string = 'https://bikesandbrews.ca/graphql'

export async function navQuery(){
    const siteNavQueryRes = await fetch(WORDPRESS_API_URL, {
        method: 'post', 
        headers: {'Content-Type':'application/json'},
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
    const{ data } = await siteNavQueryRes.json();
    return data;

}

export async function getHomePage()
{
  const res = await fetch('https://bikesandbrews.ca/wp-json/wp/v2/pages?slug=home-page')
  const json = await res.json()
  return json
}

export async function getNodeByURI(uri: string) 
{
    const response = await fetch(WORDPRESS_API_URL, {
        method: 'post', 
        headers: {'Content-Type':'application/json'},
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
                uri: uri
            }
        })
    });
    const{ data } = await response.json();
    return data;
}

export async function getAllUris(){
  const response = await fetch(WORDPRESS_API_URL, {
      method: 'post', 
      headers: {'Content-Type':'application/json'},
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
  const{ data } = await response.json();
  // @ts-ignore
  const uris = Object.values(data)
  // @ts-ignore
  .reduce(function(acc: string, currentValue: object[]){
    // @ts-ignore
    return acc.concat(currentValue.nodes)
  }, [])
  // @ts-ignore
  .filter(node => node.uri !== null)
  // @ts-ignore
    .map(node => {
      let trimmedURI = node.uri.substring(1);
      trimmedURI = trimmedURI.substring(0, trimmedURI.length - 1)

      if (trimmedURI === "") trimmedURI = 'home-page'
      return {params: {
        uri: trimmedURI
      }}
    })

  return uris;

}