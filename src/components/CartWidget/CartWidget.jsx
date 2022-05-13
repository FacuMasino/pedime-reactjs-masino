import { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CartContext } from '../../contexts/CartContext';

import './CartWidget.scss';

const CartWidget = ({ className, children }) => {
	const { getTotalQty } = useContext(CartContext);

	return (
		<div className={`cartwidget ` + className}>
			<div className="position-relative mx-md-2">
				<FontAwesomeIcon icon="shopping-basket" size="lg" />
				<span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-secondary">
					{getTotalQty()}
				</span>
			</div>
		</div>
	);
};

export default CartWidget;
