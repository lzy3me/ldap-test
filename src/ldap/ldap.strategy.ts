import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import * as Strategy from "passport-ldapauth";
import { LDAPServerCfg } from "./ldap.config";

@Injectable()
export class LdapStrategy extends PassportStrategy(Strategy, "LDAP") {
  constructor() {
    console.log("RUNNING?");
    super({
      passReqToCallback: true,
      server: LDAPServerCfg,
    });
  }

  async validate(user: any) {
    console.log("VALIDATE?");
    console.log("user", user);
    return user;
  }
}
