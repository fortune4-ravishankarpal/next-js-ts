"use client";
import ProductVariantList from "./Product-list";
import { cn } from "@/lib/utils";
import { fetchProductMutation } from "./product-variant-service";
import Link from "next/link";

const ProductListComponent = () => {
    const { data: productList, isLoading, error, isError } = fetchProductMutation();

    if (isError) return <p>{error.message}</p>;

    return (
        <div>
            <div className="container m-auto mt-3 flex justify-between">
                <h1>Product List</h1>
                <Link className="text-blue-500" href={"/product-variants-version/MT"}>
                    {" "}
                    Add Master Template
                </Link>
            </div>

            <div className={cn("px-3", isLoading && "opacity-50")}>{productList && <ProductVariantList productList={productList} />}</div>
        </div>
    );
};

export default ProductListComponent;
