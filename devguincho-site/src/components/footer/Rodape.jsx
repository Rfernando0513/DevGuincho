import React from "react";
import 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './Rodape.css';
import { Link } from "react-router-dom";

const Rodape = () => {
    const telephone = "+5511958209936";
    const message = "Olá Guincho 79, gostaria de obter mais informações sobre os serviços.";
    const encodedMessage = encodeURIComponent(message);
    let linkWpp = "";

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        linkWpp = `https://api.whatsapp.com/send?phone=${telephone}&text=${encodedMessage}`;
    } else {
        linkWpp = `https://web.whatsapp.com/send?phone=${telephone}&text=${encodedMessage}`;
    }

    return (
        <>
            <footer>
                <div className="container">
                    <div className="line-footer">
                        <div className="flex">
                            <div className="logo-footer">
                                <a href="#">GUINCHO 79</a>
                            </div>
                            <div className="social-icons">
                                <a href="#">
                                    <button>
                                        <Icon.Facebook className="social-icons" size={25}/>
                                    </button>
                                </a>
                                <a href="#">
                                    <button>
                                        <Icon.Instagram className="social-icons" size={25}/>
                                    </button>
                                </a>
                                <a href={linkWpp} target="_blank" rel="noopener noreferrer">
                                    <button>
                                        <Icon.Whatsapp className="social-icons" size={25}/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="line-footer borda">
                        <p>
                            <Icon.EnvelopeFill color="#fff" size={21}/>
                            <a href="mailto:guincho79@outlook.com">guincho79@outlook.com</a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Rodape;
