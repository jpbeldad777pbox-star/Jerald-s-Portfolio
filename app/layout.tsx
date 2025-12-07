import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jerald Beldad - UI Developer & Designer Portfolio | JeraldDesign',
  description: 'Professional UI Developer and Designer Jerald Beldad showcasing innovative web design projects, user interface development, and creative digital solutions. Hire for your next project.',
  keywords: 'UI Developer, Web Designer, Portfolio, Jerald Beldad, User Interface, Web Development, Design Services',
  openGraph: {
    type: 'website',
    title: 'Jerald Beldad - UI Developer & Designer Portfolio',
    description: 'Professional UI Developer and Designer showcasing innovative web design projects and creative digital solutions.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background">{children}</body>
    </html>
  );
}
