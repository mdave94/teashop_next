import { useMemo, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import EventCard from "./EventCard";
import Pagination from "../ui/svg/Pagination";

interface ItemProps {
  id: number;
  title: string;
  picturePath: string;
  subtitle: string;
}

const Item = ({ id, picturePath, title, subtitle, ...props }: ItemProps) => (
  <motion.div
    className="p-8 bg-cover min-h-[250px]  bg-white cursor-pointer shadow-md  border border-gray-200 rounded-xl"
    key={id}
    style={{ backgroundImage: `url(${picturePath})` }}
    layoutId={id.toString()}
    {...props}
  >
    <div className="text-white font-bold text-xl">{title}</div>
    <div className="text-white">{subtitle}</div>
  </motion.div>
);

const EventList = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const items = useMemo(
    () => [
      {
        id: 1,
        title: "Item 1",
        subtitle: "Subtitle 1",
        picturePath: "/images/HeroPicture.jpg",
        context: "CONTEXT 1",
      },
      {
        id: 2,
        title: "Item 2",
        subtitle: "Subtitle 2",
        picturePath: "/images/tea1.jpg",
        context: "CONTEXT 2",
      },
      {
        id: 3,
        title: "Item 3",
        subtitle: "Subtitle 3",
        picturePath: "/images/tea3.jpg",
        context:
          "Lconsectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero",
      },
      {
        id: 4,
        title: "Item 4",
        subtitle: "Subtitle 4",
        picturePath: "/images/HeroPicture.jpg",
        context:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero",
      },
      {
        id: 5,
        title: "Item 1",
        subtitle: "Subtitle 1",
        picturePath: "/images/HeroPicture.jpg",
        context: "CONTEXT 1",
      },
      {
        id: 6,
        title: "Item 2",
        subtitle: "Subtitle 2",
        picturePath: "/images/tea1.jpg",
        context: "CONTEXT 2",
      },
    ],
    []
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const getClassName = (index: number) => {
    const order = [
      "md:col-span-2 md:row-span-1 ",
      "md:col-span-4 md:row-span-1 ",
      "md:col-span-4 md:row-span-1 ",
      "md:col-span-2 md:row-span-1 ",
      "md:col-span-2 md:row-span-1 ",
      "md:col-span-4 md:row-span-1 ",
      "md:col-span-4 md:row-span-1 ",
      "md:col-span-2 md:row-span-1 ",
    ];
    return order[index % order.length];
  };

  return (
    <LayoutGroup>
      <div className="flex flex-col">
        <motion.ul
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.3,
            },
          }}
          transition={{ duration: 1 }}
          className="lg:w-[1200px] lg:min-w-full m-0  grid grid-cols-2 md:grid md:grid-cols-6 md:grid-rows-2 gap-4 list-none lg:p-24"
        >
          <AnimatePresence mode="wait">
            {currentItems.map((item, index) => (
              <motion.li
                key={item.id}
                className={`  ${getClassName(index)}`}
                onClick={() => setSelectedId(item.id)}
                initial={{ opacity: 0, y: 50 }} // Initial animation state
                animate={{ opacity: 1, y: 0 }} // Animate to this state
                exit={{ opacity: 0, y: -20 }} // Exit animation state
                transition={{ duration: 0.3 }} // Animation duration
              >
                <Item {...item} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
        <AnimatePresence>
          {selectedId && (
            <EventCard
              key={items[selectedId - 1].id}
              item={items[selectedId - 1]}
              setSelectedId={setSelectedId}
            />
          )}
        </AnimatePresence>
        {/* Use the Pagination component */}
        <Pagination
          currentPage={currentPage}
          totalItems={items.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </LayoutGroup>
  );
};

export default EventList;
