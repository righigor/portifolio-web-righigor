import { motion, MotionProps } from "framer-motion";
import { ListItem } from "@/types/Services";

interface InfoListProps {
  items: ListItem[];
  refIntro: React.Ref<any>;
  controlsIntro: MotionProps["animate"];
}

const ListInfo = ({ items, refIntro, controlsIntro }: InfoListProps) => {
  return (
    <div className="px-4" ref={refIntro}>
      <ol className="list-decimal flex flex-col space-y-4">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={controlsIntro}
            transition={{ duration: 1, delay: 0.5 * index }}
            className="text-lg font-semibold"
          >
            {item.title}
            <ul className="list-disc pl-6 mt-2">
              {item.items.map((subItem, subIndex) => (
                <motion.li
                  key={subIndex}
                  initial={{ opacity: 0, y: 100 }}
                  animate={controlsIntro}
                  transition={{
                    duration: 1,
                    delay: 0.5 * (index + subIndex + 1),
                  }}
                  className="font-normal text-base"
                >
                  {subItem}
                </motion.li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </div>
  );
};

export default ListInfo;
