const buttons = {
  up: {
    el: document.querySelector('.btn-up'),
    show() {
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      this.el.classList.add('btn-up_hide');
    },
    setPosition(scrollY) {
      scrollY > 400 ? this.show() : this.hide();
    },
    onClick() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
  bottom: {
    el: document.querySelector('.btn-bottom'),
    show() {
      this.el.classList.remove('btn-bottom_hide');
    },
    hide() {
      this.el.classList.add('btn-bottom_hide');
    },
    setPosition(scrollY) {
      scrollY < 400 ? this.show() : this.hide();
    },
    onClick() {
      window.scrollTo({
        top: 5000,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
};

const handleScrollEvent = () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  Object.values(buttons).forEach(button => button.setPosition(scrollY));
};

window.addEventListener('scroll', handleScrollEvent);
Object.values(buttons).forEach(button => {
  button.el.addEventListener('click', button.onClick);
});
