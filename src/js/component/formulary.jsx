import React, {useEffect, useState, useContext}from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { postNewContact } from "../service/index.js";



const Formulary = () => {

    const { store, actions } = useContext(Context);
    
    const newContact = async () => {
        const data = await postNewContact();
          actions.addNewContact(data)
      }
      
    return (
        <>
        <form className="mt-3" >
            <div className="form-inputs">
                <label className="form-labels"> Name  </label>
                <input name="full_name" type="text" className="form-control" placeholder="Full Name" required />
                <label className="form-labels"> Email</label>
                <input name="email" type="email" className="form-control" placeholder="Enter Email" required/>
                <label className="form-labels">Phone</label>
                <input name="phone" type="tel" className="form-control" placeholder="Enter Phone" required />
                <label className="form-labels">Address</label>
                <input name="address" type="text" className="form-control" placeholder="Enter Address" required/>
            </div>
            <div className="col-12">
            <button className="btn btn-formulary btn-primary" onClick={(e)=> {
                e.preventDefault();
                let value = e.target.value;
                newContact(value)
            }}>Save</button>
            </div>
            <Link to="/">
            <a>Or get back to contacts</a>
            </Link>
        </form>
        </>
    )
}

export default Formulary;