import { 
  Megaphone, 
  PhoneCall, 
  PenTool, 
  Code, 
  Smartphone, 
  Printer,
  Video
} from "lucide-react";

export const servicesData = [
  {
    name: "Business & Digital Services",
    items: [
      { 
        id: "cctv-surveillance",
        title: "CCTV & Surveillance", 
        details: "Complete Enterprise Security Solutions", 
        price: "₹18,000+", 
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
          { label: "Hardware & Cameras", value: "₹12,000" },
          { label: "Installation & Cabling", value: "₹4,000" },
          { label: "DVR/NVR Setup", value: "₹2,000" }
        ]
      },
      { 
        id: "digital-marketing",
        title: "Digital Marketing", 
        details: "SEO, Social Ads, Lead Generation", 
        price: "₹25,000 / Month", 
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
          { label: "Ad Campaign Setup", value: "₹10,000" },
          { label: "SEO & Content", value: "₹10,000" },
          { label: "Management Fee", value: "₹5,000" }
        ]
      },
      { 
        id: "telemarketing",
        title: "Telemarketing", 
        details: "B2B/B2C Outbound Campaigns", 
        price: "₹15,000 / Month", 
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
          { label: "Dedicated Caller", value: "₹10,000" },
          { label: "Telecom Infrastructure", value: "₹2,500" },
          { label: "Scripting & QA", value: "₹2,500" }
        ]
      },
      { 
        id: "graphic-design",
        title: "Graphic Design", 
        details: "Branding & Social Assets", 
        price: "₹5,000 / Package", 
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
          { label: "Concept Creation", value: "₹2,000" },
          { label: "Design Execution", value: "₹2,000" },
          { label: "Source File Delivery", value: "₹1,000" }
        ]
      },
      { 
        id: "web-development",
        title: "Web Development", 
        details: "Responsive Custom Build", 
        price: "₹35,000+", 
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
          { label: "Design & Prototyping", value: "₹10,000" },
          { label: "Frontend & Backend Dev", value: "₹20,000" },
          { label: "Deployment & Setup", value: "₹5,000" }
        ]
      },
      { 
        id: "app-development",
        title: "App Development", 
        details: "iOS & Android Development", 
        price: "₹1,50,000+", 
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
          { label: "UI/UX & Architecture", value: "₹40,000" },
          { label: "App Development", value: "₹80,000" },
          { label: "Testing & Deployment", value: "₹30,000" }
        ]
      },
      { 
        id: "printer-stationery",
        title: "Printer/Stationery", 
        details: "Custom Corporate Printing", 
        price: "Quote per volume", 
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
          { label: "Design Setup", value: "Custom" },
          { label: "Material Cost", value: "Custom" },
          { label: "Printing Volume", value: "Custom" }
        ]
      },
    ],
  }
];

export function getServiceById(id: string) {
  for (const group of servicesData) {
    const service = group.items.find((item) => item.id === id);
    if (service) return service;
  }
  return null;
}
