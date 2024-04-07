import AddTodo from "@/components/AddTodo";
import AppName from "@/components/AppName";
import TodoItem from "@/components/TodoItem";

export default function Home() {
  const ItemList = [
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
      {ItemList.map((item) => {
        return (
          <TodoItem
            key={item.id}
            ItemName={item.ItemName}
            date={item.date}
          ></TodoItem>
        );
      })}
    </center>
  );
}
