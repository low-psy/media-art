import { useEffect, useState } from 'react';
import Item from './Item';
import ModuleItem from './ModuleItem';
import ErrorItem from './ErrorItem';
let moduleCount = 0;

const Home = () => {
    const [type, setType] = useState({ type: '', count: null });
    const clickHandler = (item) => {
        setType(item);
    };
    const [isModule, setIsModule] = useState(false);
    const [isError, setIsError] = useState(false);
    let w = null;
    let t = null;
    let c = null;

    let title = '다음 콘텐츠들 중 하나를 선택하세요';

    useEffect(() => {
        if (moduleCount === 0) {
            moduleCount++;
            return;
        }
        if (type.count >= 4) {
            setTimeout(() => {
                setIsError(true);
            }, 1000);
            return;
        }
        setIsModule(true);
        setTimeout(() => {
            setIsModule(false);
        }, 4000);
    }, [type.count]);

    if (type.count === 1) {
        w = 'w-1/3';
        t = '1단계';
        c = 'bg-orange-400';
    } else if (type.count === 2) {
        w = 'w-2/3';
        t = '2단계';
        c = 'bg-lime-400 ';
    } else if (type.count === 3) {
        w = 'w-full';
        t = '3단계';
        c = 'bg-indigo-400 ';
        title = '너 이거 좋아하지? 이거 봐';
    } else if (type.count >= 4) {
        title = '내가 보라는걸 보세요';
    }

    return (
        <div className=" mt-8 space-y-4 sm:mx-auto md:w-1/2">
            {isError ? <ErrorItem /> : null}
            {isModule ? (
                <ModuleItem width={w} color={c}>
                    {t}
                </ModuleItem>
            ) : null}
            <div className="bg-red-300 p-8 text-center">
                <h1>{title}</h1>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-4  p-4">
                <Item onTitle={clickHandler} />
            </div>
        </div>
    );
};

export default Home;
