import React from "react";
import './BtnPrimary.css'
import { Button } from "react-bootstrap";


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