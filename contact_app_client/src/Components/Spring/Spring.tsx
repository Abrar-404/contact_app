import '../Styles/spring.css';
import { useRef} from 'react';
import { useFollowPointer } from './useFollowPointer';
import { motion } from 'framer-motion';


export default function Spring() {

  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="box"
      animate={{ x, y }}
      transition={{
        type: 'spring',
        damping: 3,
        stiffness: 50,
        restDelta: 0.001,
      }}
    />
  );
}
