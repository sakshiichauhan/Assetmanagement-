import React from 'react'
const Dashboard = () => {
    return (
          <div className="bg-[url('/src/Assets/bgimg.png')] bg-cover bg-center h-screen">
            <div className="text-white text-3xl p-8">
            <div className="relative z-10 flex items-center justify-center h-full text-center text-white"></div>
            <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4  text-black">
            Managing Your Office Resources
          </h1>
          <p className="text-lg sm:text-xl mb-6  text-black">
            Efficient asset allocation, seamless food ordering.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md">
            Get Started
          </button>
          </div>
            </div>
          </div>
  )
}

export default Dashboard