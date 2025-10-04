'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* Шапка */}
      <header className="flex items-center justify-between px-12 py-6 border-b border-gray-200">
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
      </header>

      {/* Герой-секция */}
      <section className="text-center py-28 bg-gradient-to-b from-white to-gray-50">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-light mb-4"
        >
          Архитектура, рожденная в гармонии
        </motion.h1>
        <p className="text-gray-600 text-lg">
          Проектирование, строительство, технадзор, обследование зданий и сооружений
        </p>
      </section>

      {/* Галерея проектов */}
      <section id="projects" className="px-12 py-20 bg-white">
        <h2 className="text-3xl font-medium mb-10 text-center">Наши проекты</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {["1Мичуринское.jpg", "мичурб1.jpg", "hero-dome.jpg"].map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
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
      <footer id="contacts" className="bg-gray-100 py-16 text-center">
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
      </footer>
    </main>
  );
}
