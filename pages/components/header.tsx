import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar, Nav } from "rsuite";

import styles from "../../styles/Home.module.css";
import "rsuite/dist/rsuite.min.css";

const Header = () => {
  const router = useRouter();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <Navbar>
      <Navbar.Brand
        onClick={() => {
          handleClick("/");
        }}
      >
        Refuse
      </Navbar.Brand>
      <Nav>
        <Nav.Item
          onClick={() => {
            handleClick("/poetry");
          }}
        >
          Poetry
        </Nav.Item>
        <Nav.Item
          onClick={() => {
            handleClick("/blog");
          }}
        >
          Blog
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Header;
