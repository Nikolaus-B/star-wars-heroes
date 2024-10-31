import { NodeProps, Node, Position } from "@xyflow/react";
import { Character } from "../../../models/Character";
import { CharacterCard } from "../../Cards/CharacterCard/CharacterCard";
import CustomHandle from "../../../styles/componentsStyles/CustomHandle";

export type CharacterNodeProps = Node<{
  character?: Character;
}>;

export default function CharacterNode(props: NodeProps<CharacterNodeProps>) {
  return (
    <div>
      {props.data.character && (
        <CharacterCard characterInfo={props.data.character} />
      )}
      <CustomHandle type="source" position={Position.Right} />
    </div>
  );
}
