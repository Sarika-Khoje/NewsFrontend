export default function Hero() {
  return (
    <div
      className="relative h-[200px] flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.stockcake.com/public/8/7/5/875bf857-9024-439a-a84c-4dc181aadae3_large/ringed-earth-glows-stockcake.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <h1 className="relative text-white text-4xl font-bold tracking-wider">
        NewsFlow
      </h1>
      <p className="relative text-gray-300 mt-2 text-center">
        Real time updates around the world
      </p>
    </div>
  );
}