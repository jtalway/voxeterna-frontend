import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import {useState, useEffect} from "react";
import {singleBlog, listRelated} from "../../actions/blog";
import renderHTML from "react-render-html";
import moment from "moment";
import {API, DOMAIN, APP_NAME, FB_APP_ID} from "../../config";
import SmallCard from "../../components/blog/SmallCard";
import DisqusThread from "../../components/DisqusThread";

const SingleBlog = ({blog, query}) => {

  const [related, setRelated] = useState([]);

  const loadRelated = () => {
    listRelated({blog}).then(data => {
      if(data.error) {
        console.log(data.error);
      } else {
        setRelated(data);
      }
    });
  };

  useEffect(() => {
    loadRelated();
  }, []);


  // HTML HEADER - SEO -
  const head = () => (
    <Head>
      <title>{blog.title} | {APP_NAME}</title>
      <meta name="description" content={blog.mdesc} />
      <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />
      <meta property="og:title" content={`${blog.title} | ${APP_NAME}`} />
      <meta property="og:description" content={blog.mdesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />
      <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
      <meta property="og:image:secure_url" content={`${API}/blog/photo/${blog.slug}`} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  const showBlogCategories = blog =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="btn btn-sm btn-info mr-1 ml-1 mt-3">
          {c.name}
        </a>
      </Link>
    ));

  const showBlogTags = blog =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-3">
          {t.name}
        </a>
      </Link>
    ));

  const showRelatedBlogs = () => {
    return related.map((blog, i) => (
      <div key={i} className="col-md-4">
        <article>
          <SmallCard blog={blog} />
        </article>
      </div>
    ));
  };

  const showComments = () => {
    return (
      <div>
        <DisqusThread 
          id={blog._id} 
          title={blog.title} 
          path={`/blog/${blog.slug}`} 
        />
      </div>
    );
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <article>

            <div className="container-fluid">
              <section>
                <div className="row" style={{marginTop: "-30px"}}>
                  <img
                    src={`${API}/blog/photo/${blog.slug}`}
                    alt={blog.title}
                    className="img img-fluid featured-image"
                    onError={i => i.target.src = `../../images/seoblog.jpg`}
                  />
                </div>
              </section>

              <section>
                <div className="container">
                  <h1 className="display-4 pb-1 pt-2 text-center font-weight-bold">
                    {blog.title}
                  </h1>
                  <p className="mt-2 text-center">
                    <img 
                    src={`${API}/user/photo/${blog.postedBy.username}`}
                    height="48px"
                    width="auto"
                    style={{borderRadius: "50%"}}
                    />
                    {" "} <span className="text-muted">by </span> {" "} 
                    <Link href={`/profile/${blog.postedBy.username}`}>
                        <a>
                          {blog.postedBy.username}
                        </a>
                    </Link> <span className="text-muted">on </span>{moment(blog.createdAt).format("MMM D, YYYY h:mma ")} 
                      | {" "}<span className="text-muted">updated </span>{moment(blog.updatedAt).format("MMM D, YYYY h:mma")}{" "}
                      | <a href="#related-blogs">Related Blogs</a> {" "}
                      | <a href="#comments">Comments</a>
                  </p>
                  <div className="pb-3 text-center">
                    {showBlogCategories(blog)}
                    {showBlogTags(blog)}
                    <br/>
                    <br/>
                  </div>
                </div>
              </section>
              
            </div>

            <div className="container">
              <section>
                <div className="col-md-12">
                  {renderHTML(blog.body)}
                </div>
              </section>
            </div>

            <div className="container mb-4">
              <div className="pb-3 text-center"><a href="#comments">Go to Comments</a></div>
              <h4 className="card-title bg-dark p-2 text-white text-center">
                <a name="related-blogs">Related Blogs</a>
              </h4>
              <div className="row">
                {showRelatedBlogs()}
              </div>
            </div>
            <div className="container mb-5">
              <h4 className="card-title bg-dark p-2 text-white text-center"><a name="comments">Comments</a></h4>
                <div className="row">
                  <div className="container pb-5">
                  {showComments()}
                  </div>
                </div>
            </div>
          

          </article>
        </main>
      </Layout>
    </React.Fragment>
  );
};

SingleBlog.getInitialProps = async ({query}) => {
  return singleBlog(query.slug).then(data => {
    if(data.error) {
      console.log(data.error);
    } else {
      return {blog: data, query};
    }
  });
};

export default SingleBlog;
