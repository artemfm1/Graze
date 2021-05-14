import axios from "axios"
import { baseURL, config } from "../services"
import {useState} from "react"
import "./Reviews.css"
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons";

function Reviews(props) {
  const deleteReview = async () => {
    const specificURL = `${baseURL}/${props.review.id}`
    await axios.delete(specificURL, config)
    props.setToggleFetch((curr) => !curr)
  }

  const { favoriteDish, location, restaurant, review, likes } = props.review.fields
  const handleSubmit = async (e) => {
    e.preventDefault()
    const specificURL = `${baseURL}/${props.review.id}`
    const updateReview = {
      favoriteDish,
      location,
      restaurant,
      review,
      likes: likes+1
    }
    await axios.put(specificURL, { fields: updateReview }, config)
    props.setToggleFetch((curr) => !curr)
  
  }
  

  return (
    
    <div className ="full-review">
      <h3>restaurant: {restaurant}</h3>
      <h4>location:{location }</h4>
      <h3>favorite dish:{favoriteDish}</h3>
      <h5>review:{review}</h5>
      <h1> {likes}</h1>
      <FontAwesomeIcon icon={faDumpsterFire} onClick={deleteReview}/>
      {/* { <Button like ={props.review.fields.likes}></Button> } */}
      <FontAwesomeIcon icon={faHeart} onClick={handleSubmit}/>


      
      
      </div>
      
    
  )
  
}

export default Reviews;