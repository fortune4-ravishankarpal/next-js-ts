"use client";
import { Button } from "@/components/ui/button";
import { MasterTemplateArray } from "./AddEditMaterTemplate";
import { Pencil, Trash2 } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import * as Mt from "./masterService";
import { MasterTemplateStore } from "./masterTemplateStore";
export default function MasterTemplateList() {
    let list = Mt.getAllMutation();
    let selectedMt = MasterTemplateStore((state) => state.setSelectedMT);
    if (list.isLoading) {
        return "Loading....";
    }
    return (
        <>
            <div className="flex justify-between w-full">
                <div>MasterTemplate List</div>
                <Button onClick={() => selectedMt({ name: "", fields: [] })}>Add</Button>
            </div>
            {list.data && <MasterTEmplateList MasterTemplateList={list.data} />}
        </>
    );
}
function MasterTEmplateList({ MasterTemplateList }: { MasterTemplateList: MasterTemplateArray }) {
    const setMt = MasterTemplateStore((state) => state.setSelectedMT);

    return (
        <div className="w-full flex flex-col ">
            <ul className="w-full ">
                {MasterTemplateList?.map((MT) => (
                    <li key={MT?.id} className="p-2 my-2">
                        <Card className="w-full p-3 cursor-pointer" onClick={() => setMt(MT)}>
                            <div className="flex justify-between">
                                <CardTitle>{MT.name}</CardTitle>
                                <div className="flex items-center ">
                                    <Pencil className="mr-2 cursor-pointer" onClick={() => setMt(MT)} />
                                    <HandleDelete id={MT.id} />
                                </div>
                            </div>
                            <CardContent>
                                {MT.fields.map((field) => (
                                    <span key={field.fieldName}>{field.fieldName},</span>
                                ))}
                            </CardContent>
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function HandleDelete({ id }: { id: any }) {
    const d = Mt.deleteMutation(id);
    if (d.isPending) return <div>Deleting...</div>;
    return <Trash2 className="mr-2 cursor-pointer" onClick={() => d.mutate(id)} />;
}
