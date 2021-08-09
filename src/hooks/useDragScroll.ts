import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

function useDragScroll({
  ref,
  ctrlEnabled = false,
  velocity = 3,
}: {
  ref: RefObject<HTMLDivElement>;
  ctrlEnabled?: boolean;
  velocity?: number;
}) {
  const pxToScrollRef = useRef<number>(velocity);

  const [ctrlPressed, setCtrlPressed] = useState<boolean>(false);

  const isDownRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const startYRef = useRef<number>(0);
  const scrollTopRef = useRef<number>(0);
  const scrollLeftRef = useRef<number>(0);

  const onMouseDown = useCallback(
    (e: globalThis.MouseEvent) => {
      if (ref.current) {
        ref.current.style.cursor = 'grabbing';
        isDownRef.current = true;
        startXRef.current = e.pageX - ref.current.offsetLeft;
        startYRef.current = e.pageY - ref.current.offsetTop;
        scrollLeftRef.current = ref.current.scrollLeft;
        scrollTopRef.current = ref.current.scrollTop;
      }
    },
    [ref],
  );

  const onMouseLeave = useCallback(() => {
    isDownRef.current = false;
    if (ref.current) {
      ref.current.style.cursor = 'grab';
    }
  }, [ref]);

  const onMouseUp = useCallback(() => {
    isDownRef.current = false;
    if (ref.current) {
      ref.current.style.cursor = 'grab';
    }
  }, [ref]);

  const onMouseMove = useCallback(
    (e: globalThis.MouseEvent) => {
      if (isDownRef.current) {
        if (ref.current) {
          const x = e.pageX - ref.current.offsetLeft;
          const y = e.pageY - ref.current.offsetTop;
          const walkX = (x - startXRef.current) * pxToScrollRef.current;
          const walkY = (y - startYRef.current) * pxToScrollRef.current;

          ref.current.scrollLeft = scrollLeftRef.current - walkX;
          ref.current.scrollTop = scrollTopRef.current - walkY;
        }
      }

      e.preventDefault();
    },
    [ref],
  );

  const addEvents = useCallback(() => {
    if (ref.current) {
      ref.current.style.cursor = 'grab';

      ref.current.addEventListener('mousedown', onMouseDown);
      ref.current.addEventListener('mouseleave', onMouseLeave);
      ref.current.addEventListener('mouseup', onMouseUp);
      ref.current.addEventListener('mousemove', onMouseMove);
    }
  }, [onMouseDown, onMouseLeave, onMouseMove, onMouseUp, ref]);

  const removeEvents = useCallback(() => {
    if (ref.current) {
      ref.current.style.cursor = 'initial';

      ref.current.removeEventListener('mousedown', onMouseDown);
      ref.current.removeEventListener('mouseleave', onMouseLeave);
      ref.current.removeEventListener('mouseup', onMouseUp);
      ref.current.removeEventListener('mousemove', onMouseMove);
    }
  }, [onMouseDown, onMouseLeave, onMouseMove, onMouseUp, ref]);

  useEffect(() => {
    if (ctrlEnabled) {
      window.onkeydown = () => setCtrlPressed(true);
      window.onkeyup = () => setCtrlPressed(false);
    }
  }, [ctrlEnabled]);

  useEffect(() => {
    if (ref.current) {
      if (ctrlEnabled) {
        if (ctrlPressed) addEvents();
        else removeEvents();
      } else {
        addEvents();
      }
    }
  }, [addEvents, ctrlPressed, ctrlEnabled, ref, removeEvents]);
}

export { useDragScroll };
