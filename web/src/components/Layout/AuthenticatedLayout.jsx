import SidebarWithHeader from "../SideMenu/SideMenu";
/* eslint-disable react/prop-types */

// import HeaderComponent from "../App/HeaderComponent";
// eslint-disable-next-line react/prop-types
export function AuthenticatedLayout({children}) {
  return (
      <SidebarWithHeader>
        {children}
      </SidebarWithHeader>
  );
}