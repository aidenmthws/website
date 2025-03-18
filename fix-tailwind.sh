#!/bin/bash

# 1. Clean up previous installations
echo "Cleaning up previous Tailwind installations..."
rm -rf node_modules/.cache
rm -rf .next

# 2. Install the correct versions of dependencies
echo "Installing Tailwind CSS and related packages..."
yarn add -D tailwindcss@^3.3.0 postcss autoprefixer

# 3. Create proper configuration files
echo "Creating Tailwind configuration files..."

# Create tailwind.config.js
cat > tailwind.config.js << 'EOL'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

# Create postcss.config.js
cat > postcss.config.js << 'EOL'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOL

# 4. Ensure main.css has proper Tailwind directives
echo "Updating main.css with Tailwind directives..."
mkdir -p src/styles
cat > src/styles/main.css << 'EOL'
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

# 5. Check for styled-jsx-plugin-postcss in .babelrc and fix if needed
if [ -f .babelrc ]; then
  echo "Found .babelrc file, checking for styled-jsx configuration..."
  # Backup the original file
  cp .babelrc .babelrc.backup
  
  # Create a simplified .babelrc that should work with Next.js
  cat > .babelrc << 'EOL'
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "styled-jsx/babel",
      {
        "plugins": []
      }
    ]
  ]
}
EOL
  echo "Updated .babelrc - original saved as .babelrc.backup"
fi

echo "Setup complete. Try running 'yarn dev' again."
