import React from "react";
import './BtnPrimary.css'
import { Link } from 'react-scroll'

function BtnPrimary({ btnText }) {

    return (
        <div className="btn-section">
            <Link
                activeClass="active"
                to='orcamento'
                spy={true}
                smooth={true}
                offset={-90}
                duration={900}
            >
                <button className="btnText">
                    {btnText}
                </button>
            </Link>
        </div>
    );
}

export default BtnPrimary;
