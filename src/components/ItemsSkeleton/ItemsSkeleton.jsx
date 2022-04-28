const ItemsSkeleton = ({ itemsQty, isLoading }) => {
	return isLoading ? Array.from(Array(itemsQty), (e, index) => <ItemSkeleton key={index} />) : null;
};

const ItemSkeleton = () => (
	<div className="col">
		<div className="card h-100">
			<div className="d-flex bg-light p-5" />
			<div className="card-body">
				<h5 className="card-title placeholder-glow">
					<span className="placeholder col-6" />
				</h5>
				<p className="card-text placeholder-glow">
					<span className="placeholder col-7" />
					<span className="placeholder col-6" />
					<span className="placeholder col-4" />
					<span className="placeholder col-4" />
					<span className="placeholder col-8" />
				</p>
				<div className="d-flex align-items-stretch justify-content-between">
					<p className="card-text placeholder-glow stock">
						<span className="placeholder col-4" />
					</p>
					<p className="card-text placeholder-glow price">
						<span className="placeholder col-4" />
					</p>
				</div>
			</div>
			<div className="card-body text-center">
				<button className="btn btn-primary disabled placeholder">Cargando...</button>
			</div>
		</div>
	</div>
);

export default ItemsSkeleton;
