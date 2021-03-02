import React from 'react';
import WorkflowTab from './Sidebar/WorkflowTab';
import DetailsTab from './Sidebar/DetailsTab';
import ContactsTab from './Sidebar/ContactsTab';
import SMSTab from './Sidebar/SMSTab';
import DelayTab from './Sidebar/DelayTab';
import ConditionTab from './Sidebar/ConditionTab';

 const routes = [
    {
      path: "/",
      sidebar: () => <div>e!</div>,
      exact:true,
      main: () => <WorkflowTab/>
    },
    {
      path: "/details",
      sidebar: <div>detail!</div>,
      main: <DetailsTab/>
    },
    {
      path: "/contacts",
      sidebar: () => <div>con!</div>,
      main: () => <ContactsTab/>
    },
    {
      path: "/sms",
      sidebar: () => <div>sm!</div>,
      main: () => <SMSTab/>
    },{
      path: "/delay",
      sidebar: () => <div>del!</div>,
      main: () => <DelayTab/>
    },
    {
      path: "/condition",
      sidebar: () => <div>home!</div>,
      main: () => <ConditionTab/>
    },
  ];
  export default routes;