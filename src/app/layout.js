import "@/styles/globals.css";

export const metadata = {
  title: "COCO Tapas & Bar - Munich's First Mediterranean Tapas",
  description: "We have been bringing the diversity of Mediterranean cuisine to Barer Straße since 2018. From Munich with Love.",
  keywords: "tapas, mediterranean, restaurant, munich, bar, food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('scrollRestoration' in history) {
              history.scrollRestoration = 'manual';
            }
            window.scrollTo(0, 0);
          `
        }} />
        {children}
      </body>
    </html>
  );
}