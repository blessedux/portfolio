import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none">
      <iframe
        src="https://my.spline.design/colorfulcursorblur-bHEedYpmYQovkJwP9qv8WMtz/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="fixed inset-0 pointer-events-auto"
        style={{ zIndex: -1 }}
      />
    </div>
  );
};

export default AnimatedBackground; 