import React from "react";
import './RangeText.css';


function RangeText(props) {
    return (
        <div className="range">
            <p>
                {props.textRange}
            </p>
        </div>
    )
}

export default RangeText;