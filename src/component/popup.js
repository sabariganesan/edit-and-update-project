import React from 'react'
import "../component/popup.css"
import { useState} from 'react/cjs/react.development'
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from "react-redux"

function Popup(props) {
const state = useSelector(state => state.val)
const [update,setupdate]=useState(state)
const dispatch=useDispatch();

  const change=(e)=>{
    setupdate({...update,[e.target.name]:e.target.value})

  }
  const sent=()=>{
      dispatch({type:"edit",payload:update})
      props.updateddata(update)
  }
    return (
        <div className="popup">
           <div className="container">
           Title <TextField type="text" value={update.title} name="title" onChange={change} style={{backgroundColor:"white"}} className="input"></TextField><br/>
           Price <TextField type="text" value={update.price} name="price" onChange={change}  style={{backgroundColor:"white"}}  className="input"></TextField><br/>
            Ratings<TextField type="text" value={update.rating} name="rating" onChange={change}  style={{backgroundColor:"white"}}  className="input"></TextField><br/> 
            <Button onClick={sent}>update</Button>
            </div> 
        </div>
    )
}

export default Popup
