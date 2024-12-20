import { ProjectContent } from "./project-content";

export const ProjectCard = ({ project }) => {
    return (

        <>
            {project.link ? (
                <a href={project.link} target="_blank" className="flex flex-col rounded overflow-hidden shadow-lg bg-white border border-gray-200 md:hover:scale-105 md:duration-200">
                    <ProjectContent project={project} />
                </a>
            ) : (
                <div className="flex flex-col rounded overflow-hidden shadow-lg bg-white border border-gray-200 opacity-50">
                    <ProjectContent project={project} />
                </div>

            )}
        </>

    )
}