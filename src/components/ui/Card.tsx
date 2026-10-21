import type { ReactNode } from 'react'
import './Card.css'

type CardProps = {
  title?: string
  children: ReactNode
  className?: string
}

function Card({ title, children, className = '' }: CardProps) {
  return (
    <section className={`card ${className}`}>
      {title && <h2 className="card__title">{title}</h2>}
      {children}
    </section>
  )
}

export default Card