# Please follow the instructions

Step 1: Download file from github.com
Step 2: npm install --f or npm install

OR

Step 1: npm create vite@latest my-vue-app -- --template vue
Step 2: Install tailwindcss
npm install -D tailwindcss
npx tailwindcss init

    => Add the paths to all of your template files in your tailwind.config.js file.
        content: ["./src/**/*.{html,js}"],

    => Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

Step 3: Install following packages
npm install --f @reduxjs/toolkit react-icons react-redux react-router-dom react-slick react-stripe-checkout slick-carousel

Step 4: npm run dev

Step 5 (optional): If there is any problem with your package please visit following site
=> https://vitejs.dev/guide/
=> https://tailwindcss.com/docs/installation
=> https://react-icons.github.io/react-icons/
=> https://reactrouter.com/en/main
=> https://redux-toolkit.js.org/introduction/getting-started
=> https://react-slick.neostack.com/docs/get-started
=> https://www.npmjs.com/package/react-stripe-checkout

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
