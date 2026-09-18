import { Member } from "@/types";

export interface CardTexturesResult {
  front: string;
  back: string;
  lanyard: string;
}

// Helper to get division accent color
export function getDivisionColor(division: string): {
  primary: string;
  secondary: string;
  border: string;
  textColor: string;
} {
  const div = division.toUpperCase();
  if (div.includes("RISTEK") || div.includes("RISET")) {
    return {
      primary: "#0055A4", // Lego Blue
      secondary: "#1D4ED8",
      border: "#3B82F6",
      textColor: "#FFFFFF",
    };
  }
  if (div.includes("KEORGANISASIAN") || div.includes("KEOR")) {
    return {
      primary: "#AF101A", // Lego Red
      secondary: "#DC2626",
      border: "#EF4444",
      textColor: "#FFFFFF",
    };
  }
  if (div.includes("HUBUNGAN") || div.includes("PUB") || div.includes("HUMAS")) {
    return {
      primary: "#FFD700", // Lego Yellow
      secondary: "#EAB308",
      border: "#FACC15",
      textColor: "#000000",
    };
  }
  // BPHI / Default
  return {
    primary: "#AF101A",
    secondary: "#B91C1C",
    border: "#F87171",
    textColor: "#FFFFFF",
  };
}

/**
 * Generates the Front Card Texture (UV-mapped to left half of card.glb)
 * Dimensions: 840 x 1270 (matching UV rect ~0.66 aspect ratio)
 */
export function generateFostiFrontCanvas(
  member: Member,
  loadedPhoto?: HTMLImageElement | null
): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  const W = 840;
  const H = 1270;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  const colors = getDivisionColor(member.division);

  // 1. Base Gradient (Deep Obsidian Tech)
  const bgGrad = ctx.createLinearGradient(0, 0, W, H);
  bgGrad.addColorStop(0, "#0c0e14");
  bgGrad.addColorStop(0.5, "#07080b");
  bgGrad.addColorStop(1, "#12151e");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // 2. Micro Dot Grid Pattern
  ctx.fillStyle = "rgba(255, 255, 255, 0.035)";
  for (let x = 30; x < W; x += 28) {
    for (let y = 100; y < H - 40; y += 28) {
      ctx.beginPath();
      ctx.arc(x, y, 1.8, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // 3. Thick Neo-Brutalist Border with Division Color
  ctx.strokeStyle = colors.primary;
  ctx.lineWidth = 14;
  ctx.strokeRect(16, 16, W - 32, H - 32);

  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 4;
  ctx.strokeRect(24, 24, W - 48, H - 48);

  // 4. Clip Slot Indication (Top)
  ctx.fillStyle = "#050608";
  ctx.beginPath();
  ctx.roundRect(W / 2 - 90, 36, 180, 28, 14);
  ctx.fill();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
  ctx.lineWidth = 2;
  ctx.stroke();

  // 5. Header: Organization & Institution
  ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
  ctx.fillRect(36, 80, W - 72, 105);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
  ctx.lineWidth = 1;
  ctx.strokeRect(36, 80, W - 72, 105);

  ctx.fillStyle = "#94A3B8";
  ctx.font = "bold 17px monospace";
  ctx.textAlign = "center";
  ctx.fillText("UNIVERSITAS MUHAMMADIYAH SURAKARTA", W / 2, 114);

  ctx.fillStyle = "#64748B";
  ctx.font = "600 13px sans-serif";
  ctx.fillText("FAKULTAS KOMUNIKASI & INFORMATIKA", W / 2, 134);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "900 36px sans-serif";
  ctx.fillText("FOSTI UMS", W / 2, 172);

  // 6. Signature 4-Stud Lego Bar: 🔴 🟡 🔵 🟢
  const studs = ["#AF101A", "#FFD700", "#0055A4", "#00852B"];
  const studStartX = W / 2 - 105;
  studs.forEach((color, i) => {
    const sx = studStartX + i * 70;
    const sy = 224;

    // Outer shadow
    ctx.beginPath();
    ctx.arc(sx, sy + 3, 16, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fill();

    // Stud body
    ctx.beginPath();
    ctx.arc(sx, sy, 16, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 3;
    ctx.stroke();

    // Inner highlight
    ctx.beginPath();
    ctx.arc(sx - 4, sy - 4, 5, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
    ctx.fill();
  });

  // 7. Gold EMV Smart Card Chip (Left)
  const chipX = 64;
  const chipY = 270;
  const chipW = 86;
  const chipH = 68;

  const chipGrad = ctx.createLinearGradient(chipX, chipY, chipX + chipW, chipY + chipH);
  chipGrad.addColorStop(0, "#FBBF24");
  chipGrad.addColorStop(0.5, "#F59E0B");
  chipGrad.addColorStop(1, "#D97706");
  ctx.fillStyle = chipGrad;
  ctx.beginPath();
  ctx.roundRect(chipX, chipY, chipW, chipH, 10);
  ctx.fill();
  ctx.strokeStyle = "#78350F";
  ctx.lineWidth = 3;
  ctx.stroke();

  // Chip contact circuit etchings
  ctx.strokeStyle = "#92400E";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(chipX + chipW / 2, chipY);
  ctx.lineTo(chipX + chipW / 2, chipY + chipH);
  ctx.moveTo(chipX, chipY + chipH / 2);
  ctx.lineTo(chipX + chipW, chipY + chipH / 2);
  ctx.stroke();

  // 8. Holographic Security Foil Seal (Right)
  const holoX = W - 105;
  const holoY = 304;
  const holoGrad = ctx.createRadialGradient(holoX, holoY, 4, holoX, holoY, 36);
  holoGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
  holoGrad.addColorStop(0.3, "rgba(56, 189, 248, 0.85)");
  holoGrad.addColorStop(0.6, "rgba(236, 72, 153, 0.8)");
  holoGrad.addColorStop(1, "rgba(16, 185, 129, 0.75)");
  ctx.fillStyle = holoGrad;
  ctx.beginPath();
  ctx.arc(holoX, holoY, 34, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = "#000000";
  ctx.font = "900 11px monospace";
  ctx.textAlign = "center";
  ctx.fillText("OFFICIAL", holoX, holoY - 4);
  ctx.fillText("FOSTI", holoX, holoY + 9);

  // 9. Member Photo Container
  const photoSize = 360;
  const photoX = (W - photoSize) / 2;
  const photoY = 364;

  ctx.fillStyle = "#1E2028";
  ctx.fillRect(photoX, photoY, photoSize, photoSize);
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 8;
  ctx.strokeRect(photoX, photoY, photoSize, photoSize);

  // Decorative Corner Accents
  ctx.fillStyle = colors.primary;
  ctx.fillRect(photoX - 6, photoY - 6, 26, 26);
  ctx.fillRect(photoX + photoSize - 20, photoY - 6, 26, 26);
  ctx.fillRect(photoX - 6, photoY + photoSize - 20, 26, 26);
  ctx.fillRect(photoX + photoSize - 20, photoY + photoSize - 20, 26, 26);

  // Draw Photo or Tech Placeholder
  if (loadedPhoto) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(photoX, photoY, photoSize, photoSize);
    ctx.clip();
    ctx.drawImage(loadedPhoto, photoX, photoY, photoSize, photoSize);
    ctx.restore();
  } else {
    // Stylized Avatar Placeholder
    const avatarGrad = ctx.createLinearGradient(photoX, photoY, photoX + photoSize, photoY + photoSize);
    avatarGrad.addColorStop(0, "#1F2430");
    avatarGrad.addColorStop(1, "#10121A");
    ctx.fillStyle = avatarGrad;
    ctx.fillRect(photoX, photoY, photoSize, photoSize);

    // Initial letters
    const initials = member.name
      .split(" ")
      .slice(0, 2)
      .map((n) => n[0])
      .join("")
      .toUpperCase();
    ctx.fillStyle = colors.primary;
    ctx.font = "900 96px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(initials, W / 2, photoY + photoSize / 2 + 35);
  }

  // 10. Member Name
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "900 40px sans-serif";
  ctx.textAlign = "center";
  const nameUpper = member.name.toUpperCase();
  if (nameUpper.length > 20) {
    const words = nameUpper.split(" ");
    const mid = Math.ceil(words.length / 2);
    ctx.fillText(words.slice(0, mid).join(" "), W / 2, 785);
    ctx.fillText(words.slice(mid).join(" "), W / 2, 830);
  } else {
    ctx.fillText(nameUpper, W / 2, 805);
  }

  // 11. Division Badge Pill
  const pillW = 540;
  const pillH = 58;
  const pillX = (W - pillW) / 2;
  const pillY = 865;

  ctx.fillStyle = colors.primary;
  ctx.beginPath();
  ctx.roundRect(pillX, pillY, pillW, pillH, 14);
  ctx.fill();
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.fillStyle = colors.textColor;
  ctx.font = "900 24px monospace";
  ctx.fillText(member.division.toUpperCase(), W / 2, pillY + 38);

  // 12. Role / Position
  ctx.fillStyle = "#F8FAFC";
  ctx.font = "bold 25px sans-serif";
  ctx.fillText(member.role, W / 2, 965);

  // 13. Member ID & RFID Serial
  ctx.fillStyle = "#64748B";
  ctx.font = "bold 17px monospace";
  const memberCode = `ID: 2026-FST-${member.id.replace("m-", "").padStart(3, "0")} • RFID: 0x4F53`;
  ctx.fillText(memberCode, W / 2, 1000);

  // 14. Bottom Barcode & Verification Panel
  const barPanelX = 54;
  const barPanelY = 1035;
  const barPanelW = W - 108;
  const barPanelH = 150;

  ctx.fillStyle = "#11131A";
  ctx.fillRect(barPanelX, barPanelY, barPanelW, barPanelH);
  ctx.strokeStyle = "#242833";
  ctx.lineWidth = 3;
  ctx.strokeRect(barPanelX, barPanelY, barPanelW, barPanelH);

  // Barcode Lines
  ctx.fillStyle = "#FFFFFF";
  let curX = barPanelX + 30;
  for (let i = 0; i < 48; i++) {
    const barW = ((i * 11 + 5) % 8) + 3;
    ctx.fillRect(curX, barPanelY + 22, barW, 75);
    curX += barW + 4;
    if (curX > barPanelX + 460) break;
  }

  ctx.fillStyle = "#94A3B8";
  ctx.font = "bold 13px monospace";
  ctx.textAlign = "left";
  ctx.fillText(`SN: ${member.id}-AUTH-2026/27`, barPanelX + 30, barPanelY + 125);

  // Green Slanted Official Stamp
  ctx.save();
  ctx.translate(barPanelX + barPanelW - 120, barPanelY + barPanelH / 2);
  ctx.rotate(-0.1);
  ctx.strokeStyle = "#10B981";
  ctx.lineWidth = 4;
  ctx.strokeRect(-95, -34, 190, 68);
  ctx.fillStyle = "#10B981";
  ctx.font = "900 19px monospace";
  ctx.textAlign = "center";
  ctx.fillText("VERIFIED ID", 0, -4);
  ctx.font = "bold 13px monospace";
  ctx.fillText("FOSTI 2026/2027", 0, 18);
  ctx.restore();

  // 15. Microtext Security Band at bottom
  ctx.fillStyle = "#475569";
  ctx.font = "600 14px monospace";
  ctx.textAlign = "center";
  ctx.fillText("• FORUM OPEN SOURCE TEKNIK INFORMATIKA • EST. 2010 •", W / 2, 1225);

  return canvas;
}

/**
 * Generates the Back Card Texture (UV-mapped to right half of card.glb)
 * Dimensions: 840 x 1270
 */
export function generateFostiBackCanvas(member: Member): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  const W = 840;
  const H = 1270;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  const colors = getDivisionColor(member.division);

  // 1. Dark Brushed Carbon Gradient
  const bgGrad = ctx.createLinearGradient(0, 0, W, H);
  bgGrad.addColorStop(0, "#08090D");
  bgGrad.addColorStop(0.5, "#0E1118");
  bgGrad.addColorStop(1, "#050608");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // 2. Diagonal Repeating Watermark
  ctx.save();
  ctx.rotate(-Math.PI / 6);
  ctx.fillStyle = "rgba(255, 255, 255, 0.018)";
  ctx.font = "900 28px monospace";
  for (let i = -W; i < W * 2; i += 180) {
    for (let j = -H; j < H * 2; j += 70) {
      ctx.fillText("FOSTI UMS • OPEN SOURCE", i, j);
    }
  }
  ctx.restore();

  // 3. Thick Neo-Brutalist Border
  ctx.strokeStyle = colors.primary;
  ctx.lineWidth = 14;
  ctx.strokeRect(16, 16, W - 32, H - 32);

  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 4;
  ctx.strokeRect(24, 24, W - 48, H - 48);

  // 4. Clip Slot Indication (Top)
  ctx.fillStyle = "#050608";
  ctx.beginPath();
  ctx.roundRect(W / 2 - 90, 36, 180, 28, 14);
  ctx.fill();

  // 5. Magnetic Stripe Band
  ctx.fillStyle = "#040404";
  ctx.fillRect(32, 90, W - 64, 110);
  // Magnetic stripe gloss line
  ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
  ctx.fillRect(32, 135, W - 64, 16);

  // 6. Organization Mission / Purpose Box
  const boxX = 54;
  const boxY = 230;
  const boxW = W - 108;
  ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
  ctx.fillRect(boxX, boxY, boxW, 190);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
  ctx.lineWidth = 2;
  ctx.strokeRect(boxX, boxY, boxW, 190);

  ctx.fillStyle = colors.border;
  ctx.font = "900 16px monospace";
  ctx.textAlign = "left";
  ctx.fillText("VISI & TUJUAN ORGANISASI //", boxX + 24, boxY + 36);

  ctx.fillStyle = "#CBD5E1";
  ctx.font = "500 17px sans-serif";
  const missionLines = [
    "Menjadi organisasi mahasiswa yang unggul dalam penguasaan,",
    "pemanfaatan, dan pengembangan teknologi Open Source Software",
    "serta riset teknologi informasi di lingkungan Universitas",
    "Muhammadiyah Surakarta.",
  ];
  missionLines.forEach((line, i) => {
    ctx.fillText(line, boxX + 24, boxY + 74 + i * 28);
  });

  // 7. Security Credentials & Access Table
  const tableY = 450;
  ctx.fillStyle = "#11131A";
  ctx.fillRect(boxX, tableY, boxW, 200);
  ctx.strokeStyle = "#1F232E";
  ctx.lineWidth = 2;
  ctx.strokeRect(boxX, tableY, boxW, 200);

  const metaFields = [
    { label: "ACCESS CLEARANCE", val: "TIER 4 (LABORATORIUM & WORKSPACE)" },
    { label: "SECURITY HASH", val: `SHA-256 [0x${member.id.toUpperCase()}F82...4C1A]` },
    { label: "RFID IDENTIFIER", val: `0x4F535449-UMS-${member.id.toUpperCase()}` },
    { label: "MASA BERLAKU", val: "31 AGUSTUS 2027 // PERIODE 2026-2027" },
  ];

  metaFields.forEach((field, i) => {
    const rowY = tableY + 32 + i * 44;
    ctx.fillStyle = "#64748B";
    ctx.font = "bold 13px monospace";
    ctx.fillText(field.label, boxX + 24, rowY);

    ctx.fillStyle = "#F1F5F9";
    ctx.font = "bold 14px monospace";
    ctx.fillText(field.val, boxX + 210, rowY);
  });

  // 8. QR Code Verification Area
  const qrBoxY = 680;
  const qrBoxH = 240;
  ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
  ctx.fillRect(boxX, qrBoxY, boxW, qrBoxH);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
  ctx.lineWidth = 2;
  ctx.strokeRect(boxX, qrBoxY, boxW, qrBoxH);

  // Stylized High-Tech QR Code Graphic
  const qrX = boxX + 30;
  const qrY = qrBoxY + 30;
  const qrSize = 180;
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(qrX, qrY, qrSize, qrSize);

  // QR Finder Patterns (Top-Left, Top-Right, Bottom-Left)
  const drawFinder = (fx: number, fy: number) => {
    ctx.fillStyle = "#000000";
    ctx.fillRect(fx, fy, 46, 46);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(fx + 7, fy + 7, 32, 32);
    ctx.fillStyle = "#000000";
    ctx.fillRect(fx + 14, fy + 14, 18, 18);
  };
  drawFinder(qrX + 10, qrY + 10);
  drawFinder(qrX + qrSize - 56, qrY + 10);
  drawFinder(qrX + 10, qrY + qrSize - 56);

  // Procedural QR Data Points
  ctx.fillStyle = "#000000";
  for (let qx = qrX + 14; qx < qrX + qrSize - 14; qx += 10) {
    for (let qy = qrY + 14; qy < qrY + qrSize - 14; qy += 10) {
      if (
        (qx < qrX + 66 && qy < qrY + 66) ||
        (qx > qrX + qrSize - 66 && qy < qrY + 66) ||
        (qx < qrX + 66 && qy > qrY + qrSize - 66)
      ) {
        continue;
      }
      if ((qx * 7 + qy * 13) % 17 > 8) {
        ctx.fillRect(qx, qy, 8, 8);
      }
    }
  }

  // QR Side Text
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "900 20px sans-serif";
  ctx.fillText("PINDAI UNTUK VALIDASI", qrX + qrSize + 30, qrY + 38);

  ctx.fillStyle = "#94A3B8";
  ctx.font = "500 15px sans-serif";
  ctx.fillText("Scan QR code untuk melihat profil resmi", qrX + qrSize + 30, qrY + 70);
  ctx.fillText("dan portofolio aktif anggota di", qrX + qrSize + 30, qrY + 95);

  ctx.fillStyle = colors.border;
  ctx.font = "bold 17px monospace";
  ctx.fillText("https://fostiums.org", qrX + qrSize + 30, qrY + 130);

  // 9. Signature & Stamped Authorization
  const sigY = 950;
  ctx.fillStyle = "#94A3B8";
  ctx.font = "bold 14px monospace";
  ctx.textAlign = "center";
  ctx.fillText("TERTANDA RESMI KETUA UMUM FOSTI UMS", W / 2, sigY);

  // Digital signature flourish
  ctx.strokeStyle = colors.primary;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 130, sigY + 45);
  ctx.bezierCurveTo(W / 2 - 70, sigY + 10, W / 2 - 30, sigY + 65, W / 2 + 20, sigY + 30);
  ctx.bezierCurveTo(W / 2 + 50, sigY + 10, W / 2 + 90, sigY + 60, W / 2 + 130, sigY + 40);
  ctx.stroke();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 16px sans-serif";
  ctx.fillText("Farid Ma'ruf Prabowo", W / 2, sigY + 80);

  // 10. Cardholder Rules / Disclaimer
  ctx.fillStyle = "#475569";
  ctx.font = "500 12px sans-serif";
  ctx.fillText("Kartu ini adalah identitas resmi anggota FOSTI UMS. Harap kembalikan ke:", W / 2, 1140);
  ctx.fillText("Sekretariat FOSTI UMS, Gedung FKI UMS Kampus 2 • Email: info@fostiums.org", W / 2, 1162);

  // 11. Microtext Security Band
  ctx.fillStyle = "#334155";
  ctx.font = "600 13px monospace";
  ctx.fillText("• OFFICIAL FOSTI CREDENTIAL CARD • DO NOT DUPLICATE •", W / 2, 1225);

  return canvas;
}

/**
 * Generates the FOSTI Lanyard Ribbon Strap Texture
 * Dimensions: 1024 x 250
 */
export function generateFostiLanyardStrapCanvas(): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  const W = 1024;
  const H = 250;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  // Dark Crimson / Carbon Woven Strap
  const strapGrad = ctx.createLinearGradient(0, 0, W, H);
  strapGrad.addColorStop(0, "#850B13");
  strapGrad.addColorStop(0.5, "#AF101A");
  strapGrad.addColorStop(1, "#850B13");
  ctx.fillStyle = strapGrad;
  ctx.fillRect(0, 0, W, H);

  // Subtle fabric weave texture
  ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
  for (let x = 0; x < W; x += 8) {
    ctx.fillRect(x, 0, 4, H);
  }

  // Top & Bottom Gold Stitched Border Lines
  ctx.strokeStyle = "#FFD700";
  ctx.lineWidth = 8;
  ctx.strokeRect(0, 8, W, H - 16);

  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 4;
  ctx.strokeRect(0, 16, W, H - 32);

  // Repeating crisp text & Lego studs
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "900 52px monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("★ FOSTI UMS ★ OPEN SOURCE ★", W / 2, H / 2);

  // 4 Lego studs on sides
  const drawStrapStuds = (startX: number) => {
    const studColors = ["#AF101A", "#FFD700", "#0055A4", "#00852B"];
    studColors.forEach((col, idx) => {
      ctx.beginPath();
      ctx.arc(startX + idx * 24, H / 2, 8, 0, Math.PI * 2);
      ctx.fillStyle = col;
      ctx.fill();
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  };

  drawStrapStuds(40);
  drawStrapStuds(W - 130);

  return canvas;
}

/**
 * Loads image if URL exists, then creates high-res data URLs for front, back, and lanyard
 */
export async function generateFostiCardTexturesAsync(
  member: Member
): Promise<CardTexturesResult> {
  let photoImg: HTMLImageElement | null = null;

  if (member.photoUrl && typeof window !== "undefined") {
    try {
      photoImg = await new Promise<HTMLImageElement | null>((resolve) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = member.photoUrl;
      });
    } catch {
      photoImg = null;
    }
  }

  const frontCanvas = generateFostiFrontCanvas(member, photoImg);
  const backCanvas = generateFostiBackCanvas(member);
  const lanyardCanvas = generateFostiLanyardStrapCanvas();

  return {
    front: frontCanvas.toDataURL("image/png"),
    back: backCanvas.toDataURL("image/png"),
    lanyard: lanyardCanvas.toDataURL("image/png"),
  };
}
