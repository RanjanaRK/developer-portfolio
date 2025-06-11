import { motion } from "motion/react";

const AnimatedAboutText = () => {
  const delayPerWord = 0.1;

  // Split your text into blocks
  const block1 = "Hello 👋🏼 — I'm a".split(" ");
  const block2 = "fullstack developer".split(" ");
  const block3 =
    `passionate about building intuitive and scalable applications. I specialize in Next.js, Tailwind CSS, Fastify, and Prisma, ensuring clean architecture and optimized performance. My expertise includes relational databases, schema validation, and dynamic UI effects.`.split(
      " "
    );
  const block4 =
    `I enjoy solving complex problems with well-structured, modular code. Through personal projects, I continuously refine my skills and explore new technologies.`.split(
      " "
    );
  const block5 =
    `I aim to create applications that merge functionality with elegant design. Open to collaboration, I strive to build impactful solutions that evolve seamlessly.`.split(
      " "
    );

  // Helper function to compute global delay for each block
  const getDelayForBlock = (prevCount: number, index: number) =>
    (prevCount + index) * delayPerWord;

  return (
    <div className="flex flex-col gap-2 text-base leading-7 text-gray-600 sm:w-2/3 dark:text-gray-400">
      {/* First Paragraph */}
      <span>
        {/* Block 1 */}
        {block1.map((word, index) => (
          <motion.span
            key={`block1-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: getDelayForBlock(0, index), duration: 0.2 }}
            className="mr-1 inline-block"
          >
            {word}
          </motion.span>
        ))}

        {/* Block 2 – Bold */}
        <span className="mr-1 inline-block font-bold text-gray-700 sm:text-lg dark:text-gray-300">
          {block2.map((word, index) => (
            <motion.span
              key={`block2-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: getDelayForBlock(block1.length, index),
                duration: 0.2,
              }}
              className="mr-1 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </span>

        {/* Block 3 – Regular text */}
        <span>
          {block3.map((word, index) => (
            <motion.span
              key={`block3-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: getDelayForBlock(block1.length + block2.length, index),
                duration: 0.2,
              }}
              className="mr-1 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </span>
      </span>

      {/* Second Paragraph */}
      <span>
        {block4.map((word, index) => (
          <motion.span
            key={`block4-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: getDelayForBlock(
                block1.length + block2.length + block3.length,
                index
              ),
              duration: 0.2,
            }}
            className="mr-1 inline-block"
          >
            {word}
          </motion.span>
        ))}
      </span>

      {/* Third Paragraph */}
      <span>
        {/* {block5.map((word, index) => (
          <motion.span
            key={`block5-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: getDelayForBlock(
                block1.length + block2.length + block3.length + block4.length,
                index,
              ),
              duration: 0.2,
            }}
            className="mr-1 inline-block">
            {word}
          </motion.span>
        ))} */}
      </span>
    </div>
  );
};

export default AnimatedAboutText;
