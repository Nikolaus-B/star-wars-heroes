import { fetchHeroes } from "./store/heroes/operations";
import { useAppDispatch } from "./store/store";

function App() {
  const dispatch = useAppDispatch();
  dispatch(fetchHeroes());
  return <></>;
}

export default App;
