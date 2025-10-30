import { Phone, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer  className="bg-white py-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* CTA Section */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-[60px] md:text-[100px] text-vse-orange text-center md:text-left leading-tight mb-8">
            LET THE SUN PAY THE BILLS
          </h2>
          <div className="h-[1px] bg-vse-blue mb-8"></div>
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <img
              src="\VSE Logo full colour.png"
              alt="Voss Street Energy"
              className="h-30 w-auto"
              style={{ marginRight: '3px' }}
            />
            <p className="text-black text-base">
              Leading the renewable energy revolution with innovative solar solutions for homes and businesses.
            </p>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-8">
            <h3 className="font-heading font-bold text-2xl text-black">Company</h3>
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-black text-base hover:text-vse-orange transition">Services</a>
              <a href="#about" className="text-black text-base hover:text-vse-orange transition">About us</a>
              <a href="#products" className="text-black text-base hover:text-vse-orange transition">Product</a>
              <a href="#contact" className="text-black text-base hover:text-vse-orange transition">Contact</a>
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-8">
            <h3 className="font-heading font-bold text-2xl text-black">Resources</h3>
            <div className="flex flex-col gap-4">
              <a href="#faq" className="text-black text-base hover:text-vse-orange transition">FAQ</a>
              <a href="#support" className="text-black text-base hover:text-vse-orange transition">Supports</a>
              <a href="#chat" className="text-black text-base hover:text-vse-orange transition">Live chat</a>
              <a href="#blog" className="text-black text-base hover:text-vse-orange transition">Blog</a>
              <a href="#cases" className="text-black text-base hover:text-vse-orange transition">Case studies</a>
            </div>
          </div>

          {/* Contact Information */}
          <div id="contact" className="flex flex-col gap-8">
            <h3 className="font-heading font-bold text-xl text-black">CONTACT INFORMATION</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Phone size={24} className="text-vse-orange fill-vse-orange" />
                <span className="text-black text-base font-medium">+234 0 555 325 8741</span>
              </div>
              <div className="flex items-center gap-4">
                <MessageCircle size={24} className="text-vse-orange" strokeWidth={2} />
                <span className="text-black text-base font-medium">+1 902 445 2154</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={24} className="text-vse-orange" strokeWidth={2} />
                <span className="text-black text-base font-medium">info@vse.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="h-[1px] bg-vse-blue mb-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-black text-sm">@2025 Voss Street Energy. | All rights reserved</p>
          <div className="flex gap-8">
            <a href="#privacy" className="text-black text-sm hover:text-vse-orange transition">Privacy Policy</a>
            <a href="#terms" className="text-black text-sm hover:text-vse-orange transition">Term of Service.</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
