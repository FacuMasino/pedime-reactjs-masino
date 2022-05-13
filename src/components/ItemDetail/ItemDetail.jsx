import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { toast } from 'react-toastify';

import ItemCount from '../ItemCount';
import ItemDetailCarousel from './ItemDetailCarousel/ItemDetailCarousel';
import { CartContext } from '../../contexts/CartContext';

import './ItemDetail.scss';

// Solo para probar que funcionan los métodos
const TestCartMethods = ({ itemId }) => {
	const { removeItem, clear } = useContext(CartContext);
	return (
		<>
			<button className="btn btn-primary ms-2 me-1" onClick={() => removeItem(itemId)}>
				Eliminar del carrito
			</button>
			<button className="btn btn-primary mx-1" onClick={() => clear()}>
				Limpiar carrito
			</button>
		</>
	);
};

const ItemDetail = ({ item }) => {
	const [addedQty, setAddedQty] = useState(0);
	const { addItem, canAdd } = useContext(CartContext);

	const onAddHandler = (prodQty) => {
		if (canAdd(item.id, item.stock, prodQty)) {
			setAddedQty(prodQty);
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
				<div className="col-md-6 col-12 border-start p-3 ps-4">
					<div className="border-bottom mb-3">
						<p className="item-title h1">{item.title}</p>
						<p className="item-price h3 text-primary mb-5">$ {item.price}</p>
						<p className="item-title h4">DESCRIPCIÓN</p>
						<p className="mb-4">{item.description}</p>
						<p className="my-0">
							<span className="item-stock">Disponibles:</span> {item.stock}
						</p>
						{addedQty > 0 ? (
							<>
								<p className="m-0">
									<span className="item-stock">Cantidad seleccionada:</span> {addedQty}
								</p>
								<Link className="btn btn-primary my-2" to="/cart">
									Finalizar compra
								</Link>
								<TestCartMethods itemId={item.id} />
							</>
						) : (
							<ItemCount
								initial={1}
								stock={item.stock}
								onAdd={(prodQty) => onAddHandler(prodQty, item.stock)}
							></ItemCount>
						)}
					</div>
					<p className="m-0">
						Categoría: <span className="text-muted">{item.category}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
