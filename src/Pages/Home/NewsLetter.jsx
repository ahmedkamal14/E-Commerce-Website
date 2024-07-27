import { Link } from "react-router-dom";

const NewsLetter = () => {
  const cards = [
    { id: 0, image: "./images/Cards/card1.png" },
    { id: 1, image: "./images/Cards/card2.png" },
    { id: 2, image: "./images/Cards/card3.png" },
    { id: 3, image: "./images/Cards/card4.png" },
    { id: 4, image: "./images/Cards/card5.png" },
    { id: 5, image: "./images/Cards/card6.png" },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto container cl:px-28 px-4 pb-8 text-center">
      <h2 className="title capitalize">
        Follow products and discounts on Instagram
      </h2>
      <div className="mt-10">
        {
          <div className="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-2 gap-4 mt-8">
            {cards.map((card) => (
              <div key={card.id}>
                <Link>
                  <img
                    src={card.image}
                    alt="card"
                    className="hover:scale-105 transition-all duration-300"
                  />
                </Link>
              </div>
            ))}
          </div>
        }
      </div>

      <div>
        <h2 className="title capitalize mt-20">
          Or subscribe to the newsletter
        </h2>
        <div className="flex justify-center mt-14">
          <input
            type="text"
            placeholder="Email Adreess..."
            className="border-b-2 bg-transparent border-black px-4 py-2 rounded-sm me-8 w-[40%]"
          />
          <button className="border-b-2 bg-transparent border-black px-4 py-2 rounded-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
