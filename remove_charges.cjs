const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'CCTVSurveillanceDetails.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// The block to remove starts with "<div className=\"mt-8 pt-6 border-t border-border space-y-3\">"
// and ends with "Porter Charges Extra</span></div></div>" (3 nested divs)
const searchStr = `<div className="mt-8 pt-6 border-t border-border space-y-3">
                       <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <span className="text-sm font-bold text-slate-600">GST</span>
                          <span className="font-extrabold text-slate-800">GST 18% Extra</span>
                       </div>
                       <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <span className="text-sm font-bold text-slate-600">Freight</span>
                          <span className="font-extrabold text-slate-800">Freight Extra</span>
                       </div>
                       <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <span className="text-sm font-bold text-slate-600">Porter</span>
                          <span className="font-extrabold text-slate-800">Porter Charges Extra</span>
                       </div>
                    </div>`;

// Use regex to ignore whitespace differences
const regex = /<div className="mt-8 pt-6 border-t border-border space-y-3">[\s\S]*?Porter Charges Extra<\/span>\s*<\/div>\s*<\/div>/;

if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully removed extra charges block.');
} else {
    console.log('Block not found.');
}
