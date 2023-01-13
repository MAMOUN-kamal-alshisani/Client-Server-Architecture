import "./css/header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button className="headerBtn">Home</button>
          </li>
          <li>
            <button className="headerBtn">About</button>
          </li>
          <li>
            <button className="headerBtn">Content</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
