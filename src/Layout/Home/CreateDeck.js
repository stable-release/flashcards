import React from "react";
import { Link } from "react-router-dom";

function CreateDeck({handleCreate}) {
    const plus = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">::before<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path></svg>)
    return (
        <Link to="/decks/new" type="button" className="btn btn-secondary mb-2" onClick={handleCreate}>{plus} Create Deck</Link>
    )
}

export default CreateDeck;