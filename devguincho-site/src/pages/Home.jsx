import './Home.css';
import { Button, Card, CardGroup, Form } from 'react-bootstrap'
import RangeText from "../components/range/RangeText.jsx";
import * as Icon from 'react-bootstrap-icons';
import BtnPrimary from "../components/range/btn-primary/BtnPrimary.jsx";
import InputGroup from 'react-bootstrap/InputGroup';
import { IMaskInput } from "react-imask";
import CardComponent from '../components/card/CardComponent.jsx';



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
                <div className="row sessionCard" >
                    <div className="col-sm-4 ">
                        <CardGroup className="cardGroup">
                            <Card className="custom-card">
                                <Card.Body className="text-center">
                                    <Icon.Truck className="icon" color="var(--secondaryColor)" size={80} />
                                    <Card.Title>RESGATE 24/7</Card.Title>
                                    <Card.Text>
                                        Atendimento imediato para emergências na estrada. Ligue agora para uma solução rápida e eficiente.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>
                    <div className="col-sm-4 ">
                        <CardGroup className="cardGroup">
                            <Card className="custom-card">
                                <Card.Body className="text-center">
                                    <Icon.Telephone className="icon" color="var(--secondaryColor)" size={80} />
                                    <Card.Title>Atendimento Rápido</Card.Title>
                                    <Card.Text>
                                        Oferecemos soluções especializadas de forma rápida e eficaz para suas necessidades na estrada. Contate-nos para assistência imediata e profissional.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>
                    <div className="col-sm-4 ">
                        <CardGroup className="cardGroup">
                            <Card className="custom-card">
                                <Card.Body className="text-center">
                                    <Icon.Box className="iconBox" color="var(--secondaryColor)" size={80} />
                                    <Card.Title>Cálculo Rápido de Frete</Card.Title>
                                    <Card.Text>
                                        Obtenha rapidamente o custo do transporte para suas remessas. Simples e eficiente. aaa
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>
                </div>
                <div class="row benefit-section pad-10">
                    <div class="benefit-data">
                        <h2>95% das <br />
                            empresas</h2>
                    </div>
                    <p>Não sabem lidar com problemas de <b>escalibilidade</b> <br /> e grande volume de requisição.</p>
                </div>
            </div>
            <div className="row cta-section">
                <BtnPrimary
                    btnText="VEJA COMO É SIMPLES"
                />
            </div>
            <div className="row">
                <div className="form-section cl-sm-2">
                    <div className="cl-sm-12 robo">
                        <img className='roboImg' src="img/robo.png" alt="robo" />
                    </div>
                    <div className="cl-sm-6 form">
                        <h1>ORÇAMENTO RAPIDO</h1>
                        <p>Calcule seu frete e leve seus sonhos ainda mais longe!<br /> Preencha os campos abaixo com os cep e descubra como<br /> podemos tornar sua experiência ainda mais especial.</p>

                        <div className="formGroup">
                            <div>
                                <InputGroup className="mb-3 formOrcamento">
                                    <Form.Control
                                        as={IMaskInput}
                                        mask="00000-000"
                                        placeholder="DESTINO:"
                                        inputmode="numeric"
                                        style={{ color: 'white', fontSize: '22.5px' }}
                                        className='FormControlOrcamento'
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3 formOrcamento">
                                    <Form.Control
                                        as={IMaskInput}
                                        mask="00000-000"
                                        placeholder="DESTINO:"
                                        inputmode="numeric"
                                        style={{ color: 'white', fontSize: '22.5px' }}
                                        className='FormControlOrcamento'
                                    />
                                </InputGroup>
                                <div className="btnSession">
                                    <button className='btnOrcamento'>
                                        Calcular
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="section-cards">
                        <CardComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;