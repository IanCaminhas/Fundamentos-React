import './index.css'
import ReactDom from 'react-dom'
import React from 'react'
import Primeiro  from './componentes/basicos/Primeiro'

const tag =  <strong>Olá React!</strong>

ReactDom.render(
    <div>
       <Primeiro></Primeiro>

    </div>, 
    document.getElementById('root')
)



