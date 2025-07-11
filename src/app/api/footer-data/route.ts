import { NextResponse } from "next/server";

const footerData = {
    brand: {
        name: "Kuren Solutions",
        tagline: " Od ideje do kompletnog rješenja koje donosi rezultate.",
        socialLinks: [
       
            {
                icon: "/images/home/footerSocialIcon/linkedin.svg",
                dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
                link: "https://www.linkedin.com/company/kuren-solutions?originalSubdomain=hr"
            },
            {
                icon: "/images/home/footerSocialIcon/instagram.svg",
                dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
                link: "https://www.instagram.com/kuren_solutions/"
            }
        ]
    },
    sitemap: {
        name: "Sitemap",
        links: [
            { name: "O nama", url: "/#o-nama" },
            { name: "Usluge", url: "/#usluge" },
            { name: "Portfolio", url: "/#portfolio" },
            { name: "Cijenik", url: "/#cijenik" },
            { name: "Kontaktirajte nas", url: "/kontakt" },
        ]
    },
    otherPages: {
        name: "Other Pages",
        links: [
           
            { name: "Uvjeti korištenja", url: "/terms-and-conditions" },
            { name: "Pravila privatnosti", url: "/privacy-policy" },
         
        ]
    },
    contactDetails: {
        name:"Kontakt informacije",
        address: "Kuren Solutions",
        email: "info@kurensolutions.com",
        phone: "IBAN: HR922360000110309008"
    },
    copyright: "Copyright© 2025 Kuren Solutions"
};

export const GET = async () => {
  return NextResponse.json({
    footerData
  });
};