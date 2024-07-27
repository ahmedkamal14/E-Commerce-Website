const Collections = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container cl:px-28 px-4 pb-8">
      <div className="h-[580px] flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">
          <img src="./images/Zara.png" alt="" />
          <p className="capitalize text-white text-lg my-8 md:w-2/3 leading-[32px]">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <button className="bg-white text-black px-6 py-3 font-semibold rounded-md">
            See Collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
