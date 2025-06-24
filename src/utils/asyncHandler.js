//method banaega aur export krdega jisse bar abr na krna pdega kind of wrapper jisko bar abr use kr ske


// src/utils/asyncHandler.js
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch(next);
  };
};

export default asyncHandler;



//TRY CATCH WRAPPER FOR EXPRESS ROUTES
//asynchandler ek high order fucntion hai jo function ko accpet bhi kr skta paramter k tor pr
// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         });
//     }
// };

