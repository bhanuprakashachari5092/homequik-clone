const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const filesToUpdate = [
  'PaintingDetails.tsx',
  'SmartFilmGlassDetails.tsx',
  'HomeInteriorDetails.tsx',
  'HomeAutomationDetails.tsx',
  'ElectricalWorkDetails.tsx',
  'CCTVSurveillanceDetails.tsx'
];

const modalComponent = `
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceName={activeService} 
        selectedItems={selectedItems} 
      />
`;

filesToUpdate.forEach(file => {
  const filePath = path.join(componentsDir, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already refactored
  if (content.includes('import { BookingModal }')) return;

  // Add Import
  content = content.replace(
    'import { useState } from "react";',
    'import { useState } from "react";\nimport { BookingModal } from "@/components/BookingModal";'
  );

  // Replace handleWhatsApp logic
  const handleWaRegex = /const handleWhatsApp = \([\s\S]*?window\.open\([\s\S]*?\);\s*\};/;
  const newHandler = `const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<string>("General Inquiry");

  const handleWhatsApp = (serviceName?: string) => {
    setActiveService(serviceName || "General Inquiry");
    setIsModalOpen(true);
  };`;
  content = content.replace(handleWaRegex, newHandler);

  // Replace texts
  content = content.replace(/>\s*Chat on WhatsApp\s*</g, '>Send Request<');
  content = content.replace(/>\s*Proceed to WhatsApp ➔\s*</g, '>Submit Request ➔<');
  content = content.replace(/>\s*🟢 Book via WhatsApp\s*</g, '>🟢 Send Request<');
  content = content.replace(/>\s*🟢 Consult via WhatsApp\s*</g, '>🟢 Send Request<');
  content = content.replace(/>\s*🟢 Dispatch via WhatsApp\s*</g, '>🟢 Send Request<');
  content = content.replace(/>\s*Consult via WhatsApp\s*</g, '>Send Request<');

  // Insert BookingModal before the last </div>
  const lastDivIndex = content.lastIndexOf('</div>');
  if (lastDivIndex !== -1) {
      content = content.substring(0, lastDivIndex) + modalComponent + content.substring(lastDivIndex);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated ' + file);
});
