import React from "react";
import Counter from "../counter/Counter"
import './Benefit.css'

const Benefit = ({title, subTitle, description, highLight, showCounter}) => {
    return (
        <div className="benefit-data">
            {showCounter ? <Counter end={subTitle}/> : <h3>{subTitle}</h3>}
            <h2>{title}</h2>
            {description && <p>{description} <b>{highLight}</b></p>}
        </div>
    )
}

export default Benefit;