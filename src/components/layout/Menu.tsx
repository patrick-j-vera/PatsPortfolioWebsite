"use client";

import { useRef, useCallback } from "react";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { navLinks } from "@/lib/config";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    if (isOpen) onClose();
  }, [isOpen, onClose]);

  useOnClickOutside(menuRef, handleClose);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-bark/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Slide-out panel */}
      <aside
        ref={menuRef}
        className={`fixed top-0 right-0 z-40 h-full w-[min(75vw,320px)] bg-warm-sand shadow-xl flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal={isOpen}
      >
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-bark text-lg hover:text-honey transition-colors text-center"
              onClick={onClose}
            >
              <span className="block font-mono text-honey text-sm mb-1">
                {link.number}.
              </span>
              {link.name}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
