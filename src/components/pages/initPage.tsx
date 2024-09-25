import LoadingBanner, {
  Props as LoadingProps,
} from "@/components/ui/loading-banner";
import { motion } from "framer-motion";

interface Props extends LoadingProps {}
// TODO: to be edited after 3js background is implemented
const initPage = (props: Props) => {
  return (
    <motion.div
      key="initPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.75, transition: { duration: 1.25 } }}
      exit={{
        opacity: 0,
        transition: { duration: 0.45, delay: 2.5 },
      }}
      className="bg-cover bg-center w-full h-screen"
      style={{ backgroundImage: `url('1.webp')` }}
    >
      <LoadingBanner {...props} />
    </motion.div>
  );
};

export default initPage;
