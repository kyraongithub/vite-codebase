import React from "react";
import styles from "./styles.scoped.css";

export function LazyFallback() {
  const src = `data:image/png;base64,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`;

  return (
    <div>
      <div>
        <div />
        <img src={src} />
      </div>
    </div>
  );
}

export default LazyFallback;
