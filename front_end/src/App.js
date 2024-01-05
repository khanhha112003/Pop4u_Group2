import { useEffect } from "react";

import { SpecificLayout } from "./SpecificLayout";
import { AboutUs } from './screens/AboutUs/AboutUs';
import { ArtistList } from './screens/Artist/Artist';
import { SignIn } from './screens/SignIn/SignIn';
import { SignUp } from './screens/SignUp/SIgnUp';
import { HomePage } from './screens/HomePage/HomePage';
import {BuyPolicy} from './screens/Policy/BuyPolicy';
import {ShipPolicy} from './screens/Policy/ShipPolicy';
import {PaymentPolicy} from './screens/Policy/PaymentPolicy';
import {PersonalData} from './screens/Policy/PersonalData';
import {Supplier} from './screens/Policy/Supplier';
import {ESG} from './screens/Policy/ESG'


import { AdminSpecificLayout } from "./AdminSpecificLayout";
import { ProductListAdmin } from './screens/Admin/Product/ProductListAdmin'
import { AddProduct } from './screens/Admin/Product/AddProduct';
import { AddVoucher } from './screens/Admin/Voucher/AddVoucher';
import { VoucherList } from './screens/Admin/Voucher/VoucherList';
// <<<<<<< branchcuatam
// import { OrderList } from "./screens/Admin/Order/OrderList";
// =======
// import { ArtistAdmin } from "./screens/Admin/Artist/ArtistAdmin";
// >>>>>>> main

import { ProductDetail } from './screens/ProductDetail/ProductDetail';
import { ProductList } from './screens/ProductList/ProductList';

import { Blog } from './screens/Blog/BlgFilter/BlgFilter';
import { SinglePost } from './screens/Blog/SinglePost/SinglePost'
import { Cart } from './screens/Cart/Cart';


import {
	BrowserRouter,
	Routes,
	Route,
	useLocation
} from "react-router-dom";
import { ArtistAdmin } from "./screens/Admin/Artist/ArtistAdmin";
import CustomerManagementAdmin from "./screens/Admin/Customer/CustomerList";
import { BasicTable } from "./screens/Admin/Order/OrderList";


function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

function App() {
// <<<<<<< branchcuatam
//   return (
//     <BrowserRouter>
//       <ScrollToTop />
//       <Routes>

//         <Route path="/" element={<SpecificLayout />}>
//           <Route exact path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/artists" element={<ArtistList />} />
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/single-post/:postId" element={<SinglePost />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/product_detail" element={<ProductDetail />} />
//           <Route path="/product_list">

//             <Route path=":sort" element={<ProductList />} />
//             <Route path="" element={<ProductList />} />
//           </Route>
//         </Route>
//         <Route path="/" element={<AdminSpecificLayout />}>
//         <Route path="/" >
//           <Route path="/admin/add_product" element={<AddProduct />} />
//         </Route> 
//         <Route path="/">
//           <Route path="/admin/product_list" element={<ProductListAdmin />} />
//         </Route>
//         <Route path="/">
//           <Route path="/admin/add_voucher" element={<AddVoucher />} />
//         </Route>
//         <Route path="/">
//           <Route path="/admin/voucher_list" element={<VoucherList />} />
//         </Route>
//         </Route>
//       </Routes> 
//     </BrowserRouter>


//   );
// =======
// 	return (
// 		<BrowserRouter>
// 			<ScrollToTop />
// 			<Routes>

// 				<Route path="/" element={<SpecificLayout />}>
// 					<Route exact path="/" element={<HomePage />} />
// 					<Route path="/about" element={<AboutUs />} />
// 					<Route path="/artists" element={<ArtistList />} />
// 					<Route path="/signin" element={<SignIn />} />
// 					<Route path="/signup" element={<SignUp />} />
// 					<Route path="/blog" element={<Blog />} />
// 					<Route path="/single-post/:postId" element={<SinglePost />} />
// 					<Route path="/cart" element={<Cart />} />
// 					<Route path="/product_detail" element={<ProductDetail />} />
// 					<Route path="/buy_policy" element={<BuyPolicy />} />
// 					<Route path="/ship_policy" element={<ShipPolicy />} />
// 					<Route path="/payment_policy" element={<PaymentPolicy />} />
// 					<Route path="/personal_data" element={<PersonalData />} />
// 					<Route path="/supplier" element={<Supplier />} />
// 					<Route path="/esg" element={<ESG />} />
// 					<Route path="/product_list">
// 						<Route path=":sort" element={<ProductList />} />
// 						<Route path="" element={<ProductList />} />
// 					</Route>
// 				</Route>
// 				<Route path="/" element={<AdminSpecificLayout />}>
// 					{/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
// 					<Route path="/admin/add_product" element={<AddProduct />} />
// 					<Route path="/admin/product_list" element={<ProductListAdmin />} />
// 					<Route path="/admin/add_voucher" element={<AddVoucher />} />
// 					<Route path="/admin/voucher_list" element={<VoucherList />} />
// 					<Route path="/admin/customer_list" element={<CustomerManagementAdmin />} />
// 					<Route path="/admin/add_customer" element={<CustomerManagementAdmin />} />
// 					<Route path="/admin/artist_list" element={<ArtistAdmin/>} />
// // 					<Route path="/admin/add_artist" element={<ArtistAdmin />} />
// 					<Route path="/admin/order_list" element={<BasicTable />} />
// 					<Route path="/admin/order_detail" element={<BasicTable />} />
					
// 				</Route>
// 			</Routes>
// 		</BrowserRouter>


// 	);
// >>>>>>> main
}

export default App;