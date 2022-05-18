const pedimeProducts = [
	{
		id: 101,
		title: 'Junior Simple',
		price: 650,
		stock: 100,
		category: 'Burgers',
		description: 'Hamburguesa simple con cheddar y 1 porción chica de papas fritas',
		images: [
			'https://firebasestorage.googleapis.com/v0/b/pedime-reactjs-masino.appspot.com/o/assets%2Fimg%2Fburgers%2Fjuniorsimple.png?alt=media&token=758b386d-55aa-414d-ba5d-6bdf5195c887',
			'https://firebasestorage.googleapis.com/v0/b/pedime-reactjs-masino.appspot.com/o/assets%2Fimg%2Fburgers%2Fpapasfritas.png?alt=media&token=9a8a0028-8d8e-4c3e-9e2b-a87f78cb806d',
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
			'https://firebasestorage.googleapis.com/v0/b/pedime-reactjs-masino.appspot.com/o/assets%2Fimg%2Fburgers%2Fjuniordoble.png?alt=media&token=65179cab-b23d-4887-92c5-a7b3c0d4b8d7',
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
			'https://firebasestorage.googleapis.com/v0/b/pedime-reactjs-masino.appspot.com/o/assets%2Fimg%2Fburgers%2Fdeluxesimple.png?alt=media&token=f14711a5-e076-410d-8aac-512ba78dcd95',
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
			'https://firebasestorage.googleapis.com/v0/b/pedime-reactjs-masino.appspot.com/o/assets%2Fimg%2Fburgers%2Fdeluxedoble.png?alt=media&token=180e097b-dcff-4e0e-be50-7e6077ddc479',
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
			'https://firebasestorage.googleapis.com/v0/b/pedime-reactjs-masino.appspot.com/o/assets%2Fimg%2Fburgers%2Fburgerpedime.png?alt=media&token=41e89744-9a6a-41a3-9806-15cc3741e526',
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
			'https://firebasestorage.googleapis.com/v0/b/pedime-reactjs-masino.appspot.com/o/assets%2Fimg%2Fburgers%2Fburgerpedimeextra.png?alt=media&token=797e59c5-3330-47f4-82ef-14ed6c4a5103',
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
			'https://firebasestorage.googleapis.com/v0/b/pedime-reactjs-masino.appspot.com/o/assets%2Fimg%2Fpizzas%2Fpizzamuzzarella.webp?alt=media&token=7f9d13b8-0a75-42e2-a79f-e0796d1a33dc',
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
			'https://firebasestorage.googleapis.com/v0/b/pedime-reactjs-masino.appspot.com/o/assets%2Fimg%2Fpizzas%2Fpizzamuzzarella_albahaca.webp?alt=media&token=378b7276-f037-44c5-bb53-4ee035ad7b8c',
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
			'https://firebasestorage.googleapis.com/v0/b/pedime-reactjs-masino.appspot.com/o/assets%2Fimg%2Fpizzas%2Fpizzamuzzarella_albahaca_anchoas.webp?alt=media&token=53ede0dc-a8f4-4a4d-a0a7-fa3bea8b27ef',
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
			'https://firebasestorage.googleapis.com/v0/b/pedime-reactjs-masino.appspot.com/o/assets%2Fimg%2Fpizzas%2Fpizzamuzzarellacjamon.webp?alt=media&token=ce50ae25-3f04-448b-9156-1610d48b3bdf',
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
			'https://firebasestorage.googleapis.com/v0/b/pedime-reactjs-masino.appspot.com/o/assets%2Fimg%2Fpizzas%2Fpizzacalabresa.webp?alt=media&token=6969bf43-6476-427a-8dcb-5eb52a2cf7b7',
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
			'https://firebasestorage.googleapis.com/v0/b/pedime-reactjs-masino.appspot.com/o/assets%2Fimg%2Fpizzas%2Fpizzaprimavera.webp?alt=media&token=73270a0f-80ec-4829-a77d-d120c240b136',
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
			'https://firebasestorage.googleapis.com/v0/b/pedime-reactjs-masino.appspot.com/o/assets%2Fimg%2Fpicadas%2Fpicada_113.webp?alt=media&token=848c3c56-2048-4a10-8783-32bba81caba5',
			'https://firebasestorage.googleapis.com/v0/b/pedime-reactjs-masino.appspot.com/o/assets%2Fimg%2Fpicadas%2Fquesopategras.jpg?alt=media&token=587060b7-a348-4f38-9a10-926cd360fba8',
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
			'https://firebasestorage.googleapis.com/v0/b/pedime-reactjs-masino.appspot.com/o/assets%2Fimg%2Fpicadas%2Fpicada_114.webp?alt=media&token=b9e9061c-28c8-48cc-83c7-ad243382c4d6',
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
			'https://firebasestorage.googleapis.com/v0/b/pedime-reactjs-masino.appspot.com/o/assets%2Fimg%2Fpicadas%2Fpicada_115.webp?alt=media&token=79c0460f-b088-4303-99de-f4c63babb72b',
			'https://firebasestorage.googleapis.com/v0/b/pedime-reactjs-masino.appspot.com/o/assets%2Fimg%2Fpicadas%2Fquesopategras.jpg?alt=media&token=587060b7-a348-4f38-9a10-926cd360fba8',
			'https://firebasestorage.googleapis.com/v0/b/pedime-reactjs-masino.appspot.com/o/assets%2Fimg%2Fpicadas%2Fsalame.jpg?alt=media&token=cf11b56d-ae13-4b86-b6d7-c77afc3e99d5',
		],
	},
];

const getProducts = () => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(pedimeProducts), 1300);
	});
};

const getProductById = (id) => {
	return getProducts().then((products) => {
		return products.find((product) => product.id === Number(id));
	});
};

const getProductsByCategory = (category) => {
	return getProducts().then((products) => {
		return products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
	});
};

export { getProducts, getProductById, getProductsByCategory };
