import { ProjectContent } from "./project-content";

export const ProjectCard = ({ project }) => {
    return (

        <>
            {project.platform === 'web' ? (
                <a href={project.link} target="_blank" className="block rounded overflow-hidden shadow-lg bg-white border border-gray-200 md:hover:scale-105 md:duration-200">
                    <ProjectContent project={project} />
                </a>
            ) : (
                <div className="block rounded overflow-hidden shadow-lg bg-white border border-gray-200">
                    <ProjectContent project={project} />
                </div>

            )}
        </>

    )
}