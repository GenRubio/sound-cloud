export const HomePageController = {
  init() {
    this.setListeners();
  },
  setListeners() {
    $(document).on("change", "#content", function (event) {
      HomePageController.loadFormHandler();
    });
  },
  loadFormHandler() {
    $("#home-form").load(View.partials_form);
  },
};
