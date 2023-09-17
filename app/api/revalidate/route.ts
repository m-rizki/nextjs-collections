// for production
// https://<your-site.com>/api/revalidate?tag=collection&secret=<token>

// for development
// http://localhost:3000/api/revalidate?path=/&tag=collection&secret=<token>

// import { NextRequest, NextResponse } from "next/server";
// import { revalidateTag } from "next/cache";

// e.g a webhook to `your-website.com/api/revalidate?tag=collection&secret=<token>`
// export async function POST(request: NextRequest) {
//   const secret = request.nextUrl.searchParams.get("secret");
//   const tag = request.nextUrl.searchParams.get("your tag");

//   if (secret !== process.env.MY_SECRET_TOKEN) {
//     return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
//   }

//   if (!tag) {
//     return NextResponse.json({ message: "Missing tag param" }, { status: 400 });
//   }

//   revalidateTag(tag);

//   return NextResponse.json({ revalidated: true, now: Date.now() });
// }


// revalidate all data associated with a path
// http://localhost:3000/api/revalidate?path=/
import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
 
export async function POST(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') // revalidate page "/"
 
  if (!path) {
    return NextResponse.json({ message: 'Missing path param' }, { status: 400 })
  }
 
  revalidatePath(path)
 
  return NextResponse.json({ revalidated: true, now: Date.now() })
}