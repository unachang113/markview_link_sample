import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

export type BreadcrumbItemType = {
  name: string;
  href?: string;
};

export function BreadcrumbWrapper({
  breadcrumbItems,
}: {
  breadcrumbItems: BreadcrumbItemType[];
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item) => {
          return item.href ? (
            <>
              <BreadcrumbItem key={`breadcrumb-item-${item.name}`}>
                <BreadcrumbLink href="/">{item.name}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator key={`breadcrumb-separator-${item.name}`} />
            </>
          ) : (
            <BreadcrumbItem key={`breadcrumb-item-${item.name}`}>
              <BreadcrumbPage>{item.name}</BreadcrumbPage>
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
