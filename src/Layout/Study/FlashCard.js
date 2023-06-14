import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function FlashCard({ deck }) {
    const [flipped, setFlipped] = useState(true);
    const [count, setCount] = useState(0);
    const history = useHistory();

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    const handleNext = () => {
        if (count < deck.cards.length - 1) {
            setCount(count + 1);
            setFlipped(true);
        } else {
            if (window.confirm("Restart cards? \n \n Click 'cancel' to return to the home page")) {
                setCount(0);
                setFlipped(true);
            } else {
                history.push("/")
            }
        }
    };

    if (flipped) {
        return (
            <div className="card">
                <div className="card-title">
                    Card {count + 1} of {deck.cards.length}
                </div>
                <div className="card-body">
                    {deck.cards[count].front ? deck.cards[count].front : ""}
                </div>
                <div className="container m-0 p-0">
                    <button
                        className="btn btn-secondary mr-2"
                        onClick={handleFlip}
                    >
                        Flip
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="card">
                <div className="card-title">
                    Card {count + 1} of {deck.cards.length}
                </div>
                <div className="card-body">
                    {deck.cards[count].back ? deck.cards[count].back : ""}
                </div>
                <div className="container m-0 p-0">
                    <button
                        className="btn btn-secondary mr-2"
                        onClick={handleFlip}
                    >
                        Flip
                    </button>
                    <button className="btn btn-primary" onClick={handleNext}>
                        Next
                    </button>
                </div>
            </div>
        );
    }
}

export default FlashCard;
