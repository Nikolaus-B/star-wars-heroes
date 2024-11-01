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
import { selectFilmsList } from "../../store/film/filmSelectors";
import { selectCharacterStarshipList } from "../../store/starship/starshipSelectors";
import { setSelectedCharacter } from "../../store/character/characterSlice";

import {
  createFilmEdges,
  createFilmNodes,
  createStarshipEdges,
  createStarshipNodes,
} from "../../helpers/flowUtils";
import { selectIsLoading } from "../../store/service/serviceSelectors";

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
  const films = appSelector(selectFilmsList);
  const characterStarshipsInFilms = appSelector(selectCharacterStarshipList);
  const isLoading = appSelector(selectIsLoading);

  const filmNodes = createFilmNodes(films);
  const starshipNodes = createStarshipNodes(characterStarshipsInFilms);

  const filmEdges = createFilmEdges("1", filmNodes);
  const srarshipEdges = createStarshipEdges(starshipNodes, filmNodes);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // const [isInitializedFlow, setIsInitializedFlow] = useState<boolean>(false);

  useEffect(() => {
    // if (isLoading && !isInitializedFlow) {
    setNodes((prevNodes) => [...prevNodes, ...filmNodes, ...starshipNodes]);
    setEdges((prevEdges) => [...prevEdges, ...filmEdges, ...srarshipEdges]);

    //   setIsInitializedFlow(true);
    // }
  }, [films, characterStarshipsInFilms, isLoading]);

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
