import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import WorkflowTab from './WorkflowTab';
import DetailsTab from './DetailsTab';
import ContactsTab from './ContactsTab';
import SMSTab from './SMSTab';
import DelayTab from './DelayTab';
import ConditionTab from './ConditionTab';

const routes = [
  {
    path: "/workflow",
    main: () => <WorkflowTab/>
  },
  {
    path: "/details",
    main: () => <DetailsTab/>
  },
  {
    path: "/contacts",
    main: () => <ContactsTab/>
  },
  {
    path: "/sms",
    main: () => <SMSTab/>
  },{
    path: "/delay",
    main: () => <DelayTab/>
  },
  {
    path: "/condition",
    main: () => <ConditionTab/>
  },
];

function Sidebar() {

  return(
        <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                children={<route.main />}
              />
            ))}
          </Switch>
  )
};
  export default Sidebar;