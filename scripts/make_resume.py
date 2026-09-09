#!/usr/bin/env python3
"""Generate Sheetal Kirjawalekar's resume PDF (styled to match the portfolio)."""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas

OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'assets', 'Sheetal_Kirjawalekar_Resume.pdf')

INK = HexColor('#12182B')
GOLD = HexColor('#B8892E')
GOLD_SOFT = HexColor('#F4ECD9')
MUTED = HexColor('#5A6172')
LINE = HexColor('#D8D2C2')

PAGE_W, PAGE_H = A4
M_L, M_R, M_T, M_B = 18 * mm, 18 * mm, 16 * mm, 16 * mm
CONTENT_W = PAGE_W - M_L - M_R

c = canvas.Canvas(OUT, pagesize=A4)
c.setTitle('Sheetal Kirjawalekar — Business Analyst Resume')
c.setAuthor('Sheetal Kirjawalekar')
y = 0


def new_page():
    global y
    c.showPage()
    y = PAGE_H - M_T
    # side accent
    c.setFillColor(GOLD)
    c.rect(0, 0, 2.2 * mm, PAGE_H, stroke=0, fill=1)


def ensure(h):
    global y
    if y - h < M_B:
        new_page()


def header():
    global y
    y = PAGE_H - M_T
    c.setFillColor(INK)
    c.setFont('Helvetica-Bold', 21)
    c.drawString(M_L, y, 'SHEETAL KIRJAWALEKAR')
    c.setFont('Helvetica', 10.5)
    c.setFillColor(GOLD)
    c.drawString(M_L, y - 6 * mm, 'Techno-functional Business Analyst  |  Immediate Joiner')
    c.setFillColor(MUTED)
    c.setFont('Helvetica', 8.6)
    contact = ('shitalkirjawalekar@gmail.com   ·   +91 76203 39297   ·   Pune, Maharashtra   ·   '
               'linkedin.com/in/shitalkirjawalekar   ·   DOB: 07/11/1992')
    c.drawString(M_L, y - 11 * mm, contact)
    y -= 16 * mm
    c.setStrokeColor(GOLD)
    c.setLineWidth(1.1)
    c.line(M_L, y, M_L + CONTENT_W, y)
    y -= 8 * mm


def section(title):
    global y
    ensure(16 * mm)
    c.setFillColor(GOLD_SOFT)
    c.rect(M_L, y - 1.2 * mm, CONTENT_W, 7 * mm, stroke=0, fill=1)
    c.setFillColor(GOLD)
    c.rect(M_L, y - 1.2 * mm, 1.2 * mm, 7 * mm, stroke=0, fill=1)
    c.setFillColor(INK)
    c.setFont('Helvetica-Bold', 10.5)
    c.drawString(M_L + 4 * mm, y, title.upper())
    y -= 10.5 * mm


def wrap_text(text, font, size, width):
    c.setFont(font, size)
    words, lines, cur = text.split(), [], ''
    for w_ in words:
        trial = (cur + ' ' + w_).strip()
        if c.stringWidth(trial, font, size) <= width:
            cur = trial
        else:
            lines.append(cur)
            cur = w_
    if cur:
        lines.append(cur)
    return lines


def bullet(text, size=8.8, indent=5 * mm, bold_prefix=None):
    global y
    mark_w = 4.5 * mm
    width = CONTENT_W - indent - mark_w
    line_h = size + 2.6

    segments = []  # each line = list of (text, font) runs
    if bold_prefix:
        pre = bold_prefix + ' '
        c.setFont('Helvetica-Bold', size)
        pre_w = c.stringWidth(pre, 'Helvetica-Bold', size)
        first_lines = wrap_text(text, 'Helvetica', size, width - pre_w)
        seg = [(pre, 'Helvetica-Bold')]
        if first_lines:
            seg.append((first_lines[0], 'Helvetica'))
        segments.append(seg)
        consumed = len(first_lines[0].split()) if first_lines else 0
        remaining = ' '.join(text.split()[consumed:])
        for ln in wrap_text(remaining, 'Helvetica', size, width):
            segments.append([(ln, 'Helvetica')])
    else:
        for ln in wrap_text(text, 'Helvetica', size, width):
            segments.append([(ln, 'Helvetica')])

    ensure(len(segments) * line_h / 72 * 25.6 + 2 * mm)
    for i, seg in enumerate(segments):
        if i == 0:
            c.setFillColor(GOLD)
            c.setFont('Helvetica-Bold', size + 1)
            c.drawString(M_L + indent, y, '•')
        x = M_L + indent + mark_w
        for txt, font in seg:
            c.setFont(font, size)
            c.setFillColor(INK if font == 'Helvetica-Bold' else HexColor('#2E3342'))
            c.drawString(x, y, txt)
            x += c.stringWidth(txt, font, size)
        y -= line_h


def simple_wrap(text, font, size, width):
    c.setFont(font, size)
    words, lines, cur = text.split(), [], ''
    for w_ in words:
        trial = (cur + ' ' + w_).strip()
        if c.stringWidth(trial, font, size) <= width:
            cur = trial
        else:
            lines.append(cur)
            cur = w_
    if cur:
        lines.append(cur)
    return lines


def para(text, size=8.8, color=HexColor('#2E3342')):
    global y
    lines = simple_wrap(text, 'Helvetica', size, CONTENT_W)
    ensure(len(lines) * (size + 2.8) / 72 * 25.6 + 2 * mm)
    c.setFillColor(color)
    c.setFont('Helvetica', size)
    for ln in lines:
        c.drawString(M_L, y, ln)
        y -= size + 2.8


def role_head(period, role, org):
    global y
    ensure(14 * mm)
    c.setFillColor(INK)
    c.setFont('Helvetica-Bold', 10)
    c.drawString(M_L, y, f'{role}  —  {org}')
    c.setFillColor(GOLD)
    c.setFont('Helvetica-Bold', 8.4)
    c.drawRightString(M_L + CONTENT_W, y, period)
    y -= 5.4 * mm


def chip_row(items, size=8):
    global y
    x = M_L
    ensure(8 * mm)
    c.setFont('Helvetica', size)
    for it in items:
        w = c.stringWidth(it, 'Helvetica', size) + 6 * mm
        if x + w > M_L + CONTENT_W:
            y -= 5.6 * mm
            x = M_L
            ensure(8 * mm)
        c.setStrokeColor(LINE)
        c.setFillColor(GOLD_SOFT)
        c.roundRect(x, y - 1 * mm, w, 5 * mm, 2.4 * mm, stroke=1, fill=1)
        c.setFillColor(INK)
        c.drawString(x + 3 * mm, y, it)
        x += w + 2.2 * mm
    y -= 7.5 * mm


# ============================ PAGE 1 ============================
header()

section('Professional Summary')
para('Techno-functional Business Analyst with 3+ years of experience across finance, banking, and IT domains. '
     'Expertise in end-to-end requirement gathering and analysis, BRD/FRD documentation, UML/BPMN modelling, and '
     'stakeholder management. Hands-on experience in Agile (Scrum), UAT, and end-to-end documentation. Skilled in SQL, '
     'Power BI, Tableau, JIRA, and Draw.io — with a strong ability to translate business needs into functional solutions.')
y -= 2 * mm

section('Professional Experience')
role_head('Mar 2023 – Present', 'Business Analyst', 'Techno Cipher IT Solutions')
for b in [
    'Led end-to-end requirement gathering & analysis across banking, finance, IT, ERP and Legal IT portfolios via stakeholder meetings, workshops, interviews and brainstorming sessions.',
    'Translated business requirements into BRD, FRD/FSD, SRS documents, user stories, use cases, workflows and acceptance criteria for development and testing teams.',
    'Performed gap analysis, impact analysis, root-cause analysis and solution evaluation to identify process improvements and optimise operations.',
    'Supported AI, RPA automation and chatbot initiatives by identifying manual processes and recommending system enhancements.',
    'Designed UML diagrams (Use Case, Activity, Sequence, Class) and BPMN process flows; created wireframes & prototypes in Figma, Visio and Draw.io.',
    'Managed product backlog in JIRA — epics, user stories, acceptance criteria, story-point estimation and sprint tracking; active in all Agile/Scrum ceremonies.',
    'Maintained Requirement Traceability Matrix (RTM) from elicitation through deployment; supported UAT with test scenarios, validation and defect tracking.',
    'Performed API testing using Postman to validate integrations, chatbot interactions and end-to-end data flow.',
    'Conducted data analysis using SQL & Excel for validation, reconciliation, reporting and KPI tracking; ensured compliance and audit readiness.',
    'Handled change requests, risk identification and issue resolution; monitored KPIs to support continuous improvement.',
]:
    bullet(b)
y -= 2 * mm
role_head('Jan 2022 – Aug 2022', 'Business Development', 'Neilsoft Ltd, Pune')
for b in [
    'Engaged corporate clients to understand engineering workflows and digital transformation needs across CAD, BIM and Bluebeam Revu solutions.',
    'Conducted requirement gathering & workflow analysis sessions; delivered solution-oriented consulting with sales, technical and delivery teams.',
    'Ran quarterly business reviews to evaluate challenges, identify optimisation opportunities and support renewals & upselling.',
    'Supported pre-sales: presentations, demos, requirement discussions and solution positioning; assisted clients in evaluating ROI.',
]:
    bullet(b)

# ============================ PAGE 2 ============================
new_page()

section('Key Projects')
projects = [
    ('Healthcare Plus — Healthcare Management System', [
        'Web platform for patient records, doctor scheduling, appointments and admin reporting with role-based access.',
        'Modules: Patient Management, Doctor Management, Appointment Booking, Admin Dashboard & Reporting.',
        'Prepared BRD/FRD, user stories & acceptance criteria; designed registration→booking→consultation→reporting workflows.',
        'Created UML (Use Case, Activity, Sequence) & BPMN flows; wireframes in Figma / Draw.io.',
        'Supported UAT with test cases, validation & defect tracking in JIRA; maintained Confluence docs & RTM.',
    ]),
    ('Pair My Trip — Travel Planning & Booking Platform', [
        'Trip discovery, itinerary planning, booking & payments with real-time availability, pricing and booking status.',
        'Modules: User Profiles, Trip Discovery, Itinerary Planning, Booking & Payment, Reviews, Admin Dashboard.',
        'Defined API requirements for UPI (Google Pay, PhonePe, Paytm) & card gateways (Razorpay/Stripe); mapped transaction flows, error handling and refund/cancellation processes.',
        'Performed gap & impact analysis; created UML/BPMN diagrams and UI flows in Figma / Draw.io.',
        'Coordinated payment-gateway testing with Postman; managed JIRA backlog and UAT end-to-end.',
    ]),
    ('Manufacturing ERP System', [
        'Centralised ERP for inventory, procurement, production, sales and returns with real-time tracking.',
        'Modules: Inventory, Production Planning, Procurement (PR/RFQ/PO), Quality Control, Sales & Distribution, Transport, Returns, Reporting.',
        'Defined procurement lifecycle (PR→RFQ→vendor selection→PO→goods receipt) and production processes (work orders, raw-material consumption, quality checks).',
        'Designed sales flow (order→invoice→transport→delivery) and returns workflow (inspection, approval, scrap).',
        'Created UML diagrams & BPMN flowcharts; built wireframes for modules and dashboards.',
    ]),
    ('Bureau Chief — Credit Risk & CIBIL Analysis System', [
        'Banking analytics system evaluating creditworthiness via CIBIL scores, financial data and risk indicators.',
        'Modules: Customer Data Management, CIBIL Score Analysis, Risk Assessment, Loan Eligibility, Reporting Dashboard.',
        'Analysed credit data — CIBIL scores, repayment history, financial behaviour — to identify risk factors and trends.',
        'Developed BRD & FRD supporting credit-risk analysis, data-mart design and reporting requirements.',
        'Analysed customer segmentation & risk categories; facilitated UAT for risk reports and credit insights.',
    ]),
]
for title, points in projects:
    ensure(10 * mm)
    c.setFillColor(INK)
    c.setFont('Helvetica-Bold', 9.6)
    c.drawString(M_L, y, title)
    y -= 5 * mm
    for p in points:
        bullet(p)
    y -= 2 * mm

section('Key Skills')
skill_groups = [
    ('Business Analysis: ', 'Requirement Gathering & Analysis, BRD, FRD, Functional & Non-Functional Specifications, Gap Analysis, Impact Analysis, UAT Support, Elicitation (Interviews, Workshops, Surveys)'),
    ('Agile & Project Management: ', 'Agile (Scrum), Sprint Planning & Execution, Product Backlog Management, User Stories & Acceptance Criteria, Estimation'),
    ('Data & Tools: ', 'SQL (Basic Querying), Data Extraction, MS Excel (Pivot Tables, VLOOKUP), Power BI, Tableau'),
    ('Documentation & Modelling: ', 'UML (Use Case, Activity, Sequence, Class), BPMN, Process Flow Diagrams, Wireframing (Figma, Balsamiq), Visio, Draw.io'),
    ('Tools & Collaboration: ', 'JIRA, Confluence, MS Word, PowerPoint, Postman'),
    ('Stakeholder Management: ', 'Stakeholder Communication, Conflict Resolution'),
    ('Additional Skills: ', 'Problem Solving, Critical Thinking, Decision Making, Time Management, Change Management'),
    ('Domain Knowledge: ', 'Banking, Finance, Healthcare, ERP Systems'),
]
for prefix, rest in skill_groups:
    bullet(rest, bold_prefix=prefix)
y -= 2 * mm

section('Education')
c.setFillColor(INK)
c.setFont('Helvetica-Bold', 9.6)
c.drawString(M_L, y, 'B.Sc. in Mass Communication and Journalism')
c.setFillColor(GOLD)
c.setFont('Helvetica-Bold', 8.4)
c.drawRightString(M_L + CONTENT_W, y, '2012 – 2016')
y -= 6 * mm

# footer
c.setFillColor(MUTED)
c.setFont('Helvetica-Oblique', 7.6)
c.drawString(M_L, 10 * mm, 'Sheetal Kirjawalekar  ·  shitalkirjawalekar@gmail.com  ·  +91 76203 39297  ·  linkedin.com/in/shitalkirjawalekar')
c.drawRightString(M_L + CONTENT_W, 10 * mm, 'Immediate Joiner')

c.save()
print('Wrote', os.path.abspath(OUT))
