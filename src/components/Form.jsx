import { useState } from "react";

function Form() {
  const [location, setLocation] = useState(" ");
  const [restaurant, setRestaurant] = useState(" ");
  const [favoriteDish, setFavoriteDish] = useState(" ");
  const [review, setReview] = useState(" ");

  return (
    <form action="">

      <label htmlFor="location">location</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)} />
      
      <label htmlFor="restaurant">restaurant</label>
      <input
        type="text"
        id="restaurant"
        value={restaurant}
        onChange={(e) => setRestaurant(e.target.value)} />
      
      <label htmlFor="favoriteDish">favorite dish</label>
      <input
        type="text"
        id="favoriteDish"
        value={favoriteDish}
        onChange={(e) => setFavoriteDish(e.target.value)} />
      
      <label htmlFor="review">review</label>
      <input
        type="text"
        id="review"
        value={review}
        onChange={(e) => setReview(e.target.value)} />
      
      

      <button type="submit">Post</button>
    </form>
  );
}

export default Form;
