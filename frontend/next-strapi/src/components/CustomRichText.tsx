import { CustomRichTextProps } from "@/app.types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

function CustomRichText(props: CustomRichTextProps) {
  const { content } = props;

  return <BlocksRenderer content={content} />;
}

export default CustomRichText;
