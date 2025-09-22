import { useEffect } from "react";
import { useCounterStore } from "../store/store";

const setCount = () => {
  useCounterStore.setState({ count: 1 });
}

const Counter = ({ count }: { count: number }) => {
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);
  const setToZero = useCounterStore((state) => state.setToZero);

  useEffect(() => {
    setCount();
  }, []);

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={incrementAsync}>IncrementAsync</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={setToZero}>Set to zero</button>
      </div>
    </div>
  );
};

export default Counter;