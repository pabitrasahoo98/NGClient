import axios from "axios";
import { SAVE_CATAGORY_INFO ,SAVE_PINCODE_INFO,SAVE_CAROUSEL_INFO} from "../reducers/catagoryReducer";
import { ADMIN_CAROUSEL_FAIL, ADMIN_CAROUSEL_REQUEST, ADMIN_CAROUSEL_SUCCESS, ADMIN_CATAGORY_FAIL, ADMIN_CATAGORY_REQUEST, ADMIN_CATAGORY_SUCCESS, ADMIN_PINCODE_FAIL, ADMIN_PINCODE_REQUEST, ADMIN_PINCODE_SUCCESS, CLEAR_ACARERRORS, CLEAR_ACERRORS, CLEAR_APERRORS } from "../reducers/allPrerequisitionReducer";
import { CLEAR_DCARERRORS, CLEAR_DCERRORS, CLEAR_DPERRORS, DELETE_CAROUSEL_FAIL, DELETE_CAROUSEL_REQUEST, DELETE_CAROUSEL_SUCCESS, DELETE_CATAGORY_FAIL, DELETE_CATAGORY_REQUEST, DELETE_CATAGORY_SUCCESS, DELETE_PINCODE_FAIL, DELETE_PINCODE_REQUEST, DELETE_PINCODE_SUCCESS } from "../reducers/deletePreReducer";
import { ADD_CAROUSEL_FAIL, ADD_CAROUSEL_REQUEST, ADD_CAROUSEL_SUCCESS, ADD_CATAGORY_FAIL, ADD_CATAGORY_REQUEST, ADD_CATAGORY_SUCCESS, ADD_PINCODE_FAIL, ADD_PINCODE_REQUEST, ADD_PINCODE_SUCCESS, CLEAR_AACARERRORS, CLEAR_AACERRORS, CLEAR_AAPERRORS } from "../reducers/addPrerequisitionReducer";
import { CATAGORY_DETAILS_FAIL, CATAGORY_DETAILS_REQUEST, CATAGORY_DETAILS_SUCCESS, CLEAR_CDERRORS, PINCODE_DETAILS_FAIL, PINCODE_DETAILS_REQUEST, PINCODE_DETAILS_SUCCESS ,CLEAR_PDERRORS, CAROUSEL_DETAILS_REQUEST, CAROUSEL_DETAILS_SUCCESS, CAROUSEL_DETAILS_FAIL, CLEAR_CARDERRORS} from "../reducers/getPrerequisitionReducer";
import { CLEAR_UCARERRORS, CLEAR_UCERRORS, CLEAR_UPERRORS, UPDATE_CAROUSEL_FAIL, UPDATE_CAROUSEL_REQUEST, UPDATE_CAROUSEL_SUCCESS, UPDATE_CATAGORY_FAIL, UPDATE_CATAGORY_REQUEST, UPDATE_CATAGORY_SUCCESS, UPDATE_PINCODE_FAIL, UPDATE_PINCODE_REQUEST, UPDATE_PINCODE_SUCCESS } from "../reducers/updatePrerequisitionReducer";

  //saving CATAGORIES
  export const fetchCatagories =() =>
  async (dispatch) => {
    
      let link = `https://ng-server.vercel.app/api/v1/catagories`;
      const { data } = await axios.get(link);
      dispatch(SAVE_CATAGORY_INFO(data))
    
    }
//saving pincodes
  export const fetchPinCodes =() =>
  async (dispatch) => {
    
      let link = `https://ng-server.vercel.app/api/v1/pincodes`;
      const { data } = await axios.get(link);
      dispatch(SAVE_PINCODE_INFO(data))
    
    }

//saving carousels
export const fetchCarousel =() =>
async (dispatch) => {
  
    let link = `https://ng-server.vercel.app/api/v1/carousel`;
    const { data } = await axios.get(link);
    dispatch(SAVE_CAROUSEL_INFO(data))
  
  }

   //get  CATAGORY--admin
   export const getAdminCatagory =() =>
   async (dispatch) => {
     try {
       dispatch(ADMIN_CATAGORY_REQUEST());
   
       let link = `https://ng-server.vercel.app/api/v1/catagories`;
   
       const { data } = await axios.get(link,{withCredentials:true});
   
       dispatch(ADMIN_CATAGORY_SUCCESS(data)); 
       
     } catch (error) {
       dispatch(ADMIN_CATAGORY_FAIL(error.response.data.message));
     }
   };
     //clear Admin catagory error
  export const clearACErrors =() =>
  async (dispatch) => {
  dispatch( CLEAR_ACERRORS());

  };

  export const getAdminPincode =() =>
   async (dispatch) => {
     try {
       dispatch(ADMIN_PINCODE_REQUEST());
   
       let link = `https://ng-server.vercel.app/api/v1/pincodes`;
   
       const { data } = await axios.get(link,{withCredentials:true});
   
       dispatch(ADMIN_PINCODE_SUCCESS(data)); 
       
     } catch (error) {
       dispatch(ADMIN_PINCODE_FAIL(error.response.data.message));
     }
   };
     //clear Admin pincode error
  export const clearAPErrors =() =>
  async (dispatch) => {
  dispatch( CLEAR_APERRORS());

  };

  export const getAdminCarousel =() =>
   async (dispatch) => {
     try {
       dispatch(ADMIN_CAROUSEL_REQUEST());
   
       let link = `https://ng-server.vercel.app/api/v1/carousel`;
   
       const { data } = await axios.get(link,{withCredentials:true});
   
       dispatch(ADMIN_CAROUSEL_SUCCESS(data)); 
       
     } catch (error) {
       dispatch(ADMIN_CAROUSEL_FAIL(error.response.data.message));
     }
   };
  //clear Admin carousel error
  export const clearACARErrors =() =>
  async (dispatch) => {
  dispatch( CLEAR_ACARERRORS());
};



  export const deleteCatagory =(id) =>
  async (dispatch) => {
    try {
      dispatch(DELETE_CATAGORY_REQUEST());
  
      let link = `https://ng-server.vercel.app/api/v1/admin/manipulatecatagory/${id}`;
  
      const { data } = await axios.delete(link,{withCredentials:true});
  
      dispatch(DELETE_CATAGORY_SUCCESS(data)); 
      
    } catch (error) {
      dispatch(DELETE_CATAGORY_FAIL(error.response.data.message));
    }
  };
 //clear Admin CATAGORY error
 export const clearDCErrors =() =>
 async (dispatch) => {
 dispatch( CLEAR_DCERRORS());

 };

 //delete pincode admin
 export const deletePincode =(id) =>
 async (dispatch) => {
   try {
     dispatch(DELETE_PINCODE_REQUEST());
 
     let link = `https://ng-server.vercel.app/api/v1/admin/manipulatepincodes/${id}`;
 
     const { data } = await axios.delete(link,{withCredentials:true});
 
     dispatch(DELETE_PINCODE_SUCCESS(data)); 
     
   } catch (error) {
     dispatch(DELETE_PINCODE_FAIL(error.response.data.message));
   }
 };
//clear Admin pincode error
export const clearDPErrors =() =>
async (dispatch) => {
dispatch( CLEAR_DPERRORS());

};

//DELETE CAROUSEL ADMIN

export const deleteCarousel=(id) =>
 async (dispatch) => {
   try {
     dispatch(DELETE_CAROUSEL_REQUEST());
 
     let link = `https://ng-server.vercel.app/api/v1/admin/manipulatecarousel/${id}`;
 
     const { data } = await axios.delete(link,{withCredentials:true});
 
     dispatch(DELETE_CAROUSEL_SUCCESS(data)); 
     
   } catch (error) {
     dispatch(DELETE_CAROUSEL_FAIL(error.response.data.message));
   }
 };
//clear Admin pincode error
export const clearDCARErrors =() =>
async (dispatch) => {
dispatch( CLEAR_DCARERRORS());

};
//ADD CATAGORY
export const addCatagory=(cataData) =>
 async (dispatch) => {
   try {
     dispatch(ADD_CATAGORY_REQUEST());
 
     let link = `https://ng-server.vercel.app/api/v1/admin/manipulatecatagory`;
 
     const { data } = await axios.post(link,cataData,{headers:{"Content-Type":"application/json"},withCredentials:true});
 
     dispatch(ADD_CATAGORY_SUCCESS(data)); 
     
   } catch (error) {
     dispatch(ADD_CATAGORY_FAIL(error.response.data.message));
   }
 };
//clear Admin ADD CATAGORY ERROR
export const clearAACErrors =() =>
async (dispatch) => {
dispatch( CLEAR_AACERRORS());

};

//ADD PINCODE
export const addPincode=(pinData) =>
 async (dispatch) => {
   try {
     dispatch(ADD_PINCODE_REQUEST());
 
     let link = `https://ng-server.vercel.app/api/v1/admin/manipulatepincodes`;
 
     const { data } = await axios.post(link,pinData,{headers:{"Content-Type":"application/json"},withCredentials:true});
 
     dispatch(ADD_PINCODE_SUCCESS(data)); 
     
   } catch (error) {
     dispatch(ADD_PINCODE_FAIL(error.response.data.message));
   }
 };
//clear Admin ADD PINCODE ERROR
export const clearAAPErrors =() =>
async (dispatch) => {
dispatch( CLEAR_AAPERRORS());

};

//ADD CAROUSEL
export const addCarousel=(carData) =>
 async (dispatch) => {
   try {
     dispatch(ADD_CAROUSEL_REQUEST());
 
     let link = `https://ng-server.vercel.app/api/v1/admin/manipulatecarousel`;
 
     const { data } = await axios.post(link,carData,{headers:{"Content-Type":"application/json"},withCredentials:true});
 
     dispatch(ADD_CAROUSEL_SUCCESS(data)); 
     
   } catch (error) {
     dispatch(ADD_CAROUSEL_FAIL(error.response.data.message));
   }
 };
//clear Admin ADD CATAGORY ERROR
export const clearAACARErrors =() =>
async (dispatch) => {
dispatch( CLEAR_AACARERRORS());

};


//ADMIN --catagory DETAILS 

export const catagoryDetails =(id) =>
async (dispatch) => {
  try {
    dispatch(CATAGORY_DETAILS_REQUEST());
    let link = `https://ng-server.vercel.app/api/v1/admin/manipulatecatagory/${id}`;

    const { data } = await axios.get(link,{withCredentials:true});

    dispatch(CATAGORY_DETAILS_SUCCESS(data));
    
  } catch (error) {
    dispatch(CATAGORY_DETAILS_FAIL(error.response.data.message));
  }
};
//ADMIN-- CLEAR CATAGORY DETAILS ERROR
 export const clearCDErrors =() =>
 async (dispatch) => {
 dispatch( CLEAR_CDERRORS());

 };

 //ADMIN --PINCODE DETAILS 

export const pincodeDetails =(id) =>
async (dispatch) => {
  try {
    dispatch(PINCODE_DETAILS_REQUEST());
    let link = `https://ng-server.vercel.app/api/v1/admin/manipulatepincodes/${id}`;

    const { data } = await axios.get(link,{withCredentials:true});

    dispatch(PINCODE_DETAILS_SUCCESS(data));
    
  } catch (error) {
    dispatch(PINCODE_DETAILS_FAIL(error.response.data.message));
  }
};
//ADMIN-- CLEAR pincode DETAILS ERROR
 export const clearPDErrors =() =>
 async (dispatch) => {
 dispatch( CLEAR_PDERRORS());

 };

 //CAROUSEL DETAILS ADMIN

 export const carouselDetails =(id) =>
async (dispatch) => {
  try {
    dispatch(CAROUSEL_DETAILS_REQUEST());
    let link = `https://ng-server.vercel.app/api/v1/admin/manipulatecarousel/${id}`;

    const { data } = await axios.get(link,{withCredentials:true});

    dispatch(CAROUSEL_DETAILS_SUCCESS(data));
    
  } catch (error) {
    dispatch(CAROUSEL_DETAILS_FAIL(error.response.data.message));
  }
};
//ADMIN-- CLEAR CAROUSEL DETAILS ERROR
 export const clearCARDErrors =() =>
 async (dispatch) => {
 dispatch( CLEAR_CARDERRORS());

 };

 
 //update catagory--admin
 export const updateCatagory=(id,catagoryData)=>async(dispatch)=>{

  try {
      dispatch(UPDATE_CATAGORY_REQUEST())
      const config={withCredentials:true}
      const {data}=await axios.put(`https://ng-server.vercel.app/api/v1/admin/manipulatecatagory/${id}`,catagoryData,config);
      dispatch(UPDATE_CATAGORY_SUCCESS(data.success));
      
  } catch (error) {
  dispatch(UPDATE_CATAGORY_FAIL(error.response.data.message))
  }

}

 //clear update CATAGORY error
 export const clearUCErrors =() =>
 async (dispatch) => {
 dispatch( CLEAR_UCERRORS());

 };

 //update PINCODE--admin
 export const updatePincode=(id,pincodeData)=>async(dispatch)=>{

  try {
      dispatch(UPDATE_PINCODE_REQUEST())
      const config={withCredentials:true}
      const {data}=await axios.put(`https://ng-server.vercel.app/api/v1/admin/manipulatepincodes/${id}`,pincodeData,config);
      dispatch(UPDATE_PINCODE_SUCCESS(data.success));
      
  } catch (error) {
  dispatch(UPDATE_PINCODE_FAIL(error.response.data.message))
  }

}

 //clear update PINCODE error
 export const clearUPErrors =() =>
 async (dispatch) => {
 dispatch( CLEAR_UPERRORS());

 };


 //update CAROUSEL--admin
 export const updateCarousel=(id,carouselData)=>async(dispatch)=>{

  try {

      dispatch(UPDATE_CAROUSEL_REQUEST())
      const config={withCredentials:true}
      const {data}=await axios.put(`https://ng-server.vercel.app/api/v1/admin/manipulatecarousel/${id}`,carouselData,config);
      dispatch(UPDATE_CAROUSEL_SUCCESS(data.success));
      
  } catch (error) {
  dispatch(UPDATE_CAROUSEL_FAIL(error.response.data.message))
  }

}

 //clear update CAROUSEL error
 export const clearUCARErrors =() =>
 async (dispatch) => {
 dispatch( CLEAR_UCARERRORS());

 };
 