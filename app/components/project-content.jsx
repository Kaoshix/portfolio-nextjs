import Image from "next/image"

export const ProjectContent = ({ project }) => {
    const { image, title, description, tags } = project;

    return (
        <>
            {project && (
                <>
                    <Image src={image} width={1000} height={1000} alt={title} className="aspect-video object-cover" />
                    <div className="px-6 py-4 grow">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-700 text-base">{description}</p>
                    </div>
                    <div className="px-5 pt-4 pb-2 flex flex-wrap gap-2">
                        {tags?.map((tag, index) => (
                            <div className="flex items-center gap-1 bg-gray-200 px-2.5 py-1 rounded w-fit" key={index}>
                                <Image src={`/assets/icons/${tag.toLowerCase()}-icon.webp`} width={20} height={20} alt={tag} />
                                <span className="inline-block rounded-full text-sm font-semibold text-gray-700">{tag}</span>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    )
}