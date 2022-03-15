import Carousel from "../Components/Carousel"
import MainArticles from "../Components/MainArticles"
import MainImage from "../Components/MainImage"

function Home() {
    return(
        <div className="container">
            <Carousel />
            <MainImage />
            <h3 className="p-3" style={{backgroundColor: "#E0D268"}}><strong>Most recent causes:</strong></h3>
            <MainArticles />
        </div>
       
    )
}

export default Home