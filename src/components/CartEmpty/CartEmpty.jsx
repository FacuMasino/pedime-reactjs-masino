import { useNavigate } from 'react-router-dom';

import emptyCart from '../../assets/img/emptycart.png';

const CartEmpty = () => {
	const navigate = useNavigate();

	return (
		<div className="d-flex flex-column align-items-center">
			<img src={emptyCart} className="img-fluid" alt="Carrito vacío" />
			<div className="col-12 text-center">
				<h2 className="text-title p-2">Oops! tu carrito está vacío</h2>
				<p className="h5">
					Parece que todavía no agregaste ningún producto, echa un vistazo a nuestro menú
				</p>
			</div>
			<button className="btn btn-outline-primary fw-bold" onClick={() => navigate('/')}>
				Volver al catálogo
			</button>
		</div>
	);
};

export default CartEmpty;
