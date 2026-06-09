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
  Zap,
  Paintbrush,
  Armchair
} from "lucide-react";

export const servicesData = [
  {
    name: "CCTV Surveillance",
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
