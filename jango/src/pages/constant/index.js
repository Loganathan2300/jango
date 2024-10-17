import { Icon } from "@iconify/react/dist/iconify.js";
// import rawMaterial from '../../images/processing.png';
// "C:\Users\Admin\OneDrive\Desktop\jango-frondend\New_jango\jango\jango\src\images\processing.png"

export const adminSidebar = [
    {
       id:1,
       name:"Dashboard",
       icon:<Icon icon="ic:outline-dashboard" width="22" height="22" className="me-2"/>,
       iconGreater:<Icon icon="material-symbols:arrow-forward-ios-rounded" />,
       path:"/create"
    },
    {
        id:2,
        name:"Employee Details",
        icon:<Icon icon="fluent:person-support-16-filled" width="22" height="22" className="me-2"/>,
        iconGreater:<Icon icon="material-symbols:arrow-forward-ios-rounded" />,
        path:"/create"
    },
    {
        id:3,
        name:"Customer Details",
        icon:<Icon icon="fluent:person-48-regular" width="22" height="22" className="me-2"/>,
        iconGreater:<Icon icon="material-symbols:arrow-forward-ios-rounded" />,
        path:"/create"
    },
    {
        id:4,
        name:"Raw Materials",
        iconGreater:<Icon icon="material-symbols:arrow-forward-ios-rounded" />,
        path:"/raw-material/admin"
    },
    {
        id:5,
        name:"Delivery Details",
        icon:<Icon icon="lsicon:order-filled" width="22" height="22" className="me-2 mb-1"/>,
        iconGreater:<Icon icon="material-symbols:arrow-forward-ios-rounded" />,
        path:"/create"
    }
  ];

