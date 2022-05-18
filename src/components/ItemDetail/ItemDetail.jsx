import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { toast } from 'react-toastify';

import ItemCount from '../ItemCount';
import ItemDetailCarousel from './ItemDetailCarousel/ItemDetailCarousel';
import { CartContext } from '../../contexts/CartContext';

import './ItemDetail.scss';

const ItemDetail = ({ item }) => {
	const { addItem, canAdd, removeItem, getTotalById } = useContext(CartContext);

	const navigate = useNavigate();

	const onAddHandler = (prodQty) => {
		if (canAdd(item.id, item.stock, prodQty)) {
			toast.success(
				`${prodQty} producto${prodQty > 1 ? 's' : ''} agregado${prodQty > 1 ? 's' : ''}`,
				{
					autoClose: 2000,
				}
			);
			addItem(item, prodQty);
		} else {
			toast.error(`Solo podés agregar hasta ${item.stock} productos al carrito`, {
				autoClose: 2000,
			});
		}
	};

	return (
		<div className="container-xxl container-fluid">
			<div className="row">
				<div className="col-md-6 col-12">
					<ItemDetailCarousel images={item.images} />
				</div>
				<div className="col-md-6 col-12 border-start pb-3 ps-4">
					<div className="border-bottom mb-3">
						<span className="btn btn-link mb-3 p-0" onClick={() => navigate(-1)}>
							{'<'} Volver
						</span>
						<p className="item-title h1">{item.title}</p>
						<p className="item-price h3 text-primary mb-5">$ {item.price}</p>
						<p className="item-title h4">DESCRIPCIÓN</p>
						<p className="mb-4">{item.description}</p>
						<p className="my-0">
							<span className="item-stock">Disponibles:</span> {item.stock}
						</p>
						<ItemCount
							initial={1}
							stock={item.stock}
							onAdd={(prodQty) => onAddHandler(prodQty, item.stock)}
						></ItemCount>
						{getTotalById(item.id) > 0 ? (
							<>
								<p className="m-0">
									<span className="item-stock">Cantidad seleccionada:</span> {getTotalById(item.id)}
								</p>
								<Link className="btn btn-primary my-2" to="/cart">
									Finalizar compra
								</Link>
								<button className="btn btn-primary ms-2 me-1" onClick={() => removeItem(item.id)}>
									Eliminar del carrito
								</button>
							</>
						) : null}
					</div>
					<div className="d-flex">
						<p className="m-0 me-1">Categoría:</p>
						<span
							className="btn btn-link p-0"
							onClick={() => navigate(`/category/${item.category}`)}
						>
							{item.category}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
