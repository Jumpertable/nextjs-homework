"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AlbumAPI() {
  const [records, setRecords] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  const albumAPI = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const data = await res.json();

    const start = (page - 1) * limit;
    const end = start + limit;

    const currentRecords = data.slice(start, end);
    setRecords(currentRecords);
  };

  useEffect(() => {
    albumAPI();
  }, [page]);

  if (records.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen  bg-gray-500 py-10 px-4">
      <h2 className="text-xl font-bold mb-10 text-center text-white">
        ⋆｡☽ ﾟ｡⋆｡☁︎｡⋆ Albums ⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆
      </h2>
      <h3 className="text-center text-white">For Freeeeeee</h3>

      <hr className="border border-black border-t-2 mb-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {records.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 p-4 rounded-lg bg-white drop-shadow-lg grid place-items-center"
          >
            <div className="grid grid-cols-2 gap-35 md:grid-cols-1 md:gap-10 border-2 p-4">
              <Image
                className="rounded mb-4"
                src={item.thumbnailUrl}
                alt="Album Thumbnail"
                width={100}
                height={100}
              />

              <Image
                className="rounded mb-4"
                src={item.url}
                alt="Album Url"
                width={100}
                height={100}
              />
            </div>

            <div className="text-gray-700 text-center text-sm font-semibold mt-4">
              <p>Album ID: {item.albumId}</p>
              <p>ID: {item.id}</p>
              <p>Title: {item.title}</p>
            </div>

            <div className="text-green-400 text-center text-sm font-sm underline text-shadow-lg hover:text-shadow-green-200/50 cursor-pointer">
              <p>Buy now</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 place-items-center m-10 gap-2">
        <button
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
          disabled={page === 1}
          className={`px-4 py-2 rounded bg-blue-700 text-white ${
            page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-900"
          }`}
        >
          Previous
        </button>

        <span className="px-4 py-2 text-white font-bold">
          ... Page {page} ...
        </span>

        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-800"
        >
          Next
        </button>

        <div className="mt-5">
          <Link href="/musics">
            <button className="bg-red-600 text-white text-center  px-4 py-2 rounded hover:bg-red-800  hover:scale-105 transition active:scale-90 transition">
              👈 Back to Musics
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
