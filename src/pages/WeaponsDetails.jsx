import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation} from "react-router-dom";

const WeaponsDetails = () => {
  const [weaponsDetails, setWeaponsDetails] = useState([]);
  console.log(weaponsDetails);
  const { state: uuid } = useLocation();
  const getWeaponsDetailData = async (weaponsId) => {
    try {
      const { data } = await axios(
        `https://valorant-api.com/v1/weapons/${weaponsId}?language=tr-TR`
      );
      setWeaponsDetails(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeaponsDetailData(uuid);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center gap-5 pt-10 p-5  dark:bg-gray-700 bg-gray-100 text-center"
      // key={weaponsDetails?.uuid}
    >
      <div className="bg-white rounded-md dark:bg-gray-800 shadow-lg">
        <div className="md:flex px-4 leading-none ">
          <div className="flex justify-center md:flex-none  ">
            <img
              src={weaponsDetails?.displayIcon}
              alt="pic"
              className="h-full w-80 object-contain rounded-md transform -translate-y-4 border-4 bg-white dark:border-gray-300 border-gray-500 shadow-lg"
            />
          </div>
          <div className="flex-col md:m-10 dark:text-gray-300">
            <h1 className="pt-4 text-2xl font-bold">
              {weaponsDetails?.displayName}
            </h1>
            <hr className="hr-text" />
            <h2 className="my-4 text-center text-xl font-bold px-4 ">
              İstatistikleri
            </h2>
            <div className="flex flex-col gap-3 text-md px-4 my-2">
              <h2>Fire Rate: {weaponsDetails?.weaponStats?.fireRate}</h2>
              <h2>
                Head Damage:
                {weaponsDetails?.weaponStats?.damageRanges[0].headDamage}
              </h2>
              <h2>
                Body Damage:
                {weaponsDetails?.weaponStats?.damageRanges[0].bodyDamage}
              </h2>
              <h2>
                Leg Damage:
                {weaponsDetails?.weaponStats?.damageRanges[0].legDamage}
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full p-3 text-end">
          <Link
            to={-1}
            className="uppercase bg-blue-700 text-white p-2 font-mono rounded-lg"
          >
            ◀ Önceki Sayfa
          </Link>
        </div>
      </div>

      <div className="my-5 flex flex-col gap-5">
        <h1 className="text-2xl font-bold dark:text-white">Modeller</h1>

        <div className="flex flex-wrap justify-center items-center gap-5">
          {weaponsDetails?.skins?.map((item, index) => (
            <div
              className="bg-white border w-[300px] h-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center gap-1 justify-between"
              key={index}
            >
              <div className="flex rounded-t-lg justify-center items-center  m-2 ">
                <img
                  className="rounded-t-lg w-[300px] h-[250px] object-contain"
                  src={item?.displayIcon ||"https://www.2dsl.ru/wp-content/uploads/kak-ispravit-oshibku-404not-found-469152c.jpg" }
                  alt={item?.displayName}
                />
              </div>
              <div className="my-2">
                <h5 className="  text-center font-bold tracking-tight whitespace-pre-line text-gray-900 dark:text-white">
                  {item?.displayName}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeaponsDetails;
