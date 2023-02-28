/**
 * 
 * Global types that will be used across the website
 * 
 */

export interface Post {
    id?: number,
    date?: Date,
    slug?: string,
    link?: string,
    title? : {
        rendered: string
    },
    content? : {
        rendered: string
    },
    excerpt?: {
        rendered: string
    },
    featured_media?: number,
    categories?: number[],
    tags?: number[]
}

export interface Page {
    id?: number,
    date?: number,
    slug?: string,
    link?: string,
    title?: {
        rendered: string,
    },
    content?: {
        rendered: string,
    },
    excerpt?: string,
    menu_order: number
}