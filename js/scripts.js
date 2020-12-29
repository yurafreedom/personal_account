/**
 * Mantra Tourus LCC
 * @external $ jQuery
 */

'use strict';

const app = {
  $body  : null,
  $window: null,

  OSName      : null,
  iPad        : false,
  iOS         : false,
  windowsPhone: false,

  months   : {
    en: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'Jule',
      'August',
      'September',
      'Oktober',
      'November',
      'December',
    ],
  },
  daysShort: {
    en: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  },

  countries: [
    ['Afghanistan (‫افغانستان‬‎)', 'af'],
    ['Albania (Shqipëri)', 'al'],
    ['Algeria (‫الجزائر‬‎)', 'dz'],
    ['American Samoa', 'as'],
    ['Andorra', 'ad'],
    ['Angola', 'ao'],
    ['Anguilla', 'ai'],
    ['Antigua and Barbuda', 'ag'],
    ['Argentina', 'ar'],
    ['Armenia (Հայաստան)', 'am'],
    ['Aruba', 'aw'],
    ['Australia', 'au'],
    ['Austria (Österreich)'],
    ['Azerbaijan (Azərbaycan)'],
    ['Bahamas', 'bs'],
    ['Bahrain (‫البحرين‬‎)', 'bh'],
    ['Bangladesh (বাংলাদেশ)', 'bd'],
    ['Barbados', 'bb'],
    ['Belarus (Беларусь)', 'by'],
    ['Belgium (België)', 'be'],
    ['Belize', 'bz'],
    ['Benin (Bénin)', 'bj'],
    ['Bermuda', 'bm'],
    ['Bhutan (འབྲུག)', 'bt'],
    ['Bolivia', 'bo'],
    ['Bosnia and Herzegovina (Босна и Херцеговина)', 'ba'],
    ['Botswana', 'bw'],
    ['Brazil (Brasil)', 'br'],
    ['British Indian Ocean Territory', 'io'],
    ['British Virgin Islands', 'vg'],
    ['Brunei', 'bn'],
    ['Bulgaria (България)', 'bg'],
    ['Burkina Faso', 'bf'],
    ['Burundi (Uburundi)', 'bi'],
    ['Cambodia (កម្ពុជា)', 'kh'],
    ['Cameroon (Cameroun)', 'cm'],
    ['Canada', 'ca'],
    ['Cape Verde (Kabu Verdi)', 'cv'],
    ['Caribbean Netherlands', 'bq'],
    ['Cayman Islands', 'ky'],
    ['Central African Republic (République centrafricaine)', 'cf'],
    ['Chad (Tchad)', 'td'],
    ['Chile', 'cl'],
    ['China (中国)', 'cn'],
    ['Christmas Island', 'cx'],
    ['Cocos (Keeling) Islands', 'cc'],
    ['Colombia', 'co'],
    ['Comoros (‫جزر القمر‬‎)', 'km'],
    ['Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)', 'cd'],
    ['Congo (Republic) (Congo-Brazzaville)', 'cg'],
    ['Cook Islands', 'ck'],
    ['Costa Rica', 'cr'],
    ['Côte d’Ivoire', 'ci'],
    ['Croatia (Hrvatska)', 'hr'],
    ['Cuba', 'cu'],
    ['Curaçao', 'cw'],
    ['Cyprus (Κύπρος)', 'cy'],
    ['Czech Republic (Česká republika)', 'cz'],
    ['Denmark (Danmark)', 'dk'],
    ['Djibouti', 'dj'],
    ['Dominica', 'dm'],
    ['Dominican Republic (República Dominicana)', 'do'],
    ['Ecuador', 'ec'],
    ['Egypt (‫مصر‬‎)', 'eg'],
    ['El Salvador', 'sv'],
    ['Equatorial Guinea (Guinea Ecuatorial)', 'gq'],
    ['Eritrea', 'er'],
    ['Estonia (Eesti)', 'ee'],
    ['Ethiopia', 'et'],
    ['Falkland Islands (Islas Malvinas)', 'fk'],
    ['Faroe Islands (Føroyar)', 'fo'],
    ['Fiji', 'fj'],
    ['Finland (Suomi)', 'fi'],
    ['France', 'fr'],
    ['French Guiana (Guyane française)', 'gf'],
    ['French Polynesia (Polynésie française)', 'pf'],
    ['Gabon', 'ga'],
    ['Gambia', 'gm'],
    ['Georgia (საქართველო)', 'ge'],
    ['Germany (Deutschland)', 'de'],
    ['Ghana (Gaana)', 'gh'],
    ['Gibraltar', 'gi'],
    ['Greece (Ελλάδα)', 'gr'],
    ['Greenland (Kalaallit Nunaat)', 'gl'],
    ['Grenada', 'gd'],
    ['Guadeloupe', 'gp'],
    ['Guam', 'gu'],
    ['Guatemala', 'gt'],
    ['Guernsey', 'gg'],
    ['Guinea (Guinée)', 'gn'],
    ['Guinea-Bissau (Guiné Bissau)', 'gw'],
    ['Guyana', 'gy'],
    ['Haiti', 'ht'],
    ['Honduras', 'hn'],
    ['Hong Kong (香港)', 'hk'],
    ['Hungary (Magyarország)', 'hu'],
    ['Iceland (Ísland)', 'is'],
    ['India (भारत)', 'in'],
    ['Indonesia', 'id'],
    ['Iran (‫ایران‬‎)', 'ir'],
    ['Iraq (‫العراق‬‎)', 'iq'],
    ['Ireland', 'ie'],
    ['Isle of Man', 'im'],
    ['Israel (‫ישראל‬‎)', 'il'],
    ['Italy (Italia)', 'it'],
    ['Jamaica', 'jm'],
    ['Japan (日本)', 'jp'],
    ['Jersey', 'je'],
    ['Jordan (‫الأردن‬‎)', 'jo'],
    ['Kazakhstan (Казахстан)', 'kz'],
    ['Kenya', 'ke'],
    ['Kiribati', 'ki'],
    ['Kosovo', 'xk'],
    ['Kuwait (‫الكويت‬‎)', 'kw'],
    ['Kyrgyzstan (Кыргызстан)', 'kg'],
    ['Laos (ລາວ)', 'la'],
    ['Latvia (Latvija)', 'lv'],
    ['Lebanon (‫لبنان‬‎)', 'lb'],
    ['Lesotho', 'ls'],
    ['Liberia', 'lr'],
    ['Libya (‫ليبيا‬‎)', 'ly'],
    ['Liechtenstein', 'li'],
    ['Lithuania (Lietuva)', 'lt'],
    ['Luxembourg', 'lu'],
    ['Macau (澳門)', 'mo'],
    ['Macedonia (FYROM) (Македонија)', 'mk'],
    ['Madagascar (Madagasikara)', 'mg'],
    ['Malawi', 'mw'],
    ['Malaysia', 'my'],
    ['Maldives', 'mv'],
    ['Mali', 'ml'],
    ['Malta', 'mt'],
    ['Marshall Islands', 'mh'],
    ['Martinique', 'mq'],
    ['Mauritania (‫موريتانيا‬‎)', 'mr'],
    ['Mauritius (Moris)', 'mu'],
    ['Mayotte', 'yt'],
    ['Mexico (México)', 'mx'],
    ['Micronesia', 'fm'],
    ['Moldova (Republica Moldova)', 'md'],
    ['Monaco', 'mc'],
    ['Mongolia (Монгол)', 'mn'],
    ['Montenegro (Crna Gora)', 'me'],
    ['Montserrat', 'ms'],
    ['Morocco (‫المغرب‬‎)', 'ma'],
    ['Mozambique (Moçambique)', 'mz'],
    ['Myanmar (Burma) (မြန်မာ)', 'mm'],
    ['Namibia (Namibië)', 'na'],
    ['Nauru', 'nr'],
    ['Nepal (नेपाल)', 'np'],
    ['Netherlands (Nederland)', 'nl'],
    ['New Caledonia (Nouvelle-Calédonie)', 'nc'],
    ['New Zealand', 'nz'],
    ['Nicaragua', 'ni'],
    ['Niger (Nijar)', 'ne'],
    ['Nigeria', 'ng'],
    ['Niue', 'nu'],
    ['Norfolk Island', 'nf'],
    ['North Korea (조선 민주주의 인민 공화국)', 'kp'],
    ['Northern Mariana Islands', 'mp'],
    ['Norway (Norge)', 'no'],
    ['Oman (‫عُمان‬‎)', 'om'],
    ['Pakistan (‫پاکستان‬‎)', 'pk'],
    ['Palau', 'pw'],
    ['Palestine (‫فلسطين‬‎)', 'ps'],
    ['Panama (Panamá)', 'pa'],
    ['Papua New Guinea', 'pg'],
    ['Paraguay', 'py'],
    ['Peru (Perú)', 'pe'],
    ['Philippines', 'ph'],
    ['Poland (Polska)', 'pl'],
    ['Portugal', 'pt'],
    ['Puerto Rico', 'pr'],
    ['Qatar (‫قطر‬‎)', 'qa'],
    ['Réunion (La Réunion)', 're'],
    ['Romania (România)', 'ro'],
    ['Russia (Россия)', 'ru'],
    ['Rwanda', 'rw'],
    ['Saint Barthélemy', 'bl'],
    ['Saint Helena', 'sh'],
    ['Saint Kitts and Nevis', 'kn'],
    ['Saint Lucia', 'lc'],
    ['Saint Martin (Saint-Martin (partie française))', 'mf'],
    ['Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', 'pm'],
    ['Saint Vincent and the Grenadines', 'vc'],
    ['Samoa', 'ws'],
    ['San Marino', 'sm'],
    ['São Tomé and Príncipe (São Tomé e Príncipe)', 'st'],
    ['Saudi Arabia (‫المملكة العربية السعودية‬‎)', 'sa'],
    ['Senegal (Sénégal)', 'sn'],
    ['Serbia (Србија)', 'rs'],
    ['Seychelles', 'sc'],
    ['Sierra Leone', 'sl'],
    ['Singapore', 'sg'],
    ['Sint Maarten', 'sx'],
    ['Slovakia (Slovensko)', 'sk'],
    ['Slovenia (Slovenija)', 'si'],
    ['Solomon Islands', 'sb'],
    ['Somalia (Soomaaliya)', 'so'],
    ['South Africa', 'za'],
    ['South Korea (대한민국)', 'kr'],
    ['South Sudan (‫جنوب السودان‬‎)'],
    ['Spain (España)', 'es'],
    ['Sri Lanka (ශ්‍රී ලංකාව)', 'lk'],
    ['Sudan (‫السودان‬‎)', 'sd'],
    ['Suriname', 'sr'],
    ['Svalbard and Jan Mayen', 'sj'],
    ['Swaziland', 'sz'],
    ['Sweden (Sverige)', 'se'],
    ['Switzerland (Schweiz)', 'ch'],
    ['Syria (‫سوريا‬‎)', 'sy'],
    ['Taiwan (台灣)', 'tw'],
    ['Tajikistan', 'tj'],
    ['Tanzania', 'tz'],
    ['Thailand (ไทย)', 'th'],
    ['Timor-Leste', 'tl'],
    ['Togo', 'tg'],
    ['Tokelau', 'tk'],
    ['Tonga', 'to'],
    ['Trinidad and Tobago', 'tt'],
    ['Tunisia (‫تونس‬‎)', 'tn'],
    ['Turkey (Türkiye)', 'tr'],
    ['Turkmenistan', 'tm'],
    ['Turks and Caicos Islands', 'tc'],
    ['Tuvalu', 'tv'],
    ['U.S. Virgin Islands', 'vi'],
    ['Uganda', 'ug'],
    ['Ukraine (Україна)', 'ua'],
    ['United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', 'ae'],
    ['United Kingdom', 'gb'],
    ['United States', 'us'],
    ['Uruguay', 'uy'],
    ['Uzbekistan (Oʻzbekiston)', 'uz'],
    ['Vanuatu', 'vu'],
    ['Vatican City (Città del Vaticano)', 'va'],
    ['Venezuela', 've'],
    ['Vietnam (Việt Nam)', 'vn'],
    ['Wallis and Futuna (Wallis-et-Futuna)', 'wf'],
    ['Western Sahara (‫الصحراء الغربية‬‎)', 'eh'],
    ['Yemen (‫اليمن‬‎)', 'ye'],
    ['Zambia', 'zm'],
    ['Zimbabwe', 'zw'],
    ['Åland Islands', 'ax'],
  ],
};

app.init = function () {
  this.$body = $('body');
  this.$window = $(window);
  this.OSName = this.getOS();
  this.detectUserAgent();
};

app.lock = function () {
  $('html, body').addClass('locked');
};

app.unlock = function () {
  $('html, body').removeClass('locked');
};

app.scrollbarWidth = function () {
  const block = $('<div>').css({ 'height': '50px', 'width': '50px' });
  const indicator = $('<div>').css({ 'height': '200px' });

  this.$body.append(block.append(indicator));

  const w1 = $('div', block).innerWidth();
  block.css('overflow-y', 'scroll');

  const w2 = $('div', block).innerWidth();
  $(block).remove();

  return (w1 - w2);
};

app.getOS = function () {
  let userAgent = window.navigator.userAgent;
  let platform = window.navigator.platform;
  let macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  let windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  let iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os = 'Unknown';

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (/Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
};


app.detectUserAgent = function () {
  this.$body.toggleClass('os-windows', this.OSName === 'Windows');
  this.$body.toggleClass('os-ios', this.OSName === 'iOS');

  if (navigator.userAgent.search('Chrome') >= 0) {
    this.$body.addClass('chrome-browser');
  } else if (navigator.userAgent.search('Firefox') >= 0) {
    this.$body.addClass('firefox-browser');
    this.$body.append('<style>.body-margin {margin-right:' + this.scrollbarWidth() + 'px}</style>');
  } else if (navigator.userAgent.search('Safari') >= 0 && navigator.userAgent.search('Chrome') < 0) {
    this.$body.addClass('safari-browser');
  } else if (navigator.userAgent.search('Opera') >= 0) {
    this.$body.addClass('opera-browser');
  }

  this.iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (/IEMobile|Windows Phone/i.test(navigator.userAgent)) {
    this.windowsPhone = true;
  }

  if ((screen.width < 1040) && (screen.height > 1040)) {
    this.iPad = true;
    this.$body.addClass('ipad');
  }

  if (navigator.userAgent.search('Chrome') >= 0) {
    this.$body.addClass('chrome-browser');
  } else if (navigator.userAgent.search('Firefox') >= 0) {
    this.$body.addClass('firefox-browser');
  } else if (navigator.userAgent.search('Safari') >= 0 && navigator.userAgent.search('Chrome') < 0) {
    this.$body.addClass('safari-browser');
  } else if (navigator.userAgent.search('Opera') >= 0) {
    this.$body.addClass('opera-browser');
  }

  //== detect IE
  if (navigator.userAgent.indexOf('MSIE ') > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    this.$body.addClass('ie-browser');
  }

  if (screen.width <= 1040) {
    this.$body.addClass('mobile');
  }
};

app.debounce = function (f, ms) {
  let isCooldown = false;
  return function () {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  };
};

app.throttle = function (func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
};

app.validateEmail = email => /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);

app.zeroNumber = n => (n < 10 ? '0' : '') + n;

app.fixPopupOpen = function () {
  if ((this.iOS === true) || (this.windowsPhone === true)) {
    const scrollTop = $(window).scrollTop();

    this.$body.addClass('pop-up-open');
    this.$body.attr('data-top', scrollTop);
    if (this.windowsPhone === true) this.$body.css('top', scrollTop);

    this.$body.css({
      'top': '-' + scrollTop + 'px',
    });
  }
};

app.fixPopupClose = function () {
  if ((this.iOS === true) || (this.windowsPhone === true)) {
    let scrollTop = this.$body.attr('data-top');
    if (this.windowsPhone === true) scrollTop = $('body').css('top');

    const suffix = scrollTop.match(/\d+/);
    this.$body.removeClass('pop-up-open');
    this.$body.removeAttr('style');

    $('html, body').scrollTop(parseInt(suffix));
  }
};

app.datepicker = function () {
  //== Calendar

  let datePickerOptions = {
    dateFormat : 'd MM yy',
    dayNamesMin: this.daysShort.en,
    monthNames : this.months.en,
    setDate    : 'today',
    firstDay   : 0,
    onSelect   : function(){
      $(this).trigger('onSelect');
      $(this).trigger('change');
      return true;
    }
  };

  $('.js_calendar').parent().each((i, el) => {
    const $datepicker = $(el);
    const $desktopInput = $datepicker.find('.desctop-input');
    const $mobileInput = $datepicker.find('.mobile-input');
    $mobileInput.css({ cursor: 'pointer' });

    let $dayDiv = $datepicker.find('.day');
    let $monthDiv = $datepicker.find('.month');
    let $yearDiv = $datepicker.find('.year');

    //== Calendar Date change
    $desktopInput.on('change', e => {
      const value = $(e.target).val();
      const date = value.split(' ');
      const day = date[0];
      const month = date[1];
      const year = date[2];

      $dayDiv.text(day);
      $monthDiv.text(month);
      $yearDiv.text(year);
    });

    $mobileInput.on('change', e => {
      const value = $(e.target).val();
      const date = value.split('-');
      const day = date[2].replace(/^0+/, '');
      const month = this.months.en[+date[1] - 1];
      const year = date[0];

      $desktopInput.datepicker().datepicker('setDate', (day + ' ' + month + ' ' + year));
      $desktopInput.trigger('change');
    });

    //== Calendar Date init
    let initDate = new Date();
    const dateString = $desktopInput.data('init');
    if (dateString) initDate = new Date(dateString);
    $desktopInput.datepicker(datePickerOptions);
    $desktopInput.datepicker().datepicker('setDate', initDate);
    $desktopInput.trigger('change');
  });
};

app.dropdownMenu = function () {
  //== Dropdown menu
  if (screen.width > 1200 || this.iPad) {

    if (window.innerWidth > 1200) {
      let $elements = $('.dropdown_li');
      $elements.each((i, el) => {
        const $li = $(el);
        const $a = $li.children('a');
        const $ul = $li.children('ul');

        $li.on({
          mouseenter: function () {
            if (window.innerWidth > 1200) {
              $ul.stop(true, true).fadeIn(120);
            } else {
              $ul.stop(true, true).slideDown();
            }
            $a.addClass('hover');
          },
          mouseleave: function () {
            if (window.innerWidth > 1200) {
              $ul.stop(true, true).fadeOut(120);
            } else {
              $ul.stop(true, true).slideUp();
            }
            $a.removeClass('hover');
          },
        });
      });
    }

    if (window.innerWidth <= 1200 && !this.iPad) {
      $('.dropdown_li > a').on('click', function (e) {
        e.preventDefault();
        const $a = $(this);
        const $ul = $a.next('ul');
        $ul.stop(true, true).slideToggle();
        $a.toggleClass('hover');
      });
    }

  }

  if (screen.width <= 1200) {
    $('.dropdown_li > a').on('click', function (e) {
      e.preventDefault();
      const $a = $(this);
      const $ul = $a.next('ul');
      $ul.stop(true, true).slideToggle();
      $a.toggleClass('hover');
    });
  }
};

app.favorites = function () {
  //== Add to favourites button

  $('.fav-button').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('added');

    if ($('.add-to-favorites').length) {
      $('.add-to-favorites .fav-button').toggleClass('added');
    }
  });

  $('.add-to-favorites .fav-button').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('added');

    if ($('.add-to-favorites').length) {
      $('.tour_page_head .fav-button').toggleClass('added');
    }
  });

};

app.footerTransform = function () {
  //== Footer transform

  this.$window.on('resize', () => {
    if (window.innerWidth <= 1000) $('.m_title').addClass('js-column_title');
    if (window.innerWidth > 1000) $('.m_title').removeClass('js-column_title');

    if (this.iPad) {

      const wrap = $('.wrap').innerWidth();
      const windowInnerWidth = this.$window.innerWidth();

      const margin = (windowInnerWidth - wrap) / 2;

      if ($('.main_slider').length) {
        this.$body.addClass('mainpage');

        let $mostPopularTitleWrap = $('.ipad .most_popular .title_wrap');
        $mostPopularTitleWrap.width(wrap);
        $mostPopularTitleWrap.css('margin-left', margin + 'px');
        $('.ipad .tour-slider .tour_item:first-child').css('margin-left', margin + 'px');
        $('.ipad .tour-slider .tour_item:last-child').css('margin-right', margin + 'px');

        let $storiesTitleWrap = $('.ipad .stories .title_wrap');
        $storiesTitleWrap.width(wrap);
        $storiesTitleWrap.css('margin-left', margin + 'px');
        $('.ipad .stries_slider .story_item:first-child').css('margin-left', margin + 'px');
        $('.ipad .stries_slider .story_item:last-child').css('margin-right', margin + 'px');
      }

      if ($('.tour_page_head').length) {
        let $tourPageTopInfo = $('.ipad .tour_page_head .top-info');
        let $tourPageBottomInfo = $('.ipad .tour_page_head .bottom-info');
        $tourPageTopInfo.innerWidth(wrap);
        $tourPageBottomInfo.innerWidth(wrap);
        $tourPageTopInfo.css('margin-left', margin + 'px');
        $tourPageBottomInfo.css('margin-left', margin + 'px');
        $('.ipad .tour_page_head .slider .slide:first-child').css('margin-left', margin + 'px');
        $('.ipad .tour_page_head .slider .slide:last-child').css('margin-right', margin + 'px');
      }

      if ($('.team_item').length) {
        let $aboutTeamHead = $('.about-us-page .team-head');
        $aboutTeamHead.innerWidth(wrap);
        $aboutTeamHead.css('margin-left', margin + 'px');
        $('.ipad .about-us-page .team_item:first-child').css('margin-left', margin + 'px');
        $('.ipad .about-us-page .team_item:last-child').css('margin-right', margin + 'px');
      }
    }
  });

  let $mTitle = $('.m_title');

  if (screen.width <= 1000) {
    $mTitle.addClass('js-column_title');
  }

  $mTitle.on('click', function () {
    const this_title = $(this);
    const thisUl = this_title.next();

    if (this_title.hasClass('js-column_title')) {
      this_title.toggleClass('active');
      thisUl.slideToggle();
    }
  });
};

app.imageShadows = function () {
  //== Beautiful shadow

  $('.js-shadow').each(function () {
    const $this = $(this);
    $this.attr('style', $this.parent().attr('style'));
  });
};

app.mobileMenu = function () {
  //== Mobile menu

  const $mobileBtn = $('#mobile_btn');
  const $menuClose = $('#menu-close');
  const $menuWrap = $('#menu_wrap');

  $mobileBtn.on('click', () => {
    $menuWrap.fadeIn();
    $mobileBtn.addClass('opened');
    $menuClose.addClass('opened');
    this.lock();
    this.fixPopupOpen();
  });

  $menuClose.on('click', () => {
    $mobileBtn.removeClass('opened');
    $menuClose.removeClass('opened');
    $menuWrap.fadeOut();
    this.unlock();
    this.fixPopupClose();
  });
};

app.numberPicker = function () {

  const filterDigits = e => !(e.key.length === 1 && e.key.match(/[^0-9'".]/));
  const limitLength = e => e.target.value.length < 2;

  $('.num_wrap').each((i, el) => {
    const $picker = $(el);
    const $input = $('.js_num', $picker);
    const $buttonMinus = $('.minus', $picker);
    const $buttonPlus = $('.plus', $picker);

    //== Input number only
    $input
      .on('keydown', filterDigits)
      .on('keypress', limitLength);

    //== Plus minus buttons
    $buttonMinus.on('click', () => {
      let value = +$input.val();
      if (value === 1) $input.addClass('zero');
      if (value > 0) $input.val(value - 1);
      $input.trigger('change');
    });

    $buttonPlus.on('click', () => {
      let value = +$input.val();
      if (value === 0) $input.removeClass('zero');
      if (value < 99) $input.val(+$input.val() + 1);
      $input.trigger('change');
    });
  });

};

app.page404 = function () {
  //== 404 page effect

  if (!$('.page_404').length) return;

  const torch = document.querySelectorAll('.cover')[0];
  const room = document.querySelectorAll('.room')[0];
  const background = 'radial-gradient(circle at %%, rgba(255,255,255, .8) 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.85) 100%)';

  function handleMousemove(e) {
    torch.style.background = background.replace('%%', e.offsetX + 'px ' + e.offsetY + 'px');
  }

  function handleMouseover() {
    room.addEventListener('mousemove', handleMousemove);
  }

  function handleMouseout() {
    torch.style.background = 'rgba(0,0,0,0.85)';
    room.removeEventListener('mousemove');
  }

  room.addEventListener('mousemove', handleMouseover);
  room.addEventListener('mouseleave', handleMouseout);

};

app.pageGallery = function () {
  //== Animation images on Gallery page

  const scrollText = function ($elmt) {
    const scrollDiv = $elmt.find('div.images .scroll'),
      scrollDivWidth = scrollDiv.width(),
      imagesDiv = $elmt.find('div.images'),
      imagesDivWidth = imagesDiv.width(),
      difference = scrollDivWidth - imagesDivWidth;

    const left = scrollDiv.position().left - 1;
    //left = -left > difference ? $elmt.find('div.images .scroll').width() : left;
    if (left <= -(difference)) {
      scrollDiv.css({
        left: -(difference),
      });
    } else {
      scrollDiv.css({
        left: left,
      });
    }
  };

  if (screen.width > 1040 || this.iPad) {
    let scroll_text;
    $('.gallery-item').on({
      mouseenter: function () {
        const $elmt = $(this);
        scroll_text = setInterval(function () { scrollText($elmt); }, 20);
      },
      mouseleave: function () {
        clearInterval(scroll_text);
      },
    });
  }
};

app.pageStories = function () {
  //== Story Single
  if (!$('#stories_page').length) return;

  $('#stories_box .item.active').next().addClass('next');
  var storiesCount = $('#stories_box .item').length;
  $('#stories-counter .all').text(storiesCount - 1);

  $('#stories_box .item').each(function () {
    var thisImg = $(this).attr('data-blur-bg');
    $('#stories_bg').append('<img src=\'' + thisImg + '\'>');
    $('#stories_box .dots ul').append('<li></li>');
  });

  $('#stories_box .item:last-child').addClass('active');
  $('#stories_box .dots ul li:first-child').addClass('active');

  function storiesTurn() {

    var thisArrow = $(this),
      activeStory = $('#stories_box .item.active'),
      nextStory = activeStory.prev(),
      nextStoryBg = nextStory.attr('data-blur-bg'),
      prevStory = activeStory.next(),
      prevStoryBg = prevStory.attr('data-blur-bg'),
      count = +($('#stories-counter .this').text());

    if (thisArrow.hasClass('next')) {
      if (!activeStory.is(':first-child')) {
        $('#stories_bg img[src="' + nextStoryBg + '"]').fadeIn();
        $('#stories_bg img[src!="' + nextStoryBg + '"]').fadeOut();
        prevStory.removeClass('prev');
        activeStory.addClass('seen');
        activeStory.addClass('prev');
        activeStory.removeClass('active');
        nextStory.removeClass('next');
        nextStory.addClass('active');
        nextStory.prev().addClass('next');

        $('#stories-counter .this').text(count + 1);
        $('#stories_box .dots ul li').removeClass('active');
        $('#stories_box .dots ul li').eq(count).addClass('active');
      }

      if ($('#stories_box .arrow.prev').hasClass('disabled')) {
        $('#stories_box .arrow.prev').removeClass('disabled');
        $('#stories_box .arrow.prev').show();
      }

      if (nextStory.is(':first-child')) {
        $('#stories_box .arrow.next').addClass('disabled');
        $('#stories_box .arrow.next').hide();
        $('#stories-counter').hide();
      }
    }

    if (thisArrow.hasClass('prev')) {
      if (!activeStory.is(':last-child')) {
        $('#stories_bg img[src="' + prevStoryBg + '"]').fadeIn();
        $('#stories_bg img[src!="' + prevStoryBg + '"]').fadeOut();

        activeStory.removeClass('active');
        nextStory.removeClass('next');
        activeStory.addClass('next');
        prevStory.removeClass('seen');
        prevStory.removeClass('prev');
        prevStory.next().addClass('prev');
        prevStory.addClass('active');

        $('#stories-counter .this').text(count - 1);
        $('#stories_box .dots ul li').removeClass('active');
        $('#stories_box .dots ul li').eq(count - 2).addClass('active');
      }

      if ($('#stories_box .arrow.next').hasClass('disabled')) {
        $('#stories_box .arrow.next').removeClass('disabled');
        $('#stories_box .arrow.next').show();
        $('#stories-counter').show();
      }

      if (prevStory.is(':last-child')) {
        $('#stories_box .arrow.prev').addClass('disabled');
        $('#stories_box .arrow.prev').hide();
      }
    }
  }

  $('#stories_box .arrow').on('click', storiesTurn);

  var myElement = document.getElementById('stories_items');
  var mc = new Hammer(myElement);

  mc.on('swipeleft swiperight', function (ev) {
    var activeStory = $('#stories_box .item.active'),
      nextStory = activeStory.prev(),
      nextStoryBg = nextStory.attr('data-blur-bg'),
      prevStory = activeStory.next(),
      prevStoryBg = prevStory.attr('data-blur-bg'),
      count = +($('#stories-counter .this').text());

    if (ev.type == 'swiperight') {
      if (!activeStory.is(':last-child')) {
        $('#stories_bg img[src="' + prevStoryBg + '"]').fadeIn();
        $('#stories_bg img[src!="' + prevStoryBg + '"]').fadeOut();

        activeStory.removeClass('active');
        nextStory.removeClass('next');
        activeStory.addClass('next');
        prevStory.removeClass('seen');
        prevStory.removeClass('prev');
        prevStory.next().addClass('prev');
        prevStory.addClass('active');

        $('#stories-counter .this').text(count - 1);
        $('#stories_box .dots ul li').removeClass('active');
        $('#stories_box .dots ul li').eq(count - 2).addClass('active');
      }

      if ($('#stories_box .arrow.next').hasClass('disabled')) {
        $('#stories_box .arrow.next').removeClass('disabled');
        $('#stories_box .arrow.next').show();
        $('#stories-counter').show();
      }

      if (prevStory.is(':last-child')) {
        $('#stories_box .arrow.prev').addClass('disabled');
        $('#stories_box .arrow.prev').hide();
      }
    }

    if (ev.type == 'swipeleft') {
      if (!activeStory.is(':first-child')) {
        $('#stories_bg img[src="' + nextStoryBg + '"]').fadeIn();
        $('#stories_bg img[src!="' + nextStoryBg + '"]').fadeOut();
        prevStory.removeClass('prev');
        activeStory.addClass('seen');
        activeStory.addClass('prev');
        activeStory.removeClass('active');
        nextStory.removeClass('next');
        nextStory.addClass('active');
        nextStory.prev().addClass('next');

        $('#stories-counter .this').text(count + 1);
        $('#stories_box .dots ul li').removeClass('active');
        $('#stories_box .dots ul li').eq(count).addClass('active');
      }

      if ($('#stories_box .arrow.prev').hasClass('disabled')) {
        $('#stories_box .arrow.prev').removeClass('disabled');
        $('#stories_box .arrow.prev').show();
      }

      if (nextStory.is(':first-child')) {
        $('#stories_box .arrow.next').addClass('disabled');
        $('#stories_box .arrow.next').hide();
        $('#stories-counter').hide();
      }
    }
  });
};

app.pageTour = function () {
  //== Tour Page Single Sidebar

  const sections = $('.js-section');
  const nav = $('#sidebar-navigation');
  // const nav_height = nav.outerHeight();

  this.$window.on('scroll', function () {
    const cur_pos = $(this).scrollTop();

    sections.each(function () {
      const top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });

  nav.find('a').on('click', function () {
    const $el = $(this),
      id = $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top,
    }, 500);

    return false;
  });


  $(window).on('resize', () => {
    if ($('.tour_page').length) {

      const $sidebar = $('.sidebar');
      const sidebarOffset = $sidebar.offset().top;
      const page_content_top = $('.tour_page_body .wrap_float').offset().top;


      $(window).on('scroll', function () {
        const sidebarHeight = $sidebar.outerHeight();
        const page_content_Height = $('.tour_page_body .wrap_float').outerHeight();

        const w_top = $(window).scrollTop();
        if ((w_top > sidebarOffset) && (!$sidebar.hasClass('fixed'))) {
          $sidebar.addClass('fixed');
        }

        if (w_top <= sidebarOffset) {
          $sidebar.removeClass('fixed');
        }

        if (w_top > ((page_content_top + page_content_Height) - sidebarHeight)) {
          $sidebar.addClass('bottom');
        }

        if (w_top <= ((page_content_top + page_content_Height) - sidebarHeight)) {
          $sidebar.removeClass('bottom');
        }
      });
    }

    if (window.innerWidth <= 1200) {
      this.$body.addClass('desctop-min');
    }
  });
};

app.accordionProgramm = function () {
  //== Programm accordion
  $('#programm-days .day_item').each((i, el) => {
    const $handler = $('.day_item-head', el);
    const $body = $('.day_item-body', el);
    $handler.on('click', () => {
      $handler.toggleClass('active');
      $body.slideToggle();
    });
  });
};

app.rating = function () {
  //== User rating

  $('.user-rating .star').each((i, el) => {
    const $star = $(el);
    const $block = $star.parent('.stars');
    const index = $star.index();

    $star.on({
      mouseenter: function () {
        $block.children('.star').removeClass('filled');
        $block.children('.star').slice(0, index + 1).addClass('filled');
      },

      mouseleave: function () {
        $block.children('.star').removeClass('filled');
      },

      click: function (e) {
        e.preventDefault();
        $block.children('.star').slice(0, index + 1).addClass('selected');
      },
    });
  });
};

app.searchPanel = function () {
  //== Search Popup

  let $modalSearch = $('#modal_search');

  $('.search_btn').on('click', e => {
    e.preventDefault();
    $modalSearch.fadeIn();
    this.lock();
    this.fixPopupOpen();
  });

  $('.close', $modalSearch).on('click', e => {
    e.preventDefault();
    $modalSearch.fadeOut();
    this.unlock();
    this.fixPopupClose();
  });

};

app.selectElements = function () {
  //== Select change

  $('.select_wrap select').on('change', function () {
    $(this).addClass('selected');
  });

};

app.setMaxHeight = function () {
  //== TODO: Здесь нужно использовать matchMedia
  if (screen.width <= 1040) {
    const $helper = $('<div>');
    $helper.css({
      position: 'fixed',
      top     : 0,
      bottom  : 0,
      left    : 0,
      right   : 0,
      zIndex  : -10,
    });
    $helper.appendTo(this.$body);
    const viewportHeight = $helper.innerHeight();
    $helper.remove();
    $('.js_height').innerHeight(viewportHeight);
  }
};

app.initSliders = function () {
  //== Initialization all sliders
  this.initLightGallery('.lightgallery');
  this.initMainSlider('.main_slider');
  this.initBlogSlider('#blog-slider');
  this.initStoriesSlider('#stories-slider');
  this.initTeamSlider('#team_slider');
  this.initOfficeSlider('#office_slider');
  this.initTourHeadSlider('#tour-head-slider');
  this.initTourSlider('#tour-slider');
  this.initStoriesSlider2('#stries_slider');
};

app.initLightGallery = function (selector) {
  //== LightGallery
  $(selector).lightGallery({
    mode   : 'lg-slide-circular',
    counter: false,
  });
};

app.initMainSlider = function (selector) {
  //== Mainpage slider
  const $sliderContainer = $(selector);
  $('.slider_wrap', $sliderContainer).slick({
    arrows        : true,
    dots          : false,
    slidesToShow  : 1,
    slidesToScroll: 1,
    infinite      : true,
    swipe         : true,
    fade          : true,
    cssEase       : 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100,
    touchMove     : true,
    draggable     : true,
    autoplay      : true,
    pauseOnHover  : true,
    speed         : 500,
    autoplaySpeed : 8000,
    prevArrow     : $('.arrow.prev', $sliderContainer),
    nextArrow     : $('.arrow.next, .next_title', $sliderContainer),
  });
};

app.initBlogSlider = function (selector) {
  //== Blog Gallery
  const $sliderContainer = $(selector);
  if (!$sliderContainer.length) return;

  $('.slider_top', $sliderContainer).slick({
    slidesToShow  : 1,
    slidesToScroll: 1,
    arrows        : true,
    dots          : false,
    fade          : false,
    variableWidth : true,
    infinite      : true,
    asNavFor      : selector + ' .slider_bottom',
    prevArrow     : $('.arrow.prev', $sliderContainer),
    nextArrow     : $('.arrow.next', $sliderContainer),
    responsive    : [
      {
        breakpoint: 1000,
        settings  : { variableWidth: false, slidesToShow: 1 },
      },
    ],
  });

  $('.slider_bottom', $sliderContainer).slick({
    slidesToShow  : 5,
    slidesToScroll: 1,
    asNavFor      : selector + ' .slider_top',
    dots          : false,
    variableWidth : true,
    centerMode    : false,
    infinite      : true,
    focusOnSelect : true,
    responsive    : [
      {
        breakpoint: 1200,
        settings  : { slidesToShow: 3 },
      },
      {
        breakpoint: 1000,
        settings  : { variableWidth: false, slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings  : { variableWidth: false, slidesToShow: 2 },
      },
    ],
  });
};

app.initStoriesSlider = function (selector) {
  //== Stories slider
  $(selector).slick({
    arrows        : true,
    dots          : false,
    slidesToShow  : 1,
    slidesToScroll: 1,
    infinite      : true,
    swipe         : true,
    fade          : true,
    touchMove     : true,
    draggable     : true,
    autoplay      : true,
    pauseOnHover  : true,
    speed         : 800,
    autoplaySpeed : 8000,
    prevArrow     : $('.stories .arrow.prev'),
    nextArrow     : $('.stories .arrow.next'),
  });
};

app.initTeamSlider = function (selector) {
  //== Team slider
  let $sliderContainer = $(selector);
  if (!$sliderContainer.length || screen.width <= 1040 || this.iPad) return;
  $sliderContainer.slick({
    arrows        : true,
    dots          : false,
    slidesToShow  : 3,
    slidesToScroll: 1,
    infinite      : true,
    swipe         : true,
    fade          : false,
    touchMove     : true,
    draggable     : true,
    autoplay      : true,
    pauseOnHover  : true,
    variableWidth : true,
    speed         : 800,
    autoplaySpeed : 8000,
    prevArrow     : $('#team_arrows .arrow.prev'),
    nextArrow     : $('#team_arrows .arrow.next'),
  });
};

app.initOfficeSlider = function (selector) {
  //== Office slider
  $(selector).slick({
    arrows        : true,
    dots          : false,
    slidesToShow  : 1,
    slidesToScroll: 1,
    infinite      : true,
    swipe         : true,
    fade          : false,
    touchMove     : true,
    draggable     : true,
    autoplay      : true,
    pauseOnHover  : true,
    speed         : 800,
    autoplaySpeed : 8000,
    prevArrow     : $('#office_arrows .arrow.prev'),
    nextArrow     : $('#office_arrows .arrow.next'),
  });
};

app.initTourHeadSlider = function (selector) {
  //== Tour page Fallery slider
  let $sliderContainer = $(selector);
  if (!$sliderContainer.length || screen.width <= 1040 || this.iPad) return;

  $sliderContainer.slick({
    arrows        : true,
    dots          : false,
    slidesToShow  : 3,
    slidesToScroll: 1,
    infinite      : false,
    swipe         : true,
    fade          : false,
    touchMove     : true,
    draggable     : true,
    autoplay      : false,
    variableWidth : true,
    pauseOnHover  : true,
    speed         : 800,
    autoplaySpeed : 8000,
    prevArrow     : $('#tour-head-slider-arrows .arrow.prev'),
    nextArrow     : $('#tour-head-slider-arrows .arrow.next'),
  });
};

app.initTourSlider = function (selector) {
  //== Tour slider
  let $sliderContainer = $(selector);
  if (!$sliderContainer.length || screen.width <= 1040 || this.iPad) return;
  $sliderContainer.slick({
    arrows        : true,
    dots          : false,
    slidesToShow  : 2,
    slidesToScroll: 1,
    infinite      : true,
    swipe         : true,
    fade          : false,
    variableWidth : true,
    pauseOnHover  : true,
    touchMove     : true,
    draggable     : true,
    autoplay      : true,
    speed         : 600,
    autoplaySpeed : 8000,
    prevArrow     : $('.most_popular .arrow.prev'),
    nextArrow     : $('.most_popular .arrow.next'),
    responsive    : [
      {
        breakpoint: 1366,
        settings  : { touchMove: true },
      },
      {
        breakpoint: 640,
        settings  : { slidesToShow: 1, slidesToScroll: 1, variableWidth: false },
      },
    ],
  });
};

app.initStoriesSlider2 = function (selector) {
  //Stories slider========================/
  let $sliderContainer = $(selector);
  if (!$sliderContainer.length || screen.width <= 1040 || this.iPad) return;
  $sliderContainer.slick({
    arrows        : true,
    dots          : false,
    slidesToShow  : 5,
    slidesToScroll: 1,
    infinite      : true,
    swipe         : true,
    fade          : false,
    variableWidth : true,
    pauseOnHover  : true,
    touchMove     : true,
    draggable     : true,
    autoplay      : true,
    speed         : 500,
    autoplaySpeed : 8000,
    prevArrow     : $('.stories .arrow.prev'),
    nextArrow     : $('.stories .arrow.next'),
  });
};

app.tourOrder = function () {
  const $header = $('#head');
  const $hInputCheckIn = $('.js-date-check-in', $header);
  const $hInputCheckOut = $('.js-date-check-out', $header);
  const $hCountDays = $('.js-count-days', $header);
  const $hInputCountAdalt = $('.js-count-adalt', $header);
  const $hInputCountChildren = $('.js-count-children', $header);
  const $hTourCost = $('.js-tour-cost');
  const $popup = $('#book-now');

  if (!$hInputCheckIn.length
    || !$hInputCheckOut.length
    || !$hInputCountAdalt.length
    || !$hInputCountChildren.length
  ) {
    return;
  }

  const tourDuration = (+window['TOUR_DURATION'] || 7) - 1;

  console.log({ tourDuration });

  const priceAdalt = $hInputCountAdalt.data('price') || 2000;
  const priceChildren = $hInputCountAdalt.data('price') || 1000;

  const getCountDays = () => {
    const dateStart = $hInputCheckIn.datepicker().datepicker('getDate');
    const dateEnd = $hInputCheckOut.datepicker().datepicker('getDate');
    const diff = Math.ceil(Math.abs(dateEnd.getTime() - dateStart.getTime()) / (1000 * 3600 * 24));
    return {
      days  : diff + 1,
      nights: diff,
    };
  };

  const updateCountDays = () => {
    const count = getCountDays();
    if ($hCountDays.length) {
      $hCountDays.find('.count-days').text(count.days);
      $hCountDays.find('.count-nights').text(count.nights);
    }
  };

  const updateDate = ($source, $target) => {
    const d = $source.datepicker().datepicker('getDate');

    $target.find('.day').text(this.zeroNumber(d.getDate()));
    $target.find('.month').text(this.months.en[d.getMonth()]);
    $target.find('.year').text(d.getFullYear());
  };

  const updateCost = () => {
    if ($hTourCost.length) {
      const cost = $hInputCountAdalt.val() * priceAdalt + $hInputCountChildren.val() * priceChildren;
      $hTourCost.text(cost);
      localStorage.setItem('app-count-adult', $hInputCountAdalt.val());
      localStorage.setItem('app-count-children', $hInputCountChildren.val());
      localStorage.setItem('app-tour-cost', cost.toString());
    }
  };


  let manualChange = false;
  $hInputCheckIn.on('change', () => {
    console.log('in change');
    updateCountDays();
    const dateStart = $hInputCheckIn.datepicker().datepicker('getDate');
    localStorage.setItem('app-tour-check-in', dateStart.toString());
  });
  $hInputCheckOut.on('change', () => {
    console.log('out change');
    updateCountDays();
    const dateEnd = $hInputCheckOut.datepicker().datepicker('getDate');
    localStorage.setItem('app-tour-check-out', dateEnd.toString());
  });
  $hInputCheckIn.on('onSelect', e=>{
    console.log('onSelect in', e);
    const dateStart = $hInputCheckIn.datepicker().datepicker('getDate');
    const dateEnd = new Date((dateStart.getTime() / 1000 + 3600 * 24 * tourDuration) * 1000);
    $hInputCheckOut.datepicker().datepicker('setDate', dateEnd);
    setTimeout(() => $hInputCheckOut.trigger('change'), 50);
  });
  $hInputCheckOut.on('onSelect', e=>{
    console.log('onSelect out', e);
    const dateEnd = $hInputCheckOut.datepicker().datepicker('getDate');
    const dateStart = new Date((dateEnd.getTime() / 1000 - 3600 * 24 * tourDuration) * 1000);
    $hInputCheckIn.datepicker().datepicker('setDate', dateStart);
    setTimeout(() => $hInputCheckIn.trigger('change'), 50);
  });

  $hInputCountAdalt.on('change', () => { updateCost(); });
  $hInputCountChildren.on('change', () => { updateCost(); });

  $popup.on('open', () => {
    const $countAdalt = $('.js-count-adalt', $popup);
    const $countChildren = $('.js-count-children', $popup);
    const $checkIn = $('.js-date-check-in', $popup);
    const $checkOut = $('.js-date-check-out', $popup);

    $countAdalt.text($hInputCountAdalt.val());
    $countChildren.text($hInputCountChildren.val());
    updateDate($hInputCheckIn, $checkIn);
    updateDate($hInputCheckOut, $checkOut);
  });

  updateCountDays();
  updateCost();

  let today = new Date();
  let start = new Date((today.getTime() / 1000 + 3600 * 24 * (1)) * 1000);
  let end = new Date((today.getTime() / 1000 + 3600 * 24 * (tourDuration + 1)) * 1000);
  $hInputCheckIn.datepicker('option', 'minDate', start);
  $hInputCheckOut.datepicker('option', 'minDate', end);

  // todo temp
  const dateStart = $hInputCheckIn.datepicker().datepicker('getDate');
  const dateEnd = $hInputCheckOut.datepicker().datepicker('getDate');
  localStorage.setItem('app-price-adalt', priceAdalt.toString());
  localStorage.setItem('app-price-children', priceChildren.toString());
  localStorage.setItem('app-tour-check-in', dateStart.toString());
  localStorage.setItem('app-tour-check-out', dateEnd.toString());
};

/*!
 * Main code
 */

$(function () {

  app.init();
  app.initSliders();
  app.accordionProgramm();
  app.favorites();
  app.imageShadows();
  app.datepicker();
  app.numberPicker();
  app.setMaxHeight();
  app.selectElements();
  app.searchPanel();
  app.footerTransform();
  app.dropdownMenu();
  app.mobileMenu();
  app.rating();
  app.tourOrder();

  app.pageStories();
  app.pageTour();
  app.pageGallery();
  app.page404();

  app.$window.trigger('resize');

});

/*! Legacy code
///////////////////////////////////////////////////////////////////*/
$(document).ready(function () {
  /*=============================================*
   *                                             *
   * Правая панель                               *
   *                                             *
   *=============================================*/

  const panel = {
    registration     : '#registration',
    emailVerification: '#email-verification',
    otpVerification  : '#otp-verification',
    regComplete      : '#contact-us-success',
    bookNow          : '#book-now',
  };

  const $overlay = $('#overlay');

  function showPanel(panelId) {
    const $popup = $(panelId);
    $('.popup').not($popup).removeClass('opened');
    $popup.addClass('opened');
    $popup.trigger('open');
    $overlay.fadeIn(100);
    $('html, body').addClass('locked');
    $('body').addClass('body-margin');
  }

  function swithPanelTo(panelId) {
    $('.popup').removeClass('opened');
    $(panelId).addClass('opened');
  }


  //Usermenu ========================/
  $('#userlink').on('click', function (e) {
    e.preventDefault();
    $('#usermenu').fadeToggle(100);
  });

  $(document).on('mouseup', function (e) {
    const div = $('#userblock');
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      $('#usermenu').fadeOut(100);
    }
  });
  //Usermenu ========================/


  //Popup open ========================/
  $('.js-popup-open').on('click', function (e) {
    e.preventDefault();
    const thisHref = $(this).attr('data-href');
    showPanel(thisHref);
    // var popup = $(thisHref);
    //
    // $('.popup').not(popup).removeClass('opened');
    // popup.addClass('opened');
    // $('#overlay').fadeIn(100);
    // $('html, body').addClass('locked');
    // $('body').addClass('body-margin');
  });

  $('.popup .close').on('click', function () {
    const thisParent = $(this).parent('.popup');

    thisParent.removeClass('opened');

    $overlay.fadeOut(100);
    $('html, body').removeClass('locked');
    $('body').removeClass('body-margin');
  });

  $overlay.on('click', function () {
    $('.popup').removeClass('opened');
    $overlay.fadeOut(100);
    $('html, body').removeClass('locked');
    $('body').removeClass('body-margin');
  });

  //Popup open ========================/

  function sendCompleteEmail() {
    const $form = $(panel.registration + ' form');
    const iti = $form.find('[name="phone"]').data('_iti');

    // noinspection JSUnresolvedFunction
    $.ajax({
      url   : 'emailverify.php',
      method: 'post',
      data  : {
        a          : 'completeReg',
        email      : $form.find('[name="email"]').val(),
        phone      : iti.getNumber(),
        salutation : $form.find('[name="salutation"]').val(),
        firstname  : $form.find('[name="firstname"]').val(),
        lastname   : $form.find('[name="lastname"]').val(),
        birth_date : $form.find('[name="birth_date"]').val(),
        birth_month: $form.find('[name="birth_month"]').val(),
        birth_year : $form.find('[name="birth_year"]').val(),
      },
    });
  }

  //Select ========================/
  $('.select-wrapper select').on('change', function () {
    $(this).addClass('selected');
    $(this).find('option.placeholder').remove();
  });

  // Success form ========================/
  $('.js-submit').on('click', function (e) {
    e.preventDefault();
    $('.popup').removeClass('opened');
    $('#email-verification').addClass('opened');
    // $("#contact-us-success").addClass("opened");
  });

  // Submit email verifycation code ========================/
  $(panel.emailVerification + ' form').on('submit', function (e) {
    e.preventDefault();
    let panelKey = panel.registration;
    if (window['sourcePanel']) panelKey = window.sourcePanel;

    // noinspection JSCheckFunctionSignatures
    $.ajax({
      url     : 'emailverify.php',
      method  : 'post',
      dataType: 'json',
      data    : {
        a    : 'checkCode',
        email: $(panelKey + ' form').find('[name="email"]').val(),
        code : this.elements.code.value,
      },
    })
      .done(function (data) {
        if (!data.status) {
          alert(data.message);
          return;
        }
        const iti = $(panelKey + ' form').find('[name="phone"]').data('_iti');
        $(panel.emailVerification + ' form').find('[type="submit"]').prop('disabled', true);
        // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
        $.ajax({
          url   : 'emailverify.php',
          method: 'post',
          data  : {
            a    : 'sendSms',
            phone: iti.getNumber(),
          },
        })
          .done(function () {
            swithPanelTo(panel.otpVerification);
          })
          .fail(function (err, status, e) {
            console.log('ERR', { err, status, e });
            alert(err.status + ' ' + err.statusText);
          });

      })
      .fail(function (err, status, e) {
        console.log('ERR', { err, status, e });
        alert(err.status + ' ' + err.statusText + '\n' + e);
      });
  });

  // Success form ========================/
  $(panel.otpVerification + ' form').on('submit', function (e) {
    e.preventDefault();
    let panelKey = panel.registration;
    if (window['sourcePanel']) panelKey = window.sourcePanel;

    const iti = $(panelKey + ' form').find('[name="phone"]').data('_iti');
    // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
    $.ajax({
      url     : 'emailverify.php',
      method  : 'post',
      dataType: 'json',
      data    : {
        a    : 'checkSms',
        phone: iti.getNumber(),
        code : this.elements.code.value,
      },
    })
      .done(function (data) {
        if (!data.status) {
          alert(data.message);
          return;
        }
        if (window['nextPage']) {
          location.href = window['nextPage'];
        } else {
          swithPanelTo(panel.regComplete);
          sendCompleteEmail();
        }
      })
      .fail(function (err, status, e) {
        console.log('ERR', { err, status, e });
        alert(err.status + ' ' + err.statusText + '\n' + e);
      });
  });

  //Success form ========================/
  const form = document.querySelector('.form');
  // const validateBtn = form.querySelector('.validateBtn');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
  });

  //Registration form ========================/
  const regFormRules = {
    firstname  : { required: true },
    lastname   : { required: true },
    birth_date : { select: true },
    birth_month: { select: true },
    birth_year : { select: true },
    email      : { required: true, email: true },
    phone      : { required: true },
    agree      : { required: true },
  };
  let regFormMessages = {
    email: 'Please check is email typed correctly',
    agree: 'Please agree to the Terms of use and Privacy notice',
  };

  if ($.validator) {

    $.validator.addMethod('select', function (value) {
      return value !== '-1';
    });

    $.validator.addMethod('tel', function (value, element) {
      let iti = $(element).data('_iti');
      // noinspection JSUnresolvedFunction
      return iti.isValidNumber();
    });

    $('.js-reg-form-submit').each(function () {
      let $form = $(this);
      $form.attr('novalidate', 'novalidate');
      $form.validate({
        onsubmit      : true,
        rules         : regFormRules,
        messages      : regFormMessages,
        showErrors    : function () {
          let numberOfInvalids = this.numberOfInvalids();
          if (numberOfInvalids) {
            $form.find('.errors-summary').html('Your form contains '
              + numberOfInvalids
              + ' errors. Please fill in all fields.');
          } else {
            $form.find('.errors-summary').empty();
          }
          this.defaultShowErrors();
        },
        errorPlacement: function (error, element) {
          if (element.hasClass('check')) {
            error.appendTo($form.find('.agree-error-box'));
          }
          if (element.hasClass('email') && element.val()) {
            error.appendTo(element.parent('.form-row'));
          }
        },
        submitHandler : function () {
          // noinspection JSCheckFunctionSignatures
          $.ajax({
            url   : 'emailverify.php',
            method: 'post',
            data  : {
              a    : 'sendCode',
              email: $form.find('[name="email"]').val(),
            },
          })
            .done(function () {
              swithPanelTo(panel.emailVerification);
            })
            .fail(function (err, status, e) {
              console.log('ERR', { err, status, e });
              alert(err.status + ' ' + err.statusText);
            });
        },
      });
    });
  }
  //Intl phone number ========================/
  $('.intl-phone-number').each(function () {
    this.addEventListener('input', function () { this.value = this.value.replace(/\D/g, ''); });
    // const errorMap = ['Invalid number', 'Invalid country code', 'Too short', 'Too long', 'Invalid number'];

    const iti = intlTelInput(this, {
      utilsScript       : './vendor/intl-tel-input/js/utils.js',
      separateDialCode  : true,
      preferredCountries: [
        // 'us',
        // 'ru',
        'ae',
        'sa',
        'kw',
        'bh',
        'om',
        'qa',
        'cy',
        'gr',
        'eg',
        'lb',
        'jo',
        'sy',
        'iq',
      ],
    });

    $(this).data('_iti', iti);
  });


  //== BOOK NOW

  function bookNowForm(onSubmit) {
    $('.js-form-book-now').each(function () {
      let $form = $(this);
      $form.attr('novalidate', 'novalidate');
      $form.validate({
        onsubmit      : true,
        rules         : regFormRules,
        messages      : regFormMessages,
        showErrors    : function () {
          let numberOfInvalids = this.numberOfInvalids();
          if (numberOfInvalids) {
            $form.find('.errors-summary').html('Your form contains '
              + numberOfInvalids
              + ' errors. Please fill in all fields.');
          } else {
            $form.find('.errors-summary').empty();
          }
          this.defaultShowErrors();
        },
        errorPlacement: function (error, element) {
          if (element.hasClass('check')) {
            error.appendTo($form.find('.agree-error-box'));
          }
          if (element.hasClass('email') && element.val()) {
            error.appendTo(element.parent('.form-row'));
          }
        },
        submitHandler : function () {
          onSubmit($form);
        },
      });
    });
  }

  function sendCode($form, onComplete) {
    // noinspection JSCheckFunctionSignatures
    $.ajax({
      url   : 'emailverify.php',
      method: 'post',
      data  : {
        a    : 'sendCode',
        email: $form.find('[name="email"]').val(),
      },
    })
      .done(function () {
        onComplete();
      })
      .fail(function (err, status, e) {
        console.log('ERR', { err, status, e });
        alert(err.status + ' ' + err.statusText);
      });
  }

  bookNowForm(function ($form) {
    sendCode($form, function () {
      swithPanelTo(panel.emailVerification);
      window.nextPage = 'personalapplicationform.html';
      window.sourcePanel = panel.bookNow;
    });
  });

  const countAdult = localStorage.getItem('app-count-adult');
  const countChildren = localStorage.getItem('app-count-children');
  const countTourCost = localStorage.getItem('app-tour-cost');
  const countPriceAdult = localStorage.getItem('app-price-adalt');
  const countPriceChildren = localStorage.getItem('app-price-children');
  const countCheckIn = localStorage.getItem('app-tour-check-in');
  const countCheckOut = localStorage.getItem('app-tour-check-out');

  if (countAdult !== null) $('.js-personal-adalt').val(countAdult);
  if (countChildren !== null) $('.js-personal-children').val(countChildren);
  if (countTourCost !== null) $('.js-personal-cost').text(countTourCost);

  $('.js-personal-adalt').on('change', function(){
    const cost = $('.js-personal-adalt').val() * countPriceAdult + $('.js-personal-children').val() * countPriceChildren;
    $('.js-personal-cost').text(cost);
    localStorage.setItem('app-count-adult', $('.js-personal-adalt').val());
    localStorage.setItem('app-count-children', $('.js-personal-children').val());
    localStorage.setItem('app-tour-cost', cost.toString());
  });
  $('.js-personal-children').on('change', function(){
    const cost = $('.js-personal-adalt').val() * countPriceAdult + $('.js-personal-children').val() * countPriceChildren;
    $('.js-personal-cost').text(cost);
    localStorage.setItem('app-count-adult', $('.js-personal-adalt').val());
    localStorage.setItem('app-count-children', $('.js-personal-children').val());
    localStorage.setItem('app-tour-cost', cost.toString());
  });
  //== DEBUG

  // showPanel(panel.registration);
  // showPanel(panel.bookNow);
  // swithPanelTo(panel.regComplete);
});


(function(w, d, s, h, id) {
    w.roistatProjectId = id; w.roistatHost = h;
    var p = d.location.protocol == "https:" ? "https://" : "http://";
    var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
    var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
})(window, document, 'script', 'cloud.roistat.com', 'c5722693d61246fd1e79af3a6188897e');
