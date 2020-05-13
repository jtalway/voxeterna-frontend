import { useState } from 'react';
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import {APP_NAME} from "../config";
import {isAuth} from "../actions/auth";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import ".././node_modules/nprogress/nprogress.css";
import Search from "./blog/Search";

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sideNavToggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <React.Fragment>
      <Navbar color="dark" light expand="xs" fixed="top">
            <Dropdown group size="sm" isOpen={dropdownOpen} toggle={sideNavToggle}>
              <DropdownToggle caret color="outline-light">
                {APP_NAME}
                </DropdownToggle>
              <DropdownMenu className="bg-dark sn-lt">
                <DropdownItem className="bg-transparent"><Link href="/"><a style={{display: 'block'}}><i aria-hidden className="fas fa-home"></i> Home</a></Link></DropdownItem>
                <DropdownItem divider/>
                <DropdownItem className="bg-transparent"><Link href="/blogs"><a style={{display: 'block'}}>Blogs</a></Link></DropdownItem>
                <DropdownItem divider/>
                <DropdownItem className="bg-transparent"><Link href="/players"><a style={{display: 'block'}}>Players</a></Link></DropdownItem>
                <DropdownItem className="bg-transparent"><Link href="/game-masters"><a style={{display: 'block'}}>Game Masters</a></Link></DropdownItem>
                <DropdownItem className="bg-transparent"><Link href="/monsters"><a style={{display: 'block'}}>Monsters</a></Link></DropdownItem>
                <DropdownItem divider/>
                <DropdownItem className="bg-transparent"><Link href="/contact"><a style={{display: 'block'}}><i aria-hidden className="fas fa-envelope"></i> Contact</a></Link></DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <div className="ml-2">
                  <Search />
            </div>

          <Nav className="ml-auto" navbar>
            <React.Fragment>
             {!isAuth() && 
              <div className="pr-2 headnavlink" >
                <Link href="/signin" >
                  <a>
                    <i aria-hidden className="fas fa-feather-alt fa-lg"></i>
                  </a>
                </Link>
                </div>
              
            }

            {isAuth() && isAuth().role === 0 && (
              
              <div className="pr-2 headnavlink" >
                <Link href="/user/crud/blog" >
                  <a>
                    <i aria-hidden className="fas fa-feather-alt fa-lg"></i>
                  </a>
                </Link>
                </div>
              
            )}

            {isAuth() && isAuth().role === 1 && (
              
              <div className="pr-2 headnavlink" >
                <Link href="/admin/crud/blog" >
                  <a>
                    <i aria-hidden className="fas fa-feather-alt fa-lg"></i>
                  </a>
                </Link>
                </div>
              
            )}
            </React.Fragment>
            <React.Fragment>
            {!isAuth() && 
              <div className="pr-2 headnavlink" >
                <Link href="/signin" >
                  <a>
                    <i aria-hidden className="fas fa-user fa-lg"></i>
                  </a>
                </Link>
                </div>
              
            }

            {isAuth() && isAuth().role === 0 && (
              
              <div className="pr-2 headnavlink" >
                <Link href="/user" >
                  <a>
                    <i aria-hidden className="fas fa-user fa-lg"></i>
                  </a>
                </Link>
                </div>
              
            )}


            {isAuth() && isAuth().role === 1 && (
              
              <div className="pr-2 headnavlink" >
                <Link href="/admin" >
                  <a>
                    <i aria-hidden className="fas fa-user fa-lg"></i>
                  </a>
                </Link>
                </div>
              
            )}
            </React.Fragment>
          </Nav>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
