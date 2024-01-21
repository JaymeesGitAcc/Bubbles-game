import React from "react";

export const Bubble = ({ number, color }) => {
    // const colorsArray = ["olive", "crimson", "orchid"];
    // const colorIndex = Math.floor(Math.random() * colorsArray.length);
    // const randomNumber = Math.floor(Math.random() * 10);
    return (
        <div
            className="bubble"
            style={{ backgroundColor: `${color}` }}
            data-id={number}
        >
            {number}
        </div>
    );
};
