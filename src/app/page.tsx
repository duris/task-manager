type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const getData = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`).then(
    (response) => response.json()
  );

  return res;
};

export default async function Home() {
  const todos = (await getData()) as Todo[];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{todos.length} Tasks</h1>
      <h2>
        {todos.map((todo) => {
          return <div key={todo.id}>{todo.title}</div>;
        })}
      </h2>
    </main>
  );
}
