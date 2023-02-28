

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
