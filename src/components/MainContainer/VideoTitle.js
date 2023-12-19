import React from 'react'

const VideoTitle = ({title, desc}) => {
    return (
        <div className="pt-96 pl-20 aspect-video h-full bg-opacity-10 absolute bg-gradient-to-r from-black to-transparent">
            <h1 className="text-2xl mb-10 text-white" >{title}</h1>
            <h1 className="w-1/4 text-sm text-white">{desc}</h1>
            <div>
                <button className="h-[50px] w-[160px] border rounded-lg bg-white my-5 mr-3 hover:bg-opacity-80 cursor-pointer">Play</button>
                <button className="h-[50px] w-[160px] bg-gray-500 rounded-lg text-white my-5 bg-opacity-50">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
