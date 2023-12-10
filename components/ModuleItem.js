const ModuleItem = ({ children, className, width, color }) => {
    return (
        <div
            className={`${className} absolute left-0 top-0 z-20  flex h-full w-full items-center justify-center bg-slate-700 opacity-90`}
        >
            <div className="flex h-48 w-96 flex-col rounded-lg bg-slate-50 p-6 opacity-100">
                <h2 className="mx-auto text-xl font-extrabold">사용자 인지 단계</h2>
                <div
                    className={`mb-8 mt-8 ${width} flex grow items-center justify-center rounded-full  ${color} font-bold transition-all duration-500 ease-in-out`}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ModuleItem;
