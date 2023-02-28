import type { Page, Post } from "./types"

const WORDPRESS_API_URL = 'https://bikesandbrews.ca/wp-json/wp/v2'


export async function getSiteData() 
{
    const res = await fetch('https://bikesandbrews.ca/wp-json')
    const json = await res.json()
    return json
}

export async function getAllPosts() : Promise<Post[]>
{
    const res = await fetch(WORDPRESS_API_URL + '/posts?per_page=100')
    const json = await res.json()
    return json
}

export async function getPostsByTag(tag : string) 
{
    /**
     * @todo need to convert the string tag to it's WP id which takes a number
     */
    const res = await fetch(WORDPRESS_API_URL + '/posts?tags=' + tag)
    const json = await res.json()
    return json
}

export async function getPostsByCategory(cat : string) 
{
    /**
     * @todo need to convert the string cat to it's WP id which takes a number
     */
    const res = await fetch(WORDPRESS_API_URL + '/posts?categories=' + cat)
    const json = await res.json()
    return json
}

export async function getPages(): Promise<Page[]>
{
    const res = await fetch(WORDPRESS_API_URL + '/pages')
    const json = await res.json()
    return json
}

export async function getPage() 
{
    /**
     * @todo get a single page
     */
    const res = await fetch(WORDPRESS_API_URL + '/pages')
    const json = await res.json()
    return json
}

export async function getTags() 
{

    return []
}

export async function getCategories() 
{

    return []
}

export async function getNav() {

    return []
}