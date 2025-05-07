import { PortableTextBlock } from "next-sanity";
import CustomPortableText from "./CustomPortableText";

const PageContent = ({ content }: { content: unknown }) => {
  return <CustomPortableText value={content as PortableTextBlock[]} />;
};

export default PageContent;
