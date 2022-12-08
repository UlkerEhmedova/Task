import React from "react";
import '../Table/Table.scss'
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.masa}</td>
      <td>{contact.menu}</td>
      <td>{contact.eded}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
          className="edit"
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}
          className="delete"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
