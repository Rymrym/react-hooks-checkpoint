import React, {useState} from 'react';
import {Input} from 'reactstrap'
function Filter(props) {

  
    return (
       <>
       <div style = {{paddingLeft : 900, paddingTop : 20}}>
       <Input type = "text" onChange={props.getInput} placeholder="Search..." style = {{background : "transparent"}}></Input>
       </div>
       </> 
    );
}
export default Filter;