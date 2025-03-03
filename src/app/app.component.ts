import { Component } from '@angular/core'
import { ButtonComponent } from '@components/button/button.component'

@Component({
  selector: 'app-root', // eslint-disable-line
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-pattern'
}
