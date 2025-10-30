import React from 'react'
export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-300 ${className}`}
      {...props}
    />
  )
}
