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
  photo: './assets/img/profile.jpg'
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
  kicker: '02 — Core expertise',
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
  sub: 'Every capability below has been exercised on live projects — select a category to explore the depth.',
  tabs: [
    {
      id: 'ba',
      label: 'Business Analysis',
      bars: [
        { name: 'Requirement Gathering & Analysis', level: 95 },
        { name: 'BRD / FRD / FSD / SRS Documentation', level: 93 },
        { name: 'Gap, Impact & Root-Cause Analysis', level: 90 },
        { name: 'User Stories & Acceptance Criteria', level: 92 },
        { name: 'Requirement Traceability (RTM)', level: 88 }
      ],
      pills: [
        'Requirement Elicitation', 'Interviews', 'Workshops', 'Surveys', 'Brainstorming',
        'Functional & Non-Functional Specs', 'Use Cases', 'Workflows', 'Gap Analysis',
        'Impact Analysis', 'Root Cause Analysis', 'Change Management', 'Solution Evaluation', 'Backlog Refinement'
      ]
    },
    {
      id: 'agile',
      label: 'Agile & Delivery',
      bars: [
        { name: 'Scrum Ceremonies & Sprint Execution', level: 90 },
        { name: 'Product Backlog Management (JIRA)', level: 90 },
        { name: 'Story Point Estimation', level: 85 },
        { name: 'Effort, Timeline & Cost Estimation', level: 82 },
        { name: 'Release Planning & Tracking', level: 82 }
      ],
      pills: [
        'Sprint Planning', 'Daily Stand-ups', 'Sprint Review', 'Retrospectives',
        'Backlog Grooming', 'Epic Creation', 'Sprint Tracking', 'Risk Identification',
        'Issue Tracking', 'Change Requests', 'KPI Monitoring', 'Continuous Improvement'
      ]
    },
    {
      id: 'data',
      label: 'Data & Analytics',
      bars: [
        { name: 'MS Excel — Pivot Tables, VLOOKUP', level: 92 },
        { name: 'Data Extraction & Validation', level: 88 },
        { name: 'SQL — Querying & Reconciliation', level: 82 },
        { name: 'Power BI', level: 80 },
        { name: 'Tableau', level: 78 }
      ],
      pills: [
        'Data Validation', 'Data Reconciliation', 'KPI Tracking', 'Reporting',
        'Business Decision Support', 'Data Accuracy', 'Audit Readiness', 'MySQL'
      ]
    },
    {
      id: 'docs',
      label: 'Modelling & Docs',
      bars: [
        { name: 'UML — Use Case, Activity, Sequence, Class', level: 92 },
        { name: 'BPMN & Process Flow Diagrams', level: 90 },
        { name: 'Wireframing — Figma, Balsamiq, Draw.io', level: 88 },
        { name: 'Visio Diagrams', level: 85 },
        { name: 'SOPs, User Manuals & Knowledge Base', level: 90 }
      ],
      pills: [
        'Use Case Diagrams', 'Activity Diagrams', 'Sequence Diagrams', 'Class Diagrams',
        'BPMN Flows', 'Wireframes', 'Prototypes', 'Mockups', 'Confluence Pages',
        'SOPs', 'User Manuals', 'Audit-Ready Documentation'
      ]
    },
    {
      id: 'tools',
      label: 'Tools',
      tools: [
        { name: 'JIRA', level: 'Advanced' },
        { name: 'Confluence', level: 'Advanced' },
        { name: 'MS Excel', level: 'Expert' },
        { name: 'SQL / MySQL', level: 'Working+' },
        { name: 'Power BI', level: 'Proficient' },
        { name: 'Tableau', level: 'Proficient' },
        { name: 'Figma', level: 'Proficient' },
        { name: 'Draw.io', level: 'Advanced' },
        { name: 'MS Visio', level: 'Advanced' },
        { name: 'Balsamiq', level: 'Proficient' },
        { name: 'Postman', level: 'Working+' },
        { name: 'MS Word', level: 'Expert' },
        { name: 'MS PowerPoint', level: 'Expert' },
        { name: 'HTML / CSS / JS', level: 'Basic' }
      ]
    },
    {
      id: 'soft',
      label: 'Power Skills',
      pillsBig: [
        'Stakeholder Communication', 'Conflict Resolution', 'Problem Solving',
        'Critical Thinking', 'Decision Making', 'Time Management',
        'Change Management', 'Cross-Functional Collaboration', 'Client Presentations',
        'Pre-Sales Support', 'Negotiation', 'Facilitation'
      ],
      note: {
        icon: 'chat',
        text: '"The soft stuff is the hard stuff." Most project failures are communication failures — I treat clarity as a deliverable in its own right.'
      }
    }
  ],
  domains: [
    { name: 'Banking', text: 'Credit risk, CIBIL analysis, loan eligibility, compliance & audit readiness.' },
    { name: 'Finance', text: 'Payment gateways, reconciliation, KPI tracking and financial reporting.' },
    { name: 'Healthcare', text: 'Patient journeys, scheduling workflows and administrative reporting.' },
    { name: 'ERP Systems', text: 'Inventory, procurement, production, sales, transport & returns.' }
  ]
}

export const experience = {
  kicker: '04 — Experience',
  title: ['A timeline of', 'shipped impact.'],
  items: [
    {
      period: 'Mar 2023 — Present',
      type: 'IT Services · Banking / Finance / ERP',
      role: 'Business Analyst',
      org: 'Techno Cipher IT Solutions',
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
  kicker: '05 — Selected work',
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
  kicker: '06 — Foundations',
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
