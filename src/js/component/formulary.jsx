import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postNewContact } from "../service/index.js";
import { useParams, useNavigate } from "react-router-dom";


const Formulary = (props) => {
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const params = useParams();
  console.log(params.id);
  
  
  const newContact = (e) => {
      e.preventDefault();
      postNewContact(full_name, email, phone, address);
    };
    
    
    const modifyContact = (e) => {
    e.preventDefault();
    updateContact(full_name, email, phone, address, id)
  }

  return (
    <>
      <form className="mt-3">
        <div className="form-inputs">
          <label className="form-labels"> Name </label>
          <input
            required
            name="full_name"
            type="text"
            className="form-control"
            placeholder="Full Name"
            defaultValue={full_name}
            onChange={(e) => setFull_name(e.target.value)}
          />
          <label className="form-labels"> Email</label>
          <input
            required
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter Email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-labels">Phone</label>
          <input
            required
            name="phone"
            type="tel"
            className="form-control"
            placeholder="Enter Phone"
            defaultValue={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label className="form-labels">Address</label>
          <input
            required
            name="address"
            type="text"
            className="form-control"
            placeholder="Enter Address"
            defaultValue={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="col-md-12">
          <button
            className="btn btn-formulary btn-primary"
            onClick={(e) => {
              newContact(e);
            }}
          >
            Save
          </button>
        </div>
        <Link to="/">Or get back to contacts</Link>
      </form>
    </>
  );
};

export default Formulary;
