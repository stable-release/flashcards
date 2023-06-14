import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";
import { useEffect } from "react";

function Edit() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });

    const history = useHistory();
    const { deckId } = useParams();

    const handleChange = ({ target }) => {
        const value = target.value;
        setFormData({
            ...formData,
            [target.name]: value,
        });
    };

    async function postData() {
        const data = {...formData, id: deckId};
        await updateDeck(data);
        history.push(`/decks/${deckId}`)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postData();
    }

    useEffect(() => {
        async function loadDeck() {
            try {
                const deck = await readDeck(deckId);
                setFormData({
                    name: deck.name,
                    description: deck.description
                })
            } catch (error) {
                console.log(error);
            }
        }
        
        loadDeck();
    },[deckId])

    return (
        <div>
            <Breadcrumb deckId={deckId} name={formData.name} />
            <div className="container p-0 m-0">
                <h1>Edit Deck</h1>
                <form onSubmit={handleSubmit}>
                    <div className="container p-0 m-0">
                        <div className="col-12 p-0">
                            <label htmlFor="name" style={{width:"100%"}}>Name</label>
                        </div>
                        <div className="col-12 p-0">
                            <input
                                name="name"
                                type="text"
                                value={formData.name}
                                placeholder="Deck Name"
                                onChange={handleChange}
                                style={{width:"100%"}}
                            />
                        </div>
                        <div className="col-12 p-0">
                            <label htmlFor="description" style={{width:"100%"}}>Description</label>
                        </div>
                        <div className="col-12 p-0">
                            <textarea
                                name="description"
                                type="text"
                                value={formData.description}
                                placeholder="Brief description of the deck"
                                onChange={handleChange}
                                style={{width:"100%"}}
                            />
                        </div>
                    </div>
                    <div className="container p-0 m-0">
                        <Link to="/" className="btn btn-secondary mr-2">Cancel</Link>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Edit;
