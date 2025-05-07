import { PortableTextBlock } from "next-sanity";
import CustomRichText from "./CustomRichText";
import { CustomCtaProps } from "@/app.types";
import CustomCta from "./CustomCta";

type Props = {
  title: string;
  description: PortableTextBlock[];
  cta: CustomCtaProps;
};

const TitleAndDescription = (props: Props) => {
  return (
    <section className="text-center space-y-2 mx-auto">
      {props.title && <h2 className="text-lg">{props.title}</h2>}
      {props.description && <CustomRichText value={props.description} />}
      {props.cta && (
        <div className="mx-auto w-fit">
          <CustomCta
            ctaLabel={props.cta.ctaLabel}
            ctaLink={props.cta.ctaLink}
            ctaColour={props.cta.ctaColour}
          />
        </div>
      )}
    </section>
  );
};

export default TitleAndDescription;
