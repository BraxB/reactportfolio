import React, { useState } from 'react';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Err from './pages/Err';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

const renderPage = () => {
    if (currentPage === 'About') {
        return <About />;
    }
    if (currentPage === 'Work') {
        return <Work />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
    }
    return <Err />;
    }   
}

const handlePageChange = (page) => setCurrentPage(page);