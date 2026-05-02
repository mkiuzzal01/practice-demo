import Container from "../shared/Container";
import hero from "@/public/assets/hero/hero.svg";
import Image from "next/image";
import topPhone from "@/public/assets/hero/top-ph.svg";
import bottomPhone from "@/public/assets/hero/bottom-ph.svg";

export default function Hero() {
  return (
    <section className="w-full py-16 md:py-24 overflow-hidden">
      <Container className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="title-primary text-3xl md:text-5xl lg:text-6xl">
            Developing Impressive <br /> mobile Applications <br /> Has Never
            Been Easier
          </h1>

          <p className="text-base md:text-lg lg:text-2xl text-gray-600 max-w-[600px] mx-auto lg:mx-0">
            Develop outstanding mobile platforms that can help you improve your
            customer experience and own 100% of your store&apos;s data.
          </p>

          <button className="primary-btn py-3 px-32">Start Here!</button>
        </div>

        {/* Right Images */}
        <div className="flex-1 flex justify-center">
          {/* Wrapper MUST be relative */}
          <div className="relative w-full max-w-[500px]">
            {/* Main Hero Image */}
            <Image src={hero} alt="Hero" priority className="w-full h-auto" />

            {/* Top Phone */}
            <Image
              src={topPhone}
              alt="Top Phone"
              className="absolute top-0 left-0 w-28 md:w-32 z-10"
            />

            {/* Bottom Phone */}
            <Image
              src={bottomPhone}
              alt="Bottom Phone"
              className="absolute bottom-0 right-0 w-28 md:w-32 z-10"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
