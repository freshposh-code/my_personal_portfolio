// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';

// const TypingText = ({ text , textStyles}) => {
//   const [displayedText, setDisplayedText] = useState('');
//   const [isVisible, setIsVisible] = useState(false);
//   const textRef = useRef(null);
//   let typingTimeout;

//   const handleIntersection = (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting && !isVisible) {
//         setIsVisible(true);
//         setDisplayedText('');
//         let counter = 0;
//         typingTimeout = setInterval(() => {
//           if (counter === text.length) {
//             clearInterval(typingTimeout);
//           } else {
//             setDisplayedText((prevText) => prevText + text[counter]);
//             counter++;
//           }
//         }, 50); // Adjust the speed here (lower values = faster typing)
//       } else if (!entry.isIntersecting && isVisible) {
//         setIsVisible(false);
//         clearInterval(typingTimeout);
//       }
//     });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(handleIntersection, {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.5, // Adjust threshold as needed based on when you want the animation to start
//     });

//     if (textRef.current) {
//       observer.observe(textRef.current);
//     }

//     return () => {
//       if (textRef.current) {
//         observer.unobserve(textRef.current);
//         clearInterval(typingTimeout);
//       }
//     };
//   }, []);

//   return (
//     <motion.div ref={textRef} className={textStyles}>
//       {displayedText.trim()}
//     </motion.div>
//   );
// };

// export default TypingText;
