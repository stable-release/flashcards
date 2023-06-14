import React from "react";
import { Link } from "react-router-dom";


function Breadcrumb({ deck }) {
    return (
        <div className="container m-0 p-0">
            <div className="container m-0 p-0">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item active">
                            {deck.name}
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}

export default Breadcrumb;
