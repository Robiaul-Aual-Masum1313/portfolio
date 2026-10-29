const fs = require('fs');
const path = require('path');

// Simple script to generate a clean, valid PDF resume
const pdfContent = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 612 792]
  /Resources <<
    /Font <<
      /F1 4 0 R
      /F2 5 0 R
    >>
  >>
  /Contents 6 0 R
>>
endobj
4 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
6 0 obj
<< /Length 720 >>
stream
BT
/F1 24 Tf
50 740 Td
(ROBIAUL AUAL MASUM) Tj
/F2 12 Tf
0 -22 Td
(Frontend & MERN Stack Developer | Robiaul555@gmail.com | Dhaka, Bangladesh) Tj
0 -28 Td
/F1 14 Tf
(PROFESSIONAL SUMMARY) Tj
/F2 10 Tf
0 -18 Td
(Motivated Frontend and MERN Stack Developer with strong expertise in React.js, Next.js, TypeScript,) Tj
0 -14 Td
(Node.js, Express, and MongoDB. Proven capability in building responsive, modern web applications) Tj
0 -14 Td
(with clean code, RESTful API architecture, and seamless user experiences.) Tj
0 -26 Td
/F1 14 Tf
(TECHNICAL SKILLS) Tj
/F2 10 Tf
0 -18 Td
(Frontend: JavaScript (ES6+), TypeScript, React.js, Next.js (App Router), Tailwind CSS, Redux Toolkit) Tj
0 -14 Td
(Backend: Node.js, Express.js, RESTful APIs, JWT Authentication, MVC Architecture) Tj
0 -14 Td
(Database & Tools: MongoDB, Mongoose, Git, GitHub, Postman, Vercel, Netlify, npm) Tj
0 -26 Td
/F1 14 Tf
(FEATURED PROJECTS) Tj
/F2 10 Tf
0 -18 Td
(1. DevSphere - Full-Stack MERN Community Platform (Next.js, Node.js, Express, MongoDB, JWT)) Tj
0 -14 Td
(2. ShopNex - Modern E-Commerce Platform (React, Next.js, Redux Toolkit, Tailwind CSS)) Tj
0 -14 Td
(3. TaskMatrix - Agile Kanban Project Board (React, TypeScript, Node.js, Express, MongoDB)) Tj
0 -14 Td
(4. EatNDivide Pro - Group Expense & Bill Splitter (React, TypeScript, Tailwind CSS)) Tj
0 -26 Td
/F1 14 Tf
(EDUCATION) Tj
/F2 10 Tf
0 -18 Td
(Bachelor of Science in Computer Science & Engineering | 2021 - 2025) Tj
ET
endstream
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000262 00000 n 
0000000341 00000 n 
0000000415 00000 n 
trailer
<<
  /Size 7
  /Root 1 0 R
>>
startxref
1210
%%EOF`;

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'resume.pdf'), pdfContent);
console.log('Successfully generated public/resume.pdf');

