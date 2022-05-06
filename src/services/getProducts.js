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
		price: 1000,
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
		price: 1200,
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
		price: 1400,
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
		price: 1600,
		stock: 100,
		category: 'Burgers',
		description: 'Hamburguesa XXL Triple con cheddar, triple bacon y 1 porción de papas grandes',
		images: [
			'https://d3sn2rlrwxy0ce.cloudfront.net/maga-stacker-atomico-2-thumb.png?mtime=20210916133613&focal=none',
		],
	},
	{
		id: 107,
		title: 'Pizza Muzzarella',
		price: 600,
		stock: 10,
		category: 'Pizzas',
		description: 'Pizza grande (8 porciones) de Muzzarella, salsa de tomate, orégano y aceitunas',
		images: [
			'https://images.deliveryhero.io/image/pedidosya/products/93bf06a9-9b03-4dd4-b1b8-1effbe52bf4a.jpg?quality=90&width=2560&webp=1',
		],
	},
	{
		id: 108,
		title: 'Pizza Muzzarella y Albahaca',
		price: 680,
		stock: 10,
		category: 'Pizzas',
		description:
			'Pizza grande (8 porciones) de Muzzarella, salsa de tomate, albahaca, orégano y aceitunas',
		images: [
			'https://images.deliveryhero.io/image/pedidosya/products/501961-d8138f6a-3c13-4eb6-8662-df36cf8ca052.jpg?quality=90&width=1280&webp=1',
		],
	},
	{
		id: 109,
		title: 'Pizza Muzzarella y Anchoas',
		price: 680,
		stock: 8,
		category: 'Pizzas',
		description:
			'Pizza grande (8 porciones) de Muzzarella, salsa de tomate, anchoas, orégano y aceitunas',
		images: [
			'https://images.deliveryhero.io/image/pedidosya/products/359178-f7c3c27c-2bdd-4606-9acf-69962fe5a34c.jpg?quality=90&width=1280&webp=1',
		],
	},
	{
		id: 110,
		title: 'Pizza Muzzarella C/Jamón',
		price: 650,
		stock: 20,
		category: 'Pizzas',
		description:
			'Pizza grande (8 porciones) de Muzzarella, salsa de tomate, jamón, orégano y aceitunas',
		images: [
			'https://images.deliveryhero.io/image/pedidosya/products/501961-da6ec20a-ef33-4721-92a3-b269babd7d14.jpg?quality=90&width=1280&webp=1',
		],
	},
	{
		id: 111,
		title: 'Pizza Calabresa',
		price: 730,
		stock: 15,
		category: 'Pizzas',
		description:
			'Pizza grande (8 porciones) de Muzzarella, salsa de tomate, rodajas de longaniza a la calabresa, orégano y aceitunas',
		images: [
			'https://images.deliveryhero.io/image/pedidosya/products/501961-2e5ea88e-0ca1-4c02-8667-9273215d4513.jpg?quality=90&width=1280&webp=1',
		],
	},
	{
		id: 112,
		title: 'Pizza Primavera',
		price: 790,
		stock: 10,
		category: 'Pizzas',
		description:
			'Pizza grande (8 porciones) de Muzzarella, salsa de tomate, jamón, huevo duro y aceitunas',
		images: [
			'https://images.deliveryhero.io/image/pedidosya/products/501961-6ac0a63d-153d-45f7-a6eb-20e1b098bd62.jpg?quality=90&width=1280&webp=1',
		],
	},
	{
		id: 113,
		title: 'Picada completa, come 1 pican 2',
		price: 1500,
		stock: 10,
		category: 'Picadas',
		description:
			'Jamón crudo, mortadela, 3 tipos de salames, queso pategrás y holanda, mix de quesos marinados, aceitunas, mini ensalada, pan flauta, mani y salsa alioli',
		images: [
			'https://images.deliveryhero.io/image/pedidosya/products/25b40531-a4eb-493d-9e07-703e0144d837.jpg?quality=90&width=1280&webp=1',
			'https://http2.mlstatic.com/D_NQ_NP_733751-MLA40016877449_122019-O.jpg',
		],
	},
	{
		id: 114,
		title: 'Picada JQ, come 1 pican 2',
		price: 1350,
		stock: 10,
		category: 'Picadas',
		description:
			'Jamón crudo, queso pategrás en cuñas, maní, aceitunas verdes, aderezo, salsa alioli y pan artesanal',
		images: [
			'https://images.deliveryhero.io/image/pedidosya/products/f13f247f-3378-470d-b737-58e362008199.jpg?quality=90&width=1280&webp=1',
		],
	},
	{
		id: 115,
		title: 'Picada SQ, come 1 pican 2',
		price: 1300,
		stock: 10,
		category: 'picadas',
		description:
			'Salame estacionado, queso pategras en cuñas, aceitunas, mini ensalada, pan flauta, mani y salsa alioli',
		images: [
			'https://images.deliveryhero.io/image/pedidosya/products/38fba724-d664-4dbd-871e-9effabad76f5.jpg?quality=90&width=1280&webp=1',
			'https://http2.mlstatic.com/D_NQ_NP_733751-MLA40016877449_122019-O.jpg',
			'https://http2.mlstatic.com/D_NQ_NP_703499-MLA44086339342_112020-O.jpg',
		],
	},
];

const getProducts = () => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(pedimeProducts), 2000);
	});
};

const getProductById = (id) => {
	return getProducts().then((products) => {
		return products.find((product) => product.id === Number(id));
	});
};

const getProductsByCategory = (category) => {
	return getProducts().then((products) => {
		return products.filter((product) => product.category.toLowerCase() === category);
	});
};

export { getProducts, getProductById, getProductsByCategory };
