import React from 'react'
export function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full border rounded-xl px-4 h-12 focus:outline-none focus:ring-2 focus:ring-purple-300 ${className}`}
      {...props}
    />
  )
}
