function Header() {
  return (
    <header className='w-full mb-8 flex flex-col justify-center items-center gap-2 '>
      <img  src='logo512.png' alt='React logo' className="w-20" />
      <h1 className="text-4xl tracking-widest font-extrabold" >The React Quiz</h1>
    </header>
  );
}

export default Header;
