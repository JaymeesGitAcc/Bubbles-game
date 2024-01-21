import { useEffect, useState } from "react";
import { Bubble } from "./components/Bubble";

const colorsArray = ["olive", "crimson", "orchid"];

const initialBubbles = () => {
    const bubblesArray = [];
    for (let i = 0; i < 50; i++) {
        const randomNumber = Math.floor(Math.random() * 10);
        const index = Math.floor(Math.random() * colorsArray.length);
        bubblesArray.push({
            number: randomNumber,
            color: colorsArray[index],
        });
    }
    return bubblesArray;
};

function App() {
    const [score, setScore] = useState(0);
    const [hit, setHit] = useState(0);
    const [timer, setTimer] = useState(0);
    const [bubbles, setBubbles] = useState(initialBubbles());

    const generateBubbles = (e) => {
        const target = e.target.dataset;
        const newBubbles = [];
        if (target) {
            const numberToHit = Number(target.id);
            // console.log(target);
            console.log(numberToHit);
            for (let i = 0; i < 50; i++) {
                const randomNumber = Math.floor(Math.random() * 10) + 1;
                const index = Math.floor(Math.random() * colorsArray.length);
                newBubbles.push({
                    number: randomNumber,
                    color: colorsArray[index],
                });
            }
            if (numberToHit !== NaN) {
                if (numberToHit === hit) {
                    setScore(score + 10);
                } else {
                    setScore(score - 10);
                }
                setHit(Math.floor(Math.random() * 10));
            }
            setBubbles(newBubbles);
        }
    };

    // useEffect(() => {
    //     const initialBubbles = [];
    //     for (let i = 0; i < 50; i++) {
    //         const randomNumber = Math.floor(Math.random() * 10);
    //         const index = Math.floor(Math.random() * colorsArray.length);
    //         initialBubbles.push({
    //             number: randomNumber,
    //             color: colorsArray[index],
    //         });
    //     }
    //     setBubbles(initialBubbles);
    // }, []);

    // useEffect(() => {
    //     const initialBubbles = [];
    //     for (let i = 0; i < 50; i++) {
    //         const randomNumber = Math.floor(Math.random() * 10);
    //         const colorIndex = Math.floor(Math.random() * colorsArray.length);
    //         initialBubbles.push({
    //             number: randomNumber,
    //             color: colorsArray[colorIndex],
    //         });
    //         setBubbles(initialBubbles);
    //     }
    //     console.log("initial render");
    // }, []);

    useEffect(() => {
        const id = setInterval(() => {
            if (timer) setTimer((t) => t - 1);
        }, 1000);

        return () => {
            clearInterval(id);
        };
    }, [timer]);

    return (
        <>
            <h1>Bubbles game</h1>
            {/* <Bubble /> */}
            <div>
                <button
                    onClick={() => {
                        setTimer(60);
                        setScore(0);
                    }}
                    disabled={timer !== 0}
                >
                    start
                </button>
                <button onClick={() => setTimer(0)}>cancel game</button>
            </div>
            <section className="game-section">
                <header className="panel-1">
                    <div className="info">
                        <h2>Score</h2>
                        <p>{score}</p>
                    </div>
                    <div className="info">
                        <h2>HIT</h2>
                        <p>{hit}</p>
                    </div>
                    <div className="info">
                        <h2>Timer</h2>
                        <p>{timer}</p>
                    </div>
                </header>
                <main className="panel-2" onClick={generateBubbles}>
                    {timer > 0 ? (
                        bubbles.map((bubble, index) => (
                            <Bubble
                                key={index}
                                number={bubble.number}
                                color={bubble.color}
                            />
                        ))
                    ) : (
                        <div>Your score: {score}</div>
                    )}
                </main>
            </section>
        </>
    );
}

export default App;
