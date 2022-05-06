import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroBanner from './components/HeroBanner';
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
	return (
		<div className="App">
			<NavBar />
			<HeroBanner />
			<Routes>
				{/* <ItemListContainer greeting="Menú de productos"></ItemListContainer> */}
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/category/:categoryId" element={<ItemListContainer />} />
				<Route path="/item/:itemId" element={<ItemDetailContainer />} />
			</Routes>
			<Footer />
			<ToastContainer />
		</div>
	);
}

export default App;
