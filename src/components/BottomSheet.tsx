import React from "react";
import { useBottomSheet } from "./useBottomSheet";

function Handle() {
    return (
        <div className="m-auto flex h-8 w-full items-center">
            <div className="m-auto h-2 w-16 rounded bg-gray-700" />
        </div>
    );
}

function BottomSheet({ children }: { children: React.ReactNode }) {
    const { BOTTOM_SHEET_HEIGHT, sheet, content } = useBottomSheet({ minY: 60 });

    return (
        <div
            ref={sheet}
            className="fixed inset-x-0 z-30 rounded-t-2xl bg-white transition-transform"
            style={{ height: `${BOTTOM_SHEET_HEIGHT}px`, top: "calc(100% - 90px)" }}
        >
            <Handle />
            <div ref={content} className="h-full overflow-auto bg-gray-300 p-4">
                {children}
            </div>
        </div>
    );
}

export default BottomSheet;
