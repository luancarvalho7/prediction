"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DollarSign, Plus, RotateCcw } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function DemoFundingPage() {
  const [balance, setBalance] = useState(100_000);

  const addFunds = () => setBalance((prev) => prev + 10_000);
  const resetBalance = () => setBalance(100_000);

  return (
    <div className="max-w-[800px] mx-auto px-4 py-8 space-y-8">
      <h1 className="text-2xl font-semibold">Demo Funding</h1>

      {/* Virtual Balance */}
      <section className="bg-card/40 border border-white/[0.06] rounded-2xl p-8 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
          <DollarSign size={28} className="text-accent" />
        </div>
        <div>
          <p className="text-sm text-muted/60">Virtual Balance</p>
          <p className="text-3xl font-semibold mt-1">{formatCurrency(balance)}</p>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <Button onClick={addFunds} className="flex items-center gap-2">
            <Plus size={14} />
            Add $10,000
          </Button>
          <Button variant="outline" onClick={resetBalance} className="flex items-center gap-2">
            <RotateCcw size={14} />
            Reset Balance
          </Button>
        </div>

        <p className="text-xs text-muted/60 pt-2">
          Virtual funds are for practice only. They have no real monetary value.
        </p>
      </section>
    </div>
  );
}
