import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { getContactList } from "../service/index.js";
import { deleteContact } from "../service/index.js";
import { updateContact } from "../service/index.js";



const ContactList = () => {

  const { store, actions } = useContext(Context);


	const getInitialContactList = async () => {
		const data = await getContactList();
        actions.addContactList(data)
	} 

	useEffect(()=>{
		getInitialContactList()
	},[])

  return (
    <ul className="contact-list">
      {store.contactList.map((contact) => {
        return (
          <li key={contact.id} contact={contact} className="contact">
              <img className="contact-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQn9G5TBiLuvzDfAOMRu0gm_wzM7laPOcomOzfbYb3RQ&s" />
            <div className="contact-data">
              <p className="contact-full-name">{contact.full_name}</p>
              <p className="contact-address"><i class="fa-solid fa-location-dot"></i>{contact.address}</p>
              <p className="contact-phone"><i class="fa-solid fa-phone"></i>{contact.phone}</p>
              <p className="contact-email"><i class="fa-solid fa-envelope"></i>{contact.email}</p>
            </div>
            <div className="contact-buttons">
              <Link to={`/create/${contact.id}`}>
                <i class="fa-solid fa-pen"></i>
              </Link>
                <i class="fa-regular fa-trash-can"></i>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
