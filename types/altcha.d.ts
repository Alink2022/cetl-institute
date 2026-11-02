import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "altcha-widget": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        challenge?: string;
        configuration?: string;
        auto?: "off" | "onfocus" | "onload" | "onsubmit";
        language?: string;
        name?: string;
        type?: "native" | "checkbox" | "switch";
        display?: string;
        workers?: string | number;
      };
    }
  }
}
