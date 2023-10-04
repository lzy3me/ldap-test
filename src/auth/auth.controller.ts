import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
  Req,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
// import { CreateAuthDto } from "./dto/create-auth.dto";
// import { UpdateAuthDto } from "./dto/update-auth.dto";
import { Request } from "express";
import { LdapGuard } from "src/ldap/ldap.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LdapGuard)
  @Get("info")
  getInfo(@Req() req: Request) {
    return {
      header: req.headers,
      user: req.user,
      url: req.url,
      query: req.query,
      body: req.body,
      param: req.params,
    };
  }

  // @Post()
  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.create(createAuthDto);
  // }

  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.authService.remove(+id);
  // }
}
