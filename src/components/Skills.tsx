import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  prism,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

export function Skills() {
  const { theme } = useTheme();
  const syntaxHighlighterTheme = theme === "light" ? prism : atomDark;

  return (
    <div
      className="px-6 lg-px-8 justify-center flex mx-auto mt-16 rounded-md"
      id="skills"
    >
      <SyntaxHighlighter
        language="tsx"
        style={syntaxHighlighterTheme}
        customStyle={{
          maxHeight: "100%",
          overflow: "auto",
          background: "none",
          fontSize: "14px",
        }}
      >
        {`
export function Habilidades () {
  return (
    <div>
      <ul>        
        <li>NextJs</li>
        <li>Node.js®</li>
        <li>TypeScript</li>
        <li>Sanity.io</li>
        <li>Tailwind CSS</li>
        <li>Git</li>
        <li>Linux</li>
        <li>AWS</li>
        <li>Scrum</li>
        <li>DevOps</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Docker</li>
        <li>Web Accessibility</li>
        <li>ISO 27001</li>
      </ul>
    </div>
  );
};
`}
      </SyntaxHighlighter>
    </div>
  );
}
