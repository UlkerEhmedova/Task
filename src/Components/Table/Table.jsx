import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./Table.scss";
import data from '../Json/mock-data.json'
import ReadOnlyRow from "../Js/ReadOnlyRow"
import EditableRow from "../../Components/Js/EditableRow"
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    masa: "",
    menu: "",
    eded: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    masa: "",
    menu: "",
    eded: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      masa: addFormData.masa,
      menu: addFormData.menu,
      eded: addFormData.eded,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      masa: editFormData.masa,
      menu: editFormData.menu,
      eded: editFormData.eded,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      masa: contact.masa,
      menu: contact.menu,
      eded: contact.eded,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  return (
    <div className="container">
      <div className="box1">
        <form onSubmit={handleAddFormSubmit} className="form1">
          <label placeholder="Name" />
          <label>Ad</label>
          <input
            type="text"
            name="fullName"
            required="required"
            placeholder="Adınızı daxil edin"
            onChange={handleAddFormChange}
          />
          <label>Masa</label>
          <input
            type="text"
            name="masa"
            required="required"
            placeholder="Masa nömrənizi daxil edin"
            onChange={handleAddFormChange}
          />
          <label>Menu</label>
          <select
            type="text"
            name="menu"
            required="required"
            placeholder="Menu daxil edin"
            onChange={handleAddFormChange}
          >
            <option></option>
            <option>Hamburger</option>
            <option>Doner</option>
            <option>Lahmacun</option>
            <option>Pizza</option>
          </select>
          <label>Ədəd</label>
          <input
            type="number"
            name="eded"
            required="required"
            placeholder="Ədəd daxil edin"
            onChange={handleAddFormChange}
          />
          <button type="submit" className="btn btn-success">Add</button>
        </form>
      </div>
      <form onSubmit={handleEditFormSubmit}>
        <table className="table table-bordered bg-light">
          <thead className="table-info">
            <tr>
              <th>Ad</th>
              <th>Masa</th>
              <th>Menu</th>
              <th>Ədəd</th>
              <th className="actions">Düzəliş</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default App;
