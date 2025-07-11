import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Pravila privatnosti | Kuren Solutions",
};

export default function Page() {
    return (
        <section>
            <div
                className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10"
            >
                <div className="container relative z-10">
                    <div className='flex flex-col gap-5'>
                        <h1 className='md:text-6xl text-4xl font-medium text-center'>
                            Pravila privatnosti
                        </h1>
                        <div className="bg-white dark:bg-dark_black p-8 rounded-2xl">
                            <p className="text-opacity-60">
                                Ova Izjava o privatnosti objašnjava kako Kuren Solutions i njegovi pridruženi subjekti ("mi", "naš" ili "Kuren Solutions") prikupljaju, koriste i štite osobne podatke naših (potencijalnih) korisnika i drugih osoba koje koriste naše usluge. Ova Izjava opisuje naše prakse privatnosti u vezi s korištenjem naše web stranice (
                                <Link href="https://kurensolutions.com/" className="text-dark_black">https://kurensolutions.com/</Link>), softvera, usluga, rješenja i povezanih aplikacija, uključujući istraživanja i marketinške aktivnosti koje nudimo (dalje u tekstu "Usluge"), kao i vaše mogućnosti vezane uz pristup, korištenje, pohranu i ispravak osobnih podataka. Također opisuje kako obrađujemo podatke prikupljene u vezi s našim Uslugama i tijekom poslovanja.
                            </p>

                            <p className="text-opacity-60 mt-4">
                                Korištenjem naših Usluga i prihvaćanjem naših Općih uvjeta, pristajete na prikupljanje, upotrebu, pohranu i otkrivanje podataka kako je navedeno u ovoj Izjavi o privatnosti.
                            </p>

                            <p className="text-opacity-60 mt-4">
                                Naša web stranica može sadržavati poveznice na druge web stranice ili usluge; pravila privatnosti i sadržaj tih stranica nisu pod našom kontrolom i upravljaju se zasebnim pravilima tih stranica.
                            </p>

                            <p className="text-opacity-60 mt-4">
                                Povremeno možemo ažurirati ovu Izjavu o privatnosti. Sve promjene bit će objavljene na ovoj stranici s izmijenjenim datumom na vrhu. Preporučujemo da redovito pregledavate Pravila privatnosti kako biste ostali informirani o načinu na koji štitimo vaše podatke.
                            </p>

                            <div className="my-6">
                                <h4 className="font-semibold">Prikupljanje osobnih podataka</h4>
                                <p className="mt-4">
                                    Tijekom korištenja naših Usluga, možemo vas zamoliti da nam date određene osobne podatke potrebne za kontakt ili identifikaciju. Na primjer, prikupljamo podatke prilikom kreiranja računa, zahtjeva za podršku ili druge komunikacije. Podaci koje prikupljamo mogu uključivati ime, e-mail adresu, broj telefona, fotografiju ili druge podatke koje nam dobrovoljno pružite.
                                </p>

                                <p className="mt-4 text-opacity-60">
                                    Ne prikupljamo financijske podatke poput broja platne kartice ili sigurnosnih kodova. Sve financijske transakcije obrađuju se putem sigurnih i neovisnih pružatelja usluga plaćanja.
                                </p>
                            </div>

                            <div className="my-6">
                                <h4 className="font-semibold">Podaci koje nam dobrovoljno pružate</h4>
                                <p className="mt-4 text-opacity-60">
                                    Osobne podatke koje nam dostavite koristimo isključivo za potrebe pružanja usluga, komunikacije i poboljšanja naše ponude. Podatke ne dijelimo s trećim stranama osim ako je to nužno za ispunjenje naših obveza prema vama (npr. pružatelji usluga plaćanja ili hosting partneri).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
