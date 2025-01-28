import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";

type EventCardProps = {
  item: {
    id: number;
    title: string;
    subtitle: string;
    context: string;
    picturePath: string;
  };
  setSelectedId: (id: number | null) => void;
};

const EventCard: React.FC<EventCardProps> = ({ item, setSelectedId }) => {
  const { title, subtitle, context, picturePath } = item;

  return (
    <>
      <motion.div
        className="fixed inset-0 z-40 flex items-center justify-center p-3 md:p-20 pointer-events-none"
        key="modal"
      >
        <motion.div
          className="relative overflow-hidden w-full max-w-[500px] min-h-[80vh] max-h-[90vh] bg-white shadow-lg pointer-events-auto will-change-transform rounded-3xl "
          layoutId={item.id.toString()}
        >
          <div
            className="h-[250px] bg-cover"
            style={{ backgroundImage: `url(${picturePath})` }}
          />
          <div className="p-2 flex flex-col justify-between h-[40vh]">
            <div className="">
              <div className="text-3xl mb-3">{title}</div>
              <div className="text-xl">{subtitle}</div>
              <div className="p-6">{context}</div>
            </div>
            <div className="  ">
              <div className="text-2xl">Csatlakoznál? </div>
              <div className="text-lg">www.randomlink12341213.com</div>
            </div>
          </div>
          <motion.button
            className="absolute top-0 right-0 mt-4 mr-4 p-2 cursor-pointer rounded-full"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              whileHover={{
                opacity: 1,
                rotate: 90,
              }}
              initial={{ opacity: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth and faster transitions
              className="absolute top-4 right-4 cursor-pointer w-fit  bg-gray-100 rounded-3xl p-1 flex justify-center items-center"
            >
              <RxCross1 />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default EventCard;
