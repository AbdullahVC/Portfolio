declare module "react-rotating-text" {
  import * as React from "react";

  export interface RotatingTextProps {
    items: string[];
    typingInterval?: number;
    deletingInterval?: number;
    pause?: number;
    emptyPause?: number;
    cursor?: string;
  }

  const RotatingText: React.FC<RotatingTextProps>;
  export default RotatingText;
}
