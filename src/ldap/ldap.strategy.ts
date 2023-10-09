import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import * as Strategy from "passport-ldapauth";

@Injectable()
export class LdapStrategy extends PassportStrategy(Strategy, "LDAP") {
  constructor() {
    console.log("RUNNING?");
    super({
      passReqToCallback: true,
      server: {
        url: process.env.LDAP_ADDR,
        bindDN: process.env.BIND_DN,
        bindCredentials: process.env.BIND_CREDENTIALS,
        searchBase: process.env.SEARCH_BASE,
        searchFilter: process.env.SEARCH_FILTER,
      },
    });
  }

  async validate(user: any) {
    console.log("VALIDATE?");
    console.log("user", user);
    return user;
  }
}
