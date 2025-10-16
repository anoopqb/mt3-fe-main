// import PageContent from '@/lib/PageContent';
import fetchContentType, { StrapiData } from '@/lib/fetchContentType';
import { notFound } from 'next/navigation';
import PageContent from '@/lib/PageContent';
import { getPropertyID } from '@/lib/getPropertyID';

// Force static generation for the home page
export const dynamic = 'force-static';

export default async function HomePage() {
  const [pageData, propertyID] = await Promise.all([
    fetchContentType(
      'pages',
      {
        filters: {
          slug: 'home',
        },
        pLevel: 8
      },
      true,
    ) as Promise<StrapiData>,
    getPropertyID()
  ]);

  if (!pageData) notFound();

  return (
    <>
      <main className="mainContainer transparent">
        <PageContent pageData={pageData} propertyID={propertyID} />
      </main>
    </>
  );
}