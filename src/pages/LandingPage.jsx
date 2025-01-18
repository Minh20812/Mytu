import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 21000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* {isLoading ? (
        <Loading />
      ) : ( */}
      <div className=" text-white bg-black">
        <section className="  flex justify-center items-center h-screen relative overflow-hidden flex-col">
          <strong className=" z-50 absolute font-custom text-5xl motion-opacity-in-0 intersect:motion-translate-y-in-100 motion-blur-in-md">
            mỹ tứ
          </strong>

          <div className=" flex gap-1 flex-col opacity-60  rotate-[-30deg] h-screen justify-center items-center">
            <div className=" flex gap-1 w-max ">
              <img
                src="/images/1hong.png"
                alt="example"
                className=" h-72 w-40 lg:h-[576px] lg:w-[320px] rounded-sm border-[0.2px] md:intersect:-motion-translate-y-in-100"
              />
              <div className=" flex justify-between flex-col">
                <div></div>
                <img
                  src="/images/4mau.png"
                  alt="example"
                  className=" h-48 w-80 lg:h-[384px] lg:w-[640px] rounded-sm border-[0.2px] intersect:motion-translate-x-in-100"
                />
              </div>
            </div>

            <div className=" flex gap-1 w-max">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/2800/b704fa213992079.67508e54115b8.png"
                alt=""
                className=" h-48 w-80 lg:h-[384px] lg:w-[640px] rounded-sm border-[0.2px] intersect:-motion-translate-x-in-100"
              />
              <img
                src="/images/1vang.png"
                alt=""
                className=" h-72 w-40 lg:h-[576px] lg:w-[320px] rounded-sm border-[0.2px] md:intersect:motion-translate-y-in-100"
              />
            </div>
          </div>
        </section>

        <section className=" gap-10">
          <div className=" flex lg:gap-10 lg:p-10 p-4 max-md:flex-col lg:grid lg:grid-cols-3">
            <div className=" lg:col-span-1 flex flex-col justify-around">
              <img
                src="/images/bc1.png"
                alt=""
                className=" rounded-2xl opacity-60 p-2 my-4 intersect:motion-preset-slide-up motion-delay-0"
              />
              <img
                src="/images/bc2.png"
                alt=""
                className=" rounded-2xl opacity-60 p-2 my-4 intersect:motion-preset-slide-up motion-delay-75"
              />
            </div>

            <div className=" flex flex-col justify-center items-center p-4 gap-4 lg:col-span-1 font-montserrat">
              <p className=" intersect:motion-preset-slide-up motion-delay-100">
                <strong>Ancestor worship</strong>&nbsp;is a beautiful tradition
                that has been a vital part of&nbsp;
                <strong>Vietnamese</strong>&nbsp; culture for generations. It's
                how we express gratitude and stay connected to our roots,
                honoring parents and grandparents who have passed on. This
                tradition is not just a ritual-it's a way of preserving our
                identity and showing respect for the values passed down through
                our family lines.
              </p>
              <p className="intersect:motion-preset-slide-up motion-delay-150">
                However, many young people are losing touch with these
                meaningful practices. Questions like,{" "}
                <strong>
                  “What is ancestor worship? Why do we do it? How should it be
                  done?”
                </strong>{" "}
                often remain unanswered.
              </p>
              <p className="intersect:motion-preset-slide-up motion-delay-200">
                At <strong>Mỹ Tứ</strong>, we believe that tradition doesn't
                have to feel distant or complicated. Our mission is to
                reintroduce the essence of Vietnamese ancestor worship in a way
                that's simple, relatable, and inspiring, helping younger
                generations appreciate and take pride in this timeless heritage.
              </p>
            </div>

            <div className="lg:col-span-1 flex flex-col justify-around">
              <img
                src="/images/bc4.png"
                alt=""
                className="rounded-2xl opacity-60 p-2 my-4 intersect:motion-preset-slide-up motion-delay-300"
              />
              <img
                src="/images/bc3.png"
                alt=""
                className="rounded-2xl opacity-60 p-2 my-4 intersect:motion-preset-slide-up motion-delay-500"
              />
            </div>
          </div>

          <div className=" max-w-screen lg:gap-4 grid md:grid-cols-4 grid-cols-1 lg:p-10 p-4">
            <img
              src="/images/spring.png"
              alt=""
              className=" rounded-sm opacity-60 intersect:motion-preset-slide-up motion-delay-0"
            />
            <img
              src="/images/summer.png"
              alt=""
              className=" rounded-sm opacity-60 intersect:motion-preset-slide-up motion-delay-100"
            />
            <img
              src="/images/fall.png"
              alt=""
              className=" rounded-sm opacity-60 intersect:motion-preset-slide-up motion-delay-200"
            />
            <img
              src="/images/winter.png"
              alt=""
              className=" rounded-sm opacity-60 intersect:motion-preset-slide-up motion-delay-300"
            />
          </div>

          <p className=" lg:p-10 p-4 font-montserrat intersect:motion-preset-slide-up motion-delay-500">
            Inspired by the natural cycle, with colors and visuals such as peach
            blossoms, bamboo, persimmons, and Buddhist pine symbolizing the four
            seasons, the project conveys the essence of stability, balance, and
            harmony.
          </p>
        </section>

        <section className=" font-montserrat ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:grid-rows-2 lg:gap-10 lg:p-10 p-4">
            <h2 className=" col-span-1 flex-col justify-between flex text-xl">
              <div></div>
              <strong className=" intersect:motion-preset-slide-left motion-delay-0">
                New Year's Eve Offering
              </strong>
            </h2>

            <img
              src="/images/cunggiaothua.png"
              alt="cungiaothua"
              className=" row-span-2 rounded-xl opacity-60 intersect:motion-preset-slide-left motion-delay-300"
            />

            <p className=" col-span-1 intersect:motion-preset-slide-left motion-delay-500">
              (also known as the <strong>"Lễ Trừ Tịch"</strong>) is an important
              ritual performed on the night of the 30th day of the Lunar New
              Year. It marks the moment when "Heaven and Earth converge, yin and
              yang intertwine" and is typically conducted to bid farewell to the
              old year and welcome the new one.
            </p>

            <a
              href="#"
              className=" underline cursor-pointer font-bold intersect:motion-preset-slide-left motion-delay-500"
            >
              Read More
            </a>
          </div>
        </section>

        <section className=" font-montserrat ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:grid-rows-2 lg:gap-10 lg:p-10 p-4">
            <img
              src="/images/cungkhaitruong.png"
              alt="cungkhaitruong"
              className=" row-span-2 rounded-xl opacity-60 max-sm:hidden intersect:motion-preset-slide-right motion-delay-0"
            />

            <h2 className=" col-span-1 flex-col justify-between flex text-xl text-right intersect:motion-preset-slide-right motion-delay-100">
              <div></div>
              <strong> Opening Ceremony Offering </strong>
            </h2>

            <img
              src="/images/cungkhaitruong.png"
              alt="cungkhaitruong"
              className=" row-span-2 rounded-xl opacity-60  md:hidden intersect:motion-preset-slide-right motion-delay-150"
            />

            <p className=" col-span-1 text-right intersect:motion-preset-slide-right motion-delay-200">
              This is a significant ritual in Vietnamese business culture and
              spirituality. It seeks permission and blessings from the local
              land deity for smooth business operations, while also praying for
              good fortune, prosperity, and success for the future of the shop
              or enterprise.
            </p>

            <div className="max-sm:hidden"></div>

            <a
              href="#"
              className=" underline cursor-pointer font-bold flex justify-between intersect:motion-preset-slide-right motion-delay-200"
            >
              <p></p>
              Read More
            </a>
          </div>
        </section>
      </div>
      {/* )} */}
    </>
  );
};

export default LandingPage;
