export const TABLEAU =
  "https://public.tableau.com/app/profile/muhammad.ammar.saleem/vizzes";

export const projects = [

  {
    id: 0,
    title: "Indus Hospital Operations Intelligence Database",
    category: "SQL",
    year: "2026",
    image: "/ammar-s_portfolio/indus-hospital/Executive_Overview.png",
    tags: ["MySQL", "Python", "Tableau", "Data Normalization", "ERD"],
    desc: "A full hospital operations database and 4-page executive dashboard built during a 40-hour IT internship at Indus Hospital — 11 tables, ~77,740 rows of synthetic data, taken from a blank schema to a polished, presentable deliverable.",
    github: "https://github.com/m2ammar/Indus-Hospital-Operations-Intelligence-Database",
    tableau: "https://public.tableau.com/app/profile/muhammad.ammar.saleem/viz/IndusHospitalOperationIntelligence/IndusHospitalOperationsIntelligence",
    caseStudy: {
      abstract:
        "Indus Hospital exists because its founder, Dr. Abdul Bari, turned down opportunities abroad to rebuild care for patients who previously had almost nothing — that context is part of why this project felt different from a self-initiated one. This is a full hospital operations database and 4-page executive dashboard built during a 40-hour IT internship at Indus Hospital — 11 tables, 12,000 patients and 18,000 admissions worth of synthetic data, taken from a blank schema to a polished, presentable deliverable. My first internship, and my first project built for a real client rather than self-initiated.",
      objective:
        "Design a normalized schema that could realistically model end-to-end hospital operations — patients, admissions, doctors, wards, beds, emergency visits, OPD visits, diseases, surgeries, and donations — then generate a synthetic dataset at scale and build an executive-level Tableau dashboard on top of it, all within a fixed 40-hour internship window.",
      problemStatement:
        "A hospital generates operational data across many disconnected fronts — admissions, OPD visits, emergency triage, surgeries, donations — and without a unified system, there's no single view of how the hospital is actually performing: which departments are under the most load, how patients move through the system, or whether donation campaigns are actually sustaining specific care areas. The goal was to design a database and dashboard that could answer those questions at an executive level, in a single place.",
      howItWorks: [
        "Designed an 11-table normalized (3NF) MySQL schema covering the full patient lifecycle, from admission through OPD/emergency visits to surgeries and donations.",
        "Generated a synthetic dataset programmatically in Python (VS Code) — 12,000 patients, 18,000 admissions, 6,000 emergency visits, 180 doctors — split across dedicated scripts (generate_core.py, generate_emergency.py, generate_opd.py, generate_surgeries.py) rather than one monolithic generator.",
        "Wrote 23 analytical SQL KPI queries using CTEs and window functions to answer real operational questions across patient demographics, OPD/emergency load, surgeries, and donations.",
        "Exported clean, post-verification CSVs into a dedicated data/tableau/ folder, kept separate from raw data, since Tableau Public has no live MySQL connector.",
        "Built a 4-page executive dashboard — Executive Overview, Patient Demographics, OPD & Emergency, Surgery & Donation — using a premium teal-on-black theme.",
        "Created a pre-joined opd_visits_enriched.csv (OPD visits joined with disease names in SQL) specifically to avoid a fragile nested join inside Tableau.",
        "Executive Overview surfaced the operational baseline: 4.5-day average length of stay, 17.66-year average doctor experience, a 50% surgeon ratio, and Orthopedics as the busiest department with 2,483 admissions.",
        "Patient Demographics showed a 7,241-to-4,759 male-to-female split and, more importantly, an insurance gap — 7,179 patients uninsured versus 2,396 insured — a real access-to-care signal, not just a chart.",
        "OPD & Emergency revealed a 30% OPD follow-up rate, 4,270 patients treated and discharged versus 1,323 admitted, and emergency triage skewed toward non-urgent cases (3,309) over critical (589) — useful for understanding where emergency capacity is actually being spent.",
        "Surgery & Donations found Pediatrics leading surgical volume at 771 cases, a 3,196-to-480 completed-to-cancelled surgery ratio, and Cardiac Care as the top-funded donation campaign at $9.3M with a 25.2% recurring donor rate."
      ],
      technologies: [
        "MySQL", "MySQL Workbench", "Python (synthetic data generation)", "Tableau Public", "Data Normalization (3NF)", "ERD Design", "CTEs & Window Functions"
      ],
      gallery: [
        "/ammar-s_portfolio/indus-hospital/Executive_Overview.png",
        "/ammar-s_portfolio/indus-hospital/Patient_Demographics.png",
        "/ammar-s_portfolio/indus-hospital/OPD_&_Emergency.png",
        "/ammar-s_portfolio/indus-hospital/Surgery_&_Donation.png"
      ],
      challenges: [
        "Hit repeated Tableau Public crashes (\"Bad Connection,\" Error 81B3934F) when adding the full 11-table relationship model at once. Diagnosed it as a scale problem — not a bad relationship — by successfully testing one table, then a two-table relationship, in isolation.",
        "Root cause turned out to be two tables (opd_visits and surgeries) that had been accidentally set up as Unions instead of Relates against mismatched tables, creating silent schema conflicts.",
        "Fixed it by rebuilding the entire data source from scratch in a fresh workbook, connecting tables in small batches of 2–3 — testing and saving after each batch — instead of adding all 11 at once.",
        "Kept donations.csv out of the main data source entirely, since it shared no key with any other table, and connected it instead as its own independent Tableau data source rather than forcing it into the federated model."
      ],
      takeaways:
        "This was my first project built for a real client rather than for myself — and the first time \"done\" meant a deadline, not just a personal sense of completeness. The Tableau crash forced a debugging discipline I hadn't needed before: isolate the smallest reproducible case (one table, then two) before assuming the model itself was wrong. It also taught me that a schema being logically correct in MySQL doesn't guarantee it'll behave the same way once flattened into CSVs for a BI tool — the Union/Relate mismatch was invisible until it broke at scale."
    }
  },

  {
    id: 1,
    title: "Fraud Detection Analytics",
    category: "SQL",
    year: "2026",
    image: "/ammar-s_portfolio/Fraud_Detection_Dashboard.png",
    tags: ["MySQL", "Tableau", "EDA", "Data Normalization"],
    desc: "End-to-end fraud detection analysis on 6.36M PaySim mobile money transactions — raw data profiling, schema normalization into 3 tables, and fraud pattern discovery. Key finding: the dataset's built-in fraud flag catches only 0.2% of actual fraud.",
    github: "https://github.com/m2ammar/Fraud_Detection",
    tableau: "https://public.tableau.com/app/profile/muhammad.ammar.saleem/viz/FraudDetectionAnalytics/FraudDetectionAnalytics",
    kaggle: "https://www.kaggle.com/code/muhammadammar11/fraud-detection-analytics-kaggle-notebook",
    caseStudy: {
      abstract:
        "A complete SQL + Tableau fraud detection project built from raw data to normalized database to interactive dashboard, using the PaySim synthetic mobile money dataset — 6,362,620 transactions. My biggest and most complete analysis project to date, built over three days.",
      objective:
        "Load and profile 6.3M rows of raw transaction data, use exploratory analysis to decide how the data should actually be structured, design a normalized schema based on those findings, and use fraud detection queries to test whether the dataset's own fraud-flagging system was actually working.",
      howItWorks: [
        "Found the PaySim dataset on Kaggle (493MB, 6.3M rows) and loaded it into a flat staging table first — no schema decisions until the data was actually understood.",
        "Ran targeted EDA queries before touching schema design: checked whether sender/receiver accounts repeat (receivers repeat heavily, some 113 times), checked customer vs merchant account splits, and checked which transaction types carry fraud at all — only TRANSFER (0.77%) and CASH_OUT (0.18%) had any fraud; PAYMENT, DEBIT, and CASH_IN had none.",
        "Those findings drove the decision to normalize into 3 tables — accounts, transactions, and transaction_type — instead of keeping one flat table, since repeated receiver accounts and a fixed set of 5 transaction types were wasting space and slowing queries in the raw format.",
        "Added indexing once normalized queries were still running slower than expected against 6M+ rows.",
        "Mid-project, discovered the dashboard was only reflecting 1,000 rows per table — Tableau Public has no direct MySQL connector, and the first CSV export had an implicit row cap. Re-exported every table with no row limit via Terminal and rebuilt the dashboard on the full dataset.",
        "Final fraud detection queries surfaced four key patterns: fraud is concentrated entirely in TRANSFER and CASH_OUT transactions, 98% of fraud cases completely drain the sender's account rather than partially, several top receiver accounts consistently receive fraud at the exact system transaction cap (10,000,000) suggesting scripted fraud, and the dataset's own fraud flag caught only 16 of 8,213 actual fraud cases — about 0.2%."
      ],
      technologies: [
        "MySQL", "MySQL Workbench", "Terminal / CLI", "Tableau Public", "Data Normalization", "Indexing", "Exploratory Data Analysis"
      ],
      gallery: [
        "/ammar-s_portfolio/Fraud_Detection_Dashboard.png"
      ],
      challenges: [
        "MySQL Workbench's GUI import froze at around 7,000 rows trying to load 6.3M rows — switched to Terminal with LOAD DATA LOCAL INFILE, which streamed all 6.3M rows in 43 seconds instead of inserting row by row.",
        "The MySQL connection kept dropping on large operations (Error 2013) — fixed by setting SET SESSION wait_timeout = 600 and running heavy operations from Terminal instead of Workbench.",
        "Queries were still slow even after normalizing, which meant adding indexing on top of the schema redesign.",
        "Discovered mid-way that the dashboard had only been built on 1,000 rows per table due to an export limit — had to re-export every table with no row cap via Terminal and rebuild the dashboard from scratch on the full dataset.",
        "Tableau Public has no native MySQL connector, so every table had to be exported and re-imported as CSV rather than connected directly."
      ],
      takeaways:
        "This was the most complete, end-to-end project I've built — going from raw Kaggle data to a working fraud detection dashboard in three days. It's also where normalization stopped being a textbook concept and became a real trade-off decision: I chose to split into three tables because repeated receivers and a fixed set of transaction types made the flat structure wasteful, even though it meant adding joins back in. The biggest surprise was that the dataset's own fraud flag only caught 0.2% of real fraud — a strong reminder that flagging rules need to be validated against actual outcomes, not just assumed to work."
    }
  },

  {
    id: 2,
    title: "PakMart Retail Analytics",
    category: "SQL",
    year: "2026",
    image: "/ammar-s_portfolio/pakmart-ss.png",
    tags: ["MySQL", "Tableau", "Stored Procedures", "Window Functions"],
    desc: "A retail chain simulation tracking 7,000+ sales rows across 6 Pakistani cities. Built a stored procedure to auto-generate transactions mapped to local calendar events, then used RANK(), DENSE_RANK(), and LAG() to answer 9 business questions — promotion impact, MoM revenue shifts, top customers, and store rankings.",
    github: "https://github.com/m2ammar/PakMart_Retail_Analysis",
    tableau: "https://public.tableau.com/app/profile/muhammad.ammar.saleem/viz/PakMartRetailAnalytics/PakMartRetailAnalytics",
    caseStudy: {
      abstract:
        "A self-built SQL and Tableau project simulating a Pakistani retail chain, PakMart, complete with realistic product categories, customer names, store locations, and promotional calendar events. Sales data is randomly generated through a stored procedure so the underlying numbers aren't meant to reflect a real business — the point of the project was the SQL engineering behind it, not the business itself.",
      objective:
        "Build a retail analytics database realistic enough to ask real business questions of — revenue by promotion, top-ranked products per category, store performance by city, and month-over-month trends — and answer all of them using proper SQL technique rather than manual spreadsheet work.",
      howItWorks: [
        "Products, stores, and promotions were inserted manually, while 1,000 customers were imported via CSV and 7,000+ sales rows were generated using a stored procedure that auto-assigns promotions based on real Pakistani calendar events and calculates prices from category tables.",
        "Nine business questions were answered using a mix of techniques: GROUP BY and SUM for revenue by promotion, JOINs for revenue by category, CASE logic combined with multi-table JOINs for city-level promotion revenue, and DATE functions for monthly trends.",
        "Window functions did the heavier lifting — RANK() to find the top-ranked product in each category, DENSE_RANK() to rank stores within each city, and LAG() to calculate month-over-month revenue change.",
        "Top 5 customers by spending were pulled using ROUND(), ORDER BY, and LIMIT.",
        "All results were fed into a Tableau dashboard covering top city by revenue, top 5 customers, revenue by category, top stores by city, and promotion vs non-promotion revenue."
      ],
      technologies: [
        "MySQL", "Tableau Public", "Stored Procedures", "Window Functions (RANK, DENSE_RANK, LAG)", "CASE Expressions", "Git & GitHub"
      ],
      gallery: [
        "/ammar-s_portfolio/pakmart-ss.png"
      ],
      challenges: [
        "This was my first time using window functions in a real project — RANK(), DENSE_RANK(), and LAG() all went into answering questions that a plain GROUP BY couldn't handle, like ranking stores within each city or comparing a month's revenue to the one before it.",
        "The main day-to-day challenge was simply forgetting SQL syntax mid-query and having to look things up — less about hard logic, more about building fluency through repetition.",
        "Getting the stored procedure to auto-generate realistic sales data — mapping transactions to actual Pakistani calendar events and pulling correct prices from category tables — took a few iterations to get right."
      ],
      takeaways:
        "PakMart was where window functions stopped being a textbook topic and became something I could actually reach for. Ranking products within a category or calculating month-over-month change with LAG() felt like a genuine step up from basic aggregation — and it gave me the confidence to use window functions again in later, bigger projects."
    }
  },

  {
    id: 3,
    title: "Global Healthcare System",
    category: "SQL",
    year: "2026",
    image: "/ammar-s_portfolio/global-dashboard-png.png",
    tags: ["MySQL", "Tableau", "Chained CTEs", "Multi-JOIN"],
    desc: "19-table relational database mapping health KPIs across 197 countries — mortality rates, healthcare spending, vaccination coverage, pandemic response, and more. The flagship SQL query chains 4 CTEs to produce a country-level scorecard comparing spending tier against life expectancy status in a single output.",
    github: "https://github.com/m2ammar/Global-Healthcare-System",
    tableau: "https://public.tableau.com/app/profile/muhammad.ammar.saleem/viz/GlobalHealthcareSystemDashboard/GlobalHealthcareSystemDashboard",
    caseStudy: {
      abstract:
        "A 19-table relational healthcare analytics database built in MySQL to analyze global healthcare KPIs across 190+ countries, using data modeled on real WHO, World Bank, and IHME sources. Built to examine how healthcare systems performed across regions during critical global periods, and to demonstrate the ability to work with large, interconnected datasets at a professional level.",
      objective:
        "Design a database large enough to mirror a real public-health analytics system — covering demographics, spending, mortality, vaccination coverage, disease burden, risk factors, and pandemic response — and answer meaningful cross-country questions using proper relational modeling rather than flat, single-table analysis.",
      howItWorks: [
        "The schema spans 19 tables across modules: country demographics, healthcare spending, mortality statistics, vaccination coverage, disease burden, risk factors, pandemic response, insurance coverage, and health infrastructure.",
        "Nine business questions were answered, ranging from simple ranking (highest life expectancy in 2019 — Jamaica, Turkey, Tunisia) to more advanced multi-CTE logic, like identifying countries with high disease burden but low healthcare spending, or classifying countries by obesity, smoking, and air pollution into risk tiers.",
        "The flagship query is a healthcare system scorecard that chains 4 separate CTEs — spending tier, life expectancy status, vaccination status, and infant mortality status — each with its own CASE-based classification, then joins all four together into one final country-level output.",
        "SQL concepts used include multi-table JOINs (up to 4 tables per query), CASE statements for KPI classification, CTEs and chained CTEs for readable multi-step logic, CASE logic nested inside CTEs, aggregate functions with GROUP BY, and subquery filtering on computed columns.",
        "All 19 tables were exported to CSV and connected to Tableau to build the final dashboard."
      ],
      technologies: [
        "MySQL Workbench", "Tableau Public", "Relational Database Modeling", "CTEs & Chained CTEs", "CASE Statements", "Multi-Table JOINs", "Subquery Filtering"
      ],
      gallery: [
        "/ammar-s_portfolio/global-dashboard-png.png"
      ],
      challenges: [
        "Honestly, the biggest day-to-day challenge wasn't the logic — it was simply forgetting SQL syntax mid-query and having to double back and look things up.",
        "This was my first time using CTEs and CASE logic together at real depth — going in, I'd heard CTEs described as one of the harder SQL topics, so I expected to struggle. Once I started applying them directly to real business questions instead of tutorial examples, they turned out to be far more intuitive than I'd braced for.",
        "Writing a 4-CTE scorecard query that classifies a country across four separate dimensions and joins them together was the single most complex piece of SQL I'd written up to that point — 6,400+ lines of SQL across the whole project, the largest I'd built so far."
      ],
      takeaways:
        "CTEs turned out not to be scary at all — they're really just named subqueries that make complex logic readable, and I learned that by applying them directly to real business questions rather than following tutorials. Starting from the business question first, rather than the tables, consistently produced cleaner and more meaningful queries. Mid-project I realized I was writing SQL more advanced than I thought I was capable of, and that formatting and structure matter just as much as correctness once a query gets this large."
    }
  },

  {
    id: 4,
    title: "Pakistan Financial Services",
    category: "SQL",
    year: "2026",
    image: "/ammar-s_portfolio/finance-dashboard.png",
    tags: ["MySQL", "Tableau", "Audit Logging", "Subqueries"],
    desc: "9-table banking simulation with 500 customers, 30 branches across 7 cities, and 150 employees. Covers savings/current/fixed accounts, loans with payment history, credit cards, and an audit log tracking changes across all entities. Outputs feed directly into a Tableau executive dashboard.",
    github: "https://github.com/m2ammar/Pakistan-Financial-Services",
    tableau: "https://public.tableau.com/app/profile/muhammad.ammar.saleem/viz/PakistanFinancialServicesExecutiveDashboard/PakistanFinancialServicesExecutiveDashboard",
    caseStudy: {
      abstract:
        "A relational database simulating a Pakistani financial institution — 9 normalized tables covering 500 customers, 30 branches across 7 cities, and a Tableau executive dashboard built on top of it.",
      objective:
        "Model a realistic banking institution end-to-end: branches, customers, multiple account types, loans with full payment history, credit cards, and an audit trail — and surface the results as an executive-level dashboard rather than raw tables.",
      howItWorks: [
        "The schema covers 9 tables: branches (30 across 7 cities, 4 regions), customers (500, with income/city/branch info), accounts (Savings, Current, Fixed Deposit), employees (150 staff with designation and salary), loans (type, status, interest rate, tenure), loan_payments (payment history with late fees), transactions (deposits, withdrawals, transfers by channel), credit_cards (Visa, Mastercard, UnionPay), and an audit_log tracking changes across cards, loans, accounts, and customers.",
        "Analysis surfaced concrete business insights: Faisalabad generates the highest loan revenue at 311M PKR, Circular Road Branch holds the highest account balance at 29.5M PKR, and Islamabad is the strongest candidate for branch expansion based on customer count and loan volume, while Quetta shows the lowest activity.",
        "Results were connected to Tableau to build an executive dashboard summarizing branch performance, loan revenue by city, and top-performing employees."
      ],
      technologies: [
        "MySQL", "Tableau Public", "Audit Logging", "Subqueries", "Git & GitHub"
      ],
      gallery: [
        "/ammar-s_portfolio/finance-dashboard.png"
      ],
      challenges: [
        "Keeping 9 normalized tables consistent with each other — especially the audit_log, which had to track changes across cards, loans, accounts, and customers without becoming its own tangled mess.",
        "As with every SQL project, the recurring day-to-day friction was just forgetting syntax mid-query rather than any single hard concept."
      ],
      takeaways:
        "This was the project that sparked the interest to build something even bigger next. Working across 9 connected tables and a real audit trail made me want to push further into a larger, more interconnected database — which directly led into the 19-table Global Healthcare System project that followed."
    }
  },

  {
    id: 5,
    title: "Pakistan Textile Export Analysis",
    category: "SQL",
    year: "2025",
    image: "/ammar-s_portfolio/pak-textile.png",
    tags: ["MySQL", "Tableau", "Real Data", "YoY Analysis"],
    desc: "Built on real data from the Pakistan Textile Council and Pakistan Bureau of Statistics. Tracks quarterly export values and volumes from 2021–2025 across product categories and destination countries. Key finding: North America dominates exports, and value-added products consistently outperform raw textiles.",
    github: "https://github.com/m2ammar/Pakistan-textile-export-analysis",
    tableau: "https://public.tableau.com/app/profile/muhammad.ammar.saleem/viz/Pakistanstextilegrowthandcausesoflessrevenue/Pakistanstextilegrowthandcausesoflessrevenue",
    caseStudy: {
      abstract:
        "A data analysis project on Pakistan's textile export industry, built using real data from the Pakistan Textile Council (PTC) and Pakistan Bureau of Statistics (PBS) — one of the first projects where the underlying numbers were real, not self-generated.",
      objective:
        "Get hands-on practice analyzing real industry data rather than synthetic or classroom data, and use it to understand how external shocks — floods, COVID-19 — actually show up in a country's export numbers over time.",
      howItWorks: [
        "The schema is built around 4 tables: products (textile categories with HS chapter codes), countries (export destinations and regions), exports (quarterly export values and volumes from 2021–2025), and yearly_summary (annual totals, year-over-year growth, cotton production, and energy costs).",
        "The dashboard traces how floods and COVID-19 impacted Pakistan's textile industry and the gradual recovery that followed in the years after.",
        "Two key findings stood out: North America remains the dominant export destination by a clear margin, and value-added textile products consistently outperform raw/traditional textiles — pointing to where Pakistan's real growth opportunity lies."
      ],
      technologies: [
        "MySQL", "Tableau Public", "Real Government Data (PTC, PBS)", "Year-over-Year Analysis"
      ],
      gallery: [
        "/ammar-s_portfolio/pak-textile.png"
      ],
      challenges: [
        "This was one of the first projects working with real, imperfect government data instead of data I generated myself — meaning the numbers didn't always behave the way a clean synthetic dataset would.",
        "As always, the recurring friction was forgetting SQL syntax mid-query rather than any single conceptual blocker."
      ],
      takeaways:
        "Choosing real industry data over synthetic data pushed me to actually interpret results instead of just producing them — seeing floods and COVID-19 show up directly in export numbers, and value-added products outperforming raw textiles, made the analysis feel like real industry insight rather than an exercise."
    }
  },

  {
    id: 6,
    title: "Payroll Management System",
    category: "Java",
    year: "2026",
    image: "/ammar-s_portfolio/PayrollManagement.png",
    tags: ["Java", "JavaFX", "OOP", "MVC"],
    desc: "Desktop HR application built with strict MVC architecture. Polymorphism handles salary calculation across Full-Time, Part-Time, and Contract employees. Role-based access control separates SuperAdmin, SubAdmin, and Employee views. Includes leave request workflow, payslip generation, and CSV persistence across 28 seeded employees. Scored 10/10 at university viva.",
    github: "https://github.com/m2ammar/Payroll-Management-System",
    caseStudy: {
      abstract:
        'A desktop payroll management application built with Java, JavaFX, and MVC architecture, simulating a real-world HR payroll workflow. The system handles role-based access control, polymorphic salary calculation, and CSV-based data persistence for 28 seeded employees. Scored 10/10 at university viva.',
      objective:
        'Manual payroll processing is error-prone and time-consuming. The goal was to build a system that digitizes salary calculation across multiple employment types, manages leave requests through a proper approval workflow, and enforces a strict role hierarchy so only authorized personnel can perform sensitive actions — minimizing calculation errors that come with manual, spreadsheet-based payroll.',
      howItWorks: [
        'Three-tier role hierarchy: SuperAdmin has full access (add/remove employees, manage SubAdmins, approve leaves, view all payroll); SubAdmin can approve/reject leaves and view payroll but cannot create other admins; Employee can only view their own salary, submit leave requests, and view payslips.',
        'Polymorphic salary calculation across three employee types — Full-Time (fixed salary + overtime), Part-Time (hourly rate × hours worked), and Contract (fixed amount with expiry tracking) — all handled through a single unified PayrollManager class.',
        'Each employee carries multiple allowances (Housing, Transport, Medical, Bonus) and deductions (Tax, Pension, Insurance), all factored into the final net salary calculation.',
        'Leave requests flow from Employee submission to SubAdmin/SuperAdmin dashboard to approval or rejection, with the status update reflected back in the employee\'s view.',
        'Employee records and accounts persist to a CSV file on first run and reload automatically on subsequent launches — no database required.',
        'PayrollManager processes monthly payroll for all employees and generates individual payslips, including gross pay, allowances, deductions, and net salary.'
      ],
      technologies: [
        'Java 17', 'JavaFX', 'FXML', 'MVC Architecture', 'Polymorphism', 'CSV Data Persistence', 'Maven', 'Role-Based Access Control'
      ],
      gallery: [
        '/ammar-s_portfolio/PayrollManagement.png',
        '/ammar-s_portfolio/Superadmin.png',
        '/ammar-s_portfolio/SuperAdminPayrollHistory.png',
        '/ammar-s_portfolio/EmployeePreCalculate.png',
        '/ammar-s_portfolio/EmployeeSalary.png'
      ],
      challenges: [
        'PayrollManager was the hardest piece to get right — it iterates all 28 employees, dispatches salary calculation to the correct subclass via polymorphism, applies allowances and deductions, and generates payslip objects for the current month, all while staying decoupled from the specific employee subtypes.',
        'Used a MapList pattern to maintain fast lookup between employees and their payslips without duplicating data across the role hierarchy.',
        'Designing a clean multi-layer MVC architecture in JavaFX from scratch, with UI logic in controllers kept fully separate from business logic in the model layer.',
        'Managing shared state across multiple controllers through a central AppData object without introducing tight coupling.'
      ],
      takeaways:
        'This project built real confidence — going from calculation logic on paper to a working digital system that a business could actually use. I learned what polymorphism looks like in practice, not just in theory: the same processMonthly() call producing correct, different results depending on which employee subtype it touched. I also learned how to design role-based access control purely through object structure, without a database, and how to keep a growing codebase organized by strictly separating UI from business logic.'
    }
  },

  {
    id: 7,
    title: "Vehicle Rental System",
    category: "Java",
    year: "2025",
    image: "/ammar-s_portfolio/Home_vehicle.png",
    tags: ["Java", "JavaFX", "GUI", "File I/O"],
    desc: "JavaFX desktop application for managing vehicle bookings. Users select a vehicle, enter rental duration, and get an automatically calculated cost. Focused on clean separation of UI from backend logic, input validation, and error handling.",
    github: "https://github.com/m2ammar/VehicleRentalSystem",
    caseStudy: {
      abstract:
        '"Wheels on Deals" — a JavaFX-based vehicle rental management system built during Semester 1, back when I was still learning to use a laptop for real development work. Built with a team of two others, with me taking the lead role, it manages bookings, tracks fleet availability in real time, and handles returns for a small rental business fleet spanning nine vehicle types.',
      objective:
        'A small vehicle rental business needs a way to manage bookings, track availability, and handle returns — without relying on a spreadsheet. The goal was to build a simple desktop application solving that problem end-to-end for two types of users: customers booking vehicles, and administrators managing the fleet.',
      howItWorks: [
        'Dual login system separating Customer and Administrator roles — customers can book vehicles, view availability, and return vehicles; admins see full fleet status across all nine vehicle types.',
        'Customers book a vehicle for a specified number of days, with rental cost automatically calculated based on the vehicle\'s daily rate.',
        'Returning a vehicle updates its availability count in real time, so the fleet view is always accurate.',
        'Input validation and basic error handling guard against invalid bookings, since validation is critical for anything involving cost calculation.',
        'The problem was broken into small, single-purpose methods rather than one large booking function, keeping UI logic (JavaFX) fully separate from backend logic (plain Java classes).'
      ],
      technologies: [
        'Java', 'JavaFX', 'GUI Design', 'Input Validation', 'Multi-Method Programming', 'IntelliJ IDEA'
      ],
      gallery: [
        '/ammar-s_portfolio/Login_vehicle.png',
        '/ammar-s_portfolio/Available_vahicle.png',
        '/ammar-s_portfolio/Administrator_Vehicle.png',
        '/ammar-s_portfolio/Home_vehicle.png'
      ],
      challenges: [
        'This was built in Semester 1, at a point where I was still learning basic laptop workflows alongside programming itself — every part of the build was a double challenge.',
        'Had only gotten into CSS about two months prior, so styling and UI decisions were unfamiliar territory at the time.',
        'Ran into recurring JavaFX SDK configuration issues that weren\'t working correctly, which slowed down early development.',
        'Working in a team of two others while taking the lead meant coordinating design decisions and dividing backend/frontend responsibilities, on top of writing the code itself.'
      ],
      takeaways:
        'This project mattered less for its complexity and more for what it proved to me — that I could take a real business problem, break it into pieces, and ship something that worked, at a point when everything about development still felt unfamiliar. It taught me multi-method design, how to manage state across multiple screens without a database, and how to separate UI logic from backend logic cleanly. More than the code, it was the first project that genuinely boosted my confidence going forward.'
    }
  },

  {
  id: 8,
  title: '3-Floor Elevator Controller',
  category: 'DLD',
  year: '2026',
  image: '/ammar-s_portfolio/Elevator_Controller.png',

  tags: [
    'Digital Logic',
    'Sequential Circuits',
    'Boolean Algebra',
    'TinkerCad'
  ],

  desc: 'Hardware-level finite state machine built on a breadboard and simulated in TinkerCad. Current floor encoded as a 2-bit state (Q1Q0) while floor requests use one-hot encoding (F1–F3). Boolean equations derived from a truth table controlled the Up, Down, and Stop outputs, with the current floor displayed on a seven-segment display.',


  caseStudy: {
    abstract:
      'A hardware implementation of a three-floor elevator controller built as part of a Digital Logic Design course. The project combines combinational and sequential logic to simulate real elevator behavior using Boolean equations, D flip-flops, and a seven-segment display.',
    objective:
      'Apply Digital Logic Design concepts in a practical hardware project. Combine combinational and sequential circuits into one complete system. Design a controller capable of moving between three floors. Implement and verify the circuit using both simulation and physical hardware.',
    howItWorks: [
      'Current floor represented using 2-bit state encoding (Q1Q0).',
      'Floor requests implemented using one-hot encoding (F1, F2, F3).',
      'Boolean equations generated from a complete truth table.',
      'D Flip-Flops used for state storage.',
      '7447 decoder connected to a seven-segment display for floor indication.'
    ],
    technologies: [
      'Boolean Algebra',
      'Karnaugh Maps',
      'Combinational Logic',
      'Sequential Circuits',
      'State Machines',
      'D Flip-Flops',
      'Breadboard Prototyping',
      'Hardware Debugging',
      'TinkerCad Simulation'
    ],
    gallery: [
      '/ammar-s_portfolio/Elevator_Controller.png'
    ],
    challenges: [
      'Designed the controller without relying on complete online tutorials.',
      'Spent weeks debugging incorrect state transitions and signal ordering.',
      'Built and rebuilt the circuit multiple times after discovering wiring errors.',
      'Invested additional hardware components after several failed attempts.',
      'Visited university outside regular class hours, including Sundays, to continue testing.',
      'Validated the design in TinkerCad before implementing it physically.'
    ],
    takeaways:
     'This project fundamentally changed the way I approach engineering problems. It taught me that digital systems demand precision — one incorrect wire or one incorrect Boolean expression can prevent an entire system from functioning. Beyond Digital Logic Design, it strengthened my debugging mindset, patience, systematic testing, and confidence in transforming theoretical concepts into working hardware.'
  }
},

{
  id: 9,
  title: "Landing Pages — Aether & Aura",
  category: "Web Development",
  year: "2025",
  image: "/ammar-s_portfolio/web-development/Aether1.png",
  tags: ["HTML", "CSS", "JavaScript"],
  desc: "Two HTML/CSS/JS landing pages built during Sem 1 ICT practice — Aether (dark-tech SaaS) and Aura (minimalist lifestyle). Practicing these made the actual final exam, which asked for something harder, feel familiar instead of intimidating.",
  github: "https://github.com/m2ammar/Web-Dev-Projects-",
  caseStudy: {
    abstract: "Two landing pages built with HTML, CSS, and JavaScript as web development practice ahead of my Semester 1 ICT final exam.",
    howItWorks: [
      "Aether — a dark-tech SaaS landing page with a floating navbar, split hero section with an image slider, and a stats bar (uptime, latency, active nodes).",
      "Aura — a minimalist lifestyle brand page with a centered hero, full-width image slider, feature cards section, and a clean split footer."
    ],
    technologies: ["HTML", "CSS", "JavaScript (no frameworks)"],
    gallery: ["/ammar-s_portfolio/web-development/Aether1.png", "/ammar-s_portfolio/web-development/Aura1.png"],
    takeaways: "Early on, CSS layouts felt overwhelming — the breakthrough came when I started thinking in boxes, every element as a container with its own space. Once that clicked, Flexbox became straightforward. These same concepts showed up in my actual ICT final exam, which made the paper feel familiar instead of intimidating."
  }
},

{
  id: 12,
  title: "Interactive CSS Styler",
  category: "Web Development",
  year: "2025",
  image: "/ammar-s_portfolio/web-development/Interactive_CSS_Styler.png",
  tags: ["HTML", "CSS", "JavaScript"],
  desc: "A live styling playground — sliders and color pickers control a real element in real time, using direct DOM manipulation and event handling rather than static styling.",
  github: "https://github.com/m2ammar/web-fundamentals-lab",
  caseStudy: {
    abstract: "An interactive CSS playground where sliders and color pickers control a live preview element in real time — built to move from writing static CSS to manipulating styles dynamically through JavaScript.",
    howItWorks: [
      "Range sliders and color inputs are wired to a live preview box via JavaScript event listeners.",
      "Every input change updates the target element's inline styles immediately — border-radius, color, size, and spacing all respond in real time as the controls move."
    ],
    technologies: ["HTML", "CSS", "JavaScript (DOM Manipulation, Event Handling)"],
    gallery: [
      "/ammar-s_portfolio/web-development/Interactive_CSS_Styler.png",
      "/ammar-s_portfolio/web-development/Interactive_CSS_Styler_2.png"
    ],
    takeaways: "This was the first exercise where JavaScript felt like it was actually controlling the page rather than just responding to a button click — connecting an input's live value straight to an element's style property made event-driven programming click in a way static exercises hadn't."
  }
},

{
  id: 13,
  title: "Filterable Photo Gallery",
  category: "Web Development",
  year: "2025",
  image: "/ammar-s_portfolio/web-development/Filterable_Photo_Gallery.png",
  tags: ["HTML", "CSS", "JavaScript"],
  desc: "A 23-image gallery with a category sidebar and prev/next navigation — the most complete 'real product' feel of the Web Fundamentals Lab exercises.",
  github: "https://github.com/m2ammar/web-fundamentals-lab",
  caseStudy: {
    abstract: "A filterable photo gallery built to practice DOM filtering and navigation logic — 23 images organized by category, with a sidebar filter and prev/next controls.",
    howItWorks: [
      "A category sidebar filters the visible image set on click, using JavaScript to show/hide DOM elements rather than reloading any content.",
      "Prev/next navigation controls let a user step through the currently filtered set of images one at a time."
    ],
    technologies: ["HTML", "CSS", "JavaScript (DOM Filtering, Navigation Logic)"],
    gallery: ["/ammar-s_portfolio/web-development/Filterable_Photo_Gallery.png"],
    takeaways: "This was the exercise where a UI stopped feeling like a static layout and started feeling like a small product — filtering and navigation together meant thinking about state (which category is active, which image index is current) instead of just styling elements."
  }
},

{
  id: 14,
  title: "Student Registration Form",
  category: "Web Development",
  year: "2025",
  image: "/ammar-s_portfolio/web-development/registration-form.png",
  tags: ["HTML", "CSS"],
  desc: "A clean, structured registration form — fieldset/legend grouping, a full range of input types, and card styling with hover states. My cleanest structured-HTML piece.",
  github: "https://github.com/m2ammar/HTML-CSS-Fundamentals",
  caseStudy: {
    abstract: "A student registration form built to practice proper HTML form structure and styling — fieldsets, a full range of input types, and a polished card layout.",
    howItWorks: [
      "Form fields are grouped using fieldset and legend elements for semantic structure rather than plain divs.",
      "Covers the full range of common input types — text, email, number, radio, checkbox, select, and textarea — inside a styled card layout with hover states."
    ],
    technologies: ["HTML (Semantic Forms)", "CSS (Card Layout, Hover States)"],
    gallery: ["/ammar-s_portfolio/web-development/registration-form.png"],
    takeaways: "This was where form structure stopped being an afterthought — using fieldset and legend instead of generic divs made the form both more accessible and easier to style consistently, and it's the piece that best shows I understand form UX rather than just visual layout."
  }
},

{
  id: 15,
  title: "Course Sidebar Hover Demo",
  category: "Web Development",
  year: "2025",
  image: "/ammar-s_portfolio/web-development/Course_Sidebar_Hover_Demo.png",
  tags: ["HTML", "CSS"],
  desc: "A course sidebar layout with hover-state polish — practicing layout structure and interactive detail together.",
  github: "https://github.com/m2ammar/web-fundamentals-lab",
  caseStudy: {
    abstract: "A course sidebar layout exercise focused on combining solid layout structure with hover-state interactivity.",
    howItWorks: [
      "A fixed sidebar lists course sections, with hover states providing visual feedback as the user moves between items.",
      "Layout built with a focus on spacing and alignment consistency across sidebar and content areas."
    ],
    technologies: ["HTML", "CSS (Hover States, Layout)"],
    gallery: [
      "/ammar-s_portfolio/web-development/Course_Sidebar_Hover_Demo.png",
      "/ammar-s_portfolio/web-development/Course_Sidebar_Hover_Demo_2.png"
    ],
    takeaways: "A smaller exercise than the others, but useful for practicing the kind of layout + hover polish that shows up constantly in real navigation UI — the sidebar pattern here is one I'd reuse directly in a larger project."
  }
},

{
  id: 10,
  title: "JavaFX Calculator",
  category: "Others",
  year: "2025",
  image: "/ammar-s_portfolio/Calculator.png",
  tags: ["Java", "JavaFX"],
  desc: "A calculator built in Java with a JavaFX GUI — one of my earliest GUI projects. Getting the JavaFX SDK and VM options configured correctly was its own battle before a single button worked.",
  github: "https://github.com/m2ammar/Java-FX",
  caseStudy: {
    abstract: "Originally a class assignment, extended into a complete calculator with a JavaFX graphical interface.",
    howItWorks: [
      "Standard arithmetic operations (add, subtract, multiply, divide) handled through a JavaFX GUI with button-based input.",
      "Event-driven design — button clicks trigger calculation logic and update the display in real time."
    ],
    technologies: ["Java", "JavaFX", "Scene Builder"],
    gallery: ["/ammar-s_portfolio/Calculator.png", "/ammar-s_portfolio/Calculator2.png"],
    takeaways: "Getting the JavaFX SDK and VM options configured correctly was its own battle before a single button worked — module path errors, wrong JDK versions, VM argument issues. It took far longer than expected, but solving it taught me more about environment setup than the calculator logic itself did."
  }
},
{
  id: 11,
  title: "Mini Apps",
  category: "Others",
  year: "2025",
  image: "/ammar-s_portfolio/mini-apps-preview.png",
  tags: ["Java", "File I/O", "OOP"],
  desc: "Three console-based Java applications — Expense Tracker, Inventory & Stock Management, and Student Grading System — built early on, when even basic menu-driven logic felt hard.",
  github: "https://github.com/m2ammar/Mini_Apps",
  caseStudy: {
    abstract: "A collection of small, self-contained Java console applications, each simulating a real-world utility with menu-driven interaction, arrays/ArrayLists, and basic file I/O.",
    howItWorks: [
      "Personal Expense Tracker — tracks expenses across four categories with running totals.",
      "Inventory & Stock Management System — add/update/search/delete/sort products, with file persistence via FileWriter/BufferedReader.",
      "Student Grading System — records marks across five subjects, calculates grades and percentages, and includes a partial JavaFX GUI extension."
    ],
    technologies: ["Java", "ArrayList", "File I/O", "Static Methods"],
    gallery: ["/ammar-s_portfolio/mini-apps-preview.png"],
    takeaways: "Building these reinforced core Java fundamentals — arrays vs ArrayLists, static methods for shared state, menu-driven CLI design, and basic file persistence. The Student Grading System's JavaFX extension was left unfinished, reflecting ongoing progression rather than forced perfection."
  }
}

];