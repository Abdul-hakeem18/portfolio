export type ProjectPlatform = 'Web' | 'Mobile' | 'Desktop' | 'WordPress';

export type Project = {
  name: string;
  category: string;
  platforms: ProjectPlatform[];
  description: string;
  tags: string[];
  color: string;
  features: string[];
  architecture: string;
  context?: string;
  preview?: string;
  previewAlt?: string;
  previewLabel?: string;
  previewFullPage?: boolean;
  liveUrl?: string;
  repoUrl?: string;
  screenshots?: { src: string; caption: string }[];
};

// Ordered by relevance: commercial full-stack and mobile work first, then academic projects.
export const projects: Project[] = [
  {
    name: 'POSMate', context: 'Lead developer · team of 3', repoUrl: 'https://github.com/horixpro-dev/posmate-releases/releases', liveUrl: 'https://posmate.horixpro.com/', platforms: ['Web', 'Mobile', 'Desktop'], category: 'Desktop · Web · Mobile', color: 'purple',
    preview: 'projects/posmate-homepage.webp',
    previewAlt: 'POSMate homepage presenting its retail software, hardware options and plans',
    previewLabel: 'View full homepage',
    previewFullPage: true,
    screenshots: [
      { src: 'projects/posmate-homepage.webp', caption: 'Homepage and product overview' },
      { src: 'projects/posmate-dashboard.webp', caption: 'Sales dashboard, inventory health and stock alerts' },
      { src: 'projects/posmate-checkout.webp', caption: 'Point of sale, product search and held carts' },
    ],
    description: 'An offline-first retail POS with a React/TypeScript Electron desktop client, Flutter mobile app and Laravel API. I lead the three-person team and run version control, servers and 50+ shipped releases.',
    tags: ['React', 'Electron', 'Laravel', 'Flutter'],
    features: ['Sales dashboard with discounts, returns, expenses and top-selling products.', 'Inventory health views with low-stock and near-expiry alerts.', 'Point-of-sale checkout with product search, category filters and held-cart recall.', 'Customer records, purchasing and inventory workflows.', 'Desktop local storage, synchronization services and receipt printing.', 'Mobile product management, barcode scanning and sales screens.'],
    architecture: 'React 18 + TypeScript + Electron desktop client (Zustand, IndexedDB via Dexie, SQLite) and a Flutter app, both on a Laravel REST API. The desktop works offline: requests queue and retry, data syncs every 5 minutes, conflicts resolve last-write-wins, and JWT tokens refresh automatically.'
  },
  {
    name: 'Dinodio', context: 'Full stack · delivered phases 1–5', liveUrl: 'https://dinodio.com/', platforms: ['Web'], category: 'Full-stack · Logistics', color: 'blue',
    preview: 'projects/dinodio-carrier-comparison.webp',
    previewAlt: 'Dinodio carrier comparison showing shipping services, prices and delivery dates',
    previewLabel: 'View carrier comparison',
    previewFullPage: true,
    screenshots: [
      { src: 'projects/dinodio-carrier-comparison.webp', caption: 'Carrier comparison' },
      { src: 'projects/dinodio-pickup-scheduling.webp', caption: 'Pickup and drop-off scheduling' },
    ],
    description: 'A multi-carrier shipping platform. I took it over from the original developer and built phases 1–5 across the Next.js front end and Express backend.',
    tags: ['Next.js', 'Node.js', 'Express', 'Carrier APIs'],
    features: ['Carrier comparison with prices, estimated arrival dates and cheapest/fastest options.', 'Multi-step shipment booking with pickup scheduling or drop-off selection.', 'Shipment confirmation with label printing, PDF saving and sharing controls.', 'Administration screens for shipment status and pickup management.', 'Address books, wallet records, transactions and support tickets.', 'Carrier integration code for FedEx, UPS, DHL and Upela.'],
    architecture: 'Next.js client → Express APIs → database and carrier services. API v2 includes MySQL; legacy v1 includes PostgreSQL.'
  },
  {
    name: 'BookSpot', context: 'Own product · lead developer', liveUrl: 'https://bookspot.lk/', platforms: ['Web', 'Mobile'], category: 'Full-stack · Booking marketplace', color: 'blue',
    preview: 'projects/bookspot-home.webp',
    previewAlt: 'BookSpot homepage with venue search and categories such as wedding halls, rooms and swimming pools',
    previewLabel: 'View homepage',
    previewFullPage: true,
    description: 'A live booking marketplace for halls, pools, photographers and car rentals in Sri Lanka. I lead development with one co-developer and run the hosting.',
    tags: ['Laravel 12', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'Playwright'],
    features: ['Search by service, location and date, then compare prices, photos and available times.', 'Ten-minute slot holds at checkout; advance or full bank-transfer payments with slip upload and vendor confirmation.', 'Four roles (customer, vendor, staff, super admin), refunds, support tickets and push notifications.', '150+ endpoint REST API covered by 700+ PHPUnit tests and Playwright browser tests.', 'GitHub Actions CI with automatic deployment to production.'],
    architecture: 'Laravel 12 REST API and Blade/Tailwind/Alpine.js web front end on MySQL, deployed through GitHub Actions. A companion mobile app is in development.',
  },
  {
    name: 'AI SEO Meta Writer', context: 'My WordPress plugin · AI + SEO', repoUrl: 'https://github.com/Abdul-hakeem18/ai-seo-meta-writer', platforms: ['WordPress'], category: 'WordPress plugin · AI', color: 'purple',
    preview: 'projects/ai-seo-meta-writer-settings.webp',
    previewAlt: 'AI SEO Meta Writer settings page with API endpoint, model, tone and post type options',
    previewLabel: 'View settings screen',
    screenshots: [
      { src: 'projects/ai-seo-meta-writer-metabox.webp', caption: 'Editor box: generate, edit and save the description' },
      { src: 'projects/ai-seo-meta-writer-settings.webp', caption: 'Settings: any OpenAI-compatible API (OpenAI, DeepSeek)' },
    ],
    description: 'A WordPress plugin that writes SEO meta descriptions with AI and saves them into Yoast SEO, Rank Math or its own meta tag. Works with OpenAI, DeepSeek or any compatible API.',
    tags: ['WordPress', 'PHP', 'OpenAI / DeepSeek', 'Yoast SEO', 'Rank Math', 'WP-CLI'],
    features: ['One-click generation in the editor, with an optional focus keyword and a live 155-character counter.', 'Detects Yoast SEO or Rank Math and saves to their fields; otherwise prints its own meta tag.', 'WooCommerce-aware: uses the product short description first.', 'WP-CLI bulk command for items without a description, with a dry-run mode.', 'Nonces, capability checks, sanitised input and escaped output; API key can live in wp-config.php.', 'PHPUnit tests and GitHub Actions CI on PHP 7.4, 8.1 and 8.3.'],
    architecture: 'Editor meta box (vanilla JS) → admin-ajax with nonce and capability checks → API client (wp_remote_post) → OpenAI-compatible chat completions API → SEO bridge that writes to Yoast SEO, Rank Math or its own meta.',
  },
  {
    name: 'DropifyPro', context: 'Commercial project', platforms: ['Web'], category: 'Web · E-commerce', color: 'blue',
    preview: 'projects/dropify-home.webp',
    previewAlt: 'DropifyPro homepage showcasing its inventory platform and membership plans',
    previewLabel: 'View full homepage',
    previewFullPage: true,
    screenshots: [
      { src: 'projects/dropify-home.webp', caption: 'Homepage and membership plans' },
      { src: 'projects/dropify-seller-dashboard.webp', caption: 'Seller dashboard and sales overview' },
      { src: 'projects/dropify-admin-dashboard.webp', caption: 'Admin product management' },
    ],
    description: 'A Laravel seller-operations platform covering eBay accounts, products, orders, subscriptions and administrative support workflows.',
    tags: ['Laravel', 'PHP', 'Blade', 'eBay API'],
    features: ['Seller dashboard with revenue, product, wallet and profit summaries, sales charts and recent sales.', 'Seller accounts, eBay account linking, products, variants and inventory records.', 'Admin product management with search, inventory fields, import logs and revision logs.', 'Orders, wholesale requests, memberships, onboarding and support modules.'],
    architecture: 'Laravel Blade interface → controllers and service/mapping layers → database and external marketplace services.'
  },
  {
    name: 'TradeWay', context: 'Freelance client project', platforms: ['Mobile', 'Web'], category: 'Full-stack · Business operations', color: 'teal',
    description: 'A business operations system I built on my own for a client: a React Native app, a React web app and a Node.js backend for customers, products, orders, sales and expenses.',
    tags: ['React Native', 'TypeScript', 'Redux Toolkit', 'React', 'Node.js', 'MySQL'],
    features: ['Customer records, product browsing and order creation.', 'Sales editing, purchase orders, returns and expenses.', 'Notification and reminder services.', 'Web app for the same business workflows on desktop.'],
    architecture: 'React Native (TypeScript) app and React web app → Node.js REST API → MySQL. The app uses Redux Toolkit, an Axios service layer and AsyncStorage for local state.',
  },
  {
    name: 'eBay Motors Management', context: 'Two-person team', platforms: ['Web'], category: 'Web · Marketplace automation', color: 'indigo',
    preview: 'projects/ebay-motors-redacted.webp',
    previewAlt: 'eBay Motors order management interface with seller and customer order data hidden',
    previewLabel: 'View edited preview',
    screenshots: [{ src: 'projects/ebay-motors-redacted.webp', caption: 'Order management — edited preview with private data hidden' }],
    description: 'A Laravel application for automotive listings, vehicle compatibility data, batch listing updates and eBay order workflows.',
    tags: ['Laravel', 'Bootstrap', 'eBay API', 'AWS', 'Windows Server'],
    features: ['Compatibility uploads, checks and bulk task processing.', 'Pricing, descriptions and listing image revisions.', 'Order management with new, shipped and cancelled order tabs, date filters and seller-account selection.', 'Downloadable order files, compatibility data and operational logs.'],
    architecture: 'Blade/Bootstrap administration interface → Laravel task workflows → database and eBay APIs. Hosted on an AWS Windows Server.'
  },
  {
    name: 'ClickReport', context: 'Lead developer · 2022–present', liveUrl: 'https://schoolpsychclickreport.com/', platforms: ['Web', 'WordPress'], category: 'WordPress · Reporting', color: 'indigo',
    preview: 'projects/clickreport-homepage.webp',
    previewAlt: 'ClickReport homepage with reporting tools, membership information and workflow overview',
    previewLabel: 'View full homepage',
    previewFullPage: true,
    description: 'A WordPress membership platform for school psychology reporting, with 100+ custom report templates built to client requests, interactive forms and narrative generation. I have led it since 2022 and maintain it on my own.',
    tags: ['WordPress', 'PHP', 'JavaScript', 'Custom Plugins', 'Yoast SEO'],
    features: ['100+ reports spanning cognitive, achievement, behavior, developmental and other assessment areas.', 'A categorized smart-template library and interactive reporting forms.', 'Score tables, narrative generation, report summaries and copy/export controls.', 'Custom PHP/JavaScript report templates and Avada child-theme customization.', 'Custom WordPress plugins tailored to the project.'],
    architecture: 'WordPress with custom plugins and PHP report pages → browser-side JavaScript form and narrative logic.'
  },
  {
    name: 'Virtual Study Assistant', repoUrl: 'https://github.com/abdhakeem18/VirtualStudyAssistant', platforms: ['Mobile'], category: 'Mobile · AI learning', color: 'indigo',
    context: 'Individual academic project',
    description: 'A React Native/Expo application that turns study documents into summaries, flashcards and quizzes through a DeepSeek-connected Express backend.',
    tags: ['React Native', 'Expo', 'DeepSeek', 'MySQL'],
    features: ['PDF upload, document organization and study-material generation.', 'Quizzes, explanations, results and attempt history.', 'Account management and quiz PDF export workflows.'],
    architecture: 'Expo client → Node.js/Express API → document processing and DeepSeek → MySQL learning records.'
  },
  {
    name: 'MealMind', repoUrl: 'https://github.com/Agentz47/meal_mind', platforms: ['Mobile'], category: 'Mobile · Shopping & discovery', color: 'teal',
    context: 'Group academic project',
    description: 'A Flutter app for shopping lists and nearby restaurant discovery, with Provider state management, Firestore services and Hive storage.',
    tags: ['Flutter', 'Firestore', 'Hive', 'Provider'],
    features: ['Create and edit shopping lists and purchase items.', 'Nearby restaurant views and location services.', 'Cloud and local data-storage service paths.'],
    architecture: 'Flutter screens → Provider/service layer → Firestore and Hive, with location and Google Places integration code.'
  },
  {
    name: 'The Design Collective Store', context: 'Built & maintained by me · 2024–present', liveUrl: 'https://thedesigncollectivestore.com/', platforms: ['Web', 'WordPress'], category: 'WordPress · E-commerce', color: 'purple',
    preview: 'projects/design-collective-preview.webp',
    previewAlt: 'The Design Collective Store homepage, product listing and checkout with contact details hidden',
    previewLabel: 'View edited preview',
    description: 'A WooCommerce fashion store whose stock, prices and sales stay in sync with the shop\'s three branches through a custom myPOS integration plugin, with Aramex shipping worldwide.',
    tags: ['WordPress', 'WooCommerce', 'myPOS API', 'Aramex', 'Custom Plugins', 'Yoast SEO'],
    features: ['Homepage with promotional banners and product categories.', 'Product listing with category, size and designer filters.', 'Checkout screens with shipping, billing, coupons and payment options.', 'Custom plugin connecting WooCommerce to the myPOS systems of all three branches, using webhooks plus a 10-minute cron sync for prices, stock and sales.', 'Online orders check stock across every branch before they are placed.', 'Fail-safe: if the POS API stops responding, the store closes to purchases automatically to prevent overselling.', 'Aramex shipping integration for local and international delivery.', 'Koko buy-now-pay-later and card payments at checkout.', 'Custom WordPress plugins tailored to the project.'],
    architecture: 'WooCommerce storefront with custom plugins, the Rey theme and Elementor, kept in sync with the in-store myPOS system by a custom integration plugin.'
  },
  {
    name: 'Max Precision Lab', context: 'Built & maintained by me · 2024–present', liveUrl: 'https://maxprecisionlab.com/', platforms: ['Web', 'WordPress'], category: 'WordPress · Business website', color: 'teal',
    preview: 'projects/max-precision-lab-homepage.webp',
    previewAlt: 'Max Precision Lab homepage with lab-supply categories, product listings and Add to Quote controls',
    previewLabel: 'View full homepage',
    previewFullPage: true,
    description: 'A WordPress lab-supply catalogue with product categories, search and Add to Quote options, using the Porto theme and custom plugins.',
    tags: ['WordPress', 'PHP', 'Porto', 'Custom Plugins', 'Yoast SEO'],
    features: ['Lab-supply catalogue organized by biotechnology, molecular biology, genetic engineering and chemical categories.', 'Product search, category browsing, featured products and Add to Quote controls.', 'Promotional banners, company information and contact options.', 'Porto theme and child-theme styling, including right-to-left stylesheet handling.', 'Custom WordPress plugins tailored to the project.'],
    architecture: 'Browser → WordPress theme and custom plugins → WordPress database.'
  },
  {
    name: 'Weather App', repoUrl: 'https://github.com/abdhakeem18/Weather-App', platforms: ['Mobile'], category: 'Mobile · Weather', color: 'blue',
    context: 'Academic coursework',
    description: 'A Flutter weather app with location lookup, city search, forecasts, favourite locations and timestamped local caching.',
    tags: ['Flutter', 'OpenWeatherMap', 'Hive', 'Provider'],
    features: ['Current weather, forecast and detail views.', 'City search, favourites and location services.', 'Local cache and preferences for saved weather data.'],
    architecture: 'Flutter views/viewmodels → weather and location services → OpenWeatherMap, with Hive local persistence.'
  },
  {
    name: 'HealthMate', repoUrl: 'https://github.com/abdhakeem18/Personal-Health-Tracker-App', platforms: ['Mobile'], category: 'Mobile · Personal tracking', color: 'purple',
    context: 'Academic coursework',
    description: 'A Flutter app for manually recording steps, calories and water intake, with local SQLite storage, goals and charts.',
    tags: ['Flutter', 'SQLite', 'Provider', 'Charts'],
    features: ['Add and edit daily records and review their history.', 'Dashboards, charts, goals and preferences.', 'Persistent local data storage.'],
    architecture: 'Flutter screens → Provider state → SQLite database helper. Records are logged by the user.'
  },
];
