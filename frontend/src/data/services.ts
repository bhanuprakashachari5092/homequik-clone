import { 
  Megaphone, 
  PhoneCall, 
  PenTool, 
  Code, 
  Smartphone, 
  Printer,
  Video,
  Fingerprint,
  DoorOpen,
  BatteryCharging,
  Home,
  Laptop,
  Zap
} from "lucide-react";

export const servicesData = [
  {
    name: "Security & Surveillance",
    items: [
      { 
        id: "cctv-surveillance",
        title: "CCTV & Surveillance", 
        details: "Complete Enterprise Security Solutions", 
        price: "Custom Quote", 
        rating: 4.9, 
        reviews: "8.5M",
        image: "/services/cctv.png",
        Icon: Video,
        description: "Protect your business with our state-of-the-art 4K CCTV and surveillance systems. We provide end-to-end security solutions including installation, remote monitoring setup, and maintenance for enterprise and commercial properties.",
        features: [
          "4K Ultra HD Night Vision Cameras",
          "30-Day Cloud & Local Storage Backup",
          "Motion Detection & Mobile Alerts",
          "1 Year Free Maintenance & Support"
        ],
        costBreakdown: [
          { label: "Hardware & Cameras", value: "Quote on Request" },
          { label: "Installation & Cabling", value: "Quote on Request" },
          { label: "DVR/NVR Setup", value: "Quote on Request" }
        ]
      },
      { 
        id: "biometric-system",
        title: "Biometric System", 
        details: "Fingerprint & Retina Access", 
        price: "Custom Quote", 
        rating: 4.8, 
        reviews: "4.2M",
        image: "/services/biometric-system.png",
        Icon: Fingerprint,
        description: "Advanced biometric authentication systems for secure facility access and employee time tracking. From fingerprint scanners to facial recognition, we deploy enterprise-grade identity management.",
        features: [
          "Fingerprint & Facial Recognition",
          "Real-time Attendance Tracking",
          "Cloud Software Integration",
          "Anti-spoofing Technology"
        ],
        costBreakdown: [
          { label: "Biometric Scanners", value: "Quote on Request" },
          { label: "Software License", value: "Quote on Request" },
          { label: "Installation & Training", value: "Quote on Request" }
        ]
      },
      { 
        id: "access-control",
        title: "Access Control System", 
        details: "RFID & Smart Lock Solutions", 
        price: "Custom Quote", 
        rating: 4.9, 
        reviews: "5.1M",
        image: "/services/access-control.png",
        Icon: DoorOpen,
        description: "Restrict and monitor entry to sensitive areas with our smart access control systems. We install electromagnetic locks, RFID card readers, and centralized lockdown management systems.",
        features: [
          "RFID & Smart Card Readers",
          "Electromagnetic Door Locks",
          "Centralized Access Management",
          "Emergency Lockdown Integration"
        ],
        costBreakdown: [
          { label: "Hardware & Controllers", value: "Quote on Request" },
          { label: "RFID Cards/Tags", value: "Quote on Request" },
          { label: "Installation", value: "Quote on Request" }
        ]
      }
    ]
  },
  {
    name: "Smart Home & Automation",
    items: [
      { 
        id: "home-automation",
        title: "Home Automation", 
        details: "Smart Lighting & Climate Control", 
        price: "Custom Quote", 
        rating: 4.8, 
        reviews: "2.1M",
        image: "/services/home-automation.png",
        Icon: Home,
        description: "Transform your living space with intelligent home automation. Control lighting, temperature, curtains, and entertainment systems directly from your smartphone or voice assistant.",
        features: [
          "Voice Assistant Integration",
          "Smart Lighting & Moods",
          "Automated Curtains & Blinds",
          "Energy Consumption Analytics"
        ],
        costBreakdown: [
          { label: "Smart Hub & Sensors", value: "Quote on Request" },
          { label: "Smart Switches", value: "Quote on Request" },
          { label: "Configuration", value: "Quote on Request" }
        ]
      },
      { 
        id: "smart-film-glass",
        title: "Smart Film & Glass (PDLC)", 
        details: "Privacy On-Demand", 
        price: "Custom Quote", 
        rating: 4.7, 
        reviews: "900K",
        image: "/services/smart-film-glass.png",
        Icon: Laptop,
        description: "Switchable PDLC (Polymer Dispersed Liquid Crystal) smart glass and film installations. Transition any glass surface from transparent to opaque instantly for ultimate privacy.",
        features: [
          "Instant Privacy Control",
          "UV & Heat Rejection",
          "Remote & App Controlled",
          "Retrofit Film Available"
        ],
        costBreakdown: [
          { label: "PDLC Film/Glass per sq.ft", value: "Quote on Request" },
          { label: "Transformers & Wiring", value: "Quote on Request" },
          { label: "Application & Setup", value: "Quote on Request" }
        ]
      }
    ]
  },
  {
    name: "Maintenance & Repairs",
    items: [
      { 
        id: "electrical-work",
        title: "Electrical Work", 
        details: "Wiring, Panels & Repairs", 
        price: "Custom Quote", 
        rating: 4.8, 
        reviews: "6.7M",
        image: "/services/electrical-work.png",
        Icon: Zap,
        description: "Professional electrical services for commercial and residential properties. From fresh wiring and panel upgrades to short-circuit diagnostics and safety audits.",
        features: [
          "Certified Electricians",
          "Safety & Load Audits",
          "Panel Board Installations",
          "24/7 Emergency Repairs"
        ],
        costBreakdown: [
          { label: "Inspection Fee", value: "Quote on Request" },
          { label: "Wiring & Consumables", value: "Quote on Request" },
          { label: "Labor Charges", value: "Quote on Request" }
        ]
      },
      { 
        id: "ups-inverter",
        title: "UPS and Invertor", 
        details: "Uninterruptible Power Supply", 
        price: "Custom Quote", 
        rating: 4.9, 
        reviews: "3.4M",
        image: "/services/ups-inverter.png",
        Icon: BatteryCharging,
        description: "Ensure zero downtime for your critical systems with enterprise-grade UPS and pure sine-wave inverter installations. Perfect for server rooms, offices, and heavy-duty appliances.",
        features: [
          "Zero Transfer Time",
          "Pure Sine Wave Output",
          "Heavy-duty Tubular Batteries",
          "Load Capacity Analysis"
        ],
        costBreakdown: [
          { label: "UPS/Inverter Unit", value: "Quote on Request" },
          { label: "Battery Bank", value: "Quote on Request" },
          { label: "Load Separation Wiring", value: "Quote on Request" }
        ]
      }
    ]
  },
  {
    name: "Business & Digital Services",
    items: [
      { 
        id: "digital-marketing",
        title: "Digital Marketing", 
        details: "SEO, Social Ads, Lead Generation", 
        price: "Custom Quote", 
        rating: 4.9, 
        reviews: "3.2M",
        image: "/services/digital-marketing.png",
        Icon: Megaphone,
        description: "Scale your business with our comprehensive digital marketing solutions. From top-ranking SEO strategies to high-converting social media ads, our experts drive qualified leads directly to your sales funnel.",
        features: [
          "Advanced SEO & Keyword Ranking",
          "Meta & Google Ads Management",
          "Dedicated Account Manager",
          "Weekly Performance Reports"
        ],
        costBreakdown: [
          { label: "Ad Campaign Setup", value: "Quote on Request" },
          { label: "SEO & Content", value: "Quote on Request" },
          { label: "Management Fee", value: "Quote on Request" }
        ]
      },
      { 
        id: "telemarketing",
        title: "Telemarketing", 
        details: "B2B/B2C Outbound Campaigns", 
        price: "Custom Quote", 
        rating: 4.8, 
        reviews: "1.8M",
        image: "/services/telemarketing.png",
        Icon: PhoneCall,
        description: "Boost your sales with our professional outbound telemarketing campaigns. Our trained executives specialize in B2B lead generation, appointment setting, and customer retention strategies.",
        features: [
          "Trained Regional Calling Experts",
          "Custom Script Development",
          "Lead Qualification & CRM Sync",
          "Call Recording & Audits"
        ],
        costBreakdown: [
          { label: "Dedicated Caller", value: "Quote on Request" },
          { label: "Telecom Infrastructure", value: "Quote on Request" },
          { label: "Scripting & QA", value: "Quote on Request" }
        ]
      },
      { 
        id: "graphic-design",
        title: "Graphic Design", 
        details: "Branding & Social Assets", 
        price: "Custom Quote", 
        rating: 4.9, 
        reviews: "4.5M",
        image: "/services/graphic-design.png",
        Icon: PenTool,
        description: "Elevate your brand's visual identity with our premium graphic design services. We craft stunning logos, social media posts, brochures, and complete branding kits tailored to your industry.",
        features: [
          "Unlimited Revisions",
          "High-Resolution Source Files",
          "Brand Guideline Book",
          "Social Media Ready Assets"
        ],
        costBreakdown: [
          { label: "Concept Creation", value: "Quote on Request" },
          { label: "Design Execution", value: "Quote on Request" },
          { label: "Source File Delivery", value: "Quote on Request" }
        ]
      },
      { 
        id: "web-development",
        title: "Web Development", 
        details: "Responsive Custom Build", 
        price: "Custom Quote", 
        rating: 4.9, 
        reviews: "2.1M",
        image: "/services/web-development.png",
        Icon: Code,
        description: "Build a high-performance, responsive website that converts visitors into customers. We specialize in modern web technologies, ensuring your site is blazing fast, secure, and SEO-optimized.",
        features: [
          "Custom UI/UX Design",
          "Mobile-First Responsive Build",
          "CMS Integration & Training",
          "1 Year Free Hosting & SSL"
        ],
        costBreakdown: [
          { label: "Design & Prototyping", value: "Quote on Request" },
          { label: "Frontend & Backend Dev", value: "Quote on Request" },
          { label: "Deployment & Setup", value: "Quote on Request" }
        ]
      },
      { 
        id: "app-development",
        title: "App Development", 
        details: "iOS & Android Development", 
        price: "Custom Quote", 
        rating: 4.9, 
        reviews: "900K",
        image: "/services/app-development.png",
        Icon: Smartphone,
        description: "Transform your business idea into a powerful mobile application. We build native and cross-platform apps for iOS and Android with scalable architectures and stunning user interfaces.",
        features: [
          "iOS & Android Dual Platform",
          "Scalable Cloud Backend",
          "Payment Gateway Integration",
          "App Store & Play Store Publishing"
        ],
        costBreakdown: [
          { label: "UI/UX & Architecture", value: "Quote on Request" },
          { label: "App Development", value: "Quote on Request" },
          { label: "Testing & Deployment", value: "Quote on Request" }
        ]
      },
      { 
        id: "printer-stationery",
        title: "Printer/Stationery", 
        details: "Custom Corporate Printing", 
        price: "Custom Quote", 
        rating: 4.8, 
        reviews: "1.2M",
        image: "/services/printer-stationery.png",
        Icon: Printer,
        description: "High-quality corporate printing and premium stationery solutions. From business cards and letterheads to custom merchandise and bulk printing, we deliver professional quality with fast turnarounds.",
        features: [
          "Premium Paper Qualities",
          "Color Accurate Bulk Printing",
          "Custom Corporate Gifting",
          "Free Pan-India Delivery"
        ],
        costBreakdown: [
          { label: "Design Setup", value: "Quote on Request" },
          { label: "Material Cost", value: "Quote on Request" },
          { label: "Printing Volume", value: "Quote on Request" }
        ]
      }
    ]
  }
];

export function getServiceById(id: string) {
  for (const group of servicesData) {
    const service = group.items.find((item) => item.id === id);
    if (service) return service;
  }
  return null;
}
