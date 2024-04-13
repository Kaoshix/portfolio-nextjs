export const ArrowHomeButton = () => {
    return (
        <a href="#project-section">
            <div className="absolute bottom-5 md:bottom-8 left-1/2 transform -translate-x-1/2 rotate-90">
                <div className="animate-[propel_5s_infinite_both] opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="h-10 w-10">
                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                    </svg>
                </div>
            </div>
        </a>
    )
}