import React from "react";
import Formulary from "../component/formulary.jsx";
import { useParams } from "react-router";

export const Create = () => {
        const params = useParams();
	return (
        <div className="container">
        <h1 className="form-title">{params.id ? `edit contact` : `add new contact`}</h1>
        <Formulary />
        </div>
	);
};


