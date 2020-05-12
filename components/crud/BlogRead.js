import Link from "next/link";
import {useState, useEffect} from "react";
import Router from "next/router";
import {getCookie, isAuth} from "../../actions/auth";
import {list, removeBlog} from "../../actions/blog";
import moment from "moment";

const BlogRead = ({username}) => {
  const [blogs, setBlogs] = useState([]);
  const [message, setMessage] = useState("");
  const token = getCookie("token");

  // when component mounts list all the blogs
  useEffect(() => {
    loadBlogs();
  }, []);

  // LOAD BLOGS
  const loadBlogs = () => {
    // make a request to list all the blogs
    list(username).then(data => {
      if(data.error) {
        console.log(data.error);
      } else {
        setBlogs(data);
      }
    });
  };

  const deleteBlog = slug => {
    removeBlog(slug, token).then(data => {
      if(data.error) {
        console.log(data.error);
      } else {
        setMessage(data.message);
        loadBlogs();
      }
    });
  };

  const deleteConfirm = slug => {
    let answer = window.confirm("Are you sure you want to delete your blog?");
    if(answer) {
      deleteBlog(slug);
    }
  };

  const showUpdateButton = blog => {
    if(isAuth() && isAuth().role === 0) {
      return (
        <Link href={`/user/crud/${blog.slug}`}>
          <a className="mr-3 btn btn-sm btn-outline-warning">Update</a>
        </Link>
      );
    } else if(isAuth() && isAuth().role ===1) {
      return (
        <Link href={`/admin/crud/${blog.slug}`}>
          <a className="mr-3 btn btn-sm btn-outline-warning">Update</a>
        </Link>
      );
    }
  };

  // SHOW ALL BLOGS
  const showAllBlogs = () => {
    return blogs.map((blog, i) => {
      return (
        <div key={i} className="pb-3">
          <div className="row">
            <div className="col-md-9">
              <h5>{blog.title}</h5>
              <section className="sm-text">{blog.mdesc}...</section>
              <p className="mark sm-text">
                Written by {blog.postedBy.name} | Published {moment(blog.updatedAt).fromNow()}
              </p>
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              {showUpdateButton(blog)}
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteConfirm(blog.slug)}>
                Delete
              </button>
            </div>
          </div>   
          <hr/>       
        </div>
      );
    });
  };

  return (
    <React.Fragment>
        <div className="row">
          <div className="col-md-12">
            {message && <div className="alert alert-warning">{message}</div>}
            {showAllBlogs()}
          </div>
        </div>
    </React.Fragment>
  );
};

export default BlogRead;
