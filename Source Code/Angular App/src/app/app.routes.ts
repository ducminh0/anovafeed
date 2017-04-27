import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TemplatePageComponent } from './template-page/template-page.component';
import { UploadComponent } from './upload/upload.component';
import { LoginGuard } from './guards/login.guard';

const routing: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: TemplatePageComponent, canActivate: [LoginGuard] },
    { path: 'upload', component: UploadComponent },
    { path: '**', component: NotfoundComponent }

];

export const appRoutes = RouterModule.forRoot(routing, { useHash: true });