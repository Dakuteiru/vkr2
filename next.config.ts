import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',        // Гарантирует создание статической папки
  images: {
    unoptimized: true,     // Отключает серверную оптимизацию картинок
  },
};


export default nextConfig;
