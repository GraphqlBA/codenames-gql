import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

function Button ({ children, to, size, ...props }) {
  const Tag = to ? Link : 'button'
  const classNames = [
    'Button',
    size === 'big' && 'Button--big'
  ].filter(Boolean).join(' ')

  return (
    <Tag className={classNames} to={to} {...props}>
      {children}
    </Tag>
  )
}

export default Button
