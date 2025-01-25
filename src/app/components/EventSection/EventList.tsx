import { useMemo, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import EventCard from "./EventCard";

interface ItemProps {
  id: number;
  title: string;
  subtitle: string;
  [key: string]: any;
}

const Item = ({ id, title, subtitle, ...props }: ItemProps) => (
  <motion.div
    className="p-8 bg-white cursor-pointer shadow-md  border border-gray-200 rounded-xl"
    key={id}
    layoutId={id.toString()}
    {...props}
  >
    <span>{subtitle}</span>
    <h2>{title}</h2>
  </motion.div>
);

const EventList = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = useMemo(
    () => [
      {
        id: 1,
        title: "Item 1",
        subtitle: "Subtitle 1",
        context: "CONTEXT 1",
      },
      {
        id: 2,
        title: "Item 2",
        subtitle: "Subtitle 2",
        context: "CONTEXT 2",
      },
      {
        id: 3,
        title: "Item 3",
        subtitle: "Subtitle 3",
        context:
          "Lconsectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero",
      },
      {
        id: 4,
        title: "Item 4",
        subtitle: "Subtitle 4",
        context:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, sapien sit amet ultricies viverra, nunc libero",
      },
    ],
    []
  );

  return (
    <LayoutGroup>
      <ul className="max-w-[1200px] m-0 grid grid-cols-6 grid-rows-2 gap-4 list-none p-24">
        {items.map((item) => (
          <li
            key={item.id}
            className={`${
              item.id === 1
                ? "col-span-2 row-span-1"
                : item.id === 2 || item.id === 3
                ? "col-span-4 row-span-1"
                : "col-span-2 row-span-1"
            }`}
            onClick={() => setSelectedId(item.id)}
          >
            <Item {...item} />
          </li>
        ))}
      </ul>
      <AnimatePresence>
        {selectedId && (
          <EventCard
            key={items[selectedId - 1].id}
            item={items[selectedId - 1]}
            setSelectedId={setSelectedId}
          />
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};
export default EventList;
