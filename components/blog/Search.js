import Link from "next/link";
import renderHTML from "react-render-html";
import {useState, useEffect} from "react";
import {listSearch} from "../../actions/blog";

const Search = () => {
  const [values, setValues] = useState({
    search: undefined,
    results: [],
    searched: false,
    message: ""
  });

  const {search, results, searched, message} = values;

  const searchSubmit = e => {
  	e.preventDefault();
  	listSearch({search}).then(data => {
  		setValues({...values, results: data, searched: true, message: `${data.length} blogs found.`});
  	})
  };

  const handleChange = e => {
  	setValues({...values, search: e.target.value, searched: false, results: [] });
  };

  const searchedBlogs = (results = []) => {
  	return (
  		<div className="bg-white ml-3">
			{message && <p className="pt-2 text-muted font-italic">{message}</p>}

			{results.map((blog,i) => {
				return (
				<div key={i} className="pb-3">
					<Link href={`/blogs/${blog.slug}`}>
						<a className="text-primary">{blog.title}</a>
					</Link>
				</div>
				);
			})}
  		</div>
  		);
  };

  const searchForm = () => (
	<form onSubmit={searchSubmit}>
		<div className="row">
			<div style={{width: "100%"}}>
				<input 
					type="search" 
					className="form-control srch" 
					placeholder="Search..." 
					onChange={handleChange}
				/>
			</div>
		</div>
	</form>
  );

  return (
  		<div className="container-fluid">
  			<div className="search">
				{searchForm()}
  			</div>
  			{searched && <div id="livesearch">{searchedBlogs(results)}</div>}
  		</div>
  );
};

export default Search;

