import { ChevronDown } from 'lucide-react'
import './Select.css'

type Option<T extends string> = { value: T; label: string }

type SelectProps<T extends string> = {
  value: T
  options: Option<T>[]
  onChange: (value: T) => void
  ariaLabel?: string
}

function Select<T extends string>({ value, options, onChange, ariaLabel }: SelectProps<T>) {
  return (
    <div className="select">
      <select
        className="select__input"
        value={value}
        aria-label={ariaLabel}
        onChange={(e) => onChange(e.target.value as T)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="select__icon" size={16} />
    </div>
  )
}

export default Select