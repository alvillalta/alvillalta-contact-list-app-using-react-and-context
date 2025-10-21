export const initialStore = () => {
  return {
    contacts: [],
    contactToEdit: {},
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    
    case "GET-AGENDA":
      return { ...store, contacts: action.payload };

    case "EDIT-CONTACT":
      return { ...store, contactToEdit: action.payload };
    
    default:
      throw Error("Unknown action.");
  }
}
