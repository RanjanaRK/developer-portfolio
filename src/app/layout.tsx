import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weight array as needed.
});

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export const metadata: Metadata = {
  title: "Ranjana | Full-Stack Developer Portfolio",
  description:
    "Explore the portfolio of Ranjana, a full-stack developer specializing in scalable web applications, real-time systems, and intuitive UI/UX design.",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={jetBrains.className}>
        <ThemeProvider
          attribute={"class"}
          enableSystem={false}
          defaultTheme="dark"
        >
          <main className="">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
