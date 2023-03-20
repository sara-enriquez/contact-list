import React, {useEffect, useContext}from "react";
import "../../styles/home.css";
import ContactList from "../component/contactList.jsx";
import { Link } from "react-router-dom";


export const Home = () => {

	return (
		<>
		<nav className="navbar navbar-light bg-light mb-3">
		<p></p>
		<div className="ml-auto">
		  <Link to="/create">
			<button className="btn add-new-contact btn-success">Add new contact</button>
		  </Link>
		</div>
	  </nav>
	<div className="container">
		<ContactList />
	</div>
	</>
	);
};

