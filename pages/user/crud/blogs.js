import Layout from "../../../components/Layout";
import Private from "../../../components/auth/Private";
import BlogRead from "../../../components/crud/BlogRead";
import Link from "next/link";
import {isAuth} from "../../../actions/auth";

const Blog = () => {
const username = isAuth() && isAuth().username;
  return (
    <Layout>
      <Private>
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
              <BlogRead username={username} />
            </div>
          </div>
        </div>
      </Private>
    </Layout>
  );
};

export default Blog;