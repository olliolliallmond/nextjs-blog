/** @type {import('next').NextConfig} */

// Wrap NextJS config object in `withContentLayer` utility
// Modify code from docs from ES6+ to CommonJS import/export

const { withContentlayer } = require('next-contentlayer')

const nextConfig = {}

module.exports = withContentlayer({ ...nextConfig })

