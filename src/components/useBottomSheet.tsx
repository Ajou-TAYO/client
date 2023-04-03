import { useEffect, useMemo, useRef } from "react";

export const MIN_Y = 60; // 바텀시트가 최대로 높이 올라갔을 때의 y 값
export const MAX_Y = window.innerHeight - 80; // 바텀시트가 최소로 내려갔을 때의 y 값

interface BottomSheetMetrics {
    touchStart: {
        sheetY: number;
        touchY: number;
    };
    touchMove: {
        prevTouchY?: number;
        movingDirection: "none" | "down" | "up";
    };
    isContentAreaTouched: boolean;
}
export function useBottomSheet({ minY }: { minY: number }) {
    const sheet = useRef<HTMLDivElement>(null);
    const content = useRef<HTMLDivElement>(null);

    const metrics = useRef<BottomSheetMetrics>({
        touchStart: {
            sheetY: 0,
            touchY: 0,
        },
        touchMove: {
            prevTouchY: 0,
            movingDirection: "none",
        },
        isContentAreaTouched: false,
    });

    // 시트 길이
    const BOTTOM_SHEET_HEIGHT = useMemo(() => {
        return window.innerHeight - minY;
    }, [minY]);

    useEffect(() => {
        const canUserMoveBottomSheet = () => {
            const { touchMove, isContentAreaTouched } = metrics.current;

            if (!isContentAreaTouched) {
                return true;
            }

            if (sheet.current!.getBoundingClientRect().y !== minY) {
                return true;
            }

            if (touchMove.movingDirection === "down") {
                return content.current!.scrollTop <= 0;
            }
            return false;
        };

        // 드래깅 시작
        const handleTouchStart = (e: TouchEvent | MouseEvent) => {
            const event = e?.touches != null ? e?.touches[0] : e;

            const { touchStart } = metrics.current;
            touchStart.sheetY = sheet.current!.getBoundingClientRect().y;
            touchStart.touchY = event.clientY;
        };

        // 드래깅 중
        const handleTouchMove = (e: TouchEvent | MouseEvent) => {
            const { touchStart, touchMove } = metrics.current;
            const event = e?.touches != null ? e?.touches[0] : e;

            if (touchMove.prevTouchY === undefined) {
                touchMove.prevTouchY = touchStart.touchY;
            }

            if (touchMove.prevTouchY === 0) {
                // 맨 처음 앱 시작하고 시작시
                touchMove.prevTouchY = touchStart.touchY;
            }

            if (touchMove.prevTouchY < event.clientY) {
                touchMove.movingDirection = "down";
            }

            if (touchMove.prevTouchY > event.clientY) {
                touchMove.movingDirection = "up";
            }

            if (canUserMoveBottomSheet()) {
                e.preventDefault();

                const touchOffset = event.clientY - touchStart.touchY;
                let nextSheetY = touchStart.sheetY + touchOffset;

                if (nextSheetY <= minY) {
                    nextSheetY = minY;
                }

                if (nextSheetY >= MAX_Y) {
                    nextSheetY = MAX_Y;
                }

                sheet.current!.style.setProperty("transform", `translateY(${nextSheetY - MAX_Y}px)`); // 바닥 만큼은 빼야쥬...
            } else {
                document.body.style.overflowY = "hidden";
            }
        };

        // 드래깅 종료
        const handleTouchEnd = (e: TouchEvent | MouseEvent) => {
            document.body.style.overflowY = "auto";
            const { touchMove } = metrics.current;

            // Snap Animation
            const currentSheetY = sheet.current!.getBoundingClientRect().y;

            if (currentSheetY !== minY) {
                if (touchMove.movingDirection === "down") {
                    sheet.current!.style.setProperty("transform", "translateY(0)");
                }

                if (touchMove.movingDirection === "up") {
                    sheet.current!.style.setProperty("transform", `translateY(${minY - MAX_Y}px)`);
                }
            }

            // metrics 초기화.
            metrics.current = {
                touchStart: {
                    sheetY: 0,
                    touchY: 0,
                },
                touchMove: {
                    prevTouchY: 0,
                    movingDirection: "none",
                },
                isContentAreaTouched: false,
            };
        };

        sheet.current!.addEventListener("touchstart", handleTouchStart);
        sheet.current!.addEventListener("touchmove", handleTouchMove);
        sheet.current!.addEventListener("touchend", handleTouchEnd);

        sheet.current!.addEventListener("mousedown", handleTouchStart);
        sheet.current!.addEventListener("mousemove", handleTouchMove);
        sheet.current!.addEventListener("mouseup", handleTouchEnd);

        return () => {
            sheet.current!.removeEventListener("touchstart", handleTouchStart);
            sheet.current!.removeEventListener("touchmove", handleTouchMove);
            sheet.current!.removeEventListener("touchend", handleTouchEnd);

            sheet.current!.removeEventListener("mousedown", handleTouchStart);
            sheet.current!.removeEventListener("mousemove", handleTouchMove);
            sheet.current!.removeEventListener("mouseup", handleTouchEnd);
        };
    }, []);

    useEffect(() => {
        const handleTouchStart = () => {
            metrics.current!.isContentAreaTouched = true;
        };
        content.current!.addEventListener("touchstart", handleTouchStart);
        content.current!.addEventListener("mousedown", handleTouchStart);

        return () => {
            content.current!.removeEventListener("touchstart", handleTouchStart);
            content.current!.removeEventListener("mousedown", handleTouchStart);
        };
    }, []);

    return { BOTTOM_SHEET_HEIGHT, sheet, content };
}
