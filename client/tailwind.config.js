import withMT from "@material-tailwind/react/utils/withMT";
import daisyUI from "daisyui";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyUI],
  daisyui: {
    themes: ["pastel"],
  },
});
