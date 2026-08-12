"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
/* Radix wires these to aria-labelledby / aria-describedby on the panel, so a
   screen reader announces what the dialog is on open. Title renders an h2 and
   Description a p, both unstyled, so the caller keeps full control of type. */
const DialogTitle = DialogPrimitive.Title;
const DialogDescription = DialogPrimitive.Description;

/**
 * Overlay and content both key their fade/scale off Radix's own
 * data-[state] attribute, so open and close play the same transition in
 * reverse rather than the close being an abrupt unmount.
 *
 * Timing is deliberately unhurried: --duration-slow on --ease-in-out-soft,
 * not the 300ms this used to run at. A dialog on a health page interrupts
 * whatever the reader was doing, and at 300ms with a 5% zoom it arrived as a
 * pop. It now eases up over half a second from 98%, which reads as the panel
 * settling into place rather than being thrown at her.
 *
 * The utilities below feed --tw-duration and --tw-ease, which is what
 * tw-animate-css's enter/exit keyframes actually read, so `duration-*` and
 * `ease-*` govern the animation the same way they would a transition.
 */
function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        className={cn(
          "fixed inset-0 z-200 bg-ink/50 backdrop-blur-sm",
          "duration-(--duration-slow) ease-(--ease-in-out-soft)",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0"
        )}
      />
      <div className="fixed inset-0 z-201 flex items-center justify-center p-4">
        <DialogPrimitive.Content
          className={cn(
            "relative w-full max-w-lg rounded-panel bg-white p-9 shadow-[0_30px_80px_rgba(0,0,0,0.25)]",
            "duration-(--duration-slow) ease-(--ease-in-out-soft)",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-98 data-[state=closed]:slide-out-to-bottom-2",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-98 data-[state=open]:slide-in-from-bottom-2",
            className
          )}
          {...props}
        >
          {children}
          <DialogPrimitive.Close
            aria-label="Close"
            className={cn(
              "absolute top-5 right-5 grid size-9 cursor-pointer place-items-center rounded-full bg-ink text-white",
              "transition-transform duration-200 hover:scale-105 hover:bg-ink/85",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            )}
          >
            <X className="size-4" aria-hidden="true" />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </div>
    </DialogPrimitive.Portal>
  );
}

export { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription };
