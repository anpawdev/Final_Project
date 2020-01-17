import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

const NotFoundPage = () => (
    <div className="not-found">
        <h1>Oops!</h1>
        <h3>Sorry, the page not found</h3>
        <p>The link you followed probably broken or the page has been removed.</p>
        <Link to='/' className="not-found-btn">Back to home</Link>
    </div>
);

export default NotFoundPage;