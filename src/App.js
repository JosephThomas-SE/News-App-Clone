import { useEffect, useState } from 'react';
import './App.css';
import News from'./News';
function App() {
  
  let [articles, setArticles] = useState([]);
  let [catagory, setCatagory] = useState("Kerala");

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${catagory}&apiKey={YourAPIKey}`)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
        console.log(news.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  },[catagory])

  return (
    <div className="App">
      <header className="header">
        
        <h1>News App Clone</h1>

        <input type="text" onChange={(event)=>{
        if(event.target.value !== "")
        {
          setCatagory(event.target.value);
        }
        else{
          setCatagory("india")
        }
        }} placeholder="Search News"/>
      
      </header>

      <section className="news-articles">
        
        {

          articles.length !==0?
          
            articles.map((article)=>{
              return (
                <News article = {article}/>
              )
            })
          :
          <h3>No News Found On the Searched Topic</h3>
        }
        
      </section>
    </div>
  );
}

export default App;
