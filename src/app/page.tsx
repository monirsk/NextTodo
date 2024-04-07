"use client";

import AddTodo from "@/components/AddTodo";
import AppName from "@/components/AppName";
import TodoItems from "@/components/TodoItems";
import { useEffect, useState } from "react";

type ItemType = {
  ItemName: string;
  date: string;
};

export default function Home() {
  const InitialItemList: ItemType[] = [
    {
      ItemName: "Buy Milk",
      date: "4/10/2024",
    },

    {
      ItemName: "Get a MilkShake",
      date: "23/12/2024",
    },
  ];

  // const [todoItems, setTodoItems] = useState(InitialItemList);

  const [todoItems, setTodoItems] = useState<ItemType[]>(() => {
    const storedItems = localStorage.getItem("todoItems");
    return storedItems ? JSON.parse(storedItems) : InitialItemList;
  });

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  const handleNewItem = (newName: string, newDate: string) => {
    const newTodoItems = [...todoItems, { ItemName: newName, date: newDate }];
    setTodoItems(newTodoItems);
  };

  return (
    <center>
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      <TodoItems ItemList={todoItems}></TodoItems>
    </center>
  );
}
