import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function SyntaxHighlighterComponent({ code }: { code: string }) {
  return (
    <SyntaxHighlighter language="typescript" style={solarizedlight}>
      {code}
    </SyntaxHighlighter>
  );
}
