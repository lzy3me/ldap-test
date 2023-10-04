import { Module } from "@nestjs/common";
import { ConfModule } from "./conf/conf.module";
import { AuthModule } from "./auth/auth.module";

console.log(process.env.LDAP_ADDR);
@Module({
  imports: [ConfModule, AuthModule],
})
export class AppModule {}
