import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({deck}) {
    return (
        <div className="container m-0 p-0">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Study
                    </li>
                </ol>
            </nav>
        </div>
    );
}

export default Breadcrumb;
