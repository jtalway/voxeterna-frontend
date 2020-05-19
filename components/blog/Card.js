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
        <Link href={`/blogs/${blog.slug}`}>
                <a>
          <img
            className="img img-fluid"
            style={{height: "auto", width: "100%", maxHeight: "400px"}}
            src={`${API}/blog/photo/${blog.slug}`}
            alt={blog.title}
            onError={i => i.target.src = `../../images/seoblog.jpg`}
          />
          </a>
              </Link>
        </section>
      </div>
      <div className="col-md-8">
        <div className="container">
          <div className="row">
            <h4 className="font-weight-bold display-4 pt-1 blogtitlelink">
              <Link href={`/blogs/${blog.slug}`}>
                <a>
                  {blog.title}
                </a>
              </Link>
            </h4>
          </div>
          <div className="text-left pb-2 sm-text">
            Published {moment(blog.updatedAt).fromNow()} by {" "}
            <Link href={`/profile/${blog.postedBy.username}`}>
              <a>{blog.postedBy.username}</a>
            </Link> {" "}
            <img 
              src={`${API}/user/photo/${blog.postedBy.username}`}
              height="24px"
              width="auto"
              style={{borderRadius: "50%"}}
            /> 
          </div>
          <div>
            <section>
              <div className="text-left">{renderHTML(blog.excerpt)}</div>
              <div className="float-left">
              <Link href={`/blogs/${blog.slug}`}>
                 <a className="btn btn-sm btn-outline-secondary ml-1 mb-3">Read more</a>
              </Link>
              <br/>
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
