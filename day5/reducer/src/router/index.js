import CartItem from "../components/CartItem";
import ListProducts from "../components/ListProducts";
import Profile from "../components/Profile";
import ListSanpham from "../components/ListSanpham";
import Payment from "../components/Payment";
import Header from "../components/Header";

const publicRouter = [
    {
        path: '/',
        component: ListSanpham
    },
    {
        path: '/profile',
        component: Profile,
        layout: null
    }
];

export default publicRouter;