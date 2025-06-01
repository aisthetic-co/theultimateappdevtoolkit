import Layout from "@/components/Layout";
import PageMetaData from "@/components/PageMetaData";
import PageContent from "@/components/PageContent";

import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import {
  footerQuery,
  navbarQuery,
  pageContentQuery,
  pageSlugsQuery,
} from "@/strapi/lib/queries";
import strapiFetch from "@/strapi/lib/fetch";
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

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths = (async () => {
  const excludeSlugs = ["homepage"];
  const pageSlugs = await strapiFetch(pageSlugsQuery());

  const filteredSlugs = pageSlugs?.data?.filter(
    (data: { slug: string }) => !excludeSlugs.includes(data.slug)
  );

  const paths =
    filteredSlugs?.map((data: { slug: string }) => ({
      params: { slug: data.slug },
    })) || [];

  console.log("Paths", paths);

  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const draftMode = context.draftMode || false;
  const { slug } = context.params as IParams;

  const [pageData, navData, footerData] = await Promise.all([
    strapiFetch(pageContentQuery(slug), draftMode),
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
