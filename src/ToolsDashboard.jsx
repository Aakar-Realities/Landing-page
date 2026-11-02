import {
  BellRing,
  Building2,
  ChartNoAxesCombined,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  Search,
  Wallet,
} from "lucide-react";

const tools = [
  {
    name: "Inventory Management System",
    description: "Keep materials, stock, and site inventory in sync.",
    url: "https://aakar-builderstore.ai.studio/",
    icon: Building2,
    visual: "inventory",
  },
  {
    name: "PO vs Invoice",
    description: "Compare purchase orders with invoices, side by side.",
    url: "https://povsinvoice-comparator.ai.studio/",
    icon: FileCheck2,
    visual: "invoice",
  },
  {
    name: "Task Management",
    description: "Organize project work and keep the next steps moving.",
    url: "https://aakar-task.ai.studio",
    icon: ClipboardCheck,
    visual: "tasks",
  },
  {
    name: "Vendor and Quote Analysis",
    description: "Review vendor proposals and find the right fit.",
    url: "https://vendorandquotationanalysis.ai.studio",
    icon: ChartNoAxesCombined,
    visual: "vendors",
  },
  {
    name: "Research Tool",
    description: "Bring research and useful insights into one place.",
    url: "https://researchdashboard.ai.studio",
    icon: FileSearch,
    visual: "research",
  },
  {
    name: "Search Engine",
    description: "Find the information you need across your workspace.",
    url: "https://ai-search-os.ai.studio/",
    icon: Search,
    visual: "search",
  },
  {
    name: "Cashflow",
    description: "Get a clearer view of cashflow and finances.",
    url: "https://cashflowaakar.ai.studio/",
    icon: Wallet,
    visual: "cashflow",
  },
  {
    name: "E-Court Reminder Dashboard",
    description: "Stay on top of court dates and important reminders.",
    url: "https://lexicislegal.ai.studio/",
    icon: BellRing,
    visual: "reminders",
  },
];

function ToolCard({ tool, index }) {
  const Icon = tool.icon;

  return (
    <a
      className="tool-card"
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${tool.name} in a new tab`}
      style={{ "--card-index": index }}
    >
      <div className={`tool-visual tool-visual--${tool.visual}`}>
        <div className={`thumbnail-scene thumbnail-scene--${tool.visual}`} aria-hidden="true">
          {tool.visual === "inventory" && (
            <div className="inventory-preview">
              <div className="preview-heading"><span /> STOCK OVERVIEW</div>
              <div className="inventory-boxes">
                <i /><i /><i />
              </div>
              <div className="preview-foot"><span>Materials</span><b>128 items</b></div>
            </div>
          )}
          {tool.visual === "invoice" && (
            <div className="invoice-preview">
              <div className="invoice-sheet invoice-sheet--back">
                <span /><span /><span />
              </div>
              <div className="invoice-sheet invoice-sheet--front">
                <b>PO #2048</b><span /><span /><span className="invoice-total" />
              </div>
              <div className="match-stamp"><FileCheck2 size={13} /> MATCHED</div>
            </div>
          )}
          {tool.visual === "tasks" && (
            <div className="tasks-preview">
              <div className="preview-heading"><span /> PROJECT TASKS</div>
              <div className="task-line task-line--done"><i>✓</i><span /></div>
              <div className="task-line task-line--done"><i>✓</i><span /></div>
              <div className="task-line"><i /><span /></div>
              <div className="task-progress"><span /></div>
            </div>
          )}
          {tool.visual === "vendors" && (
            <div className="vendors-preview">
              <div className="preview-heading"><span /> QUOTE COMPARISON</div>
              <div className="vendor-chart">
                <i /><i /><i /><i /><i />
              </div>
              <div className="vendor-score"><ChartNoAxesCombined size={13} /> BEST VALUE</div>
            </div>
          )}
          {tool.visual === "research" && (
            <div className="research-preview">
              <div className="research-page">
                <b>Market insights</b><span /><span /><span />
                <div className="research-bars"><i /><i /><i /><i /></div>
              </div>
              <div className="research-note"><FileSearch size={14} /></div>
            </div>
          )}
          {tool.visual === "search" && (
            <div className="search-preview">
              <div className="search-field"><Search size={13} /><span>Find anything...</span><b>⌕</b></div>
              <div className="search-result"><i /><span /><span /></div>
              <div className="search-result search-result--second"><i /><span /><span /></div>
            </div>
          )}
          {tool.visual === "cashflow" && (
            <div className="cashflow-preview">
              <div className="cashflow-top"><span>Cash flow</span><b>+12.8%</b></div>
              <div className="cashflow-amount">₹ 8,42,650</div>
              <svg viewBox="0 0 220 70" role="presentation">
                <path className="cashflow-fill" d="M0 56 C24 52 27 36 52 42 S83 50 103 29 S130 37 151 22 S178 28 195 12 S211 15 220 3 V70 H0Z" />
                <path className="cashflow-line" d="M0 56 C24 52 27 36 52 42 S83 50 103 29 S130 37 151 22 S178 28 195 12 S211 15 220 3" />
              </svg>
            </div>
          )}
          {tool.visual === "reminders" && (
            <div className="calendar-preview">
              <div className="calendar-top"><span>OCTOBER 2026</span><b>•••</b></div>
              <div className="calendar-days"><i>M</i><i>T</i><i>W</i><i>T</i><i>F</i><i>S</i><i>S</i></div>
              <div className="calendar-dates">
                <i>12</i><i>13</i><i>14</i><i>15</i><i className="calendar-event">16</i><i>17</i><i>18</i>
              </div>
              <div className="calendar-event-label"><span /> Hearing · 10:30 AM</div>
            </div>
          )}
        </div>
        <span className="visual-icon-badge" aria-hidden="true">
          <Icon size={15} strokeWidth={1.8} />
        </span>
        <span className="visual-index">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="tool-info">
        <div className="tool-info-copy">
          <h2>{tool.name}</h2>
          <p>{tool.description}</p>
        </div>
      </div>
    </a>
  );
}

function App() {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <a className="brand" href="#home" aria-label="Aakar Realities home">
          <img
            className="brand-mark"
            src="/images/aakar-realities-logo.png"
            alt=""
          />
          <span className="brand-name">Aakar <strong>Realities</strong></span>
        </a>
      </header>

      <section className="dashboard-content" id="home">
        <div className="welcome">
          <div className="welcome-copy">
            <span className="eyebrow">
              <span className="eyebrow-line" />
              Aakar Realities · Workspace
            </span>
            <h1>
              The right tools.
              <br />
              <span>All in one place.</span>
            </h1>
            <p className="welcome-description">
              Your everyday workspace for projects, finance, research, and
              everything in between.
            </p>
          </div>
          <div className="welcome-art" aria-hidden="true">
            <div className="welcome-art-ring welcome-art-ring--outer" />
            <div className="welcome-art-ring welcome-art-ring--middle" />
            <div className="welcome-art-ring welcome-art-ring--inner" />
            <div className="welcome-art-center">
              <img src="/images/aakar-realities-logo.png" alt="" />
            </div>
            <span className="welcome-art-dot welcome-art-dot--one" />
            <span className="welcome-art-dot welcome-art-dot--two" />
          </div>
        </div>

        <section className="tools-section" id="tools" aria-labelledby="tools-title">
          <div className="tools-heading">
            <div>
              <span className="eyebrow">Your workspace</span>
              <h2 id="tools-title">Explore your tools</h2>
            </div>
            <span className="tools-count">
              <span>0{tools.length}</span> applications
            </span>
          </div>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <ToolCard key={tool.name} tool={tool} index={index} />
            ))}
          </div>
        </section>
      </section>

      <footer className="dashboard-footer">
        <a className="footer-brand" href="#home">Aakar Realities</a>
        <span>Built for better work.</span>
      </footer>
    </main>
  );
}

export default App;
