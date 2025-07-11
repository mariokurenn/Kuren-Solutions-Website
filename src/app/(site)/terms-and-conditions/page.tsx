import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Terms & Condition | Awake Agency",
};

export default function TermsConditions() {
  return (
    <section>
      <div
        className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10"
      >
        <div className="container relative z-10">
          <div className="flex flex-col gap-5">
            <h1 className="md:text-6xl text-4xl font-medium text-center">
              Uvjeti korištenja
            </h1>
            <div className="bg-white dark:bg-dark_black p-8 rounded-2xl">
              <p>
                Ovi Uvjeti korištenja (“<span className="font-semibold">Ugovor</span>”) sklopljeni su između Kuren Solutions (“<span className="font-semibold">Kuren Solutions</span>”) i osobe ili pravne osobe koja koristi naše usluge (“<span className="font-semibold">Korisnik</span>”). Ovaj Ugovor uređuje prava i obveze vezane uz korištenje naših usluga, uključujući izradu web stranica, AI automatizaciju i druge povezane usluge.
              </p>
              <p className="mt-5">
                Korištenjem naših usluga, Korisnik prihvaća ove uvjete i obvezuje se pridržavati ih.
              </p>

              <div className="my-6">
                <h4 className="font-semibold">1. Definicije</h4>
                <ul className="mt-6 list-disc list-inside space-y-5">
                  <li>
                    <p>
                      <span className="font-semibold">1.1 “Usluge”</span> podrazumijevaju sve digitalne usluge koje Kuren Solutions pruža, uključujući izradu web stranica, AI automatizaciju i druge povezane tehnologije.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-semibold">1.2 “Korisnik”</span> označava osobu ili tvrtku koja koristi ili naručuje usluge Kuren Solutions.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-semibold">1.3 “Sadržaj”</span> su svi materijali, dokumenti, dizajni, tekstovi i drugi elementi koje Kuren Solutions kreira ili isporučuje korisniku.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-semibold">1.4 “Licenca”</span> pravo koje Korisnik dobiva za korištenje isporučenih rješenja sukladno ovom Ugovoru.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="my-6">
                <h4 className="font-semibold">2. Prava i obveze</h4>
                <ul className="mt-6 list-disc list-inside space-y-5">
                  <li>
                    <p>
                      <span className="font-semibold">2.1 Kuren Solutions</span> se obvezuje isporučiti usluge u skladu s dogovorenim rokovima, kvalitetom i specifikacijama.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-semibold">2.2 Korisnik</span> je odgovoran za pravovremenu isplatu ugovorenih naknada i pružanje potrebnih materijala i informacija za izvršenje usluga.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-semibold">2.3 Korištenje usluga</span> dozvoljeno je isključivo u poslovne svrhe Korisnika, uz poštivanje autorskih prava i zakonskih regulativa.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="my-6">
                <h4 className="font-semibold">3. Odgovornost i ograničenja</h4>
                <p>
                  Kuren Solutions ne odgovara za štete nastale nepropisnim korištenjem usluga ili zbog nepridržavanja uvjeta ovog Ugovora. Svaka druga odgovornost isključena je u granicama zakona.
                </p>
              </div>

              <div className="my-6">
                <h4 className="font-semibold">4. Završne odredbe</h4>
                <p>
                  Ovi uvjeti mogu se povremeno mijenjati, a svaka izmjena bit će pravovremeno objavljena na web stranici Kuren Solutions.
                </p>
               
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


