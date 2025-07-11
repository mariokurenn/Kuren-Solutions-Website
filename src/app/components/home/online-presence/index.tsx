"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Magnet from "@/blocks/Animations/Magnet/Magnet";
import TextCursor from "@/blocks/TextAnimations/TextCursor/TextCursor";

function OnlinePresence() {
  const [onlinePresenceList, setonlinePresenceList] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setonlinePresenceList(data?.onlinePresenceList);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);
  return (
  <section id="portfolio" className="relative">
  <div className="absolute top-0 left-0 w-full h-full">
    <TextCursor
      text="🥇"
      delay={0.01}
      spacing={80}
      followMouseDirection={true}
      randomFloat={true}
      exitDuration={0.3}
      removalInterval={20}
      maxPoints={10}
    />
  </div>

  <div className="2xl:py-20 py-11">
    <div className="container">
      <div className="flex flex-col justify-center items-center gap-10 md:gap-20">
        <div className="max-w-2xl text-center">
          <h2>
            Od ideje do kompletnog rješenja koje donosi
            <span className="instrument-font italic font-normal dark:text-white/70">
              {" "}
              rezultate
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
          {onlinePresenceList?.map((items: any, index: any) => {
            return (
              <div key={index} className="group flex flex-col gap-6 relative">
                <div className="relative">
                  <Image
                    src={items.image}
                    alt={items.title}
                    width={625}
                    height={410}
                    className="rounded-2xl"
                    unoptimized={true}
                  />

                  {/* Overlay + content on hover (desktop/tablet) */}
                  <div className="hidden md:flex absolute top-0 left-0 w-full h-full bg-black/65 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex flex-col justify-between p-5 text-white">
                    <div className="flex justify-end">
                      {items.link ? (
                        <Link
                          href={items.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Magnet padding={50} disabled={false} magnetStrength={2}>
                            <Icon
                              icon="icon-park-solid:circle-right-up"
                              width="80"
                              height="80"
                              style={{ color: "#ffffff" }}
                            />
                          </Magnet>
                        </Link>
                      ) : (
                        <Magnet padding={50} disabled={false} magnetStrength={2}>
                          <Icon
                            icon="icon-park-solid:circle-right-up"
                            width="80"
                            height="80"
                            style={{ color: "#ffffff" }}
                          />
                        </Magnet>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 mt-auto py-2 px-1">
                      {/* PROMJENA: NA MOBITELU PRVO NASLOV I TAGOVI, PA TEK ONDA CONTENT I REZULTATI */}
                      <div className="flex flex-col md:hidden order-1 mb-4">
                        {/* Naslov i tagovi (mobile) */}
                        {items.link ? (
                          <Link
                            href={items.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <h5
                              className="text-purple_blue hover:underline"
                              style={{ textDecoration: "none" }}
                            >
                              {items.title}
                            </h5>
                          </Link>
                        ) : (
                          <h5
                            className="group-hover:text-purple_blue"
                            style={{ textDecoration: "none" }}
                          >
                            {items.title}
                          </h5>
                        )}

                        <div className="flex gap-3 flex-wrap cursor-pointer mt-2">
                          {items.tag?.map((tag: any, index: number) => (
                            <p
                              key={index}
                              className="text-sm border border-dark_black/10 dark:border-white/50 w-fit py-1.5 px-4 rounded-full hover:bg-dark_black hover:text-white transition-colors duration-200"
                            >
                              {tag}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="order-2">
                        {items.content && (
                          <p className="text-s text-white/90">{items.content}</p>
                        )}

                        {items.results && (
                          <div className="text-s">
                            <strong>Rezultati:</strong> {items.results.join(", ")}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* MOBILE: prikaz naslov + tagovi + content + rezultati, ali u željenom redoslijedu */}
                <div className="md:hidden rounded-2xl p-2 text-white flex flex-col gap-3">
                  {/* Naslov i tagovi prvo */}
                  {items.link ? (
                    <Link
                      href={items.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="order-1"
                    >
                      <h5
                        className="text-purple_blue hover:underline"
                        style={{ textDecoration: "none" }}
                      >
                        {items.title}
                      </h5>
                    </Link>
                  ) : (
                    <h5
                      className="group-hover:text-purple_blue order-1"
                      style={{ textDecoration: "none" }}
                    >
                      {items.title}
                    </h5>
                  )}

                  <div className="flex gap-3 flex-wrap cursor-pointer order-2">
                    {items.tag?.map((tag: any, index: number) => (
                      <p
                        key={index}
                        className="text-sm border border-dark_black/10 dark:border-white/50 w-fit py-1.5 px-4 rounded-full hover:bg-dark_black hover:text-white transition-colors duration-200"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>

                  {/* Content i rezultati nakon toga */}
                  {items.content && (
                    <p className="order-3">{items.content}</p>
                  )}
                  {items.results && (
                    <p className="order-4">
                      <strong>Rezultati:</strong> {items.results.join(", ")}
                    </p>
                  )}
                </div>

                {/* DESKTOP: naslov i tagovi ispod slike */}
                <div className="hidden md:flex flex-col items-start gap-4 md:pl-6  ">
                  {items.link ? (
                    <Link
                      href={items.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5
                        className="group-hover:text-purple_blue hover:underline"
                        style={{ textDecoration: "none" }}
                      >
                        {items.title}
                      </h5>
                    </Link>
                  ) : (
                    <h5
                      className="group-hover:text-purple_blue"
                      style={{ textDecoration: "none" }}
                    >
                      {items.title}
                    </h5>
                  )}

                  <div className="flex gap-3 flex-wrap cursor-pointer">
                    {items.tag?.map((tag: any, index: number) => (
                      <p
                        key={index}
                        className="text-sm border border-dark_black/10 dark:border-white/50 w-fit py-1.5 px-4 rounded-full hover:bg-dark_black hover:text-white transition-colors duration-200"
                      >
                        {tag}
                      </p>
                    ))}
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

export default OnlinePresence;
