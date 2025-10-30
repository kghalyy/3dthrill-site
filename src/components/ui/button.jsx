import React from 'react'
export function Button({ className = '', children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center px-4 py-2 rounded-xl font-medium text-white shadow-sm transition ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
