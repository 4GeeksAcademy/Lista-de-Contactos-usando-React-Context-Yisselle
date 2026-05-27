export const AGENDA_SLUG = "yiselle-contact-list";
export const API_URL = "https://playground.4geeks.com/contact/agendas";

export const initialStore = () => ({
  contacts: []
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_contacts":
      return {
        ...store,
        contacts: action.payload
      };

    default:
      return store;
  }
}