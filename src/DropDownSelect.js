import React from 'react'

const DropDownSelect = ({name, label, placeholder, values, onChange}) => (
 <div>
   <li>
    <label>{placeholder}</label>
      <select name={name} onChange={ e => onChange(e)}>
        <option value = "">Select an option</option>
        {values.map(value => <option value={value} key={value}>{value}</option>)}
      </select>
   </li>
 </div>


)

export default DropDownSelect;