import React from 'react'
export function Badge({ className = '', children, variant }) {
  const base = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border'
  const styles = variant === 'outline' ? 'border-gray-300 text-gray-700'
    : 'bg-gray-100 text-gray-700 border-transparent'
  return <span className={`${base} ${styles} ${className}`}>{children}</span>
}
