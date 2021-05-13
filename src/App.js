
import { Route } from "react-router-dom";
import { Component, useEffect, useState } from "react"
import axios from "axios"
import Nav from "./components/Nav";
import { baseURL, config } from "./services";
import './App.css';
import Reviews from "./components/Reviews"
import Form from "./components/Form"
import Footer from "./components/Footer"
import About from "./components/About"
import "./components/Reviews.css"



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
        <Form reviews={reviews} setToggleFetch={ setToggleFetch}/>
      </Route>
      
      <Route path="/new">
        <main className="review-containter">
          {reviews.map((review) => (
            <Reviews review={review}
              setToggleFetch={ setToggleFetch}/>
            
          ))}
        </main>
      </Route>
      


      <Route path="/edit/:id">
            <About />
      </Route>

    
      
      <Footer />

    </div>
  );
}
export default App;