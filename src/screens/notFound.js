import React from "react";
import { Link } from "react-router-dom";

const NotFoundScreen = () => {
    return (
        <div>
            <h1>Página não encontrada.</h1>
            <Link to="/">Voltar para página inicial.</Link>
        </div>
    );
}

export default NotFoundScreen;