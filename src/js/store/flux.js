import { updateContact } from "../service";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contactList: [],
      contact : {}
    },
    actions: {
      addContactList: (data) => {
       setStore({ contactList: data });
      },
      addNewContact: (data) => {
        const store = getStore();
       setStore({ contactList: [...store, data]});
      },
    },
  };
};

export default getState;
