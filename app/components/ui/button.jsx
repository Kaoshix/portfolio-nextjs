export const Button = ({ children }) => {
    return (
        <button type="button" class="text-gray-700 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:text-grey-600 dark:border-gray-600 dark:hover:bg-gray-200 dark:hover:border-gray-600 dark:focus:ring-gray-700">{children}</button>
    )
}