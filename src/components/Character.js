import React from "react";

const Character = ({name, image, status, species, gender}) => (
    <div
        className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-2">
        <div className="flex flex-col items-center">
            <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={image}
                 alt={name} />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{status}  - {species} - {gender}</span>
        </div>
    </div>
)

export default Character
