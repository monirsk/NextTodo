import React from "react";
import TodoItem from "./TodoItem";

type ItemType = {
  ItemName: string;
  date: string;
};

type TodoItemsProps = {
  ItemList: ItemType[];
};

const TodoItems = ({ ItemList }: TodoItemsProps) => {
  return (
    <>
      {ItemList.map((item) => {
        return (
          <TodoItem
            key={item.ItemName}
            ItemName={item.ItemName}
            date={item.date}
          ></TodoItem>
        );
      })}
    </>
  );
};

export default TodoItems;
