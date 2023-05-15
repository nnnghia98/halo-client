import HeadTitle from "components/HeadTitle";
import { ProjectHeader, ProjectGallery } from "modules";
import { getPostsByType } from "apis/post";
import { getPageDetail } from "apis/page";

const Projects = ({ project, postsProject }) => (
  <>
    <HeadTitle title={project.title} />
    <ProjectHeader title={project.title} description={project.description} />
    <ProjectGallery postsProject={postsProject} />
  </>
);

export const getServerSideProps = async () => {
  const [project, postsProject] = await Promise.all([
    getPageDetail("project"),
    getPostsByType("project"),
  ]);
  return {
    props: {
      project: project.data,
      postsProject: postsProject.data,
    },
  };
};

export default Projects;
