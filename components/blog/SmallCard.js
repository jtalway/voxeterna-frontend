import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";
import {API} from "../../config";


const SmallCard = ({blog}) => {
  return (
    <div className="card">
      <section>
        <Link href={`/blogs/${blog.slug}`}>
          <a>
            <img
              className="img img-fluid"
              style={{height: "200px", width: "100%"}}
              src={`${API}/blog/photo/${blog.slug}`}
              alt={blog.title}
              onError={i => i.target.src = `../../images/seoblog.jpg`}
            />
          </a>
        </Link>
      </section>

      <div className="card-body">
        <section>
          {JSON.stringify(blog.photo)}
          <Link href={`/blogs/${blog.slug}`}>
            <a><h5 className="card-title">{blog.title}</h5></a>
          </Link>
          <div className="card-text">{renderHTML(blog.excerpt)}</div>
          <Link href={`/blogs/${blog.slug}`}>
            <a className="btn btn-sm btn-outline-primary">Read more</a>
          </Link>
        </section>
      </div>

      <div className="card-body">
        <div>
          Posted {moment(blog.updatedAt).fromNow()} by{" "}
          <Link href={`/profile/${blog.postedBy.username}`}>
            <a className="float-right">
              {blog.postedBy.username}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
