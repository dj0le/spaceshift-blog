export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	number: number
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}
