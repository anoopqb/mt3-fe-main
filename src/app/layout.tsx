import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import "@anoopqb/simple-ui/dist/index.css";
import { Header, Footer } from "./components";
import SpecialsPopup from "./components/SpecialsPopup/SpecialsPopup";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const seoData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/global?pLevel=8`, {
  headers: {
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

const seoDataJson = await seoData.json();

export const metadata: Metadata = {
  title: seoDataJson.data.siteName,
  description: seoDataJson.data.siteDescription
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch data from two API endpoints in parallel
  const [response1, response2, response3] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/header?pLevel=8`, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/footer?pLevel=8`, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/global?pLevel=8`, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }),
  ]);

  const [headerData, footerData, globalData] = await Promise.all([
    response1.json(),
    response2.json(),
    response3.json(),
  ]);

  const globalDataJson = globalData.data;

  console.log('globalDataJson', globalDataJson);

  // Extract Header props from the API response
  const headerProps = {
    Logo: `${process.env.NEXT_PUBLIC_IMAGE_URL}${headerData.data.Logo.url}`,
    topNavItems: headerData.data.NavMenu,
  };

  const footerProps = {
    Logo: `${process.env.NEXT_PUBLIC_IMAGE_URL}${footerData.data.Logo.url}`,
    AddressLane1: footerData.data.AddressLane1,
    AddressLane2: footerData.data.AddressLane2,
    ZipCode: footerData.data.ZipCode,
    PhoneNumber: footerData.data.PhoneNumber,
    OfficeHours: footerData.data.OfficeHours[0].children[0].text || '',
  };

  const siteId = process.env.NEXT_PUBLIC_SITE || 'sitea';
  const cssFile = `styles/${siteId}.css`;

  console.log('footerProps', footerData.data.OfficeHours[0].children[0].text);

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={`${cssFile}`} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header {...headerProps} />


        {globalDataJson.Specials && (
          <SpecialsPopup
            title={globalDataJson.Specials.title}
            description={globalDataJson.Specials.description}
            buttons={globalDataJson.Specials.cta.map((ctaItem: any) => ({
              ...ctaItem,
              variant: 'primary'
            }))}
            showOnLoad={true}
            delay={1000}
          />
        )}


        {children}
        <Footer
          {...footerProps}
        />
      </body>
    </html>
  );
}
