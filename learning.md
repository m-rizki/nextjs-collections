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
