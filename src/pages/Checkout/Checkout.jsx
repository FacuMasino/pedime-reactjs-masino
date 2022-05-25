import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CartContext } from '../../contexts/CartContext';

import CheckoutForm from '../../components/CheckoutForm';
import CartEmpty from '../../components/CartEmpty';

import { saveOrder } from '../../services';

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

	const createWppLink = (orderData) => {
		const BASE_URL = 'https://wa.me/5492227516436?text=';
		const msg =
			`Hola! Esta es la orden *#${orderData.id}* de _PediMe_,` +
			`generada hoy _${formatDate(orderData.date)}_ por *${orderData.buyer.name} ${
				orderData.buyer.lastname
			}*.\n` +
			`A continuación los detalles del pedido:\n` +
			`${orderData.items.map((item) => `- ${item.title} - $ ${item.price} x${item.quantity}\n`)}` +
			`*Forma de pago:* ${orderData.buyer.payment}\n` +
			`*TOTAL:* $ ${orderData.total}\n` +
			`A continuación enviaré mi ubicación.`;
		return BASE_URL + encodeURIComponent(msg);
	};

	const openWpp = () => {
		try {
			let newTab = window.open();
			newTab.location.href = createWppLink(order);
		} catch {
			// Evita un error en mobile cuándo se bloquea el popUp
			console.log('No se pudo abrir WhatsApp');
		}
	};

	const handleCheckout = (orderData) => {
		setIsProcessing(true);
		saveOrder(orderData).then((response) => {
			!response.status.hasError && clear(); // Limpiar carrito si no hubo error
			setOrder({ ...response, ...orderData });
			setIsProcessing(false);
		});
	};

	const formatDate = (msDate) => {
		const date = new Date(msDate);
		const [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()];
		const [hour, mins] = [date.getHours(), date.getMinutes()];
		return `${day}/${month}/${year} ${hour}:${mins} hs`;
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
											<Countdown seconds={3} action={() => openWpp()} /> segundos, si no ocurre{' '}
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
