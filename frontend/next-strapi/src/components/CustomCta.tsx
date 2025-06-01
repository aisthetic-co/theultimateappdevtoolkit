import Link from "next/link";
import { getReferenceLink } from "@/strapi/lib/utils";
import { CustomCtaProps } from "@/app.types";

type Props = CustomCtaProps;

export default function CustomCta(props: Props) {
  const { linkType, url } = getReferenceLink(props.ctaLink);

  if (!url) {
    return null;
  }

  return (
    <Link
      className={`block px-4 py-3`}
      href={url}
      target={linkType === "external" ? "_blank" : "_self"}
    >
      {props.ctaLabel}
    </Link>
  );
}
