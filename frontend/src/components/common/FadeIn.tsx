// 25-10-2026

// "use client";

// import { motion } from "framer-motion";

// export default function FadeIn({
//     children,
//     className = "",
// }: {
//     children: React.ReactNode;
//     className?: string;
// }) {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-20px" }}
//             transition={{ duration: 0.35, ease: "easeOut" }}
//             className={className}
//         >
//             {children}
//         </motion.div>
//     );
// }