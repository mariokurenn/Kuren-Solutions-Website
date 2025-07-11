"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import DotGrid from "@/Backgrounds/DotGrid/DotGrid";
import Squares from "@/Backgrounds/Squares/Squares";
function Innovation() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [innovationList, setinnovationList] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setinnovationList(data?.innovationList);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const extractHexColor = (tailwindClass: string) => {
    const match = tailwindClass.match(/#([0-9A-Fa-f]{6})/);
    return match ? `#${match[1]}` : "#5227FF"; // fallback color
  };

  // Helper to lighten or darken a hex color by percent (-100 to 100)
  const shadeColor = (color: string, percent: number) => {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = Math.min(255, Math.max(0, R + (R * percent) / 100));
    G = Math.min(255, Math.max(0, G + (G * percent) / 100));
    B = Math.min(255, Math.max(0, B + (B * percent) / 100));

    const rHex = R.toString(16).padStart(2, "0");
    const gHex = G.toString(16).padStart(2, "0");
    const bHex = B.toString(16).padStart(2, "0");

    return `#${rHex}${gHex}${bHex}`;
  };

  const bottomAnimation = (index: any) => ({
    initial: { y: "25%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "25%", opacity: 0 },
    transition: { duration: 0.3, delay: 0.3 + index * 0.3 },
  });

  return (
    <section id="usluge">
      <div ref={ref} className="2xl:py-5 py-11">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col justify-center items-center gap-10 lg:gap-16">
              <motion.div
                {...bottomAnimation(1)}
                className="max-w-(--breakpoint-sm) text-center"
              >
                <h2>
                 Mi ne nudimo usluge – mi stvaramo{" "}
                  <span className="instrument-font italic font-normal dark:text-white/70">
                    inovaciju.
                  </span>
                </h2>
              </motion.div>

              <motion.div
                {...bottomAnimation(2)}
                className="grid auto-rows-max grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 gap-6 w-full"
              >
                {innovationList?.map((items: any, index: number) => {
                  const predefinedColors = [
                    "#c13950",
                    "#8c42cf",
                    "#367ecb",
                    "#bd6a20",
                    "#409f24",
                  ];

                  const baseColor =
                    predefinedColors[index] || extractHexColor(items.bg_color);
                  const activeColor = baseColor;

                  return (
                    <div
                      key={index}
                      className={`${items.bg_color} relative flex flex-col p-7 rounded-2xl gap-6 lg:gap-9 overflow-hidden`}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          zIndex: 0,
                          opacity: 0.1,
                          pointerEvents: "none",
                        }}
                      >
                        <DotGrid
                          dotSize={5}
                          gap={15}
                          baseColor={baseColor}
                          activeColor={activeColor}
                          proximity={120}
                          shockRadius={160}
                          shockStrength={9}
                          resistance={750}
                          returnDuration={1.5}
                          style={undefined}
                        />
                      </div>

                      <div className="z-[1]">
                        <Image
                          src={items.image}
                          alt="image"
                          height={40}
                          width={40}
                        />
                      </div>

                      <div className="z-[1]">
                        <h5 className={`${items.txt_color}`}>
                          {items.title
                            .split("\n")
                            .map((line: any, i: number) => (
                              <React.Fragment key={i}>{line}</React.Fragment>
                            ))}
                        </h5>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
   <motion.div
              {...bottomAnimation(3)}
              className="flex flex-col gap-4 xl:flex xl:flex-row bg-dark_black items-center justify-between dark:bg-white/5 py-4 px-4 sm:py-8 sm:px-12 rounded-3xl w-full relative sm:w-full"

              style={{backgroundColor: "#121313", border: "1px solid rgba(255, 255, 255, 0.15)", overflow: "hidden"}}
            >
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
speed={0.2} 
squareSize={40}
direction='diagonal' // up, down, left, right, diagonal
borderColor='#fff'
hoverFillColor='#409f24'


/>
</div>
             <h4 className="hidden md:block text-white text-center xl:text-left">
  Pogledajte naša rješenja koja donose rezultate.<br />Započnite svoju digitalnu priču s nama!
</h4>

{/* Mobile verzija */}
<h4 className="block md:hidden text-white text-center px-4">
  Pogledajte naša rješenja i započnite digitalnu priču s nama!
</h4>
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <Link
                  href="https://qb4gef9e2jt.typeform.com/to/WF7hvnOS"
                  target="_blank"
                  className="group gap-2 text-dark_black font-medium bg-white rounded-full flex items-center lg:gap-4 py-2 pl-5 pr-2 border border-white dark:border-opacity-50 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out"
                >
                  <span className="group-hover:translate-x-10 transform transition-transform duration-200 ease-in-out">
                    Zakažite sastanak
                  </span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:-translate-x-36 transition-all duration-200 ease-in-out"
                  >
                    <rect
                      width="32"
                      height="32"
                      rx="16"
                      fill="#1B1D1E"
                      className=" transition-colors duration-200 ease-in-out group-hover:fill-white"
                    />
                    <path
                      d="M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668"
                      stroke="white"
                      strokeWidth="1.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:stroke-black"
                    />
                  </svg>
                </Link>
                <Link
                  href="/#portfolio"
                  className="group border border-white dark:border-white/50 text-white font-medium bg-dark_black gap-2 rounded-full flex items-center justify-between lg:gap-4 py-2 pl-5 pr-2 hover:opacity-95 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out group-hover:translate-x-9"
                >
                  <span className="transform transition-transform duration-200 ease-in-out ">
                    Pogledajte radove
                  </span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" transition-all duration-200 ease-in-out "
                  >
                    <rect width="32" height="32" rx="16" fill="white" />
                    <path
                      d="M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668"
                      stroke="#1B1D1E"
                      strokeWidth="1.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Innovation;
