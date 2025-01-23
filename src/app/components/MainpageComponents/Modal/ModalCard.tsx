import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
type ModalCardProps = {
  CardPicture: string;
  CardText: string;
};

const prices = [
  {
    packing: "30 g",
    price: "3000 Ft",
  },
  {
    packing: "50 g",
    price: "5000 Ft",
  },
  {
    packing: "100 g",
    price: "10000 Ft",
  },
];
const transition = {
  duration: 0.8,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};

const ModalCard: React.FC<ModalCardProps> = ({ CardPicture, CardText }) => {
  const basePrice = "5000 Ft";
  const [price, setPrice] = useState<string>(basePrice);

  const handleSetPrice = (item: any) => {
    setPrice(item.price);
  };

  return (
    <>
      <div className="w-[500px]   absolute flex justify-center flex-col items-center">
        <div className=" rounded-t-3xl w-full h-[150px] flex justify-center items-center">
          <Image
            alt="card picture"
            src="/images/HeroPicture.jpg"
            width={500}
            height={100}
            className="rounded-t-3xl"
          />
        </div>
        <div className="bg-white rounded-b-3xl w-full Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut volutpat ligula. Vivamus fringilla, dolor ut accumsan cursus, sapien ipsum ultricies nibh, ut malesuada velit nulla vel risus. Donec quis feugiat ante, ut maximus neque. Curabitur vitae pulvinar sapien. Etiam lobortis sollicitudin lacus interdum placerat. Quisque ante libero, dictum et eros ac, feugiat faucibus urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer mi magna, lacinia in tortor vel, varius malesuada ante. Phasellus pretium congue massa. Curabitur nec orci eu erat lobortis aliquam at et lorem">
          <div className="ml-8 mt-5  text-2xl">{CardText}</div>
          <div className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
            volutpat ligula. Vivamus fringilla, dolor ut accumsan cursus, sapien
            ipsum ultricies nibh, ut malesuada velit nulla vel risus. Donec quis
            feugiat ante, ut maximus neque. Curabitur vitae pulvinar sapien.
            Etiam lobortis sollicitudin lacus interngilla, dolor ut accumsan
            cursus, sapien ipsum ultricies nibh, ut malesuada velit nulla vel
            risus. Donec quis feugiat ante, ut maximus neque. Curabitur vitae
            pulvinar sapien. Etiam lobortis sollicitudin lacus interdum
            placerat.
          </div>
          <div className="">Kiszerelés</div>
          <div className="flex  items-center  text-center justify-between ">
            {prices.map((item) => (
              <div
                onClick={() => handleSetPrice(item)}
                key={item.packing}
                className="hover:bg-blue-600 border-2 rounded-3xl w-14 hover:rounded-3xl p-1 cursor-pointer mx-4 "
              >
                {item.packing}
              </div>
            ))}
          </div>
          <motion.div
            key={price}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex justify-center mt-6 "
          >
            <div className="bg-green-500 mb-3 p-2 rounded-3xl text-white  ">
              {price}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ModalCard;
