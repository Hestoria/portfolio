import LoadingBanner, {
  Props as LoadingProps,
} from "@/components/ui/loading-banner";
import { motion } from "framer-motion";

interface Props extends LoadingProps { }

const initPage = (props: Props) => {
  return (
    <motion.div
      key="initPage"
      exit={{
        // TODO edit exit animation
        transition: { duration: 2.5, delay: 2.5 },
      }}
      className="bg-cover bg-center w-full h-screen"
    // style={{ backgroundImage: `url('bg2.jpg')` }}
    >
      <LoadingBanner {...props} />
    </motion.div>
  );
};

export default initPage;
