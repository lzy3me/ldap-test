import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import * as Strategy from "passport-ldapauth";
import { LDAPServerCfg } from "./ldap.config";

@Injectable()
export class LdapStrategy extends PassportStrategy(Strategy, "ldap") {
  constructor() {
    super({
      passReqToCallback: true,
      server: LDAPServerCfg,
    });
  }

  async validate(user: any) {
    return user;
  }
}
