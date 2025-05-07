import { NavigationQueryResult } from "@/sanity/types";

const NavBar = (props: NavigationQueryResult) => {
  console.log("test", props);
  return <div>NavBar</div>;
};

export default NavBar;
