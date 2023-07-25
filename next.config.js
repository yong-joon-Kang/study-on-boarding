/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      "/": {
        page: "/products/list",
        query: { __nextDefaultLocale: "en" },
      }, // '/' 경로 대신 '/beautyShop/list'로 첫 페이지를 설정
    };
  },
};

module.exports = nextConfig;
