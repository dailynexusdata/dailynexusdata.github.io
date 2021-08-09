import React from "react";

import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/duotoneLight";

const Code = ({ children, className }) => {
  const language = className.replace(/language-/, "");

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: "10px",
            "font-size": "12pt",
            margin: "10px 0",
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => {
                if (token.empty && i === tokens.length - 1) {
                  return null;
                }
                return <span key={key} {...getTokenProps({ token, key })} />;
              })}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
