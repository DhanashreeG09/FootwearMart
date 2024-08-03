import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Header() {

	const count= useSelector((state)=> {
		//  console.log(state.cart.products);
		return (state.cart.products)
	});
  return (
    <div>
        <>
		<nav class="colorlib-nav" role="navigation">
			<div class="top-menu">
				<div class="container">
					<div class="row">
						<div class="col-sm-7 col-md-9">
							<div id="colorlib-logo"><Link>MyFootwear</Link></div>
						</div>
						<div class="col-sm-5 col-md-3">
			            <form action="#" class="search-wrap">
			               <div class="form-group">
			                  <input type="search" class="form-control search" placeholder="Search"/>
			                  <button class="btn btn-primary submit-search text-center" type="submit"><i class="icon-search"></i></button>
			               </div>
			            </form>
			         </div>
		         </div>
					<div class="row">
						<div class="col-sm-12 text-left menu-1">
							<ul>
							<li class="active">
								<a href="/">
								<img src={require('../Assets/images/792226dd2553f186539212aa2c7bb3d3-removebg-preview.png')} style={{width: "150px"}} alt="" />
								</a>
							</li>
								<li class="active"><Link to={'/'}>Home</Link></li>
								<li class="has-dropdown">
									
									<ul class="dropdown">
										<li><a href="product-detail.html">Product Detail</a></li>
										<li><a href="cart.html">Shopping Cart</a></li>
										<li><a href="checkout.html">Checkout</a></li>
										<li><a href="order-complete.html">Order Complete</a></li>
										<li><a href="add-to-wishlist.html">Wishlist</a></li>
									</ul>
								</li>
								
								<li><Link to={'/allproducts'}>All Products</Link></li>
								<li><Link to={'/about'}>About</Link></li>
								<li><Link to={'/contact'}>Contact</Link></li>
								<li><Link to={'/adminlogin'}>Admin Login</Link></li>
								{/* <li><Link to={'/addproducts'}>Add Products</Link></li> */}
								
								<li class="cart"><Link to={'/cart'}><button type="button" class="btn btn-light position-relative"><i class="fa-solid fa-cart-shopping"></i><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{count.length}</span></button>Cart [{count.length}]</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="sale">
				<div class="container">
					<div class="row">
						<div class="col-sm-8 offset-sm-2 text-center">
							<div class="row">
								<div class="owl-carousel2">
									<div class="item">
										<div class="col">
											<h3><a href="#">25% off (Almost) Everything! Use Code: Summer Sale</a></h3>
										</div>
									</div>
									<div class="item">
										<div class="col">
											<h3><a href="#">Our biggest sale yet 50% off all summer shoes</a></h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
		</>
    </div>
  )
}
