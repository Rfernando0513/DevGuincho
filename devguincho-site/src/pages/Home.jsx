import './Home.css';
import { Button, Card, CardGroup, Form } from 'react-bootstrap';
import RangeText from "../components/Range/RangeText.jsx";
import * as Icon from 'react-bootstrap-icons';
import BtnPrimary from "../components/btn-primary/BtnPrimary.jsx";
import FormOrcamento from '../components/form/formOrcamento/FormOrcamento.jsx'
import MainComponent from '../components/card/MainComponent/MainComponent.jsx';
import Benefit from '../components/benifit/Benefit.jsx';
import Rodape from '../components/footer/Rodape.jsx';
import { Link } from 'react-scroll';



function Home() {



    return (
        <>
            <div className="home-container">
                <div className="row col-sm-12">
                    <div className="topo-site" id='topoSite'>
                        <div className="text-topo">
                            <h1>DEV GUINCHO</h1>
                            <p>Tecnologia em movimento</p>
                            <Link
                                activeClass="active"
                                to='orcamento'
                                spy={true}
                                smooth={true}
                                offset={-90}
                                duration={900}
                            >
                                <Button variant="light">FAÇA UM ORÇAMENTO</Button>
                            </Link>
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
                                    <Card.Title >RESGATE 24/7</Card.Title>
                                    <Card.Text >
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
                                    <Card.Title >Atendimento Rápido</Card.Title>
                                    <Card.Text >
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
                                    <Card.Title >Cálculo Rápido de Frete</Card.Title>
                                    <Card.Text >
                                        Obtenha rapidamente o custo do transporte para suas remessas. Simples e eficiente. aaa
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>
                </div>
                <div className="row benefit-section">
                    <Benefit
                        title={'95% das <br/> pessoas'}
                        highlight={"escalibilidade"}
                        showCounter={false}
                        description={"Não sabem como requisitar um orçamento e enfrentam dificuldades, mas podemos te ajudar a resolver."}
                        highLight={"orçamento"}
                    />
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
                    <div id='orcamento' className="cl-sm-6 form">
                        <FormOrcamento />
                    </div>
                </div>
                <div className="row">
                    <div className="cl-sm-2 benefit-section">
                        <div className="cl-sm-12 cardComment">
                            <MainComponent />
                        </div>
                        <Benefit
                            subTitle={"7589"}
                            showCounter={true}
                        />
                         
                    </div>
                </div>
                <div className="row">
                    <RangeText textRange={"↓ NOS ACOMPANHE NAS REDES SOCIAIS"} />
                </div>
                <div className="row">
                    <Rodape className="m-0" />
                </div>
            </div>
        </>
    )
}

export default Home;