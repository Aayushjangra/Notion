import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Inter } from "next/font/google";
import "./globals.css";



import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from '../lib/edgestore';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion",
  description: "The connected workspace where better , faster work happens",
  // icons:{
  //   icon:[
  //     {
  //       media: "(prefers-colors-scheme: light)",
  //       url:"/logo.svg",
  //       href:"/logo.svg"
  //     },
  //     {
  //       media: "(prefers-colors-scheme: dark)",
  //       url:"/logo.dark.svg",
  //       href:"/logo.dark.svg"

  //     }
  //   ]
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body className={inter.className}>
        <ConvexClientProvider>
        <EdgeStoreProvider>
      <ThemeProvider
       attribute="class" 
       defaultTheme="system"
        enableSystem 
        disableTransitionOnChange 
        storageKey="jotion-theme-2">
        <Toaster position="bottom-center" />
        <ModalProvider/>
        {children}
        </ThemeProvider>
        </EdgeStoreProvider>
        </ConvexClientProvider>
        </body>
    </html>
  );
}
