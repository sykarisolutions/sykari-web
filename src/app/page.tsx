import Image from "next/image";
import background from "@/assets/background.png"; 
import logo from "@/assets/logo-with-name.png";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-20 font-sans text-gray-900 bg-repeat"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "100px 100px",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <main className="flex flex-col items-center max-w-xl text-center bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-xl w-full mx-auto">
        {/* Logo */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 mb-6 sm:mb-1 mx-auto">
          <Image
            src={logo}
            alt="Sykari Solutions Logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>


        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-md text-gray-700 leading-relaxed">
          Elegant software solutions crafted with precision. Coming soon to{" "}
          <span className="font-semibold underline decoration-[#638692]">
            Sykari.com
          </span>
          .
        </p>

        {/* Contact CTA */}
        <a
          href="mailto:sykarisolutions@gmail.com"
          className="inline-block bg-[#638692] hover:bg-[#2F3E57] text-white text-base sm:text-lg font-medium rounded-full px-6 py-3 sm:px-8 sm:py-4 transition shadow-lg"
          aria-label="Email Sykari Solutions"
        >
          Contact Us
        </a>
      </main>

      {/* Footer */}
      <footer className="mt-16 sm:mt-20 text-sm text-gray-700 select-none px-4 text-center">
        &copy; {new Date().getFullYear()} Sykari Solutions LLC. All rights reserved.
      </footer>
    </div>
  );
}
