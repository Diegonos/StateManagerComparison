import './App.css';
import Counter from './components/Counter';
import { useCounterStore } from './store/store';

function App() {
  /* 
    obtaining the count like this:
    const { count } = useCounterStore((state) => state);
    is against the best practices and could slow down your app a lot.
    You should be doing as below.
  */
  const count = useCounterStore((state) => state.count);

  return <Counter count={count} />;
}

export default App;
