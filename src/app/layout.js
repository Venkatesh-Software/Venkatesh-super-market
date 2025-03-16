import './globals.css';

export const metadata = {
  title: 'Venkatesh Super Market',
  description: 'Digital Business Card',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}