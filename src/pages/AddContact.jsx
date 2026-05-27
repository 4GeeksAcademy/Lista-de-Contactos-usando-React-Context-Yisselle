import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AGENDA_SLUG, API_URL } from "../store";

export default function AddContact() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = (event) => {
    setContact({
      ...contact,
      [event.target.name]: event.target.value
    });
  };

  const getContact = async () => {
    const response = await fetch(`${API_URL}/${AGENDA_SLUG}/contacts`);
    const data = await response.json();

    const contactToEdit = data.contacts.find(
      (item) => item.id === Number(id)
    );

    if (contactToEdit) {
      setContact(contactToEdit);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = id
      ? `${API_URL}/${AGENDA_SLUG}/contacts/${id}`
      : `${API_URL}/${AGENDA_SLUG}/contacts`;

    const method = id ? "PUT" : "POST";

    await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    });

    navigate("/");
  };

  useEffect(() => {
    if (id) {
      getContact();
    }
  }, [id]);

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold">
        {id ? "Update contact" : "Add a new contact"}
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-semibold">Full Name</label>
          <input
            name="name"
            value={contact.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Full Name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            name="email"
            value={contact.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Phone</label>
          <input
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter phone"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Address</label>
          <input
            name="address"
            value={contact.address}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter address"
          />
        </div>

        <button className="btn btn-primary w-100">
          save
        </button>
      </form>

      <Link to="/" className="d-inline-block mt-3">
        or get back to contacts
      </Link>
    </div>
  );
}