export default function TestimonialsSection() {
  const testimonials = [
    { name: 'Alimi Ahmad', position: 'top-[295px] left-0', delay: '0s' },
    { name: 'Caulcrick James', position: 'top-0 left-[427px]', delay: '0.1s' },
    { name: 'Debby Suil', position: 'top-[288px] right-0', delay: '0.2s' },
    
  ];

  const orangeDots = [
    { left: '560px', top: '329px' },
    { left: '774px', top: '235px' },
    { left: '799px', top: '162px' },
    { left: '1085px', top: '581px' },
    { left: '311px', top: '581px' },
    { left: '251px', top: '162px' },
    { left: '387px', top: '239px' },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 bg-vse-bg">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-8 mb-20">
          <div className="bg-vse-beige/50 px-8 py-3 rounded-full">
            <span className="text-vse-orange font-heading text-[20px]">Testimonials</span>
          </div>
          
          <h2 className="font-heading font-bold text-[40px] text-black text-center max-w-[315px]">
            What our clients are saying
          </h2>
        </div>

        {/* Testimonials Container with Map */}
        <div className="relative w-full h-[687px] max-w-[1206px] mx-auto">
          {/* Map Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/3750a97a503b3eabd74eb3fbb7ad0e41bd05b474?width=2146" 
              alt="World Map"
              className="w-[1073px] h-[588px] opacity-40"
            />
          </div>

          {/* Orange Dots on Map */}
          {orangeDots.map((dot, index) => (
            <div
              key={index}
              className="absolute w-5 h-5 bg-vse-orange rounded-full hidden lg:block"
              style={{ left: dot.left, top: dot.top }}
            ></div>
          ))}

          {/* Testimonial Cards */}
          <div className="hidden lg:block">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="absolute w-[331px] bg-vse-beige/35 backdrop-blur-sm rounded-[20px] p-5"
                style={{
                  left: testimonial.position.includes('left') ? testimonial.position.split(' ')[1] : 'auto',
                  right: testimonial.position.includes('right') ? '0' : 'auto',
                  top: testimonial.position.split(' ')[0].replace('top-[', '').replace(']', ''),
                  animationDelay: testimonial.delay,
                }}
              >
                <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-300 rounded-full">
                        <img 
                          src={`https://ui-avatars.com/api/?name=${testimonial.name}&size=40`}
                          alt={testimonial.name}
                          className="w-full h-full rounded-full"
                        />
                      </div>
                      <h3 className="font-heading text-black text-[20px]">{testimonial.name}</h3>
                    </div>
                    <p className="text-black text-base">
                      With trusted parts, we assure a longevity serving years in your comfort
                    </p>
                  </div>

                  {/* UAE Flag */}
                  <div className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4.375 8.125H20V12.1875H4.375V8.125Z" fill="#E6E7E8"/>
                      <path d="M4.375 16.875H16.875C18.9459 16.875 20 15.3359 20 13.4375V12.1875H4.375V16.875Z" fill="#25333A"/>
                      <path d="M16.875 3.125H4.375V8.125H20V6.5625C20 4.66406 18.9459 3.125 16.875 3.125Z" fill="#137A08"/>
                      <path d="M4.375 12.1875V3.125H3.125C1.05406 3.125 0 4.66406 0 6.5625V13.4375C0 15.3359 1.05406 16.875 3.125 16.875H4.375V12.1875Z" fill="#036914ff"/>
                    </svg>
                    <span className="text-black text-base">UAE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Testimonials */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-vse-beige/35 backdrop-blur-sm rounded-[20px] p-5"
              >
                <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-300 rounded-full">
                        <img 
                          src={`https://ui-avatars.com/api/?name=${testimonial.name}&size=40`}
                          alt={testimonial.name}
                          className="w-full h-full rounded-full"
                        />
                      </div>
                      <h3 className="font-heading text-black text-[20px]">{testimonial.name}</h3>
                    </div>
                    <p className="text-black text-base">
                      With trusted parts, we assure a longevity serving years in your comfort
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4.375 8.125H20V12.1875H4.375V8.125Z" fill="#E6E7E8"/>
                      <path d="M4.375 16.875H16.875C18.9459 16.875 20 15.3359 20 13.4375V12.1875H4.375V16.875Z" fill="#25333A"/>
                      <path d="M16.875 3.125H4.375V8.125H20V6.5625C20 4.66406 18.9459 3.125 16.875 3.125Z" fill="#137A08"/>
                      <path d="M4.375 12.1875V3.125H3.125C1.05406 3.125 0 4.66406 0 6.5625V13.4375C0 15.3359 1.05406 16.875 3.125 16.875H4.375V12.1875Z" fill="#EC1C24"/>
                    </svg>
                    <span className="text-black text-base">UAE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
