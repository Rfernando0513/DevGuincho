import React from "react";
import './BtnPrimary.css'

const PRIMARY = "primary";
const SECONDARY = "secondary";

function BtnPrimary({ btnText, disabled, loading, onClick, variant }) {

    variant = variant === PRIMARY || variant === SECONDARY ? variant : PRIMARY;
    const buttonText = loading ? 'Carregando...' : btnText;

    return (
        <button
            onClick={onClick} 
            className={`btn ${variant}`}
            disabled={disabled}>

            {buttonText}
        </button>
    );
}

export default BtnPrimary;