import logo from "../assets/Logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaSnapchatGhost,
} from "react-icons/fa";
import footerLogo from "../assets/footerLgog.png";

import Pricingcard from "../ui/pricing-card";
import footerBg from "../assets/footerB.png";

const socialIcons = [
  { icon: <FaFacebookF size={14} /> },
  { icon: <FaInstagram size={14} /> },
  { icon: <FaTwitter size={14} /> },
  { icon: <FaLinkedinIn size={14} /> },
  { icon: <FaSnapchatGhost size={14} /> },
];

const Footer = () => {
  return (
    <section className="relative  bg-white pt-10 bottom-0 ">
      <h1 className="text-[32px] text-black font-bold text-center mb-10">
        Help Is One Click Away
      </h1>

      {/* Pricing cards */}
      <div className="absolute w-full flex items-center justify-center text-center">
        <Pricingcard />
      </div>

      {/* Footer with bg image */}
      <div
        className="w-full z-0 relative"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "600px",
        }}
      >
        <div className="absolute  w-full px-12 flex justify-between  bottom-40">
          <img src={logo} alt="RemoteRecruit" className="h-10" />
          <div className="flex items-center gap-3 ">
            {socialIcons.map((social, index) => (
              <button
                key={index}
                className="w-8 h-8 rounded-full bg-blue-700/60 hover:bg-blue-700 flex items-center justify-center text-white transition-colors"
              >
                {social.icon}
              </button>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 w-full  border-t border-white/8 py-6 flex justify-center">
          <img src={footerLogo} alt="footerlogo" className="" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
