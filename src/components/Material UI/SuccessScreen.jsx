// SuccessScreen.js

import React from 'react';

const SuccessScreen = ({ formData }) => {
    return (
        <div>
            <h2>Formulário Enviado com Sucesso!</h2>
            <p>Detalhes do Formulário:</p>
            <ul>
                <li><strong>Nome:</strong> {formData.name}</li>
                <li><strong>Email:</strong> {formData.email}</li>
                <li><strong>Código:</strong> {formData.code}</li>
                <li><strong>País:</strong> {formData.selectedCountry}</li>
                <li><strong>Cidade:</strong> {formData.city}</li>
                <li><strong>Tipo de Carro:</strong> {formData.carType}</li>
            </ul>
        </div>
    );
}

export default SuccessScreen;