import uselocalstorage from "./components/uselocalstorage";

function App() {
  const [count, setCount] = uselocalstorage('count', 0);

  return (
    <>
    <h2>Count: {count}</h2>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    <button onClick={() => setCount(0)}>Reset</button>
     </>
  )
}

export default App
