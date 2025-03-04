import Image from "next/image";
import styles from "./page.module.css";
import TodoLists from "./components/TodoList";

export default function Home() {
  return (
    <main>
      <TodoLists />
    </main>
  );
}
