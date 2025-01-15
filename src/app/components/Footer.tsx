const Footer = () => {
  return (
    <>
      <div className="h-[200px] px-8 bg-white flex justify-between items-center ">
        <div className="text-4xl bg-gray-300 p-2 px-4 rounded-2xl ">
          LogoHolder
        </div>
        <div
          className="flex flex-col ml-4
        "
        >
          <div className="text-2xl font-bold mb-7">Címünk</div>
          <div className="">1119 Random cím 12-14</div>
        </div>

        <div
          className="flex flex-col ml-4
        "
        >
          <div className="text-2xl font-bold mb-7">Nyitvatartás</div>
          <div className="">Hétfőn zárva</div>
          <div className="">K-P 12:00-19:00</div>
          <div className="">Szombat 12:00-18:00</div>
          <div className="">Vasárnap 13:00-17:00</div>
        </div>

        <div className="flex flex-col cursor-pointer ml-4 space-y-2 group">
          <div className="relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full">
            Felelősséválalási nyilatkozat
          </div>
          <div className="relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full">
            Adatkezelési tájékoztató
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
