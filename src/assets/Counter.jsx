import React, { memo, useRef } from "react";

const Counter = () => {
  const renderCount = useRef(0);
  return (
    <div>
      <div className="mt-3  font-display text-center">
        <p>
          <span className="text-2xl">{renderCount.current++}</span>
        </p>
      </div>
    </div>
  );
};

export default memo(Counter);
