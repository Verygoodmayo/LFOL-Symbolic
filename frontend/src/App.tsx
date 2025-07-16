import React from 'react';

import './styles/App.scss';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Events from './pages/Events';
import Programme from './pages/Programme';
import School from './pages/School';
import Members from './pages/Members';
import Library from './pages/Library';
import Recordings from './pages/Recordings';
import EventPage from './pages/EventPage';

const App: React.FC = () => {
    return (
        <div className="app">
            <Hero />
            <Menu />
            <div className="main-layout">
                <main className="home-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/events/:id" element={<EventPage />} />
                        <Route path="/programme" element={<Programme />} />
                        <Route path="/school" element={<School />} />
                        <Route path="/members" element={<Members />} />
                        <Route path="/library" element={<Library />} />
                        <Route path="/recordings" element={<Recordings />} />
                        <Route path="*" element={<div style={{padding: '2rem'}}><h2>404 - Not Found</h2><p>This page does not exist.</p></div>} />
                    </Routes>
                </main>
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
};

export default App;
