import React, { useContext } from 'react';
import { FavoriteStudentsContext } from './FavoriteStudentsContext';

const FavoriteStudentsList = () => {
    const { favoriteStudents, setFavoriteStudents } = useContext(FavoriteStudentsContext);

    const removeFromFavorites = (studentToRemove) => {
        setFavoriteStudents(favoriteStudents.filter(student => student !== studentToRemove));
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Favorite Students</h1>
            <ul className="space-y-4">
                {favoriteStudents.length > 0 ? (
                    favoriteStudents.map((student, index) => (
                        <li key={index} className="flex justify-between items-center bg-green-100 p-4 rounded-md">
                            <span>{student}</span>
                            <button
                                className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-700 transition"
                                onClick={() => removeFromFavorites(student)}
                            >
                                Remove
                            </button>
                        </li>
                    ))
                ) : (
                    <li className="text-gray-500">No favorite students yet.</li>
                )}
            </ul>
        </div>
    );
};

export default FavoriteStudentsList;
