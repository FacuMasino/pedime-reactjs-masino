const ItemDetailSkeleton = () => {
	return (
		<div className="container-xxl container-fluid">
			<div className="row">
				<div className="col-md-6 col-12 placeholder-glow">
					<div className="d-flex h-100 p-2">
						<div className="placeholder h-50 col-2 me-2" />
						<div className="placeholder col-10" />
					</div>
				</div>
				<div className="col-md-6 col-12 border-start p-3 ps-4">
					<div className="d-flex flex-column border-bottom mb-3 placeholder-glow">
						<span className="h2 placeholder col-5 mb-2" />
						<span className="placeholder col-3 mb-5" />
						<span className="placeholder col-8 mb-2" />
						<span className="placeholder col-4 mb-2" />
						<span className="placeholder col-3 mb-2" />
						<p className="my-0">
							<span className="placeholder col-3" />
						</p>
						<button className="btn col-3 btn-primary disabled placeholder mb-2">Cargando...</button>
					</div>
					<p className="m-0">
						<span className="placeholder col-4" />
					</p>
				</div>
			</div>
		</div>
	);
};

export default ItemDetailSkeleton;
