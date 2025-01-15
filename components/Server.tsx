import Link from "next/link";

export default async function Server() {
  interface myBooks {
    id: number;
    name: string;
    type: string;
    available: boolean;
  }

  const res = await fetch("https://simple-books-api.glitch.me/books", {
    cache: "no-store", 
  });
  const data: myBooks[] = await res.json();

  return (
    <>
      <h1 className="text-center text-2xl font-bold">Books</h1>
      <div className="m-10">
        <div className="bg-gray-500 backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 py-4 flex items-center px-4 rounded-3xl shadow-lg">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10 text-center">
            {data.map((book) => (
              <Link
                href={`/books/${book.id}`}
                key={book.id}
                className="border rounded-lg p-4 shadow-md bg-white"
              >
                <p className="text-black">Id: {book.id}</p>
                <p className="text-red-600">Name: {book.name}</p>
                <p className="text-red-600">Type: {book.type}</p>
                <p className="text-yellow-400">
                  Available: {book.available ? "Yes" : "No"}
                </p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
