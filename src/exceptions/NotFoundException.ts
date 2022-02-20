export class NotFoundException extends Error {
  readonly statusCode;

  constructor(sms?: string) {
    super(sms);
    this.statusCode = 404;
  }
}
