
import { Metadata } from "next";
import Script from "next/script";
import Achievements from "./components/home/achievements";
import Brand from "./components/home/brand";
import CreativeMind from "./components/home/creative-mind";
import CustomerStories from "./components/home/customer-stories";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Innovation from "./components/home/innovation";
import OnlinePresence from "./components/home/online-presence";
import Solutions from "./components/home/solution";
import Subscription from "./components/home/subscription";
import WebResult from "./components/home/web-result";

export const metadata: Metadata = {
  title: "Kuren Solutions – Izrada web stranica, AI automatizacija, digitalni marketing, CRO",
  description: "Kuren Solutions nudi profesionalnu izradu web stranica, AI automatizaciju poslovnih procesa, SEO optimizaciju i digitalni marketing za rast vašeg biznisa.",
  keywords: "izrada web stranica, AI automatizacija, SEO optimizacija, digitalni marketing, web development, poslovna automatizacija, Kuren Solutions",
 
  openGraph: {
    title: "Kuren Solutions – Izrada web stranica, AI automatizacija, digitalni marketing",
    description: "Profesionalna izrada web stranica, AI rješenja i SEO optimizacija za vaš poslovni uspjeh.",
    url: "https://kurensolutions.com/", 
    siteName: "Kuren Solutions",
    type: "website",
    locale: "hr_HR",
  },
};


export default function Home() {
  return (
    <main>
      {/* Microsoft Clarity Script */}
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "jeyuj16mr6");`,
        }}
      />

     

      {/* ---------------------Hero section Starts-----------------  */}
      <HeroSection />
      {/* ---------------------Hero section Ends-----------------  */}

      {/* ---------------------Brand logo section Starts-----------------  */}
      <Brand />
      {/* ---------------------Brand logo section Ends-----------------  */}

      {/* ---------------------Web result section Starts-----------------  */}
      <WebResult />
      {/* ---------------------Web result section Ends-----------------  */}

      {/* ---------------------Innovation section Starts-----------------  */}
      <Innovation />
      {/* ---------------------Innovation section Ends-----------------  */}

      {/* ---------------------Online presence section Starts-----------------  */}
      <OnlinePresence />
      {/* ---------------------Online presence section Ends-----------------  */}

      {/* ---------------------Creative mind section Starts-----------------  */}
      {/* <CreativeMind /> */}
      {/* ---------------------Creative mind section Ends-----------------  */}

      {/* ---------------------Customer Stories section Starts-----------------  */}
      <CustomerStories />
      {/* ---------------------Customer Stories section Ends-----------------  */}

      <Solutions />

      {/* ---------------------Subscription section Starts-----------------  */}
      <Subscription />
      {/* ---------------------Subscription section Ends-----------------  */}

      {/* ---------------------Faq section Starts-----------------  */}
      <Faq />
      {/* ---------------------Faq section Ends-----------------  */}

      {/* ---------------------Achievements section Starts-----------------  */}
      {/* <Achievements /> */}
      {/* ---------------------Achievements section Ends-----------------  */}

      {/* ---------------------Solutions section Starts-----------------  */}
      {/* ---------------------Solutions section Ends-----------------  */}
    </main>
  );
}
