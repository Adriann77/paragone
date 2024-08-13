import React from 'react'

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-14">
      <div className="flex w-52 rotate-180 gap-4">
        <div className="h-42 skeleton w-5"></div>
        <div className="h-50 skeleton w-5"></div>
        <div className="skeleton h-44 w-5"></div>
        <div className="skeleton h-36 w-5"></div>
        <div className="skeleton h-44 w-5"></div>
        <div className="skeleton h-32 w-5"></div>
        <div className="skeleton h-48 w-5"></div>
      </div>
      <div className="skeleton h-44 w-44 rounded-full"></div>
      <div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-4 w-52"></div>
          <div className="skeleton h-4 w-52"></div>
          <div className="skeleton h-4 w-52"></div>
          <div className="skeleton h-4 w-52"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
