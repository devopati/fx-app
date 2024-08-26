export const errorGenerator = (error) => {
  if (error.response && error.response.data && error.response.data.message) {
    return error.response.data.message;
  } else {
    // If no custom message, use a generic error message
    return "An error occurred perfoming the request";
  }
};
