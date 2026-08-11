"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";

import { cn } from "@/lib/utils";

/**
 * Aceternity UI's 3D Card Effect, reproduced against its documented prop
 * surface: `CardContainer` / `CardBody` / `CardItem`, the latter taking
 * `translateX/Y/Z` and `rotateX/Y/Z`. Style is mutated on the DOM node
 * directly rather than through React state on every pointer-move — the same
 * choice the original makes, because re-rendering a component tree on every
 * mousemove frame is what makes a tilt effect feel laggy.
 */
const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export function CardContainer({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  function onMouseMove(e: ReactMouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 22;
    const y = (e.clientY - rect.top - rect.height / 2) / 22;
    el.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  }

  function onMouseLeave() {
    if (ref.current) ref.current.style.transform = "rotateY(0deg) rotateX(0deg)";
    setHovered(false);
  }

  return (
    <MouseEnterContext.Provider value={[hovered, setHovered]}>
      <div className={cn("flex items-center justify-center", containerClassName)} style={{ perspective: "1000px" }}>
        <div
          ref={ref}
          onMouseEnter={() => setHovered(true)}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className={cn("relative transition-transform duration-200 ease-linear", className)}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
}

export function CardBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)} style={{ transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
}

export function CardItem<C extends React.ElementType = "div">({
  as,
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...props
}: {
  as?: C;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
} & Omit<React.ComponentPropsWithoutRef<C>, "as" | "className" | "children">) {
  const Tag = (as || "div") as React.ElementType;
  const ref = useRef<HTMLElement>(null);
  const ctx = useContext(MouseEnterContext);
  const hovered = ctx?.[0] ?? false;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = hovered
      ? `translate3d(${translateX}px,${translateY}px,${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
      : "translate3d(0,0,0) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
  }, [hovered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn("w-fit transition-transform duration-200 ease-linear", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
