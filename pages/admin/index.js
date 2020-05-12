import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";
import {signout, isAuth} from "../../actions/auth";
import Router from "next/router";
import {NavLink} from "reactstrap";


const AdminIndex = () => {
  const username = isAuth() && isAuth().username;
  return (
    <Layout>
      <Admin>
        <div className="container-fluid pb-5">
          <div className="row">
            <div className="col-md-12 pt-1"
                style={{backgroundImage: 'url(' + '/images/dashboard-admin.jpg' + ')',
                  height: "200px",
                  backgroundSize: 'cover', 
                  width: '100%',  
                  backgroundPosition: 'center' 
                }}>
                <h1 className="img-text text-shadow">
                  ADMIN DASHBOARD
                </h1>
        
              </div>

            <div className="col-md-4 pt-3">
              <ul className="list-group">
                <li className="list-group-item">
                  <i aria-hidden className="fas fa-feather-alt"></i> Blog
                </li>
                <li className="list-group-item">
                  <Link href="/admin/crud/category-tag">
                    <a>Create Category</a>
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link href="/admin/crud/category-tag">
                    <a>Create Tag</a>
                  </Link>
                </li>
                <li className="list-group-item">
                  <a href="/admin/crud/blog">Create Blog</a>
                </li>
                <li className="list-group-item">
                  <Link href="/admin/crud/blogs">
                    <a>Update/Delete Blog</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4 pt-3">
              <ul className="list-group">
                <li className="list-group-item">
                  <i aria-hidden className="fas fa-user"></i> User
                </li>
                <li className="list-group-item">
                  <a href={`/profile/${username}`}>View My Profile</a>
                </li>
                <li className="list-group-item">
                  <a href="/user/update">Update My Profile</a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 pt-3">
              {isAuth() && <React.Fragment>

                    <NavLink
                      style={{cursor: "pointer", color: "red"}}
                      onClick={() => signout(() => Router.replace(`/signin`))}>
                      <i aria-hidden className="fas fa-user"></i> Signout
                    </NavLink>
                </React.Fragment>
              }
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default AdminIndex;
