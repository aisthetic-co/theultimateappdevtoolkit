import Layout from "@/components/Layout";
import PageMetaData from "@/components/PageMetaData";
import PageContent from "@/components/PageContent";

import { GetStaticProps } from "next";
import strapiFetch from "@/strapi/lib/fetch";
import {
  footerQuery,
  navbarQuery,
  pageContentQuery,
} from "@/strapi/lib/queries";
import {
  FooterQueryResult,
  NavbarQueryResult,
  PageQueryResult,
} from "@/strapi/types";

type PageProps = {
  pageData: PageQueryResult;
  navData: NavbarQueryResult;
  footerData: FooterQueryResult;
  draftMode: boolean;
};

export default function Home(props: PageProps) {
  const { pageData, navData, footerData } = props;
  console.log("pageData", pageData);

  return (
    <Layout navData={navData} footerData={footerData}>
      <PageMetaData {...pageData?.seo} />
      {pageData?.dynamic_zone && (
        <PageContent content={pageData.dynamic_zone} />
      )}
    </Layout>
  );
}

export const getStaticProps = (async ({ draftMode = false }) => {
  const [pageData, navData, footerData] = await Promise.all([
    strapiFetch(pageContentQuery("homepage"), draftMode),
    strapiFetch(navbarQuery(), draftMode),
    strapiFetch(footerQuery(), draftMode),
  ]);

  return {
    props: {
      pageData,
      navData,
      footerData,
      draftMode,
    },
  };
}) satisfies GetStaticProps<PageProps>;
