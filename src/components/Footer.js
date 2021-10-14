import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center">
            <div>
            Designed & Developed by <a href="https://github.com/aagbotemi" target="_blank" rel="noopener noreferrer">Abiodun Awoyemi</a>
            </div>
            Copyright &copy; {new Date().getFullYear()}
        </footer>
    )
}

export default Footer