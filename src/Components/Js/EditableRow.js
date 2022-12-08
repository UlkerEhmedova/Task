import React from "react";
import '../Table/Table.scss'

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter..."
          name="masa"
          value={editFormData.masa}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter..."
          name="menu"
          value={editFormData.menu}
          onChange={handleEditFormChange}
        ></input>
        <input
          type="text"
          required="required"
          placeholder="Enter..."
          name="eded"
          value={editFormData.eded}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit" className="save">Save</button>
        <button type="button" onClick={handleCancelClick}
          className='cancel'
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
