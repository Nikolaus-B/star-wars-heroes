import {
  ReactFlow,
  Controls,
  useNodesState,
  useEdgesState,
  Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { CustomNode } from "../../models/NodeTypes";
import { Character } from "../../models/Character";

import { useEffect } from "react";
import { nodeTypes } from "../../constants/nodeData";
import { appSelector, useAppDispatch } from "../../store/store";
import { selectFilmNodes } from "../../store/film/filmSelectors";
import { selectStarshipNodes } from "../../store/starship/starshipSelectors";
import { setSelectedCharacter } from "../../store/character/characterSlice";

import { createFilmEdges, createStarshipEdges } from "../../helpers/flowUtils";

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

  const dispatch = useAppDispatch();
  const filmNodes = appSelector(selectFilmNodes);
  const starshipNodes = appSelector(selectStarshipNodes);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    if (filmNodes) {
      const filmEdges = createFilmEdges("1", filmNodes);

      const updatedNodes = [...initialNodes, ...filmNodes];

      if (starshipNodes) {
        const starshipEdges = createStarshipEdges(starshipNodes, filmNodes);
        setEdges([...filmEdges, ...starshipEdges]);
        setNodes([...updatedNodes, ...starshipNodes]);
      } else {
        setEdges(filmEdges);
        setNodes(updatedNodes);
      }
    }
  }, [filmNodes, starshipNodes]);

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
