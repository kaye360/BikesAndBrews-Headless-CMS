import { render } from "astro/dist/runtime/server"


export interface MenuItem {
    uri?: string,
    url?: string,
    order?: number,
    label?: string
}

export interface Menu {
    name?: string,
    menuItems?: {
        nodes : MenuItem[]
    }
}

export interface SiteInfo {
    title?: string,
    url?: string,
    description?: string
}

export interface NavQuery {
    menus: {
        nodes: Menu[]
    },
    generalSettings: SiteInfo
}

export interface HomePageQuery {
    content: {
        rendered: string
    }
}

export interface GQLNode {
    __typename?: string,
    isContentNode?: boolean,
    isTermNode?: boolean,
    id?: string,
    title?: string,
    uri?: string,
    date?: string,
    content?: string
}

export interface GQLNodeByUri {
    nodeByUri : GQLNode
}

export interface GQLPostExcerpt {
    date?: string,
    uri?: string,
    title?: string,
    excerpt?: string,
    categories?: {
        nodes:[{ name: string, uri: string }]
    },
    featuredImage: string | null
}