const render = (container, el, position = `beforeend`) => {
  container.insertAdjacentHTML(position, el);
};
export {render};
