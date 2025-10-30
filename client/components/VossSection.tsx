import { Star } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function VossSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-start">
          {/* Left Content */}
          <div className="flex flex-col gap-20">
            {/* About Badge */}
            <div className="inline-flex self-start">
              <div className="bg-vse-beige/50 px-8 py-3 rounded-full">
                <span className="text-vse-orange font-heading text-[20px]">About us</span>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <h2 className="font-heading font-bold text-[34px] text-black">
                  Voss Street Energy
                </h2>
                <p className="text-black text-base leading-relaxed">
                  (VSE) is on a mission to empower individuals, organizations,and communities with reliable access clean and sustainable energy.
                </p>

                <div className="w-full max-w-[340px]">
                  <div className="h-[1px] bg-vse-dark mb-4"></div>
                  
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                      <Star size={20} fill="#FE5601" stroke="#FE5601" />
                      <span className="text-black text-base">Excellent service</span>
                    </div>
                    <div className="w-[1px] h-[29px] bg-black"></div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <img src="https://ui-avatars.com/api/?name=R&size=24" alt="" className="w-6 h-6 rounded-full" />
                        <img src="https://ui-avatars.com/api/?name=R&size=24" alt="" className="w-6 h-6 rounded-full" />
                      </div>
                      <span className="text-black text-base">Reviews 200+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <button className="self-start flex items-center gap-2 bg-vse-beige hover:bg-vse-beige/80 px-6 py-3 rounded-full transition">
                <span className="text-vse-dark text-base">Learn more</span>
                <div className="w-10 h-10 rounded-full border border-dashed border-black flex items-center justify-center">
                  <ArrowRight size={16} className="text-vse-dark" strokeWidth={2} />
                </div>
              </button>
            </div>
          </div>

          {/* Right Content - Image with Stats */}
          <div className="relative h-[574px]">
            {/* Main Image */}
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/46d8a171525a56841d14c9af3d9142fa16366d4a?width=896" 
              alt="Wind and Solar Energy"
              className="absolute right-0 top-[45px] w-[448px] h-[515px] object-cover"
            />

            {/* Bottom Left Card - Blue */}
            <div className="absolute left-0 bottom-0 w-[292px] h-[190px] bg-vse-blue/50 backdrop-blur-sm rounded-lg p-5 flex flex-col gap-5">
              <h3 className="font-heading text-white">
                <span className="text-2xl font-bold">85% </span>
                <span className="text-[15px]">Success</span>
              </h3>
              <p className="text-white text-sm">
                ((VSE) is on a mission to empower individuals, organizations,and communities with reliable access clean and sustainable energy.)
              </p>
            </div>

            {/* Top Right Card - Beige */}
            <div className="absolute right-0 top-0 w-[292px] h-[190px] bg-vse-beige/50 backdrop-blur-sm rounded-lg p-5 flex flex-col gap-6">
              <h3 className="font-heading text-vse-dark">
                <span className="text-2xl font-bold">05+ </span>
                <span className="text-sm">Experience</span>
              </h3>
              <p className="text-vse-dark text-sm">
                ((VSE) is on a mission to empower individuals, organizations,and communities with reliable access clean and sustainable energy.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
