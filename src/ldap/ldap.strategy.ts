import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import * as Strategy from "passport-ldapauth";

@Injectable()
export class LdapStrategy extends PassportStrategy(Strategy, "ldap") {
  constructor() {
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
    return user;
  }
}
