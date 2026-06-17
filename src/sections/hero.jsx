import HeroBg from '../assets/Background.svg'

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src={HeroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover -z-10"
      />

      <div className="container-custom min-h-screen flex flex-col items-center justify-center text-center max-w-4xl">
        <h1 className="hero-title">
          RemoteRecruit's Difference
        </h1>

        <p className="hero-description mt-6">
          RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no paywalls, no fees, and no barriers, there's nothing but you, your talents, and the next step in your career.
        </p>
      </div>
    </section>
  );
};

export default Hero;