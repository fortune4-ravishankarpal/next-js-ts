"use client";
import React from "react";
import { MasterTemplateStore } from "./masterTemplateStore";
import AddEditMaterTemplate from "./AddEditMaterTemplate";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
    let Mt = MasterTemplateStore((state) => state.selectedMT);
    let MtClose = MasterTemplateStore((state) => state.selectedMTtoNull);

    return (
        <div className="relative p-6 bg-gray-50 min-h-full  ">
            {children}
            {Mt && (
                <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="relative bg-white min-h-[400px] p-6 rounded-lg shadow-lg w-full max-w-3xl  mx-auto">
                        <Button onClick={MtClose} className="absolute top-2 right-2 " variant={"destructive"} aria-label="Close">
                            X
                        </Button>
                        <AddEditMaterTemplate defaultData={Mt} />
                    </div>
                </div>
            )}
        </div>
    );
}
