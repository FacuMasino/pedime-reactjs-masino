import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Menú de productos"></ItemListContainer>
      <ToastContainer />
    </div>
  );
}

export default App;
