import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const NotFound = () => {
    return (
        <div className="error-page-container">
            <Helmet>
                <title>404 | Crypthub</title>
                <meta name="description" content="Error page. Page not found" />
            </Helmet>
            <div className="error-page">
                <h1 className="">Page Not Found</h1>
                <Link to='/' className="">Back to home</Link>
            </div>
        </div>
    )
}

export default NotFound;