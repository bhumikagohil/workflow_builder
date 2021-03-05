import * as actionTypes from "./workflow-types";
import StartNode from "../../Components/Flowchart/Elements";

const initialState = {
  workflowName: "",
  trigger: null,
  contactsSelected: [],
  elements: [
    {
      id: 1,
      name: "startNode",
      parent: null,
      childOf: { number: 0 },
      compo: <StartNode />,
      children: [],
    },
  ],
  smsDetails: [],
  delay: [],
  condition: [],
};

const workflowReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_WORKFLOW_DETAILS:
      return {
        ...state,
        workflowName: action.workflowName,
        trigger: action.trigger,
        elements: [...state.elements, action.add_element],
      };
    case actionTypes.ADD_STEP_ELEMENT:
      return {
        ...state,
        elements: [...state.elements, action.add_step_element],
      };
    case actionTypes.REMOVE_END_ELEMENTS:
      return {
        ...state,
        elements: state.elements.filter(
          (_, i) => i !== state.elements.length - 1
        ),
      };
    case actionTypes.CONTACTS_SELECTED:
      return {
        ...state,
        contactsSelected: action.contactsSelected,
        elements: [...state.elements, action.add_element],
      };
    case actionTypes.SMS_DETAILS:
      return {
        ...state,
        smsDetails: [...state.smsDetails, action.smsDetails],
        elements: [...state.elements, action.add_element],
      };
    case actionTypes.SET_DELAY:
      return {
        ...state,
        delay: [...state.delay, action.delay],
        elements: [...state.elements, action.add_element],
      };
    case actionTypes.SET_CONDITION:
      return {
        ...state,
        condition: [...state.condition, action.condition],
        elements: [
          ...state.elements,
          action.add_yes_element,
          action.add_no_element,
          action.add_step_element,
        ],
      };
    default:
      return state;
  }
};

export default workflowReducer;
