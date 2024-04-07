import React, { useState } from "react";

type AddTodoProps = {
  onNewItem: (newName: string, newDate: string) => void;
};

const AddTodo = ({ onNewItem }: AddTodoProps) => {
  const [todoName, setTodoName] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

  const handleNameChange = (event: any) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event: any) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    if (todoName && dueDate) {
      onNewItem(todoName, dueDate);
      setTodoName(""); // Clear input fields after adding
      setDueDate("");
    }
  };

  return (
    <div>
      <div className="flex justify-between max-w-md my-5">
        <div className="mx-10">
          <input
            type="text"
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
          />
        </div>
        <div className="mx-10">
          <input type="date" onChange={handleDateChange} />
        </div>
        <div className="mx-10">
          <button
            onClick={handleAddButtonClicked}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
