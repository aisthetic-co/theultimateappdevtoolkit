/* eslint-disable no-unused-vars */

enum httpStatus {
  ok = 200,
  created = 201,
  accepted = 202,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  methodNotAllowed = 405,
  conflict = 409,
  gone = 410,
  lengthRequired = 411,
  preconditionFailed = 412,
  payloadTooLarge = 413,
  unsupportedMediaType = 415,
  unprocessableEntity = 422,
  tooManyRequests = 429,
  internalServerError = 500,
  notImplemented = 501,
  badGateway = 502,
  serviceUnavailable = 503,
  gatewayTimeout = 504,
}

export default httpStatus;
