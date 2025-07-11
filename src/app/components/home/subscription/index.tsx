"use client";
import DotGrid from "@/Backgrounds/DotGrid/DotGrid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const extractHexColor = (tailwindClass: string) => {
  const match = tailwindClass.match(/#([0-9A-Fa-f]{6})/);
  return match ? `#${match[1]}` : "#5227FF"; // fallback color
};
function Subscription() {
  const [startupPlanList, setstartupPlanList] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setstartupPlanList(data?.startupPlanList);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section id="cijenik">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-20">
            <div className="max-w-150 text-center mx-auto">
              <h2>
                Izaberite najbolje rješenje za vaše{" "}
                <span className="instrument-font italic font-normal dark:text-white/70">
                  poslovanje
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {startupPlanList?.map((items: any, index: number) => {
                const isLastItem =
                  index === startupPlanList.length - 1 &&
                  startupPlanList.length % 2 !== 0;

                const predefinedColors = ["#FFE9ED", "#d7d0ff", "#9b9b9b", ,];
                const baseColor =
                  predefinedColors[index] || extractHexColor(items.bg_color);
                const activeColor = baseColor;

                return (
                  <div
                    className={`${
                      items.plan_bg_color
                    } p-6 md:p-10 rounded-2xl relative ${
                      isLastItem ? "md:col-span-2" : ""
                    }`}
                    key={index}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 0,
                        opacity: 0.15,
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-12 md:pr-6">
                        <div className="flex flex-col gap-3">
                          <p className="py-2 px-4 bg-dark_black w-fit text-white rounded-full">
                            {items.plan_name}
                          </p>
                          <p className={`text-${items.descp_color}`}>
                            {items.plan_descp}
                          </p>
                        </div>
                        <div className="flex flex-col gap-3 md:gap-5">
                          <h2
                            className={`${items.text_color} dark:${items.text_color}`}
                          >
                            {items.plan_price}
                          </h2>
                          <Link
                            href="/kontakt"
                            className="group text-dark_black font-medium bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 w-fit "
                          >
                            <span className="group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out">
                              Krenimo s projektom
                            </span>
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="group-hover:-translate-x-42 transition-all duration-200 ease-in-out"
                            >
                              <rect
                                width="32"
                                height="32"
                                rx="16"
                                fill="#1B1D1E"
                              />
                              <path
                                d="M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668"
                                stroke="white"
                                strokeWidth="1.42857"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>

                      <div
                        className={`flex flex-col gap-4 md:pl-6 md:border-l ${items.border_color}`}
                      >
                        <p className={`${items.text_color}`}>Što dobivate?</p>
                        <ul className="flex flex-col gap-4">
                          {items.plan_feature?.map(
                            (feature: any, index: number) => (
                              <li
                                key={index}
                                className="flex items-center gap-3"
                              >
                                <Image
                                  src={items.icon_img}
                                  alt="icon"
                                  width={20}
                                  height={20}
                                />
                                <p className={`${items.text_color}`}>
                                  {feature}
                                </p>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscription;
