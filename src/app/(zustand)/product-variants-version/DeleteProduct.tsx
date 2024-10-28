import { Button } from "@/components/ui/button";
import { deleteMutation } from "./product-variant-service";

function HandleDelete({ id }: { id: number }) {
    const d = deleteMutation(id);
    return (
        <div>
            <Button disabled={d.isPending} variant={"destructive"} size={"sm"} onClick={() => d.mutate(id)}>
                Delete
            </Button>
        </div>
    );
}
export default HandleDelete;
