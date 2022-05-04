import NavBar from './components/NavBar';
import Header from './components/Header';
/* import ItemListContainer from './components/ItemListContainer'; */
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Header />
			{/* <ItemListContainer greeting="Menú de productos"></ItemListContainer> */}
			<ItemDetailContainer />
			<ToastContainer />
			<Footer />
		</div>
	);
}

export default App;
