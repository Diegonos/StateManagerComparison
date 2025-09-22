import { useRecoilState } from "recoil";
import { counterState } from "../store/store";

const Counter = () => {
  const [ count, setCount ] = useRecoilState(counterState)

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const setToZero = () => {
    setCount(0);
  }

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={setToZero}>Set to zero</button>
      </div>
    </div>
  );
};

export default Counter;