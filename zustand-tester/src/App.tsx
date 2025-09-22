import './App.css';
import Counter from './components/Counter';
import { useCounterStore } from './store/store';

function App() {
  const count = useCounterStore((state) => state.count);

  return <Counter count={count} />;
}

export default App;
