// import PageContent from '@/lib/PageContent';
import fetchContentType, { StrapiData } from '@/lib/fetchContentType';
import { notFound } from 'next/navigation';
import { Header } from '@anoopqb/simple-ui';
import PageContent from '@/lib/PageContent';

// Force static generation for the home page
export const dynamic = 'force-static';

export default async function HomePage() {
  const pageData = (await fetchContentType(
    'pages',
    {
      filters: {
        slug: 'home',
      },
      populate: '*',
    },
    true,
  )) as StrapiData;

  if (!pageData) notFound();

  return (
    <>
      <main className="mainContainer transparent">
        <Header logoSrc="logoipsum-405.png" menuItems={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ]} />
        <PageContent pageData={pageData} />
      </main>
    </>
  );
}