import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './itemCount.scss';

const ItemCount = ({ stock, initial, onAdd }) => {
	const [prodQty, setProdQty] = useState(stock === 0 ? 0 : initial); // Si no hay stock, inicia en 0
	const [canIncrement, setCanIncrement] = useState(true);
	const [canDecrement, setCanDecrement] = useState(true);
	const [canAdd, setCanAdd] = useState(true);

	const updateDisabledButtons = () => {
		setCanIncrement(prodQty < stock);
		setCanDecrement(prodQty >= 1);
		setCanAdd(prodQty >= 1 && prodQty <= stock);
	};

	useEffect(updateDisabledButtons, [prodQty, stock]);

	return (
		<div className="d-inline-flex flex-column p-2">
			<div className="itemcount">
				<button
					type="button"
					className="itemcount-control minus"
					disabled={!canDecrement}
					onClick={() => setProdQty(prodQty - 1)}
				>
					<FontAwesomeIcon icon="fas fa-minus" />
				</button>
				<input
					type="number"
					className="itemcount-control"
					value={prodQty}
					onChange={(e) => setProdQty(e.target.value)}
				/>
				<button
					disabled={!canIncrement}
					className="itemcount-control plus"
					onClick={() => setProdQty(prodQty + 1)}
				>
					<FontAwesomeIcon icon="fas fa-plus" />
				</button>
			</div>
			<div className="itemcount-add mx-2 my-2">
				<button disabled={!canAdd} className="btn btn-primary" onClick={() => onAdd(prodQty)}>
					Agregar
				</button>
			</div>
		</div>
	);
};

export default ItemCount;
