import React from "react";
import "./BtnOrcamento.css";

function BtnOrcamento ({orcamentoText}) {

    const whatsappLink = () => {
        const telephone = "11930701826";
        const origem = document.getElementById('origem').value;
        const destino = document.getElementById('destino').value;
        let linkWpp = "";

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            linkWpp = `<a href="https://api.whatsapp.com/send?phone=${telephone}&text=Olá, gostaria de fazer um orçamento. Origem: ${origem}. Destino: ${destino}"></a>`;
            
        } else {
            linkWpp = `<a href="https://web.whatsapp.com/send?phone=${telephone}&text=Olá, gostaria de fazer um orçamento. Origem: ${origem}. Destino: ${destino}"></a>`;
        }

        return linkWpp;
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