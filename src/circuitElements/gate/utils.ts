import { _circuitElementConnectionPointsActions } from "@/stateEntities/circuitElementConnectionPoints";
import { Gate } from "./Gate";
import { inputTerminalDimensions } from "./dimensions";

export function addInputConnectionPoint(gate: Gate, index: number) {
  const x = inputTerminalDimensions.origin_X;
  const y =
    gate.inputTerminalsOrigin_Y + index * inputTerminalDimensions.terminalGap;
  const globalConnectionPoint = gate.toGlobal({ x, y });
  _circuitElementConnectionPointsActions.dispatch("addInputConnectionPoint", {
    id: gate.id,
    connectionPoint: globalConnectionPoint,
  });
}
