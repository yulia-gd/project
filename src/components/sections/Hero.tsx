import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-gray-900 sm:text-7xl">
          Building{' '}
          <span className="relative whitespace-nowrap text-blue-600">
            <span className="relative">better solutions</span>
          </span>{' '}
          for tomorrow
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Transform your ideas into reality with our innovative solutions and expert team.
          We're here to help you succeed in the digital age.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:outline-blue-600"
          >
            Get started
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#about"
            className="group inline-flex ring-1 ring-gray-200 items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none hover:ring-gray-300 active:ring-gray-400 text-gray-700 hover:text-gray-900"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}