import React from 'react';
import Tree from 'react-vertical-tree';
import {useSelector} from 'react-redux';

export default function FlowChart() {

  const elements = useSelector(state=> state.workflow.elements);

  function getNestedChildren(arr, childOf) {
    var children = [];
    for(var i =0; i < arr.length; ++i) {
        if(arr[i].childOf.number == childOf.number) {
            var grandChildren = getNestedChildren(arr, {number: arr[i].id})

            if(grandChildren.length) {
                arr[i].children = grandChildren;
            }
            children.push( arr[i]);
        }
    }
    return children;
  }

    return (
      <>
       <Tree 
        data={getNestedChildren(elements,{number: 0})} 
        direction 
        render={ item => <>{item.compo}</>}
        />
      </>
    );
  }