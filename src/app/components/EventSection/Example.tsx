import { useMemo, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";

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

export default function Example() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = useMemo(
    () => [
      { id: 1, title: "Item 1", subtitle: "Subtitle 1" },
      { id: 2, title: "Item 2", subtitle: "Subtitle 2" },
      { id: 3, title: "Item 3", subtitle: "Subtitle 3" },
      { id: 4, title: "Item 4", subtitle: "Subtitle 4" },
    ],
    []
  );

  return (
    <LayoutGroup>
      <ul className="w-full m-0 grid grid-cols-6 grid-rows-2 gap-4 list-none p-24">
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
          <motion.div
            className="z-10 top-0   left-0 flex w-full h-full place-content-center place-items-center pointer-events-none p-20 fixed"
            key="modal"
          >
            <motion.div
              className="relative overflow-hidden  w-full h-full bg-white shadow-lg border border-gray-300 pointer-events-auto will-change-transform p-6 rounded-xl flex-1"
              layoutId={selectedId?.toString()}
            >
              Hello World
              <motion.button
                className="absolute top-0 right-0 mt-4 mr-4 p-2 cursor-pointer bg-gray-100 rounded-full"
                onClick={() => setSelectedId(null)}
              ></motion.button>
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
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
