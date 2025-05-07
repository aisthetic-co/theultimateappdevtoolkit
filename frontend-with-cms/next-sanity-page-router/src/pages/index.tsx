import PageContent from "@/components/PageContent";
import { homePageQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { HomePageQueryResult } from "@/sanity/types";

type PageProps = {
  pageData: HomePageQueryResult;
  draftMode: boolean;
};

export default function Home(props: PageProps) {
  const { pageData } = props;

  return <>{pageData?.content && <PageContent content={pageData.content} />}</>;
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
