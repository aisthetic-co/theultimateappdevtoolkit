import { FooterQueryResult } from "@/strapi/types";

type FooterProps = FooterQueryResult;

const Footer = (props: FooterProps) => {
  console.log("Footer Data", props);

  return (
    <footer className="text-center font-montserrat text-6xl">Footer</footer>
  );
};

export default Footer;
