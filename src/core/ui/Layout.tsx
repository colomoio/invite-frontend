import { ReactNode } from "react";
import { Navbar } from "./Navbar";

export type LayoutProps = {
  children: ReactNode;
};

export function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
