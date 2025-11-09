import React from 'react';

const SocialLinks = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/LyricalLemon' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/noahdias19' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername' }
  ];

  return (
    <div className="social-links">
      {socialLinks.map((link) => (
        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
