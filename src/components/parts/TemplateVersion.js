import React from 'react'
import styled from 'styled-components'

const TemplateVersion = () => {
    let version = '1.0.1';

    const Ver = styled.div`
        position: absolute;
        right: 20px;
        bottom: 0;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        mix-blend-mode: difference;
        color: red;
        padding: 5px 10px;
    `;

    return (
        <Ver className="version">
            <p>Версия {version}</p>
        </Ver>
    );
};

export default TemplateVersion