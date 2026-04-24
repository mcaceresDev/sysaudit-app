import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

type Props = {
  type: "json" | "xml" | "html" | "text"
  content: unknown
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
    if (typeof content === "string") {
      return content
    }
    return JSON.stringify(content, null, 2)
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <span className="badge bg-success">
            200 OK
          </span>
          <span className="badge bg-secondary mx-2">
            {type.toUpperCase()}
          </span>
        </div>
        <button
          className="btn btn-sm btn-outline-success mb-2"
          onClick={() => navigator.clipboard.writeText(formatContent())}
        >
          Copiar
        </button>
      </div>

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