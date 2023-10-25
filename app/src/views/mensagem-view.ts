import { View } from "./view.js";
import { escapar } from "../decorators/escape.js";

export class MensagemView extends View<string> {
  @escapar()
  protected template(model: string): string {
    return `
            <p class="alert alert-info">${model}</p>
        `;
  }
}
