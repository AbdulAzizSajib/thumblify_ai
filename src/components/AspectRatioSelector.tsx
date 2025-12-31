import { RectangleHorizontal, RectangleVertical, Square } from "lucide-react";
import React from "react";
import { aspectRatios, type AspectRatio } from "../assets/assets";

export default function AspectRatioSelector({
  value,
  onChange,
}: {
  value: AspectRatio;
  onChange: (ratio: AspectRatio) => void;
}) {
  const iconMap = {
    "16:9": <RectangleHorizontal className="size-6" />,
    "1:1": <Square />,
    "9:16": <RectangleVertical />,
  } as Record<AspectRatio, React.ReactNode>;

  return (
    <div className="space-y-3 dark">
      <label className="block text-sm font-medium text-zinc-200">
        Aspect Ratio
      </label>
      <div className="flex flex-wrap gap-2">
        {aspectRatios.map((ratio) => {
          const isSelected = value === ratio;
          return (
            <button
              key={ratio}
              type="button"
              onClick={() => onChange(ratio)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition
                        ${
                          isSelected
                            ? "border-indigo-500 bg-indigo-600/30 text-indigo-300 shadow-lg shadow-indigo-500/20"
                            : "border-white/10 hover:border-white/20 text-zinc-400 hover:text-zinc-200"
                        }`}
            >
              {iconMap[ratio]}
              <span className="text-sm tracking-widest">{ratio}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
