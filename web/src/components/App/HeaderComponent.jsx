import React from 'react'
import '../../styles/global.css';


export default function HeaderComponent(props) {
  return (<>
        <h1>
            {props.titulo}
        </h1>
  </>)
}