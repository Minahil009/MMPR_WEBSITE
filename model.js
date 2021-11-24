
(function () {
    var svgModal = {
        showOverlay: $('.icon-show-overlay'),
        closeOverlay: $('#modal-close'),
        modal: $('#modal'),
        svgWrapper: $('#svg-wrapper'),
        pathElement: undefined,
        modalOpen: false,
        iconHovered: false,
        paths: {
            default: $('#svg-path').attr('d'),
            active: $('#svg-wrapper').data('icon-hovered'),
            modalOpen: $('#svg-wrapper').data('modal-open')
        },
        init: function () {
            var s = Snap('#svg');
            svgModal.pathElement = s.select('path');
            this.events();
        },
        events: function () {
            svgModal.showOverlay.on('mouseenter', this.iconHover);
            svgModal.showOverlay.on('mouseleave', this.iconHover);
            svgModal.showOverlay.on('click', this.toggleModal);
            svgModal.closeOverlay.on('click', this.toggleModal);
        },
        iconHover: function (e) {
            e.preventDefault();
            var $this = $(this);
            if (!svgModal.modalOpen) {
                svgModal.pathElement.stop().animate({ 'path': svgModal.iconHovered ? svgModal.paths.default : svgModal.paths.active }, 250, mina.easeout);
                svgModal.iconHovered = !svgModal.iconHovered;
            }
        },
        toggleModal: function (e) {
            e.preventDefault();
            var $this = $(this);
            setTimeout(function () {
                $('body').toggleClass('modal-active');
            }, 100);
            svgModal.pathElement.stop().animate({ 'path': svgModal.paths.modalOpen }, 300, mina.easeout, function () {
                svgModal.pathElement.stop().animate({ 'path': svgModal.modalOpen ? svgModal.paths.active : svgModal.paths.default }, svgModal.modalOpen ? 800 : 300, svgModal.modalOpen ? mina.elastic : mina.easeout);
            });
            svgModal.iconHovered = false;
            svgModal.modalOpen = !svgModal.modalOpen;
        }
    };
    svgModal.init();
}());

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


    google_ad_client = "ca-pub-2783044520727903";
    /* jQuery_demo */
    google_ad_slot = "2780937993";
    google_ad_width = 728;
    google_ad_height = 90;
    //-->