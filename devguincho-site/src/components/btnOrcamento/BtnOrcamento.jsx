import React from "react";
import "./BtnOrcamento.css";

function BtnOrcamento({ orcamentoText, formValues }) {
    const whatsappLink = () => {
        const telephone = "+5511958209936";
        const { origem, destino } = formValues;

        if (!origem || !destino) {
            alert("Por favor, preencha os campos em branco.");
            return;
        }

        const message = `Olá Guincho 79, gostaria de obter um orçamento para um serviço de guincho. Aqui estão os detalhes:

        - CEP de Origem: ${origem}
        - CEP de Destino: ${destino}
        
        Obrigado pela atenção e aguardo sua resposta!`;

        const encodedMessage = encodeURIComponent(message);
        let linkWpp = "";

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            linkWpp = `https://api.whatsapp.com/send?phone=${telephone}&text=${encodedMessage}`;
        } else {
            linkWpp = `https://web.whatsapp.com/send?phone=${telephone}&text=${encodedMessage}`;
        }

        window.open(linkWpp, "_blank");
    };

    return (
        <div className="btnSession">
            <button className='btnOrcamento' onClick={whatsappLink}>
                {orcamentoText}
            </button>
        </div>
    );
}

export default BtnOrcamento;
