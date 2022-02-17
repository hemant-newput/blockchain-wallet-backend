
export class BadRequestError extends Error {
    name
    status
    customMsg
    error
    constructor(customMsg: string,error?:any) {
      super("Bad request");
      this.name = this.constructor.name;
      this.status = 400;
      Error.captureStackTrace(this, this.constructor);
      // Saving custom property.
      this.customMsg = customMsg;
      this.error = error
    }
  }


export class InternalServerError extends Error {
    name
    status
    customMsg
    error
    constructor(customMsg: string,error?:any) {
      super("Internal Server Error");
      this.name = this.constructor.name;
      this.status = 500;
      Error.captureStackTrace(this, this.constructor);
      // Saving custom property.
      this.customMsg = customMsg;
      this.error = error
    }
  }

export class ValidationException extends Error {
  name
  status
  customMsg
  error
  constructor(customMsg: string,error?:any) {
    super("Validation Error");
    this.name = this.constructor.name;
    this.status = 500;
    Error.captureStackTrace(this, this.constructor);
    // Saving custom property.
    this.customMsg = customMsg;
    this.error = error
  }
}