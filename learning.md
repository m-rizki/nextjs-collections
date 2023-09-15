# Refresh Next Js knowlege

source : [Next Js course playlist by Dave Gray](https://youtube.com/playlist?list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&si=bAJkGtGcK4IJnxZf)

- [x] Intro
- [x] Routes : Pages, Layout, Links, Routes & Loading
- [x] Fetch Data : Waterfall, Parallel, Loading UI, Streaming and Suspense
- [x] SSG - SSR - ISR
- [x] Small Project -  wiki rocket

## Fetch Data

branch : 02-fetch-data

1. Waterfall
2. Parallel to minimize waterfalls and reduce loading times
3. Use Loading UI, Streaming and Suspense to progressively render a page and show a result to the user while rest of content loads.

## SSG - SSR - ISR

next already caches data by default

learn more : [fetching, caching and revalidating](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating) and check segment config options

```js
// The Route Segment options allows you configure the behavior of a Page, Layout, or Route Handler by directly exporting the following variables
// layout.tsx / page.tsx / route.ts
export const revalidate = 3600 // revalidate at most every hour
```

### apply ssg on dynamic folder, example [userId]

NextJs recommends SSG when possible

next has no idea what value will be passed as a parameter. We can tell nextjs in advance what those possible parameters will be

we will turn these SSR pages into the recommended SSG pages by apply generateStaticParams()

### Page Not found

when next tries to get a dynamic page that doesn't exist instead of just generating typical error we want to a 404

next has default 404 page

## Blog Website

- [Changing the default classname](https://tailwindcss.com/docs/typography-plugin#changing-the-default-class-name)

```bash
# The official Tailwind CSS Typography plugin provides a set of prose classes you can use to add beautiful typographic defaults to any vanilla HTML you don’t control, like HTML rendered from Markdown, or pulled from a CMS.
# we can use this package to generate articles from our markdown files
npm install -D @tailwindcss/typography
```

### Add react icons

[react-icons](https://react-icons.github.io/react-icons)

```bash
npm install react-icons --save
```
