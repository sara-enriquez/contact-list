export const getContactList = async () => {

   const URL = "https://assets.breatheco.de/apis/fake/contact/agenda/sara-enriquez"

     try {
        const response = await fetch (URL, { method: "GET" });
        const data = await response.json();
        return data;

     } catch (err) {console.log(err)}

    }

export const postNewContact = async () => {

   const URL = "https://assets.breatheco.de/apis/fake/contact/"

      try{
         await fetch (URL, { 
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json;"}
         })
         const data = await response.json();
         return data;
      } catch (err) {console.log(err)}
      
    }

export const deleteContact = async () => {

   const URL = "https://assets.breatheco.de/apis/fake/contact/{contact_id}"

      try{
         await fetch (URL, { method: "DELETE"})
         .then(response => response.json()) 
         .then(response => console.log(response))
      } catch (err) {console.log(err)}
      
    }

export const updateContact = async () => {

   const URL = "https://assets.breatheco.de/apis/fake/contact/{contact_id}"

      try {
         await fetch (URL, { 
            method: "PUT",
            body: JSON.stringify(data), 
            headers:{
              'Content-Type': 'application/json'
            }
         })
         .then(response => response.json())
         .then(response => console.log(response))
   
      } catch(err) {console.log(err)};
}