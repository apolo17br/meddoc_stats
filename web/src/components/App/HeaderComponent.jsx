import React,{Component} from 'react';
import '../../styles/global.css';


export default function HeaderComponent(props) {
  return (<>
        <h1>
           oioiio{props.titulo}
        </h1>
  </>);
}