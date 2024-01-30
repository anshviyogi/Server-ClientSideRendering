import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps (){
  let request = await fetch("https://jsonplaceholder.typicode.com/todos")
  let data = await request.json();

  return {
    props: {
      todo: data
    }
  }
}

export default function Home({todo}) {
  /*
  PROBLEM STATEMENT

  useEffect(()=> {
      let request = await fetch("https://jsonplaceholder.typicode.com/todos")
      let data = await request.json();

      setTodo(data)
  })

  Loading Time - Increase
  SEO Performance - Bad
  */

  /*
  In Server Side Rendering:
  There's no need of any loading indicator as the todo data is directly coming from the server
  */
 
  return (
    <div>
      <h1>server side rendering</h1>
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
