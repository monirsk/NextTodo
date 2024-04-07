import AddTodo from "@/components/AddTodo";
import AppName from "@/components/AppName";
import TodoItems from "@/components/TodoItems";

type ItemType = {
  id: number;
  ItemName: string;
  date: string;
};

export default function Home() {
  const ItemList: ItemType[] = [
    {
      id: 1,
      ItemName: "Buy Milk",
      date: "4/10/2024",
    },

    {
      id: 2,
      ItemName: "Get a MilkShake",
      date: "23/12/2024",
    },
  ];

  return (
    <center>
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems ItemList={ItemList}></TodoItems>
    </center>
  );
}
