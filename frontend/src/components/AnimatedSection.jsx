import { motion } from 'framer-motion';

function AnimatedSection({ children, className = '' }) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;
