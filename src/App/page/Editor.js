export default function Editor({ $page: $target, initialState = "" }) {
  const $editor = document.createElement("div");

  let isinitialize = false;
  this.state = initialState;

  $target.appendChild($editor);

  this.setState = ({ $target, nextState }) => {
    if ($target) {
      this.state = nextState;
      $editor.querySelector("[name=title]").value = this.state.title;
      $editor.querySelector("[name=content]").value = this.state.content;
      this.render();
    }
  };
  this.render = () => {
    if (!isinitialize) {
      $editor.innerHTML = `
        <button id="edit-btn">포스팅</button>
        <input type="text" name="title" style="width:600px" value="${this.state.title}"/>
        <textarea name="content" style="width:600px;height:400px">${this.state.content}</textarea>
        `;
      isinitialize = true;
    }
  };
  this.render();
}
