# Description:

- React.js app configured with agent to help draw system designs, processes, etc. on excalidraw

# Note

## Common Prompt

```
use excalidraw-diagram-generator agent for this task:
```

## Agent:

- excalidraw-diagram-generator

## Skill Used For the Agent:

- https://skills.sh/github/awesome-copilot/excalidraw-diagram-generator
  The skill is configured within the agent, not codebase scoped

## How to get the current visual configuration

- With the visual configurations, you can save the visuals in a DB to render your edited version of the pre-configured scene
- Check the onLogScene function on App.tsx to see how this works
  - elements — the array of all shapes/text currently on the canvas
  - appState — all visual config (theme, zoom, background color, stroke settings, scroll position, etc.)
  - those two are exactly what you'd feed back into excalidrawAPI.updateScene({ elements, appState }) to reproduce the exact same visual state

https://github.com/user-attachments/assets/27d8674c-042c-4711-931c-1e7e6fb8dd0c

