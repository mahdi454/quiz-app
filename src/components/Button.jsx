import React from 'react'

function Button({children, onClick}) {
  return (
  <button className=' w-64 rounded-full py-2 px-10 block  bg-slate-500 m-2 hover:bg-slate-400 hover:translate-x-4 duration-500 outline-none' onClick={onClick}>{children}</button>
  )
}

export default Button