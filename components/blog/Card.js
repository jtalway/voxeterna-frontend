import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";
import {API} from "../../config";


const Card = ({blog}) => {

  const showBlogCategories = blog =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="btn btn-sm btn-info mr-1 ml-1 mt-2">
          {c.name}
        </a>
      </Link>
    ));

  const showBlogTags = blog =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-2">
          {t.name}
        </a>
      </Link>
    ));

  return (
    <div className="row mt-3">
      <div className="col-md-4">
        <section>
          <img
            className="img img-fluid"
            style={{height: "auto", width: "100%"}}
            src={`${API}/blog/photo/${blog.slug}`}
            alt={blog.title}
            onError={i => i.target.src = `../../images/seoblog.jpg`}
          />
        </section>
      </div>
      <div className="col-md-8">
        <div className="container">
          <div className="row">
            <Link href={`/blogs/${blog.slug}`}>
              <a>
                <h4 className="font-weight-bold pt-1">
                  {blog.title}
                </h4>
              </a>
            </Link>
          </div>
          <div className="text-left pb-2 sm-text">
            Published {moment(blog.updatedAt).fromNow()} by {" "}
            <Link href={`/profile/${blog.postedBy.username}`}>
              <a>{blog.postedBy.username}</a>
            </Link> 
          </div>
          
          <div>
            <section>
            
              <div className="pb-1 text-left">{renderHTML(blog.excerpt)}...</div>
              <div className="float-left">
              {showBlogCategories(blog)}
              {showBlogTags(blog)}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Card;
