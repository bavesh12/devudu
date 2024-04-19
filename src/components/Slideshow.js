import React from "react";
import "./Slideshow.css"
import fir from "./Ganapathi.png"
import sec from "./Hanuman.jpg"
import thi from "./Lakshmi.png"
import fou from "./Ganapathi.png"
import fiv from "./Lakshmi.png"

export default function Slideshow(){
    return (
        <div>
        <base href="" />
<div id="captioned-gallery">
    <figure className="slider">
        <figure>
            <img src={fir} />
        </figure>
        <figure>
            <img src={sec}/>
        </figure>
        <figure>
            <img src={thi} />
        </figure>
        <figure>
            <img src={fou} />
        </figure>
        <figure>
            <img src={fiv} />
        </figure>
    </figure>
</div>
</div>
    )
}