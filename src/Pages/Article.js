import { useState } from "react"
import animal1 from "../Images/animal1.jpg"
import animal2 from "../Images/animal2.jpg"
import animal4 from "../Images/animal4.jpg"
import animal5 from "../Images/animal5.jpg"
import animal6 from "../Images/animal6.jpg"
import image4 from "../Images/image4.jpg"

function Article() {

  const images = [animal1, animal2, animal4, animal5, animal6, image4];

  const [LargeImage, setImage] = useState(animal1);

  const updateImage = (event) => {
    setImage(event.target.src);
  }

  const imagesList = images.map((imgElement) => {
    return (
      <div className="col-4 col-md-4">
        <img
          onClick={updateImage}
          className="imgRow img-fluid"
          style={{ maxWidth: "100%", marginBottom: "10px" }}
          src={imgElement}
          alt=""
        />
      </div>
    )
  })

  return (
    <div>
      <div className="container mb-5">
        <h2 className="mb-4">Help to care about <span style={{color: "#128079"}}> the animals</span>:</h2>
        <div className="row pt-3">
          <div className="col-12 col-md-4 ">
            <div className="row">
              <div id="bigDiv">
                <img
                  id="bigImage"
                  style={{
                    width: "310px",
                    height: " 300px",
                    marginLeft: "30px",
                  }}
                  src={LargeImage}
                  alt=""
                />
              </div>
            </div>
                <div className="row pt-3">{imagesList}</div>
          </div>

          <div className="col-10 col-md-8" style={{width: "35rem"}}>
            <p className="p3" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="p3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article