import React from "react";
import WorkflowTab from "./Sidebar/WorkflowTab";
import DetailsTab from "./Sidebar/DetailsTab";
import ContactsTab from "./Sidebar/ContactsTab";
import SMSTab from "./Sidebar/SMSTab";
import DelayTab from "./Sidebar/DelayTab";
import ConditionTab from "./Sidebar/ConditionTab";

const routes = [
  {
    path: "/workflow_builder",
    exact: true,
    sidebar: () => <WorkflowTab />,
  },
  {
    path: "/workflow_builder/details",
    sidebar: <DetailsTab />,
  },
  {
    path: "/workflow_builder/contacts",
    sidebar: () => <ContactsTab />,
  },
  {
    path: "/workflow_builder/sms",
    sidebar: () => <SMSTab />,
  },
  {
    path: "/workflow_builder/delay",
    sidebar: () => <DelayTab />,
  },
  {
    path: "/workflow_builder/condition",
    sidebar: () => <ConditionTab />,
  },
];
export default routes;
