import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Header from './Header';

const News = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const API_KEY = "86eccef355754e1a830a30e9b271ab69";
    const BASE_URL ="https://newsapi.org/v2/everything";

    useEffect(() => {
        const fetNews = async() => {
            setLoading(true);
            setError("");

            try {
                const response = await axios.get(BASE_URL, {
                  params: {
                    q: "education", // Search keyword
                    apiKey: API_KEY,
                    language: "en", // Language preference
                    sortBy: "publishedAt", // Sort by newest articles
                  },
                });
                setArticles(response.data.articles);
            }
            catch(err){
                setError("Failed to fetch news. Please try again.")
            } finally{
                setLoading(false);
            }
        };

        fetNews();
    },[]);


  return (
    <div>
        <Header/>
    <div style={{padding:"20px", fontFamily:"Arial, sans-serif"}}>
        <h1>Latest Educational News</h1>

        {loading ? (
            <p>Loading news...</p>
        ) : error ? (
            <p style={{color:"red"}}>{error}</p>
        ) : (
            <div>
                {articles.length > 0 ? (
                    <ul style={{listStyle:"none", padding:0}}>
                        {articles.map((article, index) =>(
                            <li 
                            key={index}
                            style={{
                                marginBottom: "20px",
                                padding: "10px",
                                border: "1px solid #ddd",
                                borderRadius: "5px",
                            }}>
                                <h2>
                                    <a
                                        href={article.url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        style={{textDecoration:"none", color:"#007BFF"}}
                                    >
                                        {article.title}
                                    </a>
                                </h2>
                                <p>
                                    <strong>Published At:</strong> {" "}
                                    {new Date(article.publishedAt).toLocaleDateString()}
                                </p>
                                <p>{article.description}</p>
                            </li>
                        )
                        )}
                    </ul>
                ) : (
                    <p>No articles found.</p>
                )}
                </div>
        )
    
    }
      </div>
    </div>
  );
};

export default News;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const News = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const API_KEY = "86eccef355754e1a830a30e9b271ab69"; // Replace with your News API key
//   const BASE_URL = "https://newsapi.org/v2/everything";

//   useEffect(() => {
//     const fetchNews = async () => {
//       setLoading(true);
//       setError("");

//       try {
//         const response = await axios.get(BASE_URL, {
//           params: {
//             q: "education", // Search keyword
//             apiKey: API_KEY,
//             language: "en", // Language preference
//             sortBy: "publishedAt", // Sort by newest articles
//           },
//         });
//         setArticles(response.data.articles);
//       } catch (err) {
//         setError("Failed to fetch news. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []); // Empty dependency array to run only on mount

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1>Latest Educational News</h1>

//       {loading ? (
//         <p>Loading news...</p>
//       ) : error ? (
//         <p style={{ color: "red" }}>{error}</p>
//       ) : (
//         <div>
//           {articles.length > 0 ? (
//             <ul style={{ listStyle: "none", padding: 0 }}>
//               {articles.map((article, index) => (
//                 <li
//                   key={index}
//                   style={{
//                     marginBottom: "20px",
//                     padding: "10px",
//                     border: "1px solid #ddd",
//                     borderRadius: "5px",
//                   }}
//                 >
//                   <h2>
//                     <a
//                       href={article.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       style={{ textDecoration: "none", color: "#007BFF" }}
//                     >
//                       {article.title}
//                     </a>
//                   </h2>
//                   <p>
//                     <strong>Source:</strong> {article.source.name}
//                   </p>
//                   <p>
//                     <strong>Published At:</strong>{" "}
//                     {new Date(article.publishedAt).toLocaleDateString()}
//                   </p>
//                   <p>{article.description}</p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No articles found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default News;
