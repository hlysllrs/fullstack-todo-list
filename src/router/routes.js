import Home from '../pages/Home/Home'
import Shop from '../pages/Shop/Shop'
import Wishlist from '../pages/Wishlist/Wishlist'
import Checkout from '../pages/Checkout/Checkout'

const routes = [
	{
		Component: Home,
		key: 'Home',
		path: '/'
	},
	{
		Component: Shop,
		key: 'Shop',
		path: '/shop'
	},
	// {
	// 	Component: Wishlist,
	// 	key: 'Wishlist',
	// 	path: '/wishlist'
	// },
	// {
	// 	Component: Checkout,
	// 	key: 'Checkout',
	// 	path: '/checkout'
	// }
];

export default routes;
