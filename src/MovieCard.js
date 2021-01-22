import React from 'react';
import StarRatingComponent from 'react-star-rating-component'


function MovieCard(props) {
 const style = {height : 250,
          backgroundColor : "#181818",
                margin : 10}
    return (
       <>
   <div   style={style}>
      <img src = {props.poster}   height = "200" width = "280"/><br/>
     <h6 style = {{float : "left", color : "whitesmoke"}}>{props.title}</h6>
      <StarRatingComponent
    name={"movie rate"} /* name of the radio input, it is required */
    value={props.rate} /* number of selected icon (`0` - none, `1` - first) */
    starCount={5} /* number of icons in rating, default `5` */
    starColor={"#ffb400"} /* color of selected icons, default `#ffb400` */
    emptyStarColor={"#333"} /* color of non-selected icons, default `#333` */
    editing={false} /* is component available for editing, default `true` *//>
 
    </div>
     
       </> 
    );
}
export default MovieCard;
