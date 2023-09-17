# Refresh Next Js knowlege

source : [Next Js course playlist by Dave Gray](https://youtube.com/playlist?list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&si=bAJkGtGcK4IJnxZf)

- [x] Intro
- [x] Routes : Pages, Layout, Links, Routes & Loading
- [x] Fetch Data : Waterfall, Parallel, Loading UI, Streaming and Suspense
- [x] SSG - SSR - ISR
- [x] Small Project -  wiki rocket
- [x] Blog Website Part 1
- [x] Route Handlers
- [x] Rest API
- [x] Middleware
- [x] Revalidation
- [x] mutations

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

### Add some dependencies

- [Changing the default classname](https://tailwindcss.com/docs/typography-plugin#changing-the-default-class-name)

```bash
# The official Tailwind CSS Typography plugin provides a set of prose classes you can use to add beautiful typographic defaults to any vanilla HTML you don’t control, like HTML rendered from Markdown, or pulled from a CMS.
# we can use this package to generate articles from our markdown files
npm install -D @tailwindcss/typography
```

[react-icons](https://react-icons.github.io/react-icons)

```bash
npm install react-icons --save
```

[gray matter](https://github.com/jonschlinkert/gray-matter)

```bash
npm i gray-matter
```

[remark](https://www.npmjs.com/package/remark)
[remark-html](https://www.npmjs.com/package/remark-html)

```bash
npm i remark remark-html
```

### ssg / ssr ?

post route is a good example of a ssr pages can actually be SSG

because we know what blog posts we're going to have in advance

## Route Handlers

Backend API

[route handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

### using thunder client

- install thunder client vscode
- create new request
- send request
- add parameters (optional)

[API Routes](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#api-routes)

### static route handlers

```bash
http://localhost:3000/api/echo?name=rizki&nickname=iki&instrument=guitar

http://localhost:3000/api/hello
```

### Dynamic route handlers with client form component

## Rest API

- we don't need to use API route if you're fetching from a server components (index.php is back baby!)
- if you're not hiding an API key or secret URL you can also fetch directly from client components without using API routes in your app
- common uses for API routes in a nextjs app are to hide secret values like API keys or secret resource URLs
- is not recommended using API routes for server components, but is somewhere along way you get confused and attempt to do that and then you're requesting data from API routes that's being built well the server components need that data available at build time to generate those static params

### Loading environment variable

[loading env](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)

An API key is usually a spesific value issued by the 3rd party data source when you set up an account

[json placeholder](https://jsonplaceholder.typicode.com/)

[partial type in typescript](https://javascript.plainenglish.io/partial-type-in-typescript-13fba802cf6d)

### testing DELETE API with thunder client

DELETE `http://localhost:3000/api/todos`

```json
// body
{
  "id": 5
}

// response
{ 
  "message": "Todo 5 deleted"
}
```

### testing POST API with thunder client

POST `http://localhost:3000/api/todos`

```json
// body
{
  "userId": 5,
  "title": "Make the coffee"
}

// response

{
  "userId": 5,
  "title": "Make the coffee",
  "completed": false,
  "id": 201
}
```

### testing PUT API with thunder client

PUT `http://localhost:3000/api/todos`

```json
// body
{
  "id": 5,
  "userId": 5,
  "title": "Make the coffee",
  "completed": true,
}

// response
{
  "userId": 5,
  "title": "Make the coffee",
  "completed": true,
  "id": 5
}
```

### Dynamic rest api routes

GET `http://localhost:3000/api/todos/199`

```json
{
  "userId": 10,
  "id": 199,
  "title": "numquam repellendus a magnam",
  "completed": true
}
```

## Middleware

[nextjs middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)

middleware file is applies to every request on the web page, and that's mean we might want to limit where that middleware is applied

middleware will be invoked for every route in your project

### matcher

[matcher](https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher)

### Apply middleware

example dependency : [rate limit](https://www.npmjs.com/package/limiter)

```bash
npm i limiter
```

[The Next.js Edge Runtime is based on standard Web APIs](https://nextjs.org/docs/app/api-reference/edge)

when you're creating a rest API in next.js is that those API routes are always same origin only so you're always going to get a cores error unless you work around that now that is great if you don't want anybody else besides your own application to access your rest API but if you want to share it with the rest of the world or at least in a loud list of URLs where a few other websites are permitted to go ahead and access that API well then you need to know how to do this workaround and actually it's not so much of a workaround as it's just applying everything that the core's middleware does in a different way without using that(cors) dependency.

### create allow origin

## Revalidation

template branch : `06-blog-website`

How to apply revalidation to the blog (ISR) or other similar projects without rebuilding the project every time a new blog article is added?

[revalidating data](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data)

[route segment config options](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config)

### On-demand revalidation

Manually revalidate data based on an event (e.g. form submission). **On-demand revalidation** can use a tag-based or path-based approach to revalidate groups of data at once. This is useful when you want to ensure the latest data is shown as soon as possible (e.g. when content from your headless CMS is updated).

[dynamic params](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams)
[revalidate](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate)

> Nb : test on build & start mode

by applying the proper revalidation this incremental static regeneration format or design that we can use then we're going to be able to see our new post eventually anyway without rebuilding the site

generate local key with node (if we want to revalidate from rest API)

```bash
node

require('crypto').randomBytes(16).toString('hex')
```

[on-demand-revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#on-demand-revalidation)

If using a Route Handler, you should create a secret token only known by your Next.js app. This secret will be used to prevent unauthorized revalidation attempts. For example, you can access the route (either manually or with a webhook) with the following URL structure:

```bash
https://<your-site.com>/api/revalidate?tag=collection&secret=<token>
```

test on thunder client

```bash
POST http://localhost:3000/api/revalidate?path=/
```

## Mutations

> **Warning**
>
> this approach (11-mutations) is from beta docs and not the new approach (server actions)

start json server

```bash
# json-server : start json server
# -w db.json : watch db.json file
# -p 3500 : port 3500
# -H 127.0.0.1 : host 127.0.0.1

npx json-server -w db.json -p 3500 -H 127.0.0.1
```
