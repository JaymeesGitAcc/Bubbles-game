import React from "react";

export const Header = ({ score = null, hit, timer }) => {
    const timerColor = timer > 0 && timer <= 10 ? { color: "crimson" } : {};
    const scoreColor = score < 0 ? { color: "crimson" } : {};
    return (
        <header className="panel-1">
            <div className="info">
                <h2>Score</h2>
                <p style={scoreColor}>{score === null ? 0 : score}</p>
            </div>
            <div className="info">
                <h2>HIT</h2>
                <p>{hit}</p>
            </div>
            <div className="info">
                <h2>Timer</h2>
                <p style={timerColor}>{timer}</p>
            </div>
        </header>
    );
};
