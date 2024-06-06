import React, { useState } from "react";
import './FormOrcamento.css';
import { InputGroup, Form } from "react-bootstrap";
import { IMaskInput } from "react-imask";
import BtnOrcamento from "../../btnOrcamento/BtnOrcamento";

function FormOrcamento() {
    const [formValues, setFormValues] = useState({ origem: '', destino: '' });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues({ ...formValues, [id]: value });
    };

    return (
        <div className="formGroup">
            <div>
                <Form>
                    <h1>ORÇAMENTO RAPIDO</h1>
                    <p>
                        Calcule seu frete e leve seus sonhos ainda mais longe!<br /> Preencha os campos abaixo com os cep e descubra como<br /> podemos tornar sua experiência ainda mais especial.
                    </p>

                    <p className="inputForm">
                        <Form.Control
                            id="origem"
                            as={IMaskInput}
                            mask="00000-000"
                            placeholder="ORIGEM:"
                            inputMode="numeric"
                            className="form-control formControlOrcamento"
                            value={formValues.origem}
                            onChange={handleChange}
                        />
                        <Form.Control
                            id="destino"
                            as={IMaskInput}
                            mask="00000-000"
                            placeholder="DESTINO:"
                            inputMode="numeric"
                            className="form-control formControlOrcamento"
                            value={formValues.destino}
                            onChange={handleChange}
                        />
                    </p>

                </Form>

                <BtnOrcamento
                    orcamentoText='CALCULAR'
                    formValues={formValues}
                />
            </div>
        </div >
    );
}

export default FormOrcamento;
