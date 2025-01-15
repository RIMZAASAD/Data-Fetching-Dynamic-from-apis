interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

export default async function id({ params }: { params: { id: string } }) {
  
  const res = await fetch(`https://simple-books-api.glitch.me/books/${params.id}`);
  const data: Book = await res.json();

  return (
    <div className=' flex items-center justify-center min-h-screen text-thin'>
<div className="py-20 px-20  rounded-md backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 hover:bg-white"> 

        <h1 className="text-black">Id:{data.id}</h1>
      <h1 className='text-red-600'>Name:{data.name}</h1>
      <p className='text-red-600'>Type: {data.type}</p>
      <p className="text-yellow-400"> Available: {data.available ? "Yes" : "No"}</p>
    </div>
    </div>
  );}