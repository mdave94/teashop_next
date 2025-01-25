import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";

type EventCardProps = {
  setSelectedId: (id: number | null) => void;
  item: {
    id: number;
    title: string;
    subtitle: string;
    context: string;
  };
};

const EventCard: React.FC<EventCardProps> = ({ item, setSelectedId }) => {
  return (
    <>
      <motion.div
        className="z-10 top-0   left-0 flex w-full h-full place-content-center place-items-center pointer-events-none p-20 fixed"
        key="modal"
      >
        <motion.div
          className="relative overflow-hidden  w-full h-full bg-white shadow-lg border border-gray-300 pointer-events-auto will-change-transform p-6 rounded-xl flex-1"
          layoutId={item.id.toString()}
        >
          {item.context}
          <motion.button
            className="absolute top-0 right-0 mt-4 mr-4 p-2 cursor-pointer  rounded-full"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
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
          </motion.button>
        </motion.div>
        <motion.div
          key="backdrop"
          className="absolute modal top-0 z-10 left-0 w-full h-full  cursor-pointer"
          onClick={() => setSelectedId(null)}
          variants={{
            hidden: {
              opacity: 0,
              transition: {
                duration: 0.16,
              },
            },
            visible: {
              opacity: 0.8,
              transition: {
                delay: 0.04,
              },
            },
          }}
        ></motion.div>
      </motion.div>
    </>
  );
};

export default EventCard;
