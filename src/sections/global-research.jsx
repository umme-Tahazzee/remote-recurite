import findsWorkingImg from "../assets/global-search.png";
import premium from "../assets/premium.png";

const sections = [
  {
    badge: "Global Reach",
    title: "The First Fully Global Job Board, Anywhere, Ever",
    description:
      "RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.",
    image: findsWorkingImg,
    alt: "Global search illustration",
    reverse: false,
  },
  {
    badge: "Fee-Free Forever",
    title: "The First Fully Global Job Board, Anywhere, Ever",
    description:
      "We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved.",
    image: premium,
    alt: "Premium feature illustration",
    reverse: true,
  },
  {
    badge: "Custom Profile",
    title: "Showcase Your Talents",
    description:
      "Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.",
    image: premium,
    alt: "Custom profile illustration",
    reverse: false,
  },
];

const Section = ({ badge, title, description, image, alt, reverse }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto p-10 gap-x-30">
    <div className={`space-y-6 ${reverse ? "md:order-2" : ""}`}>
      <button className="bg-secondary-btn text-black text-sm px-2 py-1 rounded-full">
        {badge}
      </button>
      <h1 className="text-[40px] text-black font-semibold">{title}</h1>
      <p className="text-[19px] text-black/60">{description}</p>
    </div>

    <div className={reverse ? "md:order-1" : ""}>
      <img src={image} alt={alt} />
    </div>
  </div>
);

const Globalresearch = () => {
  return (
    <section className="bg-white w-full pt-10">
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </section>
  );
};

export default Globalresearch;