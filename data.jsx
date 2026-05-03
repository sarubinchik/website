/* ============================================================
   CONTENT — single source of truth for the site
   ============================================================ */

const SITE_DATA = {
  name: "Samantha Rubinchik",
  email: "srubinchik@warp-lab.ai",
  phone: "(949) 247-1540",
  linkedin: "https://www.linkedin.com/in/samantha-rubinchik-8a909110a/",
  location: "Costa Mesa, CA",

  // hero
  position: "CFO, Warp Laboratory, Inc.",
  thesis:
    "CFO of Warp Laboratory, Inc. — building Droplet, an on-prem AI appliance for compliance-heavy SMBs that replaces Dropbox, Microsoft 365 storage, Copilot, the router, and the Wi-Fi in one box. Operator who underwrites risk and ships: three years on the JPMorgan commercial real-estate desk, two years running residential and commercial buildouts, and a track record of conceiving and prototyping internal software. Range, pointed at the financial spine of a hardware-meets-AI company.",

  // top-of-page numbers
  snapshot: [
    { value: "$540M+", label: "CRE deals underwritten at JPMorgan" },
    { value: "60", label: "Treasury Sales clients ($2.5B book) covered as interim associate" },
    { value: "7", label: "Active residential flips, ~$3M avg" },
    { value: "1 mo.", label: "Full structural remodel (vs. 6–8 mo. industry std.)" },
  ],

  // hero case studies
  cases: [
    {
      id: "C-01",
      tag: "Real Estate · Design, Budgeting & Construction Mgmt",
      year: "2025–26",
      title: "Huntington Beach: a 4-bed remodel, permitted, in 30 days.",
      problem:
        "Industry standard is 6–8 months for a full structural remodel. We had to flip on a $175K budget without compromising the listing.",
      action:
        "Owned plans, permits, contractor selection, materials sourcing, and budget. Sequenced trades aggressively, kept inspectors in the loop, ran daily standups on site.",
      outcome: [
        { k: "Timeline", v: "30 days end-to-end" },
        { k: "Budget", v: "$175K, on plan" },
        { k: "List price", v: "$1.6M" },
      ],
      link: {
        label: "Listing on Redfin",
        href: "https://www.redfin.com/CA/Huntington-Beach/10121-Kukui-Dr-92646/home/3815561",
      },
    },
    {
      id: "C-02",
      tag: "Capital · Treasury Sales",
      year: "2023",
      title: "JPMorgan TSS: a 60-client / $2.5B book, covered through the SVB crisis — and earned the title mid-engagement.",
      problem:
        "Silicon Valley Bank collapsed in March 2023 and the senior associate on the desk stepped away. Sixty Treasury Sales relationships ($2.5B in coverage) needed full coverage on no-notice, with deployments and client questions in flight.",
      action:
        "Took the 60-client / $2.5B book (25 active, 35 passive) plus overflow as interim associate — still technically pre-hire. Drafted Product Letters, built the TS Matrix, modeled Pro Formas, kept detailed call notes, and partnered with internal services on white-glove deployments. JPMorgan offered the full Associate title in the middle of the engagement.",
      outcome: [
        { k: "Clients covered", v: "60 / $2.5B book" },
        { k: "Mid-engagement", v: "Offered full Associate title" },
        { k: "Context", v: "SVB crisis, March 2023" },
      ],
    },
    {
      id: "C-03",
      tag: "Capital · Underwriting",
      year: "2022",
      title: "JPMorgan REB: ~11 large CRE deals — including the desk's two biggest closes that year.",
      problem:
        "Real Estate Banking team needed to clear an annual revenue target while maintaining underwriting discipline across a varied submarket book.",
      action:
        "Underwrote ~11 large CRE deals as analyst, including a ~$1.0B regional mall and a ~$175M Los Angeles office (both closed). Operated in the team's underwriting models and learned them, ran submarket research, drafted credit memos, and authored a handover doc the next class of associates still uses.",
      outcome: [
        { k: "Deals underwritten", v: "~11" },
        { k: "Two biggest closes", v: "~$1.0B mall · ~$175M LA office" },
        { k: "Team's yearly goal", v: "Hit by end of Q1" },
      ],
    },
    {
      id: "C-04",
      tag: "Product · Zero-to-One",
      year: "2018",
      title: "Major Incident Management (MIM): an incident-response app, designed and prototyped at Mercedes.",
      problem:
        "Crisis communication between MBUSI (Alabama) and Mercedes Germany was scattered across email, phone, and shared drives during major incidents.",
      action:
        "Conceived and specified the Major Incident Management app — grouped contacts, embedded video, shared risk sheet, document upload, incident stopwatch. Took it from concept through prototype and stakeholder review; it was being scoped for future deployment after I left the program.",
      outcome: [
        { k: "Status", v: "Designed, prototyped, scoped for rollout" },
        { k: "Scope", v: "US ↔ DE crisis coordination" },
      ],
    },
  ],

  // full timeline
  timeline: [
    {
      role: "Chief Financial Officer",
      org: "Warp Laboratory, Inc.",
      place: "Costa Mesa, CA",
      span: "Feb 2026 – Present",
      kind: "On-prem AI for SMBs",
      bullets: [
        "Run capital, operations, and the financial story for an early-stage company building Droplet — an on-prem AI appliance for SMBs. One box plugs in and replaces Dropbox, Microsoft 365 storage, Copilot, the router, and the Wi-Fi; private data never leaves the building.",
        "Own cap table, financial model, board-facing reporting, and supply-chain / procurement support.",
        "Translate engineering work into the language investors, partners, and customers need.",
      ],
    },
    {
      role: "Designer & Project Manager",
      org: "Bye Bye House",
      place: "Irvine, CA",
      span: "Oct 2025 – Feb 2026",
      kind: "Real Estate",
      bullets: [
        "End-to-end design and PM for residential renovations and commercial buildouts: plans, permitting, contractors, materials, budget.",
        "Designing two new offices in Calabasas and Westlake for Innovate Realty's expansion.",
        "Managing 7 active residential flips across LA and Orange County, ~$3M average.",
        "Delivered a 4-bed/2-bath structural remodel in Huntington Beach in 30 days on a $175K budget; listed at $1.6M.",
      ],
    },
    {
      role: "Career break — India & London",
      org: "",
      place: "",
      span: "Oct 2023 – Oct 2024",
      kind: "Break",
      bullets: ["Lived abroad. Reset, traveled, returned with a clearer thesis on operating roles."],
    },
    {
      role: "Commercial Real Estate Rotational Analyst",
      org: "JPMorgan Chase & Co.",
      place: "Irvine, CA",
      span: "Jul 2020 – Sep 2023",
      kind: "Finance",
      rotations: [
        {
          name: "Treasury Sales",
          span: "Aug 2022 – Sep 2023",
          notes: [
            "Given a 60-client / $2.5B book (25 active, 35 passive) plus overflow as interim associate — still technically pre-hire — during the Silicon Valley Bank crisis; offered the full Associate title mid-engagement.",
            "Drafted Product Letters, built TS Matrix, modeled Pro Formas, ran detailed call notes.",
            "Partnered with internal services to deploy and follow up on white-glove deployments.",
            "Improved commercial-card opening process by syncing the card team with client feedback.",
          ],
        },
        {
          name: "Real Estate Banking",
          span: "Jan 2022 – Jul 2022",
          notes: [
            "Underwrote ~11 large CRE deals as analyst, including a ~$1.0B regional mall and a ~$175M Los Angeles office (both closed); team hit yearly revenue goal within Q1 2022.",
            "Performed submarket research to support financing decisions.",
            "Authored standardized handover doc for incoming associates.",
          ],
        },
        {
          name: "Commercial Term Lending",
          span: "Jul 2021 – Dec 2021",
          notes: [
            "Sales: matched portfolios to loan structures (I/O, hybrid, SOFR, prepayment options).",
            "Credit: underwrote 180+ multifamily real-estate loans (each under $15MM).",
          ],
        },
        {
          name: "CRE Strategy",
          span: "Mar 2021 – Jun 2021",
          notes: [
            "Built end-of-year strategy pitch packages for each LOB.",
            "Sat in on cross-LOB strategy sessions; sharpened ability to pitch on tight timelines.",
          ],
        },
        {
          name: "CRE Digital Innovation (Product)",
          span: "Jul 2020 – Feb 2021",
          notes: [
            "Top 10, corporate-wide Client Service Competition, for an affordable-housing platform concept.",
            "Interviewed 75 property owners to scope an innovative real-estate product.",
            "Reorganized team meeting cadence to improve tech ↔ business communication.",
          ],
        },
      ],
    },
    {
      role: "CRE Digital Summer Intern",
      org: "JP Morgan Private Bank",
      place: "Palo Alto, CA",
      span: "Summer 2019",
      kind: "Finance",
      bullets: [
        "Designed UI for a market-metrics platform (team of two).",
        "Interviewed tenants and investors to identify market pain points.",
        "Worked with internal branding team on positioning.",
        "Organized training content for the next intern cohort.",
      ],
    },
    {
      role: "Mercedes-Benz Co-Op",
      org: "MBUSI",
      place: "Vance, AL",
      span: "Fall 2017 – Spring 2019",
      kind: "Product",
      rotations: [
        {
          name: "IT Client Team",
          span: "Fall 2018",
          notes: [
            "Built 17 graphical templates the plant still uses for project planning and monitoring.",
          ],
        },
        {
          name: "IT Innovation",
          span: "Summer 2018",
          notes: [
            "Conceived and prototyped MIM — a US ↔ DE crisis-management app with grouped contacts, video, shared risk sheet, doc upload, incident stopwatch. Scoped for future deployment after my rotation.",
            "Co-organized 2018 MBUSI Innovation Challenge; helped pick the top 8 finalist teams.",
          ],
        },
        {
          name: "Investments & Projects",
          span: "Fall 2017",
          notes: [
            "Built an end-of-year expenditure macro mapping spend by department.",
            "Conceived and led MBIConnect, a Jive-backed social intranet for interns and new hires; led a team of 8 to launch in 5 months.",
          ],
        },
      ],
    },
  ],

  education: {
    school: "The University of Alabama",
    college: "Culverhouse College of Commerce, Honors College",
    degree: "B.S. Commerce & Business Administration",
    major: "Major: Management",
    concentration: "Concentrations: Data Analytics & Real Estate Development",
    gpa: "GPA 3.67/4.0, Cum Laude",
  },

  leadership: [
    {
      title: "Board Member, JPMorgan CRE Analyst & Associate Council",
      span: "2021 – Present",
      notes:
        "Built remote-onboarding rituals for analysts during COVID; authored LOB-aligned onboarding docs.",
    },
    {
      title: "President, University of Alabama Toastmasters International",
      span: "2017 – 2019",
      notes: "Ran meetings, grew membership, structured content to member goals.",
    },
  ],

  recommendations: [
    {
      author: "James Hans",
      initials: "JH",
      title: "Sr. Manager, Finance & Controlling",
      org: "Mercedes-Benz US International",
      pullQuote:
        "Samantha is in my opinion an exceptionally bright and gifted young woman who will succeed in any environment. I honestly believe that the more difficult tasks motivated her to push harder and get better results.",
      proofs: [
        { k: "$250M project", v: "On the controlling team for the Woodstock 2nd campus — site selection, briefings, and project coordination." },
        { k: "<1% capital variance", v: "Steered year-end use of capital investment to a minor (<1%) deviation across nearly 1,000 line items." },
        { k: "Plantwide-scoped", v: "Major Incident Management app she conceived on the IT Innovation team was scoped for plantwide rollout." }
      ],
      fileLink: "SR-Letter-of-Recommendation-James-Hans.docx"
    },
    {
      author: "Janaki Kumar",
      initials: "JK",
      title: "Managing Director · Chief Design Officer, Global Banking",
      org: "JPMorgan Chase & Co. · LinkedIn rec, June 2021",
      pullQuote:
        "Sam is creative, innovative and a great colleague to work with. She manages multiple priorities effectively and gets things done.",
      proofs: [
        { k: "Top 10", v: "Co-submitted an Innovation idea inside Commercial Bank — rated top 10 across the bank." },
        { k: "Trust", v: "Builds trusting relationships with clients; an asset to any organization." },
        { k: "Context", v: "Worked together on CRE Digital, the digital arm of JPMorgan Commercial Real Estate." }
      ],
      fileLink: null
    }
  ],

  recommendation: {
    author: "James Hans",
    title: "Sr. Manager, Finance & Controlling Dept.",
    org: "Mercedes-Benz U.S. International",
    email: "james.hans@daimler.com",
    pullQuote:
      "Samantha is in my opinion an exceptionally bright and gifted young woman who will succeed in any environment. I honestly believe that the more difficult tasks motivated her to push harder and get better results.",
    proofs: [
      {
        k: "$250M project",
        v: "Assisted leadership on Mercedes' second US campus in Woodstock, AL — site selection analysis, management briefings, project coordination."
      },
      {
        k: "<1% variance",
        v: "Steered year-end capital deployment across ~1,000 project line items by chasing forecasts directly with Technical Managers and Project Leaders."
      },
      {
        k: "Plantwide deployment",
        v: "Major Incident Management app she conceived on the IT Innovation team was scheduled for plantwide rollout."
      }
    ],
    fullLetter: [
      "It is my pleasure to provide this recommendation for Samantha Rubinchik. I first met Samantha at a career fair on the campus of the University of Alabama. I attended the fair to recruit for positions in the Mercedes-Benz US International co-op program, and toward the end of a long day was approached by a very confident young woman with an impressive knowledge of Daimler AG and the production plant in Tuscaloosa. While her introduction was excellent, the substance of our conversation was quite impressive — she demonstrated that she understood the financial concepts and critical thinking that would make her a valued team member.",
      "She excelled in the formal interview process and accepted the offer to join our program. I requested that she start her first rotation in my team and assigned her to the standard co-op task set. Very quickly she started to excel at her work and actively asked to be more involved and have additional tasks, showing high initiative.",
      "She supported the process of steering the year-end use of capital investment to a minor (<1%) deviation by contacting the project teams to forecast what the spending per project line item would be at the close of the fiscal year. She worked extremely diligently and at one point actually had feedback on all ~1,000 project line items. This required her to get answers from Technical Managers and Project Leaders, which she did in a highly professional manner.",
      "During her term, Mercedes-Benz US International was also involved in real estate purchases of several parcels of land for the site of our 2nd US campus in Woodstock, Alabama. This was a $250,000,000 project under my leadership. Samantha assisted me in multiple facets including analysis of site selection alternatives, creation of management briefings, and overall coordination of project meetings. Her private real estate experience and knowledge of the real estate world was a key success factor for the overall project (first operation, January 2019).",
      "In addition, Samantha was allowed to facilitate the Investment and Project Controlling weekly team meetings. She accompanied me to the Career Fair to represent the best and brightest of the Mercedes-Benz US International Co-Op program, and to multiple speaking engagements at the University of Alabama, creating innovative and appealing presentation materials on her own with minimal guidance from me.",
      "Samantha is in my opinion an exceptionally bright and gifted young woman who will succeed in any environment. I honestly believe that the more difficult tasks motivated her to push harder and get better results.",
      "I was recently promoted to Sr. Manager of the Controlling team. During the selection process, Samantha challenged me on why I wanted the job, and what I was going to do with the department. These conversations proved invaluable to me during the actual interview process with a panel of 5 vice presidents and directors, where many similar questions were posed.",
      "If your program is looking for superior candidates with a record of achievement, Samantha is an exceptional choice. She rises to any challenge facing her and pushes herself to learn what she needs for the overall success of the task. As I expected, she has quickly gained attention in the IT Department on the IT Innovation team with her Major Incident Management App that will be deployed plantwide. Samantha is also a team player — she created long-term relationships with several of our German interns and worked beyond my area to create a concept for a social network platform for interns and co-ops; along with some other students, this idea was implemented and is being used by all of our co-ops and interns.",
      "To conclude, I would like to restate my strong recommendation for Samantha Rubinchik. She is an extraordinary asset to my organization and I feel strongly she would benefit any organization in which she works."
    ],
    fileLink: "SR-Letter-of-Recommendation-James-Hans.docx"
  },

  honors: [
    "Military SAF Case Worker, American Red Cross — 2020",
    "UA Healthcare Analytics Society Scholar — 2019–20",
    "MBUSI High-Performance Co-Op — 2018",
    "Mercedes-Benz Student Co-Op Board — 2017–Present",
    "Brother, Alpha Kappa Psi · Sister, Delta Gamma",
    "UA Dean's List — 2015–16, 2017–18",
    "Julie Inman Courage Award & Scholarship — 2015",
  ],

  // why CFO / why this company
  pitch: {
    headline: "Why I'm the CFO of an on-prem AI company.",
    paras: [
      "Warp Laboratory is building Droplet — an on-prem AI appliance for compliance-heavy SMBs. One box plugs into the network and replaces Dropbox, Microsoft 365 storage, Copilot, the router, and the Wi-Fi. AI runs locally on an NPU as a unified agent across files, cameras, smart devices, and access control — answering questions, summarizing camera footage, drafting emails, controlling Matter devices and network settings, all from a single chat tied to existing team identity. Every action passes a 3-tier safety system (reads run automatically; writes need confirmation; destructive operations are blocked by design). Private data never leaves the building. The CFO's job here is to fund the hardware roadmap, build a sane unit economic, and tell that story to investors and customers without watering it down.",
      "My career has been the right kind of preparation. At JPMorgan I underwrote $540M+ of commercial real-estate deals and ran a 60-client Treasury book — risk modeling and stakeholder management at speed. At Bye Bye House I priced, permitted, and shipped physical projects on tight budgets where every variance was real cash. At Mercedes I designed internal software from a blank page.",
      "A hardware-meets-AI CFO has to model BOM and margins, negotiate a credit facility, sit across from supply-chain partners, and translate engineering progress into a story investors believe. Range is the job — and it's why I'm here.",
    ],
    pillars: [
      {
        k: "Capital",
        v: "Underwriting, treasury, credit. JPMorgan-trained on the discipline side of the balance sheet.",
      },
      {
        k: "Operations",
        v: "Permits, contractors, budgets, timelines. Comfortable owning P&L for things that get built in the real world.",
      },
      {
        k: "Product",
        v: "Have shipped software from scratch. Can speak fluently with engineers without pretending to be one.",
      },
    ],
  },
};

window.SITE_DATA = SITE_DATA;
