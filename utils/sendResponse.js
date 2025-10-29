/*

*/
export const sendResponse = (res, content, code, type) => {
  res.statusCode = code;
  res.setHeader("Content-Type", type);
  res.end(content);
};
