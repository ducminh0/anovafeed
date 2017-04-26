import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TemplatePageComponent } from './template-page/template-page.component';
//import { CheckLoginGuard } from './guards/check-login.guard';

const routing: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: TemplatePageComponent },
    { path: '**', component: NotfoundComponent }

];

export const appRoutes = RouterModule.forRoot(routing, { useHash: true });