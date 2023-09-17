import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

type Props = {
  params: {
    id: string;
  };
};

// export async function GET(request: Request) {

export async function GET(request: Request, { params: { id } }: Props) {
  // https://jsonplaceholder.typicode.com/todos/1
  // id = 1
  // const id = request.url.slice(request.url.lastIndexOf("/") + 1);

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);

  const todo: Todo = await res.json();

  if (!todo.id)
    return NextResponse.json({ message: "Todo not Found" }, { status: 404 });

  return NextResponse.json(todo);
}
