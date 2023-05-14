import HeadTitle from "components/HeadTitle";
import { ProjectHeader, ProjectGallery } from "modules";
import { getPostsByType } from "apis/post";

const Projects = ({postsProject}) => (
  <>
    <HeadTitle title="123" />
    <ProjectHeader />
    <ProjectGallery postsProject={postsProject} />
  </>
);

export const getServerSideProps = async () => {
  const [postsProject] = await Promise.all([
    getPostsByType("project")
  ]);
  return {
    props: {
      postsProject: postsProject.data,
    }
  }
}

export default Projects;
