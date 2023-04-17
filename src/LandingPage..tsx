import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div className="space-y-4 p-4">
            <div className="card bg-primary text-primary-content flex h-48 items-center justify-center text-2xl font-bold">
                <div>환 영 합 니 다</div>
                <div>아 주 라 이 프</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Link to="/bus" className="card bg-primary text-primary-content h-24 flex items-center justify-center">
                    <div className="text-xs font-bold text-gray-200">ㅅㅕஞ틄뻢✪亼☜ 보ㄹㅓㄱr기</div>
                </Link>

                <div className="card bg-secondary text-primary-content h-24 flex items-center justify-center">
                    <div className="text-xs font-bold text-gray-200">편으ㅣㅅㅣ♙➤설♕</div>
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
    );
}
