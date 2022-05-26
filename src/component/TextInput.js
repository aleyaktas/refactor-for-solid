import React from 'react'

const TextInput = ({rows, placeholder, value, onChange, isTextArea=false}) => {
  return (
    <div>
      <label>{placeholder}</label>
      {isTextArea? 
      <textarea
        rows={rows}
        type="text"
        placeholder={placeholder}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
      /> : 
      <input
        type="text"
        placeholder={placeholder}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />}
      
    </div>
  )
}


export default TextInput