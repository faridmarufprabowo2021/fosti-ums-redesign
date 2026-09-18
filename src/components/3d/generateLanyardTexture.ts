import { Member } from "@/types";

export function generateLanyardTexture(member: Member): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1536;
  const ctx = canvas.getContext("2d");

  if (!ctx) return canvas;

  const isRistek = member.division.toUpperCase().includes("RISTEK");
  const isKeor = member.division.toUpperCase().includes("KEORGANISASIAN");
  const isHubpub = member.division.toUpperCase().includes("HUBUNGAN");

  const accentColor = isRistek
    ? "#0055A4" // Lego Blue
    : isKeor
    ? "#AF101A" // Lego Red
    : isHubpub
    ? "#EAB308" // Lego Yellow
    : "#EF4444"; // BPHI Red

  // 1. Deep Obsidian Card Base with Subtle Gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 1024, 1536);
  bgGrad.addColorStop(0, "#12141a");
  bgGrad.addColorStop(0.5, "#0b0c10");
  bgGrad.addColorStop(1, "#151821");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1024, 1536);

  // 2. Tech Dot Grid Pattern
  ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
  for (let x = 40; x < 1024; x += 36) {
    for (let y = 140; y < 1400; y += 36) {
      ctx.beginPath();
      ctx.arc(x, y, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // 3. Thick Neo-Brutalist Border with Division Color Accent
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 18;
  ctx.strokeRect(20, 20, 984, 1496);

  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 6;
  ctx.strokeRect(32, 32, 960, 1472);

  // 4. Punch Hole Slot (Top Lanyard Clip Hole)
  ctx.fillStyle = "#050608";
  ctx.beginPath();
  ctx.roundRect(402, 44, 220, 36, 18);
  ctx.fill();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
  ctx.lineWidth = 4;
  ctx.stroke();

  // 5. Header Bar: University & Organization
  ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
  ctx.fillRect(40, 100, 944, 130);

  // Top Title
  ctx.fillStyle = "#A1A1AA";
  ctx.font = "bold 22px monospace";
  ctx.textAlign = "center";
  ctx.fillText("UNIVERSITAS MUHAMMADIYAH SURAKARTA", 512, 140);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "900 44px sans-serif";
  ctx.fillText("FOSTI UMS", 512, 188);

  // 6. Signature 4-Stud Lego Bar: 🔴 🟡 🔵 🟢
  const studs = ["#AF101A", "#FFD700", "#0055A4", "#00852B"];
  const studStartX = 392;
  studs.forEach((color, i) => {
    ctx.beginPath();
    ctx.arc(studStartX + i * 80, 260, 20, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 5;
    ctx.stroke();

    // Inner stud highlight
    ctx.beginPath();
    ctx.arc(studStartX + i * 80 - 5, 255, 6, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.fill();
  });

  // 7. Gold EMV Smart Card Chip Graphic
  ctx.fillStyle = "#F59E0B";
  ctx.beginPath();
  ctx.roundRect(90, 320, 100, 80, 12);
  ctx.fill();
  ctx.strokeStyle = "#B45309";
  ctx.lineWidth = 4;
  ctx.stroke();

  // Chip contact etchings
  ctx.strokeStyle = "#78350F";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(140, 320);
  ctx.lineTo(140, 400);
  ctx.moveTo(90, 360);
  ctx.lineTo(190, 360);
  ctx.stroke();

  // 8. Holographic Security Seal (Right Side)
  const holoGrad = ctx.createRadialGradient(910, 360, 10, 910, 360, 45);
  holoGrad.addColorStop(0, "rgba(255, 255, 255, 0.9)");
  holoGrad.addColorStop(0.3, "rgba(59, 130, 246, 0.8)");
  holoGrad.addColorStop(0.6, "rgba(236, 72, 153, 0.8)");
  holoGrad.addColorStop(1, "rgba(16, 185, 129, 0.7)");
  ctx.fillStyle = holoGrad;
  ctx.beginPath();
  ctx.arc(910, 360, 42, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.fillStyle = "#000000";
  ctx.font = "900 13px monospace";
  ctx.textAlign = "center";
  ctx.fillText("OFFICIAL", 910, 355);
  ctx.fillText("FOSTI", 910, 372);

  // 9. Member Photo Container
  const photoSize = 460;
  const photoX = 282;
  const photoY = 360;

  ctx.fillStyle = "#1E2028";
  ctx.fillRect(photoX, photoY, photoSize, photoSize);
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 14;
  ctx.strokeRect(photoX, photoY, photoSize, photoSize);

  // Decorative photo frame corners
  ctx.fillStyle = accentColor;
  ctx.fillRect(photoX - 8, photoY - 8, 36, 36);
  ctx.fillRect(photoX + photoSize - 28, photoY - 8, 36, 36);
  ctx.fillRect(photoX - 8, photoY + photoSize - 28, 36, 36);
  ctx.fillRect(photoX + photoSize - 28, photoY + photoSize - 28, 36, 36);

  // Load and render photo if available
  if (member.photoUrl) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = member.photoUrl;
    img.onload = () => {
      ctx.drawImage(img, photoX, photoY, photoSize, photoSize);
    };
  }

  // 10. Member Name Header
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "900 52px sans-serif";
  ctx.textAlign = "center";
  const nameUpper = member.name.toUpperCase();
  if (nameUpper.length > 20) {
    const words = nameUpper.split(" ");
    const mid = Math.ceil(words.length / 2);
    ctx.fillText(words.slice(0, mid).join(" "), 512, 895);
    ctx.fillText(words.slice(mid).join(" "), 512, 955);
  } else {
    ctx.fillText(nameUpper, 512, 925);
  }

  // 11. Division Badge Pill
  ctx.fillStyle = accentColor;
  ctx.beginPath();
  ctx.roundRect(182, 1000, 660, 72, 16);
  ctx.fill();
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 6;
  ctx.stroke();

  ctx.fillStyle = isHubpub ? "#000000" : "#FFFFFF";
  ctx.font = "900 32px monospace";
  ctx.fillText(member.division.toUpperCase(), 512, 1048);

  // 12. Role / Title
  ctx.fillStyle = "#F4F4F5";
  ctx.font = "bold 30px sans-serif";
  ctx.fillText(member.role, 512, 1125);

  // 13. Member ID Serial & Credentials
  ctx.fillStyle = "#71717A";
  ctx.font = "bold 20px monospace";
  const memberCode = `ID: 2026-FST-${member.id.replace("m-", "").padStart(3, "0")}`;
  ctx.fillText(memberCode, 512, 1170);

  // 14. Bottom Barcode & Verification Area
  ctx.fillStyle = "#181A20";
  ctx.fillRect(70, 1220, 884, 190);
  ctx.strokeStyle = "#272A32";
  ctx.lineWidth = 4;
  ctx.strokeRect(70, 1220, 884, 190);

  // Realistic Barcode Lines
  ctx.fillStyle = "#FFFFFF";
  let curX = 110;
  for (let i = 0; i < 54; i++) {
    const barW = ((i * 13 + 7) % 9) + 4;
    ctx.fillRect(curX, 1250, barW, 95);
    curX += barW + 5;
    if (curX > 630) break;
  }

  ctx.fillStyle = "#A1A1AA";
  ctx.font = "bold 16px monospace";
  ctx.textAlign = "left";
  ctx.fillText(`SN: ${member.id}-AUTH-2026`, 110, 1375);

  // Green Official Stamp Box
  ctx.save();
  ctx.translate(780, 1310);
  ctx.rotate(-0.12);
  ctx.strokeStyle = "#10B981";
  ctx.lineWidth = 6;
  ctx.strokeRect(-120, -42, 240, 84);
  ctx.fillStyle = "#10B981";
  ctx.font = "900 24px monospace";
  ctx.textAlign = "center";
  ctx.fillText("VERIFIED ID", 0, -5);
  ctx.font = "bold 16px monospace";
  ctx.fillText("FOSTI 2026/2027", 0, 22);
  ctx.restore();

  // 15. Microtext Security Band at Bottom
  ctx.fillStyle = "#52525B";
  ctx.font = "600 18px monospace";
  ctx.textAlign = "center";
  ctx.fillText("• FORUM OPEN SOURCE TEKNIK INFORMATIKA • FKI UMS •", 512, 1465);

  return canvas;
}
