import About from "./About";
import PrivacyPolicy from "./legal/PrivacyPolicy";
import OpenGameLicense from "./legal/OpenGameLicense";
import Link from "next/link";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import {APP_NAME, MAILCHIMP_URL} from "../config";


const Footer = () => {
	
	const url = "//github.us20.list-manage.com/subscribe/post?" + MAILCHIMP_URL;
	const SimpleForm = () => <MailchimpSubscribe url={url}/>

	
	return (
		<React.Fragment>
			<section className="site-footer">
				<div className="container">
			        <div className="row">
			          <div className="col-sm-12 col-md-6">
			            <h6>About</h6>
			            <p className="text-justify">
			            	<Link href="/"><a>{APP_NAME}</a></Link> is a collection of fantasy
			            	role-playing game blogs containing information useful to playing 
			            	and running fantasy role-playing games.
			            	It runs on a multi-user blogging web application that focuses on 
			            	search engine optimization to increase website traffic.
						</p>
			            <React.Fragment>
			            <div className="mt-3 text-center">
			            Subscribe to {APP_NAME} newsletter!
			            	<SimpleForm/>
						</div>
						</React.Fragment>
			          </div>

			          <div className="col-xs-6 col-md-3 text-center">
			            <h6>Categories</h6>
			            <ul className="footer-links">
			              <li><Link href="/categories/characters"><a>Characters</a></Link></li>
			              <li><Link href="/categories/playing-the-game"><a>Playing the Game</a></Link></li>
			              <li><Link href="/categories/running-the-game"><a>Running the Game</a></Link></li>
			              <li><Link href="/categories/campaigns"><a>Campaigns</a></Link></li>
			              <li><Link href="/categories/adventures"><a>Adventures</a></Link></li>
			              <li><Link href="/categories/treasure"><a>Treasure</a></Link></li>
			              <li><Link href="/categories/monsters"><a>Monsters</a></Link></li>
			            </ul>
			          </div>

			          <div className="col-xs-6 col-md-3 text-center">
			            <h6>Quick Links</h6>
			            <ul className="footer-links">
			              <li><About/></li>
			              <li><Link href="/contact"><a>Contact</a></Link></li>
			              <li><PrivacyPolicy/></li>
			              <li><a 
			              	href="https://voxeterna.com/sitemap.xml" 
			              	target="_blank" 
							rel="noopener">Sitemap</a></li>
			              <li><OpenGameLicense/></li>
			            </ul>
			          </div>
			        </div>
		        <hr/>
		      </div>
		      <div className="container">
		        <div className="row">
		          <div className="col-md-8 col-sm-6 col-xs-12">
		            <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
		         		<a 
		         			href="https://jtalway.github.io" 
							aria-label="My Website" 
							target="_blank" 
							rel="noopener"> Jason Alway
						</a>.
		            </p>
		          </div>

		          <div className="col-md-4 col-sm-6 col-xs-12">
		            <ul className="social-icons">
		              <li><a 
		              	className="facebook" 
		              	href="https://www.facebook.com/jason.alway.1/"
		              	target="_blank" 
						rel="noopener"><i aria-hidden className="fa fa-facebook"></i></a></li>
		              <li><a 
		              	className="twitter" 
		              	href="https://twitter.com/jtalway" 
		              	target="_blank" 
						rel="noopener"><i aria-hidden className="fa fa-twitter"></i></a></li>
		              <li><a 
		              	className="dribbble" 
		              	href="https://www.instagram.com/jtalway" 
		              	target="_blank" 
						rel="noopener"><i aria-hidden className="fa fa-instagram"></i></a></li>
		              <li><a 
		              	className="linkedin" 
		              	href="https://www.linkedin.com/in/jtalway" 
		              	target="_blank" 
						rel="noopener"><i aria-hidden className="fa fa-linkedin"></i></a></li>   
		            </ul>
		          </div>
		        </div>
		      </div>
			</section>
		</React.Fragment>
	);
};

export default Footer;
