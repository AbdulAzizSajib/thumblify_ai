import React from "react";
import { thumbnailStyles, type ThumbnailStyle } from "../assets/assets";
import {
  ChevronDown,
  CpuIcon,
  ImageIcon,
  PenToolIcon,
  SparkleIcon,
  Square,
} from "lucide-react";

function StyleSelector({
  value,
  onChange,
  isOpen,
  setIsOpen,
}: {
  value: ThumbnailStyle;
  onChange: (style: ThumbnailStyle) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const styleDescriptions: Record<ThumbnailStyle, string> = {
    "Bold & Graphic": "High contrast, bold typography, striking visuals",
    Minimalist: "Clean lines, simple color schemes, and white space",
    Photorealistic: "Lifelike images with realistic lighting & textures",
    Illustrated: "Hand-drawn or digital artwork with personality",
    "Tech/Futureistic": "Sleek futuristic UI, neon & modern elements",
  };

  const styleIcon: Record<ThumbnailStyle, React.ReactNode> = {
    "Bold & Graphic": <SparkleIcon className="h-4 w-4 text-blue-500" />,
    Minimalist: <Square className="h-4 w-4 text-green-500" />,
    Photorealistic: <ImageIcon className="h-4 w-4 text-yellow-500" />,
    Illustrated: <PenToolIcon className="h-4 w-4 text-pink-500" />,
    "Tech/Futureistic": <CpuIcon className="h-4 w-4 text-purple-500" />,
  };

  return (
    <div className="relative w-full">
      {/* Label */}
      <label className="mb-2 block text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-300">
        Thumbnail Style
      </label>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm transition-all
        hover:border-gray-400 hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-blue-500
        dark:border-gray-600 dark:bg-gray-900 dark:hover:border-gray-500"
      >
        <div className="flex items-start gap-3">
          <div className="mt-1">{styleIcon[value]}</div>
          <div className="text-left">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {value}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {styleDescriptions[value]}
            </p>
          </div>
        </div>

        <ChevronDown
          className={`h-4 w-4 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-900">
          {thumbnailStyles.map((style) => (
            <button
              key={style}
              type="button"
              onClick={() => {
                onChange(style);
                setIsOpen(false);
              }}
              className="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors
              hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <div className="mt-1">{styleIcon[style]}</div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {style}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {styleDescriptions[style]}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default StyleSelector;
