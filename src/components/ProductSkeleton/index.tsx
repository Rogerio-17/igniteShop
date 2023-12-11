import { ComponentProps } from "react";
import { ProductSkeletonContainer, SkeletonItem } from "./style";

type ProductSkeletonProps = ComponentProps<typeof ProductSkeletonContainer>

export function ProductSkeleton({...props}: ProductSkeletonProps) {
    return(
        <ProductSkeletonContainer {...props}>
            <SkeletonItem></SkeletonItem>
            <div>
             <SkeletonItem></SkeletonItem>
             <SkeletonItem></SkeletonItem>
            </div>
        </ProductSkeletonContainer>
    )
}