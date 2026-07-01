
const TABLEAU =
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
  },

  {
    id: 7,
    title: "3-Floor Elevator Controller",
    category: "DLD",
    year: "2026",
    image: "/ammar-s_portfolio/Elevator_Controller.png",
    tags: [
      "Digital Logic",
      "Sequential Circuits",
      "Boolean Algebra",
      "TinkerCad",
    ],
    desc: "Hardware-level finite state machine built on a breadboard and simulated in TinkerCad. Current floor encoded as a 2-bit state (Q1Q0), while floor requests used one-hot encoding (F1F2F3). Boolean equations derived from a 9-state truth table controlled the Up, Down, and Stop outputs. A 7447 decoder drove a seven-segment display to indicate the elevator's current floor.",
    github: "https://github.com/m2ammar",
  },
];
