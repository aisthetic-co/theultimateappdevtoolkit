import { strapiUrl } from "@/strapi/lib/utils";
import Head from "next/head";

type PageMetaDataProps = {
  title?: string;
  description?: string;
  ogImage?: {
    url: string;
  };
  metadataBase?: string;
};

export default function PageMetaData(props: PageMetaDataProps) {
  const { title, description, ogImage, metadataBase } = props;

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {metadataBase && <link rel="canonical" href={metadataBase} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {ogImage?.url && (
        <meta property="og:image" content={strapiUrl(ogImage.url)} />
      )}
    </Head>
  );
}
