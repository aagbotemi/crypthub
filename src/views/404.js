import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="error-page-container">
            <div className="error-page">
                <h1 className="">Page Not Found</h1>
                <Link to='/' className="">Back to home</Link>
            </div>
        </div>
    )
}

export default NotFound;