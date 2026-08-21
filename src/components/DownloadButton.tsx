import { Download, Check } from "lucide-react";
import { useState } from "react";

export function DownloadButton({
  text,
  filename = "prompt.md",
  label = "Download",
  downloadedLabel = "Downloaded",
  variant = "default",
}: {
  text: string;
  filename?: string;
  label?: string;
  downloadedLabel?: string;
  variant?: "default" | "gradient";
}) {
  const [downloaded, setDownloaded] = useState(false);

  function handleDownload() {
    const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    setDownloaded(true);
    window.setTimeout(() => setDownloaded(false), 2000);
  }

  const isIconOnly = label === "";

  return (
    <button
      type="button"
      onClick={handleDownload}
      title={isIconOnly ? (downloaded ? downloadedLabel : "Download") : undefined}
      aria-label={isIconOnly ? (downloaded ? downloadedLabel : "Download") : undefined}
      className={
        variant === "gradient"
          ? `inline-flex h-11 items-center justify-center gap-2 rounded-full bg-cta-gradient ${isIconOnly ? "w-11 px-0" : "px-5"} text-[12px] font-black uppercase tracking-[0.12em] text-[#171717] shadow-[0_16px_45px_rgba(219,234,254,0.14)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#262626]`
          : `inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-[#303030] ${isIconOnly ? "w-10 px-0" : "px-4"} text-sm font-semibold text-[#ababab] transition-colors hover:bg-[#3a3a3a] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#262626]`
      }
      aria-live="polite"
    >
      {downloaded ? <Check className="h-4 w-4" aria-hidden="true" /> : <Download className="h-4 w-4" aria-hidden="true" />}
      {!isIconOnly && (downloaded ? downloadedLabel : label)}
    </button>
  );
}
