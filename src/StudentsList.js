// src/StudentsList.js
import React, { useContext, useState } from 'react';
import { FavoriteStudentsContext } from './FavoriteStudentsContext';

const StudentsList = () => {
    const { favoriteStudents, setFavoriteStudents } = useContext(FavoriteStudentsContext);
    const [clickedButtons, setClickedButtons] = useState([]);

    const students = ["Sindhu", "Purushoth", "Priyatharsini", "Naveen Kumar", "Sridhar"];

    const addToFavorites = (student) => {
        if (!favoriteStudents.includes(student)) {
            setFavoriteStudents([...favoriteStudents, student]);
        }
        setClickedButtons([...clickedButtons, student]);
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">List of Students</h1>
            <ul className="space-y-4">
                {students.map((student, index) => (
                    <li className="flex justify-between items-center bg-gray-100 p-4 rounded-md">
                        <span>{index+1}. {student}</span>
                        <button
                            className={`py-1 px-4 rounded transition ${clickedButtons.includes(student)
                                    ? 'bg-red-500 text-white line-through'
                                    : 'bg-blue-500 text-white hover:bg-blue-700'
                                }`}
                            onClick={() => addToFavorites(student)}
                        >
                            {clickedButtons.includes(student) ? 'Added to Favorite' : 'Add to Favorite'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentsList;
