import {useState} from 'react';

const useShowModal = () => {

    const [isShowModal , setIsShowModal] = useState(false);


  const showModalHandler = () =>{
    setIsShowModal(true);
  }

  const hideModalHandler = ()=>{
   setIsShowModal(false);
  }
  return ({
    isShowModal,
    showModalHandler,
    hideModalHandler,
  });
}

export default useShowModal
