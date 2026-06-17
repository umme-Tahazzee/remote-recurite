import logo from "../assets/Logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaSnapchatGhost,
} from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";

const freeFeatures = [
  { text: "1 Active Job", active: true },
  { text: "Basic List Placement", active: true },
  { text: "Unlimited Job Applicants", active: false },
  { text: "Invite Anyone to Apply to Your Jobs", active: false },
];

const premiumFeatures = [
  "Unlimited Job Posts",
  "Instant Job Post Approval",
  "Premium List Placement",
  "Unlimited Job Applicants",
];

const socialIcons = [
  { icon: <FaFacebookF size={14} /> },
  { icon: <FaInstagram size={14} /> },
  { icon: <FaTwitter size={14} /> },
  { icon: <FaLinkedinIn size={14} /> },
  { icon: <FaSnapchatGhost size={14} /> },
];

const Footer = () => {
  return (
    <section className="relative bg-white pt-10 overflow-hidden">
      <h1 className="text-[32px] text-black font-bold text-center mb-10">
        Help Is One Click Away
      </h1>

      {/* Pricing cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6 px-6 pb-32">
        {/* Free card */}
        <div className="bg-white rounded-2xl shadow-md p-4 flex gap-4">
          <div className="bg-blue-50 rounded-xl flex flex-col items-center justify-center px-6 py-4 w-32">
            <span className="text-2xl font-bold text-gray-700">Free</span>
            <span className="text-gray-400 text-sm">Basic</span>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <ul className="space-y-3">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  {feature.active ? (
                    <HiCheckCircle className="text-blue-500" size={16} />
                  ) : (
                    <IoCloseCircleOutline className="text-gray-300" size={16} />
                  )}
                  <span
                    className={feature.active ? "text-gray-700" : "text-gray-300"}
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <button className="mt-4 border border-blue-100 text-blue-600 font-semibold text-sm py-2 rounded-full hover:bg-blue-50 transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* Premium card */}
        <div className="bg-white rounded-2xl shadow-md p-4 flex gap-4">
          <div className="bg-blue-500 rounded-xl flex flex-col items-center justify-center px-6 py-4 w-32 relative">
            <span className="absolute top-2 left-1/2 -translate-x-1/2 bg-blue-100 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap">
              ⚡ Premium
            </span>
            <span className="text-2xl font-bold text-white mt-4">$79.99</span>
            <span className="text-blue-100 text-sm">Per Month</span>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <ul className="space-y-3">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <HiCheckCircle className="text-blue-500" size={16} />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="mt-4 bg-gradient-to-b from-blue-500 to-blue-800 text-white font-semibold text-sm py-2 rounded-full hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Wave shape */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
        >
          <path
            d="M0,80 C360,160 1080,0 1440,80 L1440,150 L0,150 Z"
            fill="#1e3a8a"
          />
        </svg>
      </div>

      {/* Footer (blue area) */}
      <div className="bg-blue-900 relative">
        <div className="max-w-7xl mx-auto px-10 py-10 flex items-center justify-between flex-wrap gap-6">
          <img src={logo} alt="RemoteRecruit" className="h-10" />

          <div className="flex items-center gap-3">
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

        <div className="border-t border-white/10 py-6 flex justify-center">
          <span className="text-white/70 font-bold text-lg">RR</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;