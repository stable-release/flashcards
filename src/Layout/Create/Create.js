import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import DeckForm from "../Forms/DeckForm";

function Create() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });

    const history = useHistory();

    const handleChange = ({ target }) => {
        const value = target.value;
        setFormData({
            ...formData,
            [target.name]: value,
        });
    };

    async function postData() {
        const data = formData;
        const deck = await createDeck(data);
        history.push(`/decks/${deck.id}`);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postData();
    };

    return (
        <div>
            <Breadcrumb />
            <div className="container p-0 m-0">
                <h1>Create Deck</h1>
                <DeckForm handleSubmit={handleSubmit} formData={formData} handleChange={handleChange} linkNegate="/"/>
            </div>
        </div>
    );
}

export default Create;
