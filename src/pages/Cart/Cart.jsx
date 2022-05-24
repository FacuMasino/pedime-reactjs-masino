import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { CartContext } from '../../contexts/CartContext';

import CartItemList from '../../components/CartItemList';
import CartEmpty from '../../components/CartEmpty';

const Cart = () => {
	const { items, getTotalQty, getTotalPrice, clear } = useContext(CartContext);
	const navigate = useNavigate();

	const handleClear = () => {
		clear();
		toast.success(`Se limpió el carrito`, {
			autoClose: 2000,
		});
	};

	return (
		<div className="container-fluid bg-light py-md-4 py-2">
			<div className="container my-2">
				<div className="row align-items-center justify-content-center">
					<h1 className="text-center text-title p-2">CARRITO</h1>
					<div className="col-12">
						{getTotalQty() === 0 ? (
							<CartEmpty />
						) : (
							<>
								<CartItemList items={items} />
								<div className="d-flex flex-row-reverse">
									<button
										type="button"
										className="small btn btn-sm btn-outline-primary mb-2"
										onClick={() => handleClear()}
									>
										Vaciar carrito
									</button>
								</div>
								<div className="d-flex align-items-center justify-content-between border-top border-bottom mb-2 p-1">
									<p className="text-title m-0 h4 text-end">Total:</p>
									<p className="text-title m-0 h4 text-end">$ {getTotalPrice()}</p>
								</div>
								<div className="d-flex justify-content-between">
									<div className="col-6">
										<button
											className="btn btn-outline-primary fw-bold"
											onClick={() => navigate('/')}
										>
											Volver al catálogo
										</button>
									</div>
									<div className="col-6 text-end">
										<button className="btn btn-primary" onClick={() => navigate('/checkout')}>
											Realizar pedido
										</button>
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
