import { FooterQueryResult } from "@/strapi/types";

type NavBarProps = FooterQueryResult;

const NavBar = (props: NavBarProps) => {
  console.log("Navbar Data", props);
  return (
    <header className="text-center font-montserrat text-6xl">NavBar</header>
  );
};

export default NavBar;
