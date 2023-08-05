import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const WeaponsDetails = () => {
  const [weaponsDetails, setWeaponsDetails] = useState([]);
  console.log(weaponsDetails)
  const { id } = useParams;
  console.log(id)

  const getWeaponsDetailData = async (weaponsId) => {
    try {
      const { data } = await axios(
        `https://valorant-api.com/v1/weapons/${weaponsId}?language=tr-TR`
      );
      setWeaponsDetails(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeaponsDetailData(id)
    
  }, [])
  
  return (
    <div
      className="min-h-screen grid place-items-center font-mono dark:bg-gray-700 bg-gray-100 text-center"
    //   key={id}
    >
      <div className="bg-white rounded-md dark:bg-gray-800 shadow-lg">
        <div className="md:flex px-4 leading-none max-w-4xl">
          <div className="flex justify-center md:flex-none  ">
            <img
              src=""
              alt="pic"
              className="h-full w-80 rounded-md transform -translate-y-4 border-4 bg-white dark:border-gray-300 border-gray-500 shadow-lg"
            />
          </div>
          <div className="flex-col dark:text-gray-300">
            <p className="pt-4 text-2xl font-bold">detailsData?.displayName</p>
            <hr className="hr-text" />
            <div className="text-md flex justify-between px-4 my-2">
              <span className="font-bold">detailsData?.description</span>
            </div>
            <h2 className="my-4 text-center text-xl font-bold">YETENEKLER</h2>
            <div className="flex flex-col gap-3 text-md px-4 my-2">
              {/* {detailsData?.abilities?.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h2 className="font-bold">{item?.displayName}</h2>
                <p>{item?.description}</p>
              </div>
            ))} */}
            </div>
          </div>
        </div>
        <div className="w-full p-3 text-end">
          <Link
            to="/"
            className="uppercase bg-blue-700 text-white p-2 rounded-lg"
          >
            ◀ Home Sayfası
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeaponsDetails;
