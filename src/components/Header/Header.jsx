import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { LogoutBtn, Container, Logo } from '../index';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo width="60px" />
            <span className="text-xl font-bold ml-2 text-blue-600">BLOGBOARD</span>
          </Link>

          {/* Navigation */}
          <ul className="flex items-center space-x-4">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-5 py-2 text-sm font-medium text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {/* Logout Button */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
