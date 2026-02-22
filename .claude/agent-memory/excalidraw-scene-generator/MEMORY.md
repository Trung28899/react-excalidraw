# Excalidraw Scene Generator Memory

## File Locations
- Scenes file: `src/scenes/scenes.ts`
- SKILL.md does NOT exist at `.claude/skills/excalidraw-diagram-generator/SKILL.md`
- No icon libraries exist under `.claude/skills/excalidraw-diagram-generator/libraries/`

## Key Conventions in scenes.ts
- `LH` constant: `const LH = 1.25 as unknown as number & { _brand: "unitlessLineHeight" };`
- Type: `type UpdateSceneData = Parameters<ExcalidrawImperativeAPI["updateScene"]>[0];`
- Export: `export const scenes: UpdateSceneData[]` array at bottom of file
- All elements use `index: null`

## ID Prefixes Already In Use
- `oDVXy8D6rom3H1-LLH2-f` (defaultScene, random format)
- `fms-` (fileManagementScene)
- `sdp-` (systemDesignPracticeScene)
- `air-` (aiResearcherScene)
- `hyp-` (muscleHypertrophyScene)

## Seed Ranges Already In Use
- `300001-300015` (fileManagementScene)
- `500001-500109` (systemDesignPracticeScene)
- `700001-700110` (aiResearcherScene)
- `900001-900095` (muscleHypertrophyScene)

## Element Patterns That Work
- Rectangle + text label pairs: text positioned inside rect, same width, y offset ~10-18px from rect top
- Arrow labels: separate text element positioned near the arrow midpoint
- Section boundaries: low opacity (20-30) rectangles with dashed or solid stroke
- Color scheme: blue=#1971c2/#d0ebff (frontend/knowledge), red=#e03131/#ffe3e3 (backend), green=#2f9e44/#d3f9d8 (data/workflow), purple=#862e9c/#f3d9fa (AI/external/outputs), orange=#e67700/#fff3bf (tools/storage), teal=#0c8599/#c3fae8 (central/highlight), gray=#868e96/#f8f9fa (neutral)
- Rounded rectangles: use `roundness: { type: 3 }` for rounded corners
- Arrow elements need: points, lastCommittedPoint: null, startBinding/endBinding: null, startArrowhead: null, endArrowhead: "arrow"
- Multi-point arrows work for curved/routed paths (e.g., 3-4 points array)

## Build
- `npm run build` runs `tsc -b && vite build`
- Build succeeds with the branded lineHeight type as long as LH constant is used
