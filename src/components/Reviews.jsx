import axios from "axios"
import { baseURL, config } from "../services"
import Button from "./Button"
import "../components/Reviews.css"
import {useState} from "react"


function Reviews(props) {
  const [like, setLike] = useState(1)
  const deleteReview = async () => {
    const specificURL = `${baseURL}/${props.review.id}`
    await axios.delete(specificURL, config)
    props.setToggleFetch((curr) => !curr)
  }

  const { favoriteDish, location, restaurant, review } = props.review.fields
  const handleSubmit = (e) => {
    e.preventDefault()
    setLike(like +1)
      
  
  }
  

  return (
    
    <div className ="">
      <h3>restaurant: {restaurant}</h3>
      <h4>location:{location }</h4>
      <h3>favorite dish:{favoriteDish}</h3>
      <h5>review:{review}</h5>
      <h5>{like}</h5>
      <button onClick={deleteReview}>Delete</button>
      {/* <Button like ={props.review.fields.likes}></Button> */}
      <button onClick={handleSubmit}>
        like
      </button>

      
      
      </div>
      
    
  )
  
}

export default Reviews;