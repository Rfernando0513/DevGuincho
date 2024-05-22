import React from "react";
import './Home.css';
import { Button, Card, CardGroup } from 'react-bootstrap'
import RangeText from "../components/Range/RangeText.jsx";
import * as Icon from 'react-bootstrap-icons';

function Home() {
    return (
        <>
            <div className="container">
                <div className="row col-sm-1">
                    <div className="topo-site">
                        <div className="text-topo">
                            <h1>DEV GUINCHO</h1>
                            <p>Tecnologia em movimento</p>

                            <Button variant="light">FAÇA UM ORÇAMENTO</Button>{''}
                        </div>
                    </div>
                </div>
                <div className="row col-sm-1">
                    <div className="logo">
                        <img className="imgLogo" src="img/guincho.png" alt="logo" />  
                    <div />
                </div>
                </div>
                <div className="row col-sm-1">
                    <RangeText textRange="↓ SOCORREMOS MAIS DE 1000  PESSOAS POR ANO"/>
                </div>
                <div className="row col-sm-1">
                    <div className="title">
                        <h1>Socorro e Resgate <span>Rápido</span></h1>
                        <hr />
                    </div>
                </div>
                <div className="row col-sm-3">
                    <CardGroup>
                        <Card>
                            <Icon.Telephone color="--secondaryColor" size={90}/>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </>
    )
}

export default Home;