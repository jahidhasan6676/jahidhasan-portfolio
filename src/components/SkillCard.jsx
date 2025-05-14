import { motion } from 'framer-motion';

const SkillCard = ({ title, icon }) => {
  return (
    <motion.div
      className="group relative bg-[#1f242d] rounded-xl hover:shadow-sm p-6 border border-[#4a7dff]/30 hover:border-[#4a7dff]/30 transition-all duration-300  hover:shadow-[#4a7dff]/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 20px -5px rgba(74, 125, 255, 0.1)"
      }}
      transition={{ 
        duration: 0.5,
        type: "spring", 
        stiffness: 150
      }}
    >
      {/* Icon with subtle hover effect */}
      <div className="flex justify-center mb-4">
        <motion.img 
          src={icon} 
          alt={title}
          className="w-16 h-16 object-contain"
          whileHover={{
            scale: 1.1,
            filter: "drop-shadow(0 0 8px rgba(74, 125, 255, 0.4))"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>

      {/* Title with elegant typography */}
      <h4 className="text-center font-medium text-lg text-white/90 group-hover:text-[#4a7dff] transition-colors">
        {title}
      </h4>

      {/* Subtle background accent on hover */}
      <div className="absolute inset-0 rounded-xl bg-[#4a7dff] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 -z-10" />
    </motion.div>
  );
};

export default SkillCard;



