import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/CartContext';

import './CheckoutForm.scss';

const CheckoutForm = ({ onCheckout }) => {
	const { items, getTotalPrice } = useContext(CartContext);
	const [values, setValues] = useState({});

	const navigate = useNavigate();

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const getFormatedItems = () => {
		return items.map(({ title, price, quantity }) => ({ title, price, quantity }));
	};

	const formatOrder = (values) => {
		return {
			buyer: { ...values },
			items: getFormatedItems(),
			date: Date.now(),
			total: getTotalPrice(),
		};
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const order = formatOrder(values);
		onCheckout(order);
	};

	return (
		<div className="row g-5">
			<div className="col-md-8 order-md-1 order-2 col-12 py-3">
				<h2 className="text-title border-bottom">TUS DATOS</h2>
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className="row mb-3">
						<div className="col-md-6 col-12">
							<label htmlFor="name" className="form-label">
								Nombre
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="form-control"
								onChange={(e) => handleInputChange(e)}
								required
							/>
						</div>
						<div className="col-md-6 col-12">
							<label htmlFor="lastname" className="form-label">
								Apellido
							</label>
							<input
								type="text"
								id="lastname"
								name="lastname"
								className="form-control"
								onChange={(e) => handleInputChange(e)}
								required
							/>
						</div>
					</div>
					<div className="row mb-3">
						<div className="col-md-6 col-12">
							<label htmlFor="phone" className="form-label">
								Teléfono
							</label>
							<input
								type="number"
								id="phone"
								name="phone"
								className="form-control"
								placeholder="1166003521"
								onChange={(e) => handleInputChange(e)}
								required
							/>
						</div>
						<div className="col-md-6 col-12">
							<label htmlFor="email" className="form-label">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="form-control"
								placeholder="tuemail@email.com"
								onChange={(e) => handleInputChange(e)}
								required
							/>
						</div>
					</div>
					<p>* Al finalizar el pedido deberás enviarnos tu ubicación por WhatsApp</p>
					<h2 className="text-title border-bottom">Forma de pago</h2>
					<div className="form-check">
						<input
							type="radio"
							className="form-check-input"
							name="payment"
							value="Mercadopago"
							id="mercadopago"
							onChange={(e) => handleInputChange(e)}
							required
						/>
						<label className="form-check-label" htmlFor="mercadopago">
							Mercadopago
						</label>
					</div>
					<div className="form-check mb-3">
						<input
							type="radio"
							className="form-check-input"
							name="payment"
							value="Efectivo"
							id="efectivo"
							onChange={(e) => handleInputChange(e)}
						/>
						<label className="form-check-label" htmlFor="efectivo">
							Efectivo
						</label>
					</div>
					<div className="d-flex justify-content-between">
						<button
							type="button"
							className="btn btn-outline-primary text-right"
							onClick={() => navigate('/')}
						>
							Volver al catálogo
						</button>
						<button type="submit" className="btn btn-primary text-right">
							FINALIZAR PEDIDO
						</button>
					</div>
				</form>
			</div>
			<div className="col-md-4 order-md-2 order-1 col-12">
				<div className="bg-white shadow rounded p-3">
					<h2 className="text-title border-bottom">RESUMEN</h2>
					<ul className="list-group list-group-flush mb-3">
						{items.map((item) => (
							<li key={item.id} className="list-group-item d-flex justify-content-between">
								<div>
									<h6>{item.title}</h6>
									<p>Cantidad: {item.quantity}</p>
								</div>
								<small className="text-nowrap">$ {item.price} C/U</small>
							</li>
						))}
					</ul>
					<div className="d-flex align-items-center justify-content-between px-3">
						<h5 className="m-0">TOTAL:</h5>
						<span className="h5">$ {getTotalPrice()}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckoutForm;
