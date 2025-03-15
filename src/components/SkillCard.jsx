import { motion } from 'framer-motion';

const SkillCard = ({ title, icon }) => {
  return (
    <motion.div
      className="group skill-card bg-gray-800 text-white rounded-lg p-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}  // This triggers only when the card enters the viewport
      transition={{ duration: 1 }}
    >
      {/* Icon */}
      <div className="flex justify-center items-center mb-4">
        <img src={icon} alt={title} className="w-16 h-16"/>
      </div>

      {/* Title */}
      <h4 className="text-2xl text-center font-medium">
        {title}
      </h4>
    </motion.div>
  );
};

export default SkillCard;



