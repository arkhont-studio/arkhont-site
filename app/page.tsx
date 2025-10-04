'use client';
import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans overflow-hidden">
      {/* Шапка */}
      <motion.header
        variants={fadeIn(0.2)}
        initial="hidden"
        animate="show"
        className="flex items-center justify-between px-12 py-6 border-b border-gray-200 bg-white/70 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm"
      >
        <div className="flex items-center space-x-3">
          <Image src="/image.png" alt="Архонт" width={60} height={60} />
          <span className="text-xl font-semibold tracking-wide">
            Архитектурная мастерская Архонт
          </span>
        </div>
        <nav className="space-x-8">
          <a href="#projects" className="hover:text-gray-500 transition">Проекты</a>
          <a href="#about" className="hover:text-gray-500 transition">О нас</a>
          <a href="#contacts" className="hover:text-gray-500 transition">Контакты</a>
        </nav>
      </motion.header>

      {/* Герой-секция */}
      <section className="text-center pt-44 pb-28 bg-gradient-to-b from-white to-gray-50">
        <motion.h1
          variants={fadeIn(0.1)}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-6xl font-light mb-4"
        >
          Архитектура, рожденная в гармонии
        </motion.h1>
        <motion.p
          variants={fadeIn(0.3)}
          initial="hidden"
          animate="show"
          className="text-gray-600 text-lg"
        >
          Проектирование, строительство, технадзор, обследование зданий и сооружений
        </motion.p>
      </section>

      {/* Галерея проектов */}
      <section id="projects" className="px-12 py-24 bg-white">
        <motion.h2
          variants={fadeIn(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-medium mb-10 text-center"
        >
          Наши проекты
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {["1Мичуринское.jpg", "мичурб1.jpg", "hero-dome.jpg"].map((src, i) => (
            <motion.div
              key={i}
              variants={fadeIn(i * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <Image
                src={`/${src}`}
                alt={`Проект ${i + 1}`}
                width={600}
                height={400}
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Контакты */}
      <motion.footer
        id="contacts"
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-gray-100 py-16 text-center"
      >
        <h3 className="text-2xl font-medium mb-4">Контакты</h3>
        <p className="text-gray-700">
          Генеральный директор — <b>Муравьев Роман Николаевич</b><br />
          <a href="tel:+79119572547" className="text-blue-600 hover:underline">
            +7 911 957 25 47
          </a>
        </p>
        <p className="mt-3 text-gray-700">
          Ведущий архитектор — <b>Муравьев Тихон Романович</b><br />
          <a href="tel:+79111197900" className="text-blue-600 hover:underline">
            +7 911 119 79 00
          </a>
        </p>
        <p className="mt-3">
          <a href="mailto:arhit-mur@yandex.ru" className="text-blue-600 hover:underline">
            arhit-mur@yandex.ru
          </a>
        </p>
      </motion.footer>
    </main>
  );
}

