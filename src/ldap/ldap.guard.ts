import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class LdapGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // console.log("request", request);
    console.log("user", request.user);
    // const user: User = request.user; // Assuming you have a User model

    // Check if the user has any of the required roles
    // const hasRole = () => user.roles.some((role) => roles.includes(role));
    // return user && hasRole();
    return true;
  }
}
