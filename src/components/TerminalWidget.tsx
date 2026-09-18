"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Play } from "lucide-react";

interface CommandOutput {
  id: string;
  command: string;
  output: React.ReactNode;
}

export function TerminalWidget() {
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: "init-1",
      command: "npx fosti --version",
      output: (
        <div className="text-zinc-300">
          <span className="text-red-400 font-semibold">fosti-cli v2026.1.0</span> (Surakarta, Indonesia)
          <br />
          Forum Open Source Teknik Informatika Universitas Muhammadiyah Surakarta.
          <br />
          <span className="text-zinc-400">Ketik <span className="text-yellow-400 font-mono">help</span> untuk daftar perintah interaktif.</span>
        </div>
      ),
    },
  ]);

  const [inputVal, setInputVal] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    let resultNode: React.ReactNode = null;

    switch (trimmed) {
      case "help":
      case "--help":
      case "-h":
        resultNode = (
          <div className="space-y-1 text-zinc-300">
            <p className="text-zinc-400 font-semibold mb-1">Perintah yang tersedia:</p>
            <p><span className="text-yellow-400 font-mono">about</span> : Profil singkat & visi FOSTI UMS</p>
            <p><span className="text-yellow-400 font-mono">divisi</span> : Struktur 4 divisi kerja utama</p>
            <p><span className="text-yellow-400 font-mono">achievements</span> : Rekam jejak medali internasional</p>
            <p><span className="text-yellow-400 font-mono">join</span> : Info pendaftaran Open Recruitment</p>
            <p><span className="text-yellow-400 font-mono">whoami</span> : Info sesi pengguna</p>
            <p><span className="text-yellow-400 font-mono">clear</span> : Bersihkan layar terminal</p>
          </div>
        );
        break;

      case "about":
        resultNode = (
          <div className="text-zinc-300 space-y-1.5">
            <p className="text-red-400 font-semibold">FOSTI UMS (Forum Open Source Teknik Informatika)</p>
            <p className="text-zinc-400">
              Organisasi kemahasiswaan independen non-profit berbasis di FKI UMS yang berfokus pada riset sains & teknologi, pengembangan software open source, dan pemberdayaan talenta programmer muda.
            </p>
            <p className="text-xs text-zinc-400">Base: Kampus 2 UMS, Pabelan, Surakarta</p>
          </div>
        );
        break;

      case "divisi":
      case "--divisi":
        resultNode = (
          <div className="text-zinc-300 space-y-1">
            <p className="text-zinc-400 font-semibold">4 Divisi Aktif FOSTI UMS:</p>
            <p><span className="text-red-400 font-mono font-bold">1. BPHI</span> : Badan Pengurus Harian Inti (Leadership & Finance)</p>
            <p><span className="text-blue-400 font-mono font-bold">2. RISTEK</span> : Riset & Teknologi (FOSCLASS, OST, Sandbox)</p>
            <p><span className="text-emerald-400 font-mono font-bold">3. KEOR</span> : Keorganisasian (Training of Trainers, Makrab)</p>
            <p><span className="text-amber-400 font-mono font-bold">4. HUBPUB</span> : Hubungan Publik (Branding & Media Partner)</p>
          </div>
        );
        break;

      case "achievements":
      case "--achievements":
      case "awards":
        resultNode = (
          <div className="text-zinc-300 space-y-1">
            <p className="text-yellow-400 font-semibold">🏆 Capaian Internasional Terkini:</p>
            <p>• <span className="text-zinc-100 font-bold">Silver Medal GYIIF 2026</span> - Tim Brainlyt UMS</p>
            <p>• <span className="text-zinc-100 font-bold">Silver Medal IPITEX Thailand 2026</span> - Tim QryptoPay UMS</p>
            <p>• <span className="text-zinc-100 font-bold">Global Top 100</span> - Google Solutions Challenge</p>
            <p>• <span className="text-zinc-100 font-bold">Gold Medal</span> - Kaohsiung International Invention Expo</p>
            <p>• <span className="text-zinc-100 font-bold">5 Medali IID 2025</span> - Indonesia Inventors Day</p>
          </div>
        );
        break;

      case "join":
      case "oprec":
      case "--join":
        resultNode = (
          <div className="text-zinc-300 space-y-1">
            <p className="text-emerald-400 font-semibold">🚀 Open Recruitment FOSTI UMS:</p>
            <p className="text-zinc-400">Pendaftaran dibuka untuk seluruh mahasiswa yang bersemangat dalam riset teknologi open-source!</p>
            <p className="pt-1">
              <a
                href="https://oprec.fostiums.org/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-red-400 underline hover:text-red-300 font-mono text-xs"
              >
                Kunjungi: https://oprec.fostiums.org/ →
              </a>
            </p>
          </div>
        );
        break;

      case "whoami":
        resultNode = (
          <p className="text-zinc-300">
            <span className="text-emerald-400 font-mono">guest_developer</span> @ fosti-interactive-shell (Session: Active)
          </p>
        );
        break;

      case "sudo":
        resultNode = (
          <p className="text-amber-400">
            Nice try! You already have visitor super-powers to explore everything here ✨
          </p>
        );
        break;

      default:
        resultNode = (
          <p className="text-red-400 text-xs font-mono">
            Perintah tidak dikenali: &quot;{trimmed}&quot;. Ketik <span className="text-yellow-400 font-bold">help</span> untuk panduan.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: cmdStr,
        output: resultNode,
      },
    ]);
    setInputVal("");
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const quickCommands = [
    { label: "help", cmd: "help" },
    { label: "divisi", cmd: "divisi" },
    { label: "achievements", cmd: "achievements" },
    { label: "join", cmd: "join" },
    { label: "clear", cmd: "clear" },
  ];

  return (
    <div className="w-full rounded-2xl border-2 border-black bg-zinc-950 shadow-[6px_6px_0px_0px_#000] overflow-hidden font-mono dark:border-zinc-700 dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)]">
      {/* Terminal Titlebar with Lego Studs */}
      <div className="flex items-center justify-between border-b-2 border-black bg-zinc-900 px-4 py-3 dark:border-zinc-700">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#AF101A] border border-black inline-block" />
          <span className="h-3 w-3 rounded-full bg-[#FFD700] border border-black inline-block" />
          <span className="h-3 w-3 rounded-full bg-[#00852B] border border-black inline-block" />
          <span className="ml-2 text-xs font-bold text-zinc-300 flex items-center gap-1.5">
            <TerminalIcon className="h-3.5 w-3.5 text-amber-400" />
            <span>fosti-shell // bash</span>
          </span>
        </div>
        <span className="text-[11px] font-bold text-zinc-500 hidden sm:inline">node v24 · Next.js 16</span>
      </div>

      {/* Terminal Body */}
      <div
        onClick={() => inputRef.current?.focus()}
        className="h-72 overflow-y-auto p-4 text-xs sm:text-sm text-zinc-200 space-y-3 cursor-text selection:bg-red-500/40"
      >
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-1.5 text-zinc-400">
              <span className="text-emerald-400 font-bold">visitor@fosti</span>
              <span className="text-zinc-600">:</span>
              <span className="text-blue-400 font-bold">~</span>
              <span className="text-zinc-500">$</span>
              <span className="text-zinc-100 font-semibold">{item.command}</span>
            </div>
            <div className="pl-4 text-xs sm:text-[13px] leading-relaxed border-l border-zinc-800/80">
              {item.output}
            </div>
          </div>
        ))}

        {/* Active Input Line */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(inputVal);
          }}
          className="flex items-center gap-1.5 text-zinc-400 pt-1"
        >
          <span className="text-emerald-400 font-bold">visitor@fosti</span>
          <span className="text-zinc-600">:</span>
          <span className="text-blue-400 font-bold">~</span>
          <span className="text-zinc-500">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="ketik perintah (misal: help, divisi, join)..."
            className="flex-1 bg-transparent text-zinc-100 focus:outline-none placeholder:text-zinc-600 font-mono text-xs sm:text-sm"
          />
          <button
            type="submit"
            aria-label="Jalankan perintah"
            className="text-zinc-500 hover:text-zinc-200 transition-colors p-1"
          >
            <CornerDownLeft className="h-3.5 w-3.5" />
          </button>
        </form>
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Action Chips Footer */}
      <div className="border-t border-zinc-800/80 bg-zinc-900/60 px-4 py-2 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
          <Sparkles className="h-3 w-3 text-red-400" />
          <span>Quick run:</span>
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {quickCommands.map((q) => (
            <button
              key={q.label}
              type="button"
              onClick={() => handleCommand(q.cmd)}
              className="rounded border border-zinc-700/80 bg-zinc-800/60 px-2 py-0.5 text-[11px] text-zinc-300 transition-colors hover:border-red-500/60 hover:bg-zinc-700 hover:text-white"
            >
              {q.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
