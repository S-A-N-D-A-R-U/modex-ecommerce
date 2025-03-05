import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import Title from "../components/Title";
import Newsletter from "../components/Newsletter";
import { assets } from "../assets/assets.js";

const About = () => {


  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold text-center mb-16">
        <Title text1={'About'} text2={" MODEX"} />
      </h1>
      

      {/* About Us Section */}
      <section className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-text-light">
              <p>
                Founded in 2023, MODEX emerged from a vision to redefine fashion
                for the modern era. We believe that clothing is more than just
                fabric—it's an expression of identity, a statement of intent,
                and a glimpse into the future.
              </p>
              <p>
                Our team of visionary designers and tech enthusiasts work
                together to create pieces that blend cutting-edge aesthetics
                with practical functionality. Each collection tells a story of
                innovation, sustainability, and forward-thinking design.
              </p>
              <p>
                At MODEX, we're not just selling clothes; we're crafting
                experiences that transport you to a world where fashion and
                technology converge to create something extraordinary.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="h-[350px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={assets.about_img}
                alt="MODEX Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-text-light text-lg">
            To create fashion that inspires confidence, embraces innovation, and
            paves the way for a more sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description:
                "Pushing boundaries with designs that blend aesthetics and technology.",
              image:
                "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            },
            {
              title: "Sustainability",
              description:
                "Creating fashion that respects our planet and its resources.",
              image:
                "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
            },
            {
              title: "Inclusivity",
              description:
                "Designing for everyone, regardless of age, size, or background.",
              image:
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-text-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-24 bg-gradient-to-r from-accent/5 to-violet-500/5 rounded-3xl p-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
          <p className="text-text-light text-lg">
            At MODEX, we stand apart through our commitment to excellence,
            innovation, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Cutting-Edge Design",
              description:
                "Our designs blend contemporary aesthetics with futuristic elements, creating pieces that are both timeless and ahead of their time.",
            },
            {
              title: "Premium Quality",
              description:
                "We source only the finest materials and employ rigorous quality control to ensure that every item meets our exacting standards.",
            },
            {
              title: "Sustainable Practices",
              description:
                "From eco-friendly materials to ethical manufacturing, sustainability is at the core of everything we do.",
            },
            {
              title: "Exceptional Service",
              description:
                "Our dedicated team is committed to providing personalized service and ensuring your complete satisfaction.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md flex items-start space-x-4"
            >
              <div className="bg-accent/10 p-3 rounded-full">
                <FaCheckCircle className="text-accent text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-text-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter/>
    </div>
  );
};

export default About;
