import React from 'react'
import './Grupo.css'


const Grupos = ({group, group2, group3}) => {
  return (
    <div className='group'>
        <h1>Grupo 01</h1>
            {group.map((grupo, i) => (
                <span key={i} >{grupo}</span>
            ))}
        <h1>Grupo 2</h1>    
            <h3>{group2}</h3>

    </div>
  )
}

export default Grupos