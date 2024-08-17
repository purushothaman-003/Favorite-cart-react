import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StudentsList from './StudentsList';
import FavoriteStudentsList from './FavoriteStudentsList';
import { FavoriteStudentsProvider } from './FavoriteStudentsContext';
import "./index.css"

const App = () => {
    return (
        <FavoriteStudentsProvider>
            <Router>
                <nav className="bg-gray-800 p-4">
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="text-white hover:text-gray-400">Students List</Link></li>
                        <li><Link to="/favorites" className="text-white hover:text-gray-400">Favorite Students</Link></li>
                    </ul>
                </nav>
                <div className="container mx-auto mt-8">
                    <Routes>
                        <Route path="/" element={<StudentsList />} />
                        <Route path="/favorites" element={<FavoriteStudentsList />} />
                    </Routes>
                </div>
            </Router>
        </FavoriteStudentsProvider>
    );
};

export default App;
