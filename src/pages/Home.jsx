import axios from "axios";
import { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";

const Home = () => {
  const [agentsData, setAgentsData] = useState([]);
  const [search, setSearch] = useState("");

  console.log(agentsData);

  const getAgentsData = async () => {
    try {
      const { data } = await axios(
        `https://valorant-api.com/v1/agents?language=tr-TR&isPlayableCharacter=true`
      );
      setAgentsData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAgentsData();
  }, []);

  return (
    <div className="flex flex-col justify-center ">
      <div className="w-full flex justify-center items-center ">
        <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/3">
          <form>
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5 p-5">
        {agentsData
          .filter((item) =>
            item.displayName.toLowerCase().includes(search.trim().toLowerCase())
          )
          .map((item, index) => (
            <HomeCard {...item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Home;
