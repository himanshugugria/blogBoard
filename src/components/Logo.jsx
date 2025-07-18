import React from 'react'

function Logo({ width = '50px' }) {
  return (
    <img
      src="/public/logo.png"
      alt="Logo"
      style={{ width }}
      className="rounded-lg shadow-sm"
    />
  );
}


export default Logo