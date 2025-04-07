'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence  } from 'framer-motion'

export default function props({
  index,
  instrumentsName,
  price,
  image_url,
  like,
  is_new,
}: {
  index: number;
  instrumentsName: string;
  price: number;
  image_url: string;
  like: number;
  is_new: boolean;
  }) {
    const [showFace, setShowFace] = useState(false)
    const router = useRouter()
  
    const handleBuyNow = async (e: React.MouseEvent) => {
      e.preventDefault()
      setShowFace(true)
  
      setTimeout(() => {
        router.push('/buy') 
      }, 1500)
    }
  return (
    
    <div className="relative shadow-lg rounded-md border w-fit bg-green-100 p-2 m-2"
    >
      <h2>{instrumentsName}</h2>
      <p className="underline">{price}</p>
      <Image
        className="p-2 m-4 m-auto w-40 h-40 rounded-full object-cover mt-2 border-5 border-blue-300 hover:animate-spin"
        src={image_url}
        alt={instrumentsName}
        width={100}
        height={100}
      />
      
      <div className="mt-2 grid grid-cols-2 gap-1 text-center text-sm mb-4">    
    <p className="px-2 py-1 w-[6rem]">
      (○｀ 3′○) {like}
        </p>
        <p className="border bg-green-700 text-white px-2 py-1 rounded text-xs grid place-items-center w-fit max-w-[6rem]">
          {is_new ? "New Arrival" : "Old Classics"}
    </p>
  </div>
      
      <Link
        onClick={handleBuyNow}
        className="border bg-pink-200 px-2 py-1 mt-2 rounded hover:font-bold active:text-red-700"
        href="/buy"
      >
        Buy Now
      </Link>

      <span className="absolute bottom-2 right-3 border border-blue shadow px-2 rounded-full bg-amber-100 transition-transform duration-150  hover:scale-15 active:scale-900">
        {index + 1}
      </span>

      <AnimatePresence >
      {showFace && (
        <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <motion.img
          src="/Scary face.png"
          alt="BOO!"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 2, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-contain"
        />
      </motion.div>
        )}
      </AnimatePresence >
    </div>
  )
}
