import React from 'react';

import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { title, items: featuresList } = features;

  return (
    <div className="py-0" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {' '}
        {/* Increased max-w */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-[#4285f4]">{title}</h1>
        </div>
        <div className="mt-10">
          <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 justify-items-center">
            {' '}
            {/* Added responsive grid */}
            {featuresList.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col items-center"
              >
                <dt>
                  <div className="flex items-center justify-center h-20 w-20 rounded-xl bg-white text-primary border-[#4285f4] border-4 mb-4 shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.2)] transition-shadow duration-300">
                    <img
                      className="h-12 w-12"
                      src={feature.icon}
                      alt={feature.name}
                    />
                  </div>
                  <p className="text-2xl font-medium text-gray-800 text-center">
                    {feature.name}
                  </p>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
