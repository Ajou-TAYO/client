import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <>
            <div className="absolute inset-x-0 top-0 z-10 p-2">
                <div className="navbar bg-base-100 rounded-box shadow-xl">
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-5 w-5 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1">
                        <a className="text-xl font-bold normal-case">Ajou Life</a>
                    </div>
                    <div className="flex-none" />
                </div>
            </div>
            <div className="mt-20 space-y-4 p-4">
                <div className="card bg-primary text-primary-content flex h-48 items-center justify-center text-2xl font-bold">
                    <div>환 영 합 니 다</div>
                    <div>아 주 라 이 프</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Link
                        to="/bus"
                        className="card bg-primary text-primary-content flex h-24 items-center justify-center"
                    >
                        <div className="text-xs font-bold text-gray-200">셔틀버스</div>
                    </Link>

                    <div className="card bg-secondary text-primary-content flex h-24 items-center justify-center">
                        <div className="text-xs font-bold text-gray-200">편의시설</div>
                    </div>
                </div>
                haksa 1 jung
                <div>
                    <div className="relative grid h-96 grid-cols-7 grid-rows-5 gap-px border border-gray-200 bg-gray-200">
                        {[...new Array(35)].map((_, i) => (
                            <div className="bg-white">{i}</div>
                        ))}

                        <div className="absolute inset-0 grid grid-cols-7 grid-rows-5">
                            <div className="col-start-3 col-end-8 row-start-3 flex items-end p-1">
                                <div className="h-2 w-full bg-red-500" />
                            </div>
                            <div className="col-start-1 col-end-3 row-start-4 flex items-end p-1">
                                <div className="h-2 w-full bg-red-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
