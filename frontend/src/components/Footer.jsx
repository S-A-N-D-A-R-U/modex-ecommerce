import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-accent/5 border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-violet-600 bg-clip-text text-transparent mb-6">MODEX</h3>
            <p className="text-text-light mb-6">
              Redefining fashion with futuristic designs and sustainable practices for the modern individual.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebookF />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaPinterestP />, href: "#" },
                { icon: <FaYoutube />, href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-text-light hover:bg-accent hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/" },
                { name: "Contact", path: "/contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-text-light hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Customer Service</h4>
            <ul className="space-y-3">
              {[
                { name: "FAQ", path: "#" },
                { name: "Shipping & Returns", path: "#" },
                { name: "Size Guide", path: "#" },
                { name: "Track Order", path: "#" },
                { name: "Privacy Policy", path: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path}
                    className="text-text-light hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3 text-text-light">
              <li>123 Fashion Avenue, New York, NY 10001</li>
              <li>info@modexfashion.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Mon - Fri: 9AM - 6PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 text-center text-text-light">
          <p>&copy; {new Date().getFullYear()} MODEX Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;