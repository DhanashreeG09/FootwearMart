import React from 'react'

export default function Contact() {
  return (
    <div>
    <body>

{/* <div class="colorlib-loader"></div> */}

<div id="page">
    

    <div class="breadcrumbs">
        <div class="container">
            <div class="row">
                <div class="col">
                    <p class="bread"><span><a href="index.html">Home</a></span> / <span>Contact</span></p>
                </div>
            </div>
        </div>
    </div>


    <div id="colorlib-contact">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h3>Contact Information</h3>
                    <div class="row contact-info-wrap">
                        <div class="col-md-3">
                            <p><span><i class="icon-location"></i></span> 198 West 21th Street, <br/> Suite 721 New York NY 10016</p>
                        </div>
                        <div class="col-md-3">
                            <p><span><i class="icon-phone3"></i></span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                        </div>
                        <div class="col-md-3">
                            <p><span><i class="icon-paperplane"></i></span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                        </div>
                        <div class="col-md-3">
                            <p><span><i class="icon-globe"></i></span> <a href="#">yoursite.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="contact-wrap">
                        <h3>Get In Touch</h3>
                        <form action="#" class="contact-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fname">First Name</label>
                                        <input type="text" id="fname" class="form-control" placeholder="Your firstname"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="lname">Last Name</label>
                                        <input type="text" id="lname" class="form-control" placeholder="Your lastname"/>
                                    </div>
                                </div>
                                <div class="w-100"></div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="text" id="email" class="form-control" placeholder="Your email address"/>
                                    </div>
                                </div>
                                <div class="w-100"></div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="subject">Subject</label>
                                        <input type="text" id="subject" class="form-control" placeholder="Your subject of this message"/>
                                    </div>
                                </div>
                                <div class="w-100"></div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="message">Message</label>
                                        <textarea name="message" id="message" cols="30" rows="10" class="form-control" placeholder="Say something about us"></textarea>
                                    </div>
                                </div>
                                <div class="w-100"></div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <input type="submit" value="Send Message" class="btn btn-primary"/>
                                    </div>
                                </div>
                            </div>
                        </form>		
                    </div>
                </div>
                <div class="col-md-6">
                    <div id="map" class="colorlib-map"></div>		
                </div>
            </div>
        </div>
    </div>

    <footer id="colorlib-footer" role="contentinfo">
        <div class="container">
            <div class="row row-pb-md">
                <div class="col footer-col colorlib-widget">
                    <h4>About Footwear</h4>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                    <p>
                        <ul class="colorlib-social-icons">
                            <li><a href="#"><i class="icon-twitter"></i></a></li>
                            <li><a href="#"><i class="icon-facebook"></i></a></li>
                            <li><a href="#"><i class="icon-linkedin"></i></a></li>
                            <li><a href="#"><i class="icon-dribbble"></i></a></li>
                        </ul>
                    </p>
                </div>
                <div class="col footer-col colorlib-widget">
                    <h4>Customer Care</h4>
                    <p>
                        <ul class="colorlib-footer-links">
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Returns/Exchange</a></li>
                            <li><a href="#">Gift Voucher</a></li>
                            <li><a href="#">Wishlist</a></li>
                            <li><a href="#">Special</a></li>
                            <li><a href="#">Customer Services</a></li>
                            <li><a href="#">Site maps</a></li>
                        </ul>
                    </p>
                </div>
                <div class="col footer-col colorlib-widget">
                    <h4>Information</h4>
                    <p>
                        <ul class="colorlib-footer-links">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Delivery Information</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Order Tracking</a></li>
                        </ul>
                    </p>
                </div>

                <div class="col footer-col">
                    <h4>News</h4>
                    <ul class="colorlib-footer-links">
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Exhibitions</a></li>
                    </ul>
                </div>

                <div class="col footer-col">
                    <h4>Contact Information</h4>
                    <ul class="colorlib-footer-links">
                        <li>291 South 21th Street, <br/> Suite 721 New York NY 10016</li>
                        <li><a href="tel://1234567920">+ 1235 2355 98</a></li>
                        <li><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
                        <li><a href="#">yoursite.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="copy">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <p>
                        {/* <span><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></span>  */}
                        <span class="block">Demo Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a> , <a href="http://pexels.com/" target="_blank">Pexels.com</a></span>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</div>

<div class="gototop js-top">
    <a href="#" class="js-gotop"><i class="ion-ios-arrow-up"></i></a>
</div>

{/* <!-- jQuery --> */}
<script src="js/jquery.min.js"></script>
{/* <!-- popper --> */}
<script src="js/popper.min.js"></script>
{/* <!-- bootstrap 4.1 --> */}
<script src="js/bootstrap.min.js"></script>
{/* <!-- jQuery easing --> */}
<script src="js/jquery.easing.1.3.js"></script>
{/* <!-- Waypoints --> */}
<script src="js/jquery.waypoints.min.js"></script>
{/* <!-- Flexslider --> */}
<script src="js/jquery.flexslider-min.js"></script>
{/* <!-- Owl carousel --> */}
<script src="js/owl.carousel.min.js"></script>
{/* <!-- Magnific Popup --> */}
<script src="js/jquery.magnific-popup.min.js"></script>
<script src="js/magnific-popup-options.js"></script>
{/* <!-- Date Picker --> */}
<script src="js/bootstrap-datepicker.js"></script>
{/* <!-- Stellar Parallax --> */}
<script src="js/jquery.stellar.min.js"></script>
{/* <!-- Google Map --> */}
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCefOgb1ZWqYtj7raVSmN4PL2WkTrc-KyA&sensor=false"></script>
<script src="js/google_map.js"></script>
{/* <!-- Main --> */}
<script src="js/main.js"></script>

</body>
</div>
  )
}
