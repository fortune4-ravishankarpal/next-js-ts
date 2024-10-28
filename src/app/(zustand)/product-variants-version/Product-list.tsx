import { Button } from "@/components/ui/button";
import HandleDelete from "./DeleteProduct";

export default function ProductVariantList({ productList }: { productList: any }) {
    return (
        <ul className="w-full grid grid-cols-5 gap-2">
            {productList?.map((product: any) => (
                <li key={product.id} className="border p-2 my-2">
                    <h2>{product.name}</h2>
                    {/* {product.variants.map((variant: any) => (
                        <li key={variant.id}>
                            {variant.color} - {variant.size}
                        </li>
                    ))} */}
                    <div className="flex gap-2 ">
                        <Button size={"sm"}>Edit</Button>
                        <HandleDelete id={product.id} />
                    </div>
                </li>
            ))}
        </ul>
    );
}
