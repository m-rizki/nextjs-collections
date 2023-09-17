import { NextResponse } from "next/server";

// for testing on google.com
// const allowedOrigins =
//   process.env.NODE_ENV === "production"
//     ? ["https://www.yoursite.com", "https://yoursite.com"]
//     : ["http://localhost:3000", "https://www.google.com"];

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.yoursite.com", "https://yoursite.com"]
    : ["http://localhost:3000"];

export function middleware(request: Request) {
  const origin = request.headers.get("origin");
  console.log(origin);

  // const regex = new RegExp("/api/*");

  // if (regex.test(request.url)) {
  // }

  // add || !origin if you want to block thunder client / postman.
  // delete || !origin if development mode
  if ((origin && !allowedOrigins.includes(origin))) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad request",
      headers: {
        "Content-type": "text/plain",
      },
    });
  }

  console.log("Middleware");
  console.log(request.method);
  console.log(request.url);

  // move on to route like it was supposed to
  return NextResponse.next();
}

export const config = {
  // any route we have inside of our API folder will be caught in this middleware file will be applied to it
  matcher: "/api/:path*",
};
