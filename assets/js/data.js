/**
 * =============================================================================
 *  SITE CONTENT — EDIT ME
 * =============================================================================
 * This is the single place to change text, add/remove cards, projects, notes,
 * skills, etc. The HTML in /sections/*.html just loops over these arrays, so
 * most edits never require touching HTML.
 *
 *  - To ADD an item to a list (project, note, experiment, etc.) → copy an
 *    existing object in that array and change the values.
 *  - To REMOVE an item → delete its object from the array.
 *  - To REORDER → move objects up/down in the array.
 *  - Icons are Lucide icon names (https://lucide.dev/icons) unless noted.
 * =============================================================================
 */

const SITE_DATA = {

    // ---------------------------------------------------------------------
    // Global site meta / nav
    // ---------------------------------------------------------------------
    meta: {
        title: 'Maulina Sabrina Portofolio',
        brand: 'Maulina Sabrina',
        statusBadge: 'Active: Jul 2026',
    },

    nav: [
        { id: 'home', label: 'Home', href: '#home' },
        { id: 'builds', label: 'Builds', href: '#builds' },
        { id: 'playground', label: 'Playground', href: '#playground' },
        { id: 'notes', label: 'Notes', href: '#notes' },
        { id: 'about', label: 'About', href: '#about' },
    ],

    // ---------------------------------------------------------------------
    // Hero section (right window card + left intro text)
    // ---------------------------------------------------------------------
    profile: {
        name: 'Maulina',
        photo: 'profile.jpg',
        photoFallback: 'https://placehold.co/150x150/FAF9F5/808080?text=Maulina',
        role: 'Software Builder & Optimizer',
        location: 'Kediri, Indonesia 🇮🇩',
        statusTag: 'Status: Building daily tools',
        credentials: [
            { label: 'DEGREE', value: 'B.Comp.Sc in Informatics Engineering' },
            { label: 'ACADEMICS', value: 'GPA: 3.70 / 4.00', highlight: true },
            { label: 'SPECIALIZATION', value: 'System Analysis, UI & Scripts' },
        ],
        currentStatus: 'Available for work',
        hint: "✨ Ready to design reliable administrative interfaces. Let's talk!",
    },

    hero: {
        greeting: 'Hi, I\'m',
        name: 'Maulina',
        intro: 'I am a software builder and systems thinker based in <strong class="text-neutral-950 font-semibold">Kediri, Indonesia</strong>. Armed with a Bachelor\'s degree in <strong class="text-neutral-950 font-semibold">Informatics Engineering </strong>, I bridge the gap between complex code systems and practical everyday workflows.',
        availability: 'Open for Freelance & Opportunities',
        subnote: 'Currently working outside the traditional tech industry, which keeps me grounded in real-world human operational bottlenecks, while actively building inside it.',
        badges: [
            { icon: 'cpu', label: 'Software Builder', classes: 'bg-blue-50 text-blue-700 border-blue-100' },
            { icon: 'brain', label: 'Product Thinker', classes: 'bg-neutral-100 text-neutral-700 border-neutral-200' },
            { icon: 'git-branch', label: 'System Analyst-ish', classes: 'bg-amber-50 text-amber-800 border-amber-200/70' },
            { icon: 'search-code', label: 'Problem Collector 🔍', classes: 'bg-rose-50 text-rose-700 border-rose-100', title: 'The last one is cute 😂' },
        ],
    },

    // ---------------------------------------------------------------------
    // "Current Chapter" — book-inspired timeline
    // ---------------------------------------------------------------------
    currentChapter: {
        year: '📍 2026',
        role: 'School Administration',
        location: 'Pare, Indonesia',
        sideNote: {
            label: 'Administrative Duty',
            lead: 'My job title says <strong class="text-neutral-900">administration</strong>. <br>My VS Code says otherwise.',
            body: 'Whenever I notice repetitive work, paperwork bottlenecks, or general operational friction, I end up spending my nights sketching out and building web applications to solve them.',
        },
        timeline: [
            {
                icon: '🎓',
                title: 'Informatics Engineering',
                label: 'UNIVERSITY YEARS',
                labelClass: 'text-neutral-400',
                dotClass: 'bg-white border-2 border-neutral-400',
                body: 'Built a strong foundation in software engineering, algorithms, databases, and system thinking. This is where I realized I enjoy solving real-world problems more than simply writing code.',
                expandable: {
                    summary: '🎒 Campus Side Quests',
                    items: [
                        { border: 'border-pink-400', title: '🤝 Student Organization', body: 'Organized workshops and orientation events (PKKMB), coordinated committees, and learned how to manage projects with diverse teams.' },
                        { border: 'border-blue-400', title: '👩🏻‍🏫 Laboratory Assistant', body: 'Assisted programming labs, guided students, reviewed assignments, and helped explain technical concepts in a practical way.' },
                        { border: 'border-yellow-400', title: '🏆 GEMASTIK Finalist', body: "Reached the finalist stage of Indonesia's national student technology competition while collaborating on an innovative software project." },
                        { border: 'border-green-400', title: '💼 Backend Engineering Intern', body: 'Built business applications, worked with backend technologies, collaborated with a development team, and experienced real software development workflows.' },
                        { border: 'border-purple-400', title: '📚 Independent Study — Ruangguru', body: "Participated in Kampus Merdeka's Independent Study, strengthening my software engineering and product development skills through industry-based learning." },
                        { border: 'border-neutral-400', title: '🎓 Final Year Project', body: 'Developed a recommendation system for determining social gathering locations using the Borda method, combining decision-making algorithms with geographic considerations.' },
                    ],
                },
            },
            {
                icon: '🥐',
                title: 'Bakery Operations',
                label: 'WHERE BUSINESS MET CODE',
                labelClass: 'text-amber-700',
                dotClass: 'bg-amber-100 border-2 border-amber-400',
                body: 'Joined as an Operational Support Admin, learning the business from the ground up. As I became familiar with the daily workflow, I started building small internal tools that simplified repetitive tasks and supported the team\'s operations.',
                link: { href: '/project/bakery.html', text: 'Explore this project' },
            },
            {
                icon: '🏫',
                title: 'The School Administration',
                label: 'OPERATIONAL OPTIMIZATIONS',
                labelClass: 'text-blue-700',
                dotClass: 'bg-blue-100 border-2 border-blue-500',
                body: 'Designing tools to speed up registration, student attendance tracking, and reporting. Automating calculations to give teachers more time back.',
                connector: true,
            },
            {
                icon: '✨',
                title: 'Next Stop?',
                label: 'HOPEFULLY YOURS',
                labelClass: 'text-pink-600',
                dotClass: 'bg-pink-100 border-2 border-pink-500 animate-bounce',
                body: "Looking for high-impact teams to build robust tools for. Let's tackle real-world chaos together.",
                bodyBold: true,
            },
        ],
    },

    // ---------------------------------------------------------------------
    // Featured Builds — full case-study cards
    // ---------------------------------------------------------------------
    featuredBuilds: [
        {
            emoji: '🥐',
            title: 'Bakery Management Hub',
            subtitle: 'Designed for a fast-paced kitchen workflow',
            headerGradient: 'from-amber-50 to-orange-50/40',
            badge: 'Still Used Today',
            badgeClass: 'bg-amber-100/60 text-amber-800',
            problem: 'Attendance, expenses, and daily orders were still fully managed on messy physical paper slips. Calculations at the end of the month meant manual reconciliation nightmare.',
            observation: "Before writing any code, I watched the bakery operate. The paper records weren't evil—they matched a fast workflow that already made sense to the kitchen team. My job was to digitalize and keep that workflow without slowing them down.",
            built: [
                '<strong>HR Attendance Logs</strong> for clean staff rosters.',
                '<strong>Order Recap Calculator</strong> matching order sheets.',
                '<strong>Expense Tracker</strong> for physical invoice collection.',
                '<strong>Automated Monthly Reports</strong> in one clean click.',
            ],
            outcome: 'The tools seamlessly replaced paper notebooks. Calculations became instantaneous, reducing monthly audit overhead from full days to literally seconds.',
        },
        {
            emoji: '🏫',
            title: 'Operational Book Calculator',
            subtitle: 'Automated financial math for registrar operations',
            headerGradient: 'from-blue-50 to-indigo-50/40',
            badge: 'System Analyst Archetype',
            badgeClass: 'bg-blue-100/60 text-blue-800',
            problem: 'Parents filled forms. Meanwhile, busy cashiers manually counted stack totals for textbook packages, tuition scales, and uniforms. Errors occurred under high-stress rushes.',
            observation: 'Every single transaction repeated the exact same mathematical patterns and package options. Cashiers were performing complex lookups mentally during live conversations.',
            built: [
                '<strong>Package Selector Calculator</strong> with immediate feedback.',
                '<strong>Pre-filled Form Builder</strong> matching structural layouts.',
                '<strong>Dynamic Ledger Summaries</strong> to confirm total pricing.',
            ],
            outcome: "Drastically cut parents' queue wait times and relieved stress for registration cashiers. Zero calculation errors recorded in the initial trial.",
        },
    ],

    // ---------------------------------------------------------------------
    // "How I Build" process steps
    // ---------------------------------------------------------------------
    howIBuild: [
        { num: '01', bg: 'bg-amber-100', text: 'text-amber-700', title: 'Observe', emoji: '🔍', desc: 'Shadow operations. Notice where manual spreadsheets break or physical notebooks accumulate dust.' },
        { num: '02', bg: 'bg-blue-100', text: 'text-blue-700', title: 'Ask Questions', emoji: '💬', desc: 'Ask "Why is this done this way?" Find out if the custom process is a legacy rule or a logical workflow.' },
        { num: '03', bg: 'bg-purple-100', text: 'text-purple-700', title: 'Sketch & Build', emoji: '💻', desc: 'Create a minimal usable wireframe immediately. Build with robust primitives and no bloated fluff.' },
        { num: '04', bg: 'bg-pink-100', text: 'text-pink-700', title: 'Improve & Repeat', emoji: '🔄', desc: 'Sit beside the user while they click. Tweak code live until the workflow is entirely frictionless.' },
    ],

    // ---------------------------------------------------------------------
    // Project Library — tabbed grid. Add a new tab by adding to `tabs` AND
    // adding a matching array key below.
    // ---------------------------------------------------------------------
    projectLibraryTabs: [
        { key: 'real-people', label: 'Real People' },
        { key: 'myself', label: 'For Myself' },
        { key: 'learn', label: 'Learning' },
        { key: 'just-because', label: 'Just Because' },
    ],

    projects: {
        'real-people': [
            { icon: '🥐', title: 'Bakery HR Logs', desc: 'Replaced manual kitchen sign-in notebooks. Fast and ergonomic.', badge: 'production', stack: 'Vanilla JS / Tailwind' },
            { icon: '🏫', title: 'Operational Book Calc', desc: 'Pre-filled cashier calculation package system reducing queue latency.', badge: 'active', stack: 'Tailwind / Alpine.js' },
            { icon: '📋', title: 'Student Form Builder', desc: 'Dynamically parses raw administrative rosters to clean pre-filled sheets.', badge: 'shipped', stack: 'Javascript' },
        ],
        myself: [
            { icon: '⏳', title: 'Focus Log Tracker', desc: 'A gorgeous minimalist focus counter for study intervals with zero analytics.', badge: 'utility', stack: 'Alpine / Tailwind' },
            { icon: '🐷', title: 'Life Piggy Bank', desc: 'Cute, lightweight visual logger representing micro personal finances.', badge: 'experimental', stack: 'Vanilla JS' },
            { icon: '🎛️', title: 'Vibe Synth v1', desc: 'Interactive sound generator simulating cozy office audio clicks.', badge: 'fun', stack: 'Tone.js' },
        ],
        learn: [
            { icon: '☕', title: 'Cafe Finder', desc: 'Flutter app mapping third-wave coffee locations with lightweight database queries.', badge: 'lab', stack: 'Flutter / SQLite' },
            { icon: '🔌', title: 'CRUD & REST API Lab', desc: 'Clean, fully compliant API schema built specifically to dissect latency bottlenecks.', badge: 'completed', stack: 'NodeJS / Express' },
            { icon: '⚛️', title: 'React workflow experiments', desc: 'Building complex high-frequency forms and investigating rendering efficiency.', badge: 'practice', stack: 'React JS' },
        ],
        'just-because': [
            { icon: '🛸', title: '2 AM Space Sketcher', desc: 'Generative interactive space particles floating on mouse tracker vectors.', badge: 'wild', stack: 'Canvas API' },
            { icon: '🧩', title: 'Spreadsheet to HTML', desc: 'Tiny utility to map Excel style copy-paste lines into crisp markdown tables.', badge: 'micro-hack', stack: 'Javascript' },
        ],
    },

    // ---------------------------------------------------------------------
    // Tiny Experiments — pinterest-style grid
    // ---------------------------------------------------------------------
    tinyExperiments: [
        { tag: '⏳ 30m hack', index: '01/10', title: 'Quick Invoice Generator', desc: 'Instantly generate beautiful, structured invoice PDFs inside your browser window without standard registration steps.' },
        { tag: '🔌 API Experiment', index: '02/10', title: 'Local Weather API Widget', desc: 'Super lightweight weather dashboard that syncs to local-storage to operate offline in critical power conditions.' },
        { tag: '🦊 Chrome Extension', index: '03/10', title: 'Minimal Tab Sweeper', desc: 'Tidy up browser state instantly. Automatically clusters administrative research tabs under smart tags.' },
        { tag: '📄 Utility', index: '04/10', title: 'Aesthetic Markdown Parser', desc: 'Turn raw text documentation into modern, readable Notion-like styled pages in milliseconds.' },
        { tag: '🧩 CSS Hack', index: '05/10', title: 'Muji Color Matcher', desc: 'Input any HEX code, and it returns complementary shades matching pure neutral and warm Japanese architectural palettes.' },
        { tag: '⚡ Micro-challenge', index: '06/10', title: 'CSV Multi-Splitter', desc: 'A tiny parser designed for administrators to drop massive school roster tables and parse out dynamic student batches.' },
    ],

    // ---------------------------------------------------------------------
    // Playground / Current Obsessions
    // ---------------------------------------------------------------------
    playground: {
        techInterests: [
            { dot: 'bg-blue-500', label: 'Product Design' },
            { dot: 'bg-purple-500', label: 'AI Workflow' },
            { dot: 'bg-emerald-500', label: 'Local-first apps' },
            { dot: 'bg-amber-500', label: 'Tiny utilities' },
            { dot: 'bg-pink-500', label: 'Internal Operations Tools', wide: true },
        ],
        personalObsessions: [
            { classes: 'bg-rose-50 text-rose-700', label: '🏎 Formula 1' },
            { classes: 'bg-blue-50 text-blue-700', label: '⚽ Football' },
            { classes: 'bg-purple-50 text-purple-700', label: '🎧 Korean Indie Music' },
        ],
        synthCard: {
            eyebrow: 'VIBE CODER CHILL STATION',
            liveTag: 'LIVE SYNTH',
            title: 'The 2 AM Coffee Synth',
            desc: "Maulina's custom coding synthesizer widget. Generates real-time ambient lofi keyboard clicks & soft synthetic backing pads using Tone.js to get you in the zone.",
            keys: [
                { note: 'C', freq: 261.63 },
                { note: 'D', freq: 293.66 },
                { note: 'E', freq: 329.63 },
                { note: 'F', freq: 349.23 },
                { note: 'G', freq: 392.00 },
            ],
        },
    },

    // ---------------------------------------------------------------------
    // About — "Things About Me" grid
    // ---------------------------------------------------------------------
    aboutCards: [
        { emoji: '☕', title: 'Coffee Enthusiast', desc: "I enjoy the slow, deliberate craft of manual brewing. It's the only ritual that rivals writing clean code." },
        { emoji: '🏎', title: 'Motorsports Lover', desc: 'Hooked on Formula 1 engineering design. Looking at aerodynamical iterations teaches me how systems adapt under stress.' },
        { emoji: '⚽', title: 'Football Lover', desc: 'Appreciating the split-second tactics, flow of defense mechanisms, and spatial layout strategy.' },
        { emoji: '📖', title: 'Idea Documenter', desc: 'I record thoughts constantly, mapping odd user workflows, bugs, and random designs before they evaporate.' },
        { emoji: '🌱', title: 'Learning by Building', desc: 'I learn nothing from reading manuals passively. I learn everything from breaking a tool, getting stuck, and writing a patch.' },
        { emoji: '💻', title: 'Spreadsheets to Sites', desc: "Give me a messy manual tracking system and I'll spin up a functional operational UI with high visual warmth." },
    ],

    // ---------------------------------------------------------------------
    // Skills & Tech Stack
    // ---------------------------------------------------------------------
    skills: {
        techStack: [
            { label: 'Frontend & Prototyping', tags: ['HTML5 / CSS3', 'Tailwind CSS', 'JavaScript (ES6+)', 'Alpine.js', 'React.js'] },
            { label: 'Backend & Automation', tags: ['Node.js', 'Express API', 'Python Scripting', 'SQLite & Postgres'] },
            { label: 'Analytical & Design Methods', tags: ['Workflow Mapping', 'System Analysis', 'Relational DB Design', 'Git / Version Control'] },
        ],
        dailyApps: [
            { emoji: '📓', title: 'Notion', desc: 'Where my systems architecture maps, project specifications, and user guides live.' },
            { emoji: '✍️', title: 'Obsidian', desc: 'My offline digital garden for deep, linked, distraction-free markdown thinking.' },
            { emoji: '💻', title: 'VS Code (GitHub Light Default)', desc: 'Custom streamlined keyboard layouts, optimized for writing clean automation scripts.' },
            { emoji: '⚡', title: 'Raycast / Obsidian Quick capture', desc: 'Lightning-fast hotkey launcher to note down random operational ideas in 3 seconds.' },
        ],
    },

    // ---------------------------------------------------------------------
    // "Now" section (Derek Sivers style)
    // ---------------------------------------------------------------------
    now: {
        lastUpdated: 'Last updated: July 2026',
        updates: [
            { label: '📖 Reading', color: 'text-blue-500', title: '"Designing Data-Intensive Applications"', desc: 'Learning how large distributed databases store information efficiently.' },
            { label: '🛠️ Building', color: 'text-pink-500', title: 'Dynamic queue scheduler', desc: 'A mobile system for parents queueing for student registrations.' },
            { label: '🧠 Learning', color: 'text-emerald-600', title: 'Local-first architectures', desc: 'Experimenting with SQLite running purely inside indexDB instances.' },
            { label: '💭 Thinking About', color: 'text-purple-600', title: 'Manual workflows as features', desc: 'Why digital software design breaks when it tries to completely erase raw paper routines.' },
        ],
    },

    // ---------------------------------------------------------------------
    // Notes — sticky-note digital garden entries
    // ---------------------------------------------------------------------
    notes: [
        {
            id: '#01 LESSONS FROM BAKERY', date: 'JULY 2026', location: '📍 Pare',
            bg: 'bg-[#FEFCE8]', border: 'border-yellow-200/60', rotate: 'rotate-[-1deg]',
            tagColor: 'text-amber-700', footerBorder: 'border-yellow-200', footerColor: 'text-amber-600',
            text: '"The bakers didn\'t care about database performance metrics. They cared about whether they could enter numbers with floured hands without the screen clearing accidentally. Interface ergonomics is everything."',
        },
        {
            id: '#02 SYSTEM ANALYST THOUGHT', date: 'JUNE 2026', location: '📍 School',
            bg: 'bg-[#EFF6FF]', border: 'border-blue-200/60', rotate: 'rotate-[1.5deg]',
            tagColor: 'text-blue-700', footerBorder: 'border-blue-200', footerColor: 'text-blue-600',
            text: '"If you automate a broken manual workflow, you get an automated broken workflow. Spend double the time observing the logic of physical logs before laying down code."',
        },
        {
            id: '#03 CUTE BUGS COLLECTION', date: 'MAY 2026', location: '📍 Pare',
            bg: 'bg-[#FDF2F8]', border: 'border-pink-200/60', rotate: 'rotate-[-0.8deg]',
            tagColor: 'text-pink-700', footerBorder: 'border-pink-200', footerColor: 'text-pink-600',
            text: '"Spent three hours diagnosing a transaction calculation discrepancy only to discover the office administrator was rounding down decimals to buy visual \'uniform badges\' for the mock database students."',
        },
    ],

    // ---------------------------------------------------------------------
    // Contact section
    // ---------------------------------------------------------------------
    contact: {
        badge: 'Active Availability',
        title: "Let's Build Something",
        body: 'Need an internal management interface? Have a manual bottleneck holding back your company team? Or just want a dedicated developer who loves understanding the raw logic of your company before building tools?',
        quote: "Let's sit down, track down some bottlenecks, and write the right tools.",
        email: 'maulina@example.com',
        socials: [
            { icon: 'mail', href: 'mailto:maulina@example.com', label: 'Email Direct' },
            { icon: 'linkedin', href: 'https://linkedin.com', label: 'LinkedIn Profile' },
            { icon: 'github', href: 'https://github.com', label: 'GitHub profile' },
        ],
        successMessage: "Got it! Thank you for sharing. I'll get back to you with a sketch as soon as my terminal loads.",
    },

    // ---------------------------------------------------------------------
    // Footer
    // ---------------------------------------------------------------------
    footer: {
        copyright: '© 2026 Maulina. Quietly leaving operations cleaner than I found them.',
        tagline: 'Designed with Muji Visuals',
        note: '/builds only',
    },

    // ---------------------------------------------------------------------
    // "Focus Log" tasks used by an Alpine widget (currently unused visually,
    // kept as sample data for a future to-do widget)
    // ---------------------------------------------------------------------
    tasks: [
        { title: 'School attendance tools', description: 'Automating high-frequency daily register records.', done: true },
        { title: 'Queue system', description: 'Interactive mobile token generator.', done: false },
        { title: 'Portfolio v3', description: 'Refining responsive layouts for the digital log.', done: true },
        { title: 'Random ideas at 2AM', description: 'Unstructured experiment notes.', done: false },
    ],
};
