import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="error-page-container">
            <div className="error-page">
                <h1 className="text-2xl sm:text-3xl md:text-5xl sm:mt-20 mt-12">Page Not Found</h1>
                <Link to='/' className="text-2xl hover:text-blue-700 text-blue-600 font-medium">Back to home</Link>
            </div>
        </div>
    )
}

export default NotFound;