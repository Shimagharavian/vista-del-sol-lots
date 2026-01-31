import "./globals.css";

export const metadata = {
  title: "Vista del Sol",
  description: "Interactive lot sales website"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
