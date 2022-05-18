import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';

import { CartContext } from '../../../contexts/CartContext';

import './CartItem.scss';

const CartItem = ({ item }) => {
	const { removeItem } = useContext(CartContext);
	const handleDelete = (id, qty) => {
		removeItem(id);
		toast.success(
			`${qty} producto${qty > 1 ? 's' : ''} eliminado${qty > 1 ? 's' : ''} del carrito`,
			{
				autoClose: 2000,
			}
		);
	};
	return (
		<div className="card mb-3">
			<div className="row g-0">
				<div className="col-md-2 col-3 p-3">
					<img src={item.image} className="cart-thumbnail rounded border border" alt={item.title} />
				</div>
				<div className="col-md-10 col-9">
					<div className="card-body h-100">
						<div className="d-flex flex-column justify-content-between h-100">
							<div>
								<Link className="card-title h5 m-0 d-block" to={`/item/${item.id}`}>
									{item.title}
								</Link>
								<p className="item-stock">Cantidad: {item.quantity}</p>
							</div>
							<div className="d-flex align-items-center justify-content-between mt-2">
								<p className="m-0 h5 item-price">$ {item.price} c/u</p>
								{item.quantity > 1 ? (
									<p className="m-0 pe-3 h5 item-price flex-grow-1 text-end">
										Subtotal $ {item.subtotal}
									</p>
								) : null}
								<FontAwesomeIcon
									className="text-primary"
									icon="fa-solid fa-trash"
									size="lg"
									onClick={() => handleDelete(item.id, item.quantity)}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
