import React from 'react'
import './Selecao.css'
import inglaterra from '../inglaterra.png'
import brasil from '../brasil.png'
import alemanha from '../alemanha.png'
import croacia from '../croacia.png'

const Selecao = ({pickedCategory}) => {
  return (
    <div className='selecao'>
        <h1>Seleção</h1>
        <h2>{pickedCategory}</h2>
        {pickedCategory === 'Inglaterra' &&
            <img src={inglaterra}/>
        }
        {pickedCategory === 'Brasil' && 
            <img src={brasil} />
        }
        {pickedCategory === 'Alemanha' && 
            <img src={alemanha} />
        }
        {
          pickedCategory === 'Croácia' &&
          <img src={croacia} />
        }
    </div>
  )
}

export default Selecao