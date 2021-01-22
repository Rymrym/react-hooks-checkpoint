import React, { useState } from 'react';
import Filter from './Filter'
import {Container, Row, Input} from 'reactstrap';
import Modal from 'react-modal'
import MovieCard from './MovieCard';
import {Button} from 'react-bootstrap';

     
function MovieList() {
 
    const [modalState, setModalState]= useState(false)
  const button = {
    borderRadius : 100,
    height : 80,
    width : 80
    
  }
    const [movies, setMovies] = useState([
        {title : "A Beautiful Mind", description:"Emotionally charged film detailing the life of a brilliant academic who suffers from schizophrenia.", 
    posterUrl:"https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY1200_CR89,0,630,1200_AL_.jpg", rate:5},
    {title : "Shutter Island", description:"In 1954, U.S. Marshals Edward Teddy Daniels and his new partner Chuck Aule travel to the Ashecliffe Hospital for the criminally insane on Shutter Island in Boston Harbor. They are investigating the disappearance of patient Rachel Solando, incarcerated for drowning her three children.", 
    posterUrl:"https://images-na.ssl-images-amazon.com/images/I/51MsI8xR-NL._AC_.jpg", rate:5},
    {title : "The Green Mile", description:"Death row supervisor Paul Edgecombe's encounter with John Coffey, an unusual inmate who displays inexplicable healing and empathetic abilities.", 
    posterUrl:"https://images-na.ssl-images-amazon.com/images/I/71%2BgLki%2BJ8L._AC_SL1500_.jpg", rate:4},
    {title : "The Dark Knight", description:" Batman and his primal confrontation with the Joker, the villain who is first among equals", 
    posterUrl:"https://i5.walmartimages.com/asr/9f50302f-a5d7-4ea1-bd68-a956191e9003_1.2336cbe0c9518fd2378eabe3f32bbb0f.jpeg", rate:4},
    {title : "Papillon", description:"French convict Henri Charrière, nicknamed Papillon, who was imprisoned in 1933 and escaped in 1941 with the help of another convict, counterfeiter Louis Dega.", 
    posterUrl:"https://movieposters2.com/images/1562472-b.jpg", rate:3},

])
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [poster, setPoster] = useState('')
const [rate, setRate] = useState('')
const getData = (val)=>{
    setMovies(movies.filter(item=>item.title.includes(val.target.value))
  )}
  const handleTitleChange = (event)=>{
setTitle(event.target.value)
  }
const handleDescriptionChange = (event)=>{
    setDescription(event.target.value)
  }
  const handleURLChange = (event)=>{
    setPoster(event.target.value)
  }
  const handleRateChange = (event)=>{
    setRate(event.target.value)
  }


  const addMovie = (event)=>{
event.preventDefault();
setMovies([...movies,{title :title, description : description, posterUrl : poster, rate : rate} ])
setModalState(false)
}


    return (
       <>
       <Container fluid><Filter getInput = {getData} ></Filter></Container><br/>
       <Container fluid><Row>
       {movies.map(movie => <MovieCard height = "200" width = "33%"title = {movie.title} description = {movie.description} poster = {movie.posterUrl} rate = {movie.rate}></MovieCard>)}
       <div style ={{padding : 100}}>
      <Button style = {button} variant = 'dark' onClick = {()=>setModalState(true)}>New Movie</Button> 
      </div>
      </Row>
      </Container>
      <Modal isOpen={modalState}>
        <div style ={{margin : 70}}>
        <Input placeholder="Movie Title" onChange={handleTitleChange}></Input><br/>
        <Input placeholder="Movie Description" onChange={handleDescriptionChange}></Input><br/>
        <Input placeholder="Poster URL" onChange={handleURLChange}></Input><br/>
        <Input placeholder="Rate" onChange={handleRateChange}></Input><br/>
        <Button variant ='dark' onClick = {addMovie}>Submit</Button>
        </div>
        </Modal>  
      
     
       </> 
    );
}
export default MovieList;