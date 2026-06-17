import findsWorkingImg from '../assets/finds-work.png'

const Globalresearch = () => {
  return (
    <section className="bg-white w-full h-screen pt-10 ">
      <div className="grid grid-cols-2  max-w-7xl mx-auto p-10 gap-20">
        <div className="space-y-6">
          <button className="bg-secondary-btn text-black text-sm px-2 py-1 rounded-full">
            Global Reach
          </button>
          <h1 className="text-[40px] text-black font-semibold ">
            The First Fully Global Job Board, Anywhere, Ever
          </h1>
          <p className="text-[19px] text-black/60  ">
            RemoteRecruit connects candidates with opportunities around the
            world. With today’s remote-first workforce, you need to be able to
            find the best jobs and the best people for them, wherever they may
            be.
          </p>
        </div>

        <div className=' bg-card rounded-xl p-5 flex flex-col items-center' >
              <img src={findsWorkingImg} alt="findsWorkingImg" className="" />
        </div>
      </div>
    </section>
  );
};

export default Globalresearch;
