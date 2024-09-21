import LoadingBanner, {
  Props as LoadingProps,
} from "@/components/ui/loading-banner";
import { motion } from "framer-motion";

interface Props extends LoadingProps {}

const initPage = (props: Props) => {
  return (
    <motion.div
      key="initPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.75 } }}
      exit={{
        // TODO edit exit animation
        opacity: 0,
        transition: { duration: 2.5, delay: 2.5 },
      }}
      className="bg-cover bg-center w-full h-screen"
      style={{ backgroundImage: `url('bg1.webp')` }}
    >
      <LoadingBanner {...props} />
    </motion.div>
  );
};

export default initPage;
