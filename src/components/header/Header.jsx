import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/Cart-icon";
import "./header.styles.scss";
import "./header.css";
import ProfileIcon from "../Profile/ProfileIcon";
import { logout } from "../../actions/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import customScript from "./header.js"
import IconImg from "../../assets/chandu.jpg";
import axios from "axios";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useHistory();

  const handleLogout = () => {
    // Dispatch the logout action to clear the persisted data
    dispatch(logout());
    // setIsAuthenticated(false);
    navigate.push("/");
  };
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.trim() !== "" && query.length > 3) {
      axios
        .get(`https://dummyjson.com/products/search?q=${query}`)
        .then((response) => {
          setResults(response.data.products);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      setResults([]);
    }
  }, [query]);
  console.log(results);

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      setSelectedItemIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (event.key === "ArrowDown") {
      setSelectedItemIndex((prevIndex) =>
        Math.min(prevIndex + 1, results.length - 1)
      );
    } else if (event.key === "Enter") {
      {
        results.map((post, index) => navigate.push(`/details/${post.id}`));
      }
    }
  };

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = "https://dummyjson.com/products/categories"; // Replace with your actual API URL

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  //   console.log(data);
  return (
    <>
      <nav className="nav-menu container">
        <div className="logo">
          <Link to="/">
            <img className="chandu" src={IconImg} alt="shopping-cart-icon" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>

        <ul>
          <li>
            <div className="dropdown">
              <li className="dropbtn" onMouseOver={() => setOpen(true)}>
                Categories
              </li>
              {open && (
                <div className="dropdown-content">
                  <div className="row">
                    {data.map((item, index) => (
                      <>
                        <div className="column">
                          <Link
                            onClick={() => setOpen(!open)}
                            to={`/products/${item}`}
                          >
                            {item}
                          </Link>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </li>
        </ul>
        <div className="dropdown" tabIndex={0} onKeyDown={handleKeyDown}>
          <input
            className="input2"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for products..."
            onMouseEnter={() => setOpen(true)}
          />
          {open && (
            <div class="dropdown-content2">
              {results.map((post, index) => (
                <>
                  <ul
                    className="desktop-group"
                    key={index}
                    style={{
                      background:
                        selectedItemIndex === index ? "white" : "gray",
                    }}
                  >
                    <li
                      onClick={() => navigate.push(`/details/${post.id}`)}
                      key={post.id}
                    >
                      {post.title}
                    </li>
                  </ul>
                </>
              ))}
            </div>
          )}
        </div>
        <CartIcon />
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <div>
          <div className="dropdown1">
            <li className="dropbtn1">
              <ProfileIcon />
            </li>
            <div className="dropdown-content1">
              <Link to="/profile">Profile</Link>
              <Link to="/about">About</Link>
              <Link to="/Services">Services</Link>
              <Link to="/Contact">Contact</Link>
              <Link onClick={handleLogout}>Logout</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default withRouter(Header);
