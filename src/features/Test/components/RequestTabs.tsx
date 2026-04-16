import { useState } from "react"

type Tab = "params" | "headers" | "body" | "auth"

export const RequestTabs = () => {
  const [activeTab, setActiveTab] = useState<Tab>("params")

  return (
    <div>
        <h4>Parametros</h4>
        <hr />
        <div className="p-3 border rounded">
        {/* Tabs */}
        <div className="d-flex border-bottom mb-3 py-3">

            {[
            { key: "params", label: "Params" },
            { key: "headers", label: "Headers" },
            { key: "body", label: "Body" },
            { key: "auth", label: "Authorization" }
            ].map(tab => (
            <button
                key={tab.key}
                className={`btn btn-sm me-2 ${
                activeTab === tab.key ? "btn-primary" : "btn-outline-secondary"
                }`}
                onClick={() => setActiveTab(tab.key as Tab)}
            >
                {tab.label}
            </button>
            ))}

        </div>

        {/* Content */}
        <div>
            {activeTab === "params" && <div>Params content</div>}
            {activeTab === "headers" && <div>Headers content</div>}
            {activeTab === "body" && <div>Body content</div>}
            {activeTab === "auth" && <div>Auth content</div>}
        </div>
        </div>
    </div>
  )
}