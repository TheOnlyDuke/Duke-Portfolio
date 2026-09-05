import next from "eslint-config-next/core-web-vitals";

/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...next,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "build_output.log",
      "install_output.log",
      "install_tw.log",
      "install_ts.log",
    ],
  },
];

export default config;
