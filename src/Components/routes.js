import React from "react";
import WorkflowTab from "./Sidebar/WorkflowTab";
import DetailsTab from "./Sidebar/DetailsTab";
import ContactsTab from "./Sidebar/ContactsTab";
import SMSTab from "./Sidebar/SMSTab";
import DelayTab from "./Sidebar/DelayTab";
import ConditionTab from "./Sidebar/ConditionTab";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <WorkflowTab />,
  },
  {
    path: "/details",
    sidebar: <DetailsTab />,
  },
  {
    path: "/contacts",
    sidebar: () => <ContactsTab />,
  },
  {
    path: "/sms",
    sidebar: () => <SMSTab />,
  },
  {
    path: "/delay",
    sidebar: () => <DelayTab />,
  },
  {
    path: "/condition",
    sidebar: () => <ConditionTab />,
  },
];
export default routes;
