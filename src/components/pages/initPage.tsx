import { motion } from "framer-motion"
import LoadingBanner, { Props as LoadingProps } from "@/components/ui/loading-banner"

interface Props extends LoadingProps { };

const initPage = (props: Props) => {
  return (
    <motion.div
      key="initPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      exit={{ opacity: 0.25, transition: { duration: 1.5 } }}
      className="bg-cover bg-center w-full h-screen"
      style={{ backgroundImage: `url('bg2.jpg')` }}
    >
      <LoadingBanner
        {...props}
      />
    </motion.div>
  )
}

export default initPage;
