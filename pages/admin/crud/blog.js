import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import BlogCreate from "../../../components/crud/BlogCreate";
import Link from "next/link";
import dynamic from 'next/dynamic';

const Blog = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-1"
                style={{backgroundImage: 'url(' + '/images/blog-create.jpg' + ')',
                  height: "200px",
                  backgroundSize: 'cover', 
                  width: '100%',  
                  backgroundPosition: 'center' 
                }}>
                <h1 className="img-text text-shadow">
                  CREATE A NEW BLOG
                </h1>
            </div>
            <div className="col-md-12 pt-3">
              <BlogCreate />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Blog;
