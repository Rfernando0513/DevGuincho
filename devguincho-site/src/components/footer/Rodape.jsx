import React from "react";
import 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import './Rodape.css'
import { Link } from "react-router-dom";
const Rodape = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="line-footer">
                        <div className="flex">
                            <div className="logo-footer">
                                <a href="#">DEV GUINCHO</a>
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
                                <a href="#">
                                    <button>
                                        <Icon.Bag className="social-icons" size={25}/>
                                    </button>
                                </a>

                            </div>
                        </div>


                    </div>
                    <div className="line-footer borda">
                        <p>
                            <Icon.EnvelopeFill color="#fff" size={22}/>
                            <a href="#">sejam@outlook.com</a>
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Rodape;