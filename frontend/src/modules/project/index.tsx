import { useRef } from "react";
import ReactFlowWrapper from "./components/react-flow-wrapper";
import { ProjectContext } from "./stores/project-context";
import useCreateProjectStore from "./stores/project";
import useInitial from "./hooks/initial";
import { CircularProgress } from "@nextui-org/react";
import TopBar from "./components/top-bar";
import Tasks from "./components/tasks";

const ProjectInside = () => {
  const { isConnected } = useInitial();
  if (!isConnected) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="w-screen h-screen">
      {/* top bar */}
      {/* tasks (datas) */}
      {/* flow */}
      <ReactFlowWrapper>
        <Tasks/>
        <TopBar />
      </ReactFlowWrapper>
    </div>
  );
};
const Project = () => {
  const store = useRef(useCreateProjectStore);
  return (
    <ProjectContext.Provider value={store.current}>
      <ProjectInside />
    </ProjectContext.Provider>
  );
};
export default Project;
