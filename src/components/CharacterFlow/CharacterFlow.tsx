import {
  ReactFlow,
  MiniMap,
  Controls,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Character } from "../../interfaces/Character";
import { appSelector, useAppDispatch } from "../../store/store";
import { setSelectedCharacter } from "../../store/character/characterSlice";
import CharacterNode from "../Nodes/CharacterNode/CharacterNode";
import { useEffect } from "react";
import { selectFilmsList } from "../../store/film/filmSelectors";
// import { selectStarshipList } from "../../store/starship/starshipSelectors";
import { uid } from "uid";
import FilmNode from "../Nodes/FilmNode.tsx/FilmNode";

interface CharacterFlowProps {
  selectedCharacter: Character;
}

export default function CharacterFlow({
  selectedCharacter,
}: CharacterFlowProps) {
  const initialNodes = [
    {
      id: "1",
      position: { x: 200, y: 230 },
      data: { character: selectedCharacter },
      type: "characterCard",
    },
    // { id: "2", position: { x: 0, y: 100 }, data: { film: { title: "nope" } } },
  ];
  const initialEdges = [];
  const films = appSelector(selectFilmsList);
  // const starships = appSelector(selectStarshipList);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const nodeTypes = { characterCard: CharacterNode, filmCard: FilmNode };
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (films) {
      const filmsNodes = films.map((film, index) => {
        const xPosition = window.innerWidth - 200;
        const yPosition = index * 150;
        return {
          id: `${uid()}`,
          data: { film: film },
          type: "filmCard",
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
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
