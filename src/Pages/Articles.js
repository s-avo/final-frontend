import { Link } from "react-router-dom"
import getArticles from "../API/getArticles"

function Articles() {
    const articles = getArticles()

    const articlesList = articles.map((article, index) => {

        return (
            <>
            <div className="row pb-3" key={index}>
                <div className="container mb-1 p-3 bg-light" style={{borderRadius: "25px"}}>
                    <div className="row">
                        <div className="col-4">
                            <img src={article.image} style={{height: "200px", width: "340px", borderRadius: "25px"}} />
                        </div>
                        <div className="col-8">
                            <h4>{article.title}</h4>
                            <p>{article.description}</p>
                            <Link className="nav-link" to={`/articles/${index}`}><button className="green-btn" style={{"padding": "10px"}}>See the cause</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>    
    )
        
    })


    return (
        <div>
            {articlesList}
        </div>
    )
}

export default Articles