import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import styless from "./Contact.module.css";

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={styless.container}>
      <div className={styless.item}>
        <p>
          <FaUser size="24" />
          {contact.name}
        </p>
        <p>
          <FaPhoneAlt size="24" />
          {contact.number}
        </p>
      </div>
      <button
        type="button"
        className={styless.button}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
