import axios from "axios";
import { useEffect, useState } from "react";

const Maps = () => {
  const [mapsData, setMapsData] = useState([]);
  console.log(mapsData);
  const getMaps = async () => {
    try {
      const { data } = await axios(
        `https://valorant-api.com/v1/maps?language=tr-TR`
      );
      setMapsData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMaps();
  }, []);

  return <div className="min-h-screen">
     <div className="my-5 flex flex-col gap-5">
        <h1 className="text-2xl text-center font-bold dark:text-white">Haritalar</h1>

        <div className="flex flex-wrap justify-center items-center gap-5">
          {mapsData?.map((item, index) => (
            <div
              className="w-[320px] h-[320px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center gap-1 justify-between"
              key={index}
            >
              <div className="flex justify-center items-center w-[300px] h-[300px] m-2  object-fill">
                <img
                
                  className="rounded-t-lg w-full h-full object-cover"
                  src={item?.splash}
                  alt={item?.displayName}
                />
              </div>

              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight whitespace-pre-line text-gray-900 dark:text-white">
                {item?.displayName}
              </h5>
            </div>
          ))}
        </div>
      </div>
    
  </div>;
};

export default Maps;
