const LayoutTestingReverseRowFlow = () => {
    return (
        <section id="testing-reverse" className="pt-14">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
            <div className="relative w-auto flex flex-col gap-3">
                <div className="bg-red-500 p-2 w-auto">
                    <h1>Reverse Title Container Above</h1>
                </div>
                <div className="flex flex-col lg:flex-row-reverse gap-3">
                    <div className="bg-blue-400 lg:w-9/12 w-auto p-2">Text container</div>
                    <div className="bg-green-700 lg:w-3/12 w-auto p-2">Image container</div>
                </div>
            </div>
        </div>
      </section>
    )
}

export default LayoutTestingReverseRowFlow