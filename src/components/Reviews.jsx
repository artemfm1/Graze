import axios from "axios"
import { baseURL, config } from "../services"

function Reviews(props) {
  const deleteReview = async () => {
    const specificURL = `${baseURL}/${props.review.id}`
    await axios.delete(specificURL, config)
    props.setToggleFetch((curr) => !curr)
  }

  const { favoriteDish, location, restaurant, review } = props.review.fields


  return (
    <div>
      <h3>restaurant: {restaurant}</h3>
      <h4>location:{location }</h4>
      <h3>favorite dish:{favoriteDish}</h3>
      <h5>review:{review}</h5>
      <button onClick={deleteReview}>Delete</button>
      
      
      
    </div>
  )
}

export default Reviews;