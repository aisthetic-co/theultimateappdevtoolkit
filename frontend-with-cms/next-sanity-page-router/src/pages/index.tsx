import PageContent from "@/components/PageContent";
import {
  footerQuery,
  homePageQuery,
  navigationQuery,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
  FooterQueryResult,
  HomePageQueryResult,
  NavigationQueryResult,
} from "@/sanity/types";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

type PageProps = {
  pageData: HomePageQueryResult;
  navData: NavigationQueryResult;
  footerData: FooterQueryResult;
  draftMode: boolean;
};

export default function Home(props: PageProps) {
  const { pageData, navData, footerData } = props;

  return (
    <>
      {navData && <NavBar {...navData} />}
      {pageData?.content && <PageContent content={pageData.content} />}
      {footerData && <Footer {...footerData} />}
    </>
  );
}

export const getStaticProps = async ({ draftMode = false }) => {
  const [pageData, navData, footerData] = await Promise.all([
    await sanityFetch({
      query: homePageQuery,
      perspective: draftMode ? "previewDrafts" : " published",
    }),
    await sanityFetch({
      query: navigationQuery,
      perspective: draftMode ? "previewDrafts" : " published",
    }),
    await sanityFetch({
      query: footerQuery,
      perspective: draftMode ? "previewDrafts" : " published",
    }),
  ]);

  return {
    props: {
      pageData,
      navData,
      footerData,
      draftMode,
    },
  };
};
