import React, { useState, useEffect } from "react";
import './style.css';

const UpdateModal = ({ updateShoe }) => {
  const [updateFields, setUpdateFields] = useState({
    shoeType: "",
    url: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateFields((oldState) => ({ ...oldState, [name]: value }));
  };

  useEffect(() => {
    console.log('fromUseEffect:',updateFields);
  }, [updateFields]);

  return (
    <div className="modal">
      <input
        onChange={onInputChange}
        type="text"
        name="shoeType"
        value={updateFields.shoeType}
      />
      <br />
      <input
        onChange={onInputChange}
        type="text"
        name="url"
        value={updateFields.url}
      />
      <br />
      <button onClick={() => updateShoe(updateFields)}>Submit</button>
    </div>
  );
};

export default UpdateModal;
