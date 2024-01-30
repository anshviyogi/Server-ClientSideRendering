import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [todo, setTodo] = useState([])

  useEffect(()=> {
      const fetchData = async ()=>{
        let request = await fetch("https://jsonplaceholder.typicode.com/todos")
        let data = await request.json();

        setTodo(data)
      }

      fetchData();
  })

  return (
    <div>
      <h1 className="text-4xl">Client Side Rendering</h1>
      <hr />
      
      {todo.length === 0 ? <h1>Loading</h1> : (
        <>
        {todo.map(item => (
          <h1>{item.title}</h1>
        ))}
        </>
      )}
    </div>
  );
}
