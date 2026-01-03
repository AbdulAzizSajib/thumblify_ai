import { colorSchemes } from "../assets/assets";

function ColorSchemeSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-zinc-200">
        Color Scheme
      </label>
      <div className="grid grid-cols-6 gap-3">
        {colorSchemes.map((scheme) => (
          <button
            title={scheme.name}
            key={scheme.id}
            onClick={() => onChange(scheme.id)}
            className={`h-12 w-12 rounded-lg border-2 focus:outline-none ${
              value === scheme.id
                ? "border-blue-500"
                : "border-transparent hover:border-gray-400"
            }`}
          >
            <div className="flex h-10 rounded-lg overflow-hidden">
              {scheme.colors.map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className="flex-1"
                ></div>
              ))}
            </div>
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-300">
        Selected Color Scheme: {colorSchemes.find((s) => s.id === value)?.name}
      </p>
    </div>
  );
}

export default ColorSchemeSelector;
