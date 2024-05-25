import React from "react";
import './BtnPrimary.css'



function BtnPrimary({ btnText }) {
    return (
        <div className="btn-section">
            <button className="btn">
                {btnText}
            </button>
        </div>
    );
}

export default BtnPrimary;