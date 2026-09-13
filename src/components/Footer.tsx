export default function Footer() {
  return (
    <footer className=" bg-[#FFFFFF] p-10 mt-16 px-6 py-12 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left 6 columns */}
        <div className="flex flex-col gap-4">
          <img src="/logo-text.png" alt="Logo" className="w-fit" />

          <h4 className="max-w-md text-sm leading-6">
            Curated tools, resources for developers and building modern
            technologies.
          </h4>

          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="">Github</a>
            </li>

            <li>
              <a href="">Twitter</a>
            </li>

            <li>
              <a href="">LinkedIn</a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="mb-4 font-bold text-black"> Product </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Technologies</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-black"> Company </h3>{" "}
            <ul className="flex flex-col gap-3">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-black"> Legal </h3>{" "}
            <ul className="flex flex-col gap-3">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="my-10 border-t border-gray-200"></div>
      <div className="text-center text-sm text-gray-500">
        {" "}
        © 2026 Dev Stack. All rights reserved.
      </div>
    </footer>
  );
}
