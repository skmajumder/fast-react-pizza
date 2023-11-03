import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>Fast React Pizza</Link>
      <p>Pizza</p>
    </header>
  );
};

export default Header;
