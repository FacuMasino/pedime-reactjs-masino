import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// Componentes
import NavBar from './components/NavBar';
import HeroBanner from './components/HeroBanner';
import Footer from './components/Footer';
// Pages
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Cart from './pages/Cart';
// Contexts
import { CartProvider } from './contexts/CartContext';
import { BannerProvider } from './contexts/BannerContext';

function App() {
	return (
		<div className="App">
			<CartProvider>
				<BannerProvider>
					<NavBar />
					<HeroBanner />
					<Routes>
						<Route path="/" element={<ItemListContainer />} />
						<Route path="/category/:categoryId" element={<ItemListContainer />} />
						<Route path="/item/:itemId" element={<ItemDetailContainer />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
					<Footer />
					<ToastContainer />
				</BannerProvider>
			</CartProvider>
		</div>
	);
}

export default App;
