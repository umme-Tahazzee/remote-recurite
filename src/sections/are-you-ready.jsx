import { FaArrowRightLong } from 'react-icons/fa6';
import FindWork from '../assets/are-you-ready.png'

const AreYouReady = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[linear-gradient(132.56deg,#5799EB_5.63%,#9F74FB_106.18%)] opacity-10" />

      {/* Decorative Circles */}
      <div className="absolute -left-20 top-10 h-[321px] w-[321px] rounded-full bg-white opacity-30" />
      <div className="absolute right-[-150px] top-[-100px] h-[380px] w-[380px] rounded-full bg-white opacity-30" />
      <div className="absolute left-[300px] bottom-[-180px] h-[493px] w-[493px] rounded-full bg-white opacity-30" />
      <div className="absolute left-40 bottom-10 h-[87px] w-[87px] rounded-full bg-[#19CDB8]" />
      <div className="absolute right-40 bottom-24 h-[29px] w-[29px] rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)]" />
      <div className="absolute left-64 top-6 h-[53px] w-[53px] rounded-full bg-[linear-gradient(132.56deg,#FFED43_5.63%,#F29939_106.18%)]" />

      {/* Main Content */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-12 px-6">

        {/* Left Image Card */}
        <div className="relative">
          <div className="rounded-[40px] bg-white p-4 shadow-[15px_44px_108px_rgba(49,89,211,0.12)]">
            <div className="overflow-hidden rounded-[30px] bg-[#8E80FC]">
              <img
                src={FindWork}
                alt="Find Work"
                className="w-full max-w-[680px]"
              />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="max-w-xl">
          <p className="text-sm font-semibold tracking-widest text-[#1E3E85]">
            Are you ready?
          </p>

          <h2 className="mt-3 text-5xl font-semibold leading-tight text-[#11142D]">
            Help is only a few clicks away!
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-500">
            Connect with global opportunities and discover jobs
            that match your skills and experience.
          </p>

          <button className="mt-8 flex items-center gap-3 rounded-full bg-[#1E3E85]/90 px-6 py-3 text-white">
            <span className="flex items-center justify-center rounded-full bg-[#1E3E85] p-2">
              <FaArrowRightLong className="text-white" size={14} />
            </span>
            <span className="text-base font-medium">Get Started</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default AreYouReady;