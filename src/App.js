
import { Route } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios"
import Nav from "./components/Nav";
import { baseURL, config } from "./services";
import './App.css';
import Reviews from "./components/Reviews"
import Form from "./components/Form"

function App() {
  const [reviews, setReviews] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const fetchReviews = async () => {
      const resp = await axios.get(baseURL, config);
      setReviews(resp.data.records)
      console.log(resp.data.records)
    }
    fetchReviews()
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />

      <Route exact path="/">
        <main>
          {reviews.map((review) => (
            <Reviews review={review}
              setToggleFetch={ setToggleFetch}/>
            
          ))}
        </main>
      </Route>
      
      <Route path="/new">
        <Form reviews={reviews} setToggleFetch={ setToggleFetch}/>
      </Route>

      <Route path="/edit/:id">
        <h3>3rd linK</h3>
      </Route>

    </div>
  );
}
export default App;