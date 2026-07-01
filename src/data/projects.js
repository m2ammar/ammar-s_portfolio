
export const TABLEAU =
  "https://public.tableau.com/app/profile/muhammad.ammar.saleem/vizzes";

export const projects = [
  {
    id: 1,
    title: "PakMart Retail Analytics",
    category: "SQL",
    year: "2026",
    image: "/ammar-s_portfolio/pakmart-ss.png",
    tags: ["MySQL", "Tableau", "Stored Procedures", "Window Functions"],
    desc: "A retail chain simulation tracking 7,000+ sales rows across 6 Pakistani cities. Built a stored procedure to auto-generate transactions mapped to local calendar events, then used RANK(), DENSE_RANK(), and LAG() to answer 9 business questions — promotion impact, MoM revenue shifts, top customers, and store rankings.",
    github: "https://github.com/m2ammar/PakMart_Retail_Analysis",
    tableau: TABLEAU,
  },

  {
    id: 2,
    title: "Global Healthcare System",
    category: "SQL",
    year: "2026",
    image: "/ammar-s_portfolio/global-dashboard-png.png",
    tags: ["MySQL", "Tableau", "Chained CTEs", "Multi-JOIN"],
    desc: "19-table relational database mapping health KPIs across 197 countries — mortality rates, healthcare spending, vaccination coverage, pandemic response, and more. The flagship SQL query chains 4 CTEs to produce a country-level scorecard comparing spending tier against life expectancy status in a single output.",
    github: "https://github.com/m2ammar/Global-Healthcare-System",
    tableau: TABLEAU,
  },

  {
    id: 3,
    title: "Pakistan Financial Services",
    category: "SQL",
    year: "2026",
    image: "/ammar-s_portfolio/finance-dashboard.png",
    tags: ["MySQL", "Tableau", "Audit Logging", "Subqueries"],
    desc: "9-table banking simulation with 500 customers, 30 branches across 7 cities, and 150 employees. Covers savings/current/fixed accounts, loans with payment history, credit cards, and an audit log tracking changes across all entities. Outputs feed directly into a Tableau executive dashboard.",
    github: "https://github.com/m2ammar/Pakistan-Financial-Services",
    tableau: TABLEAU,
  },

  {
    id: 4,
    title: "Pakistan Textile Export Analysis",
    category: "SQL",
    year: "2025",
    image: "/ammar-s_portfolio/pak-textile.png",
    tags: ["MySQL", "Tableau", "Real Data", "YoY Analysis"],
    desc: "Built on real data from the Pakistan Textile Council and Pakistan Bureau of Statistics. Tracks quarterly export values and volumes from 2021–2025 across product categories and destination countries. Key finding: North America dominates exports, and value-added products consistently outperform raw textiles.",
    github: "https://github.com/m2ammar/Pakistan-textile-export-analysis",
    tableau: TABLEAU,
  },

  {
    id: 5,
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
    id: 6,
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
  id: 7,
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


  // ---------- NEW ----------
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
}
];
