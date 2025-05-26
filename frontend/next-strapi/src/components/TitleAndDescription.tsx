import CustomRichText from "./CustomRichText";
import { CustomCtaProps } from "@/app.types";
import CustomCta from "./CustomCta";
import { BlocksContent } from "@strapi/blocks-react-renderer";

type Props = {
  title: BlocksContent;
  description: BlocksContent;
  cta: CustomCtaProps;
};

const TitleAndDescription = (props: Props) => {
  return (
    <section className="py-10 space-y-8">
      {props.title && (
        <div className="font-montserrat text-center text-4xl">
          <CustomRichText content={props.title} />
        </div>
      )}
      {props.description && (
        <div className="font-montserrat text-center text-lg">
          <CustomRichText content={props.description} />
        </div>
      )}
      {props.cta && (
        <div>
          <CustomCta {...props.cta} />
        </div>
      )}
    </section>
  );
};

export default TitleAndDescription;
