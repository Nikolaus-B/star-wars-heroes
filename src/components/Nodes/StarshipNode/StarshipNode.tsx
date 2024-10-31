import { NodeProps, Node, Position } from "@xyflow/react";
import CustomHandle from "../../../styles/componentsStyles/CustomHandle";

import { StarshipCard } from "../../Cards/StarshipCard/StarshipCard";
import { StarshipNodeType } from "../../../models/NodeTypes";

export type StarshipNodeProps = Node<{
  characterStarshipInFilm?: StarshipNodeType;
}>;

export default function StarshipNode(props: NodeProps<StarshipNodeProps>) {
  return (
    <div>
      <CustomHandle type="target" position={Position.Left} />
      {props.data.characterStarshipInFilm && (
        <StarshipCard starship={props.data.characterStarshipInFilm.starship} />
      )}
    </div>
  );
}
