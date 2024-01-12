import { AboutUs } from './screens/AboutUs/AboutUs';
import { SignIn } from './screens/SignIn/SignIn';
import { SignUp } from './screens/SignUp/SignUp';
import { HomePage } from './screens/HomePage/HomePage';
import { BuyPolicy } from './screens/Policy/BuyPolicy';
import { ShipPolicy } from './screens/Policy/ShipPolicy';
import { PaymentPolicy } from './screens/Policy/PaymentPolicy';
import { PersonalData } from './screens/Policy/PersonalData';
import { Supplier } from './screens/Policy/Supplier';
import { ESG } from './screens/Policy/ESG'
import { UserProfile } from './screens/UserProfile/UserProfile'

import { ProductListAdmin } from './screens/Admin/Product/ProductListAdmin'
import { AddProduct } from './screens/Admin/Product/AddProduct';
import { ProductDetailEdit } from './screens/Admin/Product/ProductDetail';
import { AddVoucher } from './screens/Admin/Voucher/AddVoucher';
import { VoucherList } from './screens/Admin/Voucher/VoucherList';
import { CustomerManagementAdmin } from "./screens/Admin/Customer/CustomerList";
import { ArtistAdmin } from "./screens/Admin/Artist/ArtistAdmin";
import { ArtistDetailAdmin } from "./screens/Admin/Artist/ArtistDetailAdmin";
import { AddArtistAdmin } from './screens/Admin/Artist/AddArtistAdmin';
import { OrderList } from "./screens/Admin/Order/OrderList"

import { ProductDetail } from './screens/ProductDetail/ProductDetail';
import { ProductList } from './screens/ProductList/ProductList';

import { ProductArtist } from './screens/ProductArtist/ProductArtist';
import { ArtistList } from './screens/Artist/Artist';

import { Blog } from './screens/Blog/BlgFilter/BlgFilter';
import { SinglePost } from './screens/Blog/SinglePost/SinglePost'
import { Cart } from './screens/Cart/Cart';
import { Payment } from './screens/Payment/Payment'

import {
	Routes,
	Route,
} from "react-router-dom";
import { AdminLayout } from "./ProtectingRoute/AdminLayout";
import { ProtectedLayout } from "./ProtectingRoute/ProtectedLayout";
import { NormalLayout } from "./ProtectingRoute/NormalLayout";
import { GuestLayout } from './ProtectingRoute/GuestLayout';
import NotFoundPage from './screens/Error/NotFoundError';
import { OrderDetail } from './screens/Admin/Order/OrderDetail';

function App() {
	return (
		<Routes>
			<Route path="/account" element={<GuestLayout />}>
				<Route path="signup" element={<SignUp />} />
				<Route path="signin" element={<SignIn />} />
				<Route path='*' exact={true} component={<NotFoundPage/>} />
			</Route>
			<Route  element={<NormalLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="/artists" element={<ArtistList />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/single-post/:postId" element={<SinglePost />} />
				<Route path="/product_detail" element={<ProductDetail />} />
				<Route path="/buy_policy" element={<BuyPolicy />} />
				<Route path="/ship_policy" element={<ShipPolicy />} />
				<Route path="/payment_policy" element={<PaymentPolicy />} />
				<Route path="/personal_data" element={<PersonalData />} />
				<Route path="/supplier" element={<Supplier />} />
				<Route path="/esg" element={<ESG />} />
				<Route path="/product_list">
					<Route path=":sort" element={<ProductList />} />
					<Route path="" element={<ProductList />} />
				</Route>
				<Route path="/artist_detail" element={<ProductArtist />} />
				<Route path='*' exact={true} component={<NotFoundPage/>} />
				<Route path="payment" element={<Payment />} />
			</Route>
			<Route path="/user" element={<ProtectedLayout />}>
				<Route path="user_profile" element={<UserProfile />} />
				<Route path="cart" element={<Cart />} />
			</Route>
			<Route path="/admin" element={<AdminLayout />}>
				<Route path="add_product" element={<AddProduct />} />
				<Route path="product_list" element={<ProductListAdmin />} />
				<Route path="product_detail" element={<ProductDetailEdit />} />
				<Route path="add_voucher" element={<AddVoucher />} />
				<Route path="voucher_list" element={<VoucherList />} />
				<Route path="customer_list" element={<CustomerManagementAdmin />} />
				<Route path="artist_list" element={<ArtistAdmin />} />
				<Route path='artist_detail' element={<ArtistDetailAdmin />} />
				<Route path='artist_add' element={<AddArtistAdmin />} />
				<Route path="order_list" element={<OrderList />} />
				<Route path="order_detail" element={<OrderDetail />} />
				{/* <Route path="order_detail/:orderId" element={<OrderDetail />} /> */}
				<Route path='*' exact={true} component={<NotFoundPage/>} />
			</Route>
		</Routes>
	);
}

export default App;