import { useState } from 'react';
import './ItemDetailCarousel.scss';

const ItemDetailCarousel = ({ images }) => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<div className="d-flex flex-md-row flex-column flex-wrap">
			<div className="col-md-2 col-3">
				<div className="d-flex flex-md-column">
					{images.map((img, index) => {
						return (
							<div
								className={`btn-carousel ${index === selectedIndex ? 'btn-carousel-selected' : ''}`}
								key={index}
								onClick={() => setSelectedIndex(index)}
								onMouseOver={() => setSelectedIndex(index)}
							>
								<img className="item-image-mini" src={img} alt={`Imagen ${index + 1}`} />
							</div>
						);
					})}
				</div>
			</div>
			<div className="col-md-10 col-12 p-2 overflow-hidden">
				<img
					className="item-image img-fluid mx-auto d-block"
					src={images[selectedIndex]}
					alt={`Imagen ${setSelectedIndex + 1}`}
				/>
			</div>
		</div>
	);
};

export default ItemDetailCarousel;
