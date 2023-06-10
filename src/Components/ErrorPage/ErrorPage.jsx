import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {

    const navigate = useNavigate();

    const img = "https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.png";

    const setPath = () => {
       navigate('/');
    }

    return (
        <div style={{backgroundImage: `url("${img}")`, width: '100%', height: '100vh'}}
        onClick={setPath}
        >
        
      </div>
    );
};

export default ErrorPage;