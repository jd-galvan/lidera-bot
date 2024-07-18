/** @type {import('next').NextConfig} */
import { createProxyMiddleware } from 'http-proxy-middleware'

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/tags',
        destination: 'http://110.238.69.52:11434/api/tags',
      },
    ];
  },
  async serverMiddleware() {
    const proxy = createProxyMiddleware('/api/tags', {
      target: 'http://110.238.69.52:11434',
      changeOrigin: true,
      pathRewrite: {
        '^/api/tags': '/api/tags',
      },
    });

    return proxy;
  },
  output: 'standalone',
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped. Doesn't make much sense, but how it is
        fs: false, // the solution
        module: false,
        perf_hooks: false,
      };
    }

    return config
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};



export default nextConfig;
