import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticateService} from '../../services/authenticate.service';

@Injectable()
export class NeedAuthGuard implements CanActivate {

  constructor(private authenticationService: AuthenticateService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const redirectUrl = route['_routerState']['url'];
    if (this.authenticationService.isLogged()) {
      return true;
    }

    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['forbidden'], {
          queryParams: {
            redirectUrl
          }
        }
      )
    );

    return false;
  }
}
