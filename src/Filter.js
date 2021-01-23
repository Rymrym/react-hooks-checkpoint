import React, {useState} from 'react';
import StarRating from './StarRating'
import {Input} from 'reactstrap'
import {Button} from 'react-bootstrap';
function Filter(props) {
    const [title, setTitle] = useState("")
    const [rate, setRate] = useState(null)
   const handleRate =(ratingValue)=>{
        setRate(ratingValue)
    }

    return (
       <>
       <div style = {{paddingLeft : 500, paddingTop : 20}}>
       <StarRating handleRate={handleRate}/>
       <Input type = "text" onChange={(e)=>setTitle(e.target.value)} placeholder="Search..." style = {{background : "transparent"}}></Input>
       <Button onClick={()=>props.findMovies(title, rate)} variant = 'dark'>Search</Button>
       </div>
       </> 
    );
}
export default Filter;