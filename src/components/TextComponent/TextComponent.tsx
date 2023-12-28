// TextComponent.tsx

import React, { FC, useEffect, useState } from 'react';

interface TextComponentProps {
  text: string;
}

const TextComponent: FC<TextComponentProps> = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div
      className="my-component"
      style={{
        height: '50px',
        width: '100%',
        maxWidth: '100vw',
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '24px',
        margin: '30px auto', // Add marginTop and marginBottom
        borderRadius: '10px', // Add border-radius for rounded corners
        opacity: isVisible ? 1 : 0, // Add opacity for text animation
        transition: 'opacity 1s ease-in-out', // Add a smooth transition for opacity change
      }}
    >
      {text}
    </div>
  );
};

export default TextComponent;
