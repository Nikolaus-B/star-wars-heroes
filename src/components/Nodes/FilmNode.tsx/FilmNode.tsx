import { NodeProps, Node, Position } from "@xyflow/react";
import CustomHandle from "../../../styles/componentsStyles/CustomHandle";
import { Film } from "../../../models/Film";
import { FilmCard } from "../../Cards/FilmCard/FilmCard";

export type FilmNodeProps = Node<{
  film?: Film;
}>;

export default function FilmNode(props: NodeProps<FilmNodeProps>) {
  return (
    <div>
      <CustomHandle type="target" position={Position.Left} />
      {props.data.film && <FilmCard film={props.data.film} />}
      <CustomHandle type="source" position={Position.Left} />
    </div>
  );
}
