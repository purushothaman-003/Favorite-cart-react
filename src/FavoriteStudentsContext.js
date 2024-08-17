// src/FavoriteStudentsContext.js
import React, { createContext, useState } from 'react';

export const FavoriteStudentsContext = createContext();

export const FavoriteStudentsProvider = ({ children }) => {
    const [favoriteStudents, setFavoriteStudents] = useState([]);

    return (
        <FavoriteStudentsContext.Provider value={{ favoriteStudents, setFavoriteStudents }}>
            {children}
        </FavoriteStudentsContext.Provider>
    );
};
