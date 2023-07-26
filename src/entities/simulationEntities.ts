import { Getter, ParticleEntity } from "promethium-js";
import { ElementId } from "./utils";

type NodeValues = [0, 1, "pullUp", "pullDown", "pending", "error", "floating"];

export const nodeInputs = new ParticleEntity<Record<ElementId, ElementId[]>>({
  "e-4": ["e-4", "e-6"],
});

export const nodeOutputs = new ParticleEntity<
  Record<ElementId, Getter<NodeValues[number]>>
>({
  "e-4": () => "pending",
});
