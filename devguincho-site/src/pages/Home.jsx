import React from "react";
import './Home.css';
import { Button, Card, CardGroup } from 'react-bootstrap'
import RangeText from "../components/Range/RangeText.jsx";
import * as Icon from 'react-bootstrap-icons';

function Home() {
    return (
        <>
            <div className="container">
                <div className="row col-sm-12">
                    <div className="topo-site">
                        <div className="text-topo">
                            <h1>DEV GUINCHO</h1>
                            <p>Tecnologia em movimento</p>
                            <Button variant="light">FAÇA UM ORÇAMENTO</Button>{''}
                        </div>
                    </div>
                </div>
                <div className="row col-sm-12">
                    <div className="logo">
                        <img className="imgLogo" src="img/guincho.png" alt="logo" />
                        <div />
                    </div>
                </div>
                <div className="row col-sm-12">
                    <RangeText textRange="↓ SOCORREMOS MAIS DE 1000  PESSOAS POR ANO" />
                </div>
                <div className="row col-sm-12">
                    <div className="title">
                        <h1>Socorro e Resgate <span>Rápido</span></h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 sessionCard">
                        <CardGroup className="cardGroup">
                            <Card className="custom-card">
                                <Card.Body className="text-center">
                                    <Icon.Truck  className="icon" color="var(--secondaryColor)" size={80} />
                                    <Card.Title>RESGATE 24/7</Card.Title>
                                    <Card.Text>
                                        Atendimento imediato para emergências na estrada. Ligue agora para uma solução rápida e eficiente.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                        <CardGroup className="cardGroup">
                            <Card className="custom-card">
                                <Card.Body className="text-center">
                                    <Icon.Telephone  className="icon" color="var(--secondaryColor)" size={80} />
                                    <Card.Title>Atendimento Rápido</Card.Title>
                                    <Card.Text>
                                        Oferecemos soluções especializadas de forma rápida e eficaz para suas necessidades na estrada. Contate-nos para assistência imediata e profissional.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                        <CardGroup className="cardGroup">
                            <Card className="custom-card">
                                <Card.Body className="text-center">
                                    <Icon.Box  className="iconBox" color="var(--secondaryColor)" size={80} />
                                    <Card.Title>Cálculo Rápido de Frete</Card.Title>
                                    <Card.Text>
                                        Obtenha rapidamente o custo do transporte para suas remessas. Simples e eficiente.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;