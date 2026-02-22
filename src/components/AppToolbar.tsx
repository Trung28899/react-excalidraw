import { SceneSelect } from "@/components/SceneSelect";

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={onChange}
        />
        <div className="w-9 h-5 bg-gray-200 peer-checked:bg-indigo-500 rounded-full transition-colors duration-200" />
        <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 peer-checked:translate-x-4" />
      </div>
      <span className="text-sm text-gray-600 font-medium">{label}</span>
    </label>
  );
}

export function AppToolbar({
  sceneIndex,
  onSceneChange,
  viewModeEnabled,
  onViewModeChange,
  zenModeEnabled,
  onZenModeChange,
  gridModeEnabled,
  onGridModeChange,
  onLogScene,
}: {
  sceneIndex: number;
  onSceneChange: (index: number) => void;
  viewModeEnabled: boolean;
  onViewModeChange: () => void;
  zenModeEnabled: boolean;
  onZenModeChange: () => void;
  gridModeEnabled: boolean;
  onGridModeChange: () => void;
  onLogScene: () => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 bg-white border-b border-gray-200 shrink-0">
      {/* Scene controls */}
      <div className="flex items-center gap-2">
        <SceneSelect value={sceneIndex} onChange={onSceneChange} />
        <button
          onClick={() => onSceneChange(0)}
          className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-700 text-sm font-medium rounded-lg border border-gray-300 transition-colors duration-150 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 text-gray-500"
          >
            <path
              fillRule="evenodd"
              d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
              clipRule="evenodd"
            />
          </svg>
          <span className="hidden sm:inline">Reset Scene</span>
        </button>
        <button
          onClick={onLogScene}
          className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-700 text-sm font-medium rounded-lg border border-gray-300 transition-colors duration-150 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 text-gray-500"
          >
            <path
              fillRule="evenodd"
              d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
              clipRule="evenodd"
            />
            <path d="M3 16.75a.75.75 0 01.75-.75h12.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" />
          </svg>
          <span className="hidden sm:inline">Log Scene</span>
        </button>
      </div>

      <div className="hidden sm:block h-5 w-px bg-gray-200" />

      {/* Mode toggles */}
      <div className="flex items-center gap-3 sm:gap-4">
        <Toggle checked={viewModeEnabled} onChange={onViewModeChange} label="View" />
        <Toggle checked={zenModeEnabled} onChange={onZenModeChange} label="Zen" />
        <Toggle checked={gridModeEnabled} onChange={onGridModeChange} label="Grid" />
      </div>
    </div>
  );
}
