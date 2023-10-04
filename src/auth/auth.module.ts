import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";
import { LdapStrategy } from "src/ldap/ldap.strategy";
import { LdapGuard } from "src/ldap/ldap.guard";

@Module({
  imports: [PassportModule.register({ defaultStrategy: "ldap" })],
  controllers: [AuthController],
  providers: [AuthService, LdapStrategy, LdapGuard],
})
export class AuthModule {}
