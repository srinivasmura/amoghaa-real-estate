import type { Metadata } from "next";
import "./globals.css";
import "./property-details.css";
import "./property-listing-layout.css";
import "./about-page.css";

export const metadata: Metadata = {
  title: "Amoghaa Real Estate | Find Your Home in Bangalore",
  description: "Explore residential projects, compare localities, and find a home that fits your lifestyle with Amoghaa Real Estate.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}