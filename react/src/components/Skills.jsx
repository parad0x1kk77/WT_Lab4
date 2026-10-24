function Skills() {
  return (
    <section className="bg-black/10 p-6 rounded-xl border-l-4 border-[#4da6ff] shadow-md">
      <h2 className="text-2xl font-bold text-[#4da6ff] mb-4 text-center">My skills</h2>

      <ul className="flex flex-col gap-6 list-none p-0">
        <li className="hover:text-purple-200 hover:scale-105 transition-transform cursor-pointer">
          <strong className="text-blue-200">Програмування:</strong> Python, C#, основи SQL.
        </li>

        <li className="hover:text-purple-200 hover:scale-105 transition-transform cursor-pointer">
          <strong className="text-blue-200">Інформаційна безпека:</strong> розуміння стандартів ISO/IEC 27001, основи аудиту СУІБ, аналіз загроз
        </li>

        <li className="hover:text-purple-200 hover:scale-105 transition-transform cursor-pointer">
          <strong className="text-blue-200">Мережеві технології:</strong> основи маршрутизації та комутації, принципи побудови комп'ютерних мереж
        </li>

        <li className="hover:text-purple-200 hover:scale-105 transition-transform cursor-pointer">
          <strong className="text-blue-200">Інструменти:</strong> Git, ОС Linux, Cisco Packet Tracer, Visual Studio, Visual Studio Code, PyCharm
        </li>
      </ul>
    </section>
  );
}

export default Skills;