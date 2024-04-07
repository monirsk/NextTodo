import React from "react";

const AddTodo = () => {
  return (
    <div>
      <div className="flex justify-between max-w-md my-5">
        <div className="mx-10">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="mx-10">
          <input type="date" />
        </div>
        <div className="mx-10">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
