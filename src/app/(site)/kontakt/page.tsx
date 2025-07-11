
import ContactForm from "@/app/components/contact-form";
import Faq from "@/app/components/home/faq";
import Innovation from "@/app/components/home/innovation";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Kontakt | Kuren Solutions",
};

export default function Page() {
    return (
        <main>
            <ContactForm/>
             <Innovation/>
            <Faq/>
           
        </main>
    );
};
