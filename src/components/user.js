import React from 'react'

const user = (props) => {
 return(<li> 
  <span>name: {props.children}, hobbies: {props.hobbies}</span>
  <button onClick={props.deletion}>Delete</button>
  </li>
 )
}

export default user;