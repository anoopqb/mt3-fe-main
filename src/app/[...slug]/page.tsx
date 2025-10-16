import fetchContentType, { StrapiData } from "@/lib/fetchContentType";
import { notFound } from "next/navigation";
import PageContent from "@/lib/PageContent";
import { getPropertyID } from "@/lib/getPropertyID";

export const dynamic = 'force-static';



export async function generateStaticParams() {
  try {
    const pagesData = await fetchContentType(
      'pages',
      {
        fields: ['slug'],
        filters: {
          slug: { $ne: 'home' },
        },
      },
    ); // Explicitly pass false for isDraftMode

    const pages = (pagesData as { data: StrapiData[] })?.data || [];

    return pages.map(page => {
      const slug = page.slug as string;
      return { slug: slug.split('/') }; // split into array for catch-all
    });
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}


const InnerPage = async ({ params, searchParams }: { params: { slug: string[] }, searchParams: { status: string } }) => {

  const { slug: slugArray } = await params;
  const slug = slugArray.join('/'); // join array back to string

  const resolvedSearchParams = await searchParams;
  const status = resolvedSearchParams?.status;

  const [pageData, propertyID] = await Promise.all([
    fetchContentType(
      'pages',
      {
        filters: {
          slug,
        },
        ...(status && { status }),
        pLevel: 8
      },
      true,
    ) as Promise<StrapiData>,
    getPropertyID()
  ]);

  if (!pageData) notFound();

  return (
    <>
      <PageContent pageData={pageData} propertyID={propertyID} />
    </>
  );
};

export default InnerPage;