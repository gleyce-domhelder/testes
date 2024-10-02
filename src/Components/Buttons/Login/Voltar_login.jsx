import React from 'react';
import { Navigate } from 'react-router-dom';
export default function Voltar_login({rota}) {
    const handleSkipLogin = () => {
        <Navigate to={rota} />
    };

    return (
        <a className="btn-link text-primary" onClick={handleSkipLogin} style={{ cursor: 'pointer' }}><i class="fa-solid fa-angle-left" /> Voltar para Login </a>
    );
}
