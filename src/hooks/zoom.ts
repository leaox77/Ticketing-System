import { useEffect, useRef } from 'react';

const useZoom = () => {
    const zoomRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const container = zoomRef.current?.closest('.zoom-container');
        if (container) {
            const img = container.querySelector('img');
            if (img) {
                img.style.transition = 'transform 0.3s ease'; // Add transition for smooth zoom
            }
            container.addEventListener('mousemove', (e: Event) => {
                const mouseEvent = e as MouseEvent;
                const rect = container.getBoundingClientRect();
                const x = mouseEvent.clientX - rect.left;
                const y = mouseEvent.clientY - rect.top;
                if (img) {
                    img.style.transformOrigin = `${x}px ${y}px`;
                    img.style.transform = 'scale(1.8)'; // Add zoom effect
                }
            });

            container.addEventListener('mouseleave', () => {
                if (img) {
                    img.style.transform = 'scale(1)'; // Reset zoom effect
                }
            });
        }
    }, []);

    return { zoomRef };
};

export default useZoom;
