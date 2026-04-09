"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { solutionsMegaRows, type SolutionsMegaCell } from "./solutionsMenuData";

const dropdownTransition = { type: "spring" as const, stiffness: 300, damping: 28 };

function MegaCell({ cell }: { cell: SolutionsMegaCell }) {
  if (cell.type === "empty") {
    return <div className="hidden min-h-[100px] bg-white md:block md:min-h-[110px]" aria-hidden />;
  }

  const accent = Boolean(cell.accent);
  const isEwa = cell.title === "EWA (Earned Wage Access)";
  return (
    <Link
      href={cell.href}
      className={`block min-h-[96px] p-4 transition-colors duration-200 md:min-h-[110px] md:p-5 focus-visible:outline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1D2B83] ${
        accent ? "bg-[#eef6ff] hover:bg-[#e4efff]" : "bg-white hover:bg-slate-50"
      } ${isEwa ? "relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-slate-400/80 before:content-['']" : ""}`}
    >
      <div className="text-sm font-semibold leading-snug text-[#1D2B83] md:text-[0.95rem]">{cell.title}</div>
      <p className="mt-1.5 text-xs leading-relaxed text-slate-600 md:mt-2 md:text-sm">{cell.description}</p>
    </Link>
  );
}

export function SolutionsMegaMenuDesktop({ menuId }: { menuId: string }) {
  return (
    <motion.div
      id={menuId}
      role="region"
      aria-label="Solutions menu"
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={dropdownTransition}
      className="absolute left-0 top-full z-[100] w-[min(64rem,calc(100vw-2rem))] origin-top-left pt-2 md:left-1/2 md:-translate-x-1/2"
    >
      <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-200/80 shadow-lg shadow-slate-900/[0.08] ring-1 ring-slate-950/[0.04]">
        <div className="flex flex-col gap-px">
          {solutionsMegaRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid grid-cols-1 gap-px md:grid-cols-4 ${
                row[0]?.type === "tile" && (row[0].title === "Enterprise Solution" || row[0].title === "EWA (Earned Wage Access)")
                  ? "bg-white"
                  : "bg-slate-200/80"
              } ${
                row[0]?.type === "tile" && row[0].title === "EWA (Earned Wage Access)" ? "-mt-px" : ""
              }`}
            >
              {row.map((cell, colIndex) => (
                <MegaCell key={`${rowIndex}-${colIndex}`} cell={cell} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function SolutionsMegaMenuMobile({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="min-w-0 space-y-2 border-t border-gray-100 px-1 pb-3 pt-2">
      {solutionsMegaRows.map((row, rowIndex) => (
        <div key={rowIndex} className="min-w-0 overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="divide-y divide-gray-100">
            {row
              .filter((c): c is Extract<SolutionsMegaCell, { type: "tile" }> => c.type === "tile")
              .map((cell) => (
                <Link
                  key={cell.title + cell.href}
                  href={cell.href}
                  className={`block min-w-0 px-3 py-2.5 transition-colors hover:bg-[#eef6ff]/60 ${cell.accent ? "bg-[#eef6ff]/40" : ""}`}
                  onClick={() => onNavigate()}
                >
                  <div className="break-words text-sm font-semibold text-[#1D2B83]">{cell.title}</div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
