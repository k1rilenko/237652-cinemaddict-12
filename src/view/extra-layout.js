const filmsLayout = (classBlock = ``, classTitle = ``, title) => {
  return `
    <section class="films-list${classBlock}">
      <h2 class="films-list__title ${classTitle}">${title}</h2>
      <div class="films-list__container">
      </div>
    </section>
  `;
};
export {filmsLayout};
