import { BiSolidArrowToTop } from "react-icons/bi";

const CopyRights = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      <div className="bg-black text-white text-center py-4">
        <div className="max-w-screen-2xl mx-auto container cl:px-28 px-4">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <div>
              <p className="text-white-600 text-base leading-7">
                {/* Copy Rights */}© 2024 All Rights Reserved. Designed by
                <span className="font-bold text-orange-600"> Ahmed Kamal</span>
              </p>
            </div>
            <div>
              <img src="./payment.png" alt="" />
            </div>
            <div>
              <button
                className="flex items-center justify-center"
                onClick={scrollToTop}
              >
                Scroll To Top <BiSolidArrowToTop className="ms-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRights;
