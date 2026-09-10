/* ============================================================
   CONTENT — single source of truth for the whole portfolio.
   Every section of the site reads from this file, so editing
   content never requires touching a component.
   ============================================================ */

export const profile = {
  firstName: 'Sheetal',
  fullName: 'Sheetal Dnyaneshwar Kirjawalekar',
  displayName: 'Sheetal Kirjawalekar',
  role: 'Techno-functional Business Analyst',
  location: 'Pune, Maharashtra, India',
  email: 'shitalkirjawalekar@gmail.com',
  phone: '+91 76203 39297',
  phoneHref: '+917620339297',
  linkedin: 'linkedin.com/in/shitalkirjawalekar',
  linkedinHref: 'https://www.linkedin.com/in/shitalkirjawalekar',
  availability: 'Immediate Joiner',
  dob: '07 Nov 1992',
  resume: './assets/Sheetal_Kirjawalekar_Resume.pdf',
  photo: './assets/img/profile.webp',
  photoFallback: './assets/img/profile.jpg',
  photoSrcSet: './assets/img/profile.webp 640w, ./assets/img/profile@2x.webp 800w'
}

export const hero = {
  eyebrow: 'Techno-functional Business Analyst · Pune, India',
  titleTop: 'Sheetal',
  titleAccent: 'Kirjawalekar',
  intro:
    'I turn complex business needs into elegant, working solutions — translating stakeholder intent into crisp requirements, precise models and shipped software across banking, finance, healthcare & ERP.',
  rotatorWords: ['decisions.', 'documentation.', 'user stories.', 'UML models.', 'dashboards.', 'outcomes.'],
  stats: [
    { value: 3, suffix: '+', label: 'Years of\nexperience' },
    { value: 4, suffix: '', label: 'Major platforms\ndelivered' },
    { value: 4, suffix: '', label: 'Industry\ndomains' },
    { value: 20, suffix: '+', label: 'Documents &\nmodels authored' }
  ],
  chips: {
    top: { tag: 'SQL', text: 'Power BI · Tableau · Excel' },
    bottom: { tag: 'BRD', text: 'FRD · UML · BPMN · UAT' }
  },
  badge: { num: '3+', label: 'years bridging business\n& engineering teams' }
}

export const marqueeItems = [
  'Requirement Gathering',
  'BRD / FRD',
  'UML & BPMN',
  'SQL',
  'Power BI',
  'Tableau',
  'JIRA',
  'Agile · Scrum',
  'UAT',
  'Stakeholder Management',
  'Process Mapping',
  'AI · RPA · Chatbots'
]

export const about = {
  kicker: '01 — About',
  title: ['The analyst behind', 'the requirements.'],
  paragraphs: [
    `Great analysis isn't about documents — it's about decisions. As a techno-functional Business Analyst, I sit at the exact intersection of business intent and engineering execution: asking the uncomfortable questions early, drawing the process no one had drawn, and turning "we need a new system" conversations into specifications teams can actually build.`,
    `My toolkit blends structured requirements engineering — BRDs, FRDs, SRS, user stories and acceptance criteria — with hands-on modelling and analysis: UML and BPMN diagrams, SQL and Excel data validation, and dashboards in Power BI and Tableau. I believe a requirement is only as good as the outcome it enables, and a diagram is only as good as the alignment it creates.`,
    `From credit-risk analytics to manufacturing ERPs, I've worked the full delivery lifecycle: elicitation workshops, As-Is/To-Be analysis, backlog grooming in JIRA, UAT cycles with business users, API validation with Postman, and audit-ready documentation that keeps compliance smiling.`
  ],
  principles: [
    { n: '01', title: 'Elicit before you document', text: 'Interviews, workshops and observation — the real requirement lives between the lines.' },
    { n: '02', title: 'Model to align', text: 'A BPMN flow or UML sequence ends a debate that a paragraph never could.' },
    { n: '03', title: 'Trace everything', text: 'RTM from elicitation to deployment — nothing built that wasn\'t asked; nothing asked that wasn\'t built.' },
    { n: '04', title: 'Write for the reader', text: 'Docs that developers, testers, auditors and executives can all act on.' }
  ],
  facts: [
    { value: 3, suffix: '+', text: 'years across banking, finance, IT, ERP & legal-tech portfolios' },
    { value: 4, suffix: '', text: 'end-to-end platforms delivered as the sole Business Analyst' },
    { value: 100, suffix: '%', text: 'requirement traceability maintained through RTMs on every project' },
    { value: 3, suffix: '', text: 'automation initiatives supported — AI, RPA and chatbot' }
  ]
}

export const expertise = {
  kicker: '06 — Core expertise',
  title: ['Where I create', 'the most value.'],
  cards: [
    {
      icon: 'doc',
      title: 'Requirements Engineering',
      text: 'End-to-end elicitation through stakeholder meetings, workshops, interviews and brainstorming — translated into BRD, FRD/FSD, SRS, user stories, use cases, workflows and acceptance criteria.',
      tags: ['BRD · FRD · SRS', 'User Stories', 'Acceptance Criteria', 'RTM']
    },
    {
      icon: 'flow',
      title: 'Process Modelling & Design',
      text: 'Making systems legible: UML (Use Case, Activity, Sequence, Class), BPMN process flows, gap & impact analysis, plus wireframes and prototypes in Figma, Visio and Draw.io.',
      tags: ['UML', 'BPMN', 'Figma · Visio · Draw.io', 'Gap Analysis']
    },
    {
      icon: 'chart',
      title: 'Data Analysis & Reporting',
      text: 'SQL querying and Excel analysis for validation, reconciliation, KPI tracking and decision support — surfaced through Power BI and Tableau dashboards that answer real questions.',
      tags: ['SQL', 'Excel · Pivots', 'Power BI', 'Tableau']
    },
    {
      icon: 'agile',
      title: 'Agile Delivery & Quality',
      text: 'Backlog ownership in JIRA — epics, story points, sprint tracking — through Scrum ceremonies, UAT cycles, defect triage and Postman API testing for chatbots and integrations.',
      tags: ['Scrum', 'JIRA · Confluence', 'UAT', 'Postman API Testing']
    }
  ]
}

export const skills = {
  kicker: '03 — Capabilities',
  title: ['A full-stack', "analyst's arsenal."],
  sub: 'Every capability below has been exercised on live projects — click any skill, tool or tag for a detailed view with methodology, artifacts & project impact.',
  tabs: [
    {
      id: 'ba',
      label: 'Business Analysis',
      intro: 'From stakeholder whisper to developer-ready spec — structured elicitation, crisp documentation and 100% traceability.',
      bars: [
        { name: 'Requirement Gathering & Analysis', level: 95, desc: 'Lead elicitation via interviews, workshops, observation & surveys across 4 domains. Map As-Is → To-Be with pain-point mapping and trace every need to delivery.', artifacts: ['Elicitation Plan', 'Stakeholder Map', 'As-Is/To-Be Canvas', 'RTM'], usedIn: ['Bureau Chief', 'Manufacturing ERP', 'Healthcare Plus'], methodology: 'Workshops → Interviews → Observation → Gap/RCA → MoSCoW' },
        { name: 'BRD / FRD / FSD / SRS Documentation', level: 93, desc: 'Author audit-ready BRD, FRD/FSD and SRS with clear functional & NFRs, AC and flows that dev, QA and compliance can all act on.', artifacts: ['BRD', 'FRD/FSD', 'SRS', 'User Stories + AC'], usedIn: ['Healthcare Plus', 'Pair My Trip', 'Bureau Chief'], methodology: 'Template-driven + RTM + walkthroughs' },
        { name: 'Gap, Impact & Root-Cause Analysis', level: 90, desc: 'Quantify gaps, assess change impact (scope, cost, risk) and run RCA (5-Whys/Fishbone) to fix the system, not the symptom.', artifacts: ['Gap Register', 'Impact Log', 'RCA Report'], usedIn: ['Manufacturing ERP', 'Bureau Chief'], methodology: '5 Whys · Fishbone · Impact Matrix' },
        { name: 'User Stories & Acceptance Criteria', level: 92, desc: 'INVEST-ready stories with GIVEN-WHEN-THEN AC, edge cases and NFRs — grooming-ready for JIRA and test-ready for QA.', artifacts: ['Epics → Stories', 'AC (Gherkin)', 'DoR/DoD'], usedIn: ['Pair My Trip', 'Healthcare Plus'], methodology: 'INVEST · Gherkin · Example Mapping' },
        { name: 'Requirement Traceability (RTM)', level: 88, desc: 'Living RTM from elicitation → design → build → test → UAT — nothing built that wasn’t asked, nothing asked that wasn’t built.', artifacts: ['RTM', 'Coverage Matrix', 'UAT Trace'], usedIn: ['All 4 platforms'], methodology: 'Forward/Backward Trace · JIRA links · UAT sign-off' }
      ],
      pills: [
        'Requirement Elicitation', 'Interviews', 'Workshops', 'Surveys', 'Brainstorming',
        'Functional & Non-Functional Specs', 'Use Cases', 'Workflows', 'Gap Analysis',
        'Impact Analysis', 'Root Cause Analysis', 'Change Management', 'Solution Evaluation', 'Backlog Refinement'
      ],
      pillDetails: {
        'Requirement Elicitation': '50+ facilitated sessions — open-ended and scenario-based techniques to surface explicit and latent needs.',
        'Interviews': 'Structured & semi-structured interviews with execs, SMEs and end-users, synthesized into themes.',
        'Workshops': 'Time-boxed, outcome-driven workshops with live modelling, dot-voting and alignment.',
        'Use Cases': 'UML use-case narratives with actors, pre/post-conditions and alternate flows for dev & QA.',
        'Change Management': 'Impact-assessed CRs, stakeholder comms and training plans to land change smoothly.',
        'Gap Analysis': 'As-Is vs To-Be deltas quantified by process, data, system and people impact.',
        'Root Cause Analysis': '5 Whys & Fishbone to address systemic causes, not symptoms.',
        'Backlog Refinement': 'Continuous grooming for INVEST readiness, estimation and dependency mapping.'
      }
    },
    {
      id: 'agile',
      label: 'Agile & Delivery',
      intro: 'Backlog ownership to release tracking — Scrum done right with transparency and predictable velocity.',
      bars: [
        { name: 'Scrum Ceremonies & Sprint Execution', level: 90, desc: 'Facilitate planning, stand-ups, reviews and retros — keeping teams aligned and removing blockers fast.', artifacts: ['Sprint Goal', 'Burndown', 'Retro Actions'], usedIn: ['Healthcare Plus', 'Pair My Trip', 'Manufacturing ERP'], methodology: 'Scrum Guide · Timeboxing · Visual Boards' },
        { name: 'Product Backlog Management (JIRA)', level: 90, desc: 'Own the JIRA backlog: epics → stories, refinement, pointing, prioritisation and sprint readiness.', artifacts: ['Backlog', 'JIRA Board', 'Release Plan'], usedIn: ['All platforms'], methodology: 'MoSCoW · WSJF · Story Splitting' },
        { name: 'Story Point Estimation', level: 85, desc: 'Lead planning poker, establish velocity baselines and calibrate for predictable delivery.', artifacts: ['Estimation Sheets', 'Velocity Charts'], usedIn: ['Pair My Trip', 'Manufacturing ERP'], methodology: 'Planning Poker · Velocity Tracking' },
        { name: 'Effort, Timeline & Cost Estimation', level: 82, desc: 'Three-point estimates with assumptions, risks and confidence ranges for realistic planning.', artifacts: ['Estimate Model', 'Risk Buffer', 'Milestones'], usedIn: ['Bureau Chief', 'Healthcare Plus'], methodology: 'PERT · Analogous · Parametric' },
        { name: 'Release Planning & Tracking', level: 82, desc: 'Roadmaps, release trains and KPI dashboards — scope, dates and quality visible at a glance.', artifacts: ['Release Roadmap', 'KPI Dashboard', 'Go/No-Go'], usedIn: ['Manufacturing ERP'], methodology: 'Burn-up · Milestone Tracking · Governance' }
      ],
      pills: [
        'Sprint Planning', 'Daily Stand-ups', 'Sprint Review', 'Retrospectives',
        'Backlog Grooming', 'Epic Creation', 'Sprint Tracking', 'Risk Identification',
        'Issue Tracking', 'Change Requests', 'KPI Monitoring', 'Continuous Improvement'
      ],
      pillDetails: {
        'Sprint Planning': 'Capacity-aware planning with slicing and dependency mapping.',
        'Retrospectives': 'Blameless retros turning feedback into 1–2 actionable experiments each sprint.',
        'Risk Identification': 'RAID logs with probability/impact and mitigation owners.',
        'KPI Monitoring': 'Lead time, velocity and defect trends tracked and acted on.',
        'Continuous Improvement': 'Kaizen mindset — small, measurable improvements each cycle.'
      }
    },
    {
      id: 'data',
      label: 'Data & Analytics',
      intro: 'Data that answers real questions — validated, reconciled and visualised for decisions, not just dashboards.',
      bars: [
        { name: 'MS Excel — Pivot Tables, VLOOKUP', level: 92, desc: 'Advanced Excel for pivots, XLOOKUP/VLOOKUP, Power Query, conditional logic and audit-ready reconciliations.', artifacts: ['Reconciliation Sheets', 'KPI Trackers', 'Pivot Dashboards'], usedIn: ['Bureau Chief', 'Manufacturing ERP'], methodology: 'Reconciliation · Cleansing · Validation Rules' },
        { name: 'Data Extraction & Validation', level: 88, desc: 'Extract, profile and validate datasets for completeness, accuracy and compliance.', artifacts: ['Data Profile', 'Validation Report'], usedIn: ['Bureau Chief', 'Healthcare Plus'], methodology: 'Profiling · Sampling · Cross-system Checks' },
        { name: 'SQL — Querying & Reconciliation', level: 82, desc: 'SQL for extraction, joins, aggregations and reconciliations across MySQL stacks.', artifacts: ['SQL Scripts', 'Reconciliation Queries'], usedIn: ['Bureau Chief', 'Pair My Trip'], methodology: 'Joins · Grouping · Reconciliation Queries' },
        { name: 'Power BI', level: 80, desc: 'Power BI datasets, DAX measures and interactive reports with RLS and scheduled refresh.', artifacts: ['PBIX Model', 'DAX Measures', 'Dashboards'], usedIn: ['Manufacturing ERP', 'Healthcare Plus'], methodology: 'Star Schema · DAX · RLS' },
        { name: 'Tableau', level: 78, desc: 'Tableau stories with parameters, LODs and responsive layouts for exec and ops.', artifacts: ['TWBX', 'L.O.D. Calcs', 'Stories'], usedIn: ['Bureau Chief'], methodology: 'LOD · Parameters · Storytelling' }
      ],
      pills: [
        'Data Validation', 'Data Reconciliation', 'KPI Tracking', 'Reporting',
        'Business Decision Support', 'Data Accuracy', 'Audit Readiness', 'MySQL'
      ],
      pillDetails: {
        'Data Reconciliation': 'Two-way reconciliations with break reports and RCA categorisation.',
        'KPI Tracking': 'KPI trees linking operational metrics to outcomes with thresholds.',
        'Audit Readiness': 'Lineage, controls and evidence packs for compliance and audit.',
        'MySQL': 'Querying transactional stores for extraction and validation.'
      }
    },
    {
      id: 'docs',
      label: 'Modelling & Docs',
      intro: 'A diagram ends a debate a paragraph never could — legible models and docs people actually use.',
      bars: [
        { name: 'UML — Use Case, Activity, Sequence, Class', level: 92, desc: 'Model behaviour and structure with UML — from actor goals to message flows and domain classes.', artifacts: ['Use Case', 'Activity', 'Sequence', 'Class'], usedIn: ['Healthcare Plus', 'Pair My Trip'], methodology: 'UML 2.5 · Iterated with dev · Versioned' },
        { name: 'BPMN & Process Flow Diagrams', level: 90, desc: 'BPMN 2.0 flows with pools, gateways, events and exception paths for ops and engineering.', artifacts: ['BPMN Flows', 'Exception Paths', 'RACI'], usedIn: ['Manufacturing ERP', 'Bureau Chief'], methodology: 'BPMN 2.0 · As-Is/To-Be · Exceptions' },
        { name: 'Wireframing — Figma, Balsamiq, Draw.io', level: 88, desc: 'Clickable wireframes and prototypes to visualise flows before code — tested with users early.', artifacts: ['Wireframes', 'Prototypes', 'Design Handoff'], usedIn: ['Healthcare Plus', 'Pair My Trip'], methodology: 'Lo→Hi Fidelity · User Review · Design System' },
        { name: 'Visio Diagrams', level: 85, desc: 'Professional Visio diagrams for architecture and documentation packs with consistent styling.', artifacts: ['Visio Packages', 'Stencils'], usedIn: ['Manufacturing ERP'], methodology: 'Stencil Standards · Layered Diagrams' },
        { name: 'SOPs, User Manuals & Knowledge Base', level: 90, desc: 'SOPs, user manuals and Confluence KB articles that are findable, maintainable and loved by support.', artifacts: ['SOP', 'User Manual', 'KB Articles'], usedIn: ['All platforms'], methodology: 'Task-based Writing · Screenshots · Versioning' }
      ],
      pills: [
        'Use Case Diagrams', 'Activity Diagrams', 'Sequence Diagrams', 'Class Diagrams',
        'BPMN Flows', 'Wireframes', 'Prototypes', 'Mockups', 'Confluence Pages',
        'SOPs', 'User Manuals', 'Audit-Ready Documentation'
      ],
      pillDetails: {
        'Sequence Diagrams': 'Time-ordered interactions showing sync/async calls, alt/loop and error paths.',
        'Wireframes': 'Fidelity-appropriate wires that de-risk UX before development.',
        'Confluence Pages': 'Single-source pages with macros, labels and page trees for discoverability.',
        'BPMN Flows': 'Pools, lanes, gateways and events modelled to BPMN 2.0 for execution clarity.',
        'SOPs': 'Step-by-step SOPs with RACI, controls and version history.'
      }
    },
    {
      id: 'tools',
      label: 'Tools',
      intro: 'The right tool for the phase — analysis, modelling, delivery and quality, wielded with standards.',
      tools: [
        { name: 'JIRA', level: 'Advanced', desc: 'Boards, workflows, SLAs and dashboards for delivery transparency.', years: '3+ yrs', usedIn: ['All platforms'], artifacts: ['Scrum Board', 'Velocity Reports'] },
        { name: 'Confluence', level: 'Advanced', desc: 'Spaces, templates and KB architecture that scales with the product.', years: '3+ yrs', usedIn: ['All platforms'], artifacts: ['Space Design', 'Templates'] },
        { name: 'MS Excel', level: 'Expert', desc: 'Reconciliation, modelling and KPI automation that survives audit.', years: '5+ yrs', usedIn: ['Bureau Chief', 'Manufacturing ERP'], artifacts: ['Reconciliation Models', 'Pivot Reports'] },
        { name: 'SQL / MySQL', level: 'Working+', desc: 'Extraction, validation and reconciliation across transactional stores.', years: '2+ yrs', usedIn: ['Bureau Chief', 'Pair My Trip'], artifacts: ['Queries', 'Reconciliation Scripts'] },
        { name: 'Power BI', level: 'Proficient', desc: 'DAX, modelling and storytelling for ops and exec audiences.', years: '2 yrs', usedIn: ['Manufacturing ERP'], artifacts: ['Datasets', 'Dashboards'] },
        { name: 'Tableau', level: 'Proficient', desc: 'LOD, parameters and stories that answer business questions fast.', years: '2 yrs', usedIn: ['Bureau Chief'], artifacts: ['Stories', 'LOD Calcs'] },
        { name: 'Figma', level: 'Proficient', desc: 'Wireframes, prototypes and dev handoff with auto-layout and components.', years: '2 yrs', usedIn: ['Healthcare Plus', 'Pair My Trip'], artifacts: ['Prototypes', 'Design System'] },
        { name: 'Draw.io', level: 'Advanced', desc: 'Quick, collaborative diagrams that keep the model close to the team.', years: '3 yrs', usedIn: ['All'], artifacts: ['BPMN', 'UML'] },
        { name: 'MS Visio', level: 'Advanced', desc: 'Polished architecture and process packs for stakeholders & audit.', years: '3 yrs', usedIn: ['Manufacturing ERP'], artifacts: ['Visio Packs'] },
        { name: 'Balsamiq', level: 'Proficient', desc: 'Lo-fi ideation that accelerates alignment before hi-fi.', years: '1+ yr', usedIn: ['Healthcare Plus'], artifacts: ['Lo-fi Wires'] },
        { name: 'Postman', level: 'Working+', desc: 'API validation for UPI, cards, availability and notification flows.', years: '2 yrs', usedIn: ['Pair My Trip'], artifacts: ['Collections', 'Tests'] },
        { name: 'MS Word', level: 'Expert', desc: 'Long-doc mastery: styles, cross-refs, change tracking for BRD/SRS.', years: '5+ yrs', usedIn: ['All'], artifacts: ['BRD', 'SRS Templates'] },
        { name: 'MS PowerPoint', level: 'Expert', desc: 'Executive storytelling with clear, decision-ready decks.', years: '5+ yrs', usedIn: ['Neilsoft QBRs'], artifacts: ['QBR Decks', 'Demos'] },
        { name: 'HTML / CSS / JS', level: 'Basic', desc: 'Prototype and review literacy to bridge with engineering.', years: '1 yr', usedIn: ['Healthcare Plus'], artifacts: ['Prototype Reviews'] }
      ]
    },
    {
      id: 'soft',
      label: 'Power Skills',
      intro: 'The human API — clarity, facilitation and stakeholder trust that makes the hard stuff ship.',
      pillsBig: [
        'Stakeholder Communication', 'Conflict Resolution', 'Problem Solving',
        'Critical Thinking', 'Decision Making', 'Time Management',
        'Change Management', 'Cross-Functional Collaboration', 'Client Presentations',
        'Pre-Sales Support', 'Negotiation', 'Facilitation'
      ],
      pillDetails: {
        'Stakeholder Communication': 'Crispy updates, pre-reads and 1-pagers — tailored to exec, ops and tech audiences.',
        'Facilitation': 'Time-boxed workshops with clear outcomes, parking lots and live synthesis.',
        'Client Presentations': 'Narrative decks that earn a yes — problem, options, recommendation, risk.',
        'Negotiation': 'Principled negotiation balancing scope, time and quality with data.',
        'Cross-Functional Collaboration': 'Bridge business–engineering–QA with shared language and rituals.',
        'Problem Solving': 'Structured decomposition, hypothesis-driven analysis and data-backed recommendations.',
        'Change Management': 'Stakeholder map, comms plan and training to land change without churn.',
        'Conflict Resolution': 'Active listening, reframing and option generation to turn tension into progress.'
      },
      note: {
        icon: 'chat',
        text: '"The soft stuff is the hard stuff." Most project failures are communication failures — I treat clarity as a deliverable in its own right.'
      }
    }
  ],
  domains: [
    { name: 'Banking', text: 'Credit risk, CIBIL analysis, loan eligibility, compliance & audit readiness.', detail: 'Built risk segmentation, CIBIL score logic and audit-ready reporting for lending decisions. Data-mart + RTM + compliance evidence pack.', icon: 'shield', metrics: ['Risk segmentation', 'CIBIL logic', 'Audit pack'], color: '#5fc9ab' },
    { name: 'Finance', text: 'Payment gateways, reconciliation, KPI tracking and financial reporting.', detail: 'Designed UPI & card flows, refund/error handling and reconciliation for real-time booking & finance ops.', icon: 'chart', metrics: ['UPI + Cards', 'Reconciliation', 'KPI dashboards'], color: '#d9b062' },
    { name: 'Healthcare', text: 'Patient journeys, scheduling workflows and administrative reporting.', detail: 'End-to-end patient → appointment → consultation flows with role-based access and reporting.', icon: 'users', metrics: ['Patient flow', 'Scheduling', 'RBAC'], color: '#6aa9ff' },
    { name: 'ERP Systems', text: 'Inventory, procurement, production, sales, transport & returns.', detail: 'Order-to-return lifecycle: PR→RFQ→PO, work orders, QC, sales, transport and real-time inventory.', icon: 'layers', metrics: ['8 modules', 'Order→Return', 'Real-time stock'], color: '#c084fc' }
  ]
}

export const experience = {
  kicker: '02 — Experience',
  title: ['A timeline of', 'shipped impact.'],
  items: [
    {
      period: 'Mar 2023 — Jun 2026',
      type: 'IT Services · Banking / Finance / ERP',
      role: 'Business Analyst',
      org: 'Techno Cipher IT Solutions',
      location: 'Pune, India',
      points: [
        'Own end-to-end requirement gathering & analysis across banking, finance, IT, ERP and Legal IT portfolios — stakeholder meetings, workshops, interviews and brainstorming sessions.',
        'Translate business needs into BRD, FRD/FSD, SRS documents, user stories, use cases, workflows and acceptance criteria for development and QA teams.',
        'Drive gap, impact and root-cause analysis; support AI, RPA automation and chatbot initiatives by identifying manual processes and recommending system enhancements.',
        'Design UML diagrams (Use Case, Activity, Sequence, Class) and BPMN flows; create wireframes, prototypes and mockups in Figma, Visio and Draw.io.',
        'Manage the product backlog in JIRA — epics, stories, story-point estimation and sprint tracking — through Agile/Scrum ceremonies.',
        'Maintain RTM for full traceability, run UAT cycles, validate APIs with Postman, and analyse data with SQL & Excel for validation, reconciliation and KPI tracking.',
        'Ensure data accuracy, compliance and audit readiness; handle change requests, risk identification and issue resolution with minimal scope impact.'
      ],
      tags: ['SQL', 'Power BI', 'JIRA', 'UML/BPMN', 'Figma', 'Postman', 'UAT']
    },
    {
      period: 'Jan 2022 — Aug 2022',
      type: 'Digital Engineering Solutions · Pre-Sales',
      role: 'Business Development',
      org: 'Neilsoft Ltd',
      location: 'Pune, India',
      points: [
        'Consulted corporate clients on CAD, BIM and Bluebeam Revu solutions — understanding engineering workflows, business challenges and digital transformation needs.',
        'Conducted requirement gathering and workflow analysis sessions to recommend suitable platforms and improve design coordination and document management.',
        'Ran quarterly business reviews to surface operational challenges, identify optimisation opportunities and support renewals and upselling.',
        'Supported pre-sales: client presentations, software demonstrations and solution positioning; helped clients evaluate ROI and productivity gains.',
        'Built long-term client relationships that drove retention, repeat business and service renewals.'
      ],
      tags: ['Client Consulting', 'Pre-Sales', 'Requirement Analysis', 'QBRs', 'ROI Evaluation']
    }
  ]
}

export const projects = {
  kicker: '04 — Selected work',
  title: ['Cases, not just', 'job titles.'],
  sub: 'Four platforms where the requirements were mine — from first interview to final UAT sign-off. Click any card for the full story.',
  items: [
    {
      id: 'healthcare',
      num: '01',
      tag: 'Healthcare',
      title: 'Healthcare Plus',
      subtitle: 'Healthcare Management System',
      blurb: 'A web-based healthcare platform managing patient records, doctor scheduling, appointments and administrative reporting — with role-based access for patients, doctors and administrators.',
      modules: ['Patient Management', 'Doctor Management', 'Appointment Booking', 'Admin Dashboard & Reporting'],
      tech: ['SQL / MySQL', 'JIRA', 'Confluence', 'Figma', 'Draw.io', 'UML', 'BPMN', 'HTML/CSS/JS'],
      role: 'Business Analyst — requirements, workflow design, documentation & UAT across all healthcare modules.',
      highlights: [
        'Gathered and analysed requirements through stakeholder interviews, workshops and discussions.',
        'Prepared BRD, FRD, user stories and acceptance criteria for system development.',
        'Designed end-to-end workflows: patient registration → appointment booking → consultation → reporting.',
        'Created UML diagrams (Use Case, Activity, Sequence) and BPMN process flows.',
        'Developed wireframes and prototypes in Figma / Draw.io to visualise functionality.',
        'Supported UAT — test case preparation, validation and defect tracking in JIRA.',
        'Maintained documentation in Confluence with full requirement traceability (RTM).'
      ],
      kpis: ['4 modules', 'End-to-end workflows', 'Full RTM coverage']
    },
    {
      id: 'travel',
      num: '02',
      tag: 'Travel · Payments',
      title: 'Pair My Trip',
      subtitle: 'Travel Planning & Booking Platform',
      blurb: 'An online travel platform for trip discovery, itinerary planning, booking and payments — real-time availability, pricing and booking status with role-based user/admin access.',
      modules: ['User Registration & Profiles', 'Trip Discovery & Search', 'Itinerary Planning', 'Booking & Payment', 'Reviews & Ratings', 'Admin Dashboard'],
      tech: ['SQL / MySQL', 'JIRA', 'Confluence', 'Figma', 'Draw.io', 'Postman', 'UML', 'BPMN'],
      integrations: ['UPI — Google Pay, PhonePe, Paytm', 'Cards — Razorpay / Stripe', 'Real-time Availability APIs', 'SMS & Email Notifications', 'Maps & Location Services'],
      role: 'Business Analyst — requirements, payment-flow design, API specifications & UAT for the booking platform.',
      highlights: [
        'Defined API requirements and integration specifications for UPI and card payment gateways.',
        'Mapped payment transaction flows, error-handling scenarios and refund/cancellation processes.',
        'Prepared BRD, FRD, user stories and acceptance criteria across modules including payment workflows.',
        'Performed gap and impact analysis to optimise user experience and business processes.',
        'Coordinated payment-gateway testing with Postman across sandbox environments.',
        'Managed the product backlog in JIRA — prioritisation, story creation, sprint tracking.',
        'Supported UAT end-to-end: test cases, validation, defect tracking and sign-off.'
      ],
      kpis: ['6 modules', '5+ API integrations', 'UPI + card flows']
    },
    {
      id: 'erp',
      num: '03',
      tag: 'ERP · Manufacturing',
      title: 'Manufacturing ERP',
      subtitle: 'Enterprise Resource Planning System',
      blurb: 'A centralised ERP managing inventory, procurement, production, sales and returns — real-time tracking across the full order-to-delivery lifecycle with role-based access.',
      modules: ['Inventory Management', 'Production Planning', 'Procurement — PR, RFQ, PO', 'Quality Control', 'Sales & Distribution', 'Transport Management', 'Return Management', 'Reporting Dashboard'],
      tech: ['SQL / MySQL', 'JIRA', 'Confluence', 'Figma', 'Draw.io', 'UML', 'BPMN'],
      role: 'Business Analyst — requirements, process modelling & UAT across all ERP modules.',
      highlights: [
        'Analysed the end-to-end business flow from customer order to delivery and return management.',
        'Defined the procurement lifecycle: PR → RFQ → vendor selection → PO → goods receipt.',
        'Modelled production processes: work orders, raw-material consumption and quality checks (first article, in-process, finished goods).',
        'Designed the sales flow: sales order → invoicing → transport management → delivery.',
        'Incorporated return management: inspection, approval and scrap handling.',
        'Designed real-time inventory workflows for adding/removing raw materials and finished goods.',
        'Created UML diagrams and BPMN flowcharts; built wireframes for modules and dashboards.'
      ],
      kpis: ['8 modules', 'Order-to-return lifecycle', 'Real-time inventory']
    },
    {
      id: 'credit',
      num: '04',
      tag: 'Banking · Credit Risk',
      title: 'Bureau Chief',
      subtitle: 'Credit Risk & CIBIL Analysis System',
      blurb: 'A banking analytics system evaluating customer creditworthiness via CIBIL scores, financial data and risk indicators — powering lending decisions and risk reporting.',
      modules: ['Customer Data Management', 'CIBIL Score Analysis', 'Risk Assessment', 'Loan Eligibility Evaluation', 'Reporting Dashboard'],
      tech: ['SQL / MySQL', 'JIRA', 'Confluence', 'Figma', 'Draw.io', 'UML', 'BPMN'],
      role: 'Business Analyst — credit data analysis, risk modelling requirements & UAT.',
      highlights: [
        'Analysed customer credit data — CIBIL scores, repayment history and financial behaviour — to identify risk factors and trends.',
        'Created process-flow diagrams representing data flow, credit evaluation logic and reporting structures.',
        'Developed BRD and FRD supporting credit-risk analysis, data-mart design and reporting requirements.',
        'Analysed customer segmentation and risk categories to strengthen lending decisions.',
        'Collaborated with development and QA to validate analytics logic, data processing and reporting accuracy.',
        'Facilitated UAT to ensure risk reports and credit insights met business expectations.'
      ],
      kpis: ['5 modules', 'Data-mart design', 'Risk segmentation']
    }
  ]
}

export const education = {
  kicker: '05 — Foundations',
  degree: 'B.Sc. in Mass Communication & Journalism',
  period: '2012 — 2016',
  note: 'Years of training in research, interviewing and storytelling — the same skills I now use to elicit requirements, facilitate workshops and write documents people actually read.',
  snapshot: [
    { label: 'Availability', value: 'Immediate Joiner' },
    { label: 'Location', value: 'Pune, Maharashtra' },
    { label: 'Domains', value: 'Banking · Finance · Healthcare · ERP' },
    { label: 'Languages', value: 'English · Hindi · Marathi' }
  ]
}

export const contact = {
  kicker: '07 — Contact',
  title: ['Let\'s turn your next', 'big problem into a', 'shipped solution.'],
  sub: 'Open to Business Analyst roles and consulting engagements. As an immediate joiner, I can start right away — I usually reply within a day.'
}
