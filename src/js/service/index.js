


export const getContactList = async () => {
  const URL =
    "https://assets.breatheco.de/apis/fake/contact/agenda/sara-enriquez";

  try {
    const response = await fetch(URL, { method: "GET" });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const postNewContact = async (fullName, email, phone, address) => {
  const URL = "https://assets.breatheco.de/apis/fake/contact/";
  let contact = {
    full_name: fullName,
    email: email,
    agenda_slug: "sara-enriquez",
    address: address,
    phone: phone,
  };

  try {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(contact),
      headers: { "Content-type": "application/json;" },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateContact = async (fullName, email, phone, address, id) => {

  const URL = `https://assets.breatheco.de/apis/fake/contact/${id}`;

  let contact = {
   full_name: fullName,
   email: email,
   agenda_slug: "sara-enriquez",
   address: address,
   phone: phone,
   id: id
 };

  try {
    const response = await fetch(URL, {
      method: "PUT",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json",
      },
    })
    
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteContact = async (id) => {

  const URL =`https://assets.breatheco.de/apis/fake/contact/${id}`;

  try {
    await fetch(URL, { 
      method: "DELETE"
   })

  } catch (err) {
    console.log(err);
  }
};

