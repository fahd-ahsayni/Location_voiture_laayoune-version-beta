import React, { useEffect, useState } from "react";
import CardCategorie from "./global/CardCategorie";
import { categoriesData } from "../data";
import sanityClient from "../client";

const CategoriesSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await sanityClient.fetch(`*[_type == "cars"]{
      id,
      slug,
      title,
      price,
      seats, bags, doors,
      "image": image.asset->url
    }`);
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-primary-dark pt-8 pb-8 md:pb-24 relative">
      <div className="flex flex-col justify-center items-center mb-24 px-8">
        <h2 className="text-lg font-semibold text-primary">Catégories</h2>
        <p className="mt-2 text-3xl font-bold capitalize tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl text-center">
          location de voiture laayoune catégories de véhicule
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500 dark:text-gray-300 text-center">
          vous pouvez être sûr que vous bénéficierez d'un service de qualité
          supérieure et d'un véhicule en parfait état pour votre voyage.
        </p>
      </div>
      <ul
        role="list"
        className="grid lg:mb-52 mb-24 max-w-7xl px-4 mx-auto grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {data &&
          data.map((car) => (
            <CardCategorie
              key={car.title}
              fetchData={car}
              price={car.price}
              image={car.image}
              title={car.title}
              seats={car.seats}
              bags={car.bags}
              alt={car.slug.current}
              doors={car.doors}
              id={car.id}
            />
          ))}
      </ul>
      <svg
        className="absolute w-screen bottom-0 left-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          className="fill-white dark:fill-[#0a0c0f]"
          fillOpacity="1"
          d="M0,128L60,117.3C120,107,240,85,360,85.3C480,85,600,107,720,138.7C840,171,960,213,1080,218.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default CategoriesSection;
