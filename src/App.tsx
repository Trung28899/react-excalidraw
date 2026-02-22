import { useState, useRef, useEffect } from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import type { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types";
import "@excalidraw/excalidraw/index.css";
import "./App.css";

import { scenes } from "./scenes/scenes";
import { AppHeader } from "@/components/AppHeader";
import { AppToolbar } from "@/components/AppToolbar";

function App() {
  const [excalidrawAPI, setExcalidrawAPI] =
    useState<ExcalidrawImperativeAPI | null>(null);
  const excalidrawWrapperRef = useRef<HTMLDivElement>(null);

  const [viewModeEnabled, setViewModeEnabled] = useState(false);
  const [zenModeEnabled, setZenModeEnabled] = useState(false);
  const [gridModeEnabled, setGridModeEnabled] = useState(false);
  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    const wrapper = excalidrawWrapperRef.current;
    if (!wrapper) return;
    const onResize = () => wrapper.getBoundingClientRect();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!excalidrawAPI) return;
    excalidrawAPI.updateScene(scenes[sceneIndex]);
  }, [sceneIndex, excalidrawAPI]);

  return (
    <div className="flex flex-col h-dvh bg-gray-50">
      <AppHeader />
      <AppToolbar
        sceneIndex={sceneIndex}
        onSceneChange={setSceneIndex}
        viewModeEnabled={viewModeEnabled}
        onViewModeChange={() => setViewModeEnabled(!viewModeEnabled)}
        zenModeEnabled={zenModeEnabled}
        onZenModeChange={() => setZenModeEnabled(!zenModeEnabled)}
        gridModeEnabled={gridModeEnabled}
        onGridModeChange={() => setGridModeEnabled(!gridModeEnabled)}
        onLogScene={() => {
          /*
            This function logs the current scene to the console, which includes:
            
            - elements — the array of all shapes/text currently on the canvas
            - appState — all visual config (theme, zoom, background color, stroke settings, scroll position, etc.)
            - those two are exactly what you'd feed back into excalidrawAPI.updateScene({ elements, appState }) to reproduce the exact same visual state

            For images, excalidraw store the image in browser memory and the element's "fileId" is used to reference it. 
            So to share the scene with others, you would need to upload the image to a server and replace the "fileId" with the URL in the elements array.

            // Get files (images) stored locally, then you have to save it to your server
            const files = excalidrawAPI.getFiles();

            // To restore the scene, you would do something like this:
            excalidrawAPI.updateScene({ elements, appState });
            excalidrawAPI.addFiles(Object.values(files)); // restores image data
          */
          if (!excalidrawAPI) return;
          console.log("elements", excalidrawAPI.getSceneElements());
          console.log("appState", excalidrawAPI.getAppState());
        }}
      />

      {/* Canvas */}
      <div
        ref={excalidrawWrapperRef}
        className="flex-1 relative overflow-hidden"
      >
        <Excalidraw
          excalidrawAPI={(api) => setExcalidrawAPI(api)}
          viewModeEnabled={viewModeEnabled}
          zenModeEnabled={zenModeEnabled}
          gridModeEnabled={gridModeEnabled}
          langCode="en-US"
        />
      </div>
    </div>
  );
}

export default App;
