import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LightRays from "@/components/LightRays";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "fitJourney",
  description: "Guiding you on the journey of making yourself more fit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
          <LightRays
              raysOrigin="top-center"
              raysColor="#03754f"
              raysSpeed={1.5}
              lightSpread={1}
              rayLength={2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.01}
              distortion={0.05}
              className="custom-rays"
            />
        </div>
        <main>

          {children}
        </main>
        
      </body>
    </html>
  );
}
