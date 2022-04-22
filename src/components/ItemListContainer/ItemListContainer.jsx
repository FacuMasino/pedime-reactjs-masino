import { toast } from 'react-toastify';
import ItemCount from '../ItemCount';

const ItemListContainer = ({greeting}) => {
	// Mostrar un mensaje al agregar producto
	const onAddFn = (n)=>toast.success(`${n} producto${n>1?'s':''} agregado${n>1?'s':''}`, {
		autoClose: 2000,
	});
	
	return (
		<div className="container p-2">
			<p className="h2 text-center">{greeting}</p>
			<ItemCount stock={5} initial={1} onAdd={(n)=>onAddFn(n)}/>
			<ItemCount stock={0} initial={1} onAdd={(n)=>onAddFn(n)}/>
		</div>
	)
}

export default ItemListContainer;