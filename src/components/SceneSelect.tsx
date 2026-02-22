import { scenes } from "@/scenes/scenes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SceneSelect({
  value,
  onChange,
}: {
  value: number;
  onChange: (index: number) => void;
}) {
  return (
    <Select value={String(value)} onValueChange={(val) => onChange(Number(val))}>
      <SelectTrigger className="w-36 cursor-pointer">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {scenes.map((_, i) => (
          <SelectItem key={i} value={String(i)}>
            Scene {i + 1}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
