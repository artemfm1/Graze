import { useState } from "react";
import { baseURL, config } from "../services"
import axios from "axios"
import Reviews from "../components/Reviews.css"
import "../components/Form.css"



function Form(props) {
  const [location, setLocation] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [favoriteDish, setFavoriteDish] = useState("");
  const [review, setReview] = useState("");
  const [likes, setLikes] = useState(0)


  const handleSubmit = async (e) => {
    e.preventDefault()
    

    const newReview = {
      restaurant,
      location,
      favoriteDish,
      review,
      likes,
    };

    await axios.post(baseURL, { fields: newReview }, config);
    props.setToggleFetch((curr) => !curr);
    setLocation("")
    setRestaurant("")
    setFavoriteDish("")
    setReview("")
  }

  return (

  

    <div className ="form-container">

    <form onSubmit={handleSubmit}>

      <label htmlFor="location"> </label>
        <input
        placeholder="location"
        type="text"
        id="location"
        required value={location}
          onChange={(e) => setLocation(e.target.value)} />
        <br></br>
      
      <label htmlFor="restaurant"> </label>
        <input
        placeholder="restaurant"
        type="text"
        id="restaurant"
        required value={restaurant}
        onChange={(e) => setRestaurant(e.target.value)} />
      <br></br>      
      
        <label htmlFor="favoriteDish"></label>
        <input
        placeholder="favorite dish"
        type="text"
        id="favoriteDish"
        value={favoriteDish}
        onChange={(e) => setFavoriteDish(e.target.value)} />
      <br></br>
      
        <label htmlFor="review"> </label>
        <textarea          
        placeholder="review"
          rows={10}
          cols={23}
          id="review"
        value={review}
        onChange={(e) => setReview(e.target.value)} />
      
      

      <button type="submit">Post</button>


      


      </form>
      
      <div className ="tile-review">
      {props.reviews.map((review)=>{
        return(
          <div class="snipit">
            
            <h2 id="snipit-text">restaurant:
              {review.fields.restaurant}
            </h2>
            
              <h3 id="snipit-text">location:{review.fields.location}</h3>
            
            <h4 id="snipit-text">
              {review.fields.review}
            </h4>
            
          </div>  
        )
      })}
        </div>
    </div>
    
  );



}

export default Form;
