import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import ContactCard from "../components/ContactCard";
import { AGENDA_SLUG, API_URL } from "../store";

export default function Contact() {
  const { store, dispatch } = useGlobalReducer();

  const getContacts = async () => {
    const response = await fetch(`${API_URL}/${AGENDA_SLUG}/contacts`);

    if (response.status === 404) {
      await fetch(`${API_URL}/${AGENDA_SLUG}`, {
        method: "POST"
      });

      dispatch({ type: "set_contacts", payload: [] });
      return;
    }

    const data = await response.json();
    dispatch({ type: "set_contacts", payload: data.contacts });
  };

  const deleteContact = async (id) => {
    const answer = confirm("Are you sure?");

    if (!answer) return;

    await fetch(`${API_URL}/${AGENDA_SLUG}/contacts/${id}`, {
      method: "DELETE"
    });

    getContacts();
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="container mt-4">
      <div className="text-end mb-3">
        <Link to="/add" className="btn btn-success">
          Add new contact
        </Link>
      </div>

      <div className="border">
        {store.contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onDelete={deleteContact}
          />
        ))}
      </div>
    </div>
  );
}