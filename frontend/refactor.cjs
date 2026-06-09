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

const modalContent = `
      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden text-center"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-premium" />
              <div className="mx-auto w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-success" />
              </div>
              <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Request Received!</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Thank you for your request. Our AI representative will call you shortly to confirm the details!
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
`;

const handlerContent = `
  const { user } = useAuth();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBooking = async (serviceName?: string) => {
    if (!user) {
      toast.error("Please login to complete your booking.");
      return;
    }
    setIsSubmitting(true);
    try {
      let requestedServices = [];
      if (serviceName) {
        requestedServices = [{ title: serviceName, quantity: 1, price: "Consultation" }];
      } else if (selectedItems.length > 0) {
        requestedServices = selectedItems.map(item => ({ title: item, quantity: 1, price: "Custom" }));
      } else {
        requestedServices = [{ title: "General Inquiry", quantity: 1, price: "Consultation" }];
      }

      const userName = user.displayName || user.email || "Customer";
      const bookingData = {
        customerName: userName,
        customerEmail: user.email,
        customerPhone: user.phoneNumber || "",
        services: requestedServices,
        totalItems: requestedServices.length,
        createdAt: serverTimestamp(),
        status: "pending",
      };

      await addDoc(collection(db, "bookings"), bookingData);
      setShowSuccessModal(true);
      setSelectedItems([]);
    } catch (err: any) {
      toast.error(err.message || "Failed to submit booking.");
    } finally {
      setIsSubmitting(false);
    }
  };
`;

const importsContent = `import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { AnimatePresence, motion } from "framer-motion";
`;

filesToUpdate.forEach(file => {
  const filePath = path.join(componentsDir, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Update Imports
  if (!content.includes('import { db }')) {
    // Insert imports after the first import block
    content = content.replace(/(import .*;\n)+/, match => match + importsContent);
  }

  // 2. Replace handleWhatsApp with handleBooking
  if (content.includes('const handleWhatsApp')) {
    const handleWaRegex = /const WHATSAPP_NUMBER = "919141052539";\s*const \[selectedItems, setSelectedItems\] = useState<string\[\]>\(\[\]\);\s*const handleWhatsApp = \([\s\S]*?\} else \{\s*text = .*;\s*\}\s*window\.open\([\s\S]*?\);\s*\};/;
    
    if (handleWaRegex.test(content)) {
        content = content.replace(handleWaRegex, `const [selectedItems, setSelectedItems] = useState<string[]>([]);` + handlerContent);
    } else {
        // Fallback replacement if the regex didn't perfectly match
        const backupRegex = /const handleWhatsApp = \([\s\S]*?window\.open\([^)]+\);\s*\};/;
        content = content.replace(backupRegex, handlerContent.replace(/const { user }.*\n.*\n.*\n/, '')); // Don't add hooks twice if we missed the first replace
        // But we need the hooks. Let's just do a simpler replace.
        const declarationRegex = /export function [A-Za-z]+\(\) \{\n\s*const WHATSAPP_NUMBER = "919141052539";/;
        content = content.replace(declarationRegex, match => match.replace('const WHATSAPP_NUMBER = "919141052539";', '') + handlerContent);
    }
  }

  // 3. Replace Button Texts and onClick handlers
  content = content.replace(/handleWhatsApp/g, 'handleBooking');
  content = content.replace(/>\s*Chat on WhatsApp\s*</g, '>Send Request<');
  content = content.replace(/>\s*Proceed to WhatsApp ➔\s*</g, '>Submit Request ➔<');
  content = content.replace(/>\s*🟢 Book via WhatsApp\s*</g, '>🟢 Send Request<');
  content = content.replace(/>\s*🟢 Consult via WhatsApp\s*</g, '>🟢 Send Request<');
  content = content.replace(/>\s*🟢 Dispatch via WhatsApp\s*</g, '>🟢 Send Request<');
  content = content.replace(/>\s*Consult via WhatsApp\s*</g, '>Send Request<');

  // 4. Add the modal before the final </div>
  if (!content.includes('<AnimatePresence>')) {
      // Find the last </div>
      const lastDivIndex = content.lastIndexOf('</div>');
      if (lastDivIndex !== -1) {
          content = content.substring(0, lastDivIndex) + modalContent + content.substring(lastDivIndex);
      }
  }

  // Ensure Framer motion is imported if not already there
  if (!content.includes('import { motion, AnimatePresence }') && !content.includes('import { AnimatePresence, motion }')) {
       // Handled by importsContent, but if there's duplicate imports we might have TS warnings, though it will compile.
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated ' + file);
});
