/* ============================================================
   Components — Samantha Rubinchik portfolio
   Depends on: window.SITE_DATA
   ============================================================ */

const D = window.SITE_DATA;

/* ---------- shared bits ---------- */

function MonoLabel({ children }) {
  return <span className="mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--ink-mute)" }}>{children}</span>;
}

function Arrow() {
  return <svg className="arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/></svg>;
}

/* ---------- TopBar ---------- */
function TopBar() {
  return (
    <div className="topbar">
      <div className="page topbar-inner">
        <a href="#top" className="brand"><span className="dot"></span>Samantha Rubinchik</a>
        <nav className="nav">
          <a href="#work">Selected Work</a>
          <a href="#timeline">Experience</a>
          <a href="#recommendation">Recommendation</a>
          <a href="#pitch">Why CFO</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="Samantha-Rubinchik-Resume.docx" download>Download CV ↓</a>
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero({ headline }) {
  const date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" }).toUpperCase();
  return (
    <header className="hero" id="top">
      <div className="hero-meta mono">
        <span><b>FILE</b> &nbsp;CV-001 / SAR</span>
        <span><b>POSITION</b> &nbsp;Prospective CFO · Security Engineering</span>
        <span><b>VINTAGE</b> &nbsp;{date}</span>
        <span><b>STATUS</b> &nbsp;<span style={{color:"var(--accent)"}}>● OPEN TO ROLE</span></span>
      </div>
      <h1>
        {headline ? (
          <span dangerouslySetInnerHTML={{ __html: headline }} />
        ) : (
          <>
            Underwrites risk.<br />
            <span className="accent">Ships</span> what she signs off on.
            <span className="small">Capital allocation, physical operations, and product — pointed at one job: CFO of a security-engineering company.</span>
          </>
        )}
      </h1>
      <p className="hero-thesis">{D.thesis}</p>
      <div className="hero-cta">
        <a className="btn" href="#work">Read the work <Arrow /></a>
        <a className="btn btn-ghost" href="#contact">Get in touch</a>
      </div>

      <Ticker />
    </header>
  );
}

function Ticker() {
  const items = [
    "JPMorgan Commercial Real Estate", "$540M+ Underwritten",
    "60-Client Treasury Book", "7 Active Flips · ~$3M avg",
    "Mercedes Innovation", "Shipped MIM (US ↔ DE)", "Cum Laude · Honors College",
    "Prospective CFO — Security Engineering",
  ];
  const row = (
    <div className="ticker-track">
      {items.map((t, i) => (
        <span key={i}>{t}<span className="sep">◆</span></span>
      ))}
    </div>
  );
  return (
    <div className="ticker">
      {row}{row}
    </div>
  );
}

/* ---------- Snapshot ---------- */
function Snapshot() {
  return (
    <section id="snapshot">
      <div className="page">
        <div className="section-head">
          <div className="label">§ 01 / Snapshot</div>
          <h2>Five years, three disciplines, one <em>operator</em>.</h2>
        </div>
        <div className="snapshot">
          {D.snapshot.map((s, i) => (
            <div className="snap-cell" key={i}>
              <div className="snap-val"><span className="accent">{s.value}</span></div>
              <div className="snap-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Cases ---------- */
function CaseStudies() {
  return (
    <section id="work">
      <div className="page">
        <div className="section-head">
          <div className="label">§ 02 / Selected Work</div>
          <h2>Three projects that show the <em>shape</em> of how I operate.</h2>
        </div>
        {D.cases.map((c) => <Case key={c.id} c={c} />)}
      </div>
    </section>
  );
}

function Case({ c }) {
  return (
    <article className="case">
      <div className="case-meta">
        <span className="id">{c.id}</span>
        <span className="tag">{c.tag}</span>
        <span className="year">{c.year}</span>
      </div>
      <div>
        <h3>{c.title}</h3>
        <div className="case-body">
          <div className="case-text">
            <p><span className="lbl">Problem</span>{c.problem}</p>
            <p><span className="lbl">Action</span>{c.action}</p>
            {c.link && (
              <a className="case-link" href={c.link.href} target="_blank" rel="noreferrer">
                {c.link.label} <Arrow />
              </a>
            )}
          </div>
          <dl className="case-outcome">
            {c.outcome.map((o, i) => (
              <React.Fragment key={i}>
                <dt>{o.k}</dt>
                <dd><span className="accent">{o.v}</span></dd>
              </React.Fragment>
            ))}
          </dl>
        </div>
      </div>
    </article>
  );
}

/* ---------- Timeline ---------- */
function Timeline() {
  return (
    <section id="timeline">
      <div className="page">
        <div className="section-head">
          <div className="label">§ 03 / Experience</div>
          <h2>The <em>full</em> ledger.</h2>
        </div>
        {D.timeline.map((t, i) => <TimelineRow t={t} key={i} />)}
      </div>
    </section>
  );
}

function TimelineRow({ t }) {
  return (
    <div className="tl-row">
      <div className="tl-when">
        {t.span}
        {t.kind && <div><span className="kind">{t.kind}</span></div>}
      </div>
      <div>
        <h3 className="tl-role">{t.role}</h3>
        {(t.org || t.place) && (
          <div className="tl-org">
            {t.org}{t.org && t.place ? " · " : ""}<span className="place">{t.place}</span>
          </div>
        )}
        {t.bullets && (
          <ul className="tl-bullets">
            {t.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}
        {t.rotations && t.rotations.map((r, i) => (
          <div className="tl-rotation" key={i}>
            <div className="tl-rot-head">
              <span className="tl-rot-name">{r.name}</span>
              <span className="tl-rot-span">{r.span}</span>
            </div>
            <ul className="tl-bullets">
              {r.notes.map((n, j) => <li key={j}>{n}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Letter of Recommendation ---------- */
function Recommendation() {
  const r = D.recommendation;
  const [open, setOpen] = React.useState(false);
  return (
    <section id="recommendation">
      <div className="page">
        <div className="section-head">
          <div className="label">§ 04 / Recommendation</div>
          <h2>What it&rsquo;s like to <em>work</em> with her, in someone else&rsquo;s words.</h2>
        </div>
        <div className="lor">
          <div>
            <p className="lor-quote">{r.pullQuote}</p>
            <div className="lor-attrib">
              <div><b>{r.author}</b></div>
              <div>{r.title}</div>
              <div>{r.org}</div>
              <div><span className="accent">●</span> &nbsp;<a href={`mailto:${r.email}`} style={{color:"inherit"}}>{r.email}</a></div>
            </div>
            <button className="lor-toggle" onClick={() => setOpen(o => !o)}>
              {open ? "— Collapse full letter" : "+ Read the full letter"}
            </button>
          </div>
          <dl className="lor-proofs">
            {r.proofs.map((p, i) => (
              <div className="lor-proof" key={i}>
                <dt>{p.k}</dt>
                <dd>{p.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        {open && (
          <div className="lor-full">
            <div className="label">Full text<br/><br/><a href={r.fileLink} download style={{color:"var(--accent)", textDecoration:"none", borderBottom:"1px solid var(--accent-soft)", paddingBottom:2}}>Download ↓</a></div>
            <div>
              {r.fullLetter.map((p, i) => <p key={i}>{p}</p>)}
              <div className="lor-sign">
                <div>Best regards,</div>
                <div><b>{r.author}</b></div>
                <div>{r.title}, {r.org}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- Pitch ---------- */
function Pitch() {
  return (
    <section id="pitch" style={{padding: 0}}>
      <div className="pitch">
        <div className="pitch-inner">
          <div className="section-head">
            <div className="label">§ 05 / Thesis</div>
            <h2 style={{margin:0}}>{D.pitch.headline.split(".").map((s, i, a) => (
              <React.Fragment key={i}>
                {i === 1 ? <em>{s}.</em> : (s + (i < a.length - 1 ? "." : ""))}
                {i < a.length - 2 && <br />}
              </React.Fragment>
            ))}</h2>
          </div>
          <div className="pitch-body">
            <div className="pitch-paras">
              {D.pitch.paras.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <dl className="pillars">
              {D.pitch.pillars.map((p, i) => (
                <div className="pillar" key={i}>
                  <dt>{p.k}</dt>
                  <dd>{p.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Education + leadership + honors ---------- */
function EduHonors() {
  return (
    <section id="edu">
      <div className="page">
        <div className="section-head">
          <div className="label">§ 06 / Background</div>
          <h2>Education, leadership, and the rest of the <em>record</em>.</h2>
        </div>
        <div className="three-col">
          <div>
            <h3>Education</h3>
            <div className="edu-school">{D.education.school}</div>
            <div className="edu-detail">{D.education.college}</div>
            <div className="edu-detail" style={{marginTop:12}}>{D.education.degree}</div>
            <div className="edu-detail">{D.education.major}</div>
            <div className="edu-detail">{D.education.concentration}</div>
            <div className="edu-mono">{D.education.gpa}</div>
          </div>
          <div>
            <h3>Leadership</h3>
            {D.leadership.map((l, i) => (
              <div className="lead-item" key={i}>
                <div className="lead-title">{l.title}</div>
                <div className="lead-span mono">{l.span}</div>
                <p className="lead-notes">{l.notes}</p>
              </div>
            ))}
          </div>
          <div>
            <h3>Honors & Involvement</h3>
            <ul>
              {D.honors.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact">
      <div className="page">
        <div className="section-head">
          <div className="label">§ 07 / Contact</div>
          <h2 style={{margin:0}}></h2>
        </div>
        <div className="contact">
          <h2>Looking for a CFO who can <em>underwrite</em>, <em>operate</em>, and <em>ship</em>?</h2>
          <div className="contact-list">
            <div className="contact-row">
              <div className="k">Email</div>
              <div className="v"><a href={`mailto:${D.email}`}>{D.email}</a></div>
            </div>
            <div className="contact-row">
              <div className="k">Phone</div>
              <div className="v">{D.phone}</div>
            </div>
            <div className="contact-row">
              <div className="k">LinkedIn</div>
              <div className="v"><a href={D.linkedin} target="_blank" rel="noreferrer">samantha-rubinchik</a></div>
            </div>
            <div className="contact-row">
              <div className="k">Based</div>
              <div className="v">{D.location}</div>
            </div>
            <div className="contact-row">
              <div className="k">Resume</div>
              <div className="v"><a href="Samantha-Rubinchik-Resume.docx" download>Samantha-Rubinchik-Resume.docx ↓</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <div className="page">
      <footer>
        <div>© {new Date().getFullYear()} Samantha Rubinchik · Built for YC W26 application</div>
        <div><a href={`mailto:${D.email}`}>{D.email}</a> &nbsp;·&nbsp; <a href={D.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
      </footer>
    </div>
  );
}

Object.assign(window, {
  TopBar, Hero, Snapshot, CaseStudies, Timeline, Recommendation, Pitch, EduHonors, Contact, Footer,
});
