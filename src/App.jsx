import { useEffect, useState } from "react";
import { Bubble } from "./components/Bubble";
import { getRandomNumber, populateBubbles } from "./utils/utils";
import { Controller } from "./components/Controller";
import { Header } from "./components/Header";
import { InitialMessage } from "./components/InitialMessage";

function App() {
    const [score, setScore] = useState(null);
    const [hit, setHit] = useState(0);
    const [timer, setTimer] = useState(0);
    const [bubbles, setBubbles] = useState(populateBubbles());

    const numberToHit = getRandomNumber();
    const maxTime = 15;

    const onStart = () => {
        setTimer(maxTime);
        setScore(0);
        setHit(getRandomNumber());
    };

    const onCancel = () => {
        setTimer(0);
        setHit(0);
    };

    const generateBubbles = (e) => {
        const id = e.target.dataset.id;
        if (id) {
            const number = Number(id);
            setHit(numberToHit);
            setBubbles(populateBubbles());

            if (number === hit) {
                setScore(score + 10);
                console.log("hit");
            } else {
                setScore(score - 10);
                console.log("missed");
            }
        }
    };

    useEffect(() => {
        let id;

        if (timer) {
            id = setInterval(() => {
                setTimer((t) => t - 1);
            }, 1000);
        }

        return () => {
            clearInterval(id);
        };
    }, [timer]);

    return (
        <>
            <Controller {...{ onStart, onCancel, timer }} />
            <section className="game-section">
                <Header {...{ score, hit, timer }} />
                <main className="panel-2">
                    {timer > 0 ? (
                        bubbles.map((bubble, index) => (
                            <Bubble
                                key={index}
                                number={bubble.number}
                                color={bubble.color}
                                onClick={(e) => {
                                    generateBubbles(e);
                                }}
                            />
                        ))
                    ) : score !== null ? (
                        <div style={{ fontSize: "2rem" }}>
                            Your score: {score}
                        </div>
                    ) : (
                        <InitialMessage />
                    )}
                </main>
            </section>
        </>
    );
}
export default App;
