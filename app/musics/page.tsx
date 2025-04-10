"use client";

import { useState } from "react";
import Props from "../components/props";
import AddInstrument from "../components/updatingInstruments";
import { button } from "framer-motion/client";

export default function Musics() {
  const [instruments, setInstruments] = useState([
    {
      name: "Fender Guitar",
      price: 300,
      image_url:
              "https://images.unsplash.com/photo-1613032970340-7846189c1cbe?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          like: 20,
      is_new: true,
    },
    {
      name: "Grand Piano",
      price: 30000,
      image_url:
            "https://images.unsplash.com/photo-1648948303220-8dbdb7d0df65?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        like: 40,
      is_new: false,
    },
    {
      name: "Saxophone",
      price: 1000,
      image_url:
        "https://images.unsplash.com/photo-1623123776919-e5208e9b0b47?q=80&w=1214&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        like: 25,
    is_new: true,
      },
    {
      name: "Höfner Bass Guitar",
      price: 8000,
      image_url:
            "https://images.unsplash.com/photo-1657896003520-ca33001fd4f3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEglQzMlQjZmbmVyJTIwQmFzcyUyMEd1aXRhcnxlbnwwfHwwfHx8MA%3D%3D",
        like: 55,
        is_new: false,
    },
    {
      name: "Yamaha Trumpet",
      price: 600,
      image_url:
            "https://images.unsplash.com/photo-1573871666457-7c7329118cf9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        like: 20,
        is_new: true,
    },
    {
      name: "Altus Flute",
      price: 700,
      image_url:
            "https://images.unsplash.com/photo-1514213949578-58fe7b8ff146?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        like: 70,
        is_new: true,
    },
    {
      name: "SONOR Drums",
      price: 1000,
      image_url:
            "https://images.unsplash.com/photo-1602939444907-6e688c594a66?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        like: 30,
        is_new: true,
    },
    {
      name: "Taylor Acoustic Guitar",
      price: 300,
      image_url:
            "https://images.unsplash.com/photo-1588449668365-d15e397f6787?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        like: 40,
        is_new: false,
    },
    {
      name: "Yamaha Cello",
      price: 2000,
      image_url:
            "https://images.unsplash.com/photo-1570906166424-698571d1dc15?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        like: 25,
        is_new: true,
    },
    {
      name: "Hohner Accordion",
      price: 600,
      image_url:
            "https://images.unsplash.com/photo-1578841345191-037d88f2011c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        like: 20,
        is_new: false,
    },
  ]);

  const removeInstrument = (idToRemove: number) => {
    const newInstruments = instruments.filter((_, index) => index !== idToRemove);
    setInstruments(newInstruments);
  };

  return (
    <div className="text-black bg-gradient-to-b from-gray-900 via-gray-600 to-gray-300 grid place-items-center">
      <h1 className=" text-white font-bold text-xl text-center m-3">Musical Instuments</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-[90%] border-2 rounded m-auto my-6 p-4 bg-gradient-to-b from-gray-300 to-gray-500 ">
      {instruments.map((instrument, index) => (
  <div key={index} className="relative">
    <Props
      index={index}
      instrumentsName={instrument.name}
      price={instrument.price}
      image_url={instrument.image_url}
      like={instrument.like}
      is_new={instrument.is_new}
    />
    <button
      onClick={() => removeInstrument(index)}
      className="absolute top-2 right-2 border-2 border-red-600 px-2 py-1 bg-red-500 text-white rounded hover:bg-blue-500 hover:border-teal-600
    sm:px-2 sm:py-1.5 sm: md:px-1 md:py-1 md:right-[-16px]  lg:px-1 lg:py-1"
          >
      X
    </button>
  </div>
))}
      </div>     
      <AddInstrument onAdd={(newInstrument) => setInstruments([...instruments, newInstrument])} />
    </div>

  );  
}
