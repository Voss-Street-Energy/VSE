import { Send } from 'lucide-react';

export default function OffersSection() {
  const services = [
    { title: '25 years  Guarantee', desc: 'With trusted parts, we assure a longevity serving years in your comfort' },
    { title: 'Emergency Backup', desc: 'We ensure all our product is backed up for safety uses.' },
    { title: 'Renewable Integration', desc: 'With trusted parts, we assure a longevity serving years in your comfort' },
    { title: 'Capacity Reserve', desc: 'With trusted parts, we assure a longevity serving years in your comfort' },
    { title: 'Demand Response', desc: 'With trusted parts, we assure a longevity serving years in your comfort' },
    { title: 'Load Shifting', desc: 'With trusted parts, we assure a longevity serving years in your comfort' },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-12 mb-12">
          <div className="flex flex-col items-center gap-7">
            <div className="bg-vse-beige/50 px-8 py-3 rounded-full">
              <span className="text-vse-orange font-heading text-[20px]">Our Services</span>
            </div>
            
            <h2 className="font-heading font-bold text-[40px] text-black text-center max-w-[234px]">
              What do we offer to you.
            </h2>
          </div>

          {/* Solar Grid Image */}
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/d57151f5546737fb79e635d01bc95fccde24774f?width=1082" 
            alt="Solar Panel Grid"
            className="w-full max-w-[541px] h-auto"
          />
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-vse-beige/30 rounded-[20px] p-6 flex flex-col gap-6"
            >
              {/* Icon placeholder - battery/solar icon */}
              <div className="w-20 h-20">
                <svg className="w-full h-full" viewBox="0 0 83 86" fill="none">
                  <path d="M22.1848 0.75H9.77525C8.05925 0.75 7.20125 0.75 6.56375 1.1895C5.92475 1.6305 5.67275 2.3955 5.16875 3.927L1.70675 14.427C0.829253 17.091 0.389753 18.423 1.11275 19.3365C1.83575 20.25 3.32825 20.25 6.31475 20.25H18.7243C20.4403 20.25 21.2968 20.25 21.9358 19.8105C22.5748 19.3695 22.8268 18.6045 23.3308 17.073L26.7928 6.573C27.6703 3.909 28.1098 2.577 27.3868 1.6635C26.6638 0.75 25.1713 0.75 22.1848 0.75Z" stroke="#1B1B1B" strokeWidth="1.5"/>
                  <path d="M30.7498 6L26.1868 19.8195C25.5208 21.834 25.1878 22.842 24.3463 23.4195C23.5063 24 22.3738 24 20.1118 24H3.74976M4.49976 7.5H26.2498M23.9998 13.5H2.24976M14.2498 24.75V29.25M14.2498 29.25H17.2498M14.2498 29.25H11.2498" stroke="#1B1B1B" strokeWidth="1.5"/>
                  <path d="M20.9998 0.75H13.4998L7.49976 20.25H14.9998L20.9998 0.75Z" stroke="#1B1B1B" strokeWidth="1.5"/>
                  <text fill="#1B1B1B" fontFamily="Vastago Grotesk" fontSize="16" fontWeight="600">
                    <tspan x="0.75" y="60.45">{service.title.split(' ')[0]}</tspan>
                    <tspan x="0.75" y="80.45">{service.title.split(' ').slice(1).join(' ')}</tspan>
                  </text>
                </svg>
              </div>
              <p className="text-vse-dark text-base">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Residential Solar */}
          <div className="relative h-[356px] rounded-lg overflow-hidden group cursor-pointer">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/5770cf25e99232348857f557bec579a51d544559?width=662" 
              alt="Residential Solar"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
              <h3 className="font-heading font-bold text-white text-2xl">Residential Solar</h3>
              <div className="bg-vse-orange w-[70px] h-[70px] rounded-full flex items-center justify-center">
                <Send size={24} className="text-vse-dark" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Hybrid Systems */}
          <div className="relative h-[356px] rounded-lg overflow-hidden group cursor-pointer">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/b25d5581065b5aa7823ae10ee2f5e9e9747971a6?width=662" 
              alt="HydroP System"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
              <h3 className="font-heading font-bold text-white text-2xl">HydroP System</h3>
              <div className="bg-vse-orange w-[70px] h-[70px] rounded-full flex items-center justify-center">
                <Send size={24} className="text-vse-dark" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Wind Turbine */}
          <div className="relative h-[356px] rounded-lg overflow-hidden group cursor-pointer">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/5b06e9a3d24fe6a62e46f240e0355f7605c158ef?width=662" 
              alt="Wind Turbine"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
              <h3 className="font-heading font-bold text-white text-2xl">Wind Turbine</h3>
              <div className="bg-vse-orange w-[70px] h-[70px] rounded-full flex items-center justify-center">
                <Send size={24} className="text-vse-dark" strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
