import { Link } from "react-router-dom";

export default function ContactCard({ contact, onDelete }) {
  return (
    <div className="card rounded-0 border-start-0 border-end-0">
      <div className="card-body d-flex align-items-center px-5 py-4">
        <img
          src={`https://i.pravatar.cc/150?img=${contact.id}`}
          alt="contact"
          className="rounded-circle me-5 object-fit-cover"
          width="140"
          height="140"
        />

        <div className="flex-grow-1">
          <h5 className="mb-3">{contact.name}</h5>

          <p className="text-secondary mb-2">
            <i className="fa-solid fa-location-dot me-3"></i>
            {contact.address}
          </p>

          <p className="text-secondary mb-2">
            <i className="fa-solid fa-phone me-3"></i>
            {contact.phone}
          </p>

          <p className="text-secondary mb-0">
            <i className="fa-solid fa-envelope me-3"></i>
            {contact.email}
          </p>
        </div>

        <div className="d-flex gap-4 align-self-start">
          <Link to={`/edit/${contact.id}`} className="text-dark">
            <i className="fa-solid fa-pencil"></i>
          </Link>

          <button
            className="btn btn-link text-dark p-0"
            onClick={() => onDelete(contact.id)}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
}