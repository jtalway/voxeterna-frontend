import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import {singleCategory} from "../../actions/category";
import renderHTML from "react-render-html";
import moment from "moment";
import Card from "../../components/blog/Card";
import {API, DOMAIN, APP_NAME, FB_APP_ID} from "../../config";

const Category = ({category, blogs, query}) => {
  // HTML HEADER - SEO -
  const head = () => (
    <Head>
      <title>{category.name} | {APP_NAME}</title>
      <meta name="description" content={`The best way to learn about ${category.name} – tips tricks planning advice how-to tutorials guide`} />
      <link rel="canonical" href={`${DOMAIN}/categories/${query.slug}`} />
      <meta property="og:title" content={`${category.name} | ${APP_NAME}`} />
      <meta property="og:description" content={`The best way to learn about ${category.name} – tips tricks planning advice how-to tutorials guide`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />
      <meta property="og:image" content={`${DOMAIN}/images/seoblog.jpg`} />
      <meta property="og:image:secure_url" content={`${DOMAIN}/images/seoblog.jpg`} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <div className="container-fluid text-center">
            <header>
              <div className="col-md-12 pt-3">
                <h1 className="bg-info p-2 text-white font-weight-bold text-center">
                  {category.name}
                </h1>
                {blogs.map((b, i) => (
                  <div key={i}>
                    <Card blog={b} />
                    <hr />
                  </div>
                ))}
              </div>
            </header>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

Category.getInitialProps = ({query}) => {
  return singleCategory(query.slug).then(data => {
    if(data.error) {
      console.log(data.error);
    } else {
      return {category: data.category, blogs: data.blogs, query};
    }
  });
};

export default Category;
