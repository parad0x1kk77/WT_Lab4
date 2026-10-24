function Header() {
  return (
    <header className="flex flex-col items-start bg-black/10 p-8 rounded-xl shadow-md mb-8 border-b-4 border-[#4da6ff]">

      <h1 className="text-5xl font-bold text-white mb-2 text-left">Борисевич Олександр</h1>
      <h2 className="text-5xl font-bold text-white mb-2 text-left">Cybersecurity спеціаліст</h2>
      <h2 className="text-5xl font-bold text-white mb-2 text-left">Студент Національного університету «Львівська політехніка»</h2>

      <ul className="flex gap-6 list-none p-0 m-0 w-full justify-center mt-4 border-t border-white/20 pt-6">
        <li className="text-blue-100 hover:text-white hover:scale-110 transition-transform cursor-pointer font-semibold">
          Email: <a href="mailto:oleksandr.borysevych.kb.2025@lpnu.ua">click</a>
        </li>
        <li className="text-blue-100 hover:text-white hover:scale-110 transition-transform cursor-pointer font-semibold">
          GitHub: <a href="https://github.com/parad0x1kk77">click</a>
        </li>
      </ul>


    </header>
  );
}

export default Header;