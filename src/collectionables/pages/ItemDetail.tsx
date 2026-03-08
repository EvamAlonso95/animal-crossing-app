import { useParams } from "react-router";
import { useFossilInfo } from "../hooks/useFossilInfo";

export const ItemDetail = () => {
  const { fossilname } = useParams<{ fossilname: string }>();

  const { data: fossilData } = useFossilInfo(fossilname ?? "");

  console.log({ fossilData });

  // Meses para la disponibilidad (abreviados)
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  // Otros peces salados (ejemplo — reemplaza con tus datos reales)
  const otherSaltwaterFish = [
    {
      id: 1,
      name: "Sea Bass",
      price: "400 Bells",
      img: "https://images.unsplash.com/photo-1514438147141-e4d35b63f1e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
    },
    {
      id: 2,
      name: "Mackerel",
      price: "150 Bells",
      img: "https://images.unsplash.com/photo-1598929598330-d5a46c26a27c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
    },
    {
      id: 3,
      name: "Butterfly Fish",
      price: "1,000 Bells",
      img: "https://images.unsplash.com/photo-1579546929657-6a926e7cb491?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
    },
    {
      id: 4,
      name: "Carp",
      price: "300 Bells",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
    },
    {
      id: 5,
      name: "Zebra Turkeyfish",
      price: "500 Bells",
      img: "https://images.unsplash.com/photo-1514438147141-e4d35b63f1e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
    },
    {
      id: 6,
      name: "Puffer Fish",
      price: "250 Bells",
      img: "https://images.unsplash.com/photo-1598929598330-d5a46c26a27c?ixlib=rb-40.3&auto=format&fit=crop&w=200&q=60",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-gray-50 min-h-screen pb-8">
      {/* Header */}
      <div className="bg-white px-4 py-5 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              Saltwater
            </span>
            <h1 className="text-2xl font-bold text-gray-900">Red Snapper</h1>
          </div>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>
        <p className="mt-2 text-gray-600 max-w-2xl">
          A common but valuable saltwater fish known for its vibrant red scales
          and delicate flavor. Found year-round in the deep blue sea.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 mt-6">
        {/* Left Column: Image + Action */}
        <div className="lg:col-span-1">
          <div className="bg-green-50 rounded-2xl p-4 flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1514438147141-e4d35b63f1e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Red Snapper"
              className="w-full max-w-[280px] h-auto rounded-xl shadow-sm"
            />
            <button className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-xl flex items-center justify-center transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" />
              </svg>
              Add to Collection
            </button>
          </div>
        </div>

        {/* Right Column: Info Cards */}
        <div className="lg:col-span-2 space-y-6">
          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V11a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-green-600 uppercase tracking-wide">
                    Price
                  </p>
                  <p className="font-bold text-lg">3,000 Bells</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-700"
                    viewBox="0 0 220"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.8l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-green-600 uppercase tracking-wide">
                    Location
                  </p>
                  <p className="font-bold text-lg">Sea</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L10.586 10.586l-2.121 2.121a1 1 0 001.414 1.414l2.829-2.829V7.586z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-green-600 uppercase tracking-wide">
                    Shadow
                  </p>
                  <p className="font-bold text-lg">Medium</p>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Availability */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="font-semibold text-gray-800">
                Monthly Availability (Northern Hemisphere)
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {months.map((month) => (
                <span
                  key={month}
                  className="px-3 py-1.5 bg-green-100 text-green-800 text-xs font-medium rounded-full"
                >
                  {month}
                </span>
              ))}
            </div>
          </div>

          {/* Daily Active Hours */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 mr-2"
                viewBox=" 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L10.586 10.586l-2.121 2.121a1 1 0 001.414 1.414l2.829-2.829V7.586z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="font-semibold text-gray-800">
                Daily Active Hours
              </h3>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>12 AM</span>
                <span>6 AM</span>
                <span>12 PM</span>
                <span>6 PM</span>
                <span>12 AM</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full"></div>
              </div>
              <p className="mt-2 text-center font-medium text-green-700">
                ACTIVE ALL DAY
              </p>
            </div>
          </div>

          {/* Blathers’ Fact */}
          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5 mr-3">
                <div className="bg-green-500 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 00-.894.553L7.382 12H4a1 1 0 000 2v1a1 1 0 001 1h3.822l.714 2.143A1 1 0 0010.894 17H11a1 1 0 001-1v-1a1 1 0 00-.894-.993L10.382 12H14a1 1 0 000-2H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-green-800 uppercase tracking-wide mb-2">
                  Blathers’ Fact
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "The red snapper is a truly elegant specimen! Its brilliant
                  crimson scales are enough to dazzle anyone. But did you know,
                  ehwoi? Despite their stunning looks, they are quite the hardy
                  fish, thriving deep within the ocean depths. A treasure of the
                  sea, I say!"
                </p>
              </div>
            </div>
          </div>

          {/* Other Saltwater Fish */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-gray-900">Other Saltwater Fish</h3>
              <button className="text-green-600 text-sm font-medium hover:text-green-700 flex items-center">
                View All
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className=" grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {otherSaltwaterFish.map((fish) => (
                <div
                  key={fish.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <img
                      src={fish.img}
                      alt={fish.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <p className="font-medium text-gray-800 text-sm truncate">
                      {fish.name}
                    </p>
                    <p className="text-xs text-gray-500">{fish.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer spacer */}
      <div className="h-8"></div>
    </div>
  );
};
