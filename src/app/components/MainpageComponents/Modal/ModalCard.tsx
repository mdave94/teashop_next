import { useState } from "react";
import { motion } from "framer-motion";
import { GalleryItem, PackagePrice } from "@/app/Helpers/galleryItemHelper";
import { RxCross1 } from "react-icons/rx";

type ModalCardProps = {
  GalleryItem: GalleryItem;
  closeModal: () => void;
};

const ModalCard: React.FC<ModalCardProps> = ({ GalleryItem, closeModal }) => {
  const basePrice = GalleryItem.packagePrices[0].price;
  const [price, setPrice] = useState<string>(basePrice);
  const [selectedPacking, setSelectedPacking] = useState<string>("50 g"); // State to track selected packing

  const handleSetPrice = (item: PackagePrice) => {
    setPrice(item.price);
    setSelectedPacking(item.package); // Update selected packing state
  };

  return (
    <>
      <div className="min-w-[80%] absolute flex justify-center flex-col items-center">
        <div
          style={{ backgroundImage: `url(${GalleryItem.picturePath})` }}
          className=" bg-cover rounded-t-3xl w-full h-[200px] flex justify-center items-center"
        >
          <motion.div
            onClick={closeModal}
            whileHover={{
              opacity: 1,
              rotate: 90,
              color: "black",
            }}
            initial={{ opacity: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth and faster transitions
            className="absolute top-4 right-4
             cursor-pointer w-fit hover:text-white bg-gray-100 rounded-3xl p-1 flex justify-center items-center"
          >
            <RxCross1 />
          </motion.div>
        </div>
        <div className="bg-white rounded-b-3xl w-full p-4">
          <div className="my-5 text-4xl">{GalleryItem.name}</div>
          <div className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
            volutpat ligula. Vivamus fringilla, dolor ut accumsan cursus, sapien
            ipsum ultricies nibh, ut malesuada velit nulla vel risus. Donec quis
            feugiat ante, ut maximus neque. Curabitur vitae pulvinar sapien.
            Etiam lobortis sollicitudin lacus interngilla.
          </div>
          <div className="border-t-2 pt-5 text-xl mt-5">Kiszerelés</div>
          <div className="flex justify-center">
            <div className="flex mt-5 items-center text-center justify-between">
              {GalleryItem.packagePrices.map((item) => (
                <div
                  onClick={() => handleSetPrice(item)}
                  key={item.package}
                  className={`md:w-[7rem] rounded-3xl hover:bg-green-200 p-1 cursor-pointer mx-4 ${
                    selectedPacking === item.package
                      ? "bg-green-200"
                      : " bg-green-100" // Default background for unselected items
                  }`}
                >
                  {item.package}
                </div>
              ))}
            </div>
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
            className="flex justify-center mt-6"
          >
            <div className="bg-green-500 mb-3 p-2 rounded-3xl text-white">
              {price}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ModalCard;
