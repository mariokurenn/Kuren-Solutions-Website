"use client";
import Squares from "@/Backgrounds/Squares/Squares";
import TextCursor from "@/blocks/TextAnimations/TextCursor/TextCursor";
import Image from "next/image";
import butic from '../../../../../public/images/home/customerStories/butic.jpg';

function CustomerStories() {
  return (
    <section className="relative" id="sto-kazu-klijenti">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ opacity: 0.3 }}
      >
        <TextCursor
          text="⭐"
          delay={0.01}
          spacing={160}
          followMouseDirection={true}
          randomFloat={true}
          exitDuration={0.3}
          removalInterval={20}
          maxPoints={10}
        />
      </div>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col justify-center gap-10 md:gap-20">
            <div className="mx-auto max-w-2xl flex items-center text-center">
              <h2>
                 Što kažu neki od naših klijenata koji su nam dali
                <span className="instrument-font italic font-normal dark:text-white/70">
                  {" "}
                  svoje povjerenje
                </span>
              </h2>
            </div>
            <div className="flex flex-col gap-6 md:flex-col-reverse lg:flex-col">
              <div className="flex flex-col xl:flex xl:flex-row gap-6">
                <div className="flex flex-col gap-24 justify-between bg-dark_black/5 dark:bg-white/5 p-8 rounded-2xl ">
                  <div className="flex flex-col gap-6">
                    <h2 className="text-2xl lg:text-4xl ">
                      “Mario je transformirao web stranicu moje dentalne
                      ordinacije i rezultat je nadmašio očekivanja. Stranica
                      sada izgleda moderno, profesionalno i jednostavna je za
                      korištenje. Mario je razumio potrebe dentalne prakse te
                      implementirao odlična rješenja poput online naručivanja.”
                    </h2>
                  </div>
                  <div className="flex items-start gap-4">
  <img
    src="https://mendident.hr/wp-content/uploads/2024/09/image-1.png"
    alt="Martina Menđušić Ivić"
    className="w-12 h-12 rounded-full object-cover"
  />
  <div className="flex flex-col gap-1">
    <p className="font-medium">
      Martina Menđušić Ivić, Dr.med.dent. Univ.mag.med.dent.
    </p>
    <p className="text-dark_black/60 dark:text-white/60 text-sm font-medium">
      Vlastica dentalna ordinacije Mendident
    </p>
  </div>
</div>

                </div>
                <div className="flex flex-col justify-between bg-dark_black xl:max-w-25 dark:bg-white/10 rounded-2xl p-8 relative ">
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 0,
                      opacity: 0.1,
                      pointerEvents: "none",
                    }}
                  >
                   <Squares 
speed={0.5} 
squareSize={40}
direction='up' // up, down, left, right, diagonal
borderColor='#fff'
hoverFillColor='#222'
/>
                  </div>

                  <div
                    className="flex flex-col gap-6 relative"
                    style={{ maxWidth: "350px", width:'100%', minWidth:'300px' }}
                  >
                    <iframe
                      src="https://player.mux.com/jV00hKzzhaTLDVpTiWWudKQHlUSQN23pyW004f6hYofVk?metadata-video-title=Tibor"
                      style={{ width: "100%", height: "535px", zIndex: 1 }}
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
                    ></iframe>
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-white/100 dark:text-white/100 ">
                        Tibor Čubrilo
                      </p>
                      <p className="text-white/100 dark:text-white/100   text-sm font-medium">
                        Osnivač Korak Ispred
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col xl:flex xl:flex-row gap-6">
              
                <div className="flex flex-col justify-between bg-dark_black xl:max-w-25 dark:bg-white/10 rounded-2xl p-8 relative ">
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 0,
                      opacity: 0.1,
                      pointerEvents: "none",
                    }}
                  >
                   <Squares 
speed={0.5} 
squareSize={40}
direction='up' // up, down, left, right, diagonal
borderColor='#fff'
hoverFillColor='#222'
/>
                  </div>

                  <div
                    className="flex flex-col gap-6 relative "
                    style={{ minWidth: "300px" }}
                  >
                    <iframe
                      src=" https://player.mux.com/6QJ8hP3r3x3W49zBpneQu4Adu5ygRDzGVGCcCb28cCw?metadata-video-title=Dominik"
                      style={{ width: "100%", height: "535px", zIndex: 1,  }}
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
                    ></iframe>
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-white/100 dark:text-white/100 ">
                        Dominik Metličić
                      </p>
                      <p className="text-white/100 dark:text-white/100   text-sm font-medium">
                        Unlock IT
                      </p>
                    </div>
                  </div>
                </div>
                  <div className="flex flex-col gap-24 justify-between bg-dark_black/5 dark:bg-white/5 p-8 rounded-2xl">
                  <div className="flex flex-col gap-6">
                    <h2 className="text-2xl  lg:text-4xl ">
                      “Odlična suradnja kao i fleksibilnost po pitanju bilo naknadnih kakvih dodataka ili izmjena.
Sama stranica je napravljena u dogovorenom roku i u skladu sa našim željama što se tiče dizajna.
Najmanje što mogu je preporučiti svima koji imaju želju ili potrebu da budu online prepoznatljivi.”
                    </h2>
                  </div>
                   <div className="flex items-start gap-4">
  <img
    src="/images/home/customerStories/butic.jpg"
    alt="Tihomir Burić"
    className="w-12 h-12 rounded-full object-cover"
  />
  <div className="flex flex-col gap-1">
    <p className="font-medium">
      Tihomir Burić
    </p>
    <p className="text-dark_black/60 dark:text-white/60 text-sm font-medium">
      Vlasnik Farvilan d.o.o
    </p>
  </div>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerStories;
