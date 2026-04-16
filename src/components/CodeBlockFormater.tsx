import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

type Props = {
  type: "json" | "xml" | "html" | "text"
  content: any
}

export const CodeBlock = ({ type, content }: Props) => {

  const getLanguage = () => {
    switch (type) {
      case "json":
        return "json"
      case "xml":
        return "markup"
      case "html":
        return "html"
      default:
        return "text"
    }
  }

  const formatContent = () => {
    if (type === "json") {
      return JSON.stringify(content, null, 2)
    }
    return content
  }

  return (
    <div>
      <span className="badge bg-success">
        200 OK
      </span>
      <span className="badge bg-secondary mx-2">
        {type.toUpperCase()}
      </span>
      <SyntaxHighlighter
        language={getLanguage()}
        style={oneDark}
        customStyle={{
          borderRadius: "8px",
          fontSize: "0.85rem"
        }}
      >
        {formatContent()}
      </SyntaxHighlighter>
    </div>
  )
}