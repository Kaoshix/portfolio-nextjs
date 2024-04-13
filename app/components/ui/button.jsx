export const Button = ({ children }) => {
    return (
        <a type="button" href="/cv-olhagaray-sebastien-dev.pdf" download className="text-gray-700 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2 dark:text-grey-600 dark:border-gray-600 dark:hover:bg-gray-200 dark:hover:border-gray-600 dark:focus:ring-gray-700">{children}</a>
    )
}