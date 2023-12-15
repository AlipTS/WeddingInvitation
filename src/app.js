import React from 'react';
import Header from './components/Header';
import Invitation from './components/Invitation';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <div className="container mt-4">
                <Invitation />
            </div>
            <Footer />
        </div>
    );
}

export default App;
