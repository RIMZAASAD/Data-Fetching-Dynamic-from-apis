'use client';

import React, { useEffect, useState } from "react";
import Image from 'next/image';

interface Clientfetch {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Clients = () => {
  const [data, setData] = useState<Clientfetch[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setData(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10 ">
      <h1 className="text-3xl font-bold text-center mb-8 text-pink-400">
        Product Showcase
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-300 rounded-lg shadow-md p-4"
          >
            <div className="relative w-full h-48">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="contain"
                
              />
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-bold text-gray-800">Title:{item.title}</h2>
              <p className="text-sm text-gray-600 mt-1">
                Category: <span className="font-medium my-2">{item.category}</span>
              </p>
              <p className="text-purple-600 font-semibold mt-2 text-lg">
                Price: ${item.price}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Rating: {item.rating.rate}⭐ ({item.rating.count} reviews)
              </p>
              <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                {item.description}
              </p>
            </div>
            <button className="bg-purple-600 text-white py-2 px-4 rounded-lg mt-4 w-full hover:bg-purple-700 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
