import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main
      className="mt-10 mx-auto px-8 sm:mt-0 sm:px-12 md:mt-16 lg:mt-20 xl:mt-28 mb-0"
      style={{ marginBottom: '-150px' }}
    >
      <div className="text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">{mainHero.title}</span>{' '}
          <span className="block text-primary">
            {mainHero.subtitle}
            <span className="wave">👋🏽</span>
          </span>
        </h1>
        <p className="mt-6 text-base text-gray-600 sm:text-lg md:text-xl leading-relaxed md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-8 flex flex-wrap">
          <div className="rounded-md shadow">
            <a
              href={mainHero.primaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-8 py-3 border border-blue-500 text-base font-medium rounded-md text-white bg-primary hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href={mainHero.secondaryAction.href}
              className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-secondary bg-white hover:bg-gray-50 hover:text-primary hover:border-primary transition-all duration-300 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              {mainHero.secondaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
