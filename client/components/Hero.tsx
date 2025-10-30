import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-32 pb-16 px-4"
      style={{
        backgroundImage: 'url(https://api.builder.io/api/v1/image/assets/TEMP/1cb7e85c95f4db3fb92277b1f044d6421abd4dcc?width=2984)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Hero Text */}
        <div className="flex flex-col items-center gap-2 justify-center" style={{ margin: '73px 0 128px' }}>
          <div className="text-center max-w-[682px]">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-[48px] leading-[125%] mb-4">
              <span className="text-vse-orange">POWER TOMORROW TODAY<br />WITH </span>
              <span className="text-vse-blue">VOSS STREET ENERGY</span>
            </h1>
            <p className="text-vse-blue text-base md:text-lg mb-8">
              Affordable solar solutions for homes and industries
            </p>
          </div>

          {/* CTA Button */}
          <button className="flex items-center gap-8 bg-vse-orange hover:bg-vse-orange/90 text-white px-10 py-4 rounded-full transition backdrop-blur-sm">
            <span className="text-[20px] font-medium">Get started</span>
            <div className="bg-white rounded-full p-3">
              <ArrowRight size={16} className="text-vse-orange" strokeWidth={1.5} />
            </div>
          </button>
        </div>

        {/* Three Hero Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1267px] mx-auto">
          {/* Card 1 - Alternative Energy */}
          <div className="bg-vse-beige/30 backdrop-blur-md rounded-[10px] border-l-2 border-vse-orange p-4 flex items-center gap-8">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4ad0cd8a2b3382ef1d9d8fd763b797595c83db76?width=490"
              alt="Alternative Energy"
              className="w-[87px] h-[89px] rounded-[10px] object-cover"
            />
            <div className="flex-1">
              <h3 className="font-heading text-vse-blue text-[20px] font-medium mb-4">Alternative Energy</h3>
              <p className="text-black text-base">
                Discover the amazing way VOSS STREET ENERGY SOLAR can transform your space.
              </p>
            </div>
          </div>

          {/* Card 2 - Clients */}
          <div className="bg-white/60 backdrop-blur-md rounded-[10px] border-t-2 border-l-2 border-vse-orange p-12 flex flex-col items-start gap-6">
            <div className="flex items-center gap-[-12px]">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F088ab985d6894492ad727a24c945a8b0%2F33ba6fbfe5b3433da02b6db46906ac1d" alt="" className="w-[50px] h-[50px] rounded-full -mr-3" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F088ab985d6894492ad727a24c945a8b0%2Ff3a133a64b314a19bc549742b8f05b54" alt="" className="w-[50px] h-[50px] rounded-full -mr-3" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F088ab985d6894492ad727a24c945a8b0%2F83ee348d2233439e88f125034f4840c4" alt="" className="w-[50px] h-[50px] rounded-full -mr-3" />
              <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center font-heading font-semibold">1k+</div>
            </div>
            <p className="text-black text-base">
              Our 3000+ satisfied clients world wide
            </p>
          </div>

          {/* Card 3 - Efficient Solar Panels */}
          <div className="bg-white/60 backdrop-blur-md rounded-[10px] border-t-2 border-l-2 border-vse-orange p-4 flex flex-col gap-6">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/4f155521aea1e7f8279d0b63fee8187488e54efc?width=122" 
              alt="Solar Panel Icon" 
              className="w-[61px] h-[61px] rounded-[10px]"
            />
            <div>
              <h3 className="font-heading text-black text-[20px] mb-4">EFFICIENT SOLAR PANELS</h3>
              <p className="text-black text-base">
                Our solar panels are durable and long-lasting with warrantyand it produces efficient charging
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
