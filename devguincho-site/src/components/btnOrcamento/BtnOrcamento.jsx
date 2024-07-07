import React from "react";
import "./BtnOrcamento.css";

function BtnOrcamento({ orcamentoText, formValues }) {
    const openWhatsapp = () => {
        const telephone = "+5511958209936";
        const { origem, destino } = formValues;

        if (!origem || !destino) {
            alert("Por favor, preencha os campos em branco.");
            return;
        }

        const message = `Olá Guincho 79, gostaria de obter um orçamento para um serviço de guincho. Aqui estão os detalhes:\n\n- CEP de Origem: ${origem}\n- CEP de Destino: ${destino}\n\nObrigado pela atenção e aguardo sua resposta!`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/${telephone}?text=${encodedMessage}`;

        window.open(whatsappLink, "_blank");
    };

    return (
        <div className="btnSession">
            <button className='btnOrcamento' onClick={openWhatsapp}>
                {orcamentoText}
            </button>
        </div>
    );
}

export default BtnOrcamento;
