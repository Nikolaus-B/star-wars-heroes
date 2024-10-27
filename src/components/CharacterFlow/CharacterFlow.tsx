import { useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Character } from "../../interfaces/Character";
import { useAppDispatch } from "../../store/store";
import { setSelectedCharacter } from "../../store/character/characterSlice";

interface CharacterFlowProps {
  selectedCharacter: Character;
}

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function CharacterFlow({
  selectedCharacter,
}: CharacterFlowProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const dispatch = useAppDispatch();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const removeSelectedCharacter = () => {
    dispatch(setSelectedCharacter(null));
  };

  return (
    <div className=" relative" style={{ width: "100vw", height: "100vh" }}>
      <button
        className=" absolute top-10 right-20 z-[1000]"
        onClick={removeSelectedCharacter}
      >
        X
      </button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
