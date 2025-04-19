'use client'

import { redirect } from "next/navigation"
import addNewMusic from "../../musics/_actions/addNewMusic"
import { useActionState } from "react"

export default function AddNew() {

    const [state, action] = useActionState(addNewMusic, {
        error: '',
        message: '',
        data: {
            id: '',
            music_name: '',
            price: '',
            is_new: false,
            brand: '',
        },
    })

    const { id, music_name, price, is_new, brand } = state.data


    if (state.message) {
        redirect('/musics')
    }

    return (
        <>
            <form
                className="max-w-md border mx-auto p-6 mt-8 space-y-4"
                action={action}
            >
                <h1 className="text-xl font-bold">Add New Music</h1>
                {(state.error) &&
                    (<div className="text-red-500">Error: {state.error} </div>)}

                <div>
                    <input
                        className="border-2 p-2 rounded w-full"
                        id="number"
                        name="id"
                        placeholder="Id"
                        defaultValue={id}
                    />
                </div>

                <div>
                    <label htmlFor="music_name">Music Name: </label>
                    <input
                        className="border p-2 rounded w-full"
                        type="text"
                        name="music_name"
                        defaultValue={music_name}
                        placeholder="Music_name" />
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input
                        className="border p-2 rounded w-full"
                        type="number" 
                        name="price"
                        defaultValue={price}
                        placeholder="Price" />
                </div>

                <div>
                    <input type="checkbox" name="is_new" defaultChecked={is_new} />
                    <label className="ml-2">Is New?</label>
                </div>

                <div>
                    <label htmlFor="brand">Brand: </label>
                    <input
                        className="border p-2 rounded w-full"
                        type="text" name="brand"
                        defaultValue={brand}
                        placeholder="Brand" />
                </div>
                <div>
                    <button
                        className="border px-4 py-2 rounded bg-blue-500"
                        type="submit">Add your music to the jukebox
                    </button>
                    <button
                        className="border px-4 py-2 rounded bg-red-500 ml-2"
                        type="reset">Reset</button>
                </div>
            </form>
        </>
    )
}
