PdbConnect = (() => {
  return {
    init() {
      console.log('connector initialized');
      $(function() {
        $('[data-toggle="tooltip"]').tooltip();
      });
    }
  };
})();
