import { useState } from "react";
import { baseURL, config } from "../services"
import axios from "axios"
import Reviews from "../components/Reviews"
import "../components/Form.css"



function Form(props) {
  const [location, setLocation] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [favoriteDish, setFavoriteDish] = useState("");
  const [review, setReview] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault()
    //e.target.reset()

    const newReview = {
      restaurant,
      location,
      favoriteDish,
      review,
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
        //className="review-input"          
        placeholder="review"
          //size="150"
          
          
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
            <div class ="snipit">
            <h1 id="snipit-text">
              {review.fields.restaurant}
              </h1>
              <h6 id="snipit-text">{review.fields.location}</h6>
            <h3 id="snipit-text">
              {review.fields.review}
            </h3>
            
          </div>

              
        )
      })}
        </div>
    </div>
    
  );



}

export default Form;
