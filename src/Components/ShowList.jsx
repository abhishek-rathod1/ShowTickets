import React from "react";
// import { Link } from 'react-router-dom';

const ShowList = ({ show }) => {

  function readmore(){
    document.getElementById("popup").hidden = false;

  }

  function disable(){
    document.getElementById("popup").hidden = true;
  }

  return (
    <div id="show-container">
      {show.map((show) => {
        const { score } = show;
        const { id, name, type, url, image,summary,genres } = show.show;
        // const { medium } = show.show.image;
        // console.log(image.medium)
        // console.log(summary)
        return (
          

            <div className="card" style={{width: "18rem"} } key={id}>

            <div hidden={true} id="popup" >
              {summary}
              <button className="btn btn-primary" onClick={() => {disable()}}>
                 Hide
              </button>
            </div>

              {image ? 
                <img src={image.medium} className="card-img-top" alt="..." />
                :
                <></>
            }
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                  {type} <br/><b>Genres:</b>  {genres}
                </p>
                <button className="btn btn-primary read-more-btn" onClick={() => {readmore()}}>
                  Read more
                </button>
                <a href={url} className="btn btn-primary">
                  More info
                </a>
              </div>
            </div>
          
        );
      })}
    </div>
  );
};

export default ShowList;
