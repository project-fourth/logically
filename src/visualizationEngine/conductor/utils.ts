import {
  ConductorConnectionPoints,
  ConductorPreviewCoordinates,
} from "@/entities/visualizationEntities";
import { ConductorOrientation } from "./Conductor";

export function directionHasRestarted(
  coordinates: ConductorPreviewCoordinates,
  direction: "x" | "y"
) {
  let hasRestarted = false;
  if (coordinates.current![direction] >= coordinates.previous![direction]) {
    hasRestarted =
      coordinates.current![direction] >= coordinates.starting![direction] &&
      coordinates.previous![direction] <= coordinates.starting![direction];
  } else {
    hasRestarted =
      coordinates.current![direction] <= coordinates.starting![direction] &&
      coordinates.previous![direction] >= coordinates.starting![direction];
  }

  return hasRestarted;
}

export function conductorSizeIsValid(
  connectionPoints: ConductorConnectionPoints
) {
  return (
    connectionPoints[1].x - connectionPoints[0].x !== 0 ||
    connectionPoints[1].y - connectionPoints[0].y !== 0
  );
}

export function getConductorOrientationFromConnectionPoints(
  connectionPoints: ConductorConnectionPoints
) {
  return (
    connectionPoints[1].x - connectionPoints[0].x !== 0 ? "h" : "v"
  ) as ConductorOrientation;
}

export function getConductorLengthFromConnectionPoints(
  connectionPoints: ConductorConnectionPoints
) {
  const orientation =
    getConductorOrientationFromConnectionPoints(connectionPoints);
  const length =
    orientation === "h"
      ? Math.abs(connectionPoints[1].x - connectionPoints[0].x)
      : Math.abs(connectionPoints[1].y - connectionPoints[0].y);

  return length;
}

export function getConductorDirectionFromConnectionPoints(
  connectionPoints: ConductorConnectionPoints
) {
  const orientation =
    getConductorOrientationFromConnectionPoints(connectionPoints);
  const direction =
    orientation === "h"
      ? Math.sign(connectionPoints[1].x - connectionPoints[0].x)
      : Math.sign(connectionPoints[1].y - connectionPoints[0].y);

  return direction;
}
