import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <progress className="progress progress-secondary w-56 lg:w-96"></progress>
    </div>
  );
};

export default Loading;
