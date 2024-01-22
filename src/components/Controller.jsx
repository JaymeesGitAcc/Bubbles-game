import React from "react";

export const Controller = ({ onStart, onReset, timer }) => {
    const disableStart = timer !== 0 ? { opacity: 0.25 } : {};
    const disableReset = timer === 0 ? { opacity: 0.25 } : {};
    return (
        <div className="controller">
            <button
                onClick={onStart}
                disabled={timer !== 0}
                className="start-btn"
                style={disableStart}
            >
                START
            </button>
            <button
                onClick={onReset}
                disabled={timer === 0}
                style={disableReset}
                className="reset-btn"
            >
                RESET
            </button>
        </div>
    );
};
