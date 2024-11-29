import { Code, Palette, LineChart, Globe } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    icon: Code,
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive interfaces that users love.',
    icon: Palette,
  },
  {
    title: 'Analytics',
    description: 'Data-driven insights to grow your business.',
    icon: LineChart,
  },
  {
    title: 'Global Reach',
    description: 'Solutions that scale across borders and cultures.',
    icon: Globe,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive solutions for your digital needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative bg-white p-6 rounded-xl">
                <service.icon className="h-8 w-8 text-blue-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}