import { NodeProps, Node, Position } from "@xyflow/react";
import CustomHandle from "../../../styles/componentsStyles/CustomHandle";
import { Starship } from "../../../models/Starship";
import { StarshipCard } from "../../Cards/StarshipCard/StarshipCard";

export type StarshipNodeProps = Node<{
  starship?: Starship;
}>;

export default function StarshipNode(props: NodeProps<StarshipNodeProps>) {
  return (
    <div>
      <CustomHandle type="target" position={Position.Left} />
      {props.data.starship && <StarshipCard starship={props.data.starship} />}
      <CustomHandle type="source" position={Position.Left} />
    </div>
  );
}
