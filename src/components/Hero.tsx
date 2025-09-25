
const Hero = () => {

  return (
    <section id="home" className="p-20 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Welcome to
              <span className="bg-gradient-hero bg-clip-text text-transparent block">
               NLP Singles' Prayer Conference 2025
              </span>
            </h1>

        </div>
      </div>
    </section>
  );
};

export default Hero;