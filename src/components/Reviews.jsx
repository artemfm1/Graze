function Reviews(props) {
  const { favoriteDish, location, restaurant, review } = props.review.fields


  return (
    <div>
      <h3>restaurant: {restaurant}</h3>
      <h4>location:{location }</h4>
      <h3>favorite dish:{favoriteDish}</h3>
      <h5>review:{review}</h5>
      
      
      
    </div>
  )
}

export default Reviews;