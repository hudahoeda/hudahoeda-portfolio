/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://hudahoeda.tech', // Replace with your actual domain
  generateRobotsTxt: false, // Set to false since we already have a custom robots.txt
  generateIndexSitemap: true,
  sitemapSize: 7000,
  priority: 0.7,
  changefreq: 'daily',
  exclude: ['/404'], // Add any paths you want to exclude
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
} 