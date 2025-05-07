import { SanityDocument } from "next-sanity";
import PageContent from "@/components/PageContent";
import { homePageQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";

type PageProps = {
  pageData: SanityDocument;
  draftMode: boolean;
};

export default function Home(props: PageProps) {
  return (
    <>
      <PageContent content={props.pageData} />
    </>
  );
}

export const getStaticProps = async ({ draftMode = false }) => {
  const pageData = await sanityFetch({
    query: homePageQuery,
    perspective: draftMode ? "previewDrafts" : " published",
  });

  return {
    props: {
      pageData,
      draftMode,
    },
  };
};
