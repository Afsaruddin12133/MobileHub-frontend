import React from 'react';

const Loading = () => {
    return (
        <div class="flex justify-center items-center mt-52 mb-52">
        <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
};

export default Loading;