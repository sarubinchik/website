/* ============================================================
   Excel components — wittily financial portfolio
   ============================================================ */
const D = window.SITE_DATA;

/* ---------- App chrome ---------- */
function XLChrome() {
  return (
    <>
      <div className="titlebar">
        <div className="left">
          <span className="xicon">𝑿</span>
          <div className="qat">
            <span title="Save">💾</span>
            <span title="Undo">↶</span>
            <span title="Redo">↷</span>
          </div>
          <span className="file">WarpLab_<b>CFO_Portfolio.xlsx</b></span>
          <span className="pill">Saved · <s className="strike">OneDrive</s> "locally"</span>
        </div>
        <div className="right">
          <span className="pill">Share</span>
          <div className="winbtns"><span>—</span><span>▢</span><span>×</span></div>
        </div>
      </div>
      <div className="ribbon">
        <div className="ribbon-tab">File</div>
        <div className="ribbon-tab">Home</div>
        <div className="ribbon-tab active">Career</div>
        <div className="ribbon-tab">Insert</div>
        <div className="ribbon-tab">Formulas</div>
        <div className="ribbon-tab">Data</div>
        <div className="ribbon-tab">Review</div>
        <div className="ribbon-tab">View</div>
      </div>
      <div className="formulabar">
        <div className="namebox">A1</div>
        <div className="fx">𝑓𝑥</div>
        <div className="formula">
          <span className="fn">=CFO</span>(<span className="str">"private_ai_hardware"</span>, <span className="fn">SUM</span>(capital, ops, product), <span className="num">540000000</span>)
        </div>
      </div>
    </>);

}

/* ---------- Column headers (A B C ... Z) ---------- */
function XLColHeaders() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return (
    <div className="colheaders">
      <div className="corner"></div>
      {letters.map(l => <div className="col" key={l}>{l}</div>)}
    </div>);

}

/* ---------- Hero ---------- */
function XLHero() {
  return (
    <header className="hero" id="top">
      <div className="page">
        <div className="hero-grid">
          <div className="hero-cell">
            <div className="cell-coords">B2 · result</div>
            <div className="hero-formula">
              <span className="fn">=PIVOT</span>(<span className="str">"five_years"</span>, <span className="str">"three_disciplines"</span>, <span className="num">1</span>)
              <span className="com">// returns: one operator</span>
            </div>
            <h1>
              <span className="equals">=</span>CFO who <em>underwrites</em><br />
              <span className="equals">&amp;</span>ships <span className="hl">what she signs off on.</span>
            </h1>
            <p className="hero-thesis">
              JPMorgan commercial real-estate desk → residential and commercial buildouts on tight timelines → conceiving and prototyping internal software at Mercedes. Now pointed at one job: <em>CFO of Warp Laboratory, Inc. — building a private AI home server.</em>
            </p>
            <div className="hero-cta">
              <a className="btn" href="#work">Open the work →</a>
              <a className="btn btn-ghost" href="#contact">Insert → Comment</a>
              <a className="btn btn-ghost" href="Samantha-Rubinchik-Resume.docx" download>Download CV ↓</a>
            </div>
          </div>
          <div>
            <div className="sticky">
              note to YC partners: the financial<br />
              modeling is a side effect, not the<br />
              point. she keeps trusts of <em>operations.</em>
              <span className="author">— hypothetical reference, A1</span>
            </div>
          </div>
        </div>
      </div>
    </header>);

}

/* ---------- KPI Snapshot ---------- */
function XLKPI() {
  const sparks = [
  [3, 5, 7, 8, 12, 14, 18, 20],
  [22, 28, 35, 42, 50, 55, 58, 60],
  [1, 2, 2, 3, 5, 6, 6, 7],
  [5, 4, 3, 2, 2, 1.5, 1.2, 1]];

  return (
    <section id="snapshot">
      <div className="page">
        <div className="section-head">
          <div>
            <div className="ref">Sheet 1 · row 4–8 · range B4:E8</div>
            <h2>Snapshot, <em>summed.</em></h2>
          </div>
          <div className="meta">
            <div>=COUNTA(experience)</div>
            <div>last updated: 04/27/2026</div>
          </div>
        </div>
        <div className="kpi-grid">
          {D.snapshot.map((s, i) =>
          <div className="kpi" key={i}>
              <div className="ref-tag">Cell {String.fromCharCode(66 + i)}4</div>
              <div className="val">{s.value}<span className="arrow">▲</span></div>
              <div className="lbl">{s.label}</div>
              <div className="spark">
                {sparks[i].map((h, j) => <i key={j} style={{ height: h / Math.max(...sparks[i]) * 22 + 'px' }}></i>)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- Selected Work — pivot table (all rows expanded for static HTML) ---------- */
function XLWork() {
  return (
    <section id="work">
      <div className="page">
        <div className="section-head">
          <div>
            <div className="ref">Sheet 2 · "selected_work" · pivot view</div>
            <h2>Selected work, <em>filtered</em> for impact.</h2>
          </div>
          <div className="meta">
            <div>4 of 12 rows shown</div>
            <div className="cell-equation" style={{ marginTop: 8, fontSize: 11 }}><span className="fn">=FILTER</span>(work, impact &gt; <span className="num">8</span>)</div>
          </div>
        </div>
        <table className="case-table">
          <thead>
            <tr>
              <th>Ref</th><th>Year</th><th>Domain</th><th>Project</th><th>Headline metric</th>
            </tr>
          </thead>
          <tbody>
            {D.cases.map((c) =>
            <React.Fragment key={c.id}>
                <tr>
                  <td className="id-col">{c.id}</td>
                  <td className="year-col">{c.year}</td>
                  <td className="tag-col">{c.tag}</td>
                  <td className="title-col">{c.title}</td>
                  <td className="metric-col">{c.outcome[0].v}</td>
                </tr>
                <tr className="case-row-detail">
                  <td colSpan="5">
                    <div className="grid">
                      <div>
                        <div className="lbl">Problem</div>
                        <p>{c.problem}</p>
                      </div>
                      <div>
                        <div className="lbl">Action</div>
                        <p>{c.action}</p>
                        {c.link && <a className="extlink" href={c.link.href} target="_blank" rel="noreferrer">{c.link.label} ↗</a>}
                      </div>
                      <div className="out-card">
                        <div className="lbl" style={{ marginBottom: 10 }}>Outcome</div>
                        <dl>
                          {c.outcome.map((o, j) =>
                          <React.Fragment key={j}>
                              <dt>{o.k}</dt><dd>{o.v}</dd>
                            </React.Fragment>
                          )}
                        </dl>
                      </div>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            )}
          </tbody>
        </table>
      </div>
    </section>);

}

/* ---------- Timeline ---------- */
function XLTimeline() {
  return (
    <section id="timeline">
      <div className="page">
        <div className="section-head">
          <div>
            <div className="ref">Sheet 3 · "experience_log" · A1:F60</div>
            <h2>The full ledger, <em>unfiltered.</em></h2>
          </div>
          <div className="meta">
            <div>=ROWS(experience) → {D.timeline.length}</div>
            <div>sort: chronological desc.</div>
          </div>
        </div>
        <table className="tl-table">
          <thead>
            <tr>
              <th>Period</th><th>Role</th><th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {D.timeline.map((t, i) =>
            <tr className="tl-row" key={i}>
                <td className="tl-when-col">
                  {t.span}
                  {t.kind && <div><span className="kind">{t.kind}</span></div>}
                </td>
                <td className="tl-role-col">
                  <div className="role">{t.role}</div>
                  {(t.org || t.place) && <div className="org">{t.org}{t.org && t.place ? " · " : ""}{t.place}</div>}
                </td>
                <td>
                  {t.bullets && <ul className="tl-bullets">{t.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>}
                  {t.rotations && t.rotations.map((r, j) =>
                <div className="tl-rotation" key={j}>
                      <div className="tl-rot-head">
                        <span className="tl-rot-name">{r.name}</span>
                        <span className="tl-rot-span">{r.span}</span>
                      </div>
                      <ul className="tl-bullets">{r.notes.map((n, k) => <li key={k}>{n}</li>)}</ul>
                    </div>
                )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>);

}

/* ---------- Recommendation as Review > Comments (uses native <details> for collapse) ---------- */
function RecThread({ rec, color, expandable }) {
  return (
    <div className="rec-thread" style={{ marginBottom: 20 }}>
      <div className="rec-comment pinned">
        <div className="head">
          <span className="avatar" style={color ? { background: color } : null}>{rec.initials}</span>
          <span><span className="name">{rec.author}</span> · <span className="role">{rec.title}</span></span>
          <span className="pin">★ pinned</span>
        </div>
        <div className="body">"{rec.pullQuote}"</div>
        <div style={{ marginTop: 8, fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "var(--ink-mute)", letterSpacing: "0.08em" }}>{rec.org}</div>
      </div>
      {rec.proofs.map((p, i) =>
      <div className="rec-comment normal" key={i}>
          <div className="head">
            <span className="avatar" style={{ background: "var(--xl-green-light)" }}>{rec.initials}</span>
            <span><span className="name">{rec.author}</span> · replied · <span className="mono">{p.k}</span></span>
          </div>
          <div className="body">{p.v}</div>
        </div>
      )}
      {expandable && rec.fullLetter &&
      <details className="rec-comment normal rec-details" style={{ borderTop: "1px dashed var(--grid)" }}>
          <summary className="rec-toggle">Expand full letter</summary>
          <div className="rec-full">
            {rec.fullLetter.map((p, i) => <p key={i}>{p}</p>)}
            <div className="rec-sign">
              <div>Best regards,</div>
              <div><b>{rec.author}</b> · {rec.title} · {rec.org}</div>
              {rec.fileLink && <div style={{ marginTop: 8 }}><a href={rec.fileLink} download style={{ color: "var(--link)" }}>Download original ↓</a></div>}
            </div>
          </div>
        </details>
      }
    </div>);

}

function XLRec() {
  const james = D.recommendations && D.recommendations[0] || D.recommendation;
  const janaki = D.recommendations && D.recommendations[1];
  // attach full letter to james from legacy recommendation block
  const jamesFull = { ...james, fullLetter: D.recommendation.fullLetter, fileLink: D.recommendation.fileLink };
  return (
    <section id="recommendation">
      <div className="page">
        <div className="section-head">
          <div>
            <div className="ref">Review · Comments thread · 2 reviewers</div>
            <h2>Letters of <em>recommendation,</em> threaded.</h2>
          </div>
          <div className="meta">
            <div>2 reviewers · pinned</div>
            <div>resolved: <span style={{ color: "var(--xl-green)" }}>✓</span></div>
          </div>
        </div>
        <div className="rec">
          <div>
            <RecThread rec={jamesFull} expandable />
            {janaki && <RecThread rec={janaki} color="#0563c1" />}
          </div>
          <div>
            <div className="rec-stats">
              <div className="rec-stat">
                <div className="ref-tag">cell C12</div>
                <div className="val">$250M</div>
                <div className="desc">Mercedes 2nd US campus, Woodstock AL — site selection, briefings, project coordination.</div>
              </div>
              <div className="rec-stat">
                <div className="ref-tag">cell C13</div>
                <div className="val">&lt;1%</div>
                <div className="desc">Year-end capital deployment variance across ~1,000 line items.</div>
              </div>
              <div className="rec-stat">
                <div className="ref-tag">cell C14</div>
                <div className="val">Scoped</div>
                <div className="desc">MIM crisis-management app designed and prototyped on the IT Innovation team — scoped for plantwide rollout after the rotation.</div>
              </div>
              <div className="rec-stat" style={{ borderLeft: "3px solid #0563c1" }}>
                <div className="ref-tag" style={{ color: "#0563c1" }}>cell C15 · per Janaki Kumar</div>
                <div className="val">Top 10</div>
                <div className="desc">Co-submitted an Innovation idea inside Commercial Bank — rated top 10 across the bank.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- Thesis ---------- */
function XLThesis() {
  const skills = [
  { k: "Underwriting at scale", v: 95, note: "$540M+ CRE deals · JPM" },
  { k: "Capital deployed, on plan", v: 94, note: "<1% variance, ~1,000 line items · Mercedes" },
  { k: "Deal structuring & credit", v: 90, note: "Multifamily underwriting, loan structures · JPM CTL" },
  { k: "Hardware-adjacent execution", v: 92, note: "7 flips, $3M avg, $175K → $1.6M · BBH" },
  { k: "Customer discovery", v: 86, note: "75 property-owner interviews · JPM CRE Digital" },
  { k: "Stakeholder management", v: 88, note: "US ↔ DE, 5-VP panels, 60-client TSS book" }];

  return (
    <section id="thesis">
      <div className="page">
        <div className="section-head">
          <div>
            <div className="ref">Sheet 4 · "thesis" · A1</div>
            <h2>Why CFO. Why <em>private AI hardware.</em> Why now.</h2>
          </div>
          <div className="meta">
            <div className="cell-equation" style={{ fontSize: 11 }}><span className="fn">=THESIS</span>(<span className="str">"trust"</span>, <span className="str">"range"</span>)</div>
          </div>
        </div>
        <div className="thesis-grid">
          <div className="thesis-paras">
            {D.pitch.paras.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="bar-chart">
            <h4 className="scrawl" style={{ color: "rgb(61, 121, 71)", fontSize: "32px", height: "32px", fontFamily: "\"Permanent Marker\"" }}>Auditable!</h4>
            <div className="subt" style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.02em" }}>=VLOOKUP(experience, real_life)</div>
            {skills.map((s, i) =>
            <div className="bar-row" key={i} style={{ gridTemplateColumns: "210px 1fr 40px" }}>
                <span className="name" title={s.note}>
                  {s.k}
                  <span style={{ display: "block", fontFamily: "Inter, sans-serif", fontSize: 10, color: "var(--ink-mute)", letterSpacing: "0.02em", marginTop: 2, fontWeight: 400, textTransform: "none" }}>{s.note}</span>
                </span>
                <div className="bar"><div className="fill" style={{ width: s.v + "%" }}></div></div>
                <span className="v">{s.v}</span>
              </div>
            )}
            <div className="chart-legend">scored by depth and scale of work</div>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- Edu / leadership / honors ---------- */
function XLEdu() {
  return (
    <section id="edu">
      <div className="page">
        <div className="section-head">
          <div>
            <div className="ref">Sheet 5 · "background" · A1:C30</div>
            <h2>Background, <em>itemized.</em></h2>
          </div>
        </div>
        <div className="three-col">
          <div className="panel">
            <h3>Education</h3>
            <div className="edu-school">{D.education.school}</div>
            <div className="edu-detail">{D.education.college}</div>
            <div className="edu-detail" style={{ marginTop: 10 }}>{D.education.degree}</div>
            <div className="edu-detail">{D.education.major}</div>
            <div className="edu-detail">{D.education.concentration}</div>
            <div className="edu-mono">{D.education.gpa}</div>
          </div>
          <div className="panel">
            <h3>Leadership</h3>
            {D.leadership.map((l, i) =>
            <div className="lead-item" key={i}>
                <div className="lead-title">{l.title}</div>
                <div className="lead-span">{l.span}</div>
                <p className="lead-notes">{l.notes}</p>
              </div>
            )}
          </div>
          <div className="panel">
            <h3>Honors</h3>
            <ul>{D.honors.map((h, i) => <li key={i}>{h}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- Contact ---------- */
function XLContact() {
  return (
    <section id="contact">
      <div className="page">
        <div className="section-head">
          <div>
            <div className="ref">Sheet 6 · "hello" · contact form</div>
            <h2>The CFO of <em>Warp Laboratory, Inc.</em></h2>
          </div>
        </div>
        <div className="contact-grid">
          <div>
            <p style={{ maxWidth: "42ch", color: "var(--ink-soft)", fontSize: 16, lineHeight: 1.6 }}>Warp Laboratory, Inc. is building a private AI home server — local storage, networking, and smart-home, all on-device. Based in Costa Mesa, CA. I run capital, operations, and the financial story.</p>
            <div className="cell-equation" style={{ marginTop: 24 }}>
              <span className="fn">=HYPERLINK</span>(<span className="str">"mailto:{D.email}"</span>, <span className="str">"let's talk"</span>)
            </div>
          </div>
          <div className="form-card">
            <div className="form-row"><div className="k">email</div><div className="v"><a href={`mailto:${D.email}`}>{D.email}</a></div></div>
            <div className="form-row"><div className="k">phone</div><div className="v">{D.phone}</div></div>
            <div className="form-row"><div className="k">linkedin</div><div className="v"><a href={D.linkedin} target="_blank" rel="noreferrer">samantha-rubinchik</a></div></div>
            <div className="form-row"><div className="k">based</div><div className="v">{D.location}</div></div>
            <div className="form-row"><div className="k">cv</div><div className="v"><a href="Samantha-Rubinchik-Resume.docx" download>Samantha-Rubinchik-Resume.docx</a></div></div>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- Sheet tabs + status bar ---------- */
function XLTabs() {
  const tabs = [
    { id: "top",            label: "Career" },
    { id: "snapshot",       label: "Snapshot" },
    { id: "work",           label: "Work" },
    { id: "timeline",       label: "History" },
    { id: "recommendation", label: "Reviews" },
    { id: "thesis",         label: "Thesis" },
    { id: "edu",            label: "Background" },
    { id: "contact",        label: "Hello" },
  ];
  const [active, setActive] = React.useState("top");

  React.useEffect(() => {
    const onScroll = () => {
      const probe = window.innerHeight * 0.35;
      let current = tabs[0].id;
      for (const t of tabs) {
        const el = document.getElementById(t.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= probe) current = t.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="tabbar">
      {tabs.map(t => (
        <a key={t.id} href={"#" + t.id} className={active === t.id ? "active" : ""}>{t.label}</a>
      ))}
      <span className="plus">＋</span>
    </div>);

}
function XLStatus() {
  return (
    <div className="statusbar">
      <div className="left">
        <span>Ready</span>
        <span>· Calculate: Automatic</span>
        <span>· Sum: <b>1 candidate</b></span>
      </div>
      <div>
        <a href={`mailto:${D.email}`}>{D.email}</a>
        &nbsp;·&nbsp;<a href={D.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        &nbsp;·&nbsp;© {new Date().getFullYear()}
      </div>
    </div>);

}

Object.assign(window, { XLChrome, XLColHeaders, XLHero, XLKPI, XLWork, XLTimeline, XLRec, XLThesis, XLEdu, XLContact, XLTabs, XLStatus });