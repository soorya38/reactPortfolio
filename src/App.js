import { motion,useScroll,useSpring } from "framer-motion";
import Page from "./Page";
import "./index.css";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {[0, 1, 2].map((i, index) => (
        <Page key={index} id={i} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
