"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDatabase1610954613660 = void 0;
class CreateDatabase1610954613660 {
    constructor() {
        this.name = 'CreateDatabase1610954613660';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "guest" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "organizername" character varying, "organizermail" character varying NOT NULL, "organizerphone" character varying, "starttime" character varying NOT NULL, "endtime" character varying NOT NULL, "checkin" character varying, "checkout" character varying, "status" character varying, "organization" character varying, "blocked" boolean, "blocker" character varying, "covid" character varying NOT NULL, "eventid" character varying, CONSTRAINT "PK_57689d19445de01737dbc458857" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "muser" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "username" character varying NOT NULL, "phonenumber" character varying NOT NULL, "password" character varying NOT NULL, "approve" boolean, CONSTRAINT "PK_da5f40d984a09987df2df3d4bfe" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "username" character varying NOT NULL, "phonenumber" character varying NOT NULL, "password" character varying NOT NULL, "approve" boolean, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "user"`);
            yield queryRunner.query(`DROP TABLE "muser"`);
            yield queryRunner.query(`DROP TABLE "guest"`);
        });
    }
}
exports.CreateDatabase1610954613660 = CreateDatabase1610954613660;
//# sourceMappingURL=1610954613660-CreateDatabase.js.map