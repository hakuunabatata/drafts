"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendMail = function (_a) {
        var to = _a.to, msg = _a.msg;
        console.log("Email enviado para " + to.name + ": " + msg.subject);
    };
    return EmailService;
}());
exports.default = EmailService;
