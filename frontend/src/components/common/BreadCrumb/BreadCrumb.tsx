import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const isMongoId = (value: string) => /^[0-9a-fA-F]{24}$/.test(value);

  // Filter out the ID if it's the last part of the URL
  const visiblePathnames =
    pathnames.length && isMongoId(pathnames[pathnames.length - 1])
      ? pathnames.slice(0, -1)
      : pathnames;

  const formatPaths = (value: string) =>
    value.charAt(0).toUpperCase() + value.slice(1);

  return (
    <Breadcrumb className="pl-10">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {visiblePathnames.map((value, index) => {
          const routeTo = `/${visiblePathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === visiblePathnames.length - 1;

          return (
            <React.Fragment key={routeTo}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{formatPaths(value)}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={routeTo}>
                    {formatPaths(value)}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumb;
