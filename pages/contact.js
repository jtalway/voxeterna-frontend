import Layout from "../components/Layout";
import Link from "next/link";
import ContactForm from "../components/form/ContactForm";

const Contact = () => {
  return (
    <Layout>
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-8 offset-md-2">
					<div className="col-md-12 pt-1"
		              	style={{backgroundImage: 'url(' + '/images/contact.jpg' + ')',
		              		height: "200px",
		              		backgroundSize: 'cover', 
		              		width: '100%',  
		              		backgroundPosition: 'center' 
		               	}}>
		               	<h1 className="img-text text-shadow">
		                  CONTACT
		                </h1>
						
		              </div>
					<ContactForm />
				</div>
			</div>
		</div>
    </Layout>
  );
};

export default Contact;