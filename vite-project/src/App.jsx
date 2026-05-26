import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./components/Hero";
import Controls from "./components/Controls";
import NewsCard from "./components/NewsCard";

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("all");

  const loadNews = (cat = "all") => {
    setCategory(cat);

    axios
      .get(`https://newsbackend-ro62.onrender.com/api/news/?category=${cat}`)
      .then((res) => {
  console.log(res.data); // keep this for debugging
  setArticles(res.data.articles || res.data);
})
      .catch((err) => console.log(err));
  };

  const searchNews = (query) => {
    axios
      .get(
        `https://newsbackend-ro62.onrender.com/api/news/?search=${query}&category=${category}`
      )
      .then((res) =>  setArticles(res.data.articles || res.data)
    );
  }

  const refreshNews = () => {
  loadNews(category);
  alert("News refreshed!");
};
  useEffect(() => {
    loadNews();
    const interval = setInterval(() => {
      loadNews(category);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Hero />
      <Controls
        loadNews={loadNews}
        refreshNews={refreshNews}
        searchNews={searchNews}
      />

      <div className="grid gap-5 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.length === 0 ? (
          <p>Loading news...</p>
        ) : (
          articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;