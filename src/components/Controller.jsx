import React from "react";

export const Controller = ({ onStart, onCancel, timer }) => {
    const disableStart = timer !== 0 ? { opacity: 0.5 } : {};
    const disableCancel = timer === 0 ? { opacity: 0.5 } : {};
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
                onClick={onCancel}
                disabled={timer === 0}
                style={disableCancel}
                className="cancel-btn"
            >
                CANCEL
            </button>
        </div>
    );
};
