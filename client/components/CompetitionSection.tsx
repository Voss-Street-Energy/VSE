import { ArrowRight } from 'lucide-react';

export default function CompetitionSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-vse-bg">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative rounded-[20px] overflow-hidden h-[902px]">
          {/* Background - VSE Blue */}
          <div className="absolute inset-0 bg-vse-blue"></div>
          
          {/* Bottom Left Corner Cutout */}
          <div className="absolute left-0 bottom-0 w-[274px] h-[94px] bg-vse-bg rounded-tr-[20px]"></div>

          {/* Content Container */}
          <div className="relative h-full flex">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-start pt-16 px-16 max-w-[550px]">
              <div className="flex flex-col gap-24">
                <h2 className="font-heading font-bold text-[48px] text-white leading-tight max-w-[409px]">
                  We Outclassed our Competitions
                </h2>
                
                <p className="text-white text-base max-w-[488px]">
                  We made it happen!, we are the #1 in terms of durability, the batteries longevity is top notch and efficiency customed designed for your needs, we provide all the necessary items.
                </p>

                {/* Get a Quote Button */}
                <button className="self-start flex items-center gap-7 bg-vse-beige hover:bg-vse-beige/90 rounded-full transition" style={{ justifyContent: 'flex-start', marginTop: '31px', padding: '24px 24px 20px' }}>
                  <span className="text-vse-blue text-[20px] font-medium">Get a quote</span>
                  <div className="w-[60px] h-[60px] rounded-full border border-dashed border-vse-orange flex items-center justify-center">
                    <ArrowRight size={20} className="text-vse-orange" strokeWidth={2} />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/1ae6435116aa45299ee725890cf2bf3766ca8a52?width=1364" 
                alt="Solar Panel Installation"
                className="w-full h-full object-cover rounded-r-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
