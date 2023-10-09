import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request, Response } from "express";
import { LdapGuard } from "src/ldap/ldap.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LdapGuard)
  @Get("info")
  getInfo(@Req() req: Request, @Res() res: Response) {
    return res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>AUTH INFO | LDAP TEST</title>
      <style>
      body {
        font-family: consolas, mono;
      }
      
      th {
        width: 25%;
        background-color: #FFCC70;
      }
      
      tr, td {
        border: 1px solid #000;
      }
      </style>
    </head>
    <body>
      <table style="width:100%">
        <tr>
          <th>Header</th>
          <td>${JSON.stringify(req.headers)}</td>
        </tr>
        <tr>
          <th>Body</th>
          <td>${JSON.stringify(req.body)}</td>
        </tr>
        <tr>
          <th>Parameter</th>
          <td>${JSON.stringify(req.params)}</td>
        </tr>
        <tr>
          <th>Query</th>
          <td>${JSON.stringify(req.query)}</td>
        </tr>
        <tr>
          <th>URL</th>
          <td>${JSON.stringify(req.url)}</td>
        </tr>
        <tr>
          <th>User</th>
          <td>${JSON.stringify(req.user)}</td>
        </tr>
          <tr>
            <th>Request</th>
            <td>${JSON.stringify(req.toArray())}</td>
          </tr>
      </table>
    </body>
    </html>
    `);

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
