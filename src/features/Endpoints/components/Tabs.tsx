import { useState } from "react"

type TabItem = {
  key: string
  label: string
  content: React.ReactNode
}

type Props = {
  tabs: TabItem[]
  defaultTab?: string
}

export const Tabs = ({ tabs, defaultTab }: Props) => {
  const [active, setActive] = useState(defaultTab || tabs[0].key)

  return (
    <div>
      {/* Header */}
      <div className="d-flex border-bottom mb-3">
        {tabs.map(tab => (
          <div
            key={tab.key}
            onClick={() => setActive(tab.key)}
            style={{
              padding: "8px 16px",
              cursor: "pointer",
              borderBottom:
                active === tab.key ? "2px solid #0d6efd" : "none",
              color: active === tab.key ? "#0d6efd" : "#6c757d"
            }}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Content */}
      <div>
        {tabs.find(t => t.key === active)?.content}
      </div>
    </div>
  )
}