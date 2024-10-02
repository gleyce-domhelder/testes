import React from 'react';
export default function Voltar_login() {
    const handleSkipLogin = () => {
        window.location.pathname = '/gecon-front/login';
    };

    return (
        <a className="btn-link text-primary" onClick={handleSkipLogin} style={{ cursor: 'pointer' }}><i class="fa-solid fa-angle-left"/> Voltar para Login </a>
    );
}
