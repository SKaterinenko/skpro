import React from 'react';
import { FaGithub, FaRegEnvelope, FaTelegramPlane } from 'react-icons/fa';

const Sidebar = () => (
  <div className="sticky top-1/2 bottom-1/2">
    <div className="text-4xl cursor-pointer">
      <a role="link" href="https://t.me/SKaterinenko" target="_blank" rel="noreferrer"><FaTelegramPlane className="mb-8" /></a>
      <a href="mailto: skaterinenko@gmail.com" target="_blank" rel="noreferrer"><FaRegEnvelope className="mb-8" /></a>
      <a href="https://github.com/SKaterinenko" target="_blank" rel="noreferrer"><FaGithub className="mb-8" /></a>
    </div>
  </div>
);

export default Sidebar;
