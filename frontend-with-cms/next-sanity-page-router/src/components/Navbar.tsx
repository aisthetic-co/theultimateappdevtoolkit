import { NavigationQueryResult } from "@/sanity/types";

const NavBar = (props: NavigationQueryResult) => {
  console.log("Navbar Data", props);
  return <div>NavBar</div>;
};

export default NavBar;
