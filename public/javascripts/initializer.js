PdbConnect = ((global) => {
  return {
    init() {
      console.log('connector initialized');
      $('[data-toggle="tooltip"]').tooltip();
      if (this.rewriteLink()) {
        this.generateLink(global.PdbOnsiteConfig.rewriteLinkFn || (v => v));
      }
    },
    hasConfig() {
      return !!global.PdbOnsiteConfig;
    },
    rewriteLink() {
      return this.hasConfig() && global.PdbOnsiteConfig.rewriteLink === true;
    },
    generateLink(f) {
      $('.pdb-keyword-link').each((i, el) => {
        var name = el.getAttribute('data-keyword-name');
        el.setAttribute('href', f(name));
      });
    }
  };
})(this);
