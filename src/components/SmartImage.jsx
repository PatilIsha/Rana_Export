import { useState } from "react";

export default function SmartImage({ image, alt, className = "", imgClassName = "", ...rest }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`overflow-hidden bg-gradient-to-br from-forest-800 to-forest-950 ${className}`}>
      {!failed && (
        <img
          src={image}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
          {...rest}
        />
      )}
    </div>
  );
}
