import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postNewContact, updateContact } from "../service/index.js";
import { useParams, useNavigate } from "react-router-dom";

const Formulary = () => {
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [uniqueContact, setUniqueContact] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const newContact = (e) => {
    e.preventDefault();
    postNewContact(full_name, email, phone, address);
    alert("CREATED NEW CONTACT")
  };

  useEffect(() => {
    if (params.id) {
      fetch(`https://assets.breatheco.de/apis/fake/contact/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setUniqueContact(data);
        });
    }
  }, []);

  const modifyContact = (e) => {
    e.preventDefault();
    updateContact(full_name, email, phone, address, params.id);
    alert("MODIFIED CONTACT");
  };

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
            defaultValue={params.id ? uniqueContact.full_name : full_name}
            onChange={(e) => setFull_name(e.target.value)}
          />
          <label className="form-labels"> Email</label>
          <input
            required
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter Email"
            defaultValue={params.id ? uniqueContact.email : email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-labels">Phone</label>
          <input
            required
            name="phone"
            type="tel"
            className="form-control"
            placeholder="Enter Phone"
            defaultValue={params.id ? uniqueContact.phone : phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label className="form-labels">Address</label>
          <input
            required
            name="address"
            type="text"
            className="form-control"
            placeholder="Enter Address"
            defaultValue={params.id ? uniqueContact.address : address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="col-md-12">
          <button
            className="btn btn-formulary btn-primary"
            onClick={(e) => {
              params.id ? modifyContact(e) : newContact(e);
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
