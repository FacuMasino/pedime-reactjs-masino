const pedimeProducts = [
	{
		id: 101,
		title: 'Junior Simple',
		price: 650,
		stock: 100,
		category: 'Burgers',
		description: 'Hamburguesa simple con cheddar y 1 porción chica de papas fritas',
		images: [
			'https://d3sn2rlrwxy0ce.cloudfront.net/cheddar-thumb.png?mtime=20210916135032&focal=none',
			'https://www.pikpng.com/pngl/b/596-5966102_papas-fritas-papas-fritas-sin-fondo-clipart.png',
		],
	},
	{
		id: 102,
		title: 'Junior Doble',
		price: 800,
		stock: 100,
		category: 'Burgers',
		description: 'Hamburguesa doble con cheddar y 1 porción chica de papas fritas',
		images: [
			'https://d3sn2rlrwxy0ce.cloudfront.net/cheddar-duplo-thumb.png?mtime=20210916135304&focal=none',
		],
	},
	{
		id: 103,
		title: 'Deluxe Simple',
		price: '1000',
		stock: 100,
		category: 'Burgers',
		description:
			'Hamburguesa XL con cheddar, tomate, rodajas de pepino y 1 porción de papas medianas',
		images: [
			'https://d3sn2rlrwxy0ce.cloudfront.net/cheeseburger-thumb.png?mtime=20210916134524&focal=none',
		],
	},
	{
		id: 104,
		title: 'Deluxe Doble',
		price: '1200',
		stock: 100,
		category: 'Burgers',
		description:
			'Hamburguesa XL Doble con cheddar, tomate, rodajas de pepino y 1 porción de papas medianas',
		images: [
			'https://d3sn2rlrwxy0ce.cloudfront.net/cheeseburger-duplo-thumb_2021-09-16-134859_rdjn.png?mtime=20210916134900&focal=none',
		],
	},
	{
		id: 105,
		title: 'Burger PediMe',
		price: '1400',
		stock: 100,
		category: 'Burgers',
		description: 'Hamburguesa XXL Doble con cheddar, doble bacon y 1 porción de papas grandes',
		images: [
			'https://d3sn2rlrwxy0ce.cloudfront.net/maga-stacker-atomico-2-thumb.png?mtime=20210916133613&focal=none',
		],
	},
	{
		id: 106,
		title: 'Burger PediMe Extra',
		price: '1600',
		stock: 100,
		category: 'Burgers',
		description: 'Hamburguesa XXL Triple con cheddar, triple bacon y 1 porción de papas grandes',
		images: [
			'https://d3sn2rlrwxy0ce.cloudfront.net/maga-stacker-atomico-2-thumb.png?mtime=20210916133613&focal=none',
		],
	},
];

const getProducts = () => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(pedimeProducts), 2000);
	});
};

export default getProducts;
