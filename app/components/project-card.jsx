import Image from "next/image"

export const ProjectCard = ({ project }) => {
    return (
        <div className="rounded overflow-hidden shadow-lg">
            <Image src={project.image} width={2000} height={2000} alt={project.title} className="mx-auto aspect-video" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base">{project.description}</p>
                <a href={project.link} target="_blank">Visit the website</a>
            </div>
            <div className="px-5 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    )
}