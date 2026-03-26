"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Upload, Camera, X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DocumentUploaderProps {
  label: string;
  description?: string;
  accept?: string;
  onUpload?: (file: File) => void;
  className?: string;
}

export function DocumentUploader({ label, description, accept = "image/*,.pdf", onUpload, className }: DocumentUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement>(null);

  const handleFile = (f: File) => {
    setFile(f);
    if (f.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target?.result as string);
      reader.readAsDataURL(f);
    }
    onUpload?.(f);
  };

  const clearFile = () => {
    setFile(null);
    setPreview(null);
    if (ref.current) ref.current.value = "";
  };

  return (
    <div className={cn("space-y-2", className)}>
      <label className="text-sm font-medium">{label}</label>
      {description && <p className="text-xs text-muted/60">{description}</p>}

      {!file ? (
        <div
          className="border-2 border-dashed border-white/[0.06] rounded-xl p-8 text-center hover:border-accent/50 transition-colors cursor-pointer"
          onClick={() => ref.current?.click()}
        >
          <Upload className="mx-auto mb-3 text-muted/60" size={32} />
          <p className="text-sm text-muted/60 mb-1">Clique para enviar ou arraste e solte</p>
          <p className="text-xs text-muted/60">PNG, JPG, PDF até 10MB</p>
        </div>
      ) : (
        <div className="border border-white/[0.06] rounded-xl p-4">
          <div className="flex items-center gap-3">
            {preview ? (
              <img src={preview} alt="Preview" className="w-16 h-16 object-cover rounded-lg" />
            ) : (
              <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center">
                <CheckCircle className="text-success" size={24} />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{file.name}</p>
              <p className="text-xs text-muted/60">{(file.size / 1024).toFixed(0)} KB</p>
            </div>
            <button onClick={clearFile} className="text-muted/60 hover:text-danger cursor-pointer">
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      <input
        ref={ref}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
        }}
      />
    </div>
  );
}
