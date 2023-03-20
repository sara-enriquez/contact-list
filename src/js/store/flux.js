const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contactList: [],
    },
    actions: {
      addContactList: (data) => {
       setStore({ contactList: data });
      },
      addNewContact: (contact) => {
        const store = getStore();
       setStore({ contactList: [...store.contactList, contact]});
      },
    },
  };
};

export default getState;
