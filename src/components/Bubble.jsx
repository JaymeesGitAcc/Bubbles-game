import React from "react";

export const Bubble = ({ number, color, onClick }) => {
    const handleOnClick = (e) => {
        onClick(e);
    };

    return (
        <button
            className="bubble"
            style={{ backgroundColor: `${color}` }}
            data-id={number}
            onClick={handleOnClick}
        >
            {number}
        </button>
    );
};
