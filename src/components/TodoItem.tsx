import React from "react";

type TodoItemType = {
  id?: number;
  ItemName: string;
  date: string;
};

const TodoItem = (prop: TodoItemType) => {
  return (
    <div>
      <div className="flex justify-between max-w-md my-10 ">
        <div className="col-6">{prop.ItemName}</div>
        <div className="col-4">{prop.date}</div>
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
