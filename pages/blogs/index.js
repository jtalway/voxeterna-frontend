import Head from "next/head";
import Link from "next/link";
import {withRouter} from "next/router";
import Layout from "../../components/Layout";
import {useState} from "react";
import {listBlogsWithCategoriesAndTags} from "../../actions/blog";
import Card from "../../components/blog/Card";
import {API, DOMAIN, APP_NAME, FB_APP_ID} from "../../config";

// props available from getInitialProps below
const Blogs = ({blogs, categories, tags, totalBlogs, blogsLimit, blogSkip, router}) => {
  // HTML HEADER - SEO -
  const head = () => (
    <Head>
      <title>New RPG Blogs | {APP_NAME}</title>
      <meta
        name="description"
        content="Explore original RPG blogs beyond your wildest imagination on fantasy role playing games – SRD OGL OSR d20 OSRIC BECMI 5e 3.5e 2e retro clone D&D"
      />
      <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
      <meta
        property="og:title"
        content={`New RPG Blogs | ${APP_NAME}`}
      />
      <meta
        property="og:description"
        content="Explore original RPG blogs beyond your wildest imagination on fantasy role playing games – SRD OGL OSR d20 OSRIC BECMI 5e 3.5e 2e retro clone D&D"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content={`${DOMAIN}/images/rpg-dice.jpg`} />
      <meta property="og:image:secure_url" content={`${DOMAIN}/images/rpg-dice.jpg`} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  // on first page load, load the blogs
  // default: skip 0 limit 2
  const [limit, setLimit] = useState(blogsLimit);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(totalBlogs);
  const [loadedBlogs, setLoadedBlogs] = useState([]);

  const loadMore = () => {
    let toSkip = skip + limit;
    listBlogsWithCategoriesAndTags(toSkip, limit).then(data => {
      if(data.error) {
        console.log(data.error);
      } else {
        setLoadedBlogs([...loadedBlogs, ...data.blogs]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  // LOAD MORE
  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-outline-primary btn-lg">
          Load more
        </button>
      )
    );
  };

  // SHOW ALL BLOGS
  const showAllBlogs = () => {
    return blogs.map((blog, i) => {
      // ()
      return (
        <article key={i}>
          <Card blog={blog} />
          <hr/>
        </article>
      );
    });
  };

  // SHOW ALL CATEGORIES
  const showAllCategories = () => {
    return categories.map((c, i) => (
      <Link href={`/categories/${c.slug}`} key={i}>
        <a className="btn btn-sm btn-info mr-1 ml-1 mt-1">
          {c.name}
        </a>
      </Link>
    ));
  };

  // SHOW ALL TAGS
  const showAllTags = () => {
    return tags.map((t, i) => (
      <Link href={`/tags/${t.slug}`} key={i}>
        <a className="btn btn-sm btn-outline-info mr-1 ml-1 mt-1">
          {t.name}
        </a>
      </Link>
    ));
  };

  // SHOW LOADED BLOGS
  const showLoadedBlogs = () => {
    return loadedBlogs.map((blog, i) => (
      <article key={i}>
        <Card blog={blog} />
      </article>
    ));
  };

  // MAIN
  return (
    <React.Fragment>
    {head()}
      <Layout>
        <main>
          <div className="container-fluid">
            <header>
              <div className="col-md-12 pt-1"
                style={{backgroundImage: 'url(' + '/images/blog-index.jpg' + ')',
                  height: "200px",
                  backgroundSize: 'cover', 
                  width: '100%',  
                  backgroundPosition: 'center' 
                }}>
                <h1 className="img-text text-shadow">
                  BLOGS | {APP_NAME} 
                </h1>
        
              </div>
              <section>
                <div className="pt-3 text-center">
                  <Link href="/players"><a className="btn btn-sm btn-outline-dark mr-1 ml-1">Players</a></Link>
                  <Link href="/game-masters"><a className="btn btn-sm btn-outline-dark mr-1 ml-1">Game Masters</a></Link>
                  <Link href="/monsters"><a className="btn btn-sm btn-outline-dark mr-1 ml-1">Monsters</a></Link>
                </div>
                <div className="pt-3 text-center">
                  {showAllCategories()}
                </div>
                <div className="pt-3 pb-3">
                  {showAllTags()}
                </div>
              </section>
            </header>
          </div>
          <div className="container-fluid">
            {showAllBlogs()}
          </div>
          <div className="container-fluid">
            {showLoadedBlogs()}
          </div>
          <div className="text-center pt-4 pb-5">
            {loadMoreButton()}
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

// lifecycle method that comes with Nextjs
// populate (render) page with blogs
// return the blog - limit 10
Blogs.getInitialProps = () => {
  let skip = 0;
  let limit = 10;
  return listBlogsWithCategoriesAndTags(skip, limit).then(data => {
    if(data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        totalBlogs: data.size,
        blogsLimit: limit,
        blogSkip: skip
      };
    }
  });
};

export default withRouter(Blogs);
