import React, { useState } from "react";
import Modal from "./Modal";


const AddWidgetForm = ({ onAdd }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text) {
      onAdd({ id: Date.now().toString(), name, text });
      setName("");
      setText("");
      setIsOpen(false);
    }
  };

  return (
    <>
      <button className="w-full h-36 p-4 rounded border shadow-md bg-white cursor-auto">
        <span
          onClick={() => setIsOpen(true)}
          className="border border-gray-500 rounded-lg p-2 cursor-pointer"
        >
          ➕ Add Widget
        </span>
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold mb-4">Add New Widget</h2>
          <input
            type="text"
            placeholder="Widget Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-2 p-2 w-full border rounded"
          />
          <input
            type="text"
            placeholder="Widget Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mb-2 p-2 w-full border rounded"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Add Widget
          </button>
        </form>
      </Modal>
    </>
  );
};

export default AddWidgetForm;
