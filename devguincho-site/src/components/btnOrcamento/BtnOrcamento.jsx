import React from "react";
import "./BtnOrcamento.css";

function BtnOrcamento ({orcamentoText, formValues}) {

    const whatsappLink = () => {
        const telephone = "+5511930701826";
        const {origem, destino} = formValues;
        
        if(!origem || !destino) {
            alert("Por Favor, preencha os campos em branco.");
            return;
        }

        const message = `Olá, gostaria de fazer um orçamento. Origem: ${origem}. Destino: ${destino}.`;
        const encodedMessage  = encodeURIComponent(message);
        let linkWpp = "";

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            linkWpp = `https://api.whatsapp.com/send?phone=${telephone}&text=${encodedMessage}`;
        } else {
            linkWpp = `https://web.whatsapp.com/send?phone=${telephone}&text=${encodedMessage}`;
        }

        window.open(linkWpp, "_blank");
    }

    return (
        <div className="btnSession">
            <button className='btnOrcamento' onClick={whatsappLink}>
                {orcamentoText}
            </button>
        </div>
    )
}

export default BtnOrcamento;