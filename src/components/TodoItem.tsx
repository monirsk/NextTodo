import React from "react";

type TodoItemProps = {
  ItemName: string;
  date: string;
};

const TodoItem = ({ ItemName, date }: TodoItemProps) => {
  return (
    <div>
      <div className="flex justify-between max-w-md my-10 ">
        <div className="col-6">{ItemName}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="
            bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded
           "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
