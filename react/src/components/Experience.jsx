function Experience() {
  return (
    <section className="bg-black/10 p-6 rounded-xl border-l-4 border-[#4da6ff] shadow-md">
      <h2 className="text-2xl font-bold text-[#4da6ff] mb-4 text-center">My experience</h2>

      <ul className="flex flex-col gap-6 list-none p-0">
        <li className="hover:text-purple-200 hover:scale-105 transition-transform cursor-pointer">
          <strong className="text-blue-200">Аудит безпеки:</strong> Розробка документації СУІБ та матриці загроз для компанії ROZETKA
        </li>

        <li className="hover:text-purple-200 hover:scale-105 transition-transform cursor-pointer">
          <strong className="text-blue-200">Мережі:</strong> Налаштування мережевих топологій у Cisco Packet Tracer
        </li>

        <li className="hover:text-purple-200 hover:scale-105 transition-transform cursor-pointer">
          <strong className="text-blue-200">Практична кібербезпека:</strong> Вирішення завдань з веббезпеки та роботи в Linux-терміналі
        </li>

        <li className="hover:text-purple-200 hover:scale-105 transition-transform cursor-pointer">
          <strong className="text-blue-200">Дослідження:</strong> Аналіз перших мережевих черв'яків та ransomware у рамках вивчення кібербезпеки
        </li>
      </ul>
    </section>
  );
}

export default Experience;