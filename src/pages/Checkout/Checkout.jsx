import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CartContext } from '../../contexts/CartContext';

import CheckoutForm from '../../components/CheckoutForm';
import CartEmpty from '../../components/CartEmpty';

import { saveOrder } from '../../services';
import { openWpp, createWppLink } from '../../helpers';

const Checkout = () => {
	const { getTotalQty, clear } = useContext(CartContext);
	const [order, setOrder] = useState({});
	const [isProcessing, setIsProcessing] = useState(false);

	const navigate = useNavigate();

	const Countdown = ({ seconds, action }) => {
		const [countdown, setCountdown] = useState(seconds);
		useEffect(() => {
			if (countdown === 0) {
				action();
				return;
			}
			setTimeout(() => setCountdown(countdown - 1), 1000);
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [countdown]);
		return countdown;
	};

	const handleCheckout = (orderData) => {
		setIsProcessing(true);
		saveOrder(orderData).then((response) => {
			!response.status.hasError && clear(); // Limpiar carrito si no hubo error
			setOrder({ ...response, ...orderData });
			setIsProcessing(false);
		});
	};

	const exitCheckout = () => {
		navigate('/'); // ir a inicio
		setOrder({}); // Limpiar orden
	};

	return (
		<div className="container-fluid bg-light py-md-4 py-2">
			<div className="container my-2">
				<div className="row align-items-center justify-content-center">
					<h1 className="text-center text-title p-2">CHECKOUT</h1>
					<div className="col-12">
						{getTotalQty() > 0
							? isProcessing ||
							  Object.keys(order).length > 0 || (
									<CheckoutForm onCheckout={(orderData) => handleCheckout(orderData)} />
							  )
							: Object.keys(order).length > 0 || <CartEmpty />}

						{isProcessing && (
							<div className="my-2 text-center">
								<div className="row justify-content-center">
									<div className="col-md-6 col-12 rounded shadow bg-white p-4 mb-3">
										<FontAwesomeIcon
											icon="fa-solid fa-spinner"
											className="text-success mb-4 fa-spin"
											size="5x"
										/>
										<h2 className="text-title border-bottom mb-3">Procesando pedido...</h2>
										<h3 className="text-title">Por favor aguarde</h3>
									</div>
								</div>
							</div>
						)}

						{Object.keys(order).length > 0 && order.status.hasError && (
							<div className="my-2 text-center">
								<div className="row justify-content-center">
									<div className="col-md-6 col-12 rounded shadow bg-white p-4 mb-3">
										<FontAwesomeIcon
											icon="fa-solid fa-circle-xmark"
											className="text-danger mb-4"
											size="5x"
										/>
										<h2 className="text-title border-bottom mb-3">Oops ! Algo salió mal</h2>
										<h4 className="text-title">
											Lo sentimos, ocurrió un error al procesar el pedido.
										</h4>
										<p>
											Los productos que seleccionaste seguirán en el carrito para que puedas volver
											a intentar en unos minutos
										</p>
										<button
											type="button"
											className="btn btn-primary"
											onClick={() => navigate('/cart')}
										>
											Volver al carrito
										</button>
									</div>
								</div>
							</div>
						)}

						{Object.keys(order).length > 0 && !order.status.hasError && (
							<div className="my-2 text-center">
								<div className="row justify-content-center">
									<div className="col-md-6 col-12 rounded shadow bg-white p-4 mb-3">
										<FontAwesomeIcon
											icon="fa-solid fa-circle-check"
											className="text-success mb-4 fa-fade"
											style={{ '--fa-animation-iteration-count': 1 }}
											size="5x"
										/>
										<h2 className="text-title border-bottom mb-3">¡Pedido procesado con éxito!</h2>
										<h3 className="text-title">Orden #{order.id}</h3>
										<p>
											Serás redirigido a nuestro WhatsApp en{' '}
											<Countdown seconds={3} action={() => openWpp(order)} /> segundos, si no ocurre{' '}
											<a href={createWppLink(order)} target="_blank" rel="noreferrer">
												haz click aquí
											</a>
										</p>
										<button
											type="button"
											className="btn btn-primary"
											onClick={() => exitCheckout()}
										>
											Volver al catalogo
										</button>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
