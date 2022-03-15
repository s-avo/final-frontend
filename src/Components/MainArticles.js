import { Link } from "react-router-dom";
import getMainArticles from "../API/getMainArticles";

function MainArticles() {
  const articles = getMainArticles()

  const articleList = articles.map((article, index) => {
      return (
          <div className="col mb-3" key={index}>
              <div className="card mb-3  main-art">
                  <div className="row g-0">
                      <div className="col-md-4">
                          <img src={article.image} className="img-fluid" style={{height: 190, width: 400}} alt="..." />
                      </div>
                      <div className="col-md-8">
                          <div className="card-body">
                              <h5 className="card-title">
                                  <Link to={`/articles/article`}>
                                      {article.title}
                                  </Link>
                              </h5>
                              <p className="card-text">{article.description}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
            
      
      )
  })

  return (
         
      <div className="row">
              {articleList}
          </div>
  )

  }

export default MainArticles