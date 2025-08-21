import { LitElement, html, unsafeCSS } from "lit"
import globalCSS from "../index.css?inline"

export class CopyText extends LitElement {
  static properties = {
    text: { type: String },
  }

  static styles = [unsafeCSS(globalCSS)]

  constructor() {
    super()
    this.text = ""
  }

  async copyToClipboard() {
    await navigator.clipboard.writeText(this.text)
  }

  render() {
    return html`
      <div
        class="prose dark:prose-invert prose-green relative text-sm max-w-none"
      >
        <pre class="font-mono pt-12">${this.text}</pre>
        <button
          class="absolute top-2 right-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-300 transition-colors text-white p-1 rounded-md cursor-pointer border-none"
          @click=${this.copyToClipboard}
        >
          Copy
        </button>
      </div>
    `
  }
}
