import { CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { env } from "src/config/env";

export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers['authorization'] || request.headers['Authorization'];

        if (!authHeader) {
            throw new UnauthorizedException('Authorization headers not found');
        }

        const token = this.extractTokenFromHeader(authHeader);
        if (token !== env.TOKEN) {
            throw new UnauthorizedException('Invalid Token Authentication');
        }

        return true;
    }

    private extractTokenFromHeader(authHeader: string): string | null {
        if (!authHeader.startsWith('Bearer ')) {
            return null;
        }
        return authHeader.substring(7, authHeader.length).trim();
    }
}
