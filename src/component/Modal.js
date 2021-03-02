import React from 'react'
import ReactDom from 'react-dom'
import {useState} from 'react'


const Modal =(props)=>{
const[statues,setStatues]=useState('active')
    return ReactDom.createPortal(
        <div className={`ui dimmer modals visible ${statues}`} onClick={props.onDismiss}>
            <div className='ui standard modal visible active' onClick={(e)=>{e.stopPropagation()}}>
             <div className='header'>{props.header}</div>
             <div className='content'>{props.content}</div>
             <div className='actions'>
                 {props.action}
             </div>

            </div>
        </div>,document.querySelector('#modal')
    )
}
export default Modal