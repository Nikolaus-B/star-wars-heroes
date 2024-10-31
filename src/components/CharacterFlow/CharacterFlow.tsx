import {
  ReactFlow,
  Controls,
  useNodesState,
  useEdgesState,
  Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { uid } from "uid";

import { CustomNode } from "../../models/NodeTypes";
import { Character } from "../../models/Character";

import { useEffect } from "react";
import { nodeTypes } from "../../constants/nodeData";
import { appSelector, useAppDispatch } from "../../store/store";
import { selectFilmsList } from "../../store/film/filmSelectors";
// import { selectStarshipList } from "../../store/starship/starshipSelectors";
import { setSelectedCharacter } from "../../store/character/characterSlice";

interface CharacterFlowProps {
  selectedCharacter: Character;
}

export default function CharacterFlow({
  selectedCharacter,
}: CharacterFlowProps) {
  const initialNodes: CustomNode[] = [
    {
      id: "1",
      type: "characterCard",
      data: { character: selectedCharacter },
      position: { x: 200, y: 230 },
    },
  ];
  const initialEdges: Edge[] = [];

  const films = appSelector(selectFilmsList);
  // const starships = appSelector(selectStarshipList);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (films) {
      const filmsNodes = films.map((film, index) => {
        const xPosition = window.innerWidth - 200;
        const yPosition = index * 150;
        return {
          id: `${uid()}`,
          type: "filmCard",
          data: { film: film },
          position: { x: xPosition, y: yPosition },
        };
      });
      setNodes((prevNodes) => [...prevNodes, ...filmsNodes]);

      const characterNodeId = "1";
      const newEdges = filmsNodes.map((filmNode) => ({
        id: `e${characterNodeId}-${filmNode.id}`,
        source: characterNodeId,
        target: filmNode.id,
      }));

      setEdges((prevEdges) => [...prevEdges, ...newEdges]);
    }
  }, [films]);

  // const onConnect = useCallback(
  //   (params) => setEdges((eds) => addEdge(params, eds)),
  //   [setEdges]
  // );

  const removeSelectedCharacter = () => {
    dispatch(setSelectedCharacter(null));
  };

  return (
    <div className="relative" style={{ width: "100vw", height: "100vh" }}>
      <button
        className=" absolute top-10 right-20 z-[1000]"
        onClick={removeSelectedCharacter}
      >
        X
      </button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
}
