import Link from "next/link";
import {useState, useEffect} from "react";
import Router from "next/router";
import dynamic from "next/dynamic";
import {withRouter} from "next/router";
import {getCookie, isAuth} from "../../actions/auth";
import {getCategories} from "../../actions/category";
import {getTags} from "../../actions/tag";
import {createBlog} from "../../actions/blog";
const ReactQuill = dynamic(() => import("react-quill"), {ssr: false});
import "../../node_modules/react-quill/dist/quill.snow.css";
import {QuillModules, QuillFormats} from "../../helpers/quill";


const CreateBlog = ({router}) => {
  
  const blogFromLS = () => {
    if(typeof window === "undefined") {
      return false;
    }
    // if localstorage has blog return it, otherwise do not :)
    if(localStorage.getItem("blog")) {
      return JSON.parse(localStorage.getItem("blog"));
    } else {
      return false;
    }
  };

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const [checked, setChecked] = useState([]); // Categories
  const [checkedTag, setCheckedTag] = useState([]); // Tags

  // body default state is what is in localstorage (if anything)
  const [body, setBody] = useState(blogFromLS);
  const [values, setValues] = useState({
    error: "",
    sizeError: "",
    success: "",
    formData: "",
    title: "",
    hidePublishButton: false,
    loading: false
  });

  // destructure
  const {
    error, 
    sizeError, 
    success, 
    formData, 
    title, 
    hidePublishButton, 
    loading
  } = values;
  const token = getCookie("token");

  useEffect(() => {
    setValues({...values, formData: new FormData()});
    initCategories();
    initTags();
  }, [router]);

  const initCategories = () => {
    getCategories().then(data => {
      if(data.error) {
        setValues({...values, error: data.error});
      } else {
        setCategories(data);
      }
    });
  };

  const initTags = () => {
    getTags().then(data => {
      if(data.error) {
        setValues({...values, error: data.error});
      } else {
        setTags(data);
      }
    });
  };

  const publishBlog = (e) => {
    setValues({...values, loading: true});
    e.preventDefault();
    // console.log("Ready to publish blog");
    createBlog(formData, token).then(data => {
      if(data.error) {
        setValues({...values, error: data.error, loading: false});
      } else {
        setValues({
          ...values, 
          loading: false,
          title: "", 
          error: "", 
          success: `A new blog titled "${data.title}" is created.`});
        setBody("");
        setCategories([]);
        setTags([]);
      }
    });
  };

  const handleChange = name => e => {
    // console.log(e.target.value);
    // grab value: title, photo, etc
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    // populate form data with values
    formData.set(name, value);
    // update the state
    setValues({...values, [name]: value, formData, error: ""});
  };

  const handleBody = e => {
    // console.log(e);
    // populate body
    setBody(e);
    // populate formData
    formData.set("body", e);
    // populate in localstorage so not lost on page refresh
    if(typeof window !== "undefined") {
      localStorage.setItem("blog", JSON.stringify(e));
    }
  };

  const handleToggle = (c) => () => {
    setValues({...values, error: ""});

    // return the first index or -1
    const clickedCategory = checked.indexOf(c);
    const all = [...checked];
    // if clicked category doesn't all ready exist in the state
    // push to all
    if(clickedCategory === -1) {
      all.push(c)
    } else {
      all.splice(clickedCategory, 1);
    }
    console.log(all);
    setChecked(all);
    formData.set("categories", all);
  };

  const handleToggleTags = (t) => () => {
    setValues({...values, error: ""});

    // return the first index or -1
    const clickedTag = checked.indexOf(t);
    const all = [...checkedTag];
    // if clicked tag doesn't all ready exist in the state
    // push to all
    if(clickedTag === -1) {
      all.push(t)
    } else {
      all.splice(clickedTag, 1);
    }
    console.log(all);
    setCheckedTag(all);
    formData.set("tags", all);
  };

  const showCategories = () => {
    return (
      categories && categories.map((c, i) => (
        <li key={i} className="list-unstyled">
          <input onChange={handleToggle(c._id)} type="checkbox" className="mr-2"/>
          <label className="form-check-label">{c.name}</label>
        </li>
      ))
    );
  };

  const showTags = () => {
    return (
      tags && tags.map((t, i) => (
        <li key={i} className="list-unstyled vert-sm">
          <input onChange={handleToggleTags(t._id)} type="checkbox" className="mr-2 vert-sm"/>
          <label className="form-check-label">{t.name}</label>
        </li>
      ))
    );
  };

  const showError = () => (
    <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
      {error}
    </div>
  );

  const showSuccess = () => (
    <div className="alert alert-success" style={{display: success ? "" : "none"}}>
      {success}
    </div>
  );

  const showLoading = () => (
    <div
      className="alert alert-info"
      style={{ display: loading ? "" : "none" }}
    >
      Loading...
    </div>
  );

  


  const createBlogForm = () => {
    return (
      <form onSubmit={publishBlog}>
        <div className="form-group">
          <label className="text-muted">Title</label>
          <input 
            type="text" 
            className="form-control" 
            value={title} 
            onChange={handleChange("title")}
          />
        </div>

        <div className="form-group">
          <ReactQuill
            modules={QuillModules}
            formats={QuillFormats}
            value={body}
            placeholder="Write something amazing..."
            onChange={handleBody}
          />

        </div>
        <div>
          <button type="submit" className="btn btn-primary btn-block">Publish</button>
        </div>
      </form>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          {createBlogForm()}
          <div className="pt-3">
            {showError()}
            {showSuccess()}
            {showLoading()}
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <div className="form-group pb-2">
              <h5>Featured Image</h5>
              <hr className="mt-1 mb-1"/>
              <small className="text-muted">Max size: 2mb</small>
              <br />
              <label className="btn btn-outline-primary btn-sm btn-block">Upload featured image
                <input 
                  onChange={handleChange("photo")} 
                  type="file" 
                  accept="image/*" 
                  hidden
                />
              </label>
            </div>
          </div>
          <div>
            <h6>Categories</h6>
            <hr className="mt-1 mb-1"/>
            <ul style={{maxHeight: "200px", overflowY: "auto"}}>{showCategories()}</ul>
          </div>
          <div>
            <h6>Tags</h6>
            <hr className="mt-1 mb-1"/>
            <ul style={{maxHeight: "500px", overflowY: "scroll"}}>{showTags()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};


export default withRouter(CreateBlog);
