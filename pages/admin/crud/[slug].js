import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogUpdate from '../../../components/crud/BlogUpdate';
import Link from 'next/link';

const Blog = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-1"
                            style={{backgroundImage: 'url(' + '/images/blog-update.jpg' + ')',
                              height: "200px",
                              backgroundSize: 'cover', 
                              width: '100%',  
                              backgroundPosition: 'center' 
                            }}>
                            <h1 className="img-text text-shadow">
                              UPDATE BLOG
                            </h1>
                        </div>
                        <div className="col-md-12 pt-3">
                            <BlogUpdate />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default Blog;
