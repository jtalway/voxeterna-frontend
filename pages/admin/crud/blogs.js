import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import BlogRead from "../../../components/crud/BlogRead";
import Link from "next/link";

const Blog = () => {
  return (
    <Layout>
      <Admin>
        <div className="container">
          <div className="row">
            <div className="col-md-12 pt-1"
                style={{backgroundImage: 'url(' + '/images/blog-manage.jpg' + ')',
                  height: "200px",
                  backgroundSize: 'cover', 
                  width: '100%',  
                  backgroundPosition: 'center' 
                }}>
                <h1 className="img-text text-shadow">
                  MANAGE BLOGS
                </h1>
            </div>
            <div className="col-md-12 pt-3">
              <BlogRead />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Blog;
