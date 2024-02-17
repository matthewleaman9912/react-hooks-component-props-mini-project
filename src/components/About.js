import React from "react";

function About({ image, about }) {
    if(!image) {
        return(
            <aside>
                <img src="https://via.placeholder.com/215" alt="blog logo"></img>
                <p>{about}</p>
            </aside>
        )
    }
    else {
        return(
             <aside>
                <img src={image} alt="blog logo"></img>
                <p>{about}</p>
            </aside>
        )
    }
}

export default About;