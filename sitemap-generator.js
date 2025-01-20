const fs = require('fs');
const paths = [
  '/',
  '/contact',
  '/about',
   '/hseq',
   '/refinery',
];

const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${paths
    .map((path) => {
      return `
    <url>
      <loc>https://taimyroil.com${path}</loc>
    </url>
  `;
    })
    .join('')}
</urlset>
`;

fs.writeFileSync('public/sitemap.xml', sitemap.trim());