import { useState } from 'react'

export const useTabValue = initialValue => {
  const [value, setValue] = useState(initialValue)
  const onChange = e => setValue(e.target.dataset.number)
  
  return { value, onChange }
}