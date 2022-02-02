import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Blog"
    
    async function getArticles() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const response = await request.json();

      setArticles(response);
      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Blog</h1>
      <p className="section-description">Ini adalah artikel artikelkuu yaa guys</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="articles">
          {articles.map((article) => {
            return (
              <article key={article.id} className="article">
                <h3 className="article-title"><Link to={`/blog/${article.id}`}>{article.title}</Link></h3>
                {/* <h1><a href={`/blog/${article.id}`}>{article.title}</a></h1> */}
                <time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
              </article> 
            )
          })}
        </div>
      )}
    </section>
  );
}
