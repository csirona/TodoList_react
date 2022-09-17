import React from 'react';


function useLocalStorage(itemName,initialValue) {
    // Crear estado inicial para error y carga
    const [error,setError] = React.useState(false);
    const[loading,setLoading] = React.useState(true);
    const [item,setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
  //Simular un segundo carga
      setTimeout(() => {
        try {
          const localStorageItems = localStorage.getItem(itemName);
          let parsedItems;
  
          if(!localStorageItems){
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItems = initialValue;
          } else{
            parsedItems = JSON.parse(localStorageItems);
          }
  
          setItem(parsedItems)
  
        } catch (error) {
          //rn caso fr un error se guarda el estado
          setError(error)        
        } finally{
          setLoading(false)
        }
      }, 1000);
    });
  
    
  
  
    const saveItem = (newItems) => {
      try {
        const stringItem = JSON.stringify(newItems);
        localStorage.setItem(itemName,stringItem);
        setItem(newItems);
      } catch (error) {
        setError(error)
      }
    }
  
    return {item,saveItem,loading,error};
  }

export {useLocalStorage}