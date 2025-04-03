export default class GenerateError extends Error {
    status: number;
  
    constructor(status: number, message:string) {
      super(message);
      this.status = status;
    }
  }