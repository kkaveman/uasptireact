import { motion } from "framer-motion";

const AccessibilityInfo = () => {
  return (
    <div className="py-6">
      <motion.h2
        className="text-lg md:text-3xl font-bold text-white dark:text-white"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Accessibility
      </motion.h2>
      <br />
      <motion.h3
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-bold text-white dark:text-white"
      >
        Airports:
      </motion.h3>
      <ul>
        <motion.li
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white dark:text-white"
        >
          <strong>Lombok International Airport (LOP)</strong> in Praya, Lombok,
          serving as the main gateway for international and domestic flights.
        </motion.li>
        <br />
        <motion.li
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-white dark:text-white"
        >
          <strong>Sultan Muhammad Kaharuddin III Airport (SWQ)</strong> in
          Sumbawa Besar, mainly for domestic flights.
        </motion.li>
        <br />
        <motion.li
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-white dark:text-white"
        >
          <strong>Sultan Muhammad Salahuddin Airport (BMU)</strong> in Bima,
          also serving domestic flights.
        </motion.li>
        <br />
      </ul>
      <motion.h3
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="font-bold text-white dark:text-white"
      >
        Ferry Services:
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="text-white dark:text-white"
      >
        There are regular ferry services connecting Bali to Lombok and Sumbawa,
        as well as between the islands of the province itself.
      </motion.p>
    </div>
  );
};

export default AccessibilityInfo;
