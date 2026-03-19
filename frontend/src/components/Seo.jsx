import { useEffect } from 'react';
import { siteConfig } from '../utils/site';

function Seo({ title, description }) {
  const fullTitle = `${title} | ${siteConfig.name}`;

  useEffect(() => {
    document.title = fullTitle;

    const updateMeta = (selector, attribute, key, content) => {
      let tag = document.head.querySelector(selector);

      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }

      tag.setAttribute('content', content);
    };

    updateMeta('meta[name="description"]', 'name', 'description', description);
    updateMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    updateMeta('meta[property="og:description"]', 'property', 'og:description', description);
    updateMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    updateMeta('meta[property="og:url"]', 'property', 'og:url', siteConfig.url);
    updateMeta('meta[property="og:site_name"]', 'property', 'og:site_name', siteConfig.name);
    updateMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    updateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    updateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  }, [description, fullTitle]);

  return null;
}

export default Seo;
