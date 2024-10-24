import { AppLayout } from "./components/AppLayout/AppLayout";
import { fetchCharacters } from "./store/character/operations";
import { useAppDispatch } from "./store/store";

function App() {
  const dispatch = useAppDispatch();
  dispatch(fetchCharacters());
  return (
    <>
      <AppLayout />
    </>
  );
}

export default App;
