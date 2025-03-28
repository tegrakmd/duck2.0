!(function (a) {
  "object" == typeof module && module.exports
    ? (module.exports = a())
    : (window.intlTelInput = a());
})(function (a) {
  "use strict";
  return (function () {
    function b(a) {
      for (var b = 1; b < arguments.length; b++) {
        var d = null != arguments[b] ? Object(arguments[b]) : {},
          e = Object.keys(d);
        "function" == typeof Object.getOwnPropertySymbols &&
          e.push.apply(
            e,
            Object.getOwnPropertySymbols(d).filter(function (a) {
              return Object.getOwnPropertyDescriptor(d, a).enumerable;
            })
          ),
          e.forEach(function (b) {
            c(a, b, d[b]);
          });
      }
      return a;
    }
    function c(a, b, c) {
      return (
        (b = g(b)),
        b in a
          ? Object.defineProperty(a, b, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[b] = c),
        a
      );
    }
    function d(a, b) {
      if (!(a instanceof b))
        throw new TypeError("Cannot call a class as a function");
    }
    function e(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        (d.enumerable = d.enumerable || !1),
          (d.configurable = !0),
          "value" in d && (d.writable = !0),
          Object.defineProperty(a, g(d.key), d);
      }
    }
    function f(a, b, c) {
      return (
        b && e(a.prototype, b),
        c && e(a, c),
        Object.defineProperty(a, "prototype", { writable: !1 }),
        a
      );
    }
    function g(a) {
      var b = h(a, "string");
      return "symbol" == typeof b ? b : String(b);
    }
    function h(b, c) {
      if ("object" != typeof b || null === b) return b;
      var d = b[Symbol.toPrimitive];
      if (d !== a) {
        var e = d.call(b, c || "default");
        if ("object" != typeof e) return e;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === c ? String : Number)(b);
    }
    for (
      var i = [
          ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
          ["Albania (Shqipëri)", "al", "355"],
          ["Algeria (‫الجزائر‬‎)", "dz", "213"],
          ["American Samoa", "as", "1", 5, ["684"]],
          ["Andorra", "ad", "376"],
          ["Angola", "ao", "244"],
          ["Anguilla", "ai", "1", 6, ["264"]],
          ["Antigua and Barbuda", "ag", "1", 7, ["268"]],
          ["Argentina", "ar", "54"],
          ["Armenia (Հայաստան)", "am", "374"],
          ["Aruba", "aw", "297"],
          ["Ascension Island", "ac", "247"],
          ["Australia", "au", "61", 0],
          ["Austria (Österreich)", "at", "43"],
          ["Azerbaijan (Azərbaycan)", "az", "994"],
          ["Bahamas", "bs", "1", 8, ["242"]],
          ["Bahrain (‫البحرين‬‎)", "bh", "973"],
          ["Bangladesh (বাংলাদেশ)", "bd", "880"],
          ["Barbados", "bb", "1", 9, ["246"]],
          ["Belarus (Беларусь)", "by", "375"],
          ["Belgium (België)", "be", "32"],
          ["Belize", "bz", "501"],
          ["Benin (Bénin)", "bj", "229"],
          ["Bermuda", "bm", "1", 10, ["441"]],
          ["Bhutan (འབྲུག)", "bt", "975"],
          ["Bolivia", "bo", "591"],
          ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
          ["Botswana", "bw", "267"],
          ["Brazil (Brasil)", "br", "55"],
          ["British Indian Ocean Territory", "io", "246"],
          ["British Virgin Islands", "vg", "1", 11, ["284"]],
          ["Brunei", "bn", "673"],
          ["Bulgaria (България)", "bg", "359"],
          ["Burkina Faso", "bf", "226"],
          ["Burundi (Uburundi)", "bi", "257"],
          ["Cambodia (កម្ពុជា)", "kh", "855"],
          ["Cameroon (Cameroun)", "cm", "237"],
          [
            "Canada",
            "ca",
            "1",
            1,
            [
              "204",
              "226",
              "236",
              "249",
              "250",
              "263",
              "289",
              "306",
              "343",
              "354",
              "365",
              "367",
              "368",
              "382",
              "387",
              "403",
              "416",
              "418",
              "428",
              "431",
              "437",
              "438",
              "450",
              "584",
              "468",
              "474",
              "506",
              "514",
              "519",
              "548",
              "579",
              "581",
              "584",
              "587",
              "604",
              "613",
              "639",
              "647",
              "672",
              "683",
              "705",
              "709",
              "742",
              "753",
              "778",
              "780",
              "782",
              "807",
              "819",
              "825",
              "867",
              "873",
              "902",
              "905",
            ],
          ],
          ["Cape Verde (Kabu Verdi)", "cv", "238"],
          ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]],
          ["Cayman Islands", "ky", "1", 12, ["345"]],
          ["Central African Republic (République centrafricaine)", "cf", "236"],
          ["Chad (Tchad)", "td", "235"],
          ["Chile", "cl", "56"],
          ["China (中国)", "cn", "86"],
          ["Christmas Island", "cx", "61", 2, ["89164"]],
          ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]],
          ["Colombia", "co", "57"],
          ["Comoros (‫جزر القمر‬‎)", "km", "269"],
          ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
          ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
          ["Cook Islands", "ck", "682"],
          ["Costa Rica", "cr", "506"],
          ["Côte d’Ivoire", "ci", "225"],
          ["Croatia (Hrvatska)", "hr", "385"],
          ["Cuba", "cu", "53"],
          ["Curaçao", "cw", "599", 0],
          ["Cyprus (Κύπρος)", "cy", "357"],
          ["Czech Republic (Česká republika)", "cz", "420"],
          ["Denmark (Danmark)", "dk", "45"],
          ["Djibouti", "dj", "253"],
          ["Dominica", "dm", "1", 13, ["767"]],
          [
            "Dominican Republic (República Dominicana)",
            "do",
            "1",
            2,
            ["809", "829", "849"],
          ],
          ["Ecuador", "ec", "593"],
          ["Egypt (‫مصر‬‎)", "eg", "20"],
          ["El Salvador", "sv", "503"],
          ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
          ["Eritrea", "er", "291"],
          ["Estonia (Eesti)", "ee", "372"],
          ["Eswatini", "sz", "268"],
          ["Ethiopia", "et", "251"],
          ["Falkland Islands (Islas Malvinas)", "fk", "500"],
          ["Faroe Islands (Føroyar)", "fo", "298"],
          ["Fiji", "fj", "679"],
          ["Finland (Suomi)", "fi", "358", 0],
          ["France", "fr", "33"],
          ["French Guiana (Guyane française)", "gf", "594"],
          ["French Polynesia (Polynésie française)", "pf", "689"],
          ["Gabon", "ga", "241"],
          ["Gambia", "gm", "220"],
          ["Georgia (საქართველო)", "ge", "995"],
          ["Germany (Deutschland)", "de", "49"],
          ["Ghana (Gaana)", "gh", "233"],
          ["Gibraltar", "gi", "350"],
          ["Greece (Ελλάδα)", "gr", "30"],
          ["Greenland (Kalaallit Nunaat)", "gl", "299"],
          ["Grenada", "gd", "1", 14, ["473"]],
          ["Guadeloupe", "gp", "590", 0],
          ["Guam", "gu", "1", 15, ["671"]],
          ["Guatemala", "gt", "502"],
          ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]],
          ["Guinea (Guinée)", "gn", "224"],
          ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
          ["Guyana", "gy", "592"],
          ["Haiti", "ht", "509"],
          ["Honduras", "hn", "504"],
          ["Hong Kong (香港)", "hk", "852"],
          ["Hungary (Magyarország)", "hu", "36"],
          ["Iceland (Ísland)", "is", "354"],
          ["India (भारत)", "in", "91"],
          ["Indonesia", "id", "62"],
          ["Iran (‫ایران‬‎)", "ir", "98"],
          ["Iraq (‫العراق‬‎)", "iq", "964"],
          ["Ireland", "ie", "353"],
          [
            "Isle of Man",
            "im",
            "44",
            2,
            ["1624", "74576", "7524", "7924", "7624"],
          ],
          ["Israel (‫ישראל‬‎)", "il", "972"],
          ["Italy (Italia)", "it", "39", 0],
          ["Jamaica", "jm", "1", 4, ["876", "658"]],
          ["Japan (日本)", "jp", "81"],
          [
            "Jersey",
            "je",
            "44",
            3,
            ["1534", "7509", "7700", "7797", "7829", "7937"],
          ],
          ["Jordan (‫الأردن‬‎)", "jo", "962"],
          ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]],
          ["Kenya", "ke", "254"],
          ["Kiribati", "ki", "686"],
          ["Kosovo", "xk", "383"],
          ["Kuwait (‫الكويت‬‎)", "kw", "965"],
          ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
          ["Laos (ລາວ)", "la", "856"],
          ["Latvia (Latvija)", "lv", "371"],
          ["Lebanon (‫لبنان‬‎)", "lb", "961"],
          ["Lesotho", "ls", "266"],
          ["Liberia", "lr", "231"],
          ["Libya (‫ليبيا‬‎)", "ly", "218"],
          ["Liechtenstein", "li", "423"],
          ["Lithuania (Lietuva)", "lt", "370"],
          ["Luxembourg", "lu", "352"],
          ["Macau (澳門)", "mo", "853"],
          ["Madagascar (Madagasikara)", "mg", "261"],
          ["Malawi", "mw", "265"],
          ["Malaysia", "my", "60"],
          ["Maldives", "mv", "960"],
          ["Mali", "ml", "223"],
          ["Malta", "mt", "356"],
          ["Marshall Islands", "mh", "692"],
          ["Martinique", "mq", "596"],
          ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
          ["Mauritius (Moris)", "mu", "230"],
          ["Mayotte", "yt", "262", 1, ["269", "639"]],
          ["Mexico (México)", "mx", "52"],
          ["Micronesia", "fm", "691"],
          ["Moldova (Republica Moldova)", "md", "373"],
          ["Monaco", "mc", "377"],
          ["Mongolia (Монгол)", "mn", "976"],
          ["Montenegro (Crna Gora)", "me", "382"],
          ["Montserrat", "ms", "1", 16, ["664"]],
          ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
          ["Mozambique (Moçambique)", "mz", "258"],
          ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
          ["Namibia (Namibië)", "na", "264"],
          ["Nauru", "nr", "674"],
          ["Nepal (नेपाल)", "np", "977"],
          ["Netherlands (Nederland)", "nl", "31"],
          ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
          ["New Zealand", "nz", "64"],
          ["Nicaragua", "ni", "505"],
          ["Niger (Nijar)", "ne", "227"],
          ["Nigeria", "ng", "234"],
          ["Niue", "nu", "683"],
          ["Norfolk Island", "nf", "672"],
          ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
          ["North Macedonia (Северна Македонија)", "mk", "389"],
          ["Northern Mariana Islands", "mp", "1", 17, ["670"]],
          ["Norway (Norge)", "no", "47", 0],
          ["Oman (‫عُمان‬‎)", "om", "968"],
          ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
          ["Palau", "pw", "680"],
          ["Palestine (‫فلسطين‬‎)", "ps", "970"],
          ["Panama (Panamá)", "pa", "507"],
          ["Papua New Guinea", "pg", "675"],
          ["Paraguay", "py", "595"],
          ["Peru (Perú)", "pe", "51"],
          ["Philippines", "ph", "63"],
          ["Poland (Polska)", "pl", "48"],
          ["Portugal", "pt", "351"],
          ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
          ["Qatar (‫قطر‬‎)", "qa", "974"],
          ["Réunion (La Réunion)", "re", "262", 0],
          ["Romania (România)", "ro", "40"],
          ["Russia (Россия)", "ru", "7", 0],
          ["Rwanda", "rw", "250"],
          ["Saint Barthélemy", "bl", "590", 1],
          ["Saint Helena", "sh", "290"],
          ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]],
          ["Saint Lucia", "lc", "1", 19, ["758"]],
          ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
          ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
          ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]],
          ["Samoa", "ws", "685"],
          ["San Marino", "sm", "378"],
          ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
          ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
          ["Senegal (Sénégal)", "sn", "221"],
          ["Serbia (Србија)", "rs", "381"],
          ["Seychelles", "sc", "248"],
          ["Sierra Leone", "sl", "232"],
          ["Singapore", "sg", "65"],
          ["Sint Maarten", "sx", "1", 21, ["721"]],
          ["Slovakia (Slovensko)", "sk", "421"],
          ["Slovenia (Slovenija)", "si", "386"],
          ["Solomon Islands", "sb", "677"],
          ["Somalia (Soomaaliya)", "so", "252"],
          ["South Africa", "za", "27"],
          ["South Korea (대한민국)", "kr", "82"],
          ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
          ["Spain (España)", "es", "34"],
          ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
          ["Sudan (‫السودان‬‎)", "sd", "249"],
          ["Suriname", "sr", "597"],
          ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]],
          ["Sweden (Sverige)", "se", "46"],
          ["Switzerland (Schweiz)", "ch", "41"],
          ["Syria (‫سوريا‬‎)", "sy", "963"],
          ["Taiwan (台灣)", "tw", "886"],
          ["Tajikistan", "tj", "992"],
          ["Tanzania", "tz", "255"],
          ["Thailand (ไทย)", "th", "66"],
          ["Timor-Leste", "tl", "670"],
          ["Togo", "tg", "228"],
          ["Tokelau", "tk", "690"],
          ["Tonga", "to", "676"],
          ["Trinidad and Tobago", "tt", "1", 22, ["868"]],
          ["Tunisia (‫تونس‬‎)", "tn", "216"],
          ["Turkey (Türkiye)", "tr", "90"],
          ["Turkmenistan", "tm", "993"],
          ["Turks and Caicos Islands", "tc", "1", 23, ["649"]],
          ["Tuvalu", "tv", "688"],
          ["U.S. Virgin Islands", "vi", "1", 24, ["340"]],
          ["Uganda", "ug", "256"],
          ["Ukraine (Україна)", "ua", "380"],
          ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
          ["United Kingdom", "gb", "44", 0],
          ["United States", "us", "1", 0],
          ["Uruguay", "uy", "598"],
          ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
          ["Vanuatu", "vu", "678"],
          ["Vatican City (Città del Vaticano)", "va", "39", 1, ["06698"]],
          ["Venezuela", "ve", "58"],
          ["Vietnam (Việt Nam)", "vn", "84"],
          ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
          [
            "Western Sahara (‫الصحراء الغربية‬‎)",
            "eh",
            "212",
            1,
            ["5288", "5289"],
          ],
          ["Yemen (‫اليمن‬‎)", "ye", "967"],
          ["Zambia", "zm", "260"],
          ["Zimbabwe", "zw", "263"],
          ["Åland Islands", "ax", "358", 1, ["18"]],
        ],
        j = 0;
      j < i.length;
      j++
    ) {
      var k = i[j];
      i[j] = {
        name: k[0],
        iso2: k[1],
        dialCode: k[2],
        priority: k[3] || 0,
        areaCodes: k[4] || null,
      };
    }
    var l = {
      getInstance: function (a) {
        var b = a.getAttribute("data-intl-tel-input-id");
        return window.intlTelInputGlobals.instances[b];
      },
      instances: {},
      documentReady: function () {
        return "complete" === document.readyState;
      },
    };
    "object" == typeof window && (window.intlTelInputGlobals = l);
    var m = 0,
      n = {
        allowDropdown: !0,
        autoInsertDialCode: !1,
        autoPlaceholder: "polite",
        customContainer: "",
        customPlaceholder: null,
        dropdownContainer: null,
        excludeCountries: [],
        formatOnDisplay: !0,
        geoIpLookup: null,
        hiddenInput: "",
        initialCountry: "",
        localizedCountries: null,
        nationalMode: !0,
        onlyCountries: [],
        placeholderNumberType: "MOBILE",
        preferredCountries: ["us", "gb"],
        separateDialCode: !1,
        showFlags: !0,
        utilsScript: "",
      },
      o = [
        "800",
        "822",
        "833",
        "844",
        "855",
        "866",
        "877",
        "880",
        "881",
        "882",
        "883",
        "884",
        "885",
        "886",
        "887",
        "888",
        "889",
      ],
      p = function (a, b) {
        for (var c = Object.keys(a), d = 0; d < c.length; d++) b(c[d], a[c[d]]);
      },
      q = function (a) {
        p(window.intlTelInputGlobals.instances, function (b) {
          window.intlTelInputGlobals.instances[b][a]();
        });
      },
      r = (function () {
        function c(a, b) {
          var e = this;
          d(this, c),
            (this.id = m++),
            (this.a = a),
            (this.b = null),
            (this.c = null);
          var f = b || {};
          (this.d = {}),
            p(n, function (a, b) {
              e.d[a] = f.hasOwnProperty(a) ? f[a] : b;
            }),
            (this.e = Boolean(a.getAttribute("placeholder")));
        }
        return (
          f(c, [
            {
              key: "_init",
              value: function () {
                var a = this;
                this.d.nationalMode && (this.d.autoInsertDialCode = !1),
                  this.d.separateDialCode && (this.d.autoInsertDialCode = !1);
                var b = this.d.allowDropdown && !this.d.separateDialCode;
                if (
                  (!this.d.showFlags && b && (this.d.showFlags = !0),
                  (this.g =
                    /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    )),
                  this.g &&
                    (document.body.classList.add("iti-mobile"),
                    this.d.dropdownContainer ||
                      (this.d.dropdownContainer = document.body)),
                  (this.isRTL = !!this.a.closest("[dir=rtl]")),
                  "undefined" != typeof Promise)
                ) {
                  var c = new Promise(function (b, c) {
                      (a.h = b), (a.i = c);
                    }),
                    d = new Promise(function (b, c) {
                      (a.i0 = b), (a.i1 = c);
                    });
                  this.promise = Promise.all([c, d]);
                } else
                  (this.h = this.i = function () {}),
                    (this.i0 = this.i1 = function () {});
                (this.s = {}),
                  this._b(),
                  this._f(),
                  this._h(),
                  this._i(),
                  this._i3();
              },
            },
            {
              key: "_b",
              value: function () {
                this._d(),
                  this._d2(),
                  this._e(),
                  this.d.localizedCountries && this._d0(),
                  (this.d.onlyCountries.length || this.d.localizedCountries) &&
                    this.p.sort(this._d1);
              },
            },
            {
              key: "_c",
              value: function (b, c, d) {
                c.length > this.countryCodeMaxLen &&
                  (this.countryCodeMaxLen = c.length),
                  this.q.hasOwnProperty(c) || (this.q[c] = []);
                for (var e = 0; e < this.q[c].length; e++)
                  if (this.q[c][e] === b) return;
                var f = d !== a ? d : this.q[c].length;
                this.q[c][f] = b;
              },
            },
            {
              key: "_d",
              value: function () {
                if (this.d.onlyCountries.length) {
                  var a = this.d.onlyCountries.map(function (a) {
                    return a.toLowerCase();
                  });
                  this.p = i.filter(function (b) {
                    return a.indexOf(b.iso2) > -1;
                  });
                } else if (this.d.excludeCountries.length) {
                  var b = this.d.excludeCountries.map(function (a) {
                    return a.toLowerCase();
                  });
                  this.p = i.filter(function (a) {
                    return -1 === b.indexOf(a.iso2);
                  });
                } else this.p = i;
              },
            },
            {
              key: "_d0",
              value: function () {
                for (var a = 0; a < this.p.length; a++) {
                  var b = this.p[a].iso2.toLowerCase();
                  this.d.localizedCountries.hasOwnProperty(b) &&
                    (this.p[a].name = this.d.localizedCountries[b]);
                }
              },
            },
            {
              key: "_d1",
              value: function (a, b) {
                return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
              },
            },
            {
              key: "_d2",
              value: function () {
                (this.countryCodeMaxLen = 0),
                  (this.dialCodes = {}),
                  (this.q = {});
                for (var a = 0; a < this.p.length; a++) {
                  var b = this.p[a];
                  this.dialCodes[b.dialCode] ||
                    (this.dialCodes[b.dialCode] = !0),
                    this._c(b.iso2, b.dialCode, b.priority);
                }
                for (var c = 0; c < this.p.length; c++) {
                  var d = this.p[c];
                  if (d.areaCodes)
                    for (
                      var e = this.q[d.dialCode][0], f = 0;
                      f < d.areaCodes.length;
                      f++
                    ) {
                      for (var g = d.areaCodes[f], h = 1; h < g.length; h++) {
                        var i = d.dialCode + g.substr(0, h);
                        this._c(e, i), this._c(d.iso2, i);
                      }
                      this._c(d.iso2, d.dialCode + g);
                    }
                }
              },
            },
            {
              key: "_e",
              value: function () {
                this.preferredCountries = [];
                for (var a = 0; a < this.d.preferredCountries.length; a++) {
                  var b = this.d.preferredCountries[a].toLowerCase(),
                    c = this._y(b, !1, !0);
                  c && this.preferredCountries.push(c);
                }
              },
            },
            {
              key: "_e2",
              value: function (a, b, c) {
                var d = document.createElement(a);
                return (
                  b &&
                    p(b, function (a, b) {
                      return d.setAttribute(a, b);
                    }),
                  c && c.appendChild(d),
                  d
                );
              },
            },
            {
              key: "_f",
              value: function () {
                this.a.hasAttribute("autocomplete") ||
                  (this.a.form && this.a.form.hasAttribute("autocomplete")) ||
                  this.a.setAttribute("autocomplete", "off");
                var a = this.d,
                  c = a.allowDropdown,
                  d = a.separateDialCode,
                  e = a.showFlags,
                  f = a.customContainer,
                  g = a.hiddenInput,
                  h = a.dropdownContainer,
                  i = "iti";
                c && (i += " iti--allow-dropdown"),
                  d && (i += " iti--separate-dial-code"),
                  e && (i += " iti--show-flags"),
                  f && (i += " ".concat(f));
                var j = this._e2("div", { class: i });
                this.a.parentNode.insertBefore(j, this.a);
                var k = c || e || d;
                if (
                  (k &&
                    (this.k = this._e2(
                      "div",
                      { class: "iti__flag-container" },
                      j
                    )),
                  j.appendChild(this.a),
                  k &&
                    (this.selectedFlag = this._e2(
                      "div",
                      b(
                        { class: "iti__selected-flag" },
                        c && {
                          role: "combobox",
                          "aria-haspopup": "listbox",
                          "aria-controls": "iti-".concat(
                            this.id,
                            "__country-listbox"
                          ),
                          "aria-expanded": "false",
                          "aria-label": "Telephone country code",
                        }
                      ),
                      this.k
                    )),
                  e &&
                    (this.l = this._e2(
                      "div",
                      { class: "iti__flag" },
                      this.selectedFlag
                    )),
                  this.selectedFlag &&
                    this.a.disabled &&
                    this.selectedFlag.setAttribute("aria-disabled", "true"),
                  d &&
                    (this.t = this._e2(
                      "div",
                      { class: "iti__selected-dial-code" },
                      this.selectedFlag
                    )),
                  c &&
                    (this.a.disabled ||
                      this.selectedFlag.setAttribute("tabindex", "0"),
                    (this.u = this._e2(
                      "div",
                      { class: "iti__arrow" },
                      this.selectedFlag
                    )),
                    (this.m = this._e2("ul", {
                      class: "iti__country-list iti__hide",
                      id: "iti-".concat(this.id, "__country-listbox"),
                      role: "listbox",
                      "aria-label": "List of countries",
                    })),
                    this.preferredCountries.length &&
                      (this._g(this.preferredCountries, "iti__preferred", !0),
                      this._e2(
                        "li",
                        {
                          class: "iti__divider",
                          role: "separator",
                          "aria-disabled": "true",
                        },
                        this.m
                      )),
                    this._g(this.p, "iti__standard"),
                    h
                      ? ((this.dropdown = this._e2("div", {
                          class: "iti iti--container",
                        })),
                        this.dropdown.appendChild(this.m))
                      : this.k.appendChild(this.m)),
                  g)
                ) {
                  var l = g,
                    m = this.a.getAttribute("name");
                  if (m) {
                    var n = m.lastIndexOf("[");
                    -1 !== n &&
                      (l = "".concat(m.substr(0, n), "[").concat(l, "]"));
                  }
                  (this.hiddenInput = this._e2("input", {
                    type: "hidden",
                    name: l,
                  })),
                    j.appendChild(this.hiddenInput);
                }
              },
            },
            {
              key: "_g",
              value: function (a, b, c) {
                for (var d = "", e = 0; e < a.length; e++) {
                  var f = a[e],
                    g = c ? "-preferred" : "";
                  (d += "<li class='iti__country "
                    .concat(b, "' tabIndex='-1' id='iti-")
                    .concat(this.id, "__item-")
                    .concat(f.iso2)
                    .concat(g, "' role='option' data-dial-code='")
                    .concat(f.dialCode, "' data-country-code='")
                    .concat(f.iso2, "' aria-selected='false'>")),
                    this.d.showFlags &&
                      (d +=
                        "<div class='iti__flag-box'><div class='iti__flag iti__".concat(
                          f.iso2,
                          "'></div></div>"
                        )),
                    (d += "<span class='iti__country-name'>".concat(
                      f.name,
                      "</span>"
                    )),
                    (d += "<span class='iti__dial-code'>+".concat(
                      f.dialCode,
                      "</span>"
                    )),
                    (d += "</li>");
                }
                this.m.insertAdjacentHTML("beforeend", d);
              },
            },
            {
              key: "_h",
              value: function () {
                var a = this.a.getAttribute("value"),
                  b = this.a.value,
                  c = a && "+" === a.charAt(0) && (!b || "+" !== b.charAt(0)),
                  d = c ? a : b,
                  e = this._5(d),
                  f = this._w(d),
                  g = this.d,
                  h = g.initialCountry,
                  i = g.autoInsertDialCode;
                e && !f
                  ? this._v(d)
                  : "auto" !== h &&
                    (h
                      ? this._z(h.toLowerCase())
                      : e && f
                      ? this._z("us")
                      : ((this.j = this.preferredCountries.length
                          ? this.preferredCountries[0].iso2
                          : this.p[0].iso2),
                        d || this._z(this.j)),
                    !d && i && (this.a.value = "+".concat(this.s.dialCode))),
                  d && this._u(d);
              },
            },
            {
              key: "_i",
              value: function () {
                this._j(),
                  this.d.autoInsertDialCode && this._l(),
                  this.d.allowDropdown && this._i2(),
                  this.hiddenInput && this._i0();
              },
            },
            {
              key: "_i0",
              value: function () {
                var a = this;
                (this._a14 = function () {
                  a.hiddenInput.value = a.getNumber();
                }),
                  this.a.form &&
                    this.a.form.addEventListener("submit", this._a14);
              },
            },
            {
              key: "_i1",
              value: function () {
                for (var a = this.a; a && "LABEL" !== a.tagName; )
                  a = a.parentNode;
                return a;
              },
            },
            {
              key: "_i2",
              value: function () {
                var a = this;
                this._a9 = function (b) {
                  a.m.classList.contains("iti__hide")
                    ? a.a.focus()
                    : b.preventDefault();
                };
                var b = this._i1();
                b && b.addEventListener("click", this._a9),
                  (this._a10 = function () {
                    !a.m.classList.contains("iti__hide") ||
                      a.a.disabled ||
                      a.a.readOnly ||
                      a._n();
                  }),
                  this.selectedFlag.addEventListener("click", this._a10),
                  (this._a11 = function (b) {
                    a.m.classList.contains("iti__hide") &&
                      -1 !==
                        [
                          "ArrowUp",
                          "Up",
                          "ArrowDown",
                          "Down",
                          " ",
                          "Enter",
                        ].indexOf(b.key) &&
                      (b.preventDefault(), b.stopPropagation(), a._n()),
                      "Tab" === b.key && a._2();
                  }),
                  this.k.addEventListener("keydown", this._a11);
              },
            },
            {
              key: "_i3",
              value: function () {
                var a = this;
                this.d.utilsScript && !window.intlTelInputUtils
                  ? window.intlTelInputGlobals.documentReady()
                    ? window.intlTelInputGlobals.loadUtils(this.d.utilsScript)
                    : window.addEventListener("load", function () {
                        window.intlTelInputGlobals.loadUtils(a.d.utilsScript);
                      })
                  : this.i0(),
                  "auto" === this.d.initialCountry ? this._i4() : this.h();
              },
            },
            {
              key: "_i4",
              value: function () {
                window.intlTelInputGlobals.autoCountry
                  ? this.handleAutoCountry()
                  : window.intlTelInputGlobals.startedLoadingAutoCountry ||
                    ((window.intlTelInputGlobals.startedLoadingAutoCountry =
                      !0),
                    "function" == typeof this.d.geoIpLookup &&
                      this.d.geoIpLookup(
                        function (a) {
                          (window.intlTelInputGlobals.autoCountry =
                            a.toLowerCase()),
                            setTimeout(function () {
                              return q("handleAutoCountry");
                            });
                        },
                        function () {
                          return q("rejectAutoCountryPromise");
                        }
                      ));
              },
            },
            {
              key: "_j",
              value: function () {
                var a = this;
                (this._a12 = function () {
                  a._v(a.a.value) && a._m2CountryChange();
                }),
                  this.a.addEventListener("keyup", this._a12),
                  (this._a13 = function () {
                    setTimeout(a._a12);
                  }),
                  this.a.addEventListener("cut", this._a13),
                  this.a.addEventListener("paste", this._a13);
              },
            },
            {
              key: "_j2",
              value: function (a) {
                var b = this.a.getAttribute("maxlength");
                return b && a.length > b ? a.substr(0, b) : a;
              },
            },
            {
              key: "_l",
              value: function () {
                var a = this;
                (this._a8 = function () {
                  a._l2();
                }),
                  this.a.form &&
                    this.a.form.addEventListener("submit", this._a8),
                  this.a.addEventListener("blur", this._a8);
              },
            },
            {
              key: "_l2",
              value: function () {
                if ("+" === this.a.value.charAt(0)) {
                  var a = this._m(this.a.value);
                  (a && this.s.dialCode !== a) || (this.a.value = "");
                }
              },
            },
            {
              key: "_m",
              value: function (a) {
                return a.replace(/\D/g, "");
              },
            },
            {
              key: "_m2",
              value: function (a) {
                var b = document.createEvent("Event");
                b.initEvent(a, !0, !0), this.a.dispatchEvent(b);
              },
            },
            {
              key: "_n",
              value: function () {
                this.m.classList.remove("iti__hide"),
                  this.selectedFlag.setAttribute("aria-expanded", "true"),
                  this._o(),
                  this.b && (this._x(this.b, !1), this._3(this.b, !0)),
                  this._p(),
                  this.u.classList.add("iti__arrow--up"),
                  this._m2("open:countrydropdown");
              },
            },
            {
              key: "_n2",
              value: function (a, b, c) {
                c && !a.classList.contains(b)
                  ? a.classList.add(b)
                  : !c && a.classList.contains(b) && a.classList.remove(b);
              },
            },
            {
              key: "_o",
              value: function () {
                var a = this;
                if (
                  (this.d.dropdownContainer &&
                    this.d.dropdownContainer.appendChild(this.dropdown),
                  !this.g)
                ) {
                  var b = this.a.getBoundingClientRect(),
                    c =
                      window.pageYOffset || document.documentElement.scrollTop,
                    d = b.top + c,
                    e = this.m.offsetHeight,
                    f = d + this.a.offsetHeight + e < c + window.innerHeight,
                    g = d - e > c;
                  if (
                    (this._n2(this.m, "iti__country-list--dropup", !f && g),
                    this.d.dropdownContainer)
                  ) {
                    var h = !f && g ? 0 : this.a.offsetHeight;
                    (this.dropdown.style.top = "".concat(d + h, "px")),
                      (this.dropdown.style.left = "".concat(
                        b.left + document.body.scrollLeft,
                        "px"
                      )),
                      (this._a4 = function () {
                        return a._2();
                      }),
                      window.addEventListener("scroll", this._a4);
                  }
                }
              },
            },
            {
              key: "_o2",
              value: function (a) {
                for (
                  var b = a;
                  b && b !== this.m && !b.classList.contains("iti__country");

                )
                  b = b.parentNode;
                return b === this.m ? null : b;
              },
            },
            {
              key: "_p",
              value: function () {
                var a = this;
                (this._a0 = function (b) {
                  var c = a._o2(b.target);
                  c && a._x(c, !1);
                }),
                  this.m.addEventListener("mouseover", this._a0),
                  (this._a1 = function (b) {
                    var c = a._o2(b.target);
                    c && a._1(c);
                  }),
                  this.m.addEventListener("click", this._a1);
                var b = !0;
                (this._a2 = function () {
                  b || a._2(), (b = !1);
                }),
                  document.documentElement.addEventListener("click", this._a2);
                var c = "",
                  d = null;
                (this._a3 = function (b) {
                  b.preventDefault(),
                    "ArrowUp" === b.key ||
                    "Up" === b.key ||
                    "ArrowDown" === b.key ||
                    "Down" === b.key
                      ? a._q(b.key)
                      : "Enter" === b.key
                      ? a._r()
                      : "Escape" === b.key
                      ? a._2()
                      : /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(b.key) &&
                        (d && clearTimeout(d),
                        (c += b.key.toLowerCase()),
                        a._s(c),
                        (d = setTimeout(function () {
                          c = "";
                        }, 1e3)));
                }),
                  document.addEventListener("keydown", this._a3);
              },
            },
            {
              key: "_q",
              value: function (a) {
                var b =
                  "ArrowUp" === a || "Up" === a
                    ? this.c.previousElementSibling
                    : this.c.nextElementSibling;
                b &&
                  (b.classList.contains("iti__divider") &&
                    (b =
                      "ArrowUp" === a || "Up" === a
                        ? b.previousElementSibling
                        : b.nextElementSibling),
                  this._x(b, !0));
              },
            },
            {
              key: "_r",
              value: function () {
                this.c && this._1(this.c);
              },
            },
            {
              key: "_s",
              value: function (a) {
                for (var b = 0; b < this.p.length; b++)
                  if (this._t(this.p[b].name, a)) {
                    var c = this.m.querySelector(
                      "#iti-".concat(this.id, "__item-").concat(this.p[b].iso2)
                    );
                    this._x(c, !1), this._3(c, !0);
                    break;
                  }
              },
            },
            {
              key: "_t",
              value: function (a, b) {
                return a.substr(0, b.length).toLowerCase() === b;
              },
            },
            {
              key: "_u",
              value: function (a) {
                var b = a;
                if (
                  this.d.formatOnDisplay &&
                  window.intlTelInputUtils &&
                  this.s
                ) {
                  var c =
                      this.d.nationalMode ||
                      ("+" !== b.charAt(0) && !this.d.separateDialCode),
                    d = intlTelInputUtils.numberFormat,
                    e = d.NATIONAL,
                    f = d.INTERNATIONAL,
                    g = c ? e : f;
                  b = intlTelInputUtils.formatNumber(b, this.s.iso2, g);
                }
                (b = this._7(b)), (this.a.value = b);
              },
            },
            {
              key: "_v",
              value: function (a) {
                var b = a,
                  c = this.s.dialCode,
                  d = "1" === c;
                b &&
                  d &&
                  "+" !== b.charAt(0) &&
                  ("1" !== b.charAt(0) && (b = "1".concat(b)),
                  (b = "+".concat(b))),
                  this.d.separateDialCode &&
                    c &&
                    "+" !== b.charAt(0) &&
                    (b = "+".concat(c).concat(b));
                var e = this._5(b, !0),
                  f = this._m(b),
                  g = null;
                if (e) {
                  var h = this.q[this._m(e)],
                    i =
                      -1 !== h.indexOf(this.s.iso2) && f.length <= e.length - 1;
                  if (!("1" === c && this._w(f)) && !i)
                    for (var j = 0; j < h.length; j++)
                      if (h[j]) {
                        g = h[j];
                        break;
                      }
                } else
                  "+" === b.charAt(0) && f.length
                    ? (g = "")
                    : (b && "+" !== b) || (g = this.j);
                return null !== g && this._z(g);
              },
            },
            {
              key: "_w",
              value: function (a) {
                var b = this._m(a);
                if ("1" === b.charAt(0)) {
                  var c = b.substr(1, 3);
                  return -1 !== o.indexOf(c);
                }
                return !1;
              },
            },
            {
              key: "_x",
              value: function (a, b) {
                var c = this.c;
                c && c.classList.remove("iti__highlight"),
                  (this.c = a),
                  this.c.classList.add("iti__highlight"),
                  this.selectedFlag.setAttribute(
                    "aria-activedescendant",
                    a.getAttribute("id")
                  ),
                  b && this.c.focus();
              },
            },
            {
              key: "_y",
              value: function (a, b, c) {
                for (var d = b ? i : this.p, e = 0; e < d.length; e++)
                  if (d[e].iso2 === a) return d[e];
                if (c) return null;
                throw new Error("No country data for '".concat(a, "'"));
              },
            },
            {
              key: "_z",
              value: function (a) {
                var b = this.d,
                  c = b.allowDropdown,
                  d = b.separateDialCode,
                  e = b.showFlags,
                  f = this.s.iso2 ? this.s : {};
                if (
                  ((this.s = a ? this._y(a, !1, !1) : {}),
                  this.s.iso2 && (this.j = this.s.iso2),
                  e &&
                    this.l.setAttribute("class", "iti__flag iti__".concat(a)),
                  this._setSelectedCountryFlagTitleAttribute(a, d),
                  d)
                ) {
                  var g = this.s.dialCode ? "+".concat(this.s.dialCode) : "";
                  this.t.innerHTML = g;
                  var h = this.selectedFlag.offsetWidth || this._z2();
                  this.isRTL
                    ? (this.a.style.paddingRight = "".concat(h + 6, "px"))
                    : (this.a.style.paddingLeft = "".concat(h + 6, "px"));
                }
                if ((this._0(), c)) {
                  var i = this.b;
                  if (
                    (i &&
                      (i.classList.remove("iti__active"),
                      i.setAttribute("aria-selected", "false")),
                    a)
                  ) {
                    var j =
                      this.m.querySelector(
                        "#iti-"
                          .concat(this.id, "__item-")
                          .concat(a, "-preferred")
                      ) ||
                      this.m.querySelector(
                        "#iti-".concat(this.id, "__item-").concat(a)
                      );
                    j.setAttribute("aria-selected", "true"),
                      j.classList.add("iti__active"),
                      (this.b = j);
                  }
                }
                return f.iso2 !== a;
              },
            },
            {
              key: "_setSelectedCountryFlagTitleAttribute",
              value: function (a, b) {
                if (this.selectedFlag) {
                  var c;
                  (c =
                    a && !b
                      ? "".concat(this.s.name, ": +").concat(this.s.dialCode)
                      : a
                      ? this.s.name
                      : "Unknown"),
                    this.selectedFlag.setAttribute("title", c);
                }
              },
            },
            {
              key: "_z2",
              value: function () {
                var a = this.a.parentNode.cloneNode();
                (a.style.visibility = "hidden"), document.body.appendChild(a);
                var b = this.k.cloneNode();
                a.appendChild(b);
                var c = this.selectedFlag.cloneNode(!0);
                b.appendChild(c);
                var d = c.offsetWidth;
                return a.parentNode.removeChild(a), d;
              },
            },
            {
              key: "_0",
              value: function () {
                var a =
                  "aggressive" === this.d.autoPlaceholder ||
                  (!this.e && "polite" === this.d.autoPlaceholder);
                if (window.intlTelInputUtils && a) {
                  var b =
                      intlTelInputUtils.numberType[
                        this.d.placeholderNumberType
                      ],
                    c = this.s.iso2
                      ? intlTelInputUtils.getExampleNumber(
                          this.s.iso2,
                          this.d.nationalMode,
                          b
                        )
                      : "";
                  (c = this._7(c)),
                    "function" == typeof this.d.customPlaceholder &&
                      (c = this.d.customPlaceholder(c, this.s)),
                    this.a.setAttribute("placeholder", c);
                }
              },
            },
            {
              key: "_1",
              value: function (a) {
                var b = this._z(a.getAttribute("data-country-code"));
                this._2(),
                  this._4(a.getAttribute("data-dial-code")),
                  this.a.focus();
                var c = this.a.value.length;
                this.a.setSelectionRange(c, c), b && this._m2CountryChange();
              },
            },
            {
              key: "_2",
              value: function () {
                this.m.classList.add("iti__hide"),
                  this.selectedFlag.setAttribute("aria-expanded", "false"),
                  this.selectedFlag.removeAttribute("aria-activedescendant"),
                  this.u.classList.remove("iti__arrow--up"),
                  document.removeEventListener("keydown", this._a3),
                  document.documentElement.removeEventListener(
                    "click",
                    this._a2
                  ),
                  this.m.removeEventListener("mouseover", this._a0),
                  this.m.removeEventListener("click", this._a1),
                  this.d.dropdownContainer &&
                    (this.g || window.removeEventListener("scroll", this._a4),
                    this.dropdown.parentNode &&
                      this.dropdown.parentNode.removeChild(this.dropdown)),
                  this._m2("close:countrydropdown");
              },
            },
            {
              key: "_3",
              value: function (a, b) {
                var c = this.m,
                  d = window.pageYOffset || document.documentElement.scrollTop,
                  e = c.offsetHeight,
                  f = c.getBoundingClientRect().top + d,
                  g = f + e,
                  h = a.offsetHeight,
                  i = a.getBoundingClientRect().top + d,
                  j = i + h,
                  k = i - f + c.scrollTop,
                  l = e / 2 - h / 2;
                if (i < f) b && (k -= l), (c.scrollTop = k);
                else if (j > g) {
                  b && (k += l);
                  var m = e - h;
                  c.scrollTop = k - m;
                }
              },
            },
            {
              key: "_4",
              value: function (a) {
                var b,
                  c = this.a.value,
                  d = "+".concat(a);
                if ("+" === c.charAt(0)) {
                  var e = this._5(c);
                  (b = e ? c.replace(e, d) : d), (this.a.value = b);
                } else
                  this.d.autoInsertDialCode &&
                    ((b = c ? d + c : d), (this.a.value = b));
              },
            },
            {
              key: "_5",
              value: function (a, b) {
                var c = "";
                if ("+" === a.charAt(0))
                  for (var d = "", e = 0; e < a.length; e++) {
                    var f = a.charAt(e);
                    if (!isNaN(parseInt(f, 10))) {
                      if (((d += f), b)) this.q[d] && (c = a.substr(0, e + 1));
                      else if (this.dialCodes[d]) {
                        c = a.substr(0, e + 1);
                        break;
                      }
                      if (d.length === this.countryCodeMaxLen) break;
                    }
                  }
                return c;
              },
            },
            {
              key: "_6",
              value: function () {
                var a = this.a.value.trim(),
                  b = this.s.dialCode,
                  c = this._m(a);
                return (
                  (this.d.separateDialCode && "+" !== a.charAt(0) && b && c
                    ? "+".concat(b)
                    : "") + a
                );
              },
            },
            {
              key: "_7",
              value: function (a) {
                var b = a;
                if (this.d.separateDialCode) {
                  var c = this._5(b);
                  if (c) {
                    c = "+".concat(this.s.dialCode);
                    var d =
                      " " === b[c.length] || "-" === b[c.length]
                        ? c.length + 1
                        : c.length;
                    b = b.substr(d);
                  }
                }
                return this._j2(b);
              },
            },
            {
              key: "_m2CountryChange",
              value: function () {
                this._m2("countrychange");
              },
            },
            {
              key: "handleAutoCountry",
              value: function () {
                "auto" === this.d.initialCountry &&
                  ((this.j = window.intlTelInputGlobals.autoCountry),
                  this.a.value || this.setCountry(this.j),
                  this.h());
              },
            },
            {
              key: "handleUtils",
              value: function () {
                window.intlTelInputUtils &&
                  (this.a.value && this._u(this.a.value), this._0()),
                  this.i0();
              },
            },
            {
              key: "destroy",
              value: function () {
                var a = this.a.form;
                if (this.d.allowDropdown) {
                  this._2(),
                    this.selectedFlag.removeEventListener("click", this._a10),
                    this.k.removeEventListener("keydown", this._a11);
                  var b = this._i1();
                  b && b.removeEventListener("click", this._a9);
                }
                this.hiddenInput &&
                  a &&
                  a.removeEventListener("submit", this._a14),
                  this.d.autoInsertDialCode &&
                    (a && a.removeEventListener("submit", this._a8),
                    this.a.removeEventListener("blur", this._a8)),
                  this.a.removeEventListener("keyup", this._a12),
                  this.a.removeEventListener("cut", this._a13),
                  this.a.removeEventListener("paste", this._a13),
                  this.a.removeAttribute("data-intl-tel-input-id");
                var c = this.a.parentNode;
                c.parentNode.insertBefore(this.a, c),
                  c.parentNode.removeChild(c),
                  delete window.intlTelInputGlobals.instances[this.id];
              },
            },
            {
              key: "getExtension",
              value: function () {
                return window.intlTelInputUtils
                  ? intlTelInputUtils.getExtension(this._6(), this.s.iso2)
                  : "";
              },
            },
            {
              key: "getNumber",
              value: function (a) {
                if (window.intlTelInputUtils) {
                  var b = this.s.iso2;
                  return intlTelInputUtils.formatNumber(this._6(), b, a);
                }
                return "";
              },
            },
            {
              key: "getNumberType",
              value: function () {
                return window.intlTelInputUtils
                  ? intlTelInputUtils.getNumberType(this._6(), this.s.iso2)
                  : -99;
              },
            },
            {
              key: "getSelectedCountryData",
              value: function () {
                return this.s;
              },
            },
            {
              key: "getValidationError",
              value: function () {
                if (window.intlTelInputUtils) {
                  var a = this.s.iso2;
                  return intlTelInputUtils.getValidationError(this._6(), a);
                }
                return -99;
              },
            },
            {
              key: "isValidNumber",
              value: function () {
                var a = this._6().trim();
                return window.intlTelInputUtils
                  ? intlTelInputUtils.isValidNumber(a, this.s.iso2)
                  : null;
              },
            },
            {
              key: "isPossibleNumber",
              value: function () {
                var a = this._6().trim();
                return window.intlTelInputUtils
                  ? intlTelInputUtils.isPossibleNumber(a, this.s.iso2)
                  : null;
              },
            },
            {
              key: "setCountry",
              value: function (a) {
                var b = a.toLowerCase();
                this.s.iso2 !== b &&
                  (this._z(b),
                  this._4(this.s.dialCode),
                  this._m2CountryChange());
              },
            },
            {
              key: "setNumber",
              value: function (a) {
                var b = this._v(a);
                this._u(a), b && this._m2CountryChange();
              },
            },
            {
              key: "setPlaceholderNumberType",
              value: function (a) {
                (this.d.placeholderNumberType = a), this._0();
              },
            },
          ]),
          c
        );
      })();
    l.getCountryData = function () {
      return i;
    };
    var s = function (a, b, c) {
      var d = document.createElement("script");
      (d.onload = function () {
        q("handleUtils"), b && b();
      }),
        (d.onerror = function () {
          q("rejectUtilsScriptPromise"), c && c();
        }),
        (d.className = "iti-load-utils"),
        (d.async = !0),
        (d.src = a),
        document.body.appendChild(d);
    };
    return (
      (l.loadUtils = function (a) {
        if (
          !window.intlTelInputUtils &&
          !window.intlTelInputGlobals.startedLoadingUtilsScript
        ) {
          if (
            ((window.intlTelInputGlobals.startedLoadingUtilsScript = !0),
            "undefined" != typeof Promise)
          )
            return new Promise(function (b, c) {
              return s(a, b, c);
            });
          s(a);
        }
        return null;
      }),
      (l.defaults = n),
      (l.version = "18.2.1"),
      function (a, b) {
        var c = new r(a, b);
        return (
          c._init(),
          a.setAttribute("data-intl-tel-input-id", c.id),
          (window.intlTelInputGlobals.instances[c.id] = c),
          c
        );
      }
    );
  })();
});
/*! lazysizes - v5.3.2 */
!(function (e) {
  var t = (function (u, D, f) {
    "use strict";
    var k, H;
    if (
      ((function () {
        var e;
        var t = {
          lazyClass: "lazyload",
          loadedClass: "lazyloaded",
          loadingClass: "lazyloading",
          preloadClass: "lazypreload",
          errorClass: "lazyerror",
          autosizesClass: "lazyautosizes",
          fastLoadedClass: "ls-is-cached",
          iframeLoadMode: 0,
          srcAttr: "data-src",
          srcsetAttr: "data-srcset",
          sizesAttr: "data-sizes",
          minSize: 40,
          customMedia: {},
          init: !0,
          expFactor: 1.5,
          hFac: 0.8,
          loadMode: 2,
          loadHidden: !0,
          ricTimeout: 0,
          throttleDelay: 125,
        };
        H = u.lazySizesConfig || u.lazysizesConfig || {};
        for (e in t) {
          if (!(e in H)) {
            H[e] = t[e];
          }
        }
      })(),
      !D || !D.getElementsByClassName)
    ) {
      return { init: function () {}, cfg: H, noSupport: !0 };
    }
    var O = D.documentElement,
      i = u.HTMLPictureElement,
      P = "addEventListener",
      $ = "getAttribute",
      q = u[P].bind(u),
      I = u.setTimeout,
      U = u.requestAnimationFrame || I,
      o = u.requestIdleCallback,
      j = /^picture$/i,
      r = ["load", "error", "lazyincluded", "_lazyloaded"],
      a = {},
      G = Array.prototype.forEach,
      J = function (e, t) {
        if (!a[t]) {
          a[t] = new RegExp("(\\s|^)" + t + "(\\s|$)");
        }
        return a[t].test(e[$]("class") || "") && a[t];
      },
      K = function (e, t) {
        if (!J(e, t)) {
          e.setAttribute("class", (e[$]("class") || "").trim() + " " + t);
        }
      },
      Q = function (e, t) {
        var a;
        if ((a = J(e, t))) {
          e.setAttribute("class", (e[$]("class") || "").replace(a, " "));
        }
      },
      V = function (t, a, e) {
        var i = e ? P : "removeEventListener";
        if (e) {
          V(t, a);
        }
        r.forEach(function (e) {
          t[i](e, a);
        });
      },
      X = function (e, t, a, i, r) {
        var n = D.createEvent("Event");
        if (!a) {
          a = {};
        }
        a.instance = k;
        n.initEvent(t, !i, !r);
        n.detail = a;
        e.dispatchEvent(n);
        return n;
      },
      Y = function (e, t) {
        var a;
        if (!i && (a = u.picturefill || H.pf)) {
          if (t && t.src && !e[$]("srcset")) {
            e.setAttribute("srcset", t.src);
          }
          a({ reevaluate: !0, elements: [e] });
        } else if (t && t.src) {
          e.src = t.src;
        }
      },
      Z = function (e, t) {
        return (getComputedStyle(e, null) || {})[t];
      },
      s = function (e, t, a) {
        a = a || e.offsetWidth;
        while (a < H.minSize && t && !e._lazysizesWidth) {
          a = t.offsetWidth;
          t = t.parentNode;
        }
        return a;
      },
      ee = (function () {
        var a, i;
        var t = [];
        var r = [];
        var n = t;
        var s = function () {
          var e = n;
          n = t.length ? r : t;
          a = !0;
          i = !1;
          while (e.length) {
            e.shift()();
          }
          a = !1;
        };
        var e = function (e, t) {
          if (a && !t) {
            e.apply(this, arguments);
          } else {
            n.push(e);
            if (!i) {
              i = !0;
              (D.hidden ? I : U)(s);
            }
          }
        };
        e._lsFlush = s;
        return e;
      })(),
      te = function (a, e) {
        return e
          ? function () {
              ee(a);
            }
          : function () {
              var e = this;
              var t = arguments;
              ee(function () {
                a.apply(e, t);
              });
            };
      },
      ae = function (e) {
        var a;
        var i = 0;
        var r = H.throttleDelay;
        var n = H.ricTimeout;
        var t = function () {
          a = !1;
          i = f.now();
          e();
        };
        var s =
          o && n > 49
            ? function () {
                o(t, { timeout: n });
                if (n !== H.ricTimeout) {
                  n = H.ricTimeout;
                }
              }
            : te(function () {
                I(t);
              }, !0);
        return function (e) {
          var t;
          if ((e = e === !0)) {
            n = 33;
          }
          if (a) {
            return;
          }
          a = !0;
          t = r - (f.now() - i);
          if (t < 0) {
            t = 0;
          }
          if (e || t < 9) {
            s();
          } else {
            I(s, t);
          }
        };
      },
      ie = function (e) {
        var t, a;
        var i = 99;
        var r = function () {
          t = null;
          e();
        };
        var n = function () {
          var e = f.now() - a;
          if (e < i) {
            I(n, i - e);
          } else {
            (o || r)(r);
          }
        };
        return function () {
          a = f.now();
          if (!t) {
            t = I(n, i);
          }
        };
      },
      e = (function () {
        var v, m, c, h, e;
        var y, z, g, p, C, b, A;
        var n = /^img$/i;
        var d = /^iframe$/i;
        var E = "onscroll" in u && !/(gle|ing)bot/.test(navigator.userAgent);
        var _ = 0;
        var w = 0;
        var M = 0;
        var N = -1;
        var L = function (e) {
          M--;
          if (!e || M < 0 || !e.target) {
            M = 0;
          }
        };
        var x = function (e) {
          if (A == null) {
            A = Z(D.body, "visibility") == "hidden";
          }
          return (
            A ||
            !(
              Z(e.parentNode, "visibility") == "hidden" &&
              Z(e, "visibility") == "hidden"
            )
          );
        };
        var W = function (e, t) {
          var a;
          var i = e;
          var r = x(e);
          g -= t;
          b += t;
          p -= t;
          C += t;
          while (r && (i = i.offsetParent) && i != D.body && i != O) {
            r = (Z(i, "opacity") || 1) > 0;
            if (r && Z(i, "overflow") != "visible") {
              a = i.getBoundingClientRect();
              r =
                C > a.left && p < a.right && b > a.top - 1 && g < a.bottom + 1;
            }
          }
          return r;
        };
        var t = function () {
          var e, t, a, i, r, n, s, o, l, u, f, c;
          var d = k.elements;
          if ((h = H.loadMode) && M < 8 && (e = d.length)) {
            t = 0;
            N++;
            for (; t < e; t++) {
              if (!d[t] || d[t]._lazyRace) {
                continue;
              }
              if (!E || (k.prematureUnveil && k.prematureUnveil(d[t]))) {
                R(d[t]);
                continue;
              }
              if (!(o = d[t][$]("data-expand")) || !(n = o * 1)) {
                n = w;
              }
              if (!u) {
                u =
                  !H.expand || H.expand < 1
                    ? O.clientHeight > 500 && O.clientWidth > 500
                      ? 500
                      : 370
                    : H.expand;
                k._defEx = u;
                f = u * H.expFactor;
                c = H.hFac;
                A = null;
                if (w < f && M < 1 && N > 2 && h > 2 && !D.hidden) {
                  w = f;
                  N = 0;
                } else if (h > 1 && N > 1 && M < 6) {
                  w = u;
                } else {
                  w = _;
                }
              }
              if (l !== n) {
                y = innerWidth + n * c;
                z = innerHeight + n;
                s = n * -1;
                l = n;
              }
              a = d[t].getBoundingClientRect();
              if (
                (b = a.bottom) >= s &&
                (g = a.top) <= z &&
                (C = a.right) >= s * c &&
                (p = a.left) <= y &&
                (b || C || p || g) &&
                (H.loadHidden || x(d[t])) &&
                ((m && M < 3 && !o && (h < 3 || N < 4)) || W(d[t], n))
              ) {
                R(d[t]);
                r = !0;
                if (M > 9) {
                  break;
                }
              } else if (
                !r &&
                m &&
                !i &&
                M < 4 &&
                N < 4 &&
                h > 2 &&
                (v[0] || H.preloadAfterLoad) &&
                (v[0] ||
                  (!o && (b || C || p || g || d[t][$](H.sizesAttr) != "auto")))
              ) {
                i = v[0] || d[t];
              }
            }
            if (i && !r) {
              R(i);
            }
          }
        };
        var a = ae(t);
        var S = function (e) {
          var t = e.target;
          if (t._lazyCache) {
            delete t._lazyCache;
            return;
          }
          L(e);
          K(t, H.loadedClass);
          Q(t, H.loadingClass);
          V(t, B);
          X(t, "lazyloaded");
        };
        var i = te(S);
        var B = function (e) {
          i({ target: e.target });
        };
        var T = function (e, t) {
          var a = e.getAttribute("data-load-mode") || H.iframeLoadMode;
          if (a == 0) {
            e.contentWindow.location.replace(t);
          } else if (a == 1) {
            e.src = t;
          }
        };
        var F = function (e) {
          var t;
          var a = e[$](H.srcsetAttr);
          if ((t = H.customMedia[e[$]("data-media") || e[$]("media")])) {
            e.setAttribute("media", t);
          }
          if (a) {
            e.setAttribute("srcset", a);
          }
        };
        var s = te(function (t, e, a, i, r) {
          var n, s, o, l, u, f;
          if (!(u = X(t, "lazybeforeunveil", e)).defaultPrevented) {
            if (i) {
              if (a) {
                K(t, H.autosizesClass);
              } else {
                t.setAttribute("sizes", i);
              }
            }
            s = t[$](H.srcsetAttr);
            n = t[$](H.srcAttr);
            if (r) {
              o = t.parentNode;
              l = o && j.test(o.nodeName || "");
            }
            f = e.firesLoad || ("src" in t && (s || n || l));
            u = { target: t };
            K(t, H.loadingClass);
            if (f) {
              clearTimeout(c);
              c = I(L, 2500);
              V(t, B, !0);
            }
            if (l) {
              G.call(o.getElementsByTagName("source"), F);
            }
            if (s) {
              t.setAttribute("srcset", s);
            } else if (n && !l) {
              if (d.test(t.nodeName)) {
                T(t, n);
              } else {
                t.src = n;
              }
            }
            if (r && (s || l)) {
              Y(t, { src: n });
            }
          }
          if (t._lazyRace) {
            delete t._lazyRace;
          }
          Q(t, H.lazyClass);
          ee(function () {
            var e = t.complete && t.naturalWidth > 1;
            if (!f || e) {
              if (e) {
                K(t, H.fastLoadedClass);
              }
              S(u);
              t._lazyCache = !0;
              I(function () {
                if ("_lazyCache" in t) {
                  delete t._lazyCache;
                }
              }, 9);
            }
            if (t.loading == "lazy") {
              M--;
            }
          }, !0);
        });
        var R = function (e) {
          if (e._lazyRace) {
            return;
          }
          var t;
          var a = n.test(e.nodeName);
          var i = a && (e[$](H.sizesAttr) || e[$]("sizes"));
          var r = i == "auto";
          if (
            (r || !m) &&
            a &&
            (e[$]("src") || e.srcset) &&
            !e.complete &&
            !J(e, H.errorClass) &&
            J(e, H.lazyClass)
          ) {
            return;
          }
          t = X(e, "lazyunveilread").detail;
          if (r) {
            re.updateElem(e, !0, e.offsetWidth);
          }
          e._lazyRace = !0;
          M++;
          s(e, t, r, i, a);
        };
        var r = ie(function () {
          H.loadMode = 3;
          a();
        });
        var o = function () {
          if (H.loadMode == 3) {
            H.loadMode = 2;
          }
          r();
        };
        var l = function () {
          if (m) {
            return;
          }
          if (f.now() - e < 999) {
            I(l, 999);
            return;
          }
          m = !0;
          H.loadMode = 3;
          a();
          q("scroll", o, !0);
        };
        return {
          _: function () {
            e = f.now();
            k.elements = D.getElementsByClassName(H.lazyClass);
            v = D.getElementsByClassName(H.lazyClass + " " + H.preloadClass);
            q("scroll", a, !0);
            q("resize", a, !0);
            q("pageshow", function (e) {
              if (e.persisted) {
                var t = D.querySelectorAll("." + H.loadingClass);
                if (t.length && t.forEach) {
                  U(function () {
                    t.forEach(function (e) {
                      if (e.complete) {
                        R(e);
                      }
                    });
                  });
                }
              }
            });
            if (u.MutationObserver) {
              new MutationObserver(a).observe(O, {
                childList: !0,
                subtree: !0,
                attributes: !0,
              });
            } else {
              O[P]("DOMNodeInserted", a, !0);
              O[P]("DOMAttrModified", a, !0);
              setInterval(a, 999);
            }
            q("hashchange", a, !0);
            [
              "focus",
              "mouseover",
              "click",
              "load",
              "transitionend",
              "animationend",
            ].forEach(function (e) {
              D[P](e, a, !0);
            });
            if (/d$|^c/.test(D.readyState)) {
              l();
            } else {
              q("load", l);
              D[P]("DOMContentLoaded", a);
              I(l, 2e4);
            }
            if (k.elements.length) {
              t();
              ee._lsFlush();
            } else {
              a();
            }
          },
          checkElems: a,
          unveil: R,
          _aLSL: o,
        };
      })(),
      re = (function () {
        var a;
        var n = te(function (e, t, a, i) {
          var r, n, s;
          e._lazysizesWidth = i;
          i += "px";
          e.setAttribute("sizes", i);
          if (j.test(t.nodeName || "")) {
            r = t.getElementsByTagName("source");
            for (n = 0, s = r.length; n < s; n++) {
              r[n].setAttribute("sizes", i);
            }
          }
          if (!a.detail.dataAttr) {
            Y(e, a.detail);
          }
        });
        var i = function (e, t, a) {
          var i;
          var r = e.parentNode;
          if (r) {
            a = s(e, r, a);
            i = X(e, "lazybeforesizes", { width: a, dataAttr: !!t });
            if (!i.defaultPrevented) {
              a = i.detail.width;
              if (a && a !== e._lazysizesWidth) {
                n(e, r, i, a);
              }
            }
          }
        };
        var e = function () {
          var e;
          var t = a.length;
          if (t) {
            e = 0;
            for (; e < t; e++) {
              i(a[e]);
            }
          }
        };
        var t = ie(e);
        return {
          _: function () {
            a = D.getElementsByClassName(H.autosizesClass);
            q("resize", t);
          },
          checkElems: t,
          updateElem: i,
        };
      })(),
      t = function () {
        if (!t.i && D.getElementsByClassName) {
          t.i = !0;
          re._();
          e._();
        }
      };
    return (
      I(function () {
        H.init && t();
      }),
      (k = {
        cfg: H,
        autoSizer: re,
        loader: e,
        init: t,
        uP: Y,
        aC: K,
        rC: Q,
        hC: J,
        fire: X,
        gW: s,
        rAF: ee,
      })
    );
  })(e, e.document, Date);
  (e.lazySizes = t),
    "object" == typeof module && module.exports && (module.exports = t);
})("undefined" != typeof window ? window : {});
("use strict");
!(function (e, t) {
  if ("object" == typeof module && "object" == typeof module.exports) {
    if (!e.document)
      throw new Error("HC Off-canvas Nav requires a browser to run.");
    module.exports = t(e);
  } else
    "function" == typeof define && define.amd
      ? define("hcOffcanvasNav", [], t(e))
      : t(e);
})("undefined" != typeof window ? window : this, function (re) {
  function i(e, t) {
    if (
      ((t = t || {}),
      !(e =
        "string" == typeof e
          ? "#" === e.charAt(0) && -1 === e.indexOf(" ")
            ? ie.querySelector(e)
            : ie.querySelectorAll(e)
          : e))
    )
      return !1;
    var ee = i.Helpers;
    void 0 !== t.maxWidth &&
      (ee.deprecated("maxWidth", "disableAt", "option"),
      (t.disableAt = t.maxWidth));
    var te = Object.assign(
      {},
      {
        width: 280,
        height: "auto",
        disableAt: !1,
        pushContent: null,
        swipeGestures: !0,
        expanded: !1,
        position: "left",
        levelOpen: "overlap",
        levelSpacing: 40,
        levelTitles: !0,
        closeOpenLevels: !0,
        closeActiveLevel: !1,
        navTitle: null,
        navClass: "",
        disableBody: !0,
        closeOnClick: !0,
        closeOnEsc: !0,
        customToggle: null,
        activeToggleClass: null,
        bodyInsert: "prepend",
        keepClasses: !0,
        removeOriginalNav: !1,
        rtl: !1,
        insertClose: !0,
        insertBack: !0,
        levelTitleAsBack: !0,
        labelClose: "",
        labelBack: "Back",
      },
      t
    );
    function ne(e) {
      if (ae.length) {
        for (
          var t = !1, n = (e = "string" == typeof e ? [e] : e).length, a = 0;
          a < n;
          a++
        )
          -1 !== ae.indexOf(e[a]) && (t = !0);
        return t;
      }
    }
    function n(e) {
      if (e.querySelector("ul") || "UL" === e.tagName) {
        var b = "menu-nav-" + ++oe,
          s = ee.printStyle("menu-offcanvas-" + oe + "-style"),
          o = "keydown.hcOffcanvasNav",
          v = te.activeToggleClass || "toggle-open",
          u = ee.createElement("nav", { id: b }),
          d = ee.createElement("div", { class: "nav-container" });
        u.addEventListener("click", ee.stopPropagation), u.appendChild(d);
        var n,
          p,
          a,
          f = null,
          h = null,
          m = null,
          t = {},
          g = !1,
          y = !1,
          E = null,
          L = 0,
          A = 0,
          x = 0,
          C = null,
          O = {},
          k = [],
          N = !1,
          T = [],
          r = null,
          i = null,
          l = !1,
          c = !1;
        te.customToggle
          ? (f = ee.getElements(te.customToggle))
          : ((f = [
              ee.createElement("a", { href: "#" }, ee.createElement("span")),
            ]),
            e.insertAdjacentElement("afterend", f[0])),
          f &&
            f.length &&
            f.forEach(function (e) {
              e.addEventListener("click", J(e)),
                e.classList.add("menu-nav-trigger", b),
                e.setAttribute("role", "button"),
                e.setAttribute("aria-label", (te.ariaLabels || {}).open),
                e.setAttribute("aria-controls", b),
                e.setAttribute("aria-expanded", !1),
                e.addEventListener("keydown", function (e) {
                  ("Enter" !== e.key && 13 !== e.keyCode) ||
                    setTimeout(function () {
                      w(0, 0);
                    }, 0);
                });
            });
        var w = function (e, t, n) {
            var a, r, i, s;
            "number" != typeof t ||
              ("number" != typeof e && !T.length) ||
              ((a = Array.prototype.filter.call(
                d.querySelectorAll(".nav-wrapper"),
                function (e) {
                  return (
                    e.getAttribute("data-level") == t &&
                    ("number" != typeof n ||
                      ("number" == typeof n &&
                        e.getAttribute("data-index") == n))
                  );
                }
              )[0]),
              (a = ee.children(a, ".nav-content")[0]),
              (r = ee.children(a, ".nav-close, .nav-back")),
              (a = ee.children(a, "ul")),
              (a = ee.children(a, "li")),
              (a = ee.children(a, ":not(.nav-wrapper)")),
              (a = [].concat(r, a)),
              (a = Array.prototype.map
                .call(a, function (e) {
                  return Array.prototype.slice.call(
                    e.querySelectorAll(
                      '[tabindex="0"], a[role="menuitem"], a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
                    )
                  );
                })
                .flat()),
              (a = Array.prototype.filter.call(a, function (e) {
                return "-1" !== e.getAttribute("tabindex");
              })) &&
                (u.classList.add("user-is-tabbing"),
                (i = a[0]),
                (s = a[a.length - 1]),
                "number" == typeof e
                  ? a[e].focus()
                  : (T[T.length - 1].focus(), T.pop()),
                ie.removeEventListener(o),
                ie.addEventListener(o, function (e) {
                  ("Tab" !== e.key && 9 !== e.keyCode) ||
                    (e.shiftKey
                      ? ie.activeElement === i &&
                        (e.preventDefault(), s.focus())
                      : ie.activeElement === s &&
                        (e.preventDefault(), i.focus()));
                })));
          },
          S = function () {
            ie.removeEventListener(o),
              h &&
                setTimeout(function () {
                  h.focus();
                }, p);
          },
          M = function () {
            (d.style.transition = "none"), (u.style.display = "block");
            var e = ee.formatSizeVal((A = d.offsetWidth)),
              t = ee.formatSizeVal((x = d.offsetHeight));
            s.add(
              ".menu-offcanvas-nav." + b + ".nav-position-left .nav-container",
              "transform: translate3d(-" + e + ", 0, 0)"
            ),
              s.add(
                ".menu-offcanvas-nav." +
                  b +
                  ".nav-position-right .nav-container",
                "transform: translate3d(" + e + ", 0, 0)"
              ),
              s.add(
                ".menu-offcanvas-nav." + b + ".nav-position-top .nav-container",
                "transform: translate3d(0, -" + t + ", 0)"
              ),
              s.add(
                ".menu-offcanvas-nav." +
                  b +
                  ".nav-position-bottom .nav-container",
                "transform: translate3d(0, " + t + ", 0)"
              ),
              s.insert(),
              (u.style.display = ""),
              (d.style.transition = ""),
              (n = re.getComputedStyle(d).transitionProperty),
              (p = ee.toMs(re.getComputedStyle(d).transitionDuration)),
              (a = re.getComputedStyle(d).transitionTimingFunction),
              te.pushContent &&
                m &&
                n &&
                s.add(
                  ee.getElementCssTag(m),
                  "transition: " + n + " " + p + "ms " + a
                ),
              s.insert();
          },
          j = function (e) {
            var t = !!f && re.getComputedStyle(f[0]).display,
              n = !!te.disableAt && "max-width: " + (te.disableAt - 1) + "px",
              a = ee.formatSizeVal(te.width),
              r = ee.formatSizeVal(te.height),
              i = ee.formatSizeVal(te.levelSpacing);
            (!ee.isNumeric(a) && -1 === a.indexOf("px")) || (A = parseInt(a)),
              (!ee.isNumeric(r) && -1 === r.indexOf("px")) || (x = parseInt(r)),
              ne(["disableAt", "position"]) && s.reset(),
              s.add(".menu-offcanvas-nav." + b, "display: block", n),
              s.add(".menu-nav-original." + b, "display: none", n),
              t &&
                s.add(
                  ".menu-nav-trigger." + b,
                  "display: " + (t && "none" !== t ? t : "block"),
                  n
                ),
              -1 !== ["left", "right"].indexOf(te.position)
                ? s.add(
                    ".menu-offcanvas-nav." + b + " .nav-container",
                    "width: " + a
                  )
                : s.add(
                    ".menu-offcanvas-nav." + b + " .nav-container",
                    "height: " + r
                  ),
              s.add(
                ".menu-offcanvas-nav." +
                  b +
                  ".nav-position-left .nav-container",
                "transform: translate3d(-" + a + ", 0, 0);"
              ),
              s.add(
                ".menu-offcanvas-nav." +
                  b +
                  ".nav-position-right .nav-container",
                "transform: translate3d(" + a + ", 0, 0);"
              ),
              s.add(
                ".menu-offcanvas-nav." + b + ".nav-position-top .nav-container",
                "transform: translate3d(0, -" + r + ", 0);"
              ),
              s.add(
                ".menu-offcanvas-nav." +
                  b +
                  ".nav-position-bottom .nav-container",
                "transform: translate3d(0, " + r + ", 0);"
              ),
              s.add(
                ".menu-offcanvas-nav." +
                  b +
                  ".nav-levels-overlap.nav-position-left li.level-open > .nav-wrapper",
                "transform: translate3d(-" + i + ", 0, 0)",
                n
              ),
              s.add(
                ".menu-offcanvas-nav." +
                  b +
                  ".nav-levels-overlap.nav-position-right li.level-open > .nav-wrapper",
                "transform: translate3d(" + i + ", 0, 0)",
                n
              ),
              s.add(
                ".menu-offcanvas-nav." +
                  b +
                  ".nav-levels-overlap.nav-position-top li.level-open > .nav-wrapper",
                "transform: translate3d(0, -" + i + ", 0)",
                n
              ),
              s.add(
                ".menu-offcanvas-nav." +
                  b +
                  ".nav-levels-overlap.nav-position-bottom li.level-open > .nav-wrapper",
                "transform: translate3d(0, " + i + ", 0)",
                n
              ),
              s.insert(),
              (e && !ne("pushContent")) ||
                (m = te.pushContent ? ee.getElements(te.pushContent)[0] : null),
              (d.style.transition = "none");
            (n = u.classList.contains(le)),
              (n = [
                "menu-offcanvas-nav",
                te.navClass || "",
                b,
                "nav-levels-" + (te.levelOpen || "none"),
                "nav-position-" + te.position,
                te.disableBody ? "disable-body" : "",
                ee.isIos ? "is-ios" : "",
                ee.isTouchDevice ? "touch-device" : "",
                n ? le : "",
                te.rtl ? "rtl" : "",
                !0 !== te.insertClose || te.labelClose
                  ? ""
                  : "nav-close-button-empty",
              ]
                .join(" ")
                .trim()
                .replace(/  +/g, " "));
            u.removeEventListener("click"),
              (u.className = n),
              u.setAttribute("aria-hidden", !0),
              ie.documentElement.style.setProperty(
                "--nav-level-spacing",
                te.levelSpacing + "px"
              ),
              te.disableBody && u.addEventListener("click", $),
              e ? M() : setTimeout(M, 0);
          },
          P = function () {
            t = (function l(e, t) {
              var n = [];
              Array.prototype.forEach.call(e, function (e) {
                var o;
                ("UL" === e.tagName || e instanceof HTMLHeadingElement) &&
                  ((o = {
                    tagName: e.tagName,
                    id: t,
                    htmlClass: e.getAttribute("class") || null,
                    items: [],
                  }),
                  e instanceof HTMLHeadingElement
                    ? (o.content = ee.clone(e, !1, !0))
                    : (null !== e.getAttribute("data-nav-active") &&
                        ((E = t), e.removeAttribute("data-nav-active")),
                      Array.prototype.forEach.call(e.children, function (e) {
                        var t =
                            null !== e.getAttribute("data-nav-custom-content"),
                          n = t
                            ? e.childNodes
                            : Array.prototype.filter
                                .call(e.children, function (e) {
                                  return (
                                    "UL" !== e.tagName && !e.querySelector("ul")
                                  );
                                })
                                .concat(
                                  e.children.length ? [] : [e.firstChild]
                                ),
                          a = t
                            ? []
                            : Array.prototype.slice.call(
                                e.querySelectorAll("ul")
                              ),
                          r = a.length
                            ? [].concat(
                                Array.prototype.filter.call(
                                  a[0].parentNode.children,
                                  function (e) {
                                    return (
                                      "UL" === e.tagName ||
                                      e instanceof HTMLHeadingElement
                                    );
                                  }
                                )
                              )
                            : [],
                          a = null;
                        if (!n.length) {
                          for (var i = "", s = 0; s < e.childNodes.length; s++)
                            e.childNodes[s].nodeType === Node.TEXT_NODE &&
                              (i += e.childNodes[s].textContent.trim());
                          n = [ie.createTextNode(i)];
                        }
                        r.length &&
                          (ee.data(e, "menu-uniqid")
                            ? (a = ee.data(e, "menu-uniqid"))
                            : ((a = Math.random().toString(36).substr(2)),
                              ee.data(e, "menu-uniqid", a))),
                          null !== e.getAttribute("data-nav-active") &&
                            ((E = a), e.removeAttribute("data-nav-active")),
                          o.items.push({
                            id: a,
                            htmlClass: e.getAttribute("class") || "",
                            content: n,
                            custom: t,
                            subnav: r.length ? l(r, a) : [],
                            highlight:
                              null !== e.getAttribute("data-nav-highlight"),
                          });
                      })),
                  n.push(o));
              });
              return n;
            })(
              "UL" === e.tagName
                ? [e]
                : Array.prototype.filter.call(e.children, function (e) {
                    return (
                      "UL" === e.tagName || e instanceof HTMLHeadingElement
                    );
                  }),
              null
            );
          },
          _ = function (e) {
            if (e) {
              for (; d.firstChild; ) d.removeChild(d.firstChild);
              O = {};
            }
            !(function p(n, e, f, h, t, a) {
              var m = ee.createElement("div", {
                class: "nav-wrapper nav-wrapper-" + f,
                "data-level": f,
                "data-index": t || 0,
              });
              var r = ee.createElement("div", { class: "nav-content" });
              m.addEventListener("click", ee.stopPropagation);
              m.appendChild(r);
              e.appendChild(m);
              h &&
                (0 === f || (0 < f && "overlap" === te.levelOpen)) &&
                ((e =
                  "string" == typeof h
                    ? h
                    : ee.clone(
                        re.jQuery && h instanceof re.jQuery && h.length
                          ? h[0]
                          : h,
                        !0,
                        !0
                      )),
                r.insertBefore(
                  ee.createElement(
                    "h2",
                    {
                      id: 0 === f ? b + "-nav-title" : null,
                      class: 0 === f ? "nav-title" : "level-title",
                    },
                    e
                  ),
                  r.firstChild
                ),
                0 === f &&
                  "string" == typeof h &&
                  u.setAttribute("aria-labelledby", b + "-nav-title"));
              var i = -1;
              n.forEach(function (e, t) {
                var d;
                "UL" === e.tagName
                  ? (i++,
                    (d = ee.createElement("ul", {
                      id: e.id
                        ? 1 < n.length
                          ? "menu-" + e.id + "-" + i
                          : "menu-" + e.id
                        : null,
                      role: "menu",
                      "aria-level": f + 1,
                    })),
                    r.appendChild(d),
                    te.keepClasses &&
                      e.htmlClass &&
                      d.classList.add.apply(
                        d.classList,
                        e.htmlClass.split(" ")
                      ),
                    e.items.forEach(function (t, e) {
                      var n = t.content;
                      if (t.custom) {
                        var a = ee.createElement(
                          "li",
                          { class: "nav-item nav-item-custom" },
                          ee.createElement(
                            "div",
                            { class: "nav-custom-content" },
                            Array.prototype.map.call(n, function (e) {
                              return ee.clone(e, !0, !0);
                            })
                          )
                        );
                        return (
                          te.keepClasses &&
                            t.htmlClass &&
                            a.classList.add.apply(
                              a.classList,
                              t.htmlClass.split(" ")
                            ),
                          void d.appendChild(a)
                        );
                      }
                      var r,
                        i = Array.prototype.filter.call(n, function (e) {
                          return (
                            "A" === e.tagName ||
                            (e.nodeType !== Node.TEXT_NODE &&
                              e.querySelector("a"))
                          );
                        })[0];
                      i
                        ? (r = ee.clone(i, !1, !0)).classList.add(
                            "nav-item-link"
                          )
                        : (r = ee.createElement(
                            t.subnav.length ? "a" : "span",
                            { class: "nav-item-link" },
                            Array.prototype.map.call(n, function (e) {
                              return ee.clone(e, !0, !0);
                            })
                          )),
                        "A" === r.tagName &&
                          (r.setAttribute("tabindex", "0"),
                          r.setAttribute("role", "menuitem"),
                          r.getAttribute("href") ||
                            r.setAttribute("href", "#")),
                        i &&
                          r.addEventListener("click", function (e) {
                            e.stopPropagation(),
                              ee.hasListener(i, "click") && i.click();
                          }),
                        "#" === r.getAttribute("href") &&
                          r.addEventListener("click", ee.preventDefault),
                        te.closeOnClick &&
                          (W()
                            ? "A" !== r.tagName ||
                              "false" === r.dataset.navClose ||
                              (null !== r.getAttribute("disabled") &&
                                "false" !== r.getAttribute("disabled")) ||
                              (t.subnav.length &&
                                (!r.getAttribute("href") ||
                                  "#" === r.getAttribute("href").charAt(0))) ||
                              r.addEventListener("click", $)
                            : "A" !== r.tagName ||
                              "false" === r.dataset.navClose ||
                              (null !== r.getAttribute("disabled") &&
                                "false" !== r.getAttribute("disabled")) ||
                              r.addEventListener("click", $));
                      var s,
                        o,
                        l,
                        c,
                        v,
                        u = ee.createElement("li", { class: "nav-item" });
                      u.appendChild(r),
                        d.appendChild(u),
                        te.keepClasses &&
                          t.htmlClass &&
                          u.classList.add.apply(
                            u.classList,
                            t.htmlClass.split(" ")
                          ),
                        t.highlight && u.classList.add("nav-highlight"),
                        ee.wrap(
                          r,
                          ee.createElement("div", { class: "nav-item-wrapper" })
                        ),
                        t.subnav.length &&
                          ((s = f + 1),
                          (o = t.id),
                          (l = ""),
                          O[s] || (O[s] = 0),
                          u.classList.add("nav-parent"),
                          W()
                            ? ((c = O[s]),
                              (v = ee.createElement("input", {
                                type: "checkbox",
                                id: b + "-" + s + "-" + c,
                                class: "menu-chk",
                                tabindex: -1,
                                "data-level": s,
                                "data-index": c,
                                value: o,
                              })).addEventListener("click", ee.stopPropagation),
                              v.addEventListener("change", Q),
                              u.insertBefore(v, u.firstChild),
                              (a = function (e) {
                                e.addEventListener("click", function (e) {
                                  e.stopPropagation(),
                                    v.setAttribute(
                                      "checked",
                                      "true" !== v.getAttribute("checked")
                                    ),
                                    "createEvent" in ie &&
                                      ((e =
                                        ie.createEvent("HTMLEvents")).initEvent(
                                        "change",
                                        !1,
                                        !0
                                      ),
                                      v.dispatchEvent(e));
                                }),
                                  e.addEventListener("keydown", function (e) {
                                    ("Enter" !== e.key && 13 !== e.keyCode) ||
                                      ((N = !0), T.push(this));
                                  }),
                                  e.setAttribute(
                                    "aria-controls",
                                    1 < t.subnav.length
                                      ? t.subnav
                                          .filter(function (e) {
                                            return "UL" === e.tagName;
                                          })
                                          .map(function (e, t) {
                                            return "menu-" + e.id + "-" + t;
                                          })
                                          .join(" ")
                                      : "menu-" + o
                                  ),
                                  e.setAttribute(
                                    "aria-haspopup",
                                    "overlap" === te.levelOpen
                                  ),
                                  e.setAttribute("aria-expanded", !1);
                              }),
                              -1 !== k.indexOf(o) &&
                                (m.classList.add("sub-level-open"),
                                m.addEventListener("click", function () {
                                  return Z(s, c);
                                }),
                                u.classList.add("level-open"),
                                v.setAttribute("checked", !0)),
                              (l =
                                !0 === te.levelTitles
                                  ? n[0].textContent.trim()
                                  : ""),
                              r.getAttribute("href") &&
                              "#" !== r.getAttribute("href")
                                ? ((n = ee.createElement(
                                    "a",
                                    {
                                      href: "#",
                                      class: "nav-next",
                                      "aria-label":
                                        (te.ariaLabels || {}).submenu +
                                        ": " +
                                        l,
                                      role: "menuitem",
                                      tabindex: 0,
                                    },
                                    ee.createElement("span")
                                  )).addEventListener(
                                    "click",
                                    ee.preventClick()
                                  ),
                                  a(n),
                                  te.rtl
                                    ? r.parentNode.appendChild(n)
                                    : r.parentNode.insertBefore(
                                        n,
                                        r.nextSibling
                                      ))
                                : (r.appendChild(
                                    ee.createElement(
                                      "span",
                                      { class: "nav-next" },
                                      ee.createElement("span")
                                    )
                                  ),
                                  a(r)))
                            : r.setAttribute("aria-expanded", !0),
                          O[s]++,
                          p(
                            t.subnav,
                            u,
                            s,
                            l,
                            O[s] - 1,
                            "string" == typeof h ? h : ""
                          ));
                    }))
                  : r.appendChild(e.content);
              });
              f &&
                void 0 !== t &&
                !1 !== te.insertBack &&
                "overlap" === te.levelOpen &&
                ((s = ee.children(r, "ul")),
                (a = (te.levelTitleAsBack && a) || te.labelBack || ""),
                (l = ee.createElement(
                  "a",
                  {
                    href: "#",
                    class: "nav-back-button",
                    role: "menuitem",
                    tabindex: 0,
                  },
                  [a, ee.createElement("span")]
                )),
                !0 === te.insertBack || 0 === te.insertBack
                  ? ((a = ee.createElement("div", { class: "nav-back" }, l)),
                    r.insertBefore(a, ee.children(r, ":not(.level-title)")[0]))
                  : ((o = ee.createElement(
                      "li",
                      { class: "nav-item nav-back" },
                      l
                    )),
                    ee.insertAt(
                      o,
                      !0 === te.insertBack ? 0 : te.insertBack,
                      s
                    )),
                (o = function () {
                  return Z(f, t);
                }),
                ee.wrap(
                  l,
                  ee.createElement("div", { class: "nav-item-wrapper" })
                ),
                l.addEventListener("click", ee.preventClick(o)),
                l.addEventListener("keydown", function (e) {
                  ("Enter" !== e.key && 13 !== e.keyCode) || (N = !0);
                }));
              {
                var s, o, l;
                0 === f &&
                  !1 !== te.insertClose &&
                  ((s = ee.createElement(
                    "a",
                    {
                      href: "#",
                      class:
                        "nav-close-button" +
                        (te.labelClose ? " has-label" : ""),
                      role: "menuitem",
                      tabindex: 0,
                      "aria-label": te.labelClose
                        ? ""
                        : (te.ariaLabels || {}).close,
                    },
                    [te.labelClose || "", ee.createElement("span")]
                  )).addEventListener("click", ee.preventClick($)),
                  s.addEventListener("keydown", function (e) {
                    ("Enter" !== e.key && 13 !== e.keyCode) || S();
                  }),
                  h && !0 === te.insertClose
                    ? r.insertBefore(
                        ee.createElement("div", { class: "nav-close" }, s),
                        r.children[1]
                      )
                    : !0 === te.insertClose
                    ? r.insertBefore(
                        ee.createElement("div", { class: "nav-close" }, s),
                        r.firstChild
                      )
                    : ((o = ee.children(r, "ul")),
                      (l = ee.createElement(
                        "li",
                        { class: "nav-item nav-close" },
                        s
                      )),
                      ee.wrap(
                        s,
                        ee.createElement("div", { class: "nav-item-wrapper" })
                      ),
                      ee.insertAt(l, te.insertClose, o)));
              }
            })(t, d, 0, te.navTitle);
          },
          B = function (t) {
            return function (e) {
              ("left" !== te.position && "right" !== te.position) ||
                ((r = e.touches[0].clientX),
                (i = e.touches[0].clientY),
                "doc" === t
                  ? c ||
                    (ie.addEventListener("touchmove", D, ee.supportsPassive),
                    ie.addEventListener("touchend", U, ee.supportsPassive))
                  : ((c = !0),
                    d.addEventListener("touchmove", z, ee.supportsPassive),
                    d.addEventListener("touchend", I, ee.supportsPassive)));
            };
          },
          q = function (e, t) {
            re.addEventListener(
              "touchmove",
              ee.preventDefault,
              ee.supportsPassive
            ),
              (u.style.visibility = "visible"),
              (d.style[ee.browserPrefix("transition")] = "none"),
              ee.setTransform(d, e, te.position),
              m &&
                ((m.style[ee.browserPrefix("transition")] = "none"),
                ee.setTransform(m, t, te.position));
          },
          H = function (e, t, n, a) {
            void 0 === t && (t = !0),
              void 0 === n && (n = !1),
              void 0 === a && (a = !1),
              re.removeEventListener(
                "touchmove",
                ee.preventDefault,
                ee.supportsPassive
              ),
              (d.style[ee.browserPrefix("transition")] = ""),
              ee.setTransform(d, n, te.position),
              m &&
                ((m.style[ee.browserPrefix("transition")] = ""),
                ee.setTransform(m, a, te.position)),
              "open" === e
                ? K()
                : ($(),
                  t
                    ? setTimeout(function () {
                        u.style.visibility = "";
                      }, p)
                    : (u.style.visibility = ""));
          },
          D = function (e) {
            var t = 0 - (r - e.touches[0].clientX),
              e = "overlap" === te.levelOpen ? Y() * te.levelSpacing : 0,
              e = A + e,
              t =
                "left" === te.position
                  ? Math.min(Math.max(t, 0), e)
                  : Math.abs(Math.min(Math.max(t, -e), 0));
            (("left" === te.position && r < 50) ||
              ("right" === te.position && r > ie.body.clientWidth - 50)) &&
              ((l = !0), q(0 - (A - t), Math.abs(t)));
          },
          U = function e(t) {
            var n;
            ie.removeEventListener("touchmove", D),
              ie.removeEventListener("touchend", e),
              l &&
                ((n = t.changedTouches[t.changedTouches.length - 1]),
                (t = 0 - (r - n.clientX)),
                (n = "overlap" === te.levelOpen ? Y() * te.levelSpacing : 0),
                (n = A + n),
                (t =
                  "left" === te.position
                    ? Math.min(Math.max(t, 0), n)
                    : Math.abs(Math.min(Math.max(t, -n), 0)))
                  ? H(70 < t ? "open" : "close")
                  : H("close", !1),
                (i = r = null),
                (l = !1));
          },
          z = function (e) {
            var t = 0 - (r - e.touches[0].clientX),
              n = 0 - (i - e.touches[0].clientY);
            Math.abs(t) < Math.abs(n) ||
              ((e = "overlap" === te.levelOpen ? Y() * te.levelSpacing : 0),
              (n = A + e),
              (t =
                "left" === te.position
                  ? Math.min(Math.max(t, -n), 0)
                  : Math.min(Math.max(t, 0), n)),
              (("left" === te.position && t < 0) ||
                ("right" === te.position && 0 < t)) &&
                ((l = !0), q(-Math.abs(t) + e, n - Math.abs(t))));
          },
          I = function e(t) {
            var n, a;
            d.removeEventListener("touchmove", z),
              d.removeEventListener("touchend", e),
              (c = !1),
              l &&
                ((n = t.changedTouches[t.changedTouches.length - 1]),
                (a = 0 - (r - n.clientX)),
                (t = "overlap" === te.levelOpen ? Y() * te.levelSpacing : 0),
                (n = A + t),
                (a =
                  "left" === te.position
                    ? Math.abs(Math.min(Math.max(a, -n), 0))
                    : Math.abs(Math.min(Math.max(a, 0), n))) === n
                  ? H("close", !1)
                  : 50 < a
                  ? H("close")
                  : H("open", !0, t, n),
                (i = r = null),
                (l = !1));
          };
        j(),
          P(),
          _(),
          !0 === te.removeOriginalNav
            ? e.parentNode.removeChild(e)
            : e.classList.add("menu-nav-original", b),
          "prepend" === te.bodyInsert
            ? ie.body.insertBefore(u, ie.body.firstChild)
            : "append" === te.bodyInsert && ie.body.appendChild(u),
          !0 === te.expanded && ((y = !0), K()),
          te.swipeGestures &&
            (d.addEventListener("touchstart", B("nav"), ee.supportsPassive),
            ie.addEventListener("touchstart", B("doc"), ee.supportsPassive)),
          te.closeOnEsc &&
            ie.addEventListener("keydown", function (e) {
              !g ||
                ("Escape" !== e.key && 27 !== e.keyCode) ||
                (0 === (e = Y()) ? ($(), S()) : (Z(e, G()), w(null, e - 1)));
            });
        B = ee.debounce(M, 500);
        re.addEventListener("resize", B, ee.supportsPassive);
        var X = function (e, t, n) {
          var a,
            r,
            i = ie.querySelector("#" + b + "-" + e + "-" + t);
          i &&
            ((a = i.value),
            (t = (r = i.parentNode).closest(".nav-wrapper")),
            i.setAttribute("checked", !1),
            t.classList.remove("sub-level-open"),
            r.classList.remove("level-open"),
            r
              .querySelectorAll("[aria-controls]")[0]
              .setAttribute("aria-expanded", !1),
            -1 !== k.indexOf(a) && k.splice(k.indexOf(a), 1),
            n &&
              "overlap" === te.levelOpen &&
              (t.removeEventListener("click"),
              t.addEventListener("click", ee.stopPropagation),
              ee.setTransform(d, (e - 1) * te.levelSpacing, te.position),
              m &&
                ((t = "x" === ee.getAxis(te.position) ? A : x),
                ee.setTransform(
                  m,
                  t + (e - 1) * te.levelSpacing,
                  te.position
                ))));
        };
        return (
          (u.on = function (e, t) {
            u.addEventListener(e, t);
          }),
          (u.off = function (e, t) {
            u.removeEventListener(e, t);
          }),
          (u.getSettings = function () {
            return Object.assign({}, te);
          }),
          (u.isOpen = F),
          (u.open = K),
          (u.close = $),
          (u.toggle = J(null)),
          (u.update = function (e, t) {
            if (((ae = []), "object" == typeof e)) {
              for (var n in e) te[n] !== e[n] && ae.push(n);
              te = Object.assign({}, te, e);
            }
            !0 === e || !0 === t
              ? te.removeOriginalNav
                ? console.warn(
                    "%c! HC Offcanvas Nav:%c Can't update because original navigation has been removed. Disable `removeOriginalNav` option.",
                    "color: #fa253b",
                    "color: default"
                  )
                : (j(!0), P(), _(!0))
              : (j(!0), _(!0));
          }),
          u
        );
      }
      function Q() {
        var e = Number(this.dataset.level),
          t = Number(this.dataset.index);
        ("true" === this.getAttribute("checked") ? R : Z)(e, t);
      }
      function V(e) {
        e.classList.remove(v), e.setAttribute("aria-expanded", !1);
      }
      function W() {
        return !1 !== te.levelOpen && "none" !== te.levelOpen;
      }
      function F() {
        return g;
      }
      function Y() {
        return k.length
          ? Number(
              Array.prototype.filter.call(
                d.querySelectorAll(".menu-chk"),
                function (e) {
                  return e.value == k[k.length - 1];
                }
              )[0].dataset.level
            )
          : 0;
      }
      function G() {
        return k.length
          ? Number(
              Array.prototype.filter.call(
                d.querySelectorAll(".menu-chk"),
                function (e) {
                  return e.value == k[k.length - 1];
                }
              )[0].dataset.index
            )
          : 0;
      }
      function K(e, t) {
        var n, a;
        if (
          (!g || void 0 !== t) &&
          (g ||
            ((g = !0),
            (u.style.visibility = "visible"),
            u.setAttribute("aria-hidden", !1),
            u.classList.add(le),
            f &&
              (f.forEach(V),
              h && (h.classList.add(v), h.setAttribute("aria-expanded", !0))),
            "expand" === te.levelOpen && C && clearTimeout(C),
            te.disableBody &&
              ((L =
                re.pageYOffset ||
                se.scrollTop ||
                ie.documentElement.scrollTop ||
                ie.body.scrollTop),
              ie.documentElement.scrollHeight >
                ie.documentElement.clientHeight &&
                se.classList.add("menu-nav-yscroll"),
              ie.body.classList.add("menu-nav-open"),
              L && (ie.body.style.top = -L + "px")),
            m &&
              ((n = "x" === ee.getAxis(te.position) ? A : x),
              ee.setTransform(m, n, te.position)),
            y
              ? (y = !1)
              : (u._eventListeners.toggle &&
                  u._eventListeners.toggle.forEach(function (e) {
                    e.fn(
                      ee.customEventObject("toggle", u, u, { action: "open" }),
                      Object.assign({}, te)
                    );
                  }),
                setTimeout(function () {
                  u._eventListeners.open &&
                    u._eventListeners.open.forEach(function (e) {
                      e.fn(
                        ee.customEventObject("open", u, u),
                        Object.assign({}, te)
                      );
                    });
                }, p))),
          W())
        ) {
          if (
            ("number" != typeof e && !ee.isNumeric(e)) ||
            ("number" != typeof t && !ee.isNumeric(t))
          )
            E
              ? ((a = Array.prototype.filter.call(
                  d.querySelectorAll(".menu-chk"),
                  function (e) {
                    return e.value == E;
                  }
                )[0]),
                (!te.closeActiveLevel && te.closeOpenLevels) || (E = null))
              : !1 === te.closeOpenLevels &&
                (a = (a = Array.prototype.filter.call(
                  d.querySelectorAll(".menu-chk"),
                  function (e) {
                    return "true" === e.getAttribute("checked");
                  }
                ))[a.length - 1]);
          else if (!(a = ie.querySelector("#" + b + "-" + e + "-" + t)))
            return void console.warn(
              "HC Offcanvas Nav: level " + e + " doesn't have index " + t
            );
          if (a) {
            var r = [];
            if (
              ((e = Number(a.dataset.level)),
              (t = Number(a.dataset.index)),
              1 < e)
            ) {
              for (var i = []; a && a !== ie; a = a.parentNode)
                a.matches(".nav-wrapper") && i.push(a);
              for (var s = 0; s < i.length; s++) {
                var o = i[s],
                  l = Number(o.dataset.level);
                0 < l && r.push({ level: l, index: Number(o.dataset.index) });
              }
              r = r.reverse();
            }
            r.push({ level: e, index: t });
            for (var c = 0; c < r.length; c++) R(r[c].level, r[c].index, !1);
          }
        }
      }
      function $() {
        var e;
        g &&
          ((g = !1),
          m && ee.setTransform(m, !1),
          u.classList.remove(le),
          u.classList.remove("user-is-tabbing"),
          u.setAttribute("aria-hidden", !0),
          d.removeAttribute("style"),
          f && f.forEach(V),
          "expand" === te.levelOpen &&
          -1 !== ["top", "bottom"].indexOf(te.position)
            ? Z(0)
            : W() &&
              (C = setTimeout(
                function () {
                  Z(0);
                },
                "expand" === te.levelOpen ? p : 0
              )),
          te.disableBody &&
            (ie.body.classList.remove("menu-nav-open"),
            se.classList.remove("menu-nav-yscroll"),
            L &&
              ((ie.body.style.top = ""),
              (ie.body.scrollTop = L),
              (se.scrollTop = L),
              "bottom" === te.position &&
                ((e = L),
                setTimeout(function () {
                  (ie.body.scrollTop = e), (se.scrollTop = e);
                }, 0)),
              (L = 0))),
          u._eventListeners.toggle &&
            u._eventListeners.toggle.forEach(function (e) {
              e.fn(
                ee.customEventObject("toggle", u, u, { action: "close" }),
                Object.assign({}, te)
              );
            }),
          setTimeout(function () {
            (u.style.visibility = ""),
              u._eventListeners.close &&
                u._eventListeners.close.forEach(function (e) {
                  e.fn(
                    ee.customEventObject("close", u, u),
                    Object.assign({}, te)
                  );
                }),
              u._eventListeners["close.once"] &&
                u._eventListeners["close.once"].forEach(function (e) {
                  e.fn(
                    ee.customEventObject("close.once", u, u),
                    Object.assign({}, te)
                  );
                }),
              u.removeEventListener("close.once");
          }, p));
      }
      function J(t) {
        return function (e) {
          e && (e.preventDefault(), e.stopPropagation()),
            t && (h = t),
            (g ? $ : K)();
        };
      }
      function R(t, n, e) {
        void 0 === e && (e = !0);
        var a = ie.querySelector("#" + b + "-" + t + "-" + n),
          r = a.value,
          i = a.parentNode,
          s = i.closest(".nav-wrapper"),
          o = ee.children(i, ".nav-wrapper")[0];
        !1 === e && (o.style.transition = "none"),
          a.setAttribute("checked", !0),
          s.classList.add("sub-level-open"),
          i.classList.add("level-open"),
          i
            .querySelectorAll("[aria-controls]")[0]
            .setAttribute("aria-expanded", !0),
          !1 === e &&
            setTimeout(function () {
              o.style.transition = "";
            }, p),
          -1 === k.indexOf(r) && k.push(r),
          "overlap" === te.levelOpen &&
            (s.addEventListener("click", function () {
              return Z(t, n);
            }),
            ee.setTransform(d, t * te.levelSpacing, te.position),
            m &&
              ((s = "x" === ee.getAxis(te.position) ? A : x),
              ee.setTransform(m, s + t * te.levelSpacing, te.position))),
          u._eventListeners["open.level"] &&
            u._eventListeners["open.level"].forEach(function (e) {
              e.fn(
                ee.customEventObject("open.level", u, o, {
                  currentLevel: t,
                  currentIndex: n,
                }),
                Object.assign({}, te)
              );
            }),
          N && (w(0, t, n), (N = !1));
      }
      function Z(t, e) {
        for (var n, a = t; a <= Object.keys(O).length; a++)
          if (a === t && void 0 !== e) X(t, e, !0);
          else if (0 !== t || te.closeOpenLevels)
            for (var r = 0; r < O[a]; r++) X(a, r, a === t);
        0 < t &&
          u._eventListeners["close.level"] &&
          ((n = ie
            .querySelector("#" + b + "-" + t + "-" + e)
            .closest(".nav-wrapper")),
          u._eventListeners["close.level"].forEach(function (e) {
            e.fn(
              ee.customEventObject("close.level", u, n, {
                currentLevel: t - 1,
                currentIndex: G(),
              }),
              Object.assign({}, te)
            );
          })),
          N && (w(null, t - 1), (N = !1));
      }
      console.error(
        "%c! HC Offcanvas Nav:%c Navigation must contain <ul> element.",
        "color: #fa253b",
        "color: default"
      );
    }
    te.ariaLabels = Object.assign(
      {},
      { open: "Open Menu", close: "Close Menu", submenu: "Submenu" },
      t.ariaLabels
    );
    var ae = [];
    if (Array.isArray(e) || e instanceof NodeList) {
      for (var a = [], r = 0; r < e.length; r++) a.push(n(e[r]));
      return 1 < a.length ? a : a[0];
    }
    return n(e);
  }
  var n,
    a,
    ie = re.document,
    se = ie.getElementsByTagName("html")[0],
    oe = 0,
    le = "nav-open";
  return (
    void 0 !== re.jQuery &&
      ((n = re.jQuery),
      (a = "hcOffcanvasNav"),
      n.fn.extend({
        hcOffcanvasNav: function (t) {
          return this.length
            ? this.each(function () {
                var e = n.data(this, a);
                e ? e.update(t) : ((e = new i(this, t)), n.data(this, a, e));
              })
            : this;
        },
      })),
    (re.hcOffcanvasNav = re.hcOffcanvasNav || i),
    i
  );
}),
  (function (n) {
    var e = n.hcOffcanvasNav,
      o = n.document;
    "function" != typeof Object.assign &&
      Object.defineProperty(Object, "assign", {
        value: function (e, t) {
          if (null == e)
            throw new TypeError("Cannot convert undefined or null to object");
          for (var n = Object(e), a = 1; a < arguments.length; a++) {
            var r = arguments[a];
            if (null != r)
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
          }
          return n;
        },
        writable: !0,
        configurable: !0,
      }),
      Element.prototype.closest ||
        (Element.prototype.closest = function (e) {
          var t = this;
          do {
            if (Element.prototype.matches.call(t, e)) return t;
          } while (
            null !== (t = t.parentElement || t.parentNode) &&
            1 === t.nodeType
          );
          return null;
        }),
      Array.prototype.flat ||
        Object.defineProperty(Array.prototype, "flat", {
          configurable: !0,
          value: function n() {
            var a = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
            return a
              ? Array.prototype.reduce.call(
                  this,
                  function (e, t) {
                    return (
                      Array.isArray(t)
                        ? e.push.apply(e, n.call(t, a - 1))
                        : e.push(t),
                      e
                    );
                  },
                  []
                )
              : Array.prototype.slice.call(this);
          },
          writable: !0,
        }),
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.matchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.oMatchesSelector ||
          Element.prototype.webkitMatchesSelector);
    var t = !1;
    try {
      var a = Object.defineProperty({}, "passive", {
        get: function () {
          t = { passive: !1 };
        },
      });
      n.addEventListener("testPassive", null, a),
        n.removeEventListener("testPassive", null, a);
    } catch (e) {}
    function r(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    }
    function i(e) {
      return "auto" === e ? "100%" : r(e) && 0 !== e ? e + "px" : e;
    }
    function s(e) {
      var t = ["Webkit", "Moz", "Ms", "O"],
        n = (o.body || o.documentElement).style,
        a = e.charAt(0).toUpperCase() + e.slice(1);
      if (void 0 !== n[e]) return e;
      for (var r = 0; r < t.length; r++)
        if (void 0 !== n[t[r] + a]) return t[r] + a;
      return !1;
    }
    function l(e, t) {
      if (e instanceof Element)
        return t
          ? Array.prototype.filter.call(e.children, function (e) {
              return e.matches(t);
            })
          : e.children;
      var n = [];
      return (
        Array.prototype.forEach.call(e, function (e) {
          n = t
            ? n.concat(
                Array.prototype.filter.call(e.children, function (e) {
                  return e.matches(t);
                })
              )
            : n.concat(Array.prototype.slice.call(e.children));
        }),
        n
      );
    }
    var c =
        (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
          (!!navigator.platform &&
            /iPad|iPhone|iPod/.test(navigator.platform))) &&
        !n.MSStream,
      v =
        "ontouchstart" in n ||
        navigator.maxTouchPoints ||
        (n.DocumentTouch && o instanceof DocumentTouch),
      u = function (o) {
        var l = Node.prototype[o + "EventListener"];
        return function (e, t, n) {
          if (this) {
            var a = e.split(".")[0];
            if (
              ((this._eventListeners = this._eventListeners || {}), "add" === o)
            ) {
              this._eventListeners[e] = this._eventListeners[e] || [];
              var r = { fn: t };
              n && (r.options = n),
                this._eventListeners[e].push(r),
                l.call(this, a, t, n);
            } else if ("function" == typeof t)
              for (var i in (l.call(this, a, t, n), this._eventListeners))
                (this._eventListeners[i] = this._eventListeners[i].filter(
                  function (e) {
                    return e.fn !== t;
                  }
                )),
                  this._eventListeners[i].length ||
                    delete this._eventListeners[i];
            else if (this._eventListeners[e]) {
              for (var s = this._eventListeners[e].length; s--; )
                l.call(
                  this,
                  a,
                  this._eventListeners[e][s].fn,
                  this._eventListeners[e][s].options
                ),
                  this._eventListeners[e].splice(s, 1);
              this._eventListeners[e].length || delete this._eventListeners[e];
            }
          }
        };
      };
    (Node.prototype.addEventListener = u("add")),
      (Node.prototype.removeEventListener = u("remove"));
    function d(e, t, n) {
      void 0 === t && (t = {});
      var a,
        r = o.createElement(e);
      for (a in t)
        "class" !== a
          ? (!t[a] && 0 !== t[a]) || r.setAttribute(a, t[a])
          : (r.className = t[a]);
      if (n) {
        Array.isArray(n) || (n = [n]);
        for (var i = 0; i < n.length; i++)
          if ("object" == typeof n[i] && n[i].length && !n[i].nodeType)
            for (var s = 0; s < n[i].length; s++) r.appendChild(n[i][s]);
          else
            r.appendChild(
              "string" == typeof n[i] ? o.createTextNode(n[i]) : n[i]
            );
      }
      return r;
    }
    function p(e) {
      return -1 !== ["left", "right"].indexOf(e) ? "x" : "y";
    }
    (a = function e(t) {
      return "string" == typeof t
        ? t
        : t.getAttribute("id")
        ? "#" + t.getAttribute("id")
        : t.getAttribute("class")
        ? t.tagName.toLowerCase() +
          "." +
          t.getAttribute("class").replace(/\s+/g, ".")
        : e(t.parentNode) + " > " + t.tagName.toLowerCase();
    }),
      (u = (function () {
        s("transform");
        return function (e, t, n) {
          !1 === t || "" === t
            ? (e.style.transform = "")
            : "x" === p(n)
            ? (e.style.transform =
                "translate3d(" + i("left" === n ? t : -t) + ",0,0)")
            : (e.style.transform =
                "translate3d(0," + i("top" === n ? t : -t) + ",0)");
        };
      })());
    e.Helpers = {
      supportsPassive: t,
      isIos: c,
      isTouchDevice: v,
      isNumeric: r,
      formatSizeVal: i,
      toMs: function (e) {
        return parseFloat(e) * (/\ds$/.test(e) ? 1e3 : 1);
      },
      stopPropagation: function (e) {
        return e.stopPropagation();
      },
      preventDefault: function (e) {
        return e.preventDefault();
      },
      preventClick: function (t) {
        return function (e) {
          e.preventDefault(),
            e.stopPropagation(),
            "function" == typeof t && t();
        };
      },
      browserPrefix: s,
      children: l,
      wrap: function (e, t) {
        e.parentNode.insertBefore(t, e), t.appendChild(e);
      },
      data: function (e, t, n) {
        if (((e.hcOffcanvasNav = e.hcOffcanvasNav || {}), void 0 === n))
          return e.hcOffcanvasNav[t];
        e.hcOffcanvasNav[t] = n;
      },
      clone: function (e, t, n) {
        var a = e.cloneNode(n || !1),
          r =
            e instanceof Element
              ? [e].concat(
                  Array.prototype.slice.call(e.getElementsByTagName("*"))
                )
              : [],
          e =
            a instanceof Element
              ? [a].concat(
                  Array.prototype.slice.call(a.getElementsByTagName("*"))
                )
              : [];
        return (
          t || (r.shift(), e.shift()),
          n &&
            (function (e, t) {
              for (var n = 0; n < e.length; n++)
                if (e[n]._eventListeners)
                  for (var a in e[n]._eventListeners)
                    for (var r = 0; r < e[n]._eventListeners[a].length; r++)
                      t[r].addEventListener(
                        a,
                        e[n]._eventListeners[a][r].fn,
                        e[n]._eventListeners[a][r].options
                      );
            })(r, e),
          a
        );
      },
      customEventObject: function (e, n, a, r) {
        return new (function (e) {
          for (var t in ((this.bubbles = !1),
          (this.cancelable = !1),
          (this.composed = !1),
          (this.currentTarget = a),
          (this.data = r ? {} : null),
          (this.defaultPrevented = !1),
          (this.eventPhase = 0),
          (this.isTrusted = !1),
          (this.target = n),
          (this.timeStamp = Date.now()),
          (this.type = e),
          r))
            this.data[t] = r[t];
        })(e);
      },
      hasListener: function (e, t) {
        return (t ? (e._eventListeners || {})[t] : e._eventListeners) || !1;
      },
      debounce: function (a, r, i) {
        var s;
        return function () {
          var e = this,
            t = arguments,
            n = i && !s;
          clearTimeout(s),
            (s = setTimeout(function () {
              (s = null), i || a.apply(e, t);
            }, r)),
            n && a.apply(e, t);
        };
      },
      createElement: d,
      getElements: function (e) {
        var t = null;
        return (
          "string" == typeof e
            ? (t = o.querySelectorAll(e))
            : n.jQuery && e instanceof n.jQuery && e.length
            ? (t = e.toArray())
            : e instanceof Element && (t = [e]),
          t
        );
      },
      getElementCssTag: a,
      printStyle: function (e) {
        var r = d("style", { id: e }),
          i = {},
          s = {};
        o.head.appendChild(r);
        function a(e) {
          return (
            ";" !== e.substr(-1) && (e += ";" !== e.substr(-1) ? ";" : ""), e
          );
        }
        return {
          reset: function () {
            (i = {}), (s = {});
          },
          add: function (e, t, n) {
            (e = e.trim()),
              (t = t.trim()),
              n
                ? ((n = n.trim()), (s[n] = s[n] || {}), (s[n][e] = a(t)))
                : (i[e] = a(t));
          },
          remove: function (e, t) {
            (e = e.trim()),
              t
                ? ((t = t.trim()), void 0 !== s[t][e] && delete s[t][e])
                : void 0 !== i[e] && delete i[e];
          },
          insert: function () {
            var e,
              t,
              n = "";
            for (e in s) {
              for (var a in ((n += "@media screen and (" + e + ") {\n"), s[e]))
                n += "  " + a + " { " + s[e][a] + " }\n";
              n += "}\n";
            }
            for (t in i) n += t + " { " + i[t] + " }\n";
            r.innerHTML = n;
          },
        };
      },
      insertAt: function (e, t, n) {
        var a = l(n),
          r = a.length,
          r =
            -1 < (t = "last" === (t = "first" === t ? 0 : t) ? r : t)
              ? Math.max(0, Math.min(t, r))
              : Math.max(0, Math.min(r + t, r));
        0 === r
          ? n[0].insertBefore(e, n[0].firstChild)
          : a[r - 1].insertAdjacentElement("afterend", e);
      },
      getAxis: p,
      setTransform: u,
      deprecated: function (e, t, n) {
        console.warn(
          "%cHC Off-canvas Nav:%c " +
            n +
            "%c '" +
            e +
            "'%c is now deprecated and will be removed in the future. Use%c '" +
            t +
            "'%c option instead. See details about plugin usage at https://github.com/somewebmedia/menu-offcanvas-nav.",
          "color: #fa253b",
          "color: default",
          "color: #5595c6",
          "color: default",
          "color: #5595c6",
          "color: default"
        );
      },
    };
  })(window);
function r(n, t) {
  for (var i = 0; i < t.length; i++) {
    var r = t[i];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(n, r.key, r);
  }
}
function Jt(n, t, i) {
  t && r(n.prototype, t),
    i && r(n, i),
    Object.defineProperty(n, "prototype", { writable: !1 });
}
/*!
 * Splide.js
 * Version  : 4.1.2
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var n, t;
(n = this),
  (t = function () {
    "use strict";
    var v = "(prefers-reduced-motion: reduce)",
      G = 4,
      rn = 5,
      r = {
        CREATED: 1,
        MOUNTED: 2,
        IDLE: 3,
        MOVING: G,
        SCROLLING: rn,
        DRAGGING: 6,
        DESTROYED: 7,
      };
    function D(n) {
      n.length = 0;
    }
    function o(n, t, i) {
      return Array.prototype.slice.call(n, t, i);
    }
    function R(n) {
      return n.bind.apply(n, [null].concat(o(arguments, 1)));
    }
    function on() {}
    var p = setTimeout;
    function h(n) {
      return requestAnimationFrame(n);
    }
    function u(n, t) {
      return typeof t === n;
    }
    function un(n) {
      return !c(n) && u("object", n);
    }
    var e = Array.isArray,
      x = R(u, "function"),
      C = R(u, "string"),
      en = R(u, "undefined");
    function c(n) {
      return null === n;
    }
    function m(n) {
      try {
        return n instanceof (n.ownerDocument.defaultView || window).HTMLElement;
      } catch (n) {
        return !1;
      }
    }
    function y(n) {
      return e(n) ? n : [n];
    }
    function g(n, t) {
      y(n).forEach(t);
    }
    function b(n, t) {
      return -1 < n.indexOf(t);
    }
    function k(n, t) {
      return n.push.apply(n, y(t)), n;
    }
    function A(t, n, i) {
      t &&
        g(n, function (n) {
          n && t.classList[i ? "add" : "remove"](n);
        });
    }
    function M(n, t) {
      A(n, C(t) ? t.split(" ") : t, !0);
    }
    function L(n, t) {
      g(t, n.appendChild.bind(n));
    }
    function O(n, i) {
      g(n, function (n) {
        var t = (i || n).parentNode;
        t && t.insertBefore(n, i);
      });
    }
    function cn(n, t) {
      return m(n) && (n.msMatchesSelector || n.matches).call(n, t);
    }
    function S(n, t) {
      n = n ? o(n.children) : [];
      return t
        ? n.filter(function (n) {
            return cn(n, t);
          })
        : n;
    }
    function fn(n, t) {
      return t ? S(n, t)[0] : n.firstElementChild;
    }
    var E = Object.keys;
    function w(t, i, n) {
      t &&
        (n ? E(t).reverse() : E(t)).forEach(function (n) {
          "__proto__" !== n && i(t[n], n);
        });
    }
    function an(r) {
      return (
        o(arguments, 1).forEach(function (i) {
          w(i, function (n, t) {
            r[t] = i[t];
          });
        }),
        r
      );
    }
    function d(i) {
      return (
        o(arguments, 1).forEach(function (n) {
          w(n, function (n, t) {
            e(n)
              ? (i[t] = n.slice())
              : un(n)
              ? (i[t] = d({}, un(i[t]) ? i[t] : {}, n))
              : (i[t] = n);
          });
        }),
        i
      );
    }
    function sn(t, n) {
      g(n || E(t), function (n) {
        delete t[n];
      });
    }
    function P(n, i) {
      g(n, function (t) {
        g(i, function (n) {
          t && t.removeAttribute(n);
        });
      });
    }
    function I(i, t, r) {
      un(t)
        ? w(t, function (n, t) {
            I(i, t, n);
          })
        : g(i, function (n) {
            c(r) || "" === r ? P(n, t) : n.setAttribute(t, String(r));
          });
    }
    function j(n, t, i) {
      n = document.createElement(n);
      return t && (C(t) ? M : I)(n, t), i && L(i, n), n;
    }
    function _(n, t, i) {
      if (en(i)) return getComputedStyle(n)[t];
      c(i) || (n.style[t] = "" + i);
    }
    function ln(n, t) {
      _(n, "display", t);
    }
    function dn(n) {
      (n.setActive && n.setActive()) || n.focus({ preventScroll: !0 });
    }
    function z(n, t) {
      return n.getAttribute(t);
    }
    function vn(n, t) {
      return n && n.classList.contains(t);
    }
    function N(n) {
      return n.getBoundingClientRect();
    }
    function T(n) {
      g(n, function (n) {
        n && n.parentNode && n.parentNode.removeChild(n);
      });
    }
    function hn(n) {
      return fn(new DOMParser().parseFromString(n, "text/html").body);
    }
    function F(n, t) {
      n.preventDefault(),
        t && (n.stopPropagation(), n.stopImmediatePropagation());
    }
    function pn(n, t) {
      return n && n.querySelector(t);
    }
    function gn(n, t) {
      return t ? o(n.querySelectorAll(t)) : [];
    }
    function X(n, t) {
      A(n, t, !1);
    }
    function mn(n) {
      return n.timeStamp;
    }
    function W(n) {
      return C(n) ? n : n ? n + "px" : "";
    }
    var yn = "splide",
      f = "data-" + yn;
    function bn(n, t) {
      if (!n) throw new Error("[" + yn + "] " + (t || ""));
    }
    var Y = Math.min,
      wn = Math.max,
      xn = Math.floor,
      kn = Math.ceil,
      U = Math.abs;
    function Sn(n, t, i) {
      return U(n - t) < i;
    }
    function En(n, t, i, r) {
      var o = Y(t, i),
        t = wn(t, i);
      return r ? o < n && n < t : o <= n && n <= t;
    }
    function q(n, t, i) {
      var r = Y(t, i),
        t = wn(t, i);
      return Y(wn(r, n), t);
    }
    function Ln(n) {
      return (0 < n) - (n < 0);
    }
    function On(t, n) {
      return (
        g(n, function (n) {
          t = t.replace("%s", "" + n);
        }),
        t
      );
    }
    function An(n) {
      return n < 10 ? "0" + n : "" + n;
    }
    var _n = {};
    function zn() {
      var c = [];
      function i(n, i, r) {
        g(n, function (t) {
          t &&
            g(i, function (n) {
              n.split(" ").forEach(function (n) {
                n = n.split(".");
                r(t, n[0], n[1]);
              });
            });
        });
      }
      return {
        bind: function (n, t, u, e) {
          i(n, t, function (n, t, i) {
            var r = "addEventListener" in n,
              o = r
                ? n.removeEventListener.bind(n, t, u, e)
                : n.removeListener.bind(n, u);
            r ? n.addEventListener(t, u, e) : n.addListener(u),
              c.push([n, t, i, u, o]);
          });
        },
        unbind: function (n, t, o) {
          i(n, t, function (t, i, r) {
            c = c.filter(function (n) {
              return (
                !!(
                  n[0] !== t ||
                  n[1] !== i ||
                  n[2] !== r ||
                  (o && n[3] !== o)
                ) || (n[4](), !1)
              );
            });
          });
        },
        dispatch: function (n, t, i) {
          var r;
          return (
            "function" == typeof CustomEvent
              ? (r = new CustomEvent(t, { bubbles: !0, detail: i }))
              : (r = document.createEvent("CustomEvent")).initCustomEvent(
                  t,
                  !0,
                  !1,
                  i
                ),
            n.dispatchEvent(r),
            r
          );
        },
        destroy: function () {
          c.forEach(function (n) {
            n[4]();
          }),
            D(c);
        },
      };
    }
    var B = "mounted",
      H = "move",
      Dn = "moved",
      Mn = "click",
      Pn = "active",
      In = "inactive",
      Rn = "visible",
      Cn = "hidden",
      J = "refresh",
      K = "updated",
      jn = "resize",
      Nn = "resized",
      Tn = "scroll",
      V = "scrolled",
      a = "destroy",
      Gn = "navigation:mounted",
      Fn = "autoplay:play",
      Xn = "autoplay:pause",
      Wn = "lazyload:loaded",
      Yn = "sk",
      Un = "sh";
    function Q(n) {
      var i = n ? n.event.bus : document.createDocumentFragment(),
        r = zn();
      return (
        n && n.event.on(a, r.destroy),
        an(r, {
          bus: i,
          on: function (n, t) {
            r.bind(i, y(n).join(" "), function (n) {
              t.apply(t, e(n.detail) ? n.detail : []);
            });
          },
          off: R(r.unbind, i),
          emit: function (n) {
            r.dispatch(i, n, o(arguments, 1));
          },
        })
      );
    }
    function qn(t, n, i, r) {
      var o,
        u,
        e = Date.now,
        c = 0,
        f = !0,
        a = 0;
      function s() {
        if (!f) {
          if (
            ((c = t ? Y((e() - o) / t, 1) : 1),
            i && i(c),
            1 <= c && (n(), (o = e()), r && ++a >= r))
          )
            return l();
          u = h(s);
        }
      }
      function l() {
        f = !0;
      }
      function d() {
        u && cancelAnimationFrame(u), (f = !(u = c = 0));
      }
      return {
        start: function (n) {
          n || d(), (o = e() - (n ? c * t : 0)), (f = !1), (u = h(s));
        },
        rewind: function () {
          (o = e()), (c = 0), i && i(c);
        },
        pause: l,
        cancel: d,
        set: function (n) {
          t = n;
        },
        isPaused: function () {
          return f;
        },
      };
    }
    function s(n) {
      var t = n;
      return {
        set: function (n) {
          t = n;
        },
        is: function (n) {
          return b(y(n), t);
        },
      };
    }
    var n = "Arrow",
      Bn = n + "Left",
      Hn = n + "Right",
      t = n + "Up",
      n = n + "Down",
      Jn = "ttb",
      l = {
        width: ["height"],
        left: ["top", "right"],
        right: ["bottom", "left"],
        x: ["y"],
        X: ["Y"],
        Y: ["X"],
        ArrowLeft: [t, Hn],
        ArrowRight: [n, Bn],
      };
    var Z = "role",
      $ = "tabindex",
      i = "aria-",
      Kn = i + "controls",
      Vn = i + "current",
      Qn = i + "selected",
      nn = i + "label",
      Zn = i + "labelledby",
      $n = i + "hidden",
      nt = i + "orientation",
      tt = i + "roledescription",
      it = i + "live",
      rt = i + "busy",
      ot = i + "atomic",
      ut = [Z, $, "disabled", Kn, Vn, nn, Zn, $n, nt, tt],
      i = yn + "__",
      et = yn,
      ct = i + "track",
      ft = i + "list",
      at = i + "slide",
      st = at + "--clone",
      lt = at + "__container",
      dt = i + "arrows",
      vt = i + "arrow",
      ht = vt + "--prev",
      pt = vt + "--next",
      gt = i + "pagination",
      mt = gt + "__page",
      yt = i + "progress" + "__bar",
      bt = i + "toggle",
      wt = i + "sr",
      tn = "is-active",
      xt = "is-prev",
      kt = "is-next",
      St = "is-visible",
      Et = "is-loading",
      Lt = "is-focus-in",
      Ot = "is-overflow",
      At = [tn, St, xt, kt, Et, Lt, Ot];
    var _t = "touchstart mousedown",
      zt = "touchmove mousemove",
      Dt = "touchend touchcancel mouseup click";
    var Mt = "slide",
      Pt = "loop",
      It = "fade";
    function Rt(o, r, t, u) {
      var e,
        n = Q(o),
        i = n.on,
        c = n.emit,
        f = n.bind,
        a = o.Components,
        s = o.root,
        l = o.options,
        d = l.isNavigation,
        v = l.updateOnMove,
        h = l.i18n,
        p = l.pagination,
        g = l.slideFocus,
        m = a.Direction.resolve,
        y = z(u, "style"),
        b = z(u, nn),
        w = -1 < t,
        x = fn(u, "." + lt);
      function k() {
        var n = o.splides
          .map(function (n) {
            n = n.splide.Components.Slides.getAt(r);
            return n ? n.slide.id : "";
          })
          .join(" ");
        I(u, nn, On(h.slideX, (w ? t : r) + 1)),
          I(u, Kn, n),
          I(u, Z, g ? "button" : ""),
          g && P(u, tt);
      }
      function S() {
        e || E();
      }
      function E() {
        var n, t, i;
        e ||
          ((n = o.index),
          (i = L()) !== vn(u, tn) &&
            (A(u, tn, i), I(u, Vn, (d && i) || ""), c(i ? Pn : In, O)),
          (i = (function () {
            if (o.is(It)) return L();
            var n = N(a.Elements.track),
              t = N(u),
              i = m("left", !0),
              r = m("right", !0);
            return xn(n[i]) <= kn(t[i]) && xn(t[r]) <= kn(n[r]);
          })()),
          (t = !i && (!L() || w)),
          o.state.is([G, rn]) || I(u, $n, t || ""),
          I(gn(u, l.focusableNodes || ""), $, t ? -1 : ""),
          g && I(u, $, t ? -1 : 0),
          i !== vn(u, St) && (A(u, St, i), c(i ? Rn : Cn, O)),
          i ||
            document.activeElement !== u ||
            ((t = a.Slides.getAt(o.index)) && dn(t.slide)),
          A(u, xt, r === n - 1),
          A(u, kt, r === n + 1));
      }
      function L() {
        var n = o.index;
        return n === r || (l.cloneStatus && n === t);
      }
      var O = {
        index: r,
        slideIndex: t,
        slide: u,
        container: x,
        isClone: w,
        mount: function () {
          w ||
            ((u.id = s.id + "-slide" + An(r + 1)),
            I(u, Z, p ? "tabpanel" : "group"),
            I(u, tt, h.slide),
            I(u, nn, b || On(h.slideLabel, [r + 1, o.length]))),
            f(u, "click", R(c, Mn, O)),
            f(u, "keydown", R(c, Yn, O)),
            i([Dn, Un, V], E),
            i(Gn, k),
            v && i(H, S);
        },
        destroy: function () {
          (e = !0),
            n.destroy(),
            X(u, At),
            P(u, ut),
            I(u, "style", y),
            I(u, nn, b || "");
        },
        update: E,
        style: function (n, t, i) {
          _((i && x) || u, n, t);
        },
        isWithin: function (n, t) {
          return (
            (n = U(n - r)),
            (n = w || (!l.rewind && !o.is(Pt)) ? n : Y(n, o.length - n)) <= t
          );
        },
      };
      return O;
    }
    var Ct = f + "-interval";
    var jt = { passive: !1, capture: !0 };
    var Nt = { Spacebar: " ", Right: Hn, Left: Bn, Up: t, Down: n };
    function Tt(n) {
      return (n = C(n) ? n : n.key), Nt[n] || n;
    }
    var Gt = "keydown";
    var Ft = f + "-lazy",
      Xt = Ft + "-srcset",
      Wt = "[" + Ft + "], [" + Xt + "]";
    var Yt = [" ", "Enter"];
    var Ut = Object.freeze({
        __proto__: null,
        Media: function (r, n, o) {
          var u = r.state,
            t = o.breakpoints || {},
            e = o.reducedMotion || {},
            i = zn(),
            c = [];
          function f(n) {
            n && i.destroy();
          }
          function a(n, t) {
            t = matchMedia(t);
            i.bind(t, "change", s), c.push([n, t]);
          }
          function s() {
            var n = u.is(7),
              t = o.direction,
              i = c.reduce(function (n, t) {
                return d(n, t[1].matches ? t[0] : {});
              }, {});
            sn(o),
              l(i),
              o.destroy
                ? r.destroy("completely" === o.destroy)
                : n
                ? (f(!0), r.mount())
                : t !== o.direction && r.refresh();
          }
          function l(n, t, i) {
            d(o, n),
              t && d(Object.getPrototypeOf(o), n),
              (!i && u.is(1)) || r.emit(K, o);
          }
          return {
            setup: function () {
              var i = "min" === o.mediaQuery;
              E(t)
                .sort(function (n, t) {
                  return i ? +n - +t : +t - +n;
                })
                .forEach(function (n) {
                  a(t[n], "(" + (i ? "min" : "max") + "-width:" + n + "px)");
                }),
                a(e, v),
                s();
            },
            destroy: f,
            reduce: function (n) {
              matchMedia(v).matches && (n ? d(o, e) : sn(o, E(e)));
            },
            set: l,
          };
        },
        Direction: function (n, t, o) {
          return {
            resolve: function (n, t, i) {
              var r =
                "rtl" !== (i = i || o.direction) || t ? (i === Jn ? 0 : -1) : 1;
              return (
                (l[n] && l[n][r]) ||
                n.replace(/width|left|right/i, function (n, t) {
                  n = l[n.toLowerCase()][r] || n;
                  return 0 < t ? n.charAt(0).toUpperCase() + n.slice(1) : n;
                })
              );
            },
            orient: function (n) {
              return n * ("rtl" === o.direction ? 1 : -1);
            },
          };
        },
        Elements: function (n, t, i) {
          var r,
            o,
            u,
            e = Q(n),
            c = e.on,
            f = e.bind,
            a = n.root,
            s = i.i18n,
            l = {},
            d = [],
            v = [],
            h = [];
          function p() {
            (r = y("." + ct)),
              (o = fn(r, "." + ft)),
              bn(r && o, "A track/list element is missing."),
              k(d, S(o, "." + at + ":not(." + st + ")")),
              w(
                {
                  arrows: dt,
                  pagination: gt,
                  prev: ht,
                  next: pt,
                  bar: yt,
                  toggle: bt,
                },
                function (n, t) {
                  l[t] = y("." + n);
                }
              ),
              an(l, { root: a, track: r, list: o, slides: d });
            var n =
                a.id ||
                (function (n) {
                  return "" + n + An((_n[n] = (_n[n] || 0) + 1));
                })(yn),
              t = i.role;
            (a.id = n),
              (r.id = r.id || n + "-track"),
              (o.id = o.id || n + "-list"),
              !z(a, Z) && "SECTION" !== a.tagName && t && I(a, Z, t),
              I(a, tt, s.carousel),
              I(o, Z, "presentation"),
              m();
          }
          function g(n) {
            var t = ut.concat("style");
            D(d), X(a, v), X(r, h), P([r, o], t), P(a, n ? t : ["style", tt]);
          }
          function m() {
            X(a, v),
              X(r, h),
              (v = b(et)),
              (h = b(ct)),
              M(a, v),
              M(r, h),
              I(a, nn, i.label),
              I(a, Zn, i.labelledby);
          }
          function y(n) {
            n = pn(a, n);
            return n &&
              (function (n, t) {
                if (x(n.closest)) return n.closest(t);
                for (var i = n; i && 1 === i.nodeType && !cn(i, t); )
                  i = i.parentElement;
                return i;
              })(n, "." + et) === a
              ? n
              : void 0;
          }
          function b(n) {
            return [
              n + "--" + i.type,
              n + "--" + i.direction,
              i.drag && n + "--draggable",
              i.isNavigation && n + "--nav",
              n === et && tn,
            ];
          }
          return an(l, {
            setup: p,
            mount: function () {
              c(J, g),
                c(J, p),
                c(K, m),
                f(
                  document,
                  _t + " keydown",
                  function (n) {
                    u = "keydown" === n.type;
                  },
                  { capture: !0 }
                ),
                f(a, "focusin", function () {
                  A(a, Lt, !!u);
                });
            },
            destroy: g,
          });
        },
        Slides: function (r, o, u) {
          var n = Q(r),
            t = n.on,
            e = n.emit,
            c = n.bind,
            f = (n = o.Elements).slides,
            a = n.list,
            s = [];
          function i() {
            f.forEach(function (n, t) {
              d(n, t, -1);
            });
          }
          function l() {
            h(function (n) {
              n.destroy();
            }),
              D(s);
          }
          function d(n, t, i) {
            t = Rt(r, t, i, n);
            t.mount(),
              s.push(t),
              s.sort(function (n, t) {
                return n.index - t.index;
              });
          }
          function v(n) {
            return n
              ? p(function (n) {
                  return !n.isClone;
                })
              : s;
          }
          function h(n, t) {
            v(t).forEach(n);
          }
          function p(t) {
            return s.filter(
              x(t)
                ? t
                : function (n) {
                    return C(t) ? cn(n.slide, t) : b(y(t), n.index);
                  }
            );
          }
          return {
            mount: function () {
              i(), t(J, l), t(J, i);
            },
            destroy: l,
            update: function () {
              h(function (n) {
                n.update();
              });
            },
            register: d,
            get: v,
            getIn: function (n) {
              var t = o.Controller,
                i = t.toIndex(n),
                r = t.hasFocus() ? 1 : u.perPage;
              return p(function (n) {
                return En(n.index, i, i + r - 1);
              });
            },
            getAt: function (n) {
              return p(n)[0];
            },
            add: function (n, o) {
              g(n, function (n) {
                var t, i, r;
                m((n = C(n) ? hn(n) : n)) &&
                  ((t = f[o]) ? O(n, t) : L(a, n),
                  M(n, u.classes.slide),
                  (t = n),
                  (i = R(e, jn)),
                  (t = gn(t, "img")),
                  (r = t.length)
                    ? t.forEach(function (n) {
                        c(n, "load error", function () {
                          --r || i();
                        });
                      })
                    : i());
              }),
                e(J);
            },
            remove: function (n) {
              T(
                p(n).map(function (n) {
                  return n.slide;
                })
              ),
                e(J);
            },
            forEach: h,
            filter: p,
            style: function (t, i, r) {
              h(function (n) {
                n.style(t, i, r);
              });
            },
            getLength: function (n) {
              return (n ? f : s).length;
            },
            isEnough: function () {
              return s.length > u.perPage;
            },
          };
        },
        Layout: function (t, n, i) {
          var r,
            o,
            u,
            e = (a = Q(t)).on,
            c = a.bind,
            f = a.emit,
            a = n.Slides,
            s = n.Direction.resolve,
            l = (n = n.Elements).root,
            d = n.track,
            v = n.list,
            h = a.getAt,
            p = a.style;
          function g() {
            (r = i.direction === Jn),
              _(l, "maxWidth", W(i.width)),
              _(d, s("paddingLeft"), y(!1)),
              _(d, s("paddingRight"), y(!0)),
              m(!0);
          }
          function m(n) {
            var t = N(l);
            (!n && o.width === t.width && o.height === t.height) ||
              (_(
                d,
                "height",
                (function () {
                  var n = "";
                  r &&
                    (bn((n = b()), "height or heightRatio is missing."),
                    (n = "calc(" + n + " - " + y(!1) + " - " + y(!0) + ")"));
                  return n;
                })()
              ),
              p(s("marginRight"), W(i.gap)),
              p(
                "width",
                i.autoWidth ? null : W(i.fixedWidth) || (r ? "" : w())
              ),
              p(
                "height",
                W(i.fixedHeight) || (r ? (i.autoHeight ? null : w()) : b()),
                !0
              ),
              (o = t),
              f(Nn),
              u !== (u = O()) && (A(l, Ot, u), f("overflow", u)));
          }
          function y(n) {
            var t = i.padding,
              n = s(n ? "right" : "left");
            return (t && W(t[n] || (un(t) ? 0 : t))) || "0px";
          }
          function b() {
            return W(i.height || N(v).width * i.heightRatio);
          }
          function w() {
            var n = W(i.gap);
            return (
              "calc((100%" +
              (n && " + " + n) +
              ")/" +
              (i.perPage || 1) +
              (n && " - " + n) +
              ")"
            );
          }
          function x() {
            return N(v)[s("width")];
          }
          function k(n, t) {
            n = h(n || 0);
            return n ? N(n.slide)[s("width")] + (t ? 0 : L()) : 0;
          }
          function S(n, t) {
            var i,
              n = h(n);
            return n
              ? ((n = N(n.slide)[s("right")]),
                (i = N(v)[s("left")]),
                U(n - i) + (t ? 0 : L()))
              : 0;
          }
          function E(n) {
            return S(t.length - 1) - S(0) + k(0, n);
          }
          function L() {
            var n = h(0);
            return (n && parseFloat(_(n.slide, s("marginRight")))) || 0;
          }
          function O() {
            return t.is(It) || E(!0) > x();
          }
          return {
            mount: function () {
              var n, t, i;
              g(),
                c(
                  window,
                  "resize load",
                  ((n = R(f, jn)),
                  (i = qn(t || 0, n, null, 1)),
                  function () {
                    i.isPaused() && i.start();
                  })
                ),
                e([K, J], g),
                e(jn, m);
            },
            resize: m,
            listSize: x,
            slideSize: k,
            sliderSize: E,
            totalSize: S,
            getPadding: function (n) {
              return (
                parseFloat(_(d, s("padding" + (n ? "Right" : "Left")))) || 0
              );
            },
            isOverflow: O,
          };
        },
        Clones: function (c, i, f) {
          var t,
            r = Q(c),
            n = r.on,
            a = i.Elements,
            s = i.Slides,
            o = i.Direction.resolve,
            l = [];
          function u() {
            if ((n(J, d), n([K, jn], v), (t = h()))) {
              var o = t,
                u = s.get().slice(),
                e = u.length;
              if (e) {
                for (; u.length < o; ) k(u, u);
                k(u.slice(-o), u.slice(0, o)).forEach(function (n, t) {
                  var i = t < o,
                    r = (function (n, t) {
                      n = n.cloneNode(!0);
                      return (
                        M(n, f.classes.clone),
                        (n.id = c.root.id + "-clone" + An(t + 1)),
                        n
                      );
                    })(n.slide, t);
                  i ? O(r, u[0].slide) : L(a.list, r),
                    k(l, r),
                    s.register(r, t - o + (i ? 0 : e), n.index);
                });
              }
              i.Layout.resize(!0);
            }
          }
          function d() {
            e(), u();
          }
          function e() {
            T(l), D(l), r.destroy();
          }
          function v() {
            var n = h();
            t !== n && (t < n || !n) && r.emit(J);
          }
          function h() {
            var n,
              t = f.clones;
            return (
              c.is(Pt)
                ? en(t) &&
                  (t =
                    ((n = f[o("fixedWidth")] && i.Layout.slideSize(0)) &&
                      kn(N(a.track)[o("width")] / n)) ||
                    (f[o("autoWidth")] && c.length) ||
                    2 * f.perPage)
                : (t = 0),
              t
            );
          }
          return { mount: u, destroy: e };
        },
        Move: function (r, c, o) {
          var e,
            n = Q(r),
            t = n.on,
            f = n.emit,
            a = r.state.set,
            u = (n = c.Layout).slideSize,
            i = n.getPadding,
            s = n.totalSize,
            l = n.listSize,
            d = n.sliderSize,
            v = (n = c.Direction).resolve,
            h = n.orient,
            p = (n = c.Elements).list,
            g = n.track;
          function m() {
            c.Controller.isBusy() ||
              (c.Scroll.cancel(), y(r.index), c.Slides.update());
          }
          function y(n) {
            b(S(n, !0));
          }
          function b(n, t) {
            r.is(It) ||
              ((t = t
                ? n
                : (function (n) {
                    {
                      var t, i;
                      r.is(Pt) &&
                        ((t = k(n)),
                        (i = t > c.Controller.getEnd()),
                        (t < 0 || i) && (n = w(n, i)));
                    }
                    return n;
                  })(n)),
              _(p, "transform", "translate" + v("X") + "(" + t + "px)"),
              n !== t && f(Un));
          }
          function w(n, t) {
            var i = n - L(t),
              r = d();
            return (n -= h(r * (kn(U(i) / r) || 1)) * (t ? 1 : -1));
          }
          function x() {
            b(E(), !0), e.cancel();
          }
          function k(n) {
            for (
              var t = c.Slides.get(), i = 0, r = 1 / 0, o = 0;
              o < t.length;
              o++
            ) {
              var u = t[o].index,
                e = U(S(u, !0) - n);
              if (!(e <= r)) break;
              (r = e), (i = u);
            }
            return i;
          }
          function S(n, t) {
            var i = h(
              s(n - 1) -
                ((n = n),
                "center" === (i = o.focus)
                  ? (l() - u(n, !0)) / 2
                  : +i * u(n) || 0)
            );
            return t
              ? ((n = i),
                (n = o.trimSpace && r.is(Mt) ? q(n, 0, h(d(!0) - l())) : n))
              : i;
          }
          function E() {
            var n = v("left");
            return N(p)[n] - N(g)[n] + h(i(!1));
          }
          function L(n) {
            return S(n ? c.Controller.getEnd() : 0, !!o.trimSpace);
          }
          return {
            mount: function () {
              (e = c.Transition), t([B, Nn, K, J], m);
            },
            move: function (n, t, i, r) {
              var o, u;
              n !== t &&
                ((o = i < n),
                (u = h(w(E(), o))),
                o ? 0 <= u : u <= p[v("scrollWidth")] - N(g)[v("width")]) &&
                (x(), b(w(E(), i < n), !0)),
                a(G),
                f(H, t, i, n),
                e.start(t, function () {
                  a(3), f(Dn, t, i, n), r && r();
                });
            },
            jump: y,
            translate: b,
            shift: w,
            cancel: x,
            toIndex: k,
            toPosition: S,
            getPosition: E,
            getLimit: L,
            exceededLimit: function (n, t) {
              t = en(t) ? E() : t;
              var i = !0 !== n && h(t) < h(L(!1)),
                n = !1 !== n && h(t) > h(L(!0));
              return i || n;
            },
            reposition: m,
          };
        },
        Controller: function (o, u, e) {
          var c,
            f,
            a,
            s,
            n = Q(o),
            t = n.on,
            i = n.emit,
            l = u.Move,
            d = l.getPosition,
            r = l.getLimit,
            v = l.toPosition,
            h = (n = u.Slides).isEnough,
            p = n.getLength,
            g = e.omitEnd,
            m = o.is(Pt),
            y = o.is(Mt),
            b = R(L, !1),
            w = R(L, !0),
            x = e.start || 0,
            k = x;
          function S() {
            (f = p(!0)), (a = e.perMove), (s = e.perPage), (c = _());
            var n = q(x, 0, g ? c : f - 1);
            n !== x && ((x = n), l.reposition());
          }
          function E() {
            c !== _() && i("ei");
          }
          function L(n, t) {
            var i = a || (P() ? 1 : s),
              i = O(x + i * (n ? -1 : 1), x, !(a || P()));
            return -1 === i && y && !Sn(d(), r(!n), 1)
              ? n
                ? 0
                : c
              : t
              ? i
              : A(i);
          }
          function O(n, t, i) {
            var r;
            return (
              h() || P()
                ? ((r = (function (n) {
                    if (y && "move" === e.trimSpace && n !== x)
                      for (
                        var t = d();
                        t === v(n, !0) && En(n, 0, o.length - 1, !e.rewind);

                      )
                        n < x ? --n : ++n;
                    return n;
                  })(n)) !== n && ((t = n), (n = r), (i = !1)),
                  n < 0 || c < n
                    ? (n =
                        a || (!En(0, n, t, !0) && !En(c, t, n, !0))
                          ? m
                            ? i
                              ? n < 0
                                ? -(f % s || s)
                                : f
                              : n
                            : e.rewind
                            ? n < 0
                              ? c
                              : 0
                            : -1
                          : z(D(n)))
                    : i && n !== t && (n = z(D(t) + (n < t ? -1 : 1))))
                : (n = -1),
              n
            );
          }
          function A(n) {
            return m ? (n + f) % f || 0 : n;
          }
          function _() {
            for (var n = f - (P() || (m && a) ? 1 : s); g && 0 < n--; )
              if (v(f - 1, !0) !== v(n, !0)) {
                n++;
                break;
              }
            return q(n, 0, f - 1);
          }
          function z(n) {
            return q(P() ? n : s * n, 0, c);
          }
          function D(n) {
            return P() ? Y(n, c) : xn((c <= n ? f - 1 : n) / s);
          }
          function M(n) {
            n !== x && ((k = x), (x = n));
          }
          function P() {
            return !en(e.focus) || e.isNavigation;
          }
          function I() {
            return o.state.is([G, rn]) && !!e.waitForTransition;
          }
          return {
            mount: function () {
              S(), t([K, J, "ei"], S), t(Nn, E);
            },
            go: function (n, t, i) {
              var r;
              I() ||
                (-1 <
                  (r = A(
                    (n = (function (n) {
                      var t = x;
                      {
                        var i, r;
                        C(n)
                          ? ((r = n.match(/([+\-<>])(\d+)?/) || []),
                            (i = r[1]),
                            (r = r[2]),
                            "+" === i || "-" === i
                              ? (t = O(x + +("" + i + (+r || 1)), x))
                              : ">" === i
                              ? (t = r ? z(+r) : b(!0))
                              : "<" === i && (t = w(!0)))
                          : (t = m ? n : q(n, 0, c));
                      }
                      return t;
                    })(n))
                  )) &&
                  (t || r !== x) &&
                  (M(r), l.move(n, r, k, i)));
            },
            scroll: function (n, t, i, r) {
              u.Scroll.scroll(n, t, i, function () {
                var n = A(l.toIndex(d()));
                M(g ? Y(n, c) : n), r && r();
              });
            },
            getNext: b,
            getPrev: w,
            getAdjacent: L,
            getEnd: _,
            setIndex: M,
            getIndex: function (n) {
              return n ? k : x;
            },
            toIndex: z,
            toPage: D,
            toDest: function (n) {
              return (n = l.toIndex(n)), y ? q(n, 0, c) : n;
            },
            hasFocus: P,
            isBusy: I,
          };
        },
        Arrows: function (o, n, t) {
          var i,
            r,
            u = Q(o),
            e = u.on,
            c = u.bind,
            f = u.emit,
            a = t.classes,
            s = t.i18n,
            l = n.Elements,
            d = n.Controller,
            v = l.arrows,
            h = l.track,
            p = v,
            g = l.prev,
            m = l.next,
            y = {};
          function b() {
            var n = t.arrows;
            !n ||
              (g && m) ||
              ((p = v || j("div", a.arrows)),
              (g = S(!0)),
              (m = S(!1)),
              (i = !0),
              L(p, [g, m]),
              v || O(p, h)),
              g &&
                m &&
                (an(y, { prev: g, next: m }),
                ln(p, n ? "" : "none"),
                M(p, (r = dt + "--" + t.direction)),
                n &&
                  (e([B, Dn, J, V, "ei"], E),
                  c(m, "click", R(k, ">")),
                  c(g, "click", R(k, "<")),
                  E(),
                  I([g, m], Kn, h.id),
                  f("arrows:mounted", g, m))),
              e(K, w);
          }
          function w() {
            x(), b();
          }
          function x() {
            u.destroy(),
              X(p, r),
              i ? (T(v ? [g, m] : p), (g = m = null)) : P([g, m], ut);
          }
          function k(n) {
            d.go(n, !0);
          }
          function S(n) {
            return hn(
              '<button class="' +
                a.arrow +
                " " +
                (n ? a.prev : a.next) +
                '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' +
                (t.arrowPath ||
                  "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") +
                '" />'
            );
          }
          function E() {
            var n, t, i, r;
            g &&
              m &&
              ((r = o.index),
              (n = d.getPrev()),
              (t = d.getNext()),
              (i = -1 < n && r < n ? s.last : s.prev),
              (r = -1 < t && t < r ? s.first : s.next),
              (g.disabled = n < 0),
              (m.disabled = t < 0),
              I(g, nn, i),
              I(m, nn, r),
              f("arrows:updated", g, m, n, t));
          }
          return { arrows: y, mount: b, destroy: x, update: E };
        },
        Autoplay: function (n, t, i) {
          var r,
            o,
            u = Q(n),
            e = u.on,
            c = u.bind,
            f = u.emit,
            a = qn(i.interval, n.go.bind(n, ">"), function (n) {
              var t = l.bar;
              t && _(t, "width", 100 * n + "%"), f("autoplay:playing", n);
            }),
            s = a.isPaused,
            l = t.Elements,
            d = (u = t.Elements).root,
            v = u.toggle,
            h = i.autoplay,
            p = "pause" === h;
          function g() {
            s() &&
              t.Slides.isEnough() &&
              (a.start(!i.resetProgress), (o = r = p = !1), b(), f(Fn));
          }
          function m(n) {
            (p = !!(n = void 0 === n ? !0 : n)), b(), s() || (a.pause(), f(Xn));
          }
          function y() {
            p || (r || o ? m(!1) : g());
          }
          function b() {
            v && (A(v, tn, !p), I(v, nn, i.i18n[p ? "play" : "pause"]));
          }
          function w(n) {
            n = t.Slides.getAt(n);
            a.set((n && +z(n.slide, Ct)) || i.interval);
          }
          return {
            mount: function () {
              h &&
                (i.pauseOnHover &&
                  c(d, "mouseenter mouseleave", function (n) {
                    (r = "mouseenter" === n.type), y();
                  }),
                i.pauseOnFocus &&
                  c(d, "focusin focusout", function (n) {
                    (o = "focusin" === n.type), y();
                  }),
                v &&
                  c(v, "click", function () {
                    p ? g() : m(!0);
                  }),
                e([H, Tn, J], a.rewind),
                e(H, w),
                v && I(v, Kn, l.track.id),
                p || g(),
                b());
            },
            destroy: a.cancel,
            play: g,
            pause: m,
            isPaused: s,
          };
        },
        Cover: function (n, t, i) {
          var r = Q(n).on;
          function o(i) {
            t.Slides.forEach(function (n) {
              var t = fn(n.container || n.slide, "img");
              t && t.src && u(i, t, n);
            });
          }
          function u(n, t, i) {
            i.style(
              "background",
              n ? 'center/cover no-repeat url("' + t.src + '")' : "",
              !0
            ),
              ln(t, n ? "none" : "");
          }
          return {
            mount: function () {
              i.cover && (r(Wn, R(u, !0)), r([B, K, J], R(o, !0)));
            },
            destroy: R(o, !1),
          };
        },
        Scroll: function (n, c, u) {
          var f,
            a,
            t = Q(n),
            i = t.on,
            s = t.emit,
            l = n.state.set,
            d = c.Move,
            v = d.getPosition,
            e = d.getLimit,
            h = d.exceededLimit,
            p = d.translate,
            g = n.is(Mt),
            m = 1;
          function y(n, t, i, r, o) {
            var u,
              e = v(),
              i =
                (x(),
                !i ||
                  (g && h()) ||
                  ((i = c.Layout.sliderSize()),
                  (u = Ln(n) * i * xn(U(n) / i) || 0),
                  (n = d.toPosition(c.Controller.toDest(n % i)) + u)),
                Sn(e, n, 1));
            (m = 1),
              (t = i ? 0 : t || wn(U(n - e) / 1.5, 800)),
              (a = r),
              (f = qn(t, b, R(w, e, n, o), 1)),
              l(rn),
              s(Tn),
              f.start();
          }
          function b() {
            l(3), a && a(), s(V);
          }
          function w(n, t, i, r) {
            var o = v(),
              r =
                (n +
                  (t - n) *
                    ((t = r),
                    (n = u.easingFunc) ? n(t) : 1 - Math.pow(1 - t, 4)) -
                  o) *
                m;
            p(o + r),
              g &&
                !i &&
                h() &&
                ((m *= 0.6), U(r) < 10 && y(e(h(!0)), 600, !1, a, !0));
          }
          function x() {
            f && f.cancel();
          }
          function r() {
            f && !f.isPaused() && (x(), b());
          }
          return {
            mount: function () {
              i(H, x), i([K, J], r);
            },
            destroy: x,
            scroll: y,
            cancel: r,
          };
        },
        Drag: function (e, o, c) {
          var f,
            t,
            u,
            a,
            s,
            l,
            d,
            v,
            n = Q(e),
            i = n.on,
            h = n.emit,
            p = n.bind,
            g = n.unbind,
            m = e.state,
            y = o.Move,
            b = o.Scroll,
            w = o.Controller,
            x = o.Elements.track,
            k = o.Media.reduce,
            r = (n = o.Direction).resolve,
            S = n.orient,
            E = y.getPosition,
            L = y.exceededLimit,
            O = !1;
          function j() {
            var n = c.drag;
            C(!n), (a = "free" === n);
          }
          function N(n) {
            var t, i, r;
            (l = !1),
              d ||
                ((t = R(n)),
                (i = n.target),
                (r = c.noDrag),
                cn(i, "." + mt + ", ." + vt) ||
                  (r && cn(i, r)) ||
                  (!t && n.button) ||
                  (w.isBusy()
                    ? F(n, !0)
                    : ((v = t ? x : window),
                      (s = m.is([G, rn])),
                      (u = null),
                      p(v, zt, A, jt),
                      p(v, Dt, _, jt),
                      y.cancel(),
                      b.cancel(),
                      z(n))));
          }
          function A(n) {
            var t, i, r, o, u;
            m.is(6) || (m.set(6), h("drag")),
              n.cancelable &&
                (s
                  ? (y.translate(f + D(n) / (O && e.is(Mt) ? 5 : 1)),
                    (u = 200 < M(n)),
                    (t = O !== (O = L())),
                    (u || t) && z(n),
                    (l = !0),
                    h("dragging"),
                    F(n))
                  : U(D((u = n))) > U(D(u, !0)) &&
                    ((t = n),
                    (i = c.dragMinThreshold),
                    (r = un(i)),
                    (o = (r && i.mouse) || 0),
                    (r = (r ? i.touch : +i) || 10),
                    (s = U(D(t)) > (R(t) ? r : o)),
                    F(n)));
          }
          function _(n) {
            var t, i, r;
            m.is(6) && (m.set(3), h("dragged")),
              s &&
                ((i = (function (n) {
                  return (
                    E() +
                    Ln(n) *
                      Y(
                        U(n) * (c.flickPower || 600),
                        a ? 1 / 0 : o.Layout.listSize() * (c.flickMaxPages || 1)
                      )
                  );
                })(
                  (t = (function (n) {
                    if (e.is(Pt) || !O) {
                      var t = M(n);
                      if (t && t < 200) return D(n) / t;
                    }
                    return 0;
                  })((t = n)))
                )),
                (r = c.rewind && c.rewindByDrag),
                k(!1),
                a
                  ? w.scroll(i, 0, c.snap)
                  : e.is(It)
                  ? w.go(S(Ln(t)) < 0 ? (r ? "<" : "-") : r ? ">" : "+")
                  : e.is(Mt) && O && r
                  ? w.go(L(!0) ? ">" : "<")
                  : w.go(w.toDest(i), !0),
                k(!0),
                F(n)),
              g(v, zt, A),
              g(v, Dt, _),
              (s = !1);
          }
          function T(n) {
            !d && l && F(n, !0);
          }
          function z(n) {
            (u = t), (t = n), (f = E());
          }
          function D(n, t) {
            return I(n, t) - I(P(n), t);
          }
          function M(n) {
            return mn(n) - mn(P(n));
          }
          function P(n) {
            return (t === n && u) || t;
          }
          function I(n, t) {
            return (R(n) ? n.changedTouches[0] : n)["page" + r(t ? "Y" : "X")];
          }
          function R(n) {
            return "undefined" != typeof TouchEvent && n instanceof TouchEvent;
          }
          function C(n) {
            d = n;
          }
          return {
            mount: function () {
              p(x, zt, on, jt),
                p(x, Dt, on, jt),
                p(x, _t, N, jt),
                p(x, "click", T, { capture: !0 }),
                p(x, "dragstart", F),
                i([B, K], j);
            },
            disable: C,
            isDragging: function () {
              return s;
            },
          };
        },
        Keyboard: function (t, n, i) {
          var r,
            o,
            u = Q(t),
            e = u.on,
            c = u.bind,
            f = u.unbind,
            a = t.root,
            s = n.Direction.resolve;
          function l() {
            var n = i.keyboard;
            n && ((r = "global" === n ? window : a), c(r, Gt, h));
          }
          function d() {
            f(r, Gt);
          }
          function v() {
            var n = o;
            (o = !0),
              p(function () {
                o = n;
              });
          }
          function h(n) {
            o || ((n = Tt(n)) === s(Bn) ? t.go("<") : n === s(Hn) && t.go(">"));
          }
          return {
            mount: function () {
              l(), e(K, d), e(K, l), e(H, v);
            },
            destroy: d,
            disable: function (n) {
              o = n;
            },
          };
        },
        LazyLoad: function (i, n, o) {
          var t = Q(i),
            r = t.on,
            u = t.off,
            e = t.bind,
            c = t.emit,
            f = "sequential" === o.lazyLoad,
            a = [Dn, V],
            s = [];
          function l() {
            D(s),
              n.Slides.forEach(function (r) {
                gn(r.slide, Wt).forEach(function (n) {
                  var t = z(n, Ft),
                    i = z(n, Xt);
                  (t === n.src && i === n.srcset) ||
                    ((t = o.classes.spinner),
                    (t = fn((i = n.parentElement), "." + t) || j("span", t, i)),
                    s.push([n, r, t]),
                    n.src || ln(n, "none"));
                });
              }),
              (f ? p : (u(a), r(a, d), d))();
          }
          function d() {
            (s = s.filter(function (n) {
              var t = o.perPage * ((o.preloadPages || 1) + 1) - 1;
              return !n[1].isWithin(i.index, t) || v(n);
            })).length || u(a);
          }
          function v(n) {
            var t = n[0];
            M(n[1].slide, Et),
              e(t, "load error", R(h, n)),
              I(t, "src", z(t, Ft)),
              I(t, "srcset", z(t, Xt)),
              P(t, Ft),
              P(t, Xt);
          }
          function h(n, t) {
            var i = n[0],
              r = n[1];
            X(r.slide, Et),
              "error" !== t.type && (T(n[2]), ln(i, ""), c(Wn, i, r), c(jn)),
              f && p();
          }
          function p() {
            s.length && v(s.shift());
          }
          return {
            mount: function () {
              o.lazyLoad && (l(), r(J, l));
            },
            destroy: R(D, s),
            check: d,
          };
        },
        Pagination: function (l, n, d) {
          var v,
            h,
            t = Q(l),
            p = t.on,
            g = t.emit,
            m = t.bind,
            y = n.Slides,
            b = n.Elements,
            w = n.Controller,
            x = w.hasFocus,
            r = w.getIndex,
            e = w.go,
            c = n.Direction.resolve,
            k = b.pagination,
            S = [];
          function E() {
            v && (T(k ? o(v.children) : v), X(v, h), D(S), (v = null)),
              t.destroy();
          }
          function L(n) {
            e(">" + n, !0);
          }
          function O(n, t) {
            var i = S.length,
              r = Tt(t),
              o = A(),
              u = -1,
              o =
                (r === c(Hn, !1, o)
                  ? (u = ++n % i)
                  : r === c(Bn, !1, o)
                  ? (u = (--n + i) % i)
                  : "Home" === r
                  ? (u = 0)
                  : "End" === r && (u = i - 1),
                S[u]);
            o && (dn(o.button), e(">" + u), F(t, !0));
          }
          function A() {
            return d.paginationDirection || d.direction;
          }
          function _(n) {
            return S[w.toPage(n)];
          }
          function z() {
            var n,
              t = _(r(!0)),
              i = _(r());
            t && (X((n = t.button), tn), P(n, Qn), I(n, $, -1)),
              i && (M((n = i.button), tn), I(n, Qn, !0), I(n, $, "")),
              g("pagination:updated", { list: v, items: S }, t, i);
          }
          return {
            items: S,
            mount: function n() {
              E(), p([K, J, "ei"], n);
              var t = d.pagination;
              if ((k && ln(k, t ? "" : "none"), t)) {
                p([H, Tn, V], z);
                var t = l.length,
                  i = d.classes,
                  r = d.i18n,
                  o = d.perPage,
                  u = x() ? w.getEnd() + 1 : kn(t / o);
                M(
                  (v = k || j("ul", i.pagination, b.track.parentElement)),
                  (h = gt + "--" + A())
                ),
                  I(v, Z, "tablist"),
                  I(v, nn, r.select),
                  I(v, nt, A() === Jn ? "vertical" : "");
                for (var e = 0; e < u; e++) {
                  var c = j("li", null, v),
                    f = j("button", { class: i.page, type: "button" }, c),
                    a = y.getIn(e).map(function (n) {
                      return n.slide.id;
                    }),
                    s = !x() && 1 < o ? r.pageX : r.slideX;
                  m(f, "click", R(L, e)),
                    d.paginationKeyboard && m(f, "keydown", R(O, e)),
                    I(c, Z, "presentation"),
                    I(f, Z, "tab"),
                    I(f, Kn, a.join(" ")),
                    I(f, nn, On(s, e + 1)),
                    I(f, $, -1),
                    S.push({ li: c, button: f, page: e });
                }
                z(), g("pagination:mounted", { list: v, items: S }, _(l.index));
              }
            },
            destroy: E,
            getAt: _,
            update: z,
          };
        },
        Sync: function (i, n, t) {
          var r = t.isNavigation,
            o = t.slideFocus,
            u = [];
          function e() {
            var n, t;
            i.splides.forEach(function (n) {
              n.isParent || (f(i, n.splide), f(n.splide, i));
            }),
              r &&
                ((n = Q(i)),
                (t = n.on)(Mn, s),
                t(Yn, l),
                t([B, K], a),
                u.push(n),
                n.emit(Gn, i.splides));
          }
          function c() {
            u.forEach(function (n) {
              n.destroy();
            }),
              D(u);
          }
          function f(n, r) {
            n = Q(n);
            n.on(H, function (n, t, i) {
              r.go(r.is(Pt) ? i : n);
            }),
              u.push(n);
          }
          function a() {
            I(n.Elements.list, nt, t.direction === Jn ? "vertical" : "");
          }
          function s(n) {
            i.go(n.index);
          }
          function l(n, t) {
            b(Yt, Tt(t)) && (s(n), F(t));
          }
          return {
            setup: R(n.Media.set, { slideFocus: en(o) ? r : o }, !0),
            mount: e,
            destroy: c,
            remount: function () {
              c(), e();
            },
          };
        },
        Wheel: function (e, c, f) {
          var n = Q(e).bind,
            a = 0;
          function t(n) {
            var t, i, r, o, u;
            n.cancelable &&
              ((t = (u = n.deltaY) < 0),
              (i = mn(n)),
              (r = f.wheelMinThreshold || 0),
              (o = f.wheelSleep || 0),
              U(u) > r && o < i - a && (e.go(t ? "<" : ">"), (a = i)),
              (u = t),
              (f.releaseWheel &&
                !e.state.is(G) &&
                -1 === c.Controller.getAdjacent(u)) ||
                F(n));
          }
          return {
            mount: function () {
              f.wheel && n(c.Elements.track, "wheel", t, jt);
            },
          };
        },
        Live: function (n, t, i) {
          var r = Q(n).on,
            o = t.Elements.track,
            u = i.live && !i.isNavigation,
            e = j("span", wt),
            c = qn(90, R(f, !1));
          function f(n) {
            I(o, rt, n), n ? (L(o, e), c.start()) : (T(e), c.cancel());
          }
          function a(n) {
            u && I(o, it, n ? "off" : "polite");
          }
          return {
            mount: function () {
              u &&
                (a(!t.Autoplay.isPaused()),
                I(o, ot, !0),
                (e.textContent = "…"),
                r(Fn, R(a, !0)),
                r(Xn, R(a, !1)),
                r([Dn, V], R(f, !0)));
            },
            disable: a,
            destroy: function () {
              P(o, [it, ot, rt]), T(e);
            },
          };
        },
      }),
      qt = {
        type: "slide",
        role: "region",
        speed: 400,
        perPage: 1,
        cloneStatus: !0,
        arrows: !0,
        pagination: !0,
        paginationKeyboard: !0,
        interval: 5e3,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        resetProgress: !0,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        drag: !0,
        direction: "ltr",
        trimSpace: !0,
        focusableNodes: "a, button, textarea, input, select, iframe",
        live: !0,
        classes: {
          slide: at,
          clone: st,
          arrows: dt,
          arrow: vt,
          prev: ht,
          next: pt,
          pagination: gt,
          page: mt,
          spinner: i + "spinner",
        },
        i18n: {
          prev: "Previous slide",
          next: "Next slide",
          first: "Go to first slide",
          last: "Go to last slide",
          slideX: "Go to slide %s",
          pageX: "Go to page %s",
          play: "Start autoplay",
          pause: "Pause autoplay",
          carousel: "carousel",
          slide: "slide",
          select: "Select a slide to show",
          slideLabel: "%s of %s",
        },
        reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: "pause" },
      };
    function Bt(n, t, i) {
      var r = t.Slides;
      function o() {
        r.forEach(function (n) {
          n.style("transform", "translateX(-" + 100 * n.index + "%)");
        });
      }
      return {
        mount: function () {
          Q(n).on([B, J], o);
        },
        start: function (n, t) {
          r.style("transition", "opacity " + i.speed + "ms " + i.easing), p(t);
        },
        cancel: on,
      };
    }
    function Ht(u, n, e) {
      var c,
        f = n.Move,
        a = n.Controller,
        s = n.Scroll,
        t = n.Elements.list,
        l = R(_, t, "transition");
      function i() {
        l(""), s.cancel();
      }
      return {
        mount: function () {
          Q(u).bind(t, "transitionend", function (n) {
            n.target === t && c && (i(), c());
          });
        },
        start: function (n, t) {
          var i = f.toPosition(n, !0),
            r = f.getPosition(),
            o = (function (n) {
              var t = e.rewindSpeed;
              if (u.is(Mt) && t) {
                var i = a.getIndex(!0),
                  r = a.getEnd();
                if ((0 === i && r <= n) || (r <= i && 0 === n)) return t;
              }
              return e.speed;
            })(n);
          1 <= U(i - r) && 1 <= o
            ? e.useScroll
              ? s.scroll(i, o, !1, t)
              : (l("transform " + o + "ms " + e.easing),
                f.translate(i, !0),
                (c = t))
            : (f.jump(n), t());
        },
        cancel: i,
      };
    }
    t = (function () {
      function i(n, t) {
        (this.event = Q()),
          (this.Components = {}),
          (this.state = s(1)),
          (this.splides = []),
          (this.n = {}),
          (this.t = {});
        n = C(n) ? pn(document, n) : n;
        bn(n, n + " is invalid."),
          (t = d(
            { label: z((this.root = n), nn) || "", labelledby: z(n, Zn) || "" },
            qt,
            i.defaults,
            t || {}
          ));
        try {
          d(t, JSON.parse(z(n, f)));
        } catch (n) {
          bn(!1, "Invalid JSON");
        }
        this.n = Object.create(d({}, t));
      }
      var n = i.prototype;
      return (
        (n.mount = function (n, t) {
          var i = this,
            r = this.state,
            o = this.Components;
          return (
            bn(r.is([1, 7]), "Already mounted!"),
            r.set(1),
            (this.i = o),
            (this.r = t || this.r || (this.is(It) ? Bt : Ht)),
            (this.t = n || this.t),
            w(an({}, Ut, this.t, { Transition: this.r }), function (n, t) {
              n = n(i, o, i.n);
              (o[t] = n).setup && n.setup();
            }),
            w(o, function (n) {
              n.mount && n.mount();
            }),
            this.emit(B),
            M(this.root, "is-initialized"),
            r.set(3),
            this.emit("ready"),
            this
          );
        }),
        (n.sync = function (n) {
          return (
            this.splides.push({ splide: n }),
            n.splides.push({ splide: this, isParent: !0 }),
            this.state.is(3) &&
              (this.i.Sync.remount(), n.Components.Sync.remount()),
            this
          );
        }),
        (n.go = function (n) {
          return this.i.Controller.go(n), this;
        }),
        (n.on = function (n, t) {
          return this.event.on(n, t), this;
        }),
        (n.off = function (n) {
          return this.event.off(n), this;
        }),
        (n.emit = function (n) {
          var t;
          return (
            (t = this.event).emit.apply(t, [n].concat(o(arguments, 1))), this
          );
        }),
        (n.add = function (n, t) {
          return this.i.Slides.add(n, t), this;
        }),
        (n.remove = function (n) {
          return this.i.Slides.remove(n), this;
        }),
        (n.is = function (n) {
          return this.n.type === n;
        }),
        (n.refresh = function () {
          return this.emit(J), this;
        }),
        (n.destroy = function (t) {
          void 0 === t && (t = !0);
          var n = this.event,
            i = this.state;
          return (
            i.is(1)
              ? Q(this).on("ready", this.destroy.bind(this, t))
              : (w(
                  this.i,
                  function (n) {
                    n.destroy && n.destroy(t);
                  },
                  !0
                ),
                n.emit(a),
                n.destroy(),
                t && D(this.splides),
                i.set(7)),
            this
          );
        }),
        Jt(i, [
          {
            key: "options",
            get: function () {
              return this.n;
            },
            set: function (n) {
              this.i.Media.set(n, !0, !0);
            },
          },
          {
            key: "length",
            get: function () {
              return this.i.Slides.getLength(!0);
            },
          },
          {
            key: "index",
            get: function () {
              return this.i.Controller.getIndex();
            },
          },
        ]),
        i
      );
    })();
    return (t.defaults = {}), (t.STATES = r), t;
  }),
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((n = "undefined" != typeof globalThis ? globalThis : n || self).Splide =
        t());
/*! This file is auto-generated */
/*!
 * imagesLoaded PACKAGED v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!(function (t, e) {
  "object" == typeof module && module.exports
    ? (module.exports = e())
    : (t.EvEmitter = e());
})("undefined" != typeof window ? window : this, function () {
  function t() {}
  let e = t.prototype;
  return (
    (e.on = function (t, e) {
      if (!t || !e) return this;
      let i = (this._events = this._events || {}),
        s = (i[t] = i[t] || []);
      return s.includes(e) || s.push(e), this;
    }),
    (e.once = function (t, e) {
      if (!t || !e) return this;
      this.on(t, e);
      let i = (this._onceEvents = this._onceEvents || {});
      return ((i[t] = i[t] || {})[e] = !0), this;
    }),
    (e.off = function (t, e) {
      let i = this._events && this._events[t];
      if (!i || !i.length) return this;
      let s = i.indexOf(e);
      return -1 != s && i.splice(s, 1), this;
    }),
    (e.emitEvent = function (t, e) {
      let i = this._events && this._events[t];
      if (!i || !i.length) return this;
      (i = i.slice(0)), (e = e || []);
      let s = this._onceEvents && this._onceEvents[t];
      for (let n of i) {
        s && s[n] && (this.off(t, n), delete s[n]), n.apply(this, e);
      }
      return this;
    }),
    (e.allOff = function () {
      return delete this._events, delete this._onceEvents, this;
    }),
    t
  );
}),
  /*!
   * imagesLoaded v5.0.0
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   */
  (function (t, e) {
    "object" == typeof module && module.exports
      ? (module.exports = e(t, require("ev-emitter")))
      : (t.imagesLoaded = e(t, t.EvEmitter));
  })("undefined" != typeof window ? window : this, function (t, e) {
    let i = t.jQuery,
      s = t.console;
    function n(t, e, o) {
      if (!(this instanceof n)) return new n(t, e, o);
      let r = t;
      var h;
      ("string" == typeof t && (r = document.querySelectorAll(t)), r)
        ? ((this.elements =
            ((h = r),
            Array.isArray(h)
              ? h
              : "object" == typeof h && "number" == typeof h.length
              ? [...h]
              : [h])),
          (this.options = {}),
          "function" == typeof e ? (o = e) : Object.assign(this.options, e),
          o && this.on("always", o),
          this.getImages(),
          i && (this.jqDeferred = new i.Deferred()),
          setTimeout(this.check.bind(this)))
        : s.error(`Bad element for imagesLoaded ${r || t}`);
    }
    (n.prototype = Object.create(e.prototype)),
      (n.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      });
    const o = [1, 9, 11];
    n.prototype.addElementImages = function (t) {
      "IMG" === t.nodeName && this.addImage(t),
        !0 === this.options.background && this.addElementBackgroundImages(t);
      let { nodeType: e } = t;
      if (!e || !o.includes(e)) return;
      let i = t.querySelectorAll("img");
      for (let t of i) this.addImage(t);
      if ("string" == typeof this.options.background) {
        let e = t.querySelectorAll(this.options.background);
        for (let t of e) this.addElementBackgroundImages(t);
      }
    };
    const r = /url\((['"])?(.*?)\1\)/gi;
    function h(t) {
      this.img = t;
    }
    function d(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    return (
      (n.prototype.addElementBackgroundImages = function (t) {
        let e = getComputedStyle(t);
        if (!e) return;
        let i = r.exec(e.backgroundImage);
        for (; null !== i; ) {
          let s = i && i[2];
          s && this.addBackground(s, t), (i = r.exec(e.backgroundImage));
        }
      }),
      (n.prototype.addImage = function (t) {
        let e = new h(t);
        this.images.push(e);
      }),
      (n.prototype.addBackground = function (t, e) {
        let i = new d(t, e);
        this.images.push(i);
      }),
      (n.prototype.check = function () {
        if (
          ((this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          !this.images.length)
        )
          return void this.complete();
        let t = (t, e, i) => {
          setTimeout(() => {
            this.progress(t, e, i);
          });
        };
        this.images.forEach(function (e) {
          e.once("progress", t), e.check();
        });
      }),
      (n.prototype.progress = function (t, e, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent("progress", [this, t, e]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount === this.images.length && this.complete(),
          this.options.debug && s && s.log(`progress: ${i}`, t, e);
      }),
      (n.prototype.complete = function () {
        let t = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(t, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          let t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (h.prototype = Object.create(e.prototype)),
      (h.prototype.check = function () {
        this.getIsImageComplete()
          ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.img.crossOrigin &&
              (this.proxyImage.crossOrigin = this.img.crossOrigin),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            (this.proxyImage.src = this.img.currentSrc || this.img.src));
      }),
      (h.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (h.prototype.confirm = function (t, e) {
        this.isLoaded = t;
        let { parentNode: i } = this.img,
          s = "PICTURE" === i.nodeName ? i : this.img;
        this.emitEvent("progress", [this, s, e]);
      }),
      (h.prototype.handleEvent = function (t) {
        let e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (h.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (h.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (h.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (d.prototype = Object.create(h.prototype)),
      (d.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents());
      }),
      (d.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (d.prototype.confirm = function (t, e) {
        (this.isLoaded = t),
          this.emitEvent("progress", [this, this.element, e]);
      }),
      (n.makeJQueryPlugin = function (e) {
        (e = e || t.jQuery) &&
          ((i = e),
          (i.fn.imagesLoaded = function (t, e) {
            return new n(this, t, e).jqDeferred.promise(i(this));
          }));
      }),
      n.makeJQueryPlugin(),
      n
    );
  });
/*!
 * jQuery Mobile Events
 */
!(function ($) {
  $.attrFn = $.attrFn || {};
  var settings = {
    swipe_h_threshold: 50,
    swipe_v_threshold: 50,
    taphold_threshold: 750,
    doubletap_int: 500,
    touch_capable:
      "ontouchstart" in document.documentElement &&
      navigator.userAgent.toLowerCase().indexOf("chrome") == -1,
    orientation_support:
      "orientation" in window && "onorientationchange" in window,
    startevent: "touchstart mousedown",
    endevent: "touchend mouseup",
    moveevent: "touchmove mousemove",
    tapevent: "tap click",
    scrollevent: "touchmove scroll",
    hold_timer: null,
    tap_timer: null,
  };
  $.each(
    "tapstart tapend tap singletap doubletap taphold swipe swipeup swiperight swipedown swipeleft scrollstart scrollend orientationchange".split(
      " "
    ),
    function (i, name) {
      $.fn[name] = function (fn) {
        return fn ? this.bind(name, fn) : this.trigger(name);
      };
      $.attrFn[name] = !0;
    }
  );
  $.event.special.tapstart = {
    setup: function () {
      var thisObject = this,
        $this = $(thisObject);
      $this.bind(settings.startevent, function (e) {
        if (e.which && e.which !== 1) {
          return !1;
        } else {
          triggerCustomEvent(thisObject, "tapstart", e);
          return !0;
        }
      });
    },
  };
  $.event.special.tapend = {
    setup: function () {
      var thisObject = this,
        $this = $(thisObject);
      $this.bind(settings.endevent, function (e) {
        triggerCustomEvent(thisObject, "tapend", e);
      });
    },
  };
  $.event.special.taphold = {
    setup: function () {
      var thisObject = this,
        $this = $(thisObject),
        origTarget,
        timer,
        start_pos = { x: 0, y: 0 };
      $this
        .bind(settings.startevent, function (e) {
          if (e.which && e.which !== 1) {
            return !1;
          } else {
            $this.data("tapheld", !1);
            origTarget = e.target;
            start_pos.x = settings.touch_capabale
              ? e.targetTouches[0].pageX
              : e.pageX;
            start_pos.y = settings.touch_capabale
              ? e.targetTouches[0].pageY
              : e.pageY;
            settings.hold_timer = window.setTimeout(function () {
              var end_x = settings.touch_capabale
                  ? e.targetTouches[0].pageX
                  : e.pageX,
                end_y = settings.touch_capabale
                  ? e.targetTouches[0].pageY
                  : e.pageY;
              if (
                e.target == origTarget &&
                start_pos.x == end_x &&
                start_pos.y == end_y
              ) {
                $this.data("tapheld", !0);
                triggerCustomEvent(thisObject, "taphold", e);
              }
            }, settings.taphold_threshold);
            return !0;
          }
        })
        .bind(settings.endevent, function () {
          window.clearTimeout(settings.hold_timer);
        });
    },
  };
  $.event.special.doubletap = {
    setup: function () {
      var thisObject = this,
        $this = $(thisObject),
        origTarget,
        action;
      $this
        .bind(settings.startevent, function (e) {
          if (e.which && e.which !== 1) {
            return !1;
          } else {
            $this.data("doubletapped", !1);
            origTarget = e.target;
            return !0;
          }
        })
        .bind(settings.endevent, function (e) {
          var now = new Date().getTime();
          var lastTouch = $this.data("lastTouch") || now + 1;
          var delta = now - lastTouch;
          window.clearTimeout(action);
          if (
            delta < settings.doubletap_int &&
            delta > 0 &&
            e.target == origTarget &&
            delta > 100
          ) {
            $this.data("doubletapped", !0);
            window.clearTimeout(settings.tap_timer);
            triggerCustomEvent(thisObject, "doubletap", e);
          } else {
            $this.data("lastTouch", now);
            action = window.setTimeout(
              function (e) {
                window.clearTimeout(action);
              },
              settings.doubletap_int,
              [e]
            );
          }
          $this.data("lastTouch", now);
        });
    },
  };
  $.event.special.singletap = {
    setup: function () {
      var thisObject = this,
        $this = $(thisObject),
        origTarget = null,
        startTime = null;
      $this
        .bind(settings.startevent, function (e) {
          if (e.which && e.which !== 1) {
            return !1;
          } else {
            startTime = new Date().getTime();
            origTarget = e.target;
            return !0;
          }
        })
        .bind(settings.endevent, function (e) {
          if (e.target == origTarget) {
            settings.tap_timer = window.setTimeout(function () {
              if (!$this.data("doubletapped") && !$this.data("tapheld")) {
                triggerCustomEvent(thisObject, "singletap", e);
              }
            }, settings.doubletap_int);
          }
        });
    },
  };
  $.event.special.tap = {
    setup: function () {
      var thisObject = this,
        $this = $(thisObject),
        started = !1,
        origTarget = null,
        start_time,
        start_pos = { x: 0, y: 0 };
      $this
        .bind(settings.startevent, function (e) {
          if (e.which && e.which !== 1) {
            return !1;
          } else {
            started = !0;
            start_pos.x = settings.touch_capabale
              ? e.targetTouches[0].pageX
              : e.pageX;
            start_pos.y = settings.touch_capabale
              ? e.targetTouches[0].pageY
              : e.pageY;
            start_time = new Date().getTime();
            origTarget = e.target;
            return !0;
          }
        })
        .bind(settings.endevent, function (e) {
          var end_x = settings.touch_capabale
              ? e.targetTouches[0].pageX
              : e.pageX,
            end_y = settings.touch_capabale
              ? e.targetTouches[0].pageY
              : e.pageY;
          if (
            origTarget == e.target &&
            started &&
            new Date().getTime() - start_time < settings.taphold_threshold &&
            start_pos.x == end_x &&
            start_pos.y == end_y
          ) {
            triggerCustomEvent(thisObject, "tap", e);
          }
        });
    },
  };
  $.event.special.swipe = {
    setup: function () {
      var thisObject = this,
        $this = $(thisObject),
        started = !1,
        originalCoord = { x: 0, y: 0 },
        finalCoord = { x: 0, y: 0 };
      function touchStart(event) {
        originalCoord.x = settings.touch_capable
          ? event.targetTouches[0].pageX
          : event.pageX;
        originalCoord.y = settings.touch_capable
          ? event.targetTouches[0].pageY
          : event.pageY;
        finalCoord.x = originalCoord.x;
        finalCoord.y = originalCoord.y;
        started = !0;
      }
      function touchMove(event) {
        event.stopPropagation();
        finalCoord.x = settings.touch_capable
          ? event.targetTouches[0].pageX
          : event.pageX;
        finalCoord.y = settings.touch_capable
          ? event.targetTouches[0].pageY
          : event.pageY;
        window.clearTimeout(settings.hold_timer);
        var swipedir;
        var ele_x_threshold = $this.attr("data-xthreshold"),
          ele_y_threshold = $this.attr("data-ythreshold"),
          h_threshold =
            typeof ele_x_threshold !== "undefined" &&
            ele_x_threshold !== !1 &&
            parseInt(ele_x_threshold)
              ? parseInt(ele_x_threshold)
              : settings.swipe_h_threshold,
          v_threshold =
            typeof ele_y_threshold !== "undefined" &&
            ele_y_threshold !== !1 &&
            parseInt(ele_y_threshold)
              ? parseInt(ele_y_threshold)
              : settings.swipe_v_threshold;
        if (
          originalCoord.y > finalCoord.y &&
          originalCoord.y - finalCoord.y > v_threshold
        ) {
          swipedir = "swipeup";
        }
        if (
          originalCoord.x < finalCoord.x &&
          finalCoord.x - originalCoord.x > h_threshold
        ) {
          swipedir = "swiperight";
        }
        if (
          originalCoord.y < finalCoord.y &&
          finalCoord.y - originalCoord.y > v_threshold
        ) {
          swipedir = "swipedown";
        }
        if (
          originalCoord.x > finalCoord.x &&
          originalCoord.x - finalCoord.x > h_threshold
        ) {
          swipedir = "swipeleft";
        }
        if (swipedir != undefined && started) {
          originalCoord.x = 0;
          originalCoord.y = 0;
          finalCoord.x = 0;
          finalCoord.y = 0;
          $this.trigger("swipe").trigger(swipedir);
          started = !1;
        }
      }
      function touchEnd(event) {
        started = !1;
      }
      if (!thisObject.addEventListener) {
        thisObject.attachEvent(settings.startevent, touchStart);
        thisObject.attachEvent(settings.moveevent, touchMove);
        thisObject.attachEvent(settings.endevent, touchEnd);
      } else {
        thisObject.addEventListener(settings.startevent, touchStart, !1);
        thisObject.addEventListener(settings.moveevent, touchMove, !1);
        thisObject.addEventListener(settings.endevent, touchEnd, !1);
      }
    },
  };
  $.event.special.scrollstart = {
    setup: function () {
      var thisObject = this,
        $this = $(thisObject),
        scrolling,
        timer;
      function trigger(event, state) {
        scrolling = state;
        triggerCustomEvent(
          thisObject,
          scrolling ? "scrollstart" : "scrollend",
          event
        );
      }
      $this.bind(settings.scrollevent, function (event) {
        if (!scrolling) {
          trigger(event, !0);
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
          trigger(event, !1);
        }, 50);
      });
    },
  };
  var win = $(window),
    special_event,
    get_orientation,
    last_orientation,
    initial_orientation_is_landscape,
    initial_orientation_is_default,
    portrait_map = { 0: !0, 180: !0 };
  if (settings.orientation_support) {
    var ww = window.innerWidth || $(window).width(),
      wh = window.innerHeight || $(window).height(),
      landscape_threshold = 50;
    initial_orientation_is_landscape = ww > wh && ww - wh > landscape_threshold;
    initial_orientation_is_default = portrait_map[window.orientation];
    if (
      (initial_orientation_is_landscape && initial_orientation_is_default) ||
      (!initial_orientation_is_landscape && !initial_orientation_is_default)
    ) {
      portrait_map = { "-90": !0, 90: !0 };
    }
  }
  $.event.special.orientationchange = special_event = {
    setup: function () {
      if (settings.orientation_support) {
        return !1;
      }
      last_orientation = get_orientation();
      win.bind("throttledresize", handler);
      return !0;
    },
    teardown: function () {
      if (settings.orientation_support) {
        return !1;
      }
      win.unbind("throttledresize", handler);
      return !0;
    },
    add: function (handleObj) {
      var old_handler = handleObj.handler;
      handleObj.handler = function (event) {
        event.orientation = get_orientation();
        return old_handler.apply(this, arguments);
      };
    },
  };
  function handler() {
    var orientation = get_orientation();
    if (orientation !== last_orientation) {
      last_orientation = orientation;
      win.trigger("orientationchange");
    }
  }
  $.event.special.orientationchange.orientation = get_orientation =
    function () {
      var isPortrait = !0,
        elem = document.documentElement;
      if (settings.orientation_support) {
        isPortrait = portrait_map[window.orientation];
      } else {
        isPortrait = elem && elem.clientWidth / elem.clientHeight < 1.1;
      }
      return isPortrait ? "portrait" : "landscape";
    };
  $.event.special.throttledresize = {
    setup: function () {
      $(this).bind("resize", throttle_handler);
    },
    teardown: function () {
      $(this).unbind("resize", throttle_handler);
    },
  };
  var throttle = 250,
    throttle_handler = function () {
      curr = new Date().getTime();
      diff = curr - lastCall;
      if (diff >= throttle) {
        lastCall = curr;
        $(this).trigger("throttledresize");
      } else {
        if (heldCall) {
          window.clearTimeout(heldCall);
        }
        heldCall = window.setTimeout(handler, throttle - diff);
      }
    },
    lastCall = 0,
    heldCall,
    curr,
    diff;
  function triggerCustomEvent(obj, eventType, event) {
    var originalType = event.type;
    event.type = eventType;
    $.event.dispatch.call(obj, event);
    event.type = originalType;
  }
  $.each(
    {
      scrollend: "scrollstart",
      swipeup: "swipe",
      swiperight: "swipe",
      swipedown: "swipe",
      swipeleft: "swipe",
    },
    function (e, srcE) {
      $.event.special[e] = {
        setup: function () {
          $(this).bind(srcE, $.noop);
        },
      };
    }
  );
})(jQuery);
/*! jQuery Validation Plugin - v1.19.3 - 1/9/2021
 * https://jqueryvalidation.org/
 * Copyright (c) 2021 Jörn Zaefferer; Licensed MIT */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : "object" == typeof module && module.exports
    ? (module.exports = a(require("jquery")))
    : a(jQuery);
})(function (a) {
  a.extend(a.fn, {
    validate: function (b) {
      if (!this.length)
        return void (
          b &&
          b.debug &&
          window.console &&
          console.warn("Nothing selected, can't validate, returning nothing.")
        );
      var c = a.data(this[0], "validator");
      return c
        ? c
        : (this.attr("novalidate", "novalidate"),
          (c = new a.validator(b, this[0])),
          a.data(this[0], "validator", c),
          c.settings.onsubmit &&
            (this.on("click.validate", ":submit", function (b) {
              (c.submitButton = b.currentTarget),
                a(this).hasClass("cancel") && (c.cancelSubmit = !0),
                void 0 !== a(this).attr("formnovalidate") &&
                  (c.cancelSubmit = !0);
            }),
            this.on("submit.validate", function (b) {
              function d() {
                var d, e;
                return (
                  c.submitButton &&
                    (c.settings.submitHandler || c.formSubmitted) &&
                    (d = a("<input type='hidden'/>")
                      .attr("name", c.submitButton.name)
                      .val(a(c.submitButton).val())
                      .appendTo(c.currentForm)),
                  !(c.settings.submitHandler && !c.settings.debug) ||
                    ((e = c.settings.submitHandler.call(c, c.currentForm, b)),
                    d && d.remove(),
                    void 0 !== e && e)
                );
              }
              return (
                c.settings.debug && b.preventDefault(),
                c.cancelSubmit
                  ? ((c.cancelSubmit = !1), d())
                  : c.form()
                  ? c.pendingRequest
                    ? ((c.formSubmitted = !0), !1)
                    : d()
                  : (c.focusInvalid(), !1)
              );
            })),
          c);
    },
    valid: function () {
      var b, c, d;
      return (
        a(this[0]).is("form")
          ? (b = this.validate().form())
          : ((d = []),
            (b = !0),
            (c = a(this[0].form).validate()),
            this.each(function () {
              (b = c.element(this) && b), b || (d = d.concat(c.errorList));
            }),
            (c.errorList = d)),
        b
      );
    },
    rules: function (b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j = this[0],
        k =
          "undefined" != typeof this.attr("contenteditable") &&
          "false" !== this.attr("contenteditable");
      if (
        null != j &&
        (!j.form &&
          k &&
          ((j.form = this.closest("form")[0]), (j.name = this.attr("name"))),
        null != j.form)
      ) {
        if (b)
          switch (
            ((d = a.data(j.form, "validator").settings),
            (e = d.rules),
            (f = a.validator.staticRules(j)),
            b)
          ) {
            case "add":
              a.extend(f, a.validator.normalizeRule(c)),
                delete f.messages,
                (e[j.name] = f),
                c.messages &&
                  (d.messages[j.name] = a.extend(
                    d.messages[j.name],
                    c.messages
                  ));
              break;
            case "remove":
              return c
                ? ((i = {}),
                  a.each(c.split(/\s/), function (a, b) {
                    (i[b] = f[b]), delete f[b];
                  }),
                  i)
                : (delete e[j.name], f);
          }
        return (
          (g = a.validator.normalizeRules(
            a.extend(
              {},
              a.validator.classRules(j),
              a.validator.attributeRules(j),
              a.validator.dataRules(j),
              a.validator.staticRules(j)
            ),
            j
          )),
          g.required &&
            ((h = g.required),
            delete g.required,
            (g = a.extend({ required: h }, g))),
          g.remote &&
            ((h = g.remote), delete g.remote, (g = a.extend(g, { remote: h }))),
          g
        );
      }
    },
  });
  var b = function (a) {
    return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
  a.extend(a.expr.pseudos || a.expr[":"], {
    blank: function (c) {
      return !b("" + a(c).val());
    },
    filled: function (c) {
      var d = a(c).val();
      return null !== d && !!b("" + d);
    },
    unchecked: function (b) {
      return !a(b).prop("checked");
    },
  }),
    (a.validator = function (b, c) {
      (this.settings = a.extend(!0, {}, a.validator.defaults, b)),
        (this.currentForm = c),
        this.init();
    }),
    (a.validator.format = function (b, c) {
      return 1 === arguments.length
        ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c);
          }
        : void 0 === c
        ? b
        : (arguments.length > 2 &&
            c.constructor !== Array &&
            (c = a.makeArray(arguments).slice(1)),
          c.constructor !== Array && (c = [c]),
          a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
              return c;
            });
          }),
          b);
    }),
    a.extend(a.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        pendingClass: "pending",
        validClass: "valid",
        errorElement: "label",
        focusCleanup: !1,
        focusInvalid: !0,
        errorContainer: a([]),
        errorLabelContainer: a([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function (a) {
          (this.lastActive = a),
            this.settings.focusCleanup &&
              (this.settings.unhighlight &&
                this.settings.unhighlight.call(
                  this,
                  a,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.hideThese(this.errorsFor(a)));
        },
        onfocusout: function (a) {
          this.checkable(a) ||
            (!(a.name in this.submitted) && this.optional(a)) ||
            this.element(a);
        },
        onkeyup: function (b, c) {
          var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
          (9 === c.which && "" === this.elementValue(b)) ||
            a.inArray(c.keyCode, d) !== -1 ||
            ((b.name in this.submitted || b.name in this.invalid) &&
              this.element(b));
        },
        onclick: function (a) {
          a.name in this.submitted
            ? this.element(a)
            : a.parentNode.name in this.submitted && this.element(a.parentNode);
        },
        highlight: function (b, c, d) {
          "radio" === b.type
            ? this.findByName(b.name).addClass(c).removeClass(d)
            : a(b).addClass(c).removeClass(d);
        },
        unhighlight: function (b, c, d) {
          "radio" === b.type
            ? this.findByName(b.name).removeClass(c).addClass(d)
            : a(b).removeClass(c).addClass(d);
        },
      },
      setDefaults: function (b) {
        a.extend(a.validator.defaults, b);
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        equalTo: "Please enter the same value again.",
        maxlength: a.validator.format(
          "Please enter no more than {0} characters."
        ),
        minlength: a.validator.format("Please enter at least {0} characters."),
        rangelength: a.validator.format(
          "Please enter a value between {0} and {1} characters long."
        ),
        range: a.validator.format("Please enter a value between {0} and {1}."),
        max: a.validator.format(
          "Please enter a value less than or equal to {0}."
        ),
        min: a.validator.format(
          "Please enter a value greater than or equal to {0}."
        ),
        step: a.validator.format("Please enter a multiple of {0}."),
      },
      autoCreateRanges: !1,
      prototype: {
        init: function () {
          function b(b) {
            var c =
              "undefined" != typeof a(this).attr("contenteditable") &&
              "false" !== a(this).attr("contenteditable");
            if (
              (!this.form &&
                c &&
                ((this.form = a(this).closest("form")[0]),
                (this.name = a(this).attr("name"))),
              d === this.form)
            ) {
              var e = a.data(this.form, "validator"),
                f = "on" + b.type.replace(/^validate/, ""),
                g = e.settings;
              g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b);
            }
          }
          (this.labelContainer = a(this.settings.errorLabelContainer)),
            (this.errorContext =
              (this.labelContainer.length && this.labelContainer) ||
              a(this.currentForm)),
            (this.containers = a(this.settings.errorContainer).add(
              this.settings.errorLabelContainer
            )),
            (this.submitted = {}),
            (this.valueCache = {}),
            (this.pendingRequest = 0),
            (this.pending = {}),
            (this.invalid = {}),
            this.reset();
          var c,
            d = this.currentForm,
            e = (this.groups = {});
          a.each(this.settings.groups, function (b, c) {
            "string" == typeof c && (c = c.split(/\s/)),
              a.each(c, function (a, c) {
                e[c] = b;
              });
          }),
            (c = this.settings.rules),
            a.each(c, function (b, d) {
              c[b] = a.validator.normalizeRule(d);
            }),
            a(this.currentForm)
              .on(
                "focusin.validate focusout.validate keyup.validate",
                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                b
              )
              .on(
                "click.validate",
                "select, option, [type='radio'], [type='checkbox']",
                b
              ),
            this.settings.invalidHandler &&
              a(this.currentForm).on(
                "invalid-form.validate",
                this.settings.invalidHandler
              );
        },
        form: function () {
          return (
            this.checkForm(),
            a.extend(this.submitted, this.errorMap),
            (this.invalid = a.extend({}, this.errorMap)),
            this.valid() ||
              a(this.currentForm).triggerHandler("invalid-form", [this]),
            this.showErrors(),
            this.valid()
          );
        },
        checkForm: function () {
          this.prepareForm();
          for (
            var a = 0, b = (this.currentElements = this.elements());
            b[a];
            a++
          )
            this.check(b[a]);
          return this.valid();
        },
        element: function (b) {
          var c,
            d,
            e = this.clean(b),
            f = this.validationTargetFor(e),
            g = this,
            h = !0;
          return (
            void 0 === f
              ? delete this.invalid[e.name]
              : (this.prepareElement(f),
                (this.currentElements = a(f)),
                (d = this.groups[f.name]),
                d &&
                  a.each(this.groups, function (a, b) {
                    b === d &&
                      a !== f.name &&
                      ((e = g.validationTargetFor(g.clean(g.findByName(a)))),
                      e &&
                        e.name in g.invalid &&
                        (g.currentElements.push(e), (h = g.check(e) && h)));
                  }),
                (c = this.check(f) !== !1),
                (h = h && c),
                c ? (this.invalid[f.name] = !1) : (this.invalid[f.name] = !0),
                this.numberOfInvalids() ||
                  (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                a(b).attr("aria-invalid", !c)),
            h
          );
        },
        showErrors: function (b) {
          if (b) {
            var c = this;
            a.extend(this.errorMap, b),
              (this.errorList = a.map(this.errorMap, function (a, b) {
                return { message: a, element: c.findByName(b)[0] };
              })),
              (this.successList = a.grep(this.successList, function (a) {
                return !(a.name in b);
              }));
          }
          this.settings.showErrors
            ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
            : this.defaultShowErrors();
        },
        resetForm: function () {
          a.fn.resetForm && a(this.currentForm).resetForm(),
            (this.invalid = {}),
            (this.submitted = {}),
            this.prepareForm(),
            this.hideErrors();
          var b = this.elements()
            .removeData("previousValue")
            .removeAttr("aria-invalid");
          this.resetElements(b);
        },
        resetElements: function (a) {
          var b;
          if (this.settings.unhighlight)
            for (b = 0; a[b]; b++)
              this.settings.unhighlight.call(
                this,
                a[b],
                this.settings.errorClass,
                ""
              ),
                this.findByName(a[b].name).removeClass(
                  this.settings.validClass
                );
          else
            a.removeClass(this.settings.errorClass).removeClass(
              this.settings.validClass
            );
        },
        numberOfInvalids: function () {
          return this.objectLength(this.invalid);
        },
        objectLength: function (a) {
          var b,
            c = 0;
          for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
          return c;
        },
        hideErrors: function () {
          this.hideThese(this.toHide);
        },
        hideThese: function (a) {
          a.not(this.containers).text(""), this.addWrapper(a).hide();
        },
        valid: function () {
          return 0 === this.size();
        },
        size: function () {
          return this.errorList.length;
        },
        focusInvalid: function () {
          if (this.settings.focusInvalid)
            try {
              a(
                this.findLastActive() ||
                  (this.errorList.length && this.errorList[0].element) ||
                  []
              )
                .filter(":visible")
                .trigger("focus")
                .trigger("focusin");
            } catch (b) {}
        },
        findLastActive: function () {
          var b = this.lastActive;
          return (
            b &&
            1 ===
              a.grep(this.errorList, function (a) {
                return a.element.name === b.name;
              }).length &&
            b
          );
        },
        elements: function () {
          var b = this,
            c = {};
          return a(this.currentForm)
            .find("input, select, textarea, [contenteditable]")
            .not(":submit, :reset, :image, :disabled")
            .not(this.settings.ignore)
            .filter(function () {
              var d = this.name || a(this).attr("name"),
                e =
                  "undefined" != typeof a(this).attr("contenteditable") &&
                  "false" !== a(this).attr("contenteditable");
              return (
                !d &&
                  b.settings.debug &&
                  window.console &&
                  console.error("%o has no name assigned", this),
                e &&
                  ((this.form = a(this).closest("form")[0]), (this.name = d)),
                this.form === b.currentForm &&
                  !(d in c || !b.objectLength(a(this).rules())) &&
                  ((c[d] = !0), !0)
              );
            });
        },
        clean: function (b) {
          return a(b)[0];
        },
        errors: function () {
          var b = this.settings.errorClass.split(" ").join(".");
          return a(this.settings.errorElement + "." + b, this.errorContext);
        },
        resetInternals: function () {
          (this.successList = []),
            (this.errorList = []),
            (this.errorMap = {}),
            (this.toShow = a([])),
            (this.toHide = a([]));
        },
        reset: function () {
          this.resetInternals(), (this.currentElements = a([]));
        },
        prepareForm: function () {
          this.reset(), (this.toHide = this.errors().add(this.containers));
        },
        prepareElement: function (a) {
          this.reset(), (this.toHide = this.errorsFor(a));
        },
        elementValue: function (b) {
          var c,
            d,
            e = a(b),
            f = b.type,
            g =
              "undefined" != typeof e.attr("contenteditable") &&
              "false" !== e.attr("contenteditable");
          return "radio" === f || "checkbox" === f
            ? this.findByName(b.name).filter(":checked").val()
            : "number" === f && "undefined" != typeof b.validity
            ? b.validity.badInput
              ? "NaN"
              : e.val()
            : ((c = g ? e.text() : e.val()),
              "file" === f
                ? "C:\\fakepath\\" === c.substr(0, 12)
                  ? c.substr(12)
                  : ((d = c.lastIndexOf("/")),
                    d >= 0
                      ? c.substr(d + 1)
                      : ((d = c.lastIndexOf("\\")),
                        d >= 0 ? c.substr(d + 1) : c))
                : "string" == typeof c
                ? c.replace(/\r/g, "")
                : c);
        },
        check: function (b) {
          b = this.validationTargetFor(this.clean(b));
          var c,
            d,
            e,
            f,
            g = a(b).rules(),
            h = a.map(g, function (a, b) {
              return b;
            }).length,
            i = !1,
            j = this.elementValue(b);
          "function" == typeof g.normalizer
            ? (f = g.normalizer)
            : "function" == typeof this.settings.normalizer &&
              (f = this.settings.normalizer),
            f && ((j = f.call(b, j)), delete g.normalizer);
          for (d in g) {
            e = { method: d, parameters: g[d] };
            try {
              if (
                ((c = a.validator.methods[d].call(this, j, b, e.parameters)),
                "dependency-mismatch" === c && 1 === h)
              ) {
                i = !0;
                continue;
              }
              if (((i = !1), "pending" === c))
                return void (this.toHide = this.toHide.not(this.errorsFor(b)));
              if (!c) return this.formatAndAdd(b, e), !1;
            } catch (k) {
              throw (
                (this.settings.debug &&
                  window.console &&
                  console.log(
                    "Exception occurred when checking element " +
                      b.id +
                      ", check the '" +
                      e.method +
                      "' method.",
                    k
                  ),
                k instanceof TypeError &&
                  (k.message +=
                    ".  Exception occurred when checking element " +
                    b.id +
                    ", check the '" +
                    e.method +
                    "' method."),
                k)
              );
            }
          }
          if (!i) return this.objectLength(g) && this.successList.push(b), !0;
        },
        customDataMessage: function (b, c) {
          return (
            a(b).data(
              "msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
            ) || a(b).data("msg")
          );
        },
        customMessage: function (a, b) {
          var c = this.settings.messages[a];
          return c && (c.constructor === String ? c : c[b]);
        },
        findDefined: function () {
          for (var a = 0; a < arguments.length; a++)
            if (void 0 !== arguments[a]) return arguments[a];
        },
        defaultMessage: function (b, c) {
          "string" == typeof c && (c = { method: c });
          var d = this.findDefined(
              this.customMessage(b.name, c.method),
              this.customDataMessage(b, c.method),
              (!this.settings.ignoreTitle && b.title) || void 0,
              a.validator.messages[c.method],
              "<strong>Warning: No message defined for " + b.name + "</strong>"
            ),
            e = /\$?\{(\d+)\}/g;
          return (
            "function" == typeof d
              ? (d = d.call(this, c.parameters, b))
              : e.test(d) &&
                (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
            d
          );
        },
        formatAndAdd: function (a, b) {
          var c = this.defaultMessage(a, b);
          this.errorList.push({ message: c, element: a, method: b.method }),
            (this.errorMap[a.name] = c),
            (this.submitted[a.name] = c);
        },
        addWrapper: function (a) {
          return (
            this.settings.wrapper &&
              (a = a.add(a.parent(this.settings.wrapper))),
            a
          );
        },
        defaultShowErrors: function () {
          var a, b, c;
          for (a = 0; this.errorList[a]; a++)
            (c = this.errorList[a]),
              this.settings.highlight &&
                this.settings.highlight.call(
                  this,
                  c.element,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.showLabel(c.element, c.message);
          if (
            (this.errorList.length &&
              (this.toShow = this.toShow.add(this.containers)),
            this.settings.success)
          )
            for (a = 0; this.successList[a]; a++)
              this.showLabel(this.successList[a]);
          if (this.settings.unhighlight)
            for (a = 0, b = this.validElements(); b[a]; a++)
              this.settings.unhighlight.call(
                this,
                b[a],
                this.settings.errorClass,
                this.settings.validClass
              );
          (this.toHide = this.toHide.not(this.toShow)),
            this.hideErrors(),
            this.addWrapper(this.toShow).show();
        },
        validElements: function () {
          return this.currentElements.not(this.invalidElements());
        },
        invalidElements: function () {
          return a(this.errorList).map(function () {
            return this.element;
          });
        },
        showLabel: function (b, c) {
          var d,
            e,
            f,
            g,
            h = this.errorsFor(b),
            i = this.idOrName(b),
            j = a(b).attr("aria-describedby");
          h.length
            ? (h
                .removeClass(this.settings.validClass)
                .addClass(this.settings.errorClass),
              h.html(c))
            : ((h = a("<" + this.settings.errorElement + ">")
                .attr("id", i + "-error")
                .addClass(this.settings.errorClass)
                .html(c || "")),
              (d = h),
              this.settings.wrapper &&
                (d = h
                  .hide()
                  .show()
                  .wrap("<" + this.settings.wrapper + "/>")
                  .parent()),
              this.labelContainer.length
                ? this.labelContainer.append(d)
                : this.settings.errorPlacement
                ? this.settings.errorPlacement.call(this, d, a(b))
                : d.insertAfter(b),
              h.is("label")
                ? h.attr("for", i)
                : 0 ===
                    h.parents("label[for='" + this.escapeCssMeta(i) + "']")
                      .length &&
                  ((f = h.attr("id")),
                  j
                    ? j.match(
                        new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")
                      ) || (j += " " + f)
                    : (j = f),
                  a(b).attr("aria-describedby", j),
                  (e = this.groups[b.name]),
                  e &&
                    ((g = this),
                    a.each(g.groups, function (b, c) {
                      c === e &&
                        a(
                          "[name='" + g.escapeCssMeta(b) + "']",
                          g.currentForm
                        ).attr("aria-describedby", h.attr("id"));
                    })))),
            !c &&
              this.settings.success &&
              (h.text(""),
              "string" == typeof this.settings.success
                ? h.addClass(this.settings.success)
                : this.settings.success(h, b)),
            (this.toShow = this.toShow.add(h));
        },
        errorsFor: function (b) {
          var c = this.escapeCssMeta(this.idOrName(b)),
            d = a(b).attr("aria-describedby"),
            e = "label[for='" + c + "'], label[for='" + c + "'] *";
          return (
            d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")),
            this.errors().filter(e)
          );
        },
        escapeCssMeta: function (a) {
          return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
        },
        idOrName: function (a) {
          return (
            this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
          );
        },
        validationTargetFor: function (b) {
          return (
            this.checkable(b) && (b = this.findByName(b.name)),
            a(b).not(this.settings.ignore)[0]
          );
        },
        checkable: function (a) {
          return /radio|checkbox/i.test(a.type);
        },
        findByName: function (b) {
          return a(this.currentForm).find(
            "[name='" + this.escapeCssMeta(b) + "']"
          );
        },
        getLength: function (b, c) {
          switch (c.nodeName.toLowerCase()) {
            case "select":
              return a("option:selected", c).length;
            case "input":
              if (this.checkable(c))
                return this.findByName(c.name).filter(":checked").length;
          }
          return b.length;
        },
        depend: function (a, b) {
          return (
            !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
          );
        },
        dependTypes: {
          boolean: function (a) {
            return a;
          },
          string: function (b, c) {
            return !!a(b, c.form).length;
          },
          function: function (a, b) {
            return a(b);
          },
        },
        optional: function (b) {
          var c = this.elementValue(b);
          return (
            !a.validator.methods.required.call(this, c, b) &&
            "dependency-mismatch"
          );
        },
        startRequest: function (b) {
          this.pending[b.name] ||
            (this.pendingRequest++,
            a(b).addClass(this.settings.pendingClass),
            (this.pending[b.name] = !0));
        },
        stopRequest: function (b, c) {
          this.pendingRequest--,
            this.pendingRequest < 0 && (this.pendingRequest = 0),
            delete this.pending[b.name],
            a(b).removeClass(this.settings.pendingClass),
            c && 0 === this.pendingRequest && this.formSubmitted && this.form()
              ? (a(this.currentForm).submit(),
                this.submitButton &&
                  a(
                    "input:hidden[name='" + this.submitButton.name + "']",
                    this.currentForm
                  ).remove(),
                (this.formSubmitted = !1))
              : !c &&
                0 === this.pendingRequest &&
                this.formSubmitted &&
                (a(this.currentForm).triggerHandler("invalid-form", [this]),
                (this.formSubmitted = !1));
        },
        previousValue: function (b, c) {
          return (
            (c = ("string" == typeof c && c) || "remote"),
            a.data(b, "previousValue") ||
              a.data(b, "previousValue", {
                old: null,
                valid: !0,
                message: this.defaultMessage(b, { method: c }),
              })
          );
        },
        destroy: function () {
          this.resetForm(),
            a(this.currentForm)
              .off(".validate")
              .removeData("validator")
              .find(".validate-equalTo-blur")
              .off(".validate-equalTo")
              .removeClass("validate-equalTo-blur")
              .find(".validate-lessThan-blur")
              .off(".validate-lessThan")
              .removeClass("validate-lessThan-blur")
              .find(".validate-lessThanEqual-blur")
              .off(".validate-lessThanEqual")
              .removeClass("validate-lessThanEqual-blur")
              .find(".validate-greaterThanEqual-blur")
              .off(".validate-greaterThanEqual")
              .removeClass("validate-greaterThanEqual-blur")
              .find(".validate-greaterThan-blur")
              .off(".validate-greaterThan")
              .removeClass("validate-greaterThan-blur");
        },
      },
      classRuleSettings: {
        required: { required: !0 },
        email: { email: !0 },
        url: { url: !0 },
        date: { date: !0 },
        dateISO: { dateISO: !0 },
        number: { number: !0 },
        digits: { digits: !0 },
        creditcard: { creditcard: !0 },
      },
      addClassRules: function (b, c) {
        b.constructor === String
          ? (this.classRuleSettings[b] = c)
          : a.extend(this.classRuleSettings, b);
      },
      classRules: function (b) {
        var c = {},
          d = a(b).attr("class");
        return (
          d &&
            a.each(d.split(" "), function () {
              this in a.validator.classRuleSettings &&
                a.extend(c, a.validator.classRuleSettings[this]);
            }),
          c
        );
      },
      normalizeAttributeRule: function (a, b, c, d) {
        /min|max|step/.test(c) &&
          (null === b || /number|range|text/.test(b)) &&
          ((d = Number(d)), isNaN(d) && (d = void 0)),
          d || 0 === d ? (a[c] = d) : b === c && "range" !== b && (a[c] = !0);
      },
      attributeRules: function (b) {
        var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");
        for (c in a.validator.methods)
          "required" === c
            ? ((d = b.getAttribute(c)), "" === d && (d = !0), (d = !!d))
            : (d = f.attr(c)),
            this.normalizeAttributeRule(e, g, c, d);
        return (
          e.maxlength &&
            /-1|2147483647|524288/.test(e.maxlength) &&
            delete e.maxlength,
          e
        );
      },
      dataRules: function (b) {
        var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");
        for (c in a.validator.methods)
          (d = f.data(
            "rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
          )),
            "" === d && (d = !0),
            this.normalizeAttributeRule(e, g, c, d);
        return e;
      },
      staticRules: function (b) {
        var c = {},
          d = a.data(b.form, "validator");
        return (
          d.settings.rules &&
            (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
          c
        );
      },
      normalizeRules: function (b, c) {
        return (
          a.each(b, function (d, e) {
            if (e === !1) return void delete b[d];
            if (e.param || e.depends) {
              var f = !0;
              switch (typeof e.depends) {
                case "string":
                  f = !!a(e.depends, c.form).length;
                  break;
                case "function":
                  f = e.depends.call(c, c);
              }
              f
                ? (b[d] = void 0 === e.param || e.param)
                : (a.data(c.form, "validator").resetElements(a(c)),
                  delete b[d]);
            }
          }),
          a.each(b, function (a, d) {
            b[a] = "function" == typeof d && "normalizer" !== a ? d(c) : d;
          }),
          a.each(["minlength", "maxlength"], function () {
            b[this] && (b[this] = Number(b[this]));
          }),
          a.each(["rangelength", "range"], function () {
            var a;
            b[this] &&
              (Array.isArray(b[this])
                ? (b[this] = [Number(b[this][0]), Number(b[this][1])])
                : "string" == typeof b[this] &&
                  ((a = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                  (b[this] = [Number(a[0]), Number(a[1])])));
          }),
          a.validator.autoCreateRanges &&
            (null != b.min &&
              null != b.max &&
              ((b.range = [b.min, b.max]), delete b.min, delete b.max),
            null != b.minlength &&
              null != b.maxlength &&
              ((b.rangelength = [b.minlength, b.maxlength]),
              delete b.minlength,
              delete b.maxlength)),
          b
        );
      },
      normalizeRule: function (b) {
        if ("string" == typeof b) {
          var c = {};
          a.each(b.split(/\s/), function () {
            c[this] = !0;
          }),
            (b = c);
        }
        return b;
      },
      addMethod: function (b, c, d) {
        (a.validator.methods[b] = c),
          (a.validator.messages[b] =
            void 0 !== d ? d : a.validator.messages[b]),
          c.length < 3 &&
            a.validator.addClassRules(b, a.validator.normalizeRule(b));
      },
      methods: {
        required: function (b, c, d) {
          if (!this.depend(d, c)) return "dependency-mismatch";
          if ("select" === c.nodeName.toLowerCase()) {
            var e = a(c).val();
            return e && e.length > 0;
          }
          return this.checkable(c)
            ? this.getLength(b, c) > 0
            : void 0 !== b && null !== b && b.length > 0;
        },
        email: function (a, b) {
          return (
            this.optional(b) ||
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
              a
            )
          );
        },
        url: function (a, b) {
          return (
            this.optional(b) ||
            /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(
              a
            )
          );
        },
        date: (function () {
          var a = !1;
          return function (b, c) {
            return (
              a ||
                ((a = !0),
                this.settings.debug &&
                  window.console &&
                  console.warn(
                    "The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`."
                  )),
              this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString())
            );
          };
        })(),
        dateISO: function (a, b) {
          return (
            this.optional(b) ||
            /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
              a
            )
          );
        },
        number: function (a, b) {
          return (
            this.optional(b) ||
            /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
          );
        },
        digits: function (a, b) {
          return this.optional(b) || /^\d+$/.test(a);
        },
        minlength: function (a, b, c) {
          var d = Array.isArray(a) ? a.length : this.getLength(a, b);
          return this.optional(b) || d >= c;
        },
        maxlength: function (a, b, c) {
          var d = Array.isArray(a) ? a.length : this.getLength(a, b);
          return this.optional(b) || d <= c;
        },
        rangelength: function (a, b, c) {
          var d = Array.isArray(a) ? a.length : this.getLength(a, b);
          return this.optional(b) || (d >= c[0] && d <= c[1]);
        },
        min: function (a, b, c) {
          return this.optional(b) || a >= c;
        },
        max: function (a, b, c) {
          return this.optional(b) || a <= c;
        },
        range: function (a, b, c) {
          return this.optional(b) || (a >= c[0] && a <= c[1]);
        },
        step: function (b, c, d) {
          var e,
            f = a(c).attr("type"),
            g = "Step attribute on input type " + f + " is not supported.",
            h = ["text", "number", "range"],
            i = new RegExp("\\b" + f + "\\b"),
            j = f && !i.test(h.join()),
            k = function (a) {
              var b = ("" + a).match(/(?:\.(\d+))?$/);
              return b && b[1] ? b[1].length : 0;
            },
            l = function (a) {
              return Math.round(a * Math.pow(10, e));
            },
            m = !0;
          if (j) throw new Error(g);
          return (
            (e = k(d)),
            (k(b) > e || l(b) % l(d) !== 0) && (m = !1),
            this.optional(c) || m
          );
        },
        equalTo: function (b, c, d) {
          var e = a(d);
          return (
            this.settings.onfocusout &&
              e.not(".validate-equalTo-blur").length &&
              e
                .addClass("validate-equalTo-blur")
                .on("blur.validate-equalTo", function () {
                  a(c).valid();
                }),
            b === e.val()
          );
        },
        remote: function (b, c, d, e) {
          if (this.optional(c)) return "dependency-mismatch";
          e = ("string" == typeof e && e) || "remote";
          var f,
            g,
            h,
            i = this.previousValue(c, e);
          return (
            this.settings.messages[c.name] ||
              (this.settings.messages[c.name] = {}),
            (i.originalMessage =
              i.originalMessage || this.settings.messages[c.name][e]),
            (this.settings.messages[c.name][e] = i.message),
            (d = ("string" == typeof d && { url: d }) || d),
            (h = a.param(a.extend({ data: b }, d.data))),
            i.old === h
              ? i.valid
              : ((i.old = h),
                (f = this),
                this.startRequest(c),
                (g = {}),
                (g[c.name] = b),
                a.ajax(
                  a.extend(
                    !0,
                    {
                      mode: "abort",
                      port: "validate" + c.name,
                      dataType: "json",
                      data: g,
                      context: f.currentForm,
                      success: function (a) {
                        var d,
                          g,
                          h,
                          j = a === !0 || "true" === a;
                        (f.settings.messages[c.name][e] = i.originalMessage),
                          j
                            ? ((h = f.formSubmitted),
                              f.resetInternals(),
                              (f.toHide = f.errorsFor(c)),
                              (f.formSubmitted = h),
                              f.successList.push(c),
                              (f.invalid[c.name] = !1),
                              f.showErrors())
                            : ((d = {}),
                              (g =
                                a ||
                                f.defaultMessage(c, {
                                  method: e,
                                  parameters: b,
                                })),
                              (d[c.name] = i.message = g),
                              (f.invalid[c.name] = !0),
                              f.showErrors(d)),
                          (i.valid = j),
                          f.stopRequest(c, j);
                      },
                    },
                    d
                  )
                ),
                "pending")
          );
        },
      },
    });
  var c,
    d = {};
  return (
    a.ajaxPrefilter
      ? a.ajaxPrefilter(function (a, b, c) {
          var e = a.port;
          "abort" === a.mode && (d[e] && d[e].abort(), (d[e] = c));
        })
      : ((c = a.ajax),
        (a.ajax = function (b) {
          var e = ("mode" in b ? b : a.ajaxSettings).mode,
            f = ("port" in b ? b : a.ajaxSettings).port;
          return "abort" === e
            ? (d[f] && d[f].abort(), (d[f] = c.apply(this, arguments)), d[f])
            : c.apply(this, arguments);
        })),
    a
  );
});
(function (factory, jQuery, Zepto) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object" && typeof Meteor === "undefined") {
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery || Zepto);
  }
})(
  function ($) {
    "use strict";
    var Mask = function (el, mask, options) {
      var p = {
        invalid: [],
        getCaret: function () {
          try {
            var sel,
              pos = 0,
              ctrl = el.get(0),
              dSel = document.selection,
              cSelStart = ctrl.selectionStart;
            if (dSel && navigator.appVersion.indexOf("MSIE 10") === -1) {
              sel = dSel.createRange();
              sel.moveStart("character", -p.val().length);
              pos = sel.text.length;
            } else if (cSelStart || cSelStart === "0") {
              pos = cSelStart;
            }
            return pos;
          } catch (e) {}
        },
        setCaret: function (pos) {
          try {
            if (el.is(":focus")) {
              var range,
                ctrl = el.get(0);
              if (ctrl.setSelectionRange) {
                ctrl.setSelectionRange(pos, pos);
              } else {
                range = ctrl.createTextRange();
                range.collapse(!0);
                range.moveEnd("character", pos);
                range.moveStart("character", pos);
                range.select();
              }
            }
          } catch (e) {}
        },
        events: function () {
          el.on("keydown.mask", function (e) {
            el.data("mask-keycode", e.keyCode || e.which);
            el.data("mask-previus-value", el.val());
            el.data("mask-previus-caret-pos", p.getCaret());
            p.maskDigitPosMapOld = p.maskDigitPosMap;
          })
            .on(
              $.jMaskGlobals.useInput ? "input.mask" : "keyup.mask",
              p.behaviour
            )
            .on("paste.mask drop.mask", function () {
              setTimeout(function () {
                el.keydown().keyup();
              }, 100);
            })
            .on("change.mask", function () {
              el.data("changed", !0);
            })
            .on("blur.mask", function () {
              if (oldValue !== p.val() && !el.data("changed")) {
                el.trigger("change");
              }
              el.data("changed", !1);
            })
            .on("blur.mask", function () {
              oldValue = p.val();
            })
            .on("focus.mask", function (e) {
              if (options.selectOnFocus === !0) {
                $(e.target).select();
              }
            })
            .on("focusout.mask", function () {
              if (options.clearIfNotMatch && !regexMask.test(p.val())) {
                p.val("");
              }
            });
        },
        getRegexMask: function () {
          var maskChunks = [],
            translation,
            pattern,
            optional,
            recursive,
            oRecursive,
            r;
          for (var i = 0; i < mask.length; i++) {
            translation = jMask.translation[mask.charAt(i)];
            if (translation) {
              pattern = translation.pattern
                .toString()
                .replace(/.{1}$|^.{1}/g, "");
              optional = translation.optional;
              recursive = translation.recursive;
              if (recursive) {
                maskChunks.push(mask.charAt(i));
                oRecursive = { digit: mask.charAt(i), pattern: pattern };
              } else {
                maskChunks.push(
                  !optional && !recursive ? pattern : pattern + "?"
                );
              }
            } else {
              maskChunks.push(
                mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
              );
            }
          }
          r = maskChunks.join("");
          if (oRecursive) {
            r = r
              .replace(
                new RegExp(
                  "(" + oRecursive.digit + "(.*" + oRecursive.digit + ")?)"
                ),
                "($1)?"
              )
              .replace(new RegExp(oRecursive.digit, "g"), oRecursive.pattern);
          }
          return new RegExp(r);
        },
        destroyEvents: function () {
          el.off(
            [
              "input",
              "keydown",
              "keyup",
              "paste",
              "drop",
              "blur",
              "focusout",
              "",
            ].join(".mask ")
          );
        },
        val: function (v) {
          var isInput = el.is("input"),
            method = isInput ? "val" : "text",
            r;
          if (arguments.length > 0) {
            if (el[method]() !== v) {
              el[method](v);
            }
            r = el;
          } else {
            r = el[method]();
          }
          return r;
        },
        calculateCaretPosition: function (oldVal) {
          var newVal = p.getMasked(),
            caretPosNew = p.getCaret();
          if (oldVal !== newVal) {
            var caretPosOld = el.data("mask-previus-caret-pos") || 0,
              newValL = newVal.length,
              oldValL = oldVal.length,
              maskDigitsBeforeCaret = 0,
              maskDigitsAfterCaret = 0,
              maskDigitsBeforeCaretAll = 0,
              maskDigitsBeforeCaretAllOld = 0,
              i = 0;
            for (i = caretPosNew; i < newValL; i++) {
              if (!p.maskDigitPosMap[i]) {
                break;
              }
              maskDigitsAfterCaret++;
            }
            for (i = caretPosNew - 1; i >= 0; i--) {
              if (!p.maskDigitPosMap[i]) {
                break;
              }
              maskDigitsBeforeCaret++;
            }
            for (i = caretPosNew - 1; i >= 0; i--) {
              if (p.maskDigitPosMap[i]) {
                maskDigitsBeforeCaretAll++;
              }
            }
            for (i = caretPosOld - 1; i >= 0; i--) {
              if (p.maskDigitPosMapOld[i]) {
                maskDigitsBeforeCaretAllOld++;
              }
            }
            if (caretPosNew > oldValL) {
              caretPosNew = newValL * 10;
            } else if (caretPosOld >= caretPosNew && caretPosOld !== oldValL) {
              if (!p.maskDigitPosMapOld[caretPosNew]) {
                var caretPos = caretPosNew;
                caretPosNew -=
                  maskDigitsBeforeCaretAllOld - maskDigitsBeforeCaretAll;
                caretPosNew -= maskDigitsBeforeCaret;
                if (p.maskDigitPosMap[caretPosNew]) {
                  caretPosNew = caretPos;
                }
              }
            } else if (caretPosNew > caretPosOld) {
              caretPosNew +=
                maskDigitsBeforeCaretAll - maskDigitsBeforeCaretAllOld;
              caretPosNew += maskDigitsAfterCaret;
            }
          }
          return caretPosNew;
        },
        behaviour: function (e) {
          e = e || window.event;
          p.invalid = [];
          var keyCode = el.data("mask-keycode");
          if ($.inArray(keyCode, jMask.byPassKeys) === -1) {
            var newVal = p.getMasked(),
              caretPos = p.getCaret(),
              oldVal = el.data("mask-previus-value") || "";
            setTimeout(function () {
              p.setCaret(p.calculateCaretPosition(oldVal));
            }, $.jMaskGlobals.keyStrokeCompensation);
            p.val(newVal);
            p.setCaret(caretPos);
            return p.callbacks(e);
          }
        },
        getMasked: function (skipMaskChars, val) {
          var buf = [],
            value = val === undefined ? p.val() : val + "",
            m = 0,
            maskLen = mask.length,
            v = 0,
            valLen = value.length,
            offset = 1,
            addMethod = "push",
            resetPos = -1,
            maskDigitCount = 0,
            maskDigitPosArr = [],
            lastMaskChar,
            check;
          if (options.reverse) {
            addMethod = "unshift";
            offset = -1;
            lastMaskChar = 0;
            m = maskLen - 1;
            v = valLen - 1;
            check = function () {
              return m > -1 && v > -1;
            };
          } else {
            lastMaskChar = maskLen - 1;
            check = function () {
              return m < maskLen && v < valLen;
            };
          }
          var lastUntranslatedMaskChar;
          while (check()) {
            var maskDigit = mask.charAt(m),
              valDigit = value.charAt(v),
              translation = jMask.translation[maskDigit];
            if (translation) {
              if (valDigit.match(translation.pattern)) {
                buf[addMethod](valDigit);
                if (translation.recursive) {
                  if (resetPos === -1) {
                    resetPos = m;
                  } else if (m === lastMaskChar && m !== resetPos) {
                    m = resetPos - offset;
                  }
                  if (lastMaskChar === resetPos) {
                    m -= offset;
                  }
                }
                m += offset;
              } else if (valDigit === lastUntranslatedMaskChar) {
                maskDigitCount--;
                lastUntranslatedMaskChar = undefined;
              } else if (translation.optional) {
                m += offset;
                v -= offset;
              } else if (translation.fallback) {
                buf[addMethod](translation.fallback);
                m += offset;
                v -= offset;
              } else {
                p.invalid.push({ p: v, v: valDigit, e: translation.pattern });
              }
              v += offset;
            } else {
              if (!skipMaskChars) {
                buf[addMethod](maskDigit);
              }
              if (valDigit === maskDigit) {
                maskDigitPosArr.push(v);
                v += offset;
              } else {
                lastUntranslatedMaskChar = maskDigit;
                maskDigitPosArr.push(v + maskDigitCount);
                maskDigitCount++;
              }
              m += offset;
            }
          }
          var lastMaskCharDigit = mask.charAt(lastMaskChar);
          if (maskLen === valLen + 1 && !jMask.translation[lastMaskCharDigit]) {
            buf.push(lastMaskCharDigit);
          }
          var newVal = buf.join("");
          p.mapMaskdigitPositions(newVal, maskDigitPosArr, valLen);
          return newVal;
        },
        mapMaskdigitPositions: function (newVal, maskDigitPosArr, valLen) {
          var maskDiff = options.reverse ? newVal.length - valLen : 0;
          p.maskDigitPosMap = {};
          for (var i = 0; i < maskDigitPosArr.length; i++) {
            p.maskDigitPosMap[maskDigitPosArr[i] + maskDiff] = 1;
          }
        },
        callbacks: function (e) {
          var val = p.val(),
            changed = val !== oldValue,
            defaultArgs = [val, e, el, options],
            callback = function (name, criteria, args) {
              if (typeof options[name] === "function" && criteria) {
                options[name].apply(this, args);
              }
            };
          callback("onChange", changed === !0, defaultArgs);
          callback("onKeyPress", changed === !0, defaultArgs);
          callback("onComplete", val.length === mask.length, defaultArgs);
          callback("onInvalid", p.invalid.length > 0, [
            val,
            e,
            el,
            p.invalid,
            options,
          ]);
        },
      };
      el = $(el);
      var jMask = this,
        oldValue = p.val(),
        regexMask;
      mask =
        typeof mask === "function"
          ? mask(p.val(), undefined, el, options)
          : mask;
      jMask.mask = mask;
      jMask.options = options;
      jMask.remove = function () {
        var caret = p.getCaret();
        if (jMask.options.placeholder) {
          el.removeAttr("placeholder");
        }
        if (el.data("mask-maxlength")) {
          el.removeAttr("maxlength");
        }
        p.destroyEvents();
        p.val(jMask.getCleanVal());
        p.setCaret(caret);
        return el;
      };
      jMask.getCleanVal = function () {
        return p.getMasked(!0);
      };
      jMask.getMaskedVal = function (val) {
        return p.getMasked(!1, val);
      };
      jMask.init = function (onlyMask) {
        onlyMask = onlyMask || !1;
        options = options || {};
        jMask.clearIfNotMatch = $.jMaskGlobals.clearIfNotMatch;
        jMask.byPassKeys = $.jMaskGlobals.byPassKeys;
        jMask.translation = $.extend(
          {},
          $.jMaskGlobals.translation,
          options.translation
        );
        jMask = $.extend(!0, {}, jMask, options);
        regexMask = p.getRegexMask();
        if (onlyMask) {
          p.events();
          p.val(p.getMasked());
        } else {
          if (options.placeholder) {
            el.attr("placeholder", options.placeholder);
          }
          if (el.data("mask")) {
            el.attr("autocomplete", "off");
          }
          for (var i = 0, maxlength = !0; i < mask.length; i++) {
            var translation = jMask.translation[mask.charAt(i)];
            if (translation && translation.recursive) {
              maxlength = !1;
              break;
            }
          }
          if (maxlength) {
            el.attr("maxlength", mask.length).data("mask-maxlength", !0);
          }
          p.destroyEvents();
          p.events();
          var caret = p.getCaret();
          p.val(p.getMasked());
          p.setCaret(caret);
        }
      };
      jMask.init(!el.is("input"));
    };
    $.maskWatchers = {};
    var HTMLAttributes = function () {
        var input = $(this),
          options = {},
          prefix = "data-mask-",
          mask = input.attr("data-mask");
        if (input.attr(prefix + "reverse")) {
          options.reverse = !0;
        }
        if (input.attr(prefix + "clearifnotmatch")) {
          options.clearIfNotMatch = !0;
        }
        if (input.attr(prefix + "selectonfocus") === "true") {
          options.selectOnFocus = !0;
        }
        if (notSameMaskObject(input, mask, options)) {
          return input.data("mask", new Mask(this, mask, options));
        }
      },
      notSameMaskObject = function (field, mask, options) {
        options = options || {};
        var maskObject = $(field).data("mask"),
          stringify = JSON.stringify,
          value = $(field).val() || $(field).text();
        try {
          if (typeof mask === "function") {
            mask = mask(value);
          }
          return (
            typeof maskObject !== "object" ||
            stringify(maskObject.options) !== stringify(options) ||
            maskObject.mask !== mask
          );
        } catch (e) {}
      },
      eventSupported = function (eventName) {
        var el = document.createElement("div"),
          isSupported;
        eventName = "on" + eventName;
        isSupported = eventName in el;
        if (!isSupported) {
          el.setAttribute(eventName, "return;");
          isSupported = typeof el[eventName] === "function";
        }
        el = null;
        return isSupported;
      };
    $.fn.mask = function (mask, options) {
      options = options || {};
      var selector = this.selector,
        globals = $.jMaskGlobals,
        interval = globals.watchInterval,
        watchInputs = options.watchInputs || globals.watchInputs,
        maskFunction = function () {
          if (notSameMaskObject(this, mask, options)) {
            return $(this).data("mask", new Mask(this, mask, options));
          }
        };
      $(this).each(maskFunction);
      if (selector && selector !== "" && watchInputs) {
        clearInterval($.maskWatchers[selector]);
        $.maskWatchers[selector] = setInterval(function () {
          $(document).find(selector).each(maskFunction);
        }, interval);
      }
      return this;
    };
    $.fn.masked = function (val) {
      return this.data("mask").getMaskedVal(val);
    };
    $.fn.unmask = function () {
      clearInterval($.maskWatchers[this.selector]);
      delete $.maskWatchers[this.selector];
      return this.each(function () {
        var dataMask = $(this).data("mask");
        if (dataMask) {
          dataMask.remove().removeData("mask");
        }
      });
    };
    $.fn.cleanVal = function () {
      return this.data("mask").getCleanVal();
    };
    $.applyDataMask = function (selector) {
      selector = selector || $.jMaskGlobals.maskElements;
      var $selector = selector instanceof $ ? selector : $(selector);
      $selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);
    };
    var globals = {
      maskElements: "input,td,span,div",
      dataMaskAttr: "[data-mask]",
      dataMask: !0,
      watchInterval: 300,
      watchInputs: !0,
      keyStrokeCompensation: 10,
      useInput:
        !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) &&
        eventSupported("input"),
      watchDataMask: !1,
      byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
      translation: {
        0: { pattern: /\d/ },
        9: { pattern: /\d/, optional: !0 },
        "#": { pattern: /\d/, recursive: !0 },
        A: { pattern: /[a-zA-Z0-9]/ },
        S: { pattern: /[a-zA-Z]/ },
      },
    };
    $.jMaskGlobals = $.jMaskGlobals || {};
    globals = $.jMaskGlobals = $.extend(!0, {}, globals, $.jMaskGlobals);
    if (globals.dataMask) {
      $.applyDataMask();
    }
    setInterval(function () {
      if ($.jMaskGlobals.watchDataMask) {
        $.applyDataMask();
      }
    }, globals.watchInterval);
  },
  window.jQuery,
  window.Zepto
);
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(
        ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).window =
          t.window || {})
      );
})(this, function (t) {
  "use strict";
  const e = (t, e = 1e4) => (
      (t = parseFloat(t + "") || 0), Math.round((t + Number.EPSILON) * e) / e
    ),
    i = function (t) {
      if (!(t && t instanceof Element && t.offsetParent)) return !1;
      const e = t.scrollHeight > t.clientHeight,
        i = window.getComputedStyle(t).overflowY,
        n = -1 !== i.indexOf("hidden"),
        s = -1 !== i.indexOf("visible");
      return e && !n && !s;
    },
    n = function (t, e = void 0) {
      return (
        !(!t || t === document.body || (e && t === e)) &&
        (i(t) ? t : n(t.parentElement, e))
      );
    },
    s = function (t) {
      var e = new DOMParser().parseFromString(t, "text/html").body;
      if (e.childElementCount > 1) {
        for (var i = document.createElement("div"); e.firstChild; )
          i.appendChild(e.firstChild);
        return i;
      }
      return e.firstChild;
    },
    o = (t) => `${t || ""}`.split(" ").filter((t) => !!t),
    a = (t, e, i) => {
      o(e).forEach((e) => {
        t && t.classList.toggle(e, i || !1);
      });
    };
  class r {
    constructor(t) {
      Object.defineProperty(this, "pageX", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
        Object.defineProperty(this, "pageY", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "clientX", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "clientY", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "id", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "time", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "nativePointer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.nativePointer = t),
        (this.pageX = t.pageX),
        (this.pageY = t.pageY),
        (this.clientX = t.clientX),
        (this.clientY = t.clientY),
        (this.id = self.Touch && t instanceof Touch ? t.identifier : -1),
        (this.time = Date.now());
    }
  }
  const l = { passive: !1 };
  class c {
    constructor(
      t,
      { start: e = () => !0, move: i = () => {}, end: n = () => {} }
    ) {
      Object.defineProperty(this, "element", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
        Object.defineProperty(this, "startCallback", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "moveCallback", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "endCallback", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "currentPointers", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: [],
        }),
        Object.defineProperty(this, "startPointers", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: [],
        }),
        (this.element = t),
        (this.startCallback = e),
        (this.moveCallback = i),
        (this.endCallback = n);
      for (const t of [
        "onPointerStart",
        "onTouchStart",
        "onMove",
        "onTouchEnd",
        "onPointerEnd",
        "onWindowBlur",
      ])
        this[t] = this[t].bind(this);
      this.element.addEventListener("mousedown", this.onPointerStart, l),
        this.element.addEventListener("touchstart", this.onTouchStart, l),
        this.element.addEventListener("touchmove", this.onMove, l),
        this.element.addEventListener("touchend", this.onTouchEnd),
        this.element.addEventListener("touchcancel", this.onTouchEnd);
    }
    onPointerStart(t) {
      if (!t.buttons || 0 !== t.button) return;
      const e = new r(t);
      this.currentPointers.some((t) => t.id === e.id) ||
        (this.triggerPointerStart(e, t) &&
          (window.addEventListener("mousemove", this.onMove),
          window.addEventListener("mouseup", this.onPointerEnd),
          window.addEventListener("blur", this.onWindowBlur)));
    }
    onTouchStart(t) {
      for (const e of Array.from(t.changedTouches || []))
        this.triggerPointerStart(new r(e), t);
      window.addEventListener("blur", this.onWindowBlur);
    }
    onMove(t) {
      const e = this.currentPointers.slice(),
        i =
          "changedTouches" in t
            ? Array.from(t.changedTouches || []).map((t) => new r(t))
            : [new r(t)],
        n = [];
      for (const t of i) {
        const e = this.currentPointers.findIndex((e) => e.id === t.id);
        e < 0 || (n.push(t), (this.currentPointers[e] = t));
      }
      n.length && this.moveCallback(t, this.currentPointers.slice(), e);
    }
    onPointerEnd(t) {
      (t.buttons > 0 && 0 !== t.button) ||
        (this.triggerPointerEnd(t, new r(t)),
        window.removeEventListener("mousemove", this.onMove),
        window.removeEventListener("mouseup", this.onPointerEnd),
        window.removeEventListener("blur", this.onWindowBlur));
    }
    onTouchEnd(t) {
      for (const e of Array.from(t.changedTouches || []))
        this.triggerPointerEnd(t, new r(e));
    }
    triggerPointerStart(t, e) {
      return (
        !!this.startCallback(e, t, this.currentPointers.slice()) &&
        (this.currentPointers.push(t), this.startPointers.push(t), !0)
      );
    }
    triggerPointerEnd(t, e) {
      const i = this.currentPointers.findIndex((t) => t.id === e.id);
      i < 0 ||
        (this.currentPointers.splice(i, 1),
        this.startPointers.splice(i, 1),
        this.endCallback(t, e, this.currentPointers.slice()));
    }
    onWindowBlur() {
      this.clear();
    }
    clear() {
      for (; this.currentPointers.length; ) {
        const t = this.currentPointers[this.currentPointers.length - 1];
        this.currentPointers.splice(this.currentPointers.length - 1, 1),
          this.startPointers.splice(this.currentPointers.length - 1, 1),
          this.endCallback(
            new Event("touchend", {
              bubbles: !0,
              cancelable: !0,
              clientX: t.clientX,
              clientY: t.clientY,
            }),
            t,
            this.currentPointers.slice()
          );
      }
    }
    stop() {
      this.element.removeEventListener("mousedown", this.onPointerStart, l),
        this.element.removeEventListener("touchstart", this.onTouchStart, l),
        this.element.removeEventListener("touchmove", this.onMove, l),
        this.element.removeEventListener("touchend", this.onTouchEnd),
        this.element.removeEventListener("touchcancel", this.onTouchEnd),
        window.removeEventListener("mousemove", this.onMove),
        window.removeEventListener("mouseup", this.onPointerEnd),
        window.removeEventListener("blur", this.onWindowBlur);
    }
  }
  function h(t, e) {
    return e
      ? Math.sqrt(
          Math.pow(e.clientX - t.clientX, 2) +
            Math.pow(e.clientY - t.clientY, 2)
        )
      : 0;
  }
  function d(t, e) {
    return e
      ? {
          clientX: (t.clientX + e.clientX) / 2,
          clientY: (t.clientY + e.clientY) / 2,
        }
      : t;
  }
  const u = (t) =>
      "object" == typeof t &&
      null !== t &&
      t.constructor === Object &&
      "[object Object]" === Object.prototype.toString.call(t),
    p = (t, ...e) => {
      const i = e.length;
      for (let n = 0; n < i; n++) {
        const i = e[n] || {};
        Object.entries(i).forEach(([e, i]) => {
          const n = Array.isArray(i) ? [] : {};
          t[e] || Object.assign(t, { [e]: n }),
            u(i)
              ? Object.assign(t[e], p(n, i))
              : Array.isArray(i)
              ? Object.assign(t, { [e]: [...i] })
              : Object.assign(t, { [e]: i });
        });
      }
      return t;
    },
    f = function (t, e) {
      return t
        .split(".")
        .reduce((t, e) => ("object" == typeof t ? t[e] : void 0), e);
    };
  class m {
    constructor(t = {}) {
      Object.defineProperty(this, "options", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t,
      }),
        Object.defineProperty(this, "events", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        this.setOptions(t);
      for (const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
        t.startsWith("on") &&
          "function" == typeof this[t] &&
          (this[t] = this[t].bind(this));
    }
    setOptions(t) {
      this.options = t ? p({}, this.constructor.defaults, t) : {};
      for (const [t, e] of Object.entries(this.option("on") || {}))
        this.on(t, e);
    }
    option(t, ...e) {
      let i = f(t, this.options);
      return i && "function" == typeof i && (i = i.call(this, this, ...e)), i;
    }
    optionFor(t, e, i, ...n) {
      let s = f(e, t);
      var o;
      "string" != typeof (o = s) ||
        isNaN(o) ||
        isNaN(parseFloat(o)) ||
        (s = parseFloat(s)),
        "true" === s && (s = !0),
        "false" === s && (s = !1),
        s && "function" == typeof s && (s = s.call(this, this, t, ...n));
      let a = f(e, this.options);
      return (
        a && "function" == typeof a
          ? (s = a.call(this, this, t, ...n, s))
          : void 0 === s && (s = a),
        void 0 === s ? i : s
      );
    }
    cn(t) {
      const e = this.options.classes;
      return (e && e[t]) || "";
    }
    localize(t, e = []) {
      t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t, e, i) => {
        let n = "";
        return (
          i
            ? (n = this.option(
                `${e[0] + e.toLowerCase().substring(1)}.l10n.${i}`
              ))
            : e && (n = this.option(`l10n.${e}`)),
          n || (n = t),
          n
        );
      });
      for (let i = 0; i < e.length; i++) t = t.split(e[i][0]).join(e[i][1]);
      return (t = t.replace(/\{\{(.*?)\}\}/g, (t, e) => e));
    }
    on(t, e) {
      let i = [];
      "string" == typeof t ? (i = t.split(" ")) : Array.isArray(t) && (i = t),
        this.events || (this.events = new Map()),
        i.forEach((t) => {
          let i = this.events.get(t);
          i || (this.events.set(t, []), (i = [])),
            i.includes(e) || i.push(e),
            this.events.set(t, i);
        });
    }
    off(t, e) {
      let i = [];
      "string" == typeof t ? (i = t.split(" ")) : Array.isArray(t) && (i = t),
        i.forEach((t) => {
          const i = this.events.get(t);
          if (Array.isArray(i)) {
            const t = i.indexOf(e);
            t > -1 && i.splice(t, 1);
          }
        });
    }
    emit(t, ...e) {
      [...(this.events.get(t) || [])].forEach((t) => t(this, ...e)),
        "*" !== t && this.emit("*", t, ...e);
    }
  }
  Object.defineProperty(m, "version", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: "5.0.22",
  }),
    Object.defineProperty(m, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {},
    });
  class g extends m {
    constructor(t = {}) {
      super(t),
        Object.defineProperty(this, "plugins", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {},
        });
    }
    attachPlugins(t = {}) {
      const e = new Map();
      for (const [i, n] of Object.entries(t)) {
        const t = this.option(i),
          s = this.plugins[i];
        s || !1 === t
          ? s && !1 === t && (s.detach(), delete this.plugins[i])
          : e.set(i, new n(this, t || {}));
      }
      for (const [t, i] of e) (this.plugins[t] = i), i.attach();
      this.emit("attachPlugins");
    }
    detachPlugins(t) {
      t = t || Object.keys(this.plugins);
      for (const e of t) {
        const t = this.plugins[e];
        t && t.detach(), delete this.plugins[e];
      }
      return this.emit("detachPlugins"), this;
    }
  }
  var b;
  !(function (t) {
    (t[(t.Init = 0)] = "Init"),
      (t[(t.Error = 1)] = "Error"),
      (t[(t.Ready = 2)] = "Ready"),
      (t[(t.Panning = 3)] = "Panning"),
      (t[(t.Mousemove = 4)] = "Mousemove"),
      (t[(t.Destroy = 5)] = "Destroy");
  })(b || (b = {}));
  const v = ["a", "b", "c", "d", "e", "f"],
    y = {
      PANUP: "Move up",
      PANDOWN: "Move down",
      PANLEFT: "Move left",
      PANRIGHT: "Move right",
      ZOOMIN: "Zoom in",
      ZOOMOUT: "Zoom out",
      TOGGLEZOOM: "Toggle zoom level",
      TOGGLE1TO1: "Toggle zoom level",
      ITERATEZOOM: "Toggle zoom level",
      ROTATECCW: "Rotate counterclockwise",
      ROTATECW: "Rotate clockwise",
      FLIPX: "Flip horizontally",
      FLIPY: "Flip vertically",
      FITX: "Fit horizontally",
      FITY: "Fit vertically",
      RESET: "Reset",
      TOGGLEFS: "Toggle fullscreen",
    },
    w = {
      content: null,
      width: "auto",
      height: "auto",
      panMode: "drag",
      touch: !0,
      dragMinThreshold: 3,
      lockAxis: !1,
      mouseMoveFactor: 1,
      mouseMoveFriction: 0.12,
      zoom: !0,
      pinchToZoom: !0,
      panOnlyZoomed: "auto",
      minScale: 1,
      maxScale: 2,
      friction: 0.25,
      dragFriction: 0.35,
      decelFriction: 0.05,
      click: "toggleZoom",
      dblClick: !1,
      wheel: "zoom",
      wheelLimit: 7,
      spinner: !0,
      bounds: "auto",
      infinite: !1,
      rubberband: !0,
      bounce: !0,
      maxVelocity: 75,
      transformParent: !1,
      classes: {
        content: "f-panzoom__content",
        isLoading: "is-loading",
        canZoomIn: "can-zoom_in",
        canZoomOut: "can-zoom_out",
        isDraggable: "is-draggable",
        isDragging: "is-dragging",
        inFullscreen: "in-fullscreen",
        htmlHasFullscreen: "with-panzoom-in-fullscreen",
      },
      l10n: y,
    },
    x =
      '<div class="f-spinner"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20"></circle><circle cx="25" cy="25" r="20"></circle></svg></div>',
    E = (t) => t && null !== t && t instanceof Element && "nodeType" in t,
    S = (t, e) => {
      t &&
        o(e).forEach((e) => {
          t.classList.remove(e);
        });
    },
    P = (t, e) => {
      t &&
        o(e).forEach((e) => {
          t.classList.add(e);
        });
    },
    C = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
    M = 1e5,
    T = 1e3,
    O = "mousemove",
    A = "drag",
    z = "content";
  let L = null,
    R = null;
  class k extends g {
    get isTouchDevice() {
      return null === R && (R = window.matchMedia("(hover: none)").matches), R;
    }
    get isMobile() {
      return (
        null === L &&
          (L = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),
        L
      );
    }
    get panMode() {
      return this.options.panMode !== O || this.isTouchDevice ? A : O;
    }
    get panOnlyZoomed() {
      const t = this.options.panOnlyZoomed;
      return "auto" === t ? this.isTouchDevice : t;
    }
    get isInfinite() {
      return this.option("infinite");
    }
    get angle() {
      return (180 * Math.atan2(this.current.b, this.current.a)) / Math.PI || 0;
    }
    get targetAngle() {
      return (180 * Math.atan2(this.target.b, this.target.a)) / Math.PI || 0;
    }
    get scale() {
      const { a: t, b: e } = this.current;
      return Math.sqrt(t * t + e * e) || 1;
    }
    get targetScale() {
      const { a: t, b: e } = this.target;
      return Math.sqrt(t * t + e * e) || 1;
    }
    get minScale() {
      return this.option("minScale") || 1;
    }
    get fullScale() {
      const { contentRect: t } = this;
      return t.fullWidth / t.fitWidth || 1;
    }
    get maxScale() {
      return this.fullScale * (this.option("maxScale") || 1) || 1;
    }
    get coverScale() {
      const { containerRect: t, contentRect: e } = this,
        i = Math.max(t.height / e.fitHeight, t.width / e.fitWidth) || 1;
      return Math.min(this.fullScale, i);
    }
    get isScaling() {
      return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting;
    }
    get isContentLoading() {
      const t = this.content;
      return !!(t && t instanceof HTMLImageElement) && !t.complete;
    }
    get isResting() {
      if (this.isBouncingX || this.isBouncingY) return !1;
      for (const t of v) {
        const e = "e" == t || "f" === t ? 0.001 : 1e-5;
        if (Math.abs(this.target[t] - this.current[t]) > e) return !1;
      }
      return !(!this.ignoreBounds && !this.checkBounds().inBounds);
    }
    constructor(t, e = {}, i = {}) {
      var n;
      if (
        (super(e),
        Object.defineProperty(this, "pointerTracker", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "resizeObserver", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "updateTimer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "clickTimer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "rAF", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "isTicking", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(this, "friction", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "ignoreBounds", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(this, "isBouncingX", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(this, "isBouncingY", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(this, "clicks", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "trackingPoints", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: [],
        }),
        Object.defineProperty(this, "pwt", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "cwd", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "pmme", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: b.Init,
        }),
        Object.defineProperty(this, "isDragging", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(this, "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "content", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "spinner", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "containerRect", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: { width: 0, height: 0, innerWidth: 0, innerHeight: 0 },
        }),
        Object.defineProperty(this, "contentRect", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            fullWidth: 0,
            fullHeight: 0,
            fitWidth: 0,
            fitHeight: 0,
            width: 0,
            height: 0,
          },
        }),
        Object.defineProperty(this, "dragStart", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: { x: 0, y: 0, top: 0, left: 0, time: 0 },
        }),
        Object.defineProperty(this, "dragOffset", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: { x: 0, y: 0, time: 0 },
        }),
        Object.defineProperty(this, "current", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Object.assign({}, C),
        }),
        Object.defineProperty(this, "target", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Object.assign({}, C),
        }),
        Object.defineProperty(this, "velocity", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 },
        }),
        Object.defineProperty(this, "lockedAxis", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        !t)
      )
        throw new Error("Container Element Not Found");
      (this.container = t),
        this.initContent(),
        this.attachPlugins(Object.assign(Object.assign({}, k.Plugins), i)),
        this.emit("init");
      const o = this.content;
      if (
        (o.addEventListener("load", this.onLoad),
        o.addEventListener("error", this.onError),
        this.isContentLoading)
      ) {
        if (this.option("spinner")) {
          t.classList.add(this.cn("isLoading"));
          const e = s(x);
          !t.contains(o) || o.parentElement instanceof HTMLPictureElement
            ? (this.spinner = t.appendChild(e))
            : (this.spinner =
                (null === (n = o.parentElement) || void 0 === n
                  ? void 0
                  : n.insertBefore(e, o)) || null);
        }
        this.emit("beforeLoad");
      } else
        queueMicrotask(() => {
          this.enable();
        });
    }
    initContent() {
      const { container: t } = this,
        e = this.cn(z);
      let i = this.option(z) || t.querySelector(`.${e}`);
      if (
        (i ||
          ((i = t.querySelector("img,picture") || t.firstElementChild),
          i && P(i, e)),
        i instanceof HTMLPictureElement && (i = i.querySelector("img")),
        !i)
      )
        throw new Error("No content found");
      this.content = i;
    }
    onLoad() {
      this.spinner && (this.spinner.remove(), (this.spinner = null)),
        this.option("spinner") &&
          this.container.classList.remove(this.cn("isLoading")),
        this.emit("afterLoad"),
        this.state === b.Init ? this.enable() : this.updateMetrics();
    }
    onError() {
      this.state !== b.Destroy &&
        (this.spinner && (this.spinner.remove(), (this.spinner = null)),
        this.stop(),
        this.detachEvents(),
        (this.state = b.Error),
        this.emit("error"));
    }
    attachObserver() {
      var t;
      const e = () =>
        Math.abs(
          this.containerRect.width -
            this.container.getBoundingClientRect().width
        ) > 0.1 ||
        Math.abs(
          this.containerRect.height -
            this.container.getBoundingClientRect().height
        ) > 0.1;
      this.resizeObserver ||
        void 0 === window.ResizeObserver ||
        (this.resizeObserver = new ResizeObserver(() => {
          this.updateTimer ||
            (e()
              ? (this.onResize(),
                this.isMobile &&
                  (this.updateTimer = setTimeout(() => {
                    e() && this.onResize(), (this.updateTimer = null);
                  }, 500)))
              : this.updateTimer &&
                (clearTimeout(this.updateTimer), (this.updateTimer = null)));
        })),
        null === (t = this.resizeObserver) ||
          void 0 === t ||
          t.observe(this.container);
    }
    detachObserver() {
      var t;
      null === (t = this.resizeObserver) || void 0 === t || t.disconnect();
    }
    attachEvents() {
      const { container: t } = this;
      t.addEventListener("click", this.onClick, { passive: !1, capture: !1 }),
        t.addEventListener("wheel", this.onWheel, { passive: !1 }),
        (this.pointerTracker = new c(t, {
          start: this.onPointerDown,
          move: this.onPointerMove,
          end: this.onPointerUp,
        })),
        document.addEventListener(O, this.onMouseMove);
    }
    detachEvents() {
      var t;
      const { container: e } = this;
      e.removeEventListener("click", this.onClick, {
        passive: !1,
        capture: !1,
      }),
        e.removeEventListener("wheel", this.onWheel, { passive: !1 }),
        null === (t = this.pointerTracker) || void 0 === t || t.stop(),
        (this.pointerTracker = null),
        document.removeEventListener(O, this.onMouseMove),
        document.removeEventListener("keydown", this.onKeydown, !0),
        this.clickTimer &&
          (clearTimeout(this.clickTimer), (this.clickTimer = null)),
        this.updateTimer &&
          (clearTimeout(this.updateTimer), (this.updateTimer = null));
    }
    animate() {
      const t = this.friction;
      this.setTargetForce();
      const e = this.option("maxVelocity");
      for (const i of v)
        t
          ? ((this.velocity[i] *= 1 - t),
            e &&
              !this.isScaling &&
              (this.velocity[i] = Math.max(
                Math.min(this.velocity[i], e),
                -1 * e
              )),
            (this.current[i] += this.velocity[i]))
          : (this.current[i] = this.target[i]);
      this.setTransform(),
        this.setEdgeForce(),
        !this.isResting || this.isDragging
          ? (this.rAF = requestAnimationFrame(() => this.animate()))
          : this.stop("current");
    }
    setTargetForce() {
      for (const t of v)
        ("e" === t && this.isBouncingX) ||
          ("f" === t && this.isBouncingY) ||
          (this.velocity[t] =
            (1 / (1 - this.friction) - 1) * (this.target[t] - this.current[t]));
    }
    checkBounds(t = 0, e = 0) {
      const { current: i } = this,
        n = i.e + t,
        s = i.f + e,
        o = this.getBounds(),
        { x: a, y: r } = o,
        l = a.min,
        c = a.max,
        h = r.min,
        d = r.max;
      let u = 0,
        p = 0;
      return (
        l !== 1 / 0 && n < l
          ? (u = l - n)
          : c !== 1 / 0 && n > c && (u = c - n),
        h !== 1 / 0 && s < h
          ? (p = h - s)
          : d !== 1 / 0 && s > d && (p = d - s),
        Math.abs(u) < 0.001 && (u = 0),
        Math.abs(p) < 0.001 && (p = 0),
        Object.assign(Object.assign({}, o), {
          xDiff: u,
          yDiff: p,
          inBounds: !u && !p,
        })
      );
    }
    clampTargetBounds() {
      const { target: t } = this,
        { x: e, y: i } = this.getBounds();
      e.min !== 1 / 0 && (t.e = Math.max(t.e, e.min)),
        e.max !== 1 / 0 && (t.e = Math.min(t.e, e.max)),
        i.min !== 1 / 0 && (t.f = Math.max(t.f, i.min)),
        i.max !== 1 / 0 && (t.f = Math.min(t.f, i.max));
    }
    calculateContentDim(t = this.current) {
      const { content: e, contentRect: i } = this,
        { fitWidth: n, fitHeight: s, fullWidth: o, fullHeight: a } = i;
      let r = o,
        l = a;
      if (this.option("zoom") || 0 !== this.angle) {
        const i =
            !(e instanceof HTMLImageElement) &&
            ("none" === window.getComputedStyle(e).maxWidth ||
              "none" === window.getComputedStyle(e).maxHeight),
          c = i ? o : n,
          h = i ? a : s,
          d = this.getMatrix(t),
          u = new DOMPoint(0, 0).matrixTransform(d),
          p = new DOMPoint(0 + c, 0).matrixTransform(d),
          f = new DOMPoint(0 + c, 0 + h).matrixTransform(d),
          m = new DOMPoint(0, 0 + h).matrixTransform(d),
          g = Math.abs(f.x - u.x),
          b = Math.abs(f.y - u.y),
          v = Math.abs(m.x - p.x),
          y = Math.abs(m.y - p.y);
        (r = Math.max(g, v)), (l = Math.max(b, y));
      }
      return { contentWidth: r, contentHeight: l };
    }
    setEdgeForce() {
      if (
        this.ignoreBounds ||
        this.isDragging ||
        this.panMode === O ||
        this.targetScale < this.scale
      )
        return (this.isBouncingX = !1), void (this.isBouncingY = !1);
      const { target: t } = this,
        { x: e, y: i, xDiff: n, yDiff: s } = this.checkBounds();
      const o = this.option("maxVelocity");
      let a = this.velocity.e,
        r = this.velocity.f;
      0 !== n
        ? ((this.isBouncingX = !0),
          n * a <= 0
            ? (a += 0.14 * n)
            : ((a = 0.14 * n),
              e.min !== 1 / 0 && (this.target.e = Math.max(t.e, e.min)),
              e.max !== 1 / 0 && (this.target.e = Math.min(t.e, e.max))),
          o && (a = Math.max(Math.min(a, o), -1 * o)))
        : (this.isBouncingX = !1),
        0 !== s
          ? ((this.isBouncingY = !0),
            s * r <= 0
              ? (r += 0.14 * s)
              : ((r = 0.14 * s),
                i.min !== 1 / 0 && (this.target.f = Math.max(t.f, i.min)),
                i.max !== 1 / 0 && (this.target.f = Math.min(t.f, i.max))),
            o && (r = Math.max(Math.min(r, o), -1 * o)))
          : (this.isBouncingY = !1),
        this.isBouncingX && (this.velocity.e = a),
        this.isBouncingY && (this.velocity.f = r);
    }
    enable() {
      const { content: t } = this,
        e = new DOMMatrixReadOnly(window.getComputedStyle(t).transform);
      for (const t of v) this.current[t] = this.target[t] = e[t];
      this.updateMetrics(),
        this.attachObserver(),
        this.attachEvents(),
        (this.state = b.Ready),
        this.emit("ready");
    }
    onClick(t) {
      var e;
      this.isDragging &&
        (null === (e = this.pointerTracker) || void 0 === e || e.clear(),
        (this.trackingPoints = []),
        this.startDecelAnim());
      const i = t.target;
      if (!i || t.defaultPrevented) return;
      if (i && i.hasAttribute("disabled"))
        return t.preventDefault(), void t.stopPropagation();
      if (
        (() => {
          const t = window.getSelection();
          return t && "Range" === t.type;
        })() &&
        !i.closest("button")
      )
        return;
      const n = i.closest("[data-panzoom-action]"),
        s = i.closest("[data-panzoom-change]"),
        o = n || s,
        a = o && E(o) ? o.dataset : null;
      if (a) {
        const e = a.panzoomChange,
          i = a.panzoomAction;
        if (((e || i) && t.preventDefault(), e)) {
          let t = {};
          try {
            t = JSON.parse(e);
          } catch (t) {
            console && console.warn("The given data was not valid JSON");
          }
          return void this.applyChange(t);
        }
        if (i) return void (this[i] && this[i]());
      }
      if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3)
        return t.preventDefault(), void t.stopPropagation();
      const r = this.content.getBoundingClientRect();
      if (
        this.dragStart.time &&
        !this.canZoomOut() &&
        (Math.abs(r.x - this.dragStart.x) > 2 ||
          Math.abs(r.y - this.dragStart.y) > 2)
      )
        return;
      this.dragStart.time = 0;
      const l = (e) => {
          this.option("zoom") &&
            e &&
            "string" == typeof e &&
            /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(
              e
            ) &&
            "function" == typeof this[e] &&
            (t.preventDefault(), this[e]({ event: t }));
        },
        c = this.option("click", t),
        h = this.option("dblClick", t);
      h
        ? (this.clicks++,
          1 == this.clicks &&
            (this.clickTimer = setTimeout(() => {
              1 === this.clicks
                ? (this.emit("click", t), !t.defaultPrevented && c && l(c))
                : (this.emit("dblClick", t), t.defaultPrevented || l(h)),
                (this.clicks = 0),
                (this.clickTimer = null);
            }, 350)))
        : (this.emit("click", t), !t.defaultPrevented && c && l(c));
    }
    addTrackingPoint(t) {
      const e = this.trackingPoints.filter((t) => t.time > Date.now() - 100);
      e.push(t), (this.trackingPoints = e);
    }
    onPointerDown(t, e, i) {
      var n;
      if (!1 === this.option("touch", t)) return !1;
      (this.pwt = 0),
        (this.dragOffset = { x: 0, y: 0, time: 0 }),
        (this.trackingPoints = []);
      const s = this.content.getBoundingClientRect();
      if (
        ((this.dragStart = {
          x: s.x,
          y: s.y,
          top: s.top,
          left: s.left,
          time: Date.now(),
        }),
        this.clickTimer)
      )
        return !1;
      if (this.panMode === O && this.targetScale > 1)
        return t.preventDefault(), t.stopPropagation(), !1;
      const o = t.composedPath()[0];
      if (!i.length) {
        if (
          ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO", "IFRAME"].includes(
            o.nodeName
          ) ||
          o.closest("[contenteditable]") ||
          o.closest("[data-selectable]") ||
          o.closest("[data-draggable]") ||
          o.closest("[data-clickable]") ||
          o.closest("[data-panzoom-change]") ||
          o.closest("[data-panzoom-action]")
        )
          return !1;
        null === (n = window.getSelection()) ||
          void 0 === n ||
          n.removeAllRanges();
      }
      if ("mousedown" === t.type)
        ["A", "BUTTON"].includes(o.nodeName) || t.preventDefault();
      else if (Math.abs(this.velocity.a) > 0.3) return !1;
      return (
        (this.target.e = this.current.e),
        (this.target.f = this.current.f),
        this.stop(),
        this.isDragging ||
          ((this.isDragging = !0),
          this.addTrackingPoint(e),
          this.emit("touchStart", t)),
        !0
      );
    }
    onPointerMove(t, i, s) {
      if (!1 === this.option("touch", t)) return;
      if (!this.isDragging) return;
      if (
        i.length < 2 &&
        this.panOnlyZoomed &&
        e(this.targetScale) <= e(this.minScale)
      )
        return;
      if ((this.emit("touchMove", t), t.defaultPrevented)) return;
      this.addTrackingPoint(i[0]);
      const { content: o } = this,
        a = d(s[0], s[1]),
        r = d(i[0], i[1]);
      let l = 0,
        c = 0;
      if (i.length > 1) {
        const t = o.getBoundingClientRect();
        (l = a.clientX - t.left - 0.5 * t.width),
          (c = a.clientY - t.top - 0.5 * t.height);
      }
      const u = h(s[0], s[1]),
        p = h(i[0], i[1]);
      let f = u ? p / u : 1,
        m = r.clientX - a.clientX,
        g = r.clientY - a.clientY;
      (this.dragOffset.x += m),
        (this.dragOffset.y += g),
        (this.dragOffset.time = Date.now() - this.dragStart.time);
      let b =
        e(this.targetScale) === e(this.minScale) && this.option("lockAxis");
      if (b && !this.lockedAxis)
        if ("xy" === b || "y" === b || "touchmove" === t.type) {
          if (
            Math.abs(this.dragOffset.x) < 6 &&
            Math.abs(this.dragOffset.y) < 6
          )
            return void t.preventDefault();
          const e = Math.abs(
            (180 * Math.atan2(this.dragOffset.y, this.dragOffset.x)) / Math.PI
          );
          (this.lockedAxis = e > 45 && e < 135 ? "y" : "x"),
            (this.dragOffset.x = 0),
            (this.dragOffset.y = 0),
            (m = 0),
            (g = 0);
        } else this.lockedAxis = b;
      if (
        (n(t.target, this.content) && ((b = "x"), (this.dragOffset.y = 0)),
        b &&
          "xy" !== b &&
          this.lockedAxis !== b &&
          e(this.targetScale) === e(this.minScale))
      )
        return;
      t.cancelable && t.preventDefault(),
        this.container.classList.add(this.cn("isDragging"));
      const v = this.checkBounds(m, g);
      this.option("rubberband")
        ? ("x" !== this.isInfinite &&
            ((v.xDiff > 0 && m < 0) || (v.xDiff < 0 && m > 0)) &&
            (m *= Math.max(
              0,
              0.5 - Math.abs((0.75 / this.contentRect.fitWidth) * v.xDiff)
            )),
          "y" !== this.isInfinite &&
            ((v.yDiff > 0 && g < 0) || (v.yDiff < 0 && g > 0)) &&
            (g *= Math.max(
              0,
              0.5 - Math.abs((0.75 / this.contentRect.fitHeight) * v.yDiff)
            )))
        : (v.xDiff && (m = 0), v.yDiff && (g = 0));
      const y = this.targetScale,
        w = this.minScale,
        x = this.maxScale;
      y < 0.5 * w && (f = Math.max(f, w)),
        y > 1.5 * x && (f = Math.min(f, x)),
        "y" === this.lockedAxis && e(y) === e(w) && (m = 0),
        "x" === this.lockedAxis && e(y) === e(w) && (g = 0),
        this.applyChange({
          originX: l,
          originY: c,
          panX: m,
          panY: g,
          scale: f,
          friction: this.option("dragFriction"),
          ignoreBounds: !0,
        });
    }
    onPointerUp(t, e, i) {
      if (i.length)
        return (
          (this.dragOffset.x = 0),
          (this.dragOffset.y = 0),
          void (this.trackingPoints = [])
        );
      this.container.classList.remove(this.cn("isDragging")),
        this.isDragging &&
          (this.addTrackingPoint(e),
          this.panOnlyZoomed &&
            this.contentRect.width - this.contentRect.fitWidth < 1 &&
            this.contentRect.height - this.contentRect.fitHeight < 1 &&
            (this.trackingPoints = []),
          n(t.target, this.content) &&
            "y" === this.lockedAxis &&
            (this.trackingPoints = []),
          this.emit("touchEnd", t),
          (this.isDragging = !1),
          (this.lockedAxis = !1),
          this.state !== b.Destroy &&
            (t.defaultPrevented || this.startDecelAnim()));
    }
    startDecelAnim() {
      var t;
      const i = this.isScaling;
      this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
        (this.isBouncingX = !1),
        (this.isBouncingY = !1);
      for (const t of v) this.velocity[t] = 0;
      (this.target.e = this.current.e),
        (this.target.f = this.current.f),
        S(this.container, "is-scaling"),
        S(this.container, "is-animating"),
        (this.isTicking = !1);
      const { trackingPoints: n } = this,
        s = n[0],
        o = n[n.length - 1];
      let a = 0,
        r = 0,
        l = 0;
      o &&
        s &&
        ((a = o.clientX - s.clientX),
        (r = o.clientY - s.clientY),
        (l = o.time - s.time));
      const c =
        (null === (t = window.visualViewport) || void 0 === t
          ? void 0
          : t.scale) || 1;
      1 !== c && ((a *= c), (r *= c));
      let h = 0,
        d = 0,
        u = 0,
        p = 0,
        f = this.option("decelFriction");
      const m = this.targetScale;
      if (l > 0) {
        (u = Math.abs(a) > 3 ? a / (l / 30) : 0),
          (p = Math.abs(r) > 3 ? r / (l / 30) : 0);
        const t = this.option("maxVelocity");
        t &&
          ((u = Math.max(Math.min(u, t), -1 * t)),
          (p = Math.max(Math.min(p, t), -1 * t)));
      }
      u && (h = u / (1 / (1 - f) - 1)),
        p && (d = p / (1 / (1 - f) - 1)),
        ("y" === this.option("lockAxis") ||
          ("xy" === this.option("lockAxis") &&
            "y" === this.lockedAxis &&
            e(m) === this.minScale)) &&
          (h = u = 0),
        ("x" === this.option("lockAxis") ||
          ("xy" === this.option("lockAxis") &&
            "x" === this.lockedAxis &&
            e(m) === this.minScale)) &&
          (d = p = 0);
      const g = this.dragOffset.x,
        b = this.dragOffset.y,
        y = this.option("dragMinThreshold") || 0;
      Math.abs(g) < y && Math.abs(b) < y && ((h = d = 0), (u = p = 0)),
        (m < this.minScale - 1e-5 ||
          m > this.maxScale + 1e-5 ||
          (i && !h && !d)) &&
          (f = 0.35),
        this.applyChange({ panX: h, panY: d, friction: f }),
        this.emit("decel", u, p, g, b);
    }
    onWheel(t) {
      var e = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(function (
        t,
        e
      ) {
        return Math.abs(e) > Math.abs(t) ? e : t;
      });
      const i = Math.max(-1, Math.min(1, e));
      if ((this.emit("wheel", t, i), this.panMode === O)) return;
      if (t.defaultPrevented) return;
      const n = this.option("wheel");
      "pan" === n
        ? (t.preventDefault(),
          (this.panOnlyZoomed && !this.canZoomOut()) ||
            this.applyChange({
              panX: 2 * -t.deltaX,
              panY: 2 * -t.deltaY,
              bounce: !1,
            }))
        : "zoom" === n && !1 !== this.option("zoom") && this.zoomWithWheel(t);
    }
    onMouseMove(t) {
      this.panWithMouse(t);
    }
    onKeydown(t) {
      "Escape" === t.key && this.toggleFS();
    }
    onResize() {
      this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
    }
    setTransform() {
      this.emit("beforeTransform");
      const { current: t, target: i, content: n, contentRect: s } = this,
        o = Object.assign({}, C);
      for (const n of v) {
        const s = "e" == n || "f" === n ? T : M;
        (o[n] = e(t[n], s)),
          Math.abs(i[n] - t[n]) < ("e" == n || "f" === n ? 0.51 : 0.001) &&
            (t[n] = i[n]);
      }
      let { a: a, b: r, c: l, d: c, e: h, f: d } = o,
        u = `matrix(${a}, ${r}, ${l}, ${c}, ${h}, ${d})`,
        p = n.parentElement instanceof HTMLPictureElement ? n.parentElement : n;
      if (
        (this.option("transformParent") && (p = p.parentElement || p),
        p.style.transform === u)
      )
        return;
      p.style.transform = u;
      const { contentWidth: f, contentHeight: m } = this.calculateContentDim();
      (s.width = f), (s.height = m), this.emit("afterTransform");
    }
    updateMetrics(t = !1) {
      var i;
      if (!this || this.state === b.Destroy) return;
      if (this.isContentLoading) return;
      const n = Math.max(
          1,
          (null === (i = window.visualViewport) || void 0 === i
            ? void 0
            : i.scale) || 1
        ),
        { container: s, content: o } = this,
        a = o instanceof HTMLImageElement,
        r = s.getBoundingClientRect(),
        l = getComputedStyle(this.container);
      let c = r.width * n,
        h = r.height * n;
      const d = parseFloat(l.paddingTop) + parseFloat(l.paddingBottom),
        u = c - (parseFloat(l.paddingLeft) + parseFloat(l.paddingRight)),
        p = h - d;
      this.containerRect = {
        width: c,
        height: h,
        innerWidth: u,
        innerHeight: p,
      };
      let f = this.option("width") || "auto",
        m = this.option("height") || "auto";
      "auto" === f &&
        (f =
          parseFloat(o.dataset.width || "") ||
          ((t) => {
            let e = 0;
            return (
              (e =
                t instanceof HTMLImageElement
                  ? t.naturalWidth
                  : t instanceof SVGElement
                  ? t.width.baseVal.value
                  : Math.max(t.offsetWidth, t.scrollWidth)),
              e || 0
            );
          })(o)),
        "auto" === m &&
          (m =
            parseFloat(o.dataset.height || "") ||
            ((t) => {
              let e = 0;
              return (
                (e =
                  t instanceof HTMLImageElement
                    ? t.naturalHeight
                    : t instanceof SVGElement
                    ? t.height.baseVal.value
                    : Math.max(t.offsetHeight, t.scrollHeight)),
                e || 0
              );
            })(o));
      let g =
        o.parentElement instanceof HTMLPictureElement ? o.parentElement : o;
      this.option("transformParent") && (g = g.parentElement || g);
      const v = g.getAttribute("style") || "";
      g.style.setProperty("transform", "none", "important"),
        a && ((g.style.width = ""), (g.style.height = "")),
        g.offsetHeight;
      const y = o.getBoundingClientRect();
      let w = y.width * n,
        x = y.height * n,
        E = 0,
        S = 0;
      a &&
        (Math.abs(f - w) > 1 || Math.abs(m - x) > 1) &&
        ({
          width: w,
          height: x,
          top: E,
          left: S,
        } = ((t, e, i, n) => {
          const s = i / n;
          return (
            s > t / e ? ((i = t), (n = t / s)) : ((i = e * s), (n = e)),
            { width: i, height: n, top: 0.5 * (e - n), left: 0.5 * (t - i) }
          );
        })(w, x, f, m)),
        (this.contentRect = Object.assign(Object.assign({}, this.contentRect), {
          top: y.top - r.top + E,
          bottom: r.bottom - y.bottom + E,
          left: y.left - r.left + S,
          right: r.right - y.right + S,
          fitWidth: w,
          fitHeight: x,
          width: w,
          height: x,
          fullWidth: f,
          fullHeight: m,
        })),
        (g.style.cssText = v),
        a && ((g.style.width = `${w}px`), (g.style.height = `${x}px`)),
        this.setTransform(),
        !0 !== t && this.emit("refresh"),
        this.ignoreBounds ||
          (e(this.targetScale) < e(this.minScale)
            ? this.zoomTo(this.minScale, { friction: 0 })
            : this.targetScale > this.maxScale
            ? this.zoomTo(this.maxScale, { friction: 0 })
            : this.state === b.Init ||
              this.checkBounds().inBounds ||
              this.requestTick()),
        this.updateControls();
    }
    getBounds() {
      const t = this.option("bounds");
      if ("auto" !== t) return t;
      const { contentWidth: i, contentHeight: n } = this.calculateContentDim(
        this.target
      );
      let s = 0,
        o = 0,
        a = 0,
        r = 0;
      const l = this.option("infinite");
      if (!0 === l || (this.lockedAxis && l === this.lockedAxis))
        (s = -1 / 0), (a = 1 / 0), (o = -1 / 0), (r = 1 / 0);
      else {
        let { containerRect: t, contentRect: l } = this,
          c = e(this.contentRect.fitWidth * this.targetScale, T),
          h = e(this.contentRect.fitHeight * this.targetScale, T),
          { innerWidth: d, innerHeight: u } = t;
        if (
          (this.containerRect.width === c && (d = t.width),
          this.containerRect.width === h && (u = t.height),
          i > d)
        ) {
          (a = 0.5 * (i - d)), (s = -1 * a);
          let t = 0.5 * (l.right - l.left);
          (s += t), (a += t);
        }
        if (
          (this.contentRect.fitWidth > d &&
            i < d &&
            ((s -= 0.5 * (this.contentRect.fitWidth - d)),
            (a -= 0.5 * (this.contentRect.fitWidth - d))),
          n > u)
        ) {
          (r = 0.5 * (n - u)), (o = -1 * r);
          let t = 0.5 * (l.bottom - l.top);
          (o += t), (r += t);
        }
        this.contentRect.fitHeight > u &&
          n < u &&
          ((s -= 0.5 * (this.contentRect.fitHeight - u)),
          (a -= 0.5 * (this.contentRect.fitHeight - u)));
      }
      return { x: { min: s, max: a }, y: { min: o, max: r } };
    }
    updateControls() {
      const t = this,
        i = t.container,
        {
          panMode: n,
          contentRect: s,
          fullScale: o,
          targetScale: r,
          coverScale: l,
          maxScale: c,
          minScale: h,
        } = t;
      let d =
          {
            toggleMax: r - h < 0.5 * (c - h) ? c : h,
            toggleCover: r - h < 0.5 * (l - h) ? l : h,
            toggleZoom: r - h < 0.5 * (o - h) ? o : h,
          }[t.option("click") || ""] || h,
        u = t.canZoomIn(),
        p = t.canZoomOut(),
        f = n === A && !!this.option("touch"),
        m = p && f;
      f &&
        (e(r) < e(h) && !this.panOnlyZoomed && (m = !0),
        (e(s.width, 1) > e(s.fitWidth, 1) ||
          e(s.height, 1) > e(s.fitHeight, 1)) &&
          (m = !0)),
        e(s.width * r, 1) < e(s.fitWidth, 1) && (m = !1),
        n === O && (m = !1);
      let g = u && e(d) > e(r),
        b = !g && !m && p && e(d) < e(r);
      a(i, this.cn("canZoomIn"), g),
        a(i, this.cn("canZoomOut"), b),
        a(i, this.cn("isDraggable"), m);
      for (const t of i.querySelectorAll('[data-panzoom-action="zoomIn"]'))
        u
          ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
          : (t.setAttribute("disabled", ""), t.setAttribute("tabindex", "-1"));
      for (const t of i.querySelectorAll('[data-panzoom-action="zoomOut"]'))
        p
          ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
          : (t.setAttribute("disabled", ""), t.setAttribute("tabindex", "-1"));
      for (const t of i.querySelectorAll(
        '[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]'
      )) {
        u || p
          ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
          : (t.setAttribute("disabled", ""), t.setAttribute("tabindex", "-1"));
        const e = t.querySelector("g");
        e && (e.style.display = u ? "" : "none");
      }
    }
    panTo({
      x: t = this.target.e,
      y: e = this.target.f,
      scale: i = this.targetScale,
      friction: n = this.option("friction"),
      angle: s = 0,
      originX: o = 0,
      originY: a = 0,
      flipX: r = !1,
      flipY: l = !1,
      ignoreBounds: c = !1,
    }) {
      this.state !== b.Destroy &&
        this.applyChange({
          panX: t - this.target.e,
          panY: e - this.target.f,
          scale: i / this.targetScale,
          angle: s,
          originX: o,
          originY: a,
          friction: n,
          flipX: r,
          flipY: l,
          ignoreBounds: c,
        });
    }
    applyChange({
      panX: t = 0,
      panY: i = 0,
      scale: n = 1,
      angle: s = 0,
      originX: o = -this.current.e,
      originY: a = -this.current.f,
      friction: r = this.option("friction"),
      flipX: l = !1,
      flipY: c = !1,
      ignoreBounds: h = !1,
      bounce: d = this.option("bounce"),
    }) {
      if (this.state === b.Destroy) return;
      this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
        (this.friction = r || 0),
        (this.ignoreBounds = h);
      const { current: u } = this,
        p = u.e,
        f = u.f,
        m = this.getMatrix(this.target);
      let g = new DOMMatrix().translate(p, f).translate(o, a).translate(t, i);
      if (this.option("zoom")) {
        if (!h) {
          const t = this.targetScale,
            e = this.minScale,
            i = this.maxScale;
          t * n < e && (n = e / t), t * n > i && (n = i / t);
        }
        g = g.scale(n);
      }
      (g = g.translate(-o, -a).translate(-p, -f).multiply(m)),
        s && (g = g.rotate(s)),
        l && (g = g.scale(-1, 1)),
        c && (g = g.scale(1, -1));
      for (const t of v)
        "e" !== t &&
        "f" !== t &&
        (g[t] > this.minScale + 1e-5 || g[t] < this.minScale - 1e-5)
          ? (this.target[t] = g[t])
          : (this.target[t] = e(g[t], T));
      (this.targetScale < this.scale ||
        Math.abs(n - 1) > 0.1 ||
        this.panMode === O ||
        !1 === d) &&
        !h &&
        this.clampTargetBounds(),
        this.isResting || ((this.state = b.Panning), this.requestTick());
    }
    stop(t = !1) {
      if (this.state === b.Init || this.state === b.Destroy) return;
      const e = this.isTicking;
      this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
        (this.isBouncingX = !1),
        (this.isBouncingY = !1);
      for (const e of v)
        (this.velocity[e] = 0),
          "current" === t
            ? (this.current[e] = this.target[e])
            : "target" === t && (this.target[e] = this.current[e]);
      this.setTransform(),
        S(this.container, "is-scaling"),
        S(this.container, "is-animating"),
        (this.isTicking = !1),
        (this.state = b.Ready),
        e && (this.emit("endAnimation"), this.updateControls());
    }
    requestTick() {
      this.isTicking ||
        (this.emit("startAnimation"),
        this.updateControls(),
        P(this.container, "is-animating"),
        this.isScaling && P(this.container, "is-scaling")),
        (this.isTicking = !0),
        this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()));
    }
    panWithMouse(t, i = this.option("mouseMoveFriction")) {
      if (((this.pmme = t), this.panMode !== O || !t)) return;
      if (e(this.targetScale) <= e(this.minScale)) return;
      this.emit("mouseMove", t);
      const { container: n, containerRect: s, contentRect: o } = this,
        a = s.width,
        r = s.height,
        l = n.getBoundingClientRect(),
        c = (t.clientX || 0) - l.left,
        h = (t.clientY || 0) - l.top;
      let { contentWidth: d, contentHeight: u } = this.calculateContentDim(
        this.target
      );
      const p = this.option("mouseMoveFactor");
      p > 1 && (d !== a && (d *= p), u !== r && (u *= p));
      let f = 0.5 * (d - a) - (((c / a) * 100) / 100) * (d - a);
      f += 0.5 * (o.right - o.left);
      let m = 0.5 * (u - r) - (((h / r) * 100) / 100) * (u - r);
      (m += 0.5 * (o.bottom - o.top)),
        this.applyChange({
          panX: f - this.target.e,
          panY: m - this.target.f,
          friction: i,
        });
    }
    zoomWithWheel(t) {
      if (this.state === b.Destroy || this.state === b.Init) return;
      const i = Date.now();
      if (i - this.pwt < 45) return void t.preventDefault();
      this.pwt = i;
      var n = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(function (
        t,
        e
      ) {
        return Math.abs(e) > Math.abs(t) ? e : t;
      });
      const s = Math.max(-1, Math.min(1, n)),
        { targetScale: o, maxScale: a, minScale: r } = this;
      let l = (o * (100 + 45 * s)) / 100;
      e(l) < e(r) && e(o) <= e(r)
        ? ((this.cwd += Math.abs(s)), (l = r))
        : e(l) > e(a) && e(o) >= e(a)
        ? ((this.cwd += Math.abs(s)), (l = a))
        : ((this.cwd = 0), (l = Math.max(Math.min(l, a), r))),
        this.cwd > this.option("wheelLimit") ||
          (t.preventDefault(), e(l) !== e(o) && this.zoomTo(l, { event: t }));
    }
    canZoomIn() {
      return (
        this.option("zoom") &&
        (e(this.contentRect.width, 1) < e(this.contentRect.fitWidth, 1) ||
          e(this.targetScale) < e(this.maxScale))
      );
    }
    canZoomOut() {
      return this.option("zoom") && e(this.targetScale) > e(this.minScale);
    }
    zoomIn(t = 1.25, e) {
      this.zoomTo(this.targetScale * t, e);
    }
    zoomOut(t = 0.8, e) {
      this.zoomTo(this.targetScale * t, e);
    }
    zoomToFit(t) {
      this.zoomTo("fit", t);
    }
    zoomToCover(t) {
      this.zoomTo("cover", t);
    }
    zoomToFull(t) {
      this.zoomTo("full", t);
    }
    zoomToMax(t) {
      this.zoomTo("max", t);
    }
    toggleZoom(t) {
      this.zoomTo(
        this.targetScale - this.minScale <
          0.5 * (this.fullScale - this.minScale)
          ? "full"
          : "fit",
        t
      );
    }
    toggleMax(t) {
      this.zoomTo(
        this.targetScale - this.minScale < 0.5 * (this.maxScale - this.minScale)
          ? "max"
          : "fit",
        t
      );
    }
    toggleCover(t) {
      this.zoomTo(
        this.targetScale - this.minScale <
          0.5 * (this.coverScale - this.minScale)
          ? "cover"
          : "fit",
        t
      );
    }
    iterateZoom(t) {
      this.zoomTo("next", t);
    }
    zoomTo(
      t = 1,
      {
        friction: e = "auto",
        originX: i = "auto",
        originY: n = "auto",
        event: s,
      } = {}
    ) {
      if (this.isContentLoading || this.state === b.Destroy) return;
      const { targetScale: o } = this;
      this.stop();
      let a = 1;
      if (
        (this.panMode === O && (s = this.pmme || s),
        s || "auto" === i || "auto" === n)
      ) {
        const t = this.content.getBoundingClientRect(),
          e = this.container.getBoundingClientRect(),
          o = s ? s.clientX : e.left + 0.5 * e.width,
          a = s ? s.clientY : e.top + 0.5 * e.height;
        (i = o - t.left - 0.5 * t.width), (n = a - t.top - 0.5 * t.height);
      }
      const r = this.fullScale,
        l = this.maxScale;
      let c = this.coverScale;
      "number" == typeof t
        ? (a = t / o)
        : ("next" === t &&
            (r - c < 0.2 && (c = r),
            (t = o < r - 1e-5 ? "full" : o < l - 1e-5 ? "max" : "fit")),
          (a =
            "full" === t
              ? r / o || 1
              : "cover" === t
              ? c / o || 1
              : "max" === t
              ? l / o || 1
              : 1 / o || 1)),
        (e = "auto" === e ? (a > 1 ? 0.15 : 0.25) : e),
        this.applyChange({ scale: a, originX: i, originY: n, friction: e }),
        s && this.panMode === O && this.panWithMouse(s, e);
    }
    rotateCCW() {
      this.applyChange({ angle: -90 });
    }
    rotateCW() {
      this.applyChange({ angle: 90 });
    }
    flipX() {
      this.applyChange({ flipX: !0 });
    }
    flipY() {
      this.applyChange({ flipY: !0 });
    }
    fitX() {
      this.stop("target");
      const { containerRect: t, contentRect: e, target: i } = this;
      this.applyChange({
        panX: 0.5 * t.width - (e.left + 0.5 * e.fitWidth) - i.e,
        panY: 0.5 * t.height - (e.top + 0.5 * e.fitHeight) - i.f,
        scale: t.width / e.fitWidth / this.targetScale,
        originX: 0,
        originY: 0,
        ignoreBounds: !0,
      });
    }
    fitY() {
      this.stop("target");
      const { containerRect: t, contentRect: e, target: i } = this;
      this.applyChange({
        panX: 0.5 * t.width - (e.left + 0.5 * e.fitWidth) - i.e,
        panY: 0.5 * t.innerHeight - (e.top + 0.5 * e.fitHeight) - i.f,
        scale: t.height / e.fitHeight / this.targetScale,
        originX: 0,
        originY: 0,
        ignoreBounds: !0,
      });
    }
    toggleFS() {
      const { container: t } = this,
        e = this.cn("inFullscreen"),
        i = this.cn("htmlHasFullscreen");
      t.classList.toggle(e);
      const n = t.classList.contains(e);
      n
        ? (document.documentElement.classList.add(i),
          document.addEventListener("keydown", this.onKeydown, !0))
        : (document.documentElement.classList.remove(i),
          document.removeEventListener("keydown", this.onKeydown, !0)),
        this.updateMetrics(),
        this.emit(n ? "enterFS" : "exitFS");
    }
    getMatrix(t = this.current) {
      const { a: e, b: i, c: n, d: s, e: o, f: a } = t;
      return new DOMMatrix([e, i, n, s, o, a]);
    }
    reset(t) {
      if (this.state !== b.Init && this.state !== b.Destroy) {
        this.stop("current");
        for (const t of v) this.target[t] = C[t];
        (this.target.a = this.minScale),
          (this.target.d = this.minScale),
          this.clampTargetBounds(),
          this.isResting ||
            ((this.friction = void 0 === t ? this.option("friction") : t),
            (this.state = b.Panning),
            this.requestTick());
      }
    }
    destroy() {
      this.stop(),
        (this.state = b.Destroy),
        this.detachEvents(),
        this.detachObserver();
      const { container: t, content: e } = this,
        i = this.option("classes") || {};
      for (const e of Object.values(i)) t.classList.remove(e + "");
      e &&
        (e.removeEventListener("load", this.onLoad),
        e.removeEventListener("error", this.onError)),
        this.detachPlugins();
    }
  }
  Object.defineProperty(k, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: w,
  }),
    Object.defineProperty(k, "Plugins", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {},
    });
  const I = function (t, e) {
      let i = !0;
      return (...n) => {
        i &&
          ((i = !1),
          t(...n),
          setTimeout(() => {
            i = !0;
          }, e));
      };
    },
    D = (t, e) => {
      let i = [];
      return (
        t.childNodes.forEach((t) => {
          t.nodeType !== Node.ELEMENT_NODE || (e && !t.matches(e)) || i.push(t);
        }),
        i
      );
    },
    F = {
      viewport: null,
      track: null,
      enabled: !0,
      slides: [],
      axis: "x",
      transition: "fade",
      preload: 1,
      slidesPerPage: "auto",
      initialPage: 0,
      friction: 0.12,
      Panzoom: { decelFriction: 0.12 },
      center: !0,
      infinite: !0,
      fill: !0,
      dragFree: !1,
      adaptiveHeight: !1,
      direction: "ltr",
      classes: {
        container: "f-carousel",
        viewport: "f-carousel__viewport",
        track: "f-carousel__track",
        slide: "f-carousel__slide",
        isLTR: "is-ltr",
        isRTL: "is-rtl",
        isHorizontal: "is-horizontal",
        isVertical: "is-vertical",
        inTransition: "in-transition",
        isSelected: "is-selected",
      },
      l10n: {
        NEXT: "Next slide",
        PREV: "Previous slide",
        GOTO: "Go to slide #%d",
      },
    };
  var j;
  !(function (t) {
    (t[(t.Init = 0)] = "Init"),
      (t[(t.Ready = 1)] = "Ready"),
      (t[(t.Destroy = 2)] = "Destroy");
  })(j || (j = {}));
  const H = (t) => {
      if ("string" == typeof t || t instanceof HTMLElement) t = { html: t };
      else {
        const e = t.thumb;
        void 0 !== e &&
          ("string" == typeof e && (t.thumbSrc = e),
          e instanceof HTMLImageElement &&
            ((t.thumbEl = e), (t.thumbElSrc = e.src), (t.thumbSrc = e.src)),
          delete t.thumb);
      }
      return Object.assign(
        {
          html: "",
          el: null,
          isDom: !1,
          class: "",
          customClass: "",
          index: -1,
          dim: 0,
          gap: 0,
          pos: 0,
          transition: !1,
        },
        t
      );
    },
    B = (t = {}) =>
      Object.assign({ index: -1, slides: [], dim: 0, pos: -1 }, t);
  class N extends m {
    constructor(t, e) {
      super(e),
        Object.defineProperty(this, "instance", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t,
        });
    }
    attach() {}
    detach() {}
  }
  const _ = {
    classes: {
      list: "f-carousel__dots",
      isDynamic: "is-dynamic",
      hasDots: "has-dots",
      dot: "f-carousel__dot",
      isBeforePrev: "is-before-prev",
      isPrev: "is-prev",
      isCurrent: "is-current",
      isNext: "is-next",
      isAfterNext: "is-after-next",
    },
    dotTpl:
      '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
    dynamicFrom: 11,
    maxCount: 1 / 0,
    minCount: 2,
  };
  class W extends N {
    constructor() {
      super(...arguments),
        Object.defineProperty(this, "isDynamic", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(this, "list", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        });
    }
    onRefresh() {
      this.refresh();
    }
    build() {
      let t = this.list;
      return (
        t ||
          ((t = document.createElement("ul")),
          P(t, this.cn("list")),
          t.setAttribute("role", "tablist"),
          this.instance.container.appendChild(t),
          P(this.instance.container, this.cn("hasDots")),
          (this.list = t)),
        t
      );
    }
    refresh() {
      var t;
      const e = this.instance.pages.length,
        i = Math.min(2, this.option("minCount")),
        n = Math.max(2e3, this.option("maxCount")),
        s = this.option("dynamicFrom");
      if (e < i || e > n) return void this.cleanup();
      const o = "number" == typeof s && e > 5 && e >= s,
        r =
          !this.list || this.isDynamic !== o || this.list.children.length !== e;
      r && this.cleanup();
      const l = this.build();
      if ((a(l, this.cn("isDynamic"), !!o), r))
        for (let t = 0; t < e; t++) l.append(this.createItem(t));
      let c,
        h = 0;
      for (const e of [...l.children]) {
        const i = h === this.instance.page;
        i && (c = e),
          a(e, this.cn("isCurrent"), i),
          null === (t = e.children[0]) ||
            void 0 === t ||
            t.setAttribute("aria-selected", i ? "true" : "false");
        for (const t of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"])
          S(e, this.cn(t));
        h++;
      }
      if (((c = c || l.firstChild), o && c)) {
        const t = c.previousElementSibling,
          e = t && t.previousElementSibling;
        P(t, this.cn("isPrev")), P(e, this.cn("isBeforePrev"));
        const i = c.nextElementSibling,
          n = i && i.nextElementSibling;
        P(i, this.cn("isNext")), P(n, this.cn("isAfterNext"));
      }
      this.isDynamic = o;
    }
    createItem(t = 0) {
      var e;
      const i = document.createElement("li");
      i.setAttribute("role", "presentation");
      const n = s(
        this.instance
          .localize(this.option("dotTpl"), [["%d", t + 1]])
          .replace(/\%i/g, t + "")
      );
      return (
        i.appendChild(n),
        null === (e = i.children[0]) ||
          void 0 === e ||
          e.setAttribute("role", "tab"),
        i
      );
    }
    cleanup() {
      this.list && (this.list.remove(), (this.list = null)),
        (this.isDynamic = !1),
        S(this.instance.container, this.cn("hasDots"));
    }
    attach() {
      this.instance.on(["refresh", "change"], this.onRefresh);
    }
    detach() {
      this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
    }
  }
  Object.defineProperty(W, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: _,
  });
  const $ = "disabled",
    X = "next",
    Y = "prev";
  class q extends N {
    constructor() {
      super(...arguments),
        Object.defineProperty(this, "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "prev", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "next", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        });
    }
    onRefresh() {
      const t = this.instance,
        e = t.pages.length,
        i = t.page;
      if (e < 2) return void this.cleanup();
      this.build();
      let n = this.prev,
        s = this.next;
      n &&
        s &&
        (n.removeAttribute($),
        s.removeAttribute($),
        t.isInfinite ||
          (i <= 0 && n.setAttribute($, ""),
          i >= e - 1 && s.setAttribute($, "")));
    }
    createButton(t) {
      const e = this.instance,
        i = document.createElement("button");
      i.setAttribute("tabindex", "0"),
        i.setAttribute("title", e.localize(`{{${t.toUpperCase()}}}`)),
        P(i, this.cn("button") + " " + this.cn(t === X ? "isNext" : "isPrev"));
      const n = e.isRTL ? (t === X ? Y : X) : t;
      var s;
      return (
        (i.innerHTML = e.localize(this.option(`${n}Tpl`))),
        (i.dataset[
          `carousel${
            ((s = t),
            s
              ? s.match("^[a-z]")
                ? s.charAt(0).toUpperCase() + s.substring(1)
                : s
              : "")
          }`
        ] = "true"),
        i
      );
    }
    build() {
      let t = this.container;
      t ||
        ((this.container = t = document.createElement("div")),
        P(t, this.cn("container")),
        this.instance.container.appendChild(t)),
        this.next || (this.next = t.appendChild(this.createButton(X))),
        this.prev || (this.prev = t.appendChild(this.createButton(Y)));
    }
    cleanup() {
      this.prev && this.prev.remove(),
        this.next && this.next.remove(),
        this.container && this.container.remove(),
        (this.prev = null),
        (this.next = null),
        (this.container = null);
    }
    attach() {
      this.instance.on(["refresh", "change"], this.onRefresh);
    }
    detach() {
      this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
    }
  }
  Object.defineProperty(q, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      classes: {
        container: "f-carousel__nav",
        button: "f-button",
        isNext: "is-next",
        isPrev: "is-prev",
      },
      nextTpl:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
      prevTpl:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
    },
  });
  class V extends N {
    constructor() {
      super(...arguments),
        Object.defineProperty(this, "selectedIndex", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "target", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "nav", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        });
    }
    addAsTargetFor(t) {
      (this.target = this.instance), (this.nav = t), this.attachEvents();
    }
    addAsNavFor(t) {
      (this.nav = this.instance), (this.target = t), this.attachEvents();
    }
    attachEvents() {
      this.nav &&
        this.target &&
        ((this.nav.options.initialSlide = this.target.options.initialPage),
        this.nav.on("ready", this.onNavReady),
        this.nav.state === j.Ready && this.onNavReady(this.nav),
        this.target.on("ready", this.onTargetReady),
        this.target.state === j.Ready && this.onTargetReady(this.target));
    }
    onNavReady(t) {
      t.on("createSlide", this.onNavCreateSlide),
        t.on("Panzoom.click", this.onNavClick),
        t.on("Panzoom.touchEnd", this.onNavTouch),
        this.onTargetChange();
    }
    onTargetReady(t) {
      t.on("change", this.onTargetChange),
        t.on("Panzoom.refresh", this.onTargetChange),
        this.onTargetChange();
    }
    onNavClick(t, e, i) {
      this.onNavTouch(t, t.panzoom, i);
    }
    onNavTouch(t, e, i) {
      var n, s;
      if (Math.abs(e.dragOffset.x) > 3 || Math.abs(e.dragOffset.y) > 3) return;
      const o = i.target,
        { nav: a, target: r } = this;
      if (!a || !r || !o) return;
      const l = o.closest("[data-index]");
      if ((i.stopPropagation(), i.preventDefault(), !l)) return;
      const c = parseInt(l.dataset.index || "", 10) || 0,
        h = r.getPageForSlide(c),
        d = a.getPageForSlide(c);
      a.slideTo(d),
        r.slideTo(h, {
          friction:
            (null ===
              (s =
                null === (n = this.nav) || void 0 === n ? void 0 : n.plugins) ||
            void 0 === s
              ? void 0
              : s.Sync.option("friction")) || 0,
        }),
        this.markSelectedSlide(c);
    }
    onNavCreateSlide(t, e) {
      e.index === this.selectedIndex && this.markSelectedSlide(e.index);
    }
    onTargetChange() {
      const { target: t, nav: e } = this;
      if (!t || !e) return;
      if (e.state !== j.Ready || t.state !== j.Ready) return;
      const i = t.pages[t.page].slides[0].index,
        n = e.getPageForSlide(i);
      this.markSelectedSlide(i), e.slideTo(n);
    }
    markSelectedSlide(t) {
      const e = this.nav;
      e &&
        e.state === j.Ready &&
        ((this.selectedIndex = t),
        [...e.slides].map((e) => {
          e.el &&
            e.el.classList[e.index === t ? "add" : "remove"]("is-nav-selected");
        }));
    }
    attach() {
      const t = this;
      let e = t.options.target,
        i = t.options.nav;
      e ? t.addAsNavFor(e) : i && t.addAsTargetFor(i);
    }
    detach() {
      const t = this,
        e = t.nav,
        i = t.target;
      e &&
        (e.off("ready", t.onNavReady),
        e.off("createSlide", t.onNavCreateSlide),
        e.off("Panzoom.click", t.onNavClick),
        e.off("Panzoom.touchEnd", t.onNavTouch)),
        (t.nav = null),
        i &&
          (i.off("ready", t.onTargetReady),
          i.off("refresh", t.onTargetChange),
          i.off("change", t.onTargetChange)),
        (t.target = null);
    }
  }
  Object.defineProperty(V, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: { friction: 0.35 },
  });
  const Z = { Navigation: q, Dots: W, Sync: V };
  class U extends g {
    get axis() {
      return this.isHorizontal ? "e" : "f";
    }
    get isEnabled() {
      return this.state === j.Ready;
    }
    get isInfinite() {
      let t = !1;
      const { contentDim: e, viewportDim: i, pages: n, slides: s } = this;
      return (
        n.length >= 2 && e + s[0].dim >= i && (t = this.option("infinite")), t
      );
    }
    get isRTL() {
      return "rtl" === this.option("direction");
    }
    get isHorizontal() {
      return "x" === this.option("axis");
    }
    constructor(t, e = {}, i = {}) {
      if (
        (super(),
        Object.defineProperty(this, "userOptions", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {},
        }),
        Object.defineProperty(this, "userPlugins", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {},
        }),
        Object.defineProperty(this, "bp", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "",
        }),
        Object.defineProperty(this, "lp", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: j.Init,
        }),
        Object.defineProperty(this, "page", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "prevPage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "viewport", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "track", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "slides", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: [],
        }),
        Object.defineProperty(this, "pages", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: [],
        }),
        Object.defineProperty(this, "panzoom", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "inTransition", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Set(),
        }),
        Object.defineProperty(this, "contentDim", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "viewportDim", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        "string" == typeof t && (t = document.querySelector(t)),
        !t || !E(t))
      )
        throw new Error("No Element found");
      (this.container = t),
        (this.slideNext = I(this.slideNext.bind(this), 150)),
        (this.slidePrev = I(this.slidePrev.bind(this), 150)),
        (this.userOptions = e),
        (this.userPlugins = i),
        queueMicrotask(() => {
          this.processOptions();
        });
    }
    processOptions() {
      const t = p({}, U.defaults, this.userOptions);
      let e = "";
      const i = t.breakpoints;
      if (i && u(i))
        for (const [n, s] of Object.entries(i))
          window.matchMedia(n).matches && u(s) && ((e += n), p(t, s));
      (e === this.bp && this.state !== j.Init) ||
        ((this.bp = e),
        this.state === j.Ready &&
          (t.initialSlide = this.pages[this.page].slides[0].index),
        this.state !== j.Init && this.destroy(),
        super.setOptions(t),
        !1 === this.option("enabled")
          ? this.attachEvents()
          : setTimeout(() => {
              this.init();
            }, 0));
    }
    init() {
      (this.state = j.Init),
        this.emit("init"),
        this.attachPlugins(
          Object.assign(Object.assign({}, U.Plugins), this.userPlugins)
        ),
        this.initLayout(),
        this.initSlides(),
        this.updateMetrics(),
        this.setInitialPosition(),
        this.initPanzoom(),
        this.attachEvents(),
        (this.state = j.Ready),
        this.emit("ready");
    }
    initLayout() {
      const { container: t } = this,
        e = this.option("classes");
      P(t, this.cn("container")),
        a(t, e.isLTR, !this.isRTL),
        a(t, e.isRTL, this.isRTL),
        a(t, e.isVertical, !this.isHorizontal),
        a(t, e.isHorizontal, this.isHorizontal);
      let i = this.option("viewport") || t.querySelector(`.${e.viewport}`);
      i ||
        ((i = document.createElement("div")),
        P(i, e.viewport),
        i.append(...D(t, `.${e.slide}`)),
        t.prepend(i));
      let n = this.option("track") || t.querySelector(`.${e.track}`);
      n ||
        ((n = document.createElement("div")),
        P(n, e.track),
        n.append(...Array.from(i.childNodes))),
        n.setAttribute("aria-live", "polite"),
        i.contains(n) || i.prepend(n),
        (this.viewport = i),
        (this.track = n),
        this.emit("initLayout");
    }
    initSlides() {
      const { track: t } = this;
      if (t) {
        (this.slides = []),
          [...D(t, `.${this.cn("slide")}`)].forEach((t) => {
            if (E(t)) {
              const e = H({ el: t, isDom: !0, index: this.slides.length });
              this.slides.push(e),
                this.emit("initSlide", e, this.slides.length);
            }
          });
        for (let t of this.option("slides", [])) {
          const e = H(t);
          (e.index = this.slides.length),
            this.slides.push(e),
            this.emit("initSlide", e, this.slides.length);
        }
        this.emit("initSlides");
      }
    }
    setInitialPage() {
      let t = 0;
      const e = this.option("initialSlide");
      (t =
        "number" == typeof e
          ? this.getPageForSlide(e)
          : parseInt(this.option("initialPage", 0) + "", 10) || 0),
        (this.page = t);
    }
    setInitialPosition() {
      if (!this.track || !this.pages.length) return;
      const t = this.isHorizontal;
      let e = this.page;
      this.pages[e] || (this.page = e = 0);
      const i = this.pages[e].pos * (this.isRTL && t ? 1 : -1),
        n = t ? `${i}px` : "0",
        s = t ? "0" : `${i}px`;
      (this.track.style.transform = `translate3d(${n}, ${s}, 0) scale(1)`),
        this.option("adaptiveHeight") && this.setViewportHeight();
    }
    initPanzoom() {
      this.panzoom && (this.panzoom.destroy(), (this.panzoom = null));
      const t = this.option("Panzoom") || {};
      (this.panzoom = new k(
        this.viewport,
        p(
          {},
          {
            content: this.track,
            zoom: !1,
            panOnlyZoomed: !1,
            lockAxis: this.isHorizontal ? "x" : "y",
            infinite: this.isInfinite,
            click: !1,
            dblClick: !1,
            touch: (t) => !(this.pages.length < 2 && !t.options.infinite),
            bounds: () => this.getBounds(),
            maxVelocity: (t) =>
              Math.abs(t.target[this.axis] - t.current[this.axis]) <
              2 * this.viewportDim
                ? 100
                : 0,
          },
          t
        )
      )),
        this.panzoom.on("*", (t, e, ...i) => {
          this.emit(`Panzoom.${e}`, t, ...i);
        }),
        this.panzoom.on("decel", this.onDecel),
        this.panzoom.on("refresh", this.onRefresh),
        this.panzoom.on("beforeTransform", this.onBeforeTransform),
        this.panzoom.on("endAnimation", this.onEndAnimation);
    }
    attachEvents() {
      const t = this.container;
      t &&
        (t.addEventListener("click", this.onClick, {
          passive: !1,
          capture: !1,
        }),
        t.addEventListener("slideTo", this.onSlideTo)),
        window.addEventListener("resize", this.onResize);
    }
    createPages() {
      let t = [];
      const { contentDim: e, viewportDim: i } = this;
      let n = this.option("slidesPerPage");
      ("number" != typeof n || e <= i) && (n = 1 / 0);
      let s = 0,
        o = 0,
        a = 0;
      for (const e of this.slides)
        (!t.length || o + e.dim > i || a === n) &&
          (t.push(B()), (s = t.length - 1), (o = 0), (a = 0)),
          t[s].slides.push(e),
          (o += e.dim + e.gap),
          a++;
      return t;
    }
    processPages() {
      const t = this.pages,
        { contentDim: i, viewportDim: n } = this,
        s = this.option("center"),
        o = this.option("fill"),
        a = o && s && i > n && !this.isInfinite;
      if (
        (t.forEach((t, e) => {
          (t.index = e), (t.pos = t.slides[0].pos), (t.dim = 0);
          for (const [e, i] of t.slides.entries())
            (t.dim += i.dim), e < t.slides.length - 1 && (t.dim += i.gap);
          a && t.pos + 0.5 * t.dim < 0.5 * n
            ? (t.pos = 0)
            : a && t.pos + 0.5 * t.dim >= i - 0.5 * n
            ? (t.pos = i - n)
            : s && (t.pos += -0.5 * (n - t.dim));
        }),
        t.forEach((t, s) => {
          o &&
            !this.isInfinite &&
            i > n &&
            ((t.pos = Math.max(t.pos, 0)), (t.pos = Math.min(t.pos, i - n))),
            (t.pos = e(t.pos, 1e3)),
            (t.dim = e(t.dim, 1e3)),
            Math.abs(t.pos) <= 0.1 && (t.pos = 0);
        }),
        this.isInfinite)
      )
        return t;
      const r = [];
      let l;
      return (
        t.forEach((t) => {
          const e = Object.assign({}, t);
          l && e.pos === l.pos
            ? ((l.dim += e.dim), (l.slides = [...l.slides, ...e.slides]))
            : ((e.index = r.length), (l = e), r.push(e));
        }),
        r
      );
    }
    getPageFromIndex(t = 0) {
      const e = this.pages.length;
      let i;
      return (
        (t = parseInt((t || 0).toString()) || 0),
        (i = this.isInfinite
          ? ((t % e) + e) % e
          : Math.max(Math.min(t, e - 1), 0)),
        i
      );
    }
    getSlideMetrics(t) {
      var i, n;
      const s = this.isHorizontal ? "width" : "height";
      let o = 0,
        a = 0,
        r = t.el;
      const l = r && !r.parentNode;
      if (
        (r
          ? (o = parseFloat(r.dataset[s] || "") || 0)
          : ((r = document.createElement("div")),
            (r.style.visibility = "hidden"),
            (this.track || document.body).prepend(r)),
        P(r, this.cn("slide") + " " + t.class + " " + t.customClass),
        o)
      )
        (r.style[s] = `${o}px`),
          (r.style["width" === s ? "height" : "width"] = "");
      else {
        l && (this.track || document.body).prepend(r);
        const t = Math.max(
          1,
          (null === (i = window.visualViewport) || void 0 === i
            ? void 0
            : i.scale) || 1
        );
        o = r.getBoundingClientRect()[s] * t;
      }
      const c = getComputedStyle(r);
      return (
        "content-box" === c.boxSizing &&
          (this.isHorizontal
            ? ((o += parseFloat(c.paddingLeft) || 0),
              (o += parseFloat(c.paddingRight) || 0))
            : ((o += parseFloat(c.paddingTop) || 0),
              (o += parseFloat(c.paddingBottom) || 0))),
        (a =
          parseFloat(c[this.isHorizontal ? "marginRight" : "marginBottom"]) ||
          0),
        l
          ? null === (n = r.parentElement) || void 0 === n || n.removeChild(r)
          : t.el || r.remove(),
        { dim: e(o, 1e3), gap: e(a, 1e3) }
      );
    }
    getBounds() {
      const { isInfinite: t, isRTL: e, isHorizontal: i, pages: n } = this;
      let s = { min: 0, max: 0 };
      if (t) s = { min: -1 / 0, max: 1 / 0 };
      else if (n.length) {
        const t = n[0].pos,
          o = n[n.length - 1].pos;
        s = e && i ? { min: t, max: o } : { min: -1 * o, max: -1 * t };
      }
      return { x: i ? s : { min: 0, max: 0 }, y: i ? { min: 0, max: 0 } : s };
    }
    repositionSlides() {
      let t,
        {
          isHorizontal: i,
          isRTL: n,
          isInfinite: s,
          viewport: o,
          viewportDim: a,
          contentDim: r,
          page: l,
          pages: c,
          slides: h,
          panzoom: d,
        } = this,
        u = 0,
        p = 0,
        f = 0,
        m = 0;
      d ? (m = -1 * d.current[this.axis]) : c[l] && (m = c[l].pos || 0),
        (t = i ? (n ? "right" : "left") : "top"),
        n && i && (m *= -1);
      for (const i of h)
        i.el
          ? ("top" === t
              ? ((i.el.style.right = ""), (i.el.style.left = ""))
              : (i.el.style.top = ""),
            i.index !== u
              ? (i.el.style[t] = 0 === p ? "" : `${e(p, 1e3)}px`)
              : (i.el.style[t] = ""),
            (f += i.dim + i.gap),
            u++)
          : (p += i.dim + i.gap);
      if (s && f && o) {
        let n = getComputedStyle(o),
          s = "padding",
          l = i ? "Right" : "Bottom",
          c = parseFloat(n[s + (i ? "Left" : "Top")]);
        (m -= c), (a += c), (a += parseFloat(n[s + l]));
        for (const i of h)
          i.el &&
            (e(i.pos) < e(a) &&
              e(i.pos + i.dim + i.gap) < e(m) &&
              e(m) > e(r - a) &&
              (i.el.style[t] = `${e(p + f, 1e3)}px`),
            e(i.pos + i.gap) >= e(r - a) &&
              e(i.pos) > e(m + a) &&
              e(m) < e(a) &&
              (i.el.style[t] = `-${e(f, 1e3)}px`));
      }
      let g,
        b,
        v = [...this.inTransition];
      if ((v.length > 1 && ((g = c[v[0]]), (b = c[v[1]])), g && b)) {
        let i = 0;
        for (const n of h)
          n.el
            ? this.inTransition.has(n.index) &&
              g.slides.indexOf(n) < 0 &&
              (n.el.style[t] = `${e(i + (g.pos - b.pos), 1e3)}px`)
            : (i += n.dim + n.gap);
      }
    }
    createSlideEl(t) {
      const { track: e, slides: i } = this;
      if (!e || !t) return;
      if (t.el && t.el.parentNode) return;
      const n = t.el || document.createElement("div");
      P(n, this.cn("slide")), P(n, t.class), P(n, t.customClass);
      const s = t.html;
      s &&
        (s instanceof HTMLElement
          ? n.appendChild(s)
          : (n.innerHTML = t.html + ""));
      const o = [];
      i.forEach((t, e) => {
        t.el && o.push(e);
      });
      const a = t.index;
      let r = null;
      if (o.length) {
        r = i[o.reduce((t, e) => (Math.abs(e - a) < Math.abs(t - a) ? e : t))];
      }
      const l =
        r && r.el && r.el.parentNode
          ? r.index < t.index
            ? r.el.nextSibling
            : r.el
          : null;
      e.insertBefore(n, e.contains(l) ? l : null),
        (t.el = n),
        this.emit("createSlide", t);
    }
    removeSlideEl(t, e = !1) {
      const i = t.el;
      if (!i || !i.parentNode) return;
      if ((S(i, this.cn("isSelected")), t.isDom && !e))
        return (
          i.removeAttribute("aria-hidden"),
          i.removeAttribute("data-index"),
          S(i, this.cn("isSelected")),
          void (i.style.left = "")
        );
      this.emit("removeSlide", t);
      const n = new CustomEvent("animationend");
      i.dispatchEvent(n), t.el && (t.el.remove(), (t.el = null));
    }
    transitionTo(t = 0, e = this.option("transition")) {
      if (!e) return !1;
      const { pages: i, panzoom: n } = this;
      t = parseInt((t || 0).toString()) || 0;
      const s = this.getPageFromIndex(t);
      if (
        !n ||
        !i[s] ||
        i.length < 2 ||
        Math.abs(i[this.page].slides[0].dim - this.viewportDim) > 1
      )
        return !1;
      const o = t > this.page ? 1 : -1,
        a = this.pages[s].pos * (this.isRTL ? 1 : -1);
      if (this.page === s && Math.abs(a - n.target[this.axis]) < 1) return !1;
      this.clearTransitions();
      const r = n.isResting;
      P(this.container, this.cn("inTransition"));
      const l = this.pages[this.page].slides[0],
        c = this.pages[s].slides[0];
      this.inTransition.add(c.index), this.createSlideEl(c);
      let h = l.el,
        d = c.el;
      r || "slide" === e || ((e = "fadeFast"), (h = null));
      const u = this.isRTL ? "next" : "prev",
        p = this.isRTL ? "prev" : "next";
      return (
        h &&
          (this.inTransition.add(l.index),
          (l.transition = e),
          h.addEventListener("animationend", this.onAnimationEnd),
          h.classList.add(`f-${e}Out`, `to-${o > 0 ? p : u}`)),
        d &&
          ((c.transition = e),
          d.addEventListener("animationend", this.onAnimationEnd),
          d.classList.add(`f-${e}In`, `from-${o > 0 ? u : p}`)),
        n.panTo({
          x: this.isHorizontal ? a : 0,
          y: this.isHorizontal ? 0 : a,
          friction: 0,
        }),
        this.onChange(s),
        !0
      );
    }
    manageSlideVisiblity() {
      const t = new Set(),
        e = new Set(),
        i = this.getVisibleSlides(
          parseFloat(this.option("preload", 0) + "") || 0
        );
      for (const n of this.slides) i.has(n) ? t.add(n) : e.add(n);
      for (const e of this.inTransition) t.add(this.slides[e]);
      for (const e of t) this.createSlideEl(e), this.lazyLoadSlide(e);
      for (const i of e) t.has(i) || this.removeSlideEl(i);
      this.markSelectedSlides(), this.repositionSlides();
    }
    markSelectedSlides() {
      if (!this.pages[this.page] || !this.pages[this.page].slides) return;
      const t = "aria-hidden";
      let e = this.cn("isSelected");
      if (e)
        for (const i of this.slides)
          i.el &&
            ((i.el.dataset.index = `${i.index}`),
            this.pages[this.page].slides.includes(i)
              ? (i.el.classList.contains(e) ||
                  (P(i.el, e), this.emit("selectSlide", i)),
                i.el.removeAttribute(t))
              : (i.el.classList.contains(e) &&
                  (S(i.el, e), this.emit("unselectSlide", i)),
                i.el.setAttribute(t, "true")));
    }
    flipInfiniteTrack() {
      const t = this.panzoom;
      if (!t || !this.isInfinite) return;
      const e = "x" === this.option("axis") ? "e" : "f",
        { viewportDim: i, contentDim: n } = this;
      let s = t.current[e],
        o = t.target[e] - s,
        a = 0,
        r = 0.5 * i,
        l = n;
      this.isRTL && this.isHorizontal
        ? (s < -r && ((a = -1), (s += l)), s > l - r && ((a = 1), (s -= l)))
        : (s > r && ((a = 1), (s -= l)), s < -l + r && ((a = -1), (s += l))),
        a && ((t.current[e] = s), (t.target[e] = s + o));
    }
    lazyLoadSlide(t) {
      const e = this,
        i = t && t.el;
      if (!i) return;
      const n = new Set(),
        o = "f-fadeIn";
      i.querySelectorAll("[data-lazy-srcset]").forEach((t) => {
        t instanceof HTMLImageElement && n.add(t);
      });
      let a = Array.from(i.querySelectorAll("[data-lazy-src]"));
      i.dataset.lazySrc && a.push(i),
        a.map((t) => {
          t instanceof HTMLImageElement
            ? n.add(t)
            : E(t) &&
              ((t.style.backgroundImage = `url('${t.dataset.lazySrc || ""}')`),
              delete t.dataset.lazySrc);
        });
      const r = (t, i, n) => {
        n && (n.remove(), (n = null)),
          i.complete &&
            (i.classList.add(o),
            setTimeout(() => {
              i.classList.remove(o);
            }, 350),
            (i.style.display = "")),
          this.option("adaptiveHeight") &&
            t.el &&
            this.pages[this.page].slides.indexOf(t) > -1 &&
            (e.updateMetrics(), e.setViewportHeight()),
          this.emit("load", t);
      };
      for (const e of n) {
        let i = null;
        (e.src = e.dataset.lazySrcset || e.dataset.lazySrc || ""),
          delete e.dataset.lazySrc,
          delete e.dataset.lazySrcset,
          (e.style.display = "none"),
          e.addEventListener("error", () => {
            r(t, e, i);
          }),
          e.addEventListener("load", () => {
            r(t, e, i);
          }),
          setTimeout(() => {
            e.parentNode &&
              t.el &&
              (e.complete
                ? r(t, e, i)
                : ((i = s(x)), e.parentNode.insertBefore(i, e)));
          }, 300);
      }
    }
    onAnimationEnd(t) {
      var e;
      const i = t.target,
        n = i ? parseInt(i.dataset.index || "", 10) || 0 : -1,
        s = this.slides[n],
        o = t.animationName;
      if (!i || !s || !o) return;
      const a = !!this.inTransition.has(n) && s.transition;
      a &&
        o.substring(0, a.length + 2) === `f-${a}` &&
        this.inTransition.delete(n),
        this.inTransition.size || this.clearTransitions(),
        n === this.page &&
          (null === (e = this.panzoom) || void 0 === e
            ? void 0
            : e.isResting) &&
          this.emit("settle");
    }
    onDecel(t, e = 0, i = 0, n = 0, s = 0) {
      const { isRTL: o, isHorizontal: a, axis: r, pages: l } = this,
        c = l.length,
        h = Math.abs(Math.atan2(i, e) / (Math.PI / 180));
      let d = 0;
      if (((d = h > 45 && h < 135 ? (a ? 0 : i) : a ? e : 0), !c)) return;
      const u = this.option("dragFree");
      let p = this.page,
        f = o && a ? 1 : -1;
      const m = t.target[r] * f,
        g = t.current[r] * f;
      let { pageIndex: b } = this.getPageFromPosition(m),
        { pageIndex: v } = this.getPageFromPosition(g);
      u
        ? this.onChange(b)
        : (Math.abs(d) > 5
            ? (l[p].dim <
                document.documentElement[
                  "client" + (this.isHorizontal ? "Width" : "Height")
                ] -
                  1 && (p = v),
              (p = o && a ? (d < 0 ? p - 1 : p + 1) : d < 0 ? p + 1 : p - 1))
            : (p = 0 === n && 0 === s ? p : v),
          this.slideTo(p, {
            transition: !1,
            friction: t.option("decelFriction"),
          }));
    }
    onClick(t) {
      const e = t.target,
        i = e && E(e) ? e.dataset : null;
      let n, s;
      i &&
        (void 0 !== i.carouselPage
          ? ((s = "slideTo"), (n = i.carouselPage))
          : void 0 !== i.carouselNext
          ? (s = "slideNext")
          : void 0 !== i.carouselPrev && (s = "slidePrev")),
        s
          ? (t.preventDefault(),
            t.stopPropagation(),
            e && !e.hasAttribute("disabled") && this[s](n))
          : this.emit("click", t);
    }
    onSlideTo(t) {
      const e = t.detail || 0;
      this.slideTo(this.getPageForSlide(e), { friction: 0 });
    }
    onChange(t, e = 0) {
      const i = this.page;
      (this.prevPage = i),
        (this.page = t),
        this.option("adaptiveHeight") && this.setViewportHeight(),
        t !== i && (this.markSelectedSlides(), this.emit("change", t, i, e));
    }
    onRefresh() {
      let t = this.contentDim,
        e = this.viewportDim;
      this.updateMetrics(),
        (this.contentDim === t && this.viewportDim === e) ||
          this.slideTo(this.page, { friction: 0, transition: !1 });
    }
    onResize() {
      this.option("breakpoints") && this.processOptions();
    }
    onBeforeTransform(t) {
      this.lp !== t.current[this.axis] &&
        (this.flipInfiniteTrack(), this.manageSlideVisiblity()),
        (this.lp = t.current.e);
    }
    onEndAnimation() {
      this.inTransition.size || this.emit("settle");
    }
    reInit(t = null, e = null) {
      this.destroy(),
        (this.state = j.Init),
        (this.userOptions = t || this.userOptions),
        (this.userPlugins = e || this.userPlugins),
        this.processOptions();
    }
    slideTo(
      t = 0,
      {
        friction: e = this.option("friction"),
        transition: i = this.option("transition"),
      } = {}
    ) {
      if (this.state === j.Destroy) return;
      const { axis: n, isHorizontal: s, isRTL: o, pages: a, panzoom: r } = this,
        l = a.length,
        c = o && s ? 1 : -1;
      if (!r || !l) return;
      if (this.transitionTo(t, i)) return;
      const h = this.getPageFromIndex(t);
      let d = a[h].pos;
      if (this.isInfinite) {
        const e = this.contentDim,
          i = r.target[n] * c;
        if (2 === l) d += e * Math.floor(parseFloat(t + "") / 2);
        else {
          const t = i;
          d = [d, d - e, d + e].reduce(function (e, i) {
            return Math.abs(i - t) < Math.abs(e - t) ? i : e;
          });
        }
      }
      (d *= c),
        Math.abs(r.target[n] - d) < 0.1 ||
          (r.panTo({ x: s ? d : 0, y: s ? 0 : d, friction: e }),
          this.onChange(h));
    }
    slideToClosest(t) {
      if (this.panzoom) {
        const { pageIndex: e } = this.getPageFromPosition(
          this.panzoom.current[this.isHorizontal ? "e" : "f"]
        );
        this.slideTo(e, t);
      }
    }
    slideNext() {
      this.slideTo(this.page + 1);
    }
    slidePrev() {
      this.slideTo(this.page - 1);
    }
    clearTransitions() {
      this.inTransition.clear(), S(this.container, this.cn("inTransition"));
      const t = ["to-prev", "to-next", "from-prev", "from-next"];
      for (const e of this.slides) {
        const i = e.el;
        if (i) {
          i.removeEventListener("animationend", this.onAnimationEnd),
            i.classList.remove(...t);
          const n = e.transition;
          n && i.classList.remove(`f-${n}Out`, `f-${n}In`);
        }
      }
      this.manageSlideVisiblity();
    }
    prependSlide(t) {
      var e, i;
      let n = Array.isArray(t) ? t : [t];
      for (const t of n.reverse()) this.slides.unshift(H(t));
      for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
      const s =
        (null === (e = this.pages[this.page]) || void 0 === e
          ? void 0
          : e.pos) || 0;
      (this.page += n.length), this.updateMetrics();
      const o =
        (null === (i = this.pages[this.page]) || void 0 === i
          ? void 0
          : i.pos) || 0;
      if (this.panzoom) {
        const t = this.isRTL ? s - o : o - s;
        (this.panzoom.target.e -= t),
          (this.panzoom.current.e -= t),
          this.panzoom.requestTick();
      }
    }
    appendSlide(t) {
      let e = Array.isArray(t) ? t : [t];
      for (const t of e) {
        const e = H(t);
        (e.index = this.slides.length),
          this.slides.push(e),
          this.emit("initSlide", e, this.slides.length);
      }
      this.updateMetrics();
    }
    removeSlide(t) {
      const e = this.slides.length;
      (t = ((t % e) + e) % e),
        this.removeSlideEl(this.slides[t], !0),
        this.slides.splice(t, 1);
      for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
      this.updateMetrics(),
        this.slideTo(this.page, { friction: 0, transition: !1 });
    }
    updateMetrics() {
      const { panzoom: t, viewport: i, track: n, isHorizontal: s } = this;
      if (!n) return;
      const o = s ? "width" : "height",
        a = s ? "offsetWidth" : "offsetHeight";
      if (i) {
        let t = Math.max(i[a], e(i.getBoundingClientRect()[o], 1e3)),
          n = getComputedStyle(i),
          r = "padding",
          l = s ? "Right" : "Bottom";
        (t -= parseFloat(n[r + (s ? "Left" : "Top")]) + parseFloat(n[r + l])),
          (this.viewportDim = t);
      }
      let r,
        l = this.pages.length,
        c = 0;
      for (const [t, i] of this.slides.entries()) {
        let n = 0,
          s = 0;
        !i.el && r
          ? ((n = r.dim), (s = r.gap))
          : (({ dim: n, gap: s } = this.getSlideMetrics(i)), (r = i)),
          (n = e(n, 1e3)),
          (s = e(s, 1e3)),
          (i.dim = n),
          (i.gap = s),
          (i.pos = c),
          (c += n),
          (this.isInfinite || t < this.slides.length - 1) && (c += s);
      }
      const h = this.contentDim;
      (c = e(c, 1e3)),
        (this.contentDim = c),
        t &&
          ((t.contentRect[o] = c),
          (t.contentRect["e" === this.axis ? "fullWidth" : "fullHeight"] = c)),
        (this.pages = this.createPages()),
        (this.pages = this.processPages()),
        this.state === j.Init && this.setInitialPage(),
        (this.page = Math.max(0, Math.min(this.page, this.pages.length - 1))),
        t &&
          l === this.pages.length &&
          Math.abs(c - h) > 0.5 &&
          ((t.target[this.axis] = -1 * this.pages[this.page].pos),
          (t.current[this.axis] = -1 * this.pages[this.page].pos),
          t.stop()),
        this.manageSlideVisiblity(),
        this.emit("refresh");
    }
    getProgress(t, i = !1) {
      void 0 === t && (t = this.page);
      const n = this,
        s = n.panzoom,
        o = n.pages[t] || 0;
      if (!o || !s) return 0;
      let a = -1 * s.current.e,
        r = n.contentDim;
      var l = [
        e((a - o.pos) / (1 * o.dim), 1e3),
        e((a + r - o.pos) / (1 * o.dim), 1e3),
        e((a - r - o.pos) / (1 * o.dim), 1e3),
      ].reduce(function (t, e) {
        return Math.abs(e) < Math.abs(t) ? e : t;
      });
      return i ? l : Math.max(-1, Math.min(1, l));
    }
    setViewportHeight() {
      const { page: t, pages: e, viewport: i, isHorizontal: n } = this;
      if (!i || !e[t]) return;
      let s = 0;
      n &&
        this.track &&
        ((this.track.style.height = "auto"),
        e[t].slides.forEach((t) => {
          t.el && (s = Math.max(s, t.el.offsetHeight));
        })),
        (i.style.height = s ? `${s}px` : "");
    }
    getPageForSlide(t) {
      for (const e of this.pages)
        for (const i of e.slides) if (i.index === t) return e.index;
      return -1;
    }
    getVisibleSlides(t = 0) {
      var e;
      const i = new Set();
      let { contentDim: n, viewportDim: s, pages: o, page: a } = this;
      n =
        n +
          (null === (e = this.slides[this.slides.length - 1]) || void 0 === e
            ? void 0
            : e.gap) || 0;
      let r = 0;
      (r = this.panzoom
        ? -1 * this.panzoom.current[this.axis]
        : (o[a] && o[a].pos) || 0),
        this.isInfinite && (r -= Math.floor(r / n) * n),
        this.isRTL && this.isHorizontal && (r *= -1);
      const l = r - s * t,
        c = r + s * (t + 1),
        h = this.isInfinite ? [-1, 0, 1] : [0];
      for (const t of this.slides)
        for (const e of h) {
          const s = t.pos + e * n,
            o = t.pos + t.dim + t.gap + e * n;
          s < c && o > l && i.add(t);
        }
      return i;
    }
    getPageFromPosition(t) {
      const { viewportDim: e, contentDim: i } = this,
        n = this.pages.length,
        s = this.slides.length,
        o = this.slides[s - 1];
      let a = 0,
        r = 0,
        l = 0;
      const c = this.option("center");
      c && (t += 0.5 * e),
        this.isInfinite ||
          (t = Math.max(this.slides[0].pos, Math.min(t, o.pos)));
      const h = i + o.gap;
      (l = Math.floor(t / h) || 0), (t -= l * h);
      let d = o,
        u = this.slides.find((e) => {
          const i = t + (d && !c ? 0.5 * d.dim : 0);
          return (d = e), e.pos <= i && e.pos + e.dim + e.gap > i;
        });
      return (
        u || (u = o),
        (r = this.getPageForSlide(u.index)),
        (a = r + l * n),
        { page: a, pageIndex: r }
      );
    }
    destroy() {
      if ([j.Destroy].includes(this.state)) return;
      this.state = j.Destroy;
      const {
          container: t,
          viewport: e,
          track: i,
          slides: n,
          panzoom: s,
        } = this,
        o = this.option("classes");
      t.removeEventListener("click", this.onClick, {
        passive: !1,
        capture: !1,
      }),
        t.removeEventListener("slideTo", this.onSlideTo),
        window.removeEventListener("resize", this.onResize),
        s && (s.destroy(), (this.panzoom = null)),
        n &&
          n.forEach((t) => {
            this.removeSlideEl(t);
          }),
        this.detachPlugins(),
        e &&
          e.offsetParent &&
          i &&
          i.offsetParent &&
          e.replaceWith(...i.childNodes);
      for (const [e, i] of Object.entries(o))
        "container" !== e && i && t.classList.remove(i);
      (this.track = null),
        (this.viewport = null),
        (this.page = 0),
        (this.slides = []);
      const a = this.events.get("ready");
      (this.events = new Map()), a && this.events.set("ready", a);
    }
  }
  Object.defineProperty(U, "Panzoom", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: k,
  }),
    Object.defineProperty(U, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: F,
    }),
    Object.defineProperty(U, "Plugins", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Z,
    });
  const G = function (t) {
      const e = window.pageYOffset,
        i = window.pageYOffset + window.innerHeight;
      if (!E(t)) return 0;
      const n = t.getBoundingClientRect(),
        s = n.y + window.pageYOffset,
        o = n.y + n.height + window.pageYOffset;
      if (e > o || i < s) return 0;
      if (e < s && i > o) return 100;
      if (s < e && o > i) return 100;
      let a = n.height;
      s < e && (a -= window.pageYOffset - s), o > i && (a -= o - i);
      const r = (a / window.innerHeight) * 100;
      return Math.round(r);
    },
    K = !(
      "undefined" == typeof window ||
      !window.document ||
      !window.document.createElement
    );
  let J;
  const Q = [
      "a[href]",
      "area[href]",
      'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
      "select:not([disabled]):not([aria-hidden])",
      "textarea:not([disabled]):not([aria-hidden])",
      "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)",
      "iframe",
      "object",
      "embed",
      "video",
      "audio",
      "[contenteditable]",
      '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])',
    ].join(","),
    tt = (t) => {
      if (t && K) {
        void 0 === J &&
          document.createElement("div").focus({
            get preventScroll() {
              return (J = !0), !1;
            },
          });
        try {
          if (J) t.focus({ preventScroll: !0 });
          else {
            const e = window.pageXOffset || document.body.scrollTop,
              i = window.pageYOffset || document.body.scrollLeft;
            t.focus(),
              document.body.scrollTo({ top: e, left: i, behavior: "auto" });
          }
        } catch (t) {}
      }
    },
    et = {
      dragToClose: !0,
      hideScrollbar: !0,
      Carousel: {
        classes: {
          container: "fancybox__carousel",
          viewport: "fancybox__viewport",
          track: "fancybox__track",
          slide: "fancybox__slide",
        },
      },
      contentClick: "toggleZoom",
      contentDblClick: !1,
      backdropClick: "close",
      animated: !0,
      idle: 3500,
      showClass: "f-zoomInUp",
      hideClass: "f-fadeOut",
      commonCaption: !1,
      parentEl: null,
      startIndex: 0,
      l10n: Object.assign(Object.assign({}, y), {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        MODAL: "You can close this modal content with the ESC key",
        ERROR: "Something Went Wrong, Please Try Again Later",
        IMAGE_ERROR: "Image Not Found",
        ELEMENT_NOT_FOUND: "HTML Element Not Found",
        AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
        AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
        IFRAME_ERROR: "Error Loading Page",
        TOGGLE_ZOOM: "Toggle zoom level",
        TOGGLE_THUMBS: "Toggle thumbnails",
        TOGGLE_SLIDESHOW: "Toggle slideshow",
        TOGGLE_FULLSCREEN: "Toggle full-screen mode",
        DOWNLOAD: "Download",
      }),
      tpl: {
        closeButton:
          '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
        main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>',
      },
      groupAll: !1,
      groupAttr: "data-fancybox",
      defaultType: "image",
      defaultDisplay: "block",
      autoFocus: !0,
      trapFocus: !0,
      placeFocusBack: !0,
      closeButton: "auto",
      keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "prev",
        ArrowDown: "next",
        ArrowRight: "next",
        ArrowLeft: "prev",
      },
      Fullscreen: { autoStart: !1 },
      compact: () =>
        window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
      wheel: "zoom",
    };
  var it, nt;
  !(function (t) {
    (t[(t.Init = 0)] = "Init"),
      (t[(t.Ready = 1)] = "Ready"),
      (t[(t.Closing = 2)] = "Closing"),
      (t[(t.CustomClosing = 3)] = "CustomClosing"),
      (t[(t.Destroy = 4)] = "Destroy");
  })(it || (it = {})),
    (function (t) {
      (t[(t.Loading = 0)] = "Loading"),
        (t[(t.Opening = 1)] = "Opening"),
        (t[(t.Ready = 2)] = "Ready"),
        (t[(t.Closing = 3)] = "Closing");
    })(nt || (nt = {}));
  const st = () => {
    queueMicrotask(() => {
      (() => {
        const { slug: t, index: e } = ot.parseURL(),
          i = Wt.getInstance();
        if (i && !1 !== i.option("Hash")) {
          const n = i.carousel;
          if (t && n) {
            for (let e of n.slides)
              if (e.slug && e.slug === t) return n.slideTo(e.index);
            if (t === i.option("slug")) return n.slideTo(e - 1);
            const s = i.getSlide(),
              o = s && s.triggerEl && s.triggerEl.dataset;
            if (o && o.fancybox === t) return n.slideTo(e - 1);
          }
          (ot.hasSilentClose = !0), i.close();
        }
        ot.startFromUrl();
      })();
    });
  };
  class ot extends N {
    constructor() {
      super(...arguments),
        Object.defineProperty(this, "origHash", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "",
        }),
        Object.defineProperty(this, "timer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        });
    }
    onChange() {
      const t = this.instance,
        e = t.carousel;
      this.timer && clearTimeout(this.timer);
      const i = t.getSlide();
      if (!e || !i) return;
      const n = t.isOpeningSlide(i),
        s = new URL(document.URL).hash;
      let o,
        a = i.slug || void 0,
        r = i.triggerEl || void 0;
      (o = a || this.instance.option("slug")),
        !o && r && r.dataset && (o = r.dataset.fancybox);
      let l = "";
      o &&
        "true" !== o &&
        (l = "#" + o + (!a && e.slides.length > 1 ? "-" + (i.index + 1) : "")),
        n && (this.origHash = s !== l ? s : ""),
        l &&
          s !== l &&
          (this.timer = setTimeout(() => {
            try {
              t.state === it.Ready &&
                window.history[n ? "pushState" : "replaceState"](
                  {},
                  document.title,
                  window.location.pathname + window.location.search + l
                );
            } catch (t) {}
          }, 300));
    }
    onClose() {
      if ((this.timer && clearTimeout(this.timer), !0 !== ot.hasSilentClose))
        try {
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname +
              window.location.search +
              (this.origHash || "")
          );
        } catch (t) {}
    }
    attach() {
      const t = this.instance;
      t.on("Carousel.ready", this.onChange),
        t.on("Carousel.change", this.onChange),
        t.on("close", this.onClose);
    }
    detach() {
      const t = this.instance;
      t.off("Carousel.ready", this.onChange),
        t.off("Carousel.change", this.onChange),
        t.off("close", this.onClose);
    }
    static parseURL() {
      const t = window.location.hash.slice(1),
        e = t.split("-"),
        i = e[e.length - 1],
        n = (i && /^\+?\d+$/.test(i) && parseInt(e.pop() || "1", 10)) || 1;
      return { hash: t, slug: e.join("-"), index: n };
    }
    static startFromUrl() {
      if (
        ((ot.hasSilentClose = !1), Wt.getInstance() || !1 === Wt.defaults.Hash)
      )
        return;
      const { hash: t, slug: e, index: i } = ot.parseURL();
      if (!e) return;
      let n = document.querySelector(`[data-slug="${t}"]`);
      if (
        (n &&
          n.dispatchEvent(
            new CustomEvent("click", { bubbles: !0, cancelable: !0 })
          ),
        Wt.getInstance())
      )
        return;
      const s = document.querySelectorAll(`[data-fancybox="${e}"]`);
      s.length &&
        ((n = s[i - 1]),
        n &&
          n.dispatchEvent(
            new CustomEvent("click", { bubbles: !0, cancelable: !0 })
          ));
    }
    static destroy() {
      window.removeEventListener("hashchange", st, !1);
    }
  }
  function at() {
    window.addEventListener("hashchange", st, !1),
      setTimeout(() => {
        ot.startFromUrl();
      }, 500);
  }
  Object.defineProperty(ot, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {},
  }),
    Object.defineProperty(ot, "hasSilentClose", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1,
    }),
    K &&
      (/complete|interactive|loaded/.test(document.readyState)
        ? at()
        : document.addEventListener("DOMContentLoaded", at));
  class rt extends N {
    onCreateSlide(t, e, i) {
      const n = this.instance.optionFor(i, "src") || "";
      i.el && "image" === i.type && "string" == typeof n && this.setImage(i, n);
    }
    onRemoveSlide(t, e, i) {
      i.panzoom && i.panzoom.destroy(),
        (i.panzoom = void 0),
        (i.imageEl = void 0);
    }
    onChange(t, e, i, n) {
      for (const t of e.slides) {
        const e = t.panzoom;
        e && t.index !== i && e.reset(0.35);
      }
    }
    onClose() {
      var t;
      const e = this.instance,
        i = e.container,
        n = e.getSlide();
      if (!i || !i.parentElement || !n) return;
      const { el: s, contentEl: o, panzoom: a } = n,
        r = n.thumbElSrc;
      if (
        !s ||
        !r ||
        !o ||
        !a ||
        a.isContentLoading ||
        a.state === b.Init ||
        a.state === b.Destroy
      )
        return;
      a.updateMetrics();
      let l = this.getZoomInfo(n);
      if (!l) return;
      (this.instance.state = it.CustomClosing),
        i.classList.remove("is-zooming-in"),
        i.classList.add("is-zooming-out"),
        (o.style.backgroundImage = `url('${r}')`);
      const c = i.getBoundingClientRect();
      1 ===
        ((null === (t = window.visualViewport) || void 0 === t
          ? void 0
          : t.scale) || 1) &&
        Object.assign(i.style, {
          position: "absolute",
          top: `${window.pageYOffset}px`,
          left: `${window.pageXOffset}px`,
          bottom: "auto",
          right: "auto",
          width: `${c.width}px`,
          height: `${c.height}px`,
          overflow: "hidden",
        });
      const { x: h, y: d, scale: u, opacity: p } = l;
      if (p) {
        const t = ((t, e, i, n) => {
          const s = e - t,
            o = n - i;
          return (e) => i + (((e - t) / s) * o || 0);
        })(a.scale, u, 1, 0);
        a.on("afterTransform", () => {
          o.style.opacity = t(a.scale) + "";
        });
      }
      a.on("endAnimation", () => {
        e.destroy();
      }),
        (a.target.a = u),
        (a.target.b = 0),
        (a.target.c = 0),
        (a.target.d = u),
        a.panTo({
          x: h,
          y: d,
          scale: u,
          friction: p ? 0.2 : 0.33,
          ignoreBounds: !0,
        }),
        a.isResting && e.destroy();
    }
    setImage(t, e) {
      const i = this.instance;
      (t.src = e),
        this.process(t, e).then(
          (e) => {
            var n;
            const s = t.contentEl,
              o = t.imageEl,
              a = t.thumbElSrc;
            if (i.isClosing() || !s || !o) return;
            s.offsetHeight;
            const r = !!i.isOpeningSlide(t) && this.getZoomInfo(t);
            if (this.option("protected")) {
              null === (n = t.el) ||
                void 0 === n ||
                n.addEventListener("contextmenu", (t) => {
                  t.preventDefault();
                });
              const e = document.createElement("div");
              P(e, "fancybox-protected"), s.appendChild(e);
            }
            if (a && r) {
              const n = e.contentRect,
                o = Math.max(n.fullWidth, n.fullHeight);
              let c = null;
              !r.opacity &&
                o > 1200 &&
                ((c = document.createElement("img")),
                P(c, "fancybox-ghost"),
                (c.src = a),
                s.appendChild(c));
              const h = () => {
                c &&
                  (P(c, "f-fadeFastOut"),
                  setTimeout(() => {
                    c && (c.remove(), (c = null));
                  }, 200));
              };
              ((l = a),
              new Promise((t, e) => {
                const i = new Image();
                (i.onload = t), (i.onerror = e), (i.src = l);
              })).then(
                () => {
                  (t.state = nt.Opening),
                    this.instance.emit("reveal", t),
                    this.zoomIn(t).then(
                      () => {
                        h(), this.instance.done(t);
                      },
                      () => {
                        i.hideLoading(t);
                      }
                    ),
                    c &&
                      setTimeout(
                        () => {
                          h();
                        },
                        o > 2500 ? 800 : 200
                      );
                },
                () => {
                  i.hideLoading(t), i.revealContent(t);
                }
              );
            } else {
              const n = this.optionFor(t, "initialSize"),
                s = this.optionFor(t, "zoom"),
                o = {
                  event: i.prevMouseMoveEvent || i.options.event,
                  friction: s ? 0.12 : 0,
                };
              let a = i.optionFor(t, "showClass") || void 0,
                r = !0;
              i.isOpeningSlide(t) &&
                ("full" === n
                  ? e.zoomToFull(o)
                  : "cover" === n
                  ? e.zoomToCover(o)
                  : "max" === n
                  ? e.zoomToMax(o)
                  : (r = !1),
                e.stop("current")),
                r && a && (a = e.isDragging ? "f-fadeIn" : ""),
                i.revealContent(t, a);
            }
            var l;
          },
          () => {
            i.setError(t, "{{IMAGE_ERROR}}");
          }
        );
    }
    process(t, e) {
      return new Promise((i, n) => {
        var o;
        const a = this.instance,
          r = t.el;
        a.clearContent(t), a.showLoading(t);
        let l = this.optionFor(t, "content");
        if (("string" == typeof l && (l = s(l)), !l || !E(l))) {
          if (
            ((l = document.createElement("img")), l instanceof HTMLImageElement)
          ) {
            let i = "",
              n = t.caption;
            (i =
              "string" == typeof n && n
                ? n.replace(/<[^>]+>/gi, "").substring(0, 1e3)
                : `Image ${t.index + 1} of ${
                    null === (o = a.carousel) || void 0 === o
                      ? void 0
                      : o.pages.length
                  }`),
              (l.src = e || ""),
              (l.alt = i),
              (l.draggable = !1),
              t.srcset && l.setAttribute("srcset", t.srcset);
          }
          t.sizes && l.setAttribute("sizes", t.sizes);
        }
        l.classList.add("fancybox-image"),
          (t.imageEl = l),
          a.setContent(t, l, !1);
        t.panzoom = new k(
          r,
          p({ transformParent: !0 }, this.option("Panzoom") || {}, {
            content: l,
            width: a.optionFor(t, "width", "auto"),
            height: a.optionFor(t, "height", "auto"),
            wheel: () => {
              const t = a.option("wheel");
              return ("zoom" === t || "pan" == t) && t;
            },
            click: (e, i) => {
              var n, s;
              if (a.isCompact || a.isClosing()) return !1;
              if (
                t.index !==
                (null === (n = a.getSlide()) || void 0 === n ? void 0 : n.index)
              )
                return !1;
              if (i) {
                const t = i.composedPath()[0];
                if (
                  [
                    "A",
                    "BUTTON",
                    "TEXTAREA",
                    "OPTION",
                    "INPUT",
                    "SELECT",
                    "VIDEO",
                  ].includes(t.nodeName)
                )
                  return !1;
              }
              let o =
                !i ||
                (i.target &&
                  (null === (s = t.contentEl) || void 0 === s
                    ? void 0
                    : s.contains(i.target)));
              return a.option(o ? "contentClick" : "backdropClick") || !1;
            },
            dblClick: () =>
              a.isCompact ? "toggleZoom" : a.option("contentDblClick") || !1,
            spinner: !1,
            panOnlyZoomed: !0,
            wheelLimit: 1 / 0,
            on: {
              ready: (t) => {
                i(t);
              },
              error: () => {
                n();
              },
              destroy: () => {
                n();
              },
            },
          })
        );
      });
    }
    zoomIn(t) {
      return new Promise((e, i) => {
        const n = this.instance,
          s = n.container,
          { panzoom: o, contentEl: a, el: r } = t;
        o && o.updateMetrics();
        const l = this.getZoomInfo(t);
        if (!(l && r && a && o && s)) return void i();
        const { x: c, y: h, scale: d, opacity: u } = l,
          p = () => {
            t.state !== nt.Closing &&
              (u &&
                (a.style.opacity =
                  Math.max(Math.min(1, 1 - (1 - o.scale) / (1 - d)), 0) + ""),
              o.scale >= 1 && o.scale > o.targetScale - 0.1 && e(o));
          },
          f = (t) => {
            S(s, "is-zooming-in"),
              t.scale < 0.99 ||
                t.scale > 1.01 ||
                ((a.style.opacity = ""),
                t.off("endAnimation", f),
                t.off("touchStart", f),
                t.off("afterTransform", p),
                e(t));
          };
        o.on("endAnimation", f),
          o.on("touchStart", f),
          o.on("afterTransform", p),
          o.on(["error", "destroy"], () => {
            i();
          }),
          o.panTo({ x: c, y: h, scale: d, friction: 0, ignoreBounds: !0 }),
          o.stop("current");
        const m = {
            event:
              "mousemove" === o.panMode
                ? n.prevMouseMoveEvent || n.options.event
                : void 0,
          },
          g = this.optionFor(t, "initialSize");
        P(s, "is-zooming-in"),
          n.hideLoading(t),
          "full" === g
            ? o.zoomToFull(m)
            : "cover" === g
            ? o.zoomToCover(m)
            : "max" === g
            ? o.zoomToMax(m)
            : o.reset(0.172);
      });
    }
    getZoomInfo(t) {
      var e;
      const { el: i, imageEl: n, thumbEl: s, panzoom: o } = t;
      if (
        !i ||
        !n ||
        !s ||
        !o ||
        G(s) < 3 ||
        !this.optionFor(t, "zoom") ||
        this.instance.state === it.Destroy
      )
        return !1;
      if (
        1 !==
        ((null === (e = window.visualViewport) || void 0 === e
          ? void 0
          : e.scale) || 1)
      )
        return !1;
      let { top: a, left: r, width: l, height: c } = s.getBoundingClientRect(),
        { top: h, left: d, fitWidth: u, fitHeight: p } = o.contentRect;
      if (!(l && c && u && p)) return !1;
      const f = o.container.getBoundingClientRect();
      (d += f.left), (h += f.top);
      const m = -1 * (d + 0.5 * u - (r + 0.5 * l)),
        g = -1 * (h + 0.5 * p - (a + 0.5 * c)),
        b = l / u;
      let v = this.option("zoomOpacity") || !1;
      return (
        "auto" === v && (v = Math.abs(l / c - u / p) > 0.1),
        { x: m, y: g, scale: b, opacity: v }
      );
    }
    attach() {
      const t = this,
        e = t.instance;
      e.on("Carousel.change", t.onChange),
        e.on("Carousel.createSlide", t.onCreateSlide),
        e.on("Carousel.removeSlide", t.onRemoveSlide),
        e.on("close", t.onClose);
    }
    detach() {
      const t = this,
        e = t.instance;
      e.off("Carousel.change", t.onChange),
        e.off("Carousel.createSlide", t.onCreateSlide),
        e.off("Carousel.removeSlide", t.onRemoveSlide),
        e.off("close", t.onClose);
    }
  }
  Object.defineProperty(rt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      initialSize: "fit",
      Panzoom: { maxScale: 1 },
      protected: !1,
      zoom: !0,
      zoomOpacity: "auto",
    },
  }),
    "function" == typeof SuppressedError && SuppressedError;
  const lt = (t, e = {}) => {
      const i = new URL(t),
        n = new URLSearchParams(i.search),
        s = new URLSearchParams();
      for (const [t, i] of [...n, ...Object.entries(e)]) {
        let e = i.toString();
        "t" === t ? s.set("start", parseInt(e).toString()) : s.set(t, e);
      }
      let o = s.toString(),
        a = t.match(/#t=((.*)?\d+s)/);
      return a && (o += `#t=${a[1]}`), o;
    },
    ct = {
      ajax: null,
      autoSize: !0,
      iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto" },
      preload: !0,
      videoAutoplay: !0,
      videoRatio: 16 / 9,
      videoTpl:
        '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
      videoFormat: "",
      vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 },
      youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 },
    },
    ht = [
      "image",
      "html",
      "ajax",
      "inline",
      "clone",
      "iframe",
      "map",
      "pdf",
      "html5video",
      "youtube",
      "vimeo",
      "video",
    ];
  class dt extends N {
    onInitSlide(t, e, i) {
      this.processType(i);
    }
    onCreateSlide(t, e, i) {
      this.setContent(i);
    }
    onRemoveSlide(t, e, i) {
      i.xhr && (i.xhr.abort(), (i.xhr = null));
      const n = i.iframeEl;
      n &&
        ((n.onload = n.onerror = null),
        (n.src = "//about:blank"),
        (i.iframeEl = null));
      const s = i.contentEl,
        o = i.placeholderEl;
      if ("inline" === i.type && s && o)
        s.classList.remove("fancybox__content"),
          "none" !== s.style.display && (s.style.display = "none"),
          o.parentNode && o.parentNode.insertBefore(s, o),
          o.remove(),
          (i.contentEl = void 0),
          (i.placeholderEl = void 0);
      else for (; i.el && i.el.firstChild; ) i.el.removeChild(i.el.firstChild);
    }
    onSelectSlide(t, e, i) {
      i.state === nt.Ready && this.playVideo();
    }
    onUnselectSlide(t, e, i) {
      var n, s;
      if ("html5video" === i.type) {
        try {
          null ===
            (s =
              null === (n = i.el) || void 0 === n
                ? void 0
                : n.querySelector("video")) ||
            void 0 === s ||
            s.pause();
        } catch (t) {}
        return;
      }
      let o;
      "vimeo" === i.type
        ? (o = { method: "pause", value: "true" })
        : "youtube" === i.type &&
          (o = { event: "command", func: "pauseVideo" }),
        o &&
          i.iframeEl &&
          i.iframeEl.contentWindow &&
          i.iframeEl.contentWindow.postMessage(JSON.stringify(o), "*"),
        i.poller && clearTimeout(i.poller);
    }
    onDone(t, e) {
      t.isCurrentSlide(e) && !t.isClosing() && this.playVideo();
    }
    onRefresh(t, e) {
      e.slides.forEach((t) => {
        t.el && (this.setAspectRatio(t), this.resizeIframe(t));
      });
    }
    onMessage(t) {
      try {
        let e = JSON.parse(t.data);
        if ("https://player.vimeo.com" === t.origin) {
          if ("ready" === e.event)
            for (let e of Array.from(
              document.getElementsByClassName("fancybox__iframe")
            ))
              e instanceof HTMLIFrameElement &&
                e.contentWindow === t.source &&
                (e.dataset.ready = "true");
        } else if (
          t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) &&
          "onReady" === e.event
        ) {
          const t = document.getElementById(e.id);
          t && (t.dataset.ready = "true");
        }
      } catch (t) {}
    }
    loadAjaxContent(t) {
      const e = this.instance.optionFor(t, "src") || "";
      this.instance.showLoading(t);
      const i = this.instance,
        n = new XMLHttpRequest();
      i.showLoading(t),
        (n.onreadystatechange = function () {
          n.readyState === XMLHttpRequest.DONE &&
            i.state === it.Ready &&
            (i.hideLoading(t),
            200 === n.status
              ? i.setContent(t, n.responseText)
              : i.setError(
                  t,
                  404 === n.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"
                ));
        });
      const s = t.ajax || null;
      n.open(s ? "POST" : "GET", e + ""),
        n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        n.send(s),
        (t.xhr = n);
    }
    setInlineContent(t) {
      let e = null;
      if (E(t.src)) e = t.src;
      else if ("string" == typeof t.src) {
        const i = t.src.split("#", 2).pop();
        e = i ? document.getElementById(i) : null;
      }
      if (e) {
        if ("clone" === t.type || e.closest(".fancybox__slide")) {
          e = e.cloneNode(!0);
          const i = e.dataset.animationName;
          i && (e.classList.remove(i), delete e.dataset.animationName);
          let n = e.getAttribute("id");
          (n = n ? `${n}--clone` : `clone-${this.instance.id}-${t.index}`),
            e.setAttribute("id", n);
        } else if (e.parentNode) {
          const i = document.createElement("div");
          i.classList.add("fancybox-placeholder"),
            e.parentNode.insertBefore(i, e),
            (t.placeholderEl = i);
        }
        this.instance.setContent(t, e);
      } else this.instance.setError(t, "{{ELEMENT_NOT_FOUND}}");
    }
    setIframeContent(t) {
      const { src: e, el: i } = t;
      if (!e || "string" != typeof e || !i) return;
      i.classList.add("is-loading");
      const n = this.instance,
        s = document.createElement("iframe");
      (s.className = "fancybox__iframe"),
        s.setAttribute("id", `fancybox__iframe_${n.id}_${t.index}`);
      for (const [e, i] of Object.entries(
        this.optionFor(t, "iframeAttr") || {}
      ))
        s.setAttribute(e, i);
      (s.onerror = () => {
        n.setError(t, "{{IFRAME_ERROR}}");
      }),
        (t.iframeEl = s);
      const o = this.optionFor(t, "preload");
      if ("iframe" !== t.type || !1 === o)
        return (
          s.setAttribute("src", t.src + ""),
          n.setContent(t, s, !1),
          this.resizeIframe(t),
          void n.revealContent(t)
        );
      n.showLoading(t),
        (s.onload = () => {
          if (!s.src.length) return;
          const e = "true" !== s.dataset.ready;
          (s.dataset.ready = "true"),
            this.resizeIframe(t),
            e ? n.revealContent(t) : n.hideLoading(t);
        }),
        s.setAttribute("src", e),
        n.setContent(t, s, !1);
    }
    resizeIframe(t) {
      const e = t.iframeEl,
        i = null == e ? void 0 : e.parentElement;
      if (!e || !i) return;
      let n = t.autoSize,
        s = t.width || 0,
        o = t.height || 0;
      s && o && (n = !1);
      const a = i && i.style;
      if (!1 !== t.preload && !1 !== n && a)
        try {
          const t = window.getComputedStyle(i),
            n = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight),
            r = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom),
            l = e.contentWindow;
          if (l) {
            const t = l.document,
              e = t.getElementsByTagName("html")[0],
              i = t.body;
            (a.width = ""),
              (i.style.overflow = "hidden"),
              (s = s || e.scrollWidth + n),
              (a.width = `${s}px`),
              (i.style.overflow = ""),
              (a.flex = "0 0 auto"),
              (a.height = `${i.scrollHeight}px`),
              (o = e.scrollHeight + r);
          }
        } catch (t) {}
      if (s || o) {
        const t = { flex: "0 1 auto", width: "", height: "" };
        s && (t.width = `${s}px`),
          o && (t.height = `${o}px`),
          Object.assign(a, t);
      }
    }
    playVideo() {
      const t = this.instance.getSlide();
      if (!t) return;
      const { el: e } = t;
      if (!e || !e.offsetParent) return;
      if (!this.optionFor(t, "videoAutoplay")) return;
      if ("html5video" === t.type)
        try {
          const t = e.querySelector("video");
          if (t) {
            const e = t.play();
            void 0 !== e &&
              e
                .then(() => {})
                .catch((e) => {
                  (t.muted = !0), t.play();
                });
          }
        } catch (t) {}
      if ("youtube" !== t.type && "vimeo" !== t.type) return;
      const i = () => {
        if (t.iframeEl && t.iframeEl.contentWindow) {
          let e;
          if ("true" === t.iframeEl.dataset.ready)
            return (
              (e =
                "youtube" === t.type
                  ? { event: "command", func: "playVideo" }
                  : { method: "play", value: "true" }),
              e && t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"),
              void (t.poller = void 0)
            );
          "youtube" === t.type &&
            ((e = { event: "listening", id: t.iframeEl.getAttribute("id") }),
            t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"));
        }
        t.poller = setTimeout(i, 250);
      };
      i();
    }
    processType(t) {
      if (t.html)
        return (t.type = "html"), (t.src = t.html), void (t.html = "");
      const e = this.instance.optionFor(t, "src", "");
      if (!e || "string" != typeof e) return;
      let i = t.type,
        n = null;
      if (
        (n = e.match(
          /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i
        ))
      ) {
        const s = this.optionFor(t, "youtube"),
          { nocookie: o } = s,
          a = (function (t, e) {
            var i = {};
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) &&
                e.indexOf(n) < 0 &&
                (i[n] = t[n]);
            if (
              null != t &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var s = 0;
              for (n = Object.getOwnPropertySymbols(t); s < n.length; s++)
                e.indexOf(n[s]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(t, n[s]) &&
                  (i[n[s]] = t[n[s]]);
            }
            return i;
          })(s, ["nocookie"]),
          r = `www.youtube${o ? "-nocookie" : ""}.com`,
          l = lt(e, a),
          c = encodeURIComponent(n[2]);
        (t.videoId = c),
          (t.src = `https://${r}/embed/${c}?${l}`),
          (t.thumbSrc =
            t.thumbSrc || `https://i.ytimg.com/vi/${c}/mqdefault.jpg`),
          (i = "youtube");
      } else if (
        (n = e.match(
          /^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/
        ))
      ) {
        const s = lt(e, this.optionFor(t, "vimeo")),
          o = encodeURIComponent(n[1]),
          a = n[4] || "";
        (t.videoId = o),
          (t.src = `https://player.vimeo.com/video/${o}?${
            a ? `h=${a}${s ? "&" : ""}` : ""
          }${s}`),
          (i = "vimeo");
      }
      if (!i && t.triggerEl) {
        const e = t.triggerEl.dataset.type;
        ht.includes(e) && (i = e);
      }
      i ||
        ("string" == typeof e &&
          ("#" === e.charAt(0)
            ? (i = "inline")
            : (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
            ? ((i = "html5video"),
              (t.videoFormat =
                t.videoFormat || "video/" + ("ogv" === n[1] ? "ogg" : n[1])))
            : e.match(
                /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
              )
            ? (i = "image")
            : e.match(/\.(pdf)((\?|#).*)?$/i)
            ? (i = "pdf")
            : (n = e.match(
                /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i
              ))
            ? ((t.src = `https://maps.google.${n[1]}/?ll=${(n[2]
                ? n[2] +
                  "&z=" +
                  Math.floor(parseFloat(n[3])) +
                  (n[4] ? n[4].replace(/^\//, "&") : "")
                : n[4] + ""
              ).replace(/\?/, "&")}&output=${
                n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"
              }`),
              (i = "map"))
            : (n = e.match(
                /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i
              )) &&
              ((t.src = `https://maps.google.${n[1]}/maps?q=${n[2]
                .replace("query=", "q=")
                .replace("api=1", "")}&output=embed`),
              (i = "map")))),
        (i = i || this.instance.option("defaultType")),
        (t.type = i),
        "image" === i && (t.thumbSrc = t.thumbSrc || t.src);
    }
    setContent(t) {
      const e = this.instance.optionFor(t, "src") || "";
      if (t && t.type && e) {
        switch (t.type) {
          case "html":
            this.instance.setContent(t, e);
            break;
          case "html5video":
            const i = this.option("videoTpl");
            i &&
              this.instance.setContent(
                t,
                i
                  .replace(/\{\{src\}\}/gi, e + "")
                  .replace(
                    /\{\{format\}\}/gi,
                    this.optionFor(t, "videoFormat") || ""
                  )
                  .replace(/\{\{poster\}\}/gi, t.poster || t.thumbSrc || "")
              );
            break;
          case "inline":
          case "clone":
            this.setInlineContent(t);
            break;
          case "ajax":
            this.loadAjaxContent(t);
            break;
          case "pdf":
          case "map":
          case "youtube":
          case "vimeo":
            t.preload = !1;
          case "iframe":
            this.setIframeContent(t);
        }
        this.setAspectRatio(t);
      }
    }
    setAspectRatio(t) {
      var e;
      const i = t.width || 0,
        n = t.height || 0;
      if (i && n) return;
      const s = t.contentEl,
        o = this.optionFor(t, "videoRatio"),
        a =
          null === (e = t.el) || void 0 === e
            ? void 0
            : e.getBoundingClientRect();
      if (
        !(
          s &&
          a &&
          o &&
          1 !== o &&
          t.type &&
          ["video", "youtube", "vimeo", "html5video"].includes(t.type)
        )
      )
        return;
      const r = a.width,
        l = a.height;
      (s.style.aspectRatio = o + ""),
        (s.style.width = r / l > o ? "auto" : ""),
        (s.style.height = r / l > o ? "" : "auto");
    }
    attach() {
      const t = this,
        e = t.instance;
      e.on("Carousel.initSlide", t.onInitSlide),
        e.on("Carousel.createSlide", t.onCreateSlide),
        e.on("Carousel.removeSlide", t.onRemoveSlide),
        e.on("Carousel.selectSlide", t.onSelectSlide),
        e.on("Carousel.unselectSlide", t.onUnselectSlide),
        e.on("Carousel.Panzoom.refresh", t.onRefresh),
        e.on("done", t.onDone),
        window.addEventListener("message", t.onMessage);
    }
    detach() {
      const t = this,
        e = t.instance;
      e.off("Carousel.initSlide", t.onInitSlide),
        e.off("Carousel.createSlide", t.onCreateSlide),
        e.off("Carousel.removeSlide", t.onRemoveSlide),
        e.off("Carousel.selectSlide", t.onSelectSlide),
        e.off("Carousel.unselectSlide", t.onUnselectSlide),
        e.off("Carousel.Panzoom.refresh", t.onRefresh),
        e.off("done", t.onDone),
        window.removeEventListener("message", t.onMessage);
    }
  }
  Object.defineProperty(dt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: ct,
  });
  const ut = "play",
    pt = "pause",
    ft = "ready";
  class mt extends N {
    constructor() {
      super(...arguments),
        Object.defineProperty(this, "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ft,
        }),
        Object.defineProperty(this, "inHover", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(this, "timer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "progressBar", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        });
    }
    get isActive() {
      return this.state !== ft;
    }
    onReady(t) {
      this.option("autoStart") &&
        (t.isInfinite || t.page < t.pages.length - 1) &&
        this.start();
    }
    onChange() {
      var t;
      (null === (t = this.instance.panzoom) || void 0 === t
        ? void 0
        : t.isResting) || (this.removeProgressBar(), this.pause());
    }
    onSettle() {
      this.resume();
    }
    onVisibilityChange() {
      "visible" === document.visibilityState ? this.resume() : this.pause();
    }
    onMouseEnter() {
      (this.inHover = !0), this.pause();
    }
    onMouseLeave() {
      var t;
      (this.inHover = !1),
        (null === (t = this.instance.panzoom) || void 0 === t
          ? void 0
          : t.isResting) && this.resume();
    }
    onTimerEnd() {
      const t = this.instance;
      "play" === this.state &&
        (t.isInfinite || t.page !== t.pages.length - 1
          ? t.slideNext()
          : t.slideTo(0));
    }
    removeProgressBar() {
      this.progressBar &&
        (this.progressBar.remove(), (this.progressBar = null));
    }
    createProgressBar() {
      var t;
      if (!this.option("showProgress")) return null;
      this.removeProgressBar();
      const e = this.instance,
        i =
          (null === (t = e.pages[e.page]) || void 0 === t
            ? void 0
            : t.slides) || [];
      let n = this.option("progressParentEl");
      if ((n || (n = (1 === i.length ? i[0].el : null) || e.viewport), !n))
        return null;
      const s = document.createElement("div");
      return (
        P(s, "f-progress"),
        n.prepend(s),
        (this.progressBar = s),
        s.offsetHeight,
        s
      );
    }
    set() {
      const t = this,
        e = t.instance;
      if (e.pages.length < 2) return;
      if (t.timer) return;
      const i = t.option("timeout");
      (t.state = ut), P(e.container, "has-autoplay");
      let n = t.createProgressBar();
      n &&
        ((n.style.transitionDuration = `${i}ms`),
        (n.style.transform = "scaleX(1)")),
        (t.timer = setTimeout(() => {
          (t.timer = null), t.inHover || t.onTimerEnd();
        }, i)),
        t.emit("set");
    }
    clear() {
      const t = this;
      t.timer && (clearTimeout(t.timer), (t.timer = null)),
        t.removeProgressBar();
    }
    start() {
      const t = this;
      if ((t.set(), t.state !== ft)) {
        if (t.option("pauseOnHover")) {
          const e = t.instance.container;
          e.addEventListener("mouseenter", t.onMouseEnter, !1),
            e.addEventListener("mouseleave", t.onMouseLeave, !1);
        }
        document.addEventListener("visibilitychange", t.onVisibilityChange, !1),
          t.emit("start");
      }
    }
    stop() {
      const t = this,
        e = t.state,
        i = t.instance.container;
      t.clear(),
        (t.state = ft),
        i.removeEventListener("mouseenter", t.onMouseEnter, !1),
        i.removeEventListener("mouseleave", t.onMouseLeave, !1),
        document.removeEventListener(
          "visibilitychange",
          t.onVisibilityChange,
          !1
        ),
        S(i, "has-autoplay"),
        e !== ft && t.emit("stop");
    }
    pause() {
      const t = this;
      t.state === ut && ((t.state = pt), t.clear(), t.emit(pt));
    }
    resume() {
      const t = this,
        e = t.instance;
      if (e.isInfinite || e.page !== e.pages.length - 1)
        if (t.state !== ut) {
          if (t.state === pt && !t.inHover) {
            const e = new Event("resume", { bubbles: !0, cancelable: !0 });
            t.emit("resume", e), e.defaultPrevented || t.set();
          }
        } else t.set();
      else t.stop();
    }
    toggle() {
      this.state === ut || this.state === pt ? this.stop() : this.start();
    }
    attach() {
      const t = this,
        e = t.instance;
      e.on("ready", t.onReady),
        e.on("Panzoom.startAnimation", t.onChange),
        e.on("Panzoom.endAnimation", t.onSettle),
        e.on("Panzoom.touchMove", t.onChange);
    }
    detach() {
      const t = this,
        e = t.instance;
      e.off("ready", t.onReady),
        e.off("Panzoom.startAnimation", t.onChange),
        e.off("Panzoom.endAnimation", t.onSettle),
        e.off("Panzoom.touchMove", t.onChange),
        t.stop();
    }
  }
  Object.defineProperty(mt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      autoStart: !0,
      pauseOnHover: !0,
      progressParentEl: null,
      showProgress: !0,
      timeout: 3e3,
    },
  });
  class gt extends N {
    constructor() {
      super(...arguments),
        Object.defineProperty(this, "ref", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        });
    }
    onPrepare(t) {
      const e = t.carousel;
      if (!e) return;
      const i = t.container;
      i &&
        ((e.options.Autoplay = p(
          { autoStart: !1 },
          this.option("Autoplay") || {},
          {
            pauseOnHover: !1,
            timeout: this.option("timeout"),
            progressParentEl: () => this.option("progressParentEl") || null,
            on: {
              start: () => {
                t.emit("startSlideshow");
              },
              set: (e) => {
                var n;
                i.classList.add("has-slideshow"),
                  (null === (n = t.getSlide()) || void 0 === n
                    ? void 0
                    : n.state) !== nt.Ready && e.pause();
              },
              stop: () => {
                i.classList.remove("has-slideshow"),
                  t.isCompact || t.endIdle(),
                  t.emit("endSlideshow");
              },
              resume: (e, i) => {
                var n, s, o;
                !i ||
                  !i.cancelable ||
                  ((null === (n = t.getSlide()) || void 0 === n
                    ? void 0
                    : n.state) === nt.Ready &&
                    (null ===
                      (o =
                        null === (s = t.carousel) || void 0 === s
                          ? void 0
                          : s.panzoom) || void 0 === o
                      ? void 0
                      : o.isResting)) ||
                  i.preventDefault();
              },
            },
          }
        )),
        e.attachPlugins({ Autoplay: mt }),
        (this.ref = e.plugins.Autoplay));
    }
    onReady(t) {
      const e = t.carousel,
        i = this.ref;
      e &&
        i &&
        this.option("playOnStart") &&
        (e.isInfinite || e.page < e.pages.length - 1) &&
        i.start();
    }
    onDone(t, e) {
      const i = this.ref;
      if (!i) return;
      const n = e.panzoom;
      n &&
        n.on("startAnimation", () => {
          t.isCurrentSlide(e) && i.stop();
        }),
        t.isCurrentSlide(e) && i.resume();
    }
    onKeydown(t, e) {
      var i;
      const n = this.ref;
      n &&
        e === this.option("key") &&
        "BUTTON" !==
          (null === (i = document.activeElement) || void 0 === i
            ? void 0
            : i.nodeName) &&
        n.toggle();
    }
    attach() {
      const t = this,
        e = t.instance;
      e.on("Carousel.init", t.onPrepare),
        e.on("Carousel.ready", t.onReady),
        e.on("done", t.onDone),
        e.on("keydown", t.onKeydown);
    }
    detach() {
      const t = this,
        e = t.instance;
      e.off("Carousel.init", t.onPrepare),
        e.off("Carousel.ready", t.onReady),
        e.off("done", t.onDone),
        e.off("keydown", t.onKeydown);
    }
  }
  Object.defineProperty(gt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      key: " ",
      playOnStart: !1,
      progressParentEl: (t) => {
        var e;
        return (
          (null === (e = t.instance.container) || void 0 === e
            ? void 0
            : e.querySelector(
                ".fancybox__toolbar [data-fancybox-toggle-slideshow]"
              )) || t.instance.container
        );
      },
      timeout: 3e3,
    },
  });
  const bt = {
    classes: {
      container: "f-thumbs f-carousel__thumbs",
      viewport: "f-thumbs__viewport",
      track: "f-thumbs__track",
      slide: "f-thumbs__slide",
      isResting: "is-resting",
      isSelected: "is-selected",
      isLoading: "is-loading",
      hasThumbs: "has-thumbs",
    },
    minCount: 2,
    parentEl: null,
    thumbTpl:
      '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
    type: "modern",
  };
  var vt;
  !(function (t) {
    (t[(t.Init = 0)] = "Init"),
      (t[(t.Ready = 1)] = "Ready"),
      (t[(t.Hidden = 2)] = "Hidden"),
      (t[(t.Disabled = 3)] = "Disabled");
  })(vt || (vt = {}));
  let yt = class extends N {
    constructor() {
      super(...arguments),
        Object.defineProperty(this, "type", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "modern",
        }),
        Object.defineProperty(this, "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "track", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "carousel", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "panzoom", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "thumbWidth", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "thumbClipWidth", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "thumbHeight", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "thumbGap", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "thumbExtraGap", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "shouldCenter", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !0,
        }),
        Object.defineProperty(this, "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: vt.Init,
        });
    }
    formatThumb(t, e) {
      return this.instance.localize(e, [
        ["%i", t.index],
        ["%d", t.index + 1],
        [
          "%s",
          t.thumbSrc ||
            "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        ],
      ]);
    }
    getSlides() {
      const t = [],
        e = this.option("thumbTpl") || "";
      if (e)
        for (const i of this.instance.slides || []) {
          let n = "";
          i.type &&
            ((n = `for-${i.type}`),
            i.type &&
              ["video", "youtube", "vimeo", "html5video"].includes(i.type) &&
              (n += " for-video")),
            t.push({ html: this.formatThumb(i, e), customClass: n });
        }
      return t;
    }
    onInitSlide(t, e) {
      const i = e.el;
      i &&
        ((e.thumbSrc = i.dataset.thumbSrc || e.thumbSrc || ""),
        (e.thumbClipWidth =
          parseFloat(i.dataset.thumbClipWidth || "") || e.thumbClipWidth || 0),
        (e.thumbHeight =
          parseFloat(i.dataset.thumbHeight || "") || e.thumbHeight || 0));
    }
    onInitSlides() {
      this.state === vt.Init && this.build();
    }
    onRefreshM() {
      this.refreshModern();
    }
    onChangeM() {
      "modern" === this.type && ((this.shouldCenter = !0), this.centerModern());
    }
    onClickModern(t) {
      t.preventDefault(), t.stopPropagation();
      const e = this.instance,
        i = e.page,
        n = (t) => {
          if (t) {
            const e = t.closest("[data-carousel-index]");
            if (e) return parseInt(e.dataset.carouselIndex || "", 10) || 0;
          }
          return -1;
        },
        s = (t, e) => {
          const i = document.elementFromPoint(t, e);
          return i ? n(i) : -1;
        };
      let o = n(t.target);
      o < 0 &&
        ((o = s(t.clientX + this.thumbGap, t.clientY)), o === i && (o = i - 1)),
        o < 0 &&
          ((o = s(t.clientX - this.thumbGap, t.clientY)),
          o === i && (o = i + 1)),
        o < 0 &&
          (o = ((e) => {
            let n = s(t.clientX - e, t.clientY),
              a = s(t.clientX + e, t.clientY);
            return (
              o < 0 && n === i && (o = i + 1),
              o < 0 && a === i && (o = i - 1),
              o
            );
          })(this.thumbExtraGap)),
        o === i
          ? this.centerModern()
          : o > -1 && o < e.pages.length && e.slideTo(o);
    }
    onTransformM() {
      if ("modern" !== this.type) return;
      const { instance: t, container: e, track: i } = this,
        n = t.panzoom;
      if (!(e && i && n && this.panzoom)) return;
      a(e, this.cn("isResting"), n.state !== b.Init && n.isResting);
      const s = this.thumbGap,
        o = this.thumbExtraGap,
        r = this.thumbClipWidth;
      let l = 0,
        c = 0,
        h = 0;
      for (const e of t.slides) {
        let i = e.index,
          n = e.thumbSlideEl;
        if (!n) continue;
        a(n, this.cn("isSelected"), i === t.page),
          (c = 1 - Math.abs(t.getProgress(i))),
          n.style.setProperty("--progress", c ? c + "" : "");
        const d = 0.5 * ((e.thumbWidth || 0) - r);
        (l += s),
          (l += d),
          c && (l -= c * (d + o)),
          n.style.setProperty("--shift", l - s + ""),
          (l += d),
          c && (l -= c * (d + o)),
          (l -= s),
          0 === i && (h = o * c);
      }
      i &&
        (i.style.setProperty("--left", h + ""),
        i.style.setProperty("--width", l + h + s + o * c + "")),
        this.shouldCenter && this.centerModern();
    }
    buildClassic() {
      const { container: t, track: e } = this,
        i = this.getSlides();
      if (!t || !e || !i) return;
      const n = new this.instance.constructor(
        t,
        p(
          {
            track: e,
            infinite: !1,
            center: !0,
            fill: !0,
            dragFree: !0,
            slidesPerPage: 1,
            transition: !1,
            Dots: !1,
            Navigation: !1,
            classes: {
              container: "f-thumbs",
              viewport: "f-thumbs__viewport",
              track: "f-thumbs__track",
              slide: "f-thumbs__slide",
            },
          },
          this.option("Carousel") || {},
          { Sync: { target: this.instance }, slides: i }
        )
      );
      (this.carousel = n),
        (this.track = e),
        n.on("ready", () => {
          this.emit("ready");
        }),
        n.on("createSlide", (t, e) => {
          this.emit("createSlide", e, e.el);
        });
    }
    buildModern() {
      if ("modern" !== this.type) return;
      const { container: t, track: e, instance: i } = this,
        n = this.option("thumbTpl") || "";
      if (!t || !e || !n) return;
      t.addEventListener("keydown", () => {
        S(t, "is-using-mouse");
      }),
        P(t, "is-horizontal"),
        this.updateModern();
      for (const t of i.slides || []) {
        const i = document.createElement("div");
        if ((P(i, this.cn("slide")), t.type)) {
          let e = `for-${t.type}`;
          ["video", "youtube", "vimeo", "html5video"].includes(t.type) &&
            (e += " for-video"),
            P(i, e);
        }
        i.appendChild(s(this.formatThumb(t, n))),
          this.emit("createSlide", t, i),
          (t.thumbSlideEl = i),
          e.appendChild(i),
          this.resizeModernSlide(t);
      }
      const o = new i.constructor.Panzoom(t, {
        content: e,
        lockAxis: "x",
        zoom: !1,
        panOnlyZoomed: !1,
        bounds: () => {
          let t = 0,
            e = 0,
            n = i.slides[0],
            s = i.slides[i.slides.length - 1],
            o = i.slides[i.page];
          return (
            n &&
              s &&
              o &&
              ((e = -1 * this.getModernThumbPos(0)),
              0 !== i.page && (e += 0.5 * (n.thumbWidth || 0)),
              (t = -1 * this.getModernThumbPos(i.slides.length - 1)),
              i.page !== i.slides.length - 1 &&
                (t +=
                  (s.thumbWidth || 0) -
                  (o.thumbWidth || 0) -
                  0.5 * (s.thumbWidth || 0))),
            { x: { min: t, max: e }, y: { min: 0, max: 0 } }
          );
        },
      });
      o.on("touchStart", (t, e) => {
        (this.shouldCenter = !1), P(this.container, "is-using-mouse");
      }),
        o.on("click", (t, e) => this.onClickModern(e)),
        o.on("ready", () => {
          this.centerModern(), this.emit("ready");
        }),
        o.on(["afterTransform", "refresh"], (t) => {
          this.lazyLoadModern();
        }),
        (this.panzoom = o),
        this.refreshModern();
    }
    updateModern() {
      if ("modern" !== this.type) return;
      const { container: t } = this;
      t &&
        ((this.thumbGap =
          parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-gap")) ||
          0),
        (this.thumbExtraGap =
          parseFloat(
            getComputedStyle(t).getPropertyValue("--f-thumb-extra-gap")
          ) || 0),
        (this.thumbWidth =
          parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-width")) ||
          40),
        (this.thumbClipWidth =
          parseFloat(
            getComputedStyle(t).getPropertyValue("--f-thumb-clip-width")
          ) || 40),
        (this.thumbHeight =
          parseFloat(
            getComputedStyle(t).getPropertyValue("--f-thumb-height")
          ) || 40));
    }
    refreshModern() {
      var t;
      if ("modern" === this.type) {
        this.updateModern();
        for (const t of this.instance.slides || []) this.resizeModernSlide(t);
        this.onTransformM(),
          null === (t = this.panzoom) || void 0 === t || t.updateMetrics(!0),
          this.centerModern(0);
      }
    }
    centerModern(t) {
      const i = this.instance,
        { container: n, panzoom: s } = this;
      if (!n || !s || s.state === b.Init) return;
      const o = i.page;
      let a = this.getModernThumbPos(o),
        r = a;
      for (let t = i.page - 3; t < i.page + 3; t++) {
        if (t < 0 || t > i.pages.length - 1 || t === i.page) continue;
        const e = 1 - Math.abs(i.getProgress(t));
        e > 0 && e < 1 && (r += e * (this.getModernThumbPos(t) - a));
      }
      let l = 100;
      void 0 === t &&
        ((t = 0.2),
        i.inTransition.size > 0 && (t = 0.12),
        Math.abs(-1 * s.current.e - r) > s.containerRect.width &&
          ((t = 0.5), (l = 0))),
        (s.options.maxVelocity = l),
        s.applyChange({
          panX: e(-1 * r - s.target.e, 1e3),
          friction: null === i.prevPage ? 0 : t,
        });
    }
    lazyLoadModern() {
      const { instance: t, panzoom: e } = this;
      if (!e) return;
      const i = -1 * e.current.e || 0;
      let n = this.getModernThumbPos(t.page);
      if (e.state !== b.Init || 0 === n)
        for (const n of t.slides || []) {
          const t = n.thumbSlideEl;
          if (!t) continue;
          const o = t.querySelector("img[data-lazy-src]"),
            a = n.index,
            r = this.getModernThumbPos(a),
            l = i - 0.5 * e.containerRect.innerWidth,
            c = l + e.containerRect.innerWidth;
          if (!o || r < l || r > c) continue;
          let h = o.dataset.lazySrc;
          if (!h || !h.length) continue;
          if ((delete o.dataset.lazySrc, (o.src = h), o.complete)) continue;
          P(t, this.cn("isLoading"));
          const d = s(x);
          t.appendChild(d),
            o.addEventListener(
              "load",
              () => {
                t.offsetParent &&
                  (t.classList.remove(this.cn("isLoading")), d.remove());
              },
              !1
            );
        }
    }
    resizeModernSlide(t) {
      if ("modern" !== this.type) return;
      if (!t.thumbSlideEl) return;
      const e =
        t.thumbClipWidth && t.thumbHeight
          ? Math.round(this.thumbHeight * (t.thumbClipWidth / t.thumbHeight))
          : this.thumbWidth;
      t.thumbWidth = e;
    }
    getModernThumbPos(t) {
      const i = this.instance.slides[t],
        n = this.panzoom;
      if (!n || !n.contentRect.fitWidth) return 0;
      let s = n.containerRect.innerWidth,
        o = n.contentRect.width;
      2 === this.instance.slides.length &&
        ((t -= 1), (o = 2 * this.thumbClipWidth));
      let a =
        t * (this.thumbClipWidth + this.thumbGap) +
        this.thumbExtraGap +
        0.5 * (i.thumbWidth || 0);
      return (a -= o > s ? 0.5 * s : 0.5 * o), e(a || 0, 1);
    }
    build() {
      const t = this.instance,
        e = t.container,
        i = this.option("minCount") || 0;
      if (i) {
        let e = 0;
        for (const i of t.slides || []) i.thumbSrc && e++;
        if (e < i) return this.cleanup(), void (this.state = vt.Disabled);
      }
      const n = this.option("type");
      if (["modern", "classic"].indexOf(n) < 0)
        return void (this.state = vt.Disabled);
      this.type = n;
      const s = document.createElement("div");
      P(s, this.cn("container")), P(s, `is-${n}`);
      const o = this.option("parentEl");
      o ? o.appendChild(s) : e.after(s),
        (this.container = s),
        P(e, this.cn("hasThumbs"));
      const a = document.createElement("div");
      P(a, this.cn("track")),
        s.appendChild(a),
        (this.track = a),
        "classic" === n ? this.buildClassic() : this.buildModern(),
        (this.state = vt.Ready);
    }
    cleanup() {
      this.carousel && this.carousel.destroy(),
        (this.carousel = null),
        this.panzoom && this.panzoom.destroy(),
        (this.panzoom = null),
        this.container && this.container.remove(),
        (this.container = null),
        (this.track = null),
        (this.state = vt.Init),
        S(this.instance.container, this.cn("hasThumbs"));
    }
    attach() {
      const t = this,
        e = t.instance;
      e.on("initSlide", t.onInitSlide),
        e.state === j.Init
          ? e.on("initSlides", t.onInitSlides)
          : t.onInitSlides(),
        e.on("Panzoom.afterTransform", t.onTransformM),
        e.on("Panzoom.refresh", t.onRefreshM),
        e.on("change", t.onChangeM);
    }
    detach() {
      const t = this,
        e = t.instance;
      e.off("initSlide", t.onInitSlide),
        e.off("initSlides", t.onInitSlides),
        e.off("Panzoom.afterTransform", t.onTransformM),
        e.off("Panzoom.refresh", t.onRefreshM),
        e.off("change", t.onChangeM),
        t.cleanup();
    }
  };
  Object.defineProperty(yt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: bt,
  });
  const wt = Object.assign(Object.assign({}, bt), {
      key: "t",
      showOnStart: !0,
      parentEl: null,
    }),
    xt = "is-masked",
    Et = "aria-hidden";
  class St extends N {
    constructor() {
      super(...arguments),
        Object.defineProperty(this, "ref", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "hidden", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        });
    }
    get isEnabled() {
      const t = this.ref;
      return t && t.state !== vt.Disabled;
    }
    get isHidden() {
      return this.hidden;
    }
    onInit() {
      var t;
      const e = this,
        i = e.instance,
        n = i.carousel;
      if (e.ref || !n) return;
      const s = e.option("parentEl") || i.footer || i.container;
      if (!s) return;
      const o = p({}, e.options, {
        parentEl: s,
        classes: { container: "f-thumbs fancybox__thumbs" },
        Carousel: { Sync: { friction: i.option("Carousel.friction") || 0 } },
        on: {
          ready: (t) => {
            const i = t.container;
            i &&
              this.hidden &&
              (e.refresh(),
              (i.style.transition = "none"),
              e.hide(),
              i.offsetHeight,
              queueMicrotask(() => {
                (i.style.transition = ""), e.show();
              }));
          },
        },
      });
      (o.Carousel = o.Carousel || {}),
        (o.Carousel.on = p(
          (null === (t = e.options.Carousel) || void 0 === t ? void 0 : t.on) ||
            {},
          {
            click: (t, e) => {
              e.stopPropagation();
            },
          }
        )),
        (n.options.Thumbs = o),
        n.attachPlugins({ Thumbs: yt }),
        (e.ref = n.plugins.Thumbs),
        e.option("showOnStart") || ((e.ref.state = vt.Hidden), (e.hidden = !0));
    }
    onResize() {
      var t;
      const e = null === (t = this.ref) || void 0 === t ? void 0 : t.container;
      e && (e.style.maxHeight = "");
    }
    onKeydown(t, e) {
      const i = this.option("key");
      i && i === e && this.toggle();
    }
    toggle() {
      const t = this.ref;
      t &&
        t.state !== vt.Disabled &&
        (t.state !== vt.Hidden
          ? this.hidden
            ? this.show()
            : this.hide()
          : t.build());
    }
    show() {
      const t = this.ref,
        e = t && t.state !== vt.Disabled && t.container;
      e &&
        (this.refresh(),
        e.offsetHeight,
        e.removeAttribute(Et),
        e.classList.remove(xt),
        (this.hidden = !1));
    }
    hide() {
      const t = this.ref,
        e = t && t.container;
      e &&
        (this.refresh(),
        e.offsetHeight,
        e.classList.add(xt),
        e.setAttribute(Et, "true")),
        (this.hidden = !0);
    }
    refresh() {
      const t = this.ref;
      if (!t || t.state === vt.Disabled) return;
      const e = t.container,
        i = (null == e ? void 0 : e.firstChild) || null;
      e &&
        i &&
        i.childNodes.length &&
        (e.style.maxHeight = `${i.getBoundingClientRect().height}px`);
    }
    attach() {
      const t = this,
        e = t.instance;
      e.state === it.Init ? e.on("Carousel.init", t.onInit) : t.onInit(),
        e.on("resize", t.onResize),
        e.on("keydown", t.onKeydown);
    }
    detach() {
      var t;
      const e = this,
        i = e.instance;
      i.off("Carousel.init", e.onInit),
        i.off("resize", e.onResize),
        i.off("keydown", e.onKeydown),
        null === (t = i.carousel) ||
          void 0 === t ||
          t.detachPlugins(["Thumbs"]),
        (e.ref = null);
    }
  }
  Object.defineProperty(St, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: wt,
  });
  const Pt = {
    panLeft: {
      icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
      change: { panX: -100 },
    },
    panRight: {
      icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
      change: { panX: 100 },
    },
    panUp: {
      icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
      change: { panY: -100 },
    },
    panDown: {
      icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
      change: { panY: 100 },
    },
    zoomIn: {
      icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
      action: "zoomIn",
    },
    zoomOut: {
      icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
      action: "zoomOut",
    },
    toggle1to1: {
      icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
      action: "toggleZoom",
    },
    toggleZoom: {
      icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
      action: "toggleZoom",
    },
    iterateZoom: {
      icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
      action: "iterateZoom",
    },
    rotateCCW: {
      icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
      action: "rotateCCW",
    },
    rotateCW: {
      icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
      action: "rotateCW",
    },
    flipX: {
      icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
      action: "flipX",
    },
    flipY: {
      icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
      action: "flipY",
    },
    fitX: {
      icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
      action: "fitX",
    },
    fitY: {
      icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
      action: "fitY",
    },
    reset: {
      icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
      action: "reset",
    },
    toggleFS: {
      icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
      action: "toggleFS",
    },
  };
  var Ct;
  !(function (t) {
    (t[(t.Init = 0)] = "Init"),
      (t[(t.Ready = 1)] = "Ready"),
      (t[(t.Disabled = 2)] = "Disabled");
  })(Ct || (Ct = {}));
  const Mt = {
      absolute: "auto",
      display: {
        left: ["infobar"],
        middle: [],
        right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"],
      },
      enabled: "auto",
      items: {
        infobar: {
          tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>',
        },
        download: {
          tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>',
        },
        prev: {
          tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>',
        },
        next: {
          tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>',
        },
        slideshow: {
          tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>',
        },
        fullscreen: {
          tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>',
        },
        thumbs: {
          tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>',
        },
        close: {
          tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>',
        },
      },
      parentEl: null,
    },
    Tt = {
      tabindex: "-1",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
    };
  class Ot extends N {
    constructor() {
      super(...arguments),
        Object.defineProperty(this, "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ct.Init,
        }),
        Object.defineProperty(this, "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        });
    }
    onReady(t) {
      var e;
      if (!t.carousel) return;
      let i = this.option("display"),
        n = this.option("absolute"),
        s = this.option("enabled");
      if ("auto" === s) {
        const t = this.instance.carousel;
        let e = 0;
        if (t)
          for (const i of t.slides) (i.panzoom || "image" === i.type) && e++;
        e || (s = !1);
      }
      s || (i = void 0);
      let o = 0;
      const a = { left: [], middle: [], right: [] };
      if (i)
        for (const t of ["left", "middle", "right"])
          for (const n of i[t]) {
            const i = this.createEl(n);
            i && (null === (e = a[t]) || void 0 === e || e.push(i), o++);
          }
      let r = null;
      if ((o && (r = this.createContainer()), r)) {
        for (const [t, e] of Object.entries(a)) {
          const i = document.createElement("div");
          P(i, "fancybox__toolbar__column is-" + t);
          for (const t of e) i.appendChild(t);
          "auto" !== n || "middle" !== t || e.length || (n = !0),
            r.appendChild(i);
        }
        !0 === n && P(r, "is-absolute"),
          (this.state = Ct.Ready),
          this.onRefresh();
      } else this.state = Ct.Disabled;
    }
    onClick(t) {
      var e, i;
      const n = this.instance,
        s = n.getSlide(),
        o = null == s ? void 0 : s.panzoom,
        a = t.target,
        r = a && E(a) ? a.dataset : null;
      if (!r) return;
      if (void 0 !== r.fancyboxToggleThumbs)
        return (
          t.preventDefault(),
          t.stopPropagation(),
          void (null === (e = n.plugins.Thumbs) || void 0 === e || e.toggle())
        );
      if (void 0 !== r.fancyboxToggleFullscreen)
        return (
          t.preventDefault(),
          t.stopPropagation(),
          void this.instance.toggleFullscreen()
        );
      if (void 0 !== r.fancyboxToggleSlideshow) {
        t.preventDefault(), t.stopPropagation();
        const e =
          null === (i = n.carousel) || void 0 === i
            ? void 0
            : i.plugins.Autoplay;
        let s = e.isActive;
        return (
          o && "mousemove" === o.panMode && !s && o.reset(),
          void (s ? e.stop() : e.start())
        );
      }
      const l = r.panzoomAction,
        c = r.panzoomChange;
      if (((c || l) && (t.preventDefault(), t.stopPropagation()), c)) {
        let t = {};
        try {
          t = JSON.parse(c);
        } catch (t) {}
        o && o.applyChange(t);
      } else l && o && o[l] && o[l]();
    }
    onChange() {
      this.onRefresh();
    }
    onRefresh() {
      if (this.instance.isClosing()) return;
      const t = this.container;
      if (!t) return;
      const e = this.instance.getSlide();
      if (!e || e.state !== nt.Ready) return;
      const i = e && !e.error && e.panzoom;
      for (const e of t.querySelectorAll("[data-panzoom-action]"))
        i
          ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
          : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
      let n = i && i.canZoomIn(),
        s = i && i.canZoomOut();
      for (const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]'))
        n
          ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
          : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
      for (const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]'))
        s
          ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
          : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
      for (const e of t.querySelectorAll(
        '[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]'
      )) {
        s || n
          ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
          : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
        const t = e.querySelector("g");
        t && (t.style.display = n ? "" : "none");
      }
    }
    onDone(t, e) {
      var i;
      null === (i = e.panzoom) ||
        void 0 === i ||
        i.on("afterTransform", () => {
          this.instance.isCurrentSlide(e) && this.onRefresh();
        }),
        this.instance.isCurrentSlide(e) && this.onRefresh();
    }
    createContainer() {
      const t = this.instance.container;
      if (!t) return null;
      const e = this.option("parentEl") || t,
        i = document.createElement("div");
      return (
        P(i, "fancybox__toolbar"),
        e.prepend(i),
        i.addEventListener("click", this.onClick, { passive: !1, capture: !0 }),
        t && P(t, "has-toolbar"),
        (this.container = i),
        i
      );
    }
    createEl(t) {
      const e = this.instance,
        i = e.carousel;
      if (!i) return null;
      if ("toggleFS" === t) return null;
      if ("fullscreen" === t && !e.fsAPI) return null;
      let n = null;
      const o = i.slides.length || 0;
      let a = 0,
        r = 0;
      for (const t of i.slides)
        (t.panzoom || "image" === t.type) && a++,
          ("image" === t.type || t.downloadSrc) && r++;
      if (o < 2 && ["infobar", "prev", "next"].includes(t)) return n;
      if (void 0 !== Pt[t] && !a) return null;
      if ("download" === t && !r) return null;
      if ("thumbs" === t) {
        const t = e.plugins.Thumbs;
        if (!t || !t.isEnabled) return null;
      }
      if ("slideshow" === t) {
        if (!i.plugins.Autoplay || o < 2) return null;
      }
      if (void 0 !== Pt[t]) {
        const e = Pt[t];
        (n = document.createElement("button")),
          n.setAttribute(
            "title",
            this.instance.localize(`{{${t.toUpperCase()}}}`)
          ),
          P(n, "f-button"),
          e.action && (n.dataset.panzoomAction = e.action),
          e.change && (n.dataset.panzoomChange = JSON.stringify(e.change)),
          n.appendChild(s(this.instance.localize(e.icon)));
      } else {
        const e = (this.option("items") || [])[t];
        e &&
          ((n = s(this.instance.localize(e.tpl))),
          "function" == typeof e.click &&
            n.addEventListener("click", (t) => {
              t.preventDefault(),
                t.stopPropagation(),
                "function" == typeof e.click && e.click.call(this, this, t);
            }));
      }
      const l = null == n ? void 0 : n.querySelector("svg");
      if (l)
        for (const [t, e] of Object.entries(Tt))
          l.getAttribute(t) || l.setAttribute(t, String(e));
      return n;
    }
    removeContainer() {
      const t = this.container;
      t && t.remove(), (this.container = null), (this.state = Ct.Disabled);
      const e = this.instance.container;
      e && S(e, "has-toolbar");
    }
    attach() {
      const t = this,
        e = t.instance;
      e.on("Carousel.initSlides", t.onReady),
        e.on("done", t.onDone),
        e.on("reveal", t.onChange),
        e.on("Carousel.change", t.onChange),
        t.onReady(t.instance);
    }
    detach() {
      const t = this,
        e = t.instance;
      e.off("Carousel.initSlides", t.onReady),
        e.off("done", t.onDone),
        e.off("reveal", t.onChange),
        e.off("Carousel.change", t.onChange),
        t.removeContainer();
    }
  }
  Object.defineProperty(Ot, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: Mt,
  });
  const At = {
      Hash: ot,
      Html: dt,
      Images: rt,
      Slideshow: gt,
      Thumbs: St,
      Toolbar: Ot,
    },
    zt = "with-fancybox",
    Lt = "hide-scrollbar",
    Rt = "--fancybox-scrollbar-compensate",
    kt = "--fancybox-body-margin",
    It = "is-animated",
    Dt = "is-compact",
    Ft = "is-loading",
    jt = function () {
      var t = window.getSelection();
      return t && "Range" === t.type;
    };
  let Ht = null,
    Bt = null;
  const Nt = new Map();
  let _t = 0;
  class Wt extends g {
    get isIdle() {
      return this.idle;
    }
    get isCompact() {
      return this.option("compact");
    }
    constructor(t = [], e = {}, i = {}) {
      super(e),
        Object.defineProperty(this, "userSlides", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: [],
        }),
        Object.defineProperty(this, "userPlugins", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {},
        }),
        Object.defineProperty(this, "idle", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(this, "idleTimer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "clickTimer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "pwt", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "ignoreFocusChange", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(this, "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: it.Init,
        }),
        Object.defineProperty(this, "id", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "footer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "caption", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "carousel", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "lastFocus", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "prevMouseMoveEvent", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "fsAPI", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.fsAPI = (() => {
          let t,
            e = "",
            i = "",
            n = "";
          return (
            document.fullscreenEnabled
              ? ((e = "requestFullscreen"),
                (i = "exitFullscreen"),
                (n = "fullscreenElement"))
              : document.webkitFullscreenEnabled &&
                ((e = "webkitRequestFullscreen"),
                (i = "webkitExitFullscreen"),
                (n = "webkitFullscreenElement")),
            e &&
              (t = {
                request: function (t) {
                  return "webkitRequestFullscreen" === e
                    ? t[e](Element.ALLOW_KEYBOARD_INPUT)
                    : t[e]();
                },
                exit: function () {
                  return document[n] && document[i]();
                },
                isFullscreen: function () {
                  return document[n];
                },
              }),
            t
          );
        })()),
        (this.id = e.id || ++_t),
        Nt.set(this.id, this),
        (this.userSlides = t),
        (this.userPlugins = i),
        queueMicrotask(() => {
          this.init();
        });
    }
    init() {
      if (this.state === it.Destroy) return;
      (this.state = it.Init),
        this.attachPlugins(
          Object.assign(Object.assign({}, Wt.Plugins), this.userPlugins)
        ),
        this.emit("init"),
        !0 === this.option("hideScrollbar") &&
          (() => {
            if (!K) return;
            const t = document.body;
            if (t.classList.contains(Lt)) return;
            let e =
              window.innerWidth -
              document.documentElement.getBoundingClientRect().width;
            e < 0 && (e = 0);
            const i = t.currentStyle || window.getComputedStyle(t),
              n = parseFloat(i.marginRight);
            document.documentElement.style.setProperty(Rt, `${e}px`),
              n && t.style.setProperty(kt, `${n}px`),
              t.classList.add(Lt);
          })(),
        this.initLayout(),
        this.scale();
      const t = () => {
          this.initCarousel(this.userSlides),
            (this.state = it.Ready),
            this.attachEvents(),
            this.emit("ready"),
            setTimeout(() => {
              this.container &&
                this.container.setAttribute("aria-hidden", "false");
            }, 16);
        },
        e = this.fsAPI;
      this.option("Fullscreen.autoStart") && e && !e.isFullscreen()
        ? e
            .request(this.container)
            .then(() => t())
            .catch(() => t())
        : t();
    }
    initLayout() {
      var t, e;
      const i = this.option("parentEl") || document.body,
        n = s(this.localize(this.option("tpl.main") || ""));
      n &&
        (n.setAttribute("id", `fancybox-${this.id}`),
        n.setAttribute("aria-label", this.localize("{{MODAL}}")),
        n.classList.toggle(Dt, this.isCompact),
        P(n, this.option("mainClass") || ""),
        (this.container = n),
        (this.footer = n.querySelector(".fancybox__footer")),
        i.appendChild(n),
        P(document.documentElement, zt),
        (Ht && Bt) ||
          ((Ht = document.createElement("span")),
          P(Ht, "fancybox-focus-guard"),
          Ht.setAttribute("tabindex", "0"),
          Ht.setAttribute("aria-hidden", "true"),
          Ht.setAttribute("aria-label", "Focus guard"),
          (Bt = Ht.cloneNode()),
          null === (t = n.parentElement) ||
            void 0 === t ||
            t.insertBefore(Ht, n),
          null === (e = n.parentElement) || void 0 === e || e.append(Bt)),
        this.option("animated") &&
          (P(n, It),
          setTimeout(() => {
            this.isClosing() || S(n, It);
          }, 350)),
        this.emit("initLayout"));
    }
    initCarousel(t) {
      const e = this.container;
      if (!e) return;
      const n = e.querySelector(".fancybox__carousel");
      if (!n) return;
      const s = (this.carousel = new U(
        n,
        p(
          {},
          {
            slides: t,
            transition: "fade",
            Panzoom: {
              lockAxis: this.option("dragToClose") ? "xy" : "x",
              infinite: !!this.option("dragToClose") && "y",
            },
            Dots: !1,
            Navigation: {
              classes: {
                container: "fancybox__nav",
                button: "f-button",
                isNext: "is-next",
                isPrev: "is-prev",
              },
            },
            initialPage: this.option("startIndex"),
            l10n: this.option("l10n"),
          },
          this.option("Carousel") || {}
        )
      ));
      s.on("*", (t, e, ...i) => {
        this.emit(`Carousel.${e}`, t, ...i);
      }),
        s.on(["ready", "change"], () => {
          var t;
          const e = this.getSlide();
          e && (null === (t = e.panzoom) || void 0 === t || t.updateControls()),
            this.manageCaption(e);
        }),
        this.on("Carousel.removeSlide", (t, e, i) => {
          i.contentEl && (i.contentEl.remove(), (i.contentEl = void 0));
          const n = i.el;
          n &&
            (S(n, "has-error"),
            S(n, "has-unknown"),
            S(n, `has-${i.type || "unknown"}`)),
            i.closeBtnEl && i.closeBtnEl.remove(),
            (i.closeBtnEl = void 0),
            i.captionEl && i.captionEl.remove(),
            (i.captionEl = void 0),
            i.spinnerEl && i.spinnerEl.remove(),
            (i.spinnerEl = void 0),
            (i.state = void 0);
        }),
        s.on("Panzoom.touchStart", () => {
          var t, e;
          this.isCompact || this.endIdle(),
            (null === (t = document.activeElement) || void 0 === t
              ? void 0
              : t.closest(".f-thumbs")) &&
              (null === (e = this.container) || void 0 === e || e.focus());
        }),
        s.on("settle", () => {
          this.idleTimer ||
            this.isCompact ||
            !this.option("idle") ||
            this.setIdle(),
            this.option("autoFocus") && !this.isClosing && this.checkFocus();
        }),
        this.option("dragToClose") &&
          (s.on("Panzoom.afterTransform", (t, e) => {
            const n = this.getSlide();
            if (n && i(n.el)) return;
            const s = this.container;
            if (s) {
              const t = Math.abs(e.current.f),
                i =
                  t < 1
                    ? ""
                    : Math.max(
                        0.5,
                        Math.min(1, 1 - (t / e.contentRect.fitHeight) * 1.5)
                      );
              s.style.setProperty("--fancybox-ts", i ? "0s" : ""),
                s.style.setProperty("--fancybox-opacity", i + "");
            }
          }),
          s.on("Panzoom.touchEnd", (t, e, n) => {
            var s;
            const o = this.getSlide();
            if (o && i(o.el)) return;
            if (
              e.isMobile &&
              document.activeElement &&
              -1 !==
                ["TEXTAREA", "INPUT"].indexOf(
                  null === (s = document.activeElement) || void 0 === s
                    ? void 0
                    : s.nodeName
                )
            )
              return;
            const a = Math.abs(e.dragOffset.y);
            "y" === e.lockedAxis &&
              (a >= 200 || (a >= 50 && e.dragOffset.time < 300)) &&
              (n && n.cancelable && n.preventDefault(),
              this.close(n, "f-throwOut" + (e.current.f < 0 ? "Up" : "Down")));
          })),
        s.on("change", (t) => {
          var e;
          let i =
            null === (e = this.getSlide()) || void 0 === e
              ? void 0
              : e.triggerEl;
          if (i) {
            const e = new CustomEvent("slideTo", {
              bubbles: !0,
              cancelable: !0,
              detail: t.page,
            });
            i.dispatchEvent(e);
          }
        }),
        s.on(["refresh", "change"], (t) => {
          const e = this.container;
          if (!e) return;
          for (const i of e.querySelectorAll("[data-fancybox-current-index]"))
            i.innerHTML = t.page + 1;
          for (const i of e.querySelectorAll("[data-fancybox-count]"))
            i.innerHTML = t.pages.length;
          if (!t.isInfinite) {
            for (const i of e.querySelectorAll("[data-fancybox-next]"))
              t.page < t.pages.length - 1
                ? (i.removeAttribute("disabled"), i.removeAttribute("tabindex"))
                : (i.setAttribute("disabled", ""),
                  i.setAttribute("tabindex", "-1"));
            for (const i of e.querySelectorAll("[data-fancybox-prev]"))
              t.page > 0
                ? (i.removeAttribute("disabled"), i.removeAttribute("tabindex"))
                : (i.setAttribute("disabled", ""),
                  i.setAttribute("tabindex", "-1"));
          }
          const i = this.getSlide();
          if (!i) return;
          let n = i.downloadSrc || "";
          n ||
            "image" !== i.type ||
            i.error ||
            "string" != typeof i.src ||
            (n = i.src);
          const s = "disabled",
            o = "tabindex",
            a = "download",
            r = "href";
          for (const t of e.querySelectorAll("[data-fancybox-download]")) {
            const e = i.downloadFilename;
            n
              ? (t.removeAttribute(s),
                t.removeAttribute(o),
                t.setAttribute(r, n),
                t.setAttribute(a, e || n),
                t.setAttribute("target", "_blank"))
              : (t.setAttribute(s, ""),
                t.setAttribute(o, "-1"),
                t.removeAttribute(r),
                t.removeAttribute(a));
          }
        }),
        this.emit("initCarousel");
    }
    attachEvents() {
      const t = this,
        e = t.container;
      if (!e) return;
      e.addEventListener("click", t.onClick, { passive: !1, capture: !1 }),
        e.addEventListener("wheel", t.onWheel, { passive: !1, capture: !1 }),
        document.addEventListener("keydown", t.onKeydown, {
          passive: !1,
          capture: !0,
        }),
        document.addEventListener("visibilitychange", t.onVisibilityChange, !1),
        document.addEventListener("mousemove", t.onMousemove),
        t.option("trapFocus") &&
          document.addEventListener("focus", t.onFocus, !0),
        window.addEventListener("resize", t.onResize);
      const i = window.visualViewport;
      i &&
        (i.addEventListener("scroll", t.onResize),
        i.addEventListener("resize", t.onResize));
    }
    detachEvents() {
      const t = this,
        e = t.container;
      if (!e) return;
      document.removeEventListener("keydown", t.onKeydown, {
        passive: !1,
        capture: !0,
      }),
        e.removeEventListener("wheel", t.onWheel, { passive: !1, capture: !1 }),
        e.removeEventListener("click", t.onClick, { passive: !1, capture: !1 }),
        document.removeEventListener("mousemove", t.onMousemove),
        window.removeEventListener("resize", t.onResize);
      const i = window.visualViewport;
      i &&
        (i.removeEventListener("resize", t.onResize),
        i.removeEventListener("scroll", t.onResize)),
        document.removeEventListener(
          "visibilitychange",
          t.onVisibilityChange,
          !1
        ),
        document.removeEventListener("focus", t.onFocus, !0);
    }
    scale() {
      const t = this.container;
      if (!t) return;
      const e = window.visualViewport,
        i = Math.max(1, (null == e ? void 0 : e.scale) || 1);
      let n = "",
        s = "",
        o = "";
      if (e && i > 1) {
        let t = `${e.offsetLeft}px`,
          a = `${e.offsetTop}px`;
        (n = e.width * i + "px"),
          (s = e.height * i + "px"),
          (o = `translate3d(${t}, ${a}, 0) scale(${1 / i})`);
      }
      (t.style.transform = o), (t.style.width = n), (t.style.height = s);
    }
    onClick(t) {
      var e, i;
      const { container: n, isCompact: s } = this;
      if (!n || this.isClosing()) return;
      !s && this.option("idle") && this.resetIdle();
      const o = document.activeElement;
      if (jt() && o && n.contains(o)) return;
      const a = t.composedPath()[0];
      if (
        a ===
        (null === (e = this.carousel) || void 0 === e ? void 0 : e.container)
      )
        return;
      if (a.closest(".f-spinner") || a.closest("[data-fancybox-close]"))
        return t.preventDefault(), void this.close(t);
      if (a.closest("[data-fancybox-prev]"))
        return t.preventDefault(), void this.prev();
      if (a.closest("[data-fancybox-next]"))
        return t.preventDefault(), void this.next();
      if (
        s &&
        "image" ===
          (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.type)
      )
        return void (this.clickTimer
          ? (clearTimeout(this.clickTimer), (this.clickTimer = null))
          : (this.clickTimer = setTimeout(() => {
              this.toggleIdle(), (this.clickTimer = null);
            }, 350)));
      if ((this.emit("click", t), t.defaultPrevented)) return;
      let r = !1;
      if (a.closest(".fancybox__content")) {
        if (o) {
          if (o.closest("[contenteditable]")) return;
          a.matches(Q) || o.blur();
        }
        if (jt()) return;
        r = this.option("contentClick");
      } else a.closest(".fancybox__carousel") && !a.matches(Q) && (r = this.option("backdropClick"));
      "close" === r
        ? (t.preventDefault(), this.close(t))
        : "next" === r
        ? (t.preventDefault(), this.next())
        : "prev" === r && (t.preventDefault(), this.prev());
    }
    onWheel(t) {
      var e;
      let i = this.option("wheel", t);
      (null === (e = t.target) || void 0 === e
        ? void 0
        : e.closest(".fancybox__thumbs")) && (i = "slide");
      const n = "slide" === i,
        s = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(function (
          t,
          e
        ) {
          return Math.abs(e) > Math.abs(t) ? e : t;
        }),
        o = Math.max(-1, Math.min(1, s)),
        a = Date.now();
      this.pwt && a - this.pwt < 300
        ? n && t.preventDefault()
        : ((this.pwt = a),
          this.emit("wheel", t),
          t.defaultPrevented ||
            ("close" === i
              ? (t.preventDefault(), this.close(t))
              : "slide" === i &&
                (t.preventDefault(), this[o > 0 ? "prev" : "next"]())));
    }
    onKeydown(t) {
      if (!this.isTopmost()) return;
      this.isCompact ||
        !this.option("idle") ||
        this.isClosing() ||
        this.resetIdle();
      const e = t.key,
        i = this.option("keyboard");
      if (!i || t.ctrlKey || t.altKey || t.shiftKey) return;
      const n = t.composedPath()[0],
        s = document.activeElement && document.activeElement.classList,
        o =
          (s && s.contains("f-button")) ||
          n.dataset.carouselPage ||
          n.dataset.carouselIndex;
      if ("Escape" !== e && !o && E(n)) {
        if (
          n.isContentEditable ||
          -1 !==
            ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(
              n.nodeName
            )
        )
          return;
      }
      this.emit("keydown", e, t);
      const a = i[e];
      "function" == typeof this[a] && (t.preventDefault(), this[a]());
    }
    onResize() {
      const t = Dt,
        e = this.container;
      if (!e) return;
      const i = this.isCompact;
      e.classList.toggle(t, i),
        this.manageCaption(this.getSlide()),
        this.isCompact ? this.clearIdle() : this.endIdle(),
        this.scale(),
        this.emit("resize");
    }
    onFocus(t) {
      this.isTopmost() && this.checkFocus(t);
    }
    onMousemove(t) {
      (this.prevMouseMoveEvent = t),
        !this.isCompact && this.option("idle") && this.resetIdle();
    }
    onVisibilityChange() {
      "visible" === document.visibilityState
        ? this.checkFocus()
        : this.endIdle();
    }
    manageCloseBtn(t) {
      const e = this.optionFor(t, "closeButton") || !1;
      if ("auto" === e) {
        const t = this.plugins.Toolbar;
        if (t && t.state === Ct.Ready) return;
      }
      if (!e) return;
      if (!t.contentEl || t.closeBtnEl) return;
      const i = this.option("tpl.closeButton");
      if (i) {
        const e = s(this.localize(i));
        (t.closeBtnEl = t.contentEl.appendChild(e)),
          t.el && P(t.el, "has-close-btn");
      }
    }
    manageCaption(t = void 0) {
      var e, i;
      const n = "fancybox__caption",
        s = "has-caption",
        o = this.container;
      if (!o) return;
      const a = this.isCompact || this.option("commonCaption"),
        r = !a;
      if (
        (this.caption && this.stop(this.caption),
        r && this.caption && (this.caption.remove(), (this.caption = null)),
        a && !this.caption)
      )
        for (const t of (null === (e = this.carousel) || void 0 === e
          ? void 0
          : e.slides) || [])
          t.captionEl &&
            (t.captionEl.remove(),
            (t.captionEl = void 0),
            S(t.el, s),
            null === (i = t.el) ||
              void 0 === i ||
              i.removeAttribute("aria-labelledby"));
      if ((t || (t = this.getSlide()), !t || (a && !this.isCurrentSlide(t))))
        return;
      const l = t.el;
      let c = this.optionFor(t, "caption", "");
      if (!c)
        return void (
          a &&
          this.caption &&
          this.animate(this.caption, "f-fadeOut", () => {
            this.caption && (this.caption.innerHTML = "");
          })
        );
      let h = null;
      if (r) {
        if (((h = t.captionEl || null), l && !h)) {
          const e = n + `_${this.id}_${t.index}`;
          (h = document.createElement("div")),
            P(h, n),
            h.setAttribute("id", e),
            (t.captionEl = l.appendChild(h)),
            P(l, s),
            l.setAttribute("aria-labelledby", e);
        }
      } else {
        if (((h = this.caption), h || (h = o.querySelector("." + n)), !h)) {
          (h = document.createElement("div")),
            (h.dataset.fancyboxCaption = ""),
            P(h, n);
          (this.footer || o).prepend(h);
        }
        P(o, s), (this.caption = h);
      }
      h &&
        ((h.innerHTML = ""),
        "string" == typeof c
          ? (h.innerHTML = c)
          : c instanceof HTMLElement && h.appendChild(c));
    }
    checkFocus(t) {
      var e;
      const i = document.activeElement || null;
      (i &&
        (null === (e = this.container) || void 0 === e
          ? void 0
          : e.contains(i))) ||
        this.focus(t);
    }
    focus(t) {
      var e;
      if (this.ignoreFocusChange) return;
      const i = document.activeElement || null,
        n = (null == t ? void 0 : t.target) || null,
        s = this.container,
        o = this.getSlide();
      if (
        !s ||
        !(null === (e = this.carousel) || void 0 === e ? void 0 : e.viewport)
      )
        return;
      if (!t && i && s.contains(i)) return;
      const a = o && o.state === nt.Ready ? o.el : null;
      if (!a || a.contains(i) || s === i) return;
      t && t.cancelable && t.preventDefault(), (this.ignoreFocusChange = !0);
      const r = Array.from(s.querySelectorAll(Q));
      let l = [],
        c = null;
      for (let t of r) {
        const e = !t.offsetParent || t.closest('[aria-hidden="true"]'),
          i = a && a.contains(t),
          n = !this.carousel.viewport.contains(t);
        if (t === s || ((i || n) && !e)) {
          l.push(t);
          const e = t.dataset.origTabindex;
          void 0 !== e && e && (t.tabIndex = parseFloat(e)),
            t.removeAttribute("data-orig-tabindex"),
            (!t.hasAttribute("autoFocus") && c) || (c = t);
        } else {
          const e =
            void 0 === t.dataset.origTabindex
              ? t.getAttribute("tabindex") || ""
              : t.dataset.origTabindex;
          e && (t.dataset.origTabindex = e), (t.tabIndex = -1);
        }
      }
      let h = null;
      t
        ? (!n || l.indexOf(n) < 0) &&
          ((h = c || s),
          l.length &&
            (i === Bt
              ? (h = l[0])
              : (this.lastFocus !== s && i !== Ht) || (h = l[l.length - 1])))
        : (h = o && "image" === o.type ? s : c || s),
        h && tt(h),
        (this.lastFocus = document.activeElement),
        (this.ignoreFocusChange = !1);
    }
    next() {
      const t = this.carousel;
      t && t.pages.length > 1 && t.slideNext();
    }
    prev() {
      const t = this.carousel;
      t && t.pages.length > 1 && t.slidePrev();
    }
    jumpTo(...t) {
      this.carousel && this.carousel.slideTo(...t);
    }
    isTopmost() {
      var t;
      return (
        (null === (t = Wt.getInstance()) || void 0 === t ? void 0 : t.id) ==
        this.id
      );
    }
    animate(t = null, e = "", i) {
      if (!t || !e) return void (i && i());
      this.stop(t);
      const n = (s) => {
        s.target === t &&
          t.dataset.animationName &&
          (t.removeEventListener("animationend", n),
          delete t.dataset.animationName,
          i && i(),
          S(t, e));
      };
      (t.dataset.animationName = e),
        t.addEventListener("animationend", n),
        P(t, e);
    }
    stop(t) {
      t &&
        t.dispatchEvent(
          new CustomEvent("animationend", {
            bubbles: !1,
            cancelable: !0,
            currentTarget: t,
          })
        );
    }
    setContent(t, e = "", i = !0) {
      if (this.isClosing()) return;
      const n = t.el;
      if (!n) return;
      let o = null;
      if (
        (E(e)
          ? (o = e)
          : ((o = s(e + "")),
            E(o) ||
              ((o = document.createElement("div")), (o.innerHTML = e + ""))),
        ["img", "picture", "iframe", "video", "audio"].includes(
          o.nodeName.toLowerCase()
        ))
      ) {
        const t = document.createElement("div");
        t.appendChild(o), (o = t);
      }
      E(o) && t.filter && !t.error && (o = o.querySelector(t.filter)),
        o && E(o)
          ? (P(o, "fancybox__content"),
            t.id && o.setAttribute("id", t.id),
            ("none" !== o.style.display &&
              "none" !== getComputedStyle(o).getPropertyValue("display")) ||
              (o.style.display =
                t.display || this.option("defaultDisplay") || "flex"),
            n.classList.add(`has-${t.error ? "error" : t.type || "unknown"}`),
            n.prepend(o),
            (t.contentEl = o),
            i && this.revealContent(t),
            this.manageCloseBtn(t),
            this.manageCaption(t))
          : this.setError(t, "{{ELEMENT_NOT_FOUND}}");
    }
    revealContent(t, e) {
      const i = t.el,
        n = t.contentEl;
      i &&
        n &&
        (this.emit("reveal", t),
        this.hideLoading(t),
        (t.state = nt.Opening),
        (e = this.isOpeningSlide(t)
          ? void 0 === e
            ? this.optionFor(t, "showClass")
            : e
          : "f-fadeIn")
          ? this.animate(n, e, () => {
              this.done(t);
            })
          : this.done(t));
    }
    done(t) {
      this.isClosing() ||
        ((t.state = nt.Ready),
        this.emit("done", t),
        P(t.el, "is-done"),
        this.isCurrentSlide(t) &&
          this.option("autoFocus") &&
          queueMicrotask(() => {
            this.option("autoFocus") &&
              (this.option("autoFocus") ? this.focus() : this.checkFocus());
          }),
        this.isOpeningSlide(t) &&
          !this.isCompact &&
          this.option("idle") &&
          this.setIdle());
    }
    isCurrentSlide(t) {
      const e = this.getSlide();
      return !(!t || !e) && e.index === t.index;
    }
    isOpeningSlide(t) {
      var e, i;
      return (
        null ===
          (null === (e = this.carousel) || void 0 === e
            ? void 0
            : e.prevPage) &&
        t.index ===
          (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.index)
      );
    }
    showLoading(t) {
      t.state = nt.Loading;
      const e = t.el;
      if (!e) return;
      P(e, Ft),
        this.emit("loading", t),
        t.spinnerEl ||
          setTimeout(() => {
            if (!this.isClosing() && !t.spinnerEl && t.state === nt.Loading) {
              let i = s(x);
              (t.spinnerEl = i), e.prepend(i), this.animate(i, "f-fadeIn");
            }
          }, 250);
    }
    hideLoading(t) {
      const e = t.el;
      if (!e) return;
      const i = t.spinnerEl;
      this.isClosing()
        ? null == i || i.remove()
        : (S(e, Ft),
          i &&
            this.animate(i, "f-fadeOut", () => {
              i.remove();
            }),
          t.state === nt.Loading &&
            (this.emit("loaded", t), (t.state = nt.Ready)));
    }
    setError(t, e) {
      if (this.isClosing()) return;
      const i = new Event("error", { bubbles: !0, cancelable: !0 });
      if ((this.emit("error", i, t), i.defaultPrevented)) return;
      (t.error = e), this.hideLoading(t), this.clearContent(t);
      const n = document.createElement("div");
      n.classList.add("fancybox-error"),
        (n.innerHTML = this.localize(e || "<p>{{ERROR}}</p>")),
        this.setContent(t, n);
    }
    clearContent(t) {
      var e;
      null === (e = this.carousel) || void 0 === e || e.emit("removeSlide", t);
    }
    getSlide() {
      var t;
      const e = this.carousel;
      return (
        (null ===
          (t = null == e ? void 0 : e.pages[null == e ? void 0 : e.page]) ||
        void 0 === t
          ? void 0
          : t.slides[0]) || void 0
      );
    }
    close(t, e) {
      if (this.isClosing()) return;
      const i = new Event("shouldClose", { bubbles: !0, cancelable: !0 });
      if ((this.emit("shouldClose", i, t), i.defaultPrevented)) return;
      t && t.cancelable && (t.preventDefault(), t.stopPropagation());
      const n = this.fsAPI,
        s = () => {
          this.proceedClose(t, e);
        };
      n && n.isFullscreen() ? Promise.resolve(n.exit()).then(() => s()) : s();
    }
    clearIdle() {
      this.idleTimer && clearTimeout(this.idleTimer), (this.idleTimer = null);
    }
    setIdle(t = !1) {
      const e = () => {
        this.clearIdle(),
          (this.idle = !0),
          P(this.container, "is-idle"),
          this.emit("setIdle");
      };
      if ((this.clearIdle(), !this.isClosing()))
        if (t) e();
        else {
          const t = this.option("idle");
          t && (this.idleTimer = setTimeout(e, t));
        }
    }
    endIdle() {
      this.clearIdle(),
        this.idle &&
          !this.isClosing() &&
          ((this.idle = !1),
          S(this.container, "is-idle"),
          this.emit("endIdle"));
    }
    resetIdle() {
      this.endIdle(), this.setIdle();
    }
    toggleIdle() {
      this.idle ? this.endIdle() : this.setIdle(!0);
    }
    toggleFullscreen() {
      const t = this.fsAPI;
      t &&
        (t.isFullscreen()
          ? t.exit()
          : this.container && t.request(this.container));
    }
    isClosing() {
      return [it.Closing, it.CustomClosing, it.Destroy].includes(this.state);
    }
    proceedClose(t, e) {
      var i, n;
      (this.state = it.Closing), this.clearIdle(), this.detachEvents();
      const s = this.container,
        o = this.carousel,
        a = this.getSlide(),
        r =
          a && this.option("placeFocusBack")
            ? a.triggerEl || this.option("triggerEl")
            : null;
      if (
        (r && (G(r) ? tt(r) : r.focus()),
        s &&
          (P(s, "is-closing"),
          s.setAttribute("aria-hidden", "true"),
          this.option("animated") && P(s, It),
          (s.style.pointerEvents = "none")),
        o)
      ) {
        o.clearTransitions(),
          null === (i = o.panzoom) || void 0 === i || i.destroy(),
          null === (n = o.plugins.Navigation) || void 0 === n || n.detach();
        for (const t of o.slides) {
          (t.state = nt.Closing), this.hideLoading(t);
          const e = t.contentEl;
          e && this.stop(e);
          const i = null == t ? void 0 : t.panzoom;
          i && (i.stop(), i.detachEvents(), i.detachObserver()),
            this.isCurrentSlide(t) || o.emit("removeSlide", t);
        }
      }
      this.emit("close", t),
        this.state !== it.CustomClosing
          ? (void 0 === e && a && (e = this.optionFor(a, "hideClass")),
            e && a
              ? (this.animate(a.contentEl, e, () => {
                  o && o.emit("removeSlide", a);
                }),
                setTimeout(() => {
                  this.destroy();
                }, 500))
              : this.destroy())
          : setTimeout(() => {
              this.destroy();
            }, 500);
    }
    destroy() {
      var t;
      if (this.state === it.Destroy) return;
      (this.state = it.Destroy),
        null === (t = this.carousel) || void 0 === t || t.destroy();
      const e = this.container;
      e && e.remove(), Nt.delete(this.id);
      const i = Wt.getInstance();
      i
        ? i.focus()
        : (Ht && (Ht.remove(), (Ht = null)),
          Bt && (Bt.remove(), (Bt = null)),
          S(document.documentElement, zt),
          (() => {
            if (!K) return;
            const t = document,
              e = t.body;
            e.classList.remove(Lt),
              e.style.setProperty(kt, ""),
              t.documentElement.style.setProperty(Rt, "");
          })(),
          this.emit("destroy"));
    }
    static bind(t, e, i) {
      if (!K) return;
      let n,
        s = "",
        o = {};
      if (
        (void 0 === t
          ? (n = document.body)
          : "string" == typeof t
          ? ((n = document.body),
            (s = t),
            "object" == typeof e && (o = e || {}))
          : ((n = t),
            "string" == typeof e && (s = e),
            "object" == typeof i && (o = i || {})),
        !n || !E(n))
      )
        return;
      s = s || "[data-fancybox]";
      const a = Wt.openers.get(n) || new Map();
      a.set(s, o),
        Wt.openers.set(n, a),
        1 === a.size && n.addEventListener("click", Wt.fromEvent);
    }
    static unbind(t, e) {
      let i,
        n = "";
      if (
        ("string" == typeof t
          ? ((i = document.body), (n = t))
          : ((i = t), "string" == typeof e && (n = e)),
        !i)
      )
        return;
      const s = Wt.openers.get(i);
      s && n && s.delete(n),
        (n && s) ||
          (Wt.openers.delete(i), i.removeEventListener("click", Wt.fromEvent));
    }
    static destroy() {
      let t;
      for (; (t = Wt.getInstance()); ) t.destroy();
      for (const t of Wt.openers.keys())
        t.removeEventListener("click", Wt.fromEvent);
      Wt.openers = new Map();
    }
    static fromEvent(t) {
      if (t.defaultPrevented) return;
      if (t.button && 0 !== t.button) return;
      if (t.ctrlKey || t.metaKey || t.shiftKey) return;
      let e = t.composedPath()[0];
      const i = e.closest("[data-fancybox-trigger]");
      if (i) {
        const t = i.dataset.fancyboxTrigger || "",
          n = document.querySelectorAll(`[data-fancybox="${t}"]`),
          s = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;
        e = n[s] || e;
      }
      if (!(e && e instanceof Element)) return;
      let n, s, o, a;
      if (
        ([...Wt.openers].reverse().find(
          ([t, i]) =>
            !(
              !t.contains(e) ||
              ![...i].reverse().find(([i, r]) => {
                let l = e.closest(i);
                return !!l && ((n = t), (s = i), (o = l), (a = r), !0);
              })
            )
        ),
        !n || !s || !o)
      )
        return;
      (a = a || {}), t.preventDefault(), (e = o);
      let r = [],
        l = p({}, et, a);
      (l.event = t), (l.triggerEl = e), (l.delegate = i);
      const c = l.groupAll,
        h = l.groupAttr,
        d = h && e ? e.getAttribute(`${h}`) : "";
      if (
        ((!e || d || c) && (r = [].slice.call(n.querySelectorAll(s))),
        e &&
          !c &&
          (r = d ? r.filter((t) => t.getAttribute(`${h}`) === d) : [e]),
        !r.length)
      )
        return;
      const u = Wt.getInstance();
      return u && u.options.triggerEl && r.indexOf(u.options.triggerEl) > -1
        ? void 0
        : (e && (l.startIndex = r.indexOf(e)), Wt.fromNodes(r, l));
    }
    static fromSelector(t, e) {
      let i = null,
        n = "";
      if (
        ("string" == typeof t
          ? ((i = document.body), (n = t))
          : t instanceof HTMLElement &&
            "string" == typeof e &&
            ((i = t), (n = e)),
        !i || !n)
      )
        return !1;
      const s = Wt.openers.get(i);
      if (!s) return !1;
      const o = s.get(n);
      return !!o && Wt.fromNodes(Array.from(i.querySelectorAll(n)), o);
    }
    static fromNodes(t, e) {
      e = p({}, et, e || {});
      const i = [];
      for (const n of t) {
        const t = n.dataset || {},
          s =
            t.src ||
            n.getAttribute("href") ||
            n.getAttribute("currentSrc") ||
            n.getAttribute("src") ||
            void 0;
        let o;
        const a = e.delegate;
        let r;
        a &&
          i.length === e.startIndex &&
          (o =
            a instanceof HTMLImageElement
              ? a
              : a.querySelector("img:not([aria-hidden])")),
          o ||
            (o =
              n instanceof HTMLImageElement
                ? n
                : n.querySelector("img:not([aria-hidden])")),
          o &&
            ((r = o.currentSrc || o.src || void 0),
            !r &&
              o.dataset &&
              (r = o.dataset.lazySrc || o.dataset.src || void 0));
        const l = {
          src: s,
          triggerEl: n,
          thumbEl: o,
          thumbElSrc: r,
          thumbSrc: r,
        };
        for (const e in t) l[e] = t[e] + "";
        i.push(l);
      }
      return new Wt(i, e);
    }
    static getInstance(t) {
      if (t) return Nt.get(t);
      return (
        Array.from(Nt.values())
          .reverse()
          .find((t) => !t.isClosing() && t) || null
      );
    }
    static getSlide() {
      var t;
      return (
        (null === (t = Wt.getInstance()) || void 0 === t
          ? void 0
          : t.getSlide()) || null
      );
    }
    static show(t = [], e = {}) {
      return new Wt(t, e);
    }
    static next() {
      const t = Wt.getInstance();
      t && t.next();
    }
    static prev() {
      const t = Wt.getInstance();
      t && t.prev();
    }
    static close(t = !0, ...e) {
      if (t) for (const t of Nt.values()) t.close(...e);
      else {
        const t = Wt.getInstance();
        t && t.close(...e);
      }
    }
  }
  Object.defineProperty(Wt, "version", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: "5.0.22",
  }),
    Object.defineProperty(Wt, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: et,
    }),
    Object.defineProperty(Wt, "Plugins", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: At,
    }),
    Object.defineProperty(Wt, "openers", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: new Map(),
    }),
    (t.Carousel = U),
    (t.Fancybox = Wt),
    (t.Panzoom = k);
});
(function ($, window, document, undefined) {
  "use strict";
  var pluginName = "Modal";
  var $Doc = $(document),
    $Window = $(window);
  function UIModalPlugin(element, options) {
    this.element = element;
    this.options = $.extend({}, $.fn.Modal.defaults, options);
    this.initialize();
  }
  function isMobile() {
    return (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
      navigator.userAgent.match(/Opera Mini/i) ||
      navigator.userAgent.match(/IEMobile/i)
    );
  }
  $.extend(UIModalPlugin.prototype, {
    defaultSelectors: {
      wrapper: "#modal-wrapper",
      overlay: "#modal-overlay",
      header: ".modal-header",
      close: ".modal-close",
      footer: ".modal-footer",
    },
    eventType: isMobile() ? "tap" : "click",
    temporaryButtons: [],
    initialize: function () {
      this.buildCache();
      this.buildPlugin();
      this.bindEvents();
    },
    buildCache: function () {
      this.$element = $(this.element);
      this.$window = $Window;
      this.$document = $Doc;
      this.$activeElement = $(document.activeElement);
      this.$body = $("body");
      this.$modal = $("<div />").addClass("modal").attr("id", "modal");
      if (this.options.externalClass) {
        this.$modal.addClass(this.options.externalClass);
      }
      this.$modalWrapper = $("<div />").attr("id", "modal-wrapper");
      this.$overlay = $("<div />").attr("id", "modal-overlay");
      this.$tempOverlay = $("<div />").attr("id", "modal-tempoverlay");
    },
    buildPlugin: function () {
      var _this = this;
      this.destroy();
      this.appendNode();
      this.display();
      setTimeout(function () {
        _this.show();
      }, 50);
      setTimeout(function () {
        _this.$modalWrapper.scrollTop(0);
      }, 60);
    },
    bindEvents: function () {
      var $this = this;
      if (this.options.overlayClick) {
        this.$tempOverlay.on(
          this.eventType,
          function (event) {
            this.destroy();
            event.preventDefault();
          }.bind(this)
        );
      }
    },
    destroy: function () {
      this.temporaryButtons = [];
      this.$element.removeData("plugin_" + pluginName);
      $(
        this.defaultSelectors.wrapper + ", " + this.defaultSelectors.overlay
      ).remove();
      this.$body.removeClass("enable-modal");
      this.$body.removeClass("enable-modal-overflow");
      this.$body.removeClass("enable-modal-cursor");
    },
    isOverflow: function () {
      var viewportHeight = window.innerHeight;
      var modalHeight =
        this.$modal.outerHeight() + 200 + this.$modal.position().top;
      return modalHeight >= viewportHeight;
    },
    appendNode: function () {
      this.$modal.html(
        this.template(this.options.template, {
          _TITLE_: this.options.title || "",
          _CONTENTS_: this.options.content || "",
        })
      );
      this.$modalWrapper.append(this.$modal);
      this.$modalWrapper.append(this.$tempOverlay);
      this.$body.append(this.$modalWrapper);
      this.$modalWrapper.after(this.$overlay);
      this.addCloseButton();
      this.addButton();
      this.changeElements();
    },
    display: function () {
      this.$modal.css("width", isMobile() ? "80%" : this.options.width);
      this.$overlay.css({ width: "100%", height: "100%" });
      if (ream.$("html").attr("dir") == "Rtl") {
        this.$modal.css({
          marginRight: (this.$window.width() - this.$modal.outerWidth()) / 2,
        });
      } else {
        this.$modal.css({
          marginLeft: (this.$window.width() - this.$modal.outerWidth()) / 2,
        });
      }
    },
    show: function () {
      var self = this;
      this.$modal.show().addClass("fadeIn");
      this.$overlay.show();
      if (this.$activeElement.is("input, select, checkbox, radio")) {
        this.$activeElement.trigger("blur");
      }
      this.$body.addClass("enable-modal");
      if (this.isOverflow()) {
        if (this.options.overlayClick) {
          this.$body.addClass("enable-modal-cursor");
        }
        this.$body.addClass("enable-modal-overflow");
      } else {
        this.$modal.css({
          "margin-top":
            this.$window.height() / 2 - this.$modal.outerHeight() / 2,
        });
      }
      if (
        typeof this.options.className != "undefined" &&
        this.options.className != ""
      ) {
        this.$modalWrapper.addClass(this.options.className);
      }
    },
    changeElements: function () {
      if (this.options.buttons.length === 0) {
        this.$modal.find(this.defaultSelectors.footer).remove();
      }
      if (!this.options.title) {
        this.$modal.find(this.defaultSelectors.header).remove();
        this.$modal.find(this.defaultSelectors.close).addClass("outside");
      }
    },
    addButton: function () {
      if (this.options.hasOwnProperty("buttons")) {
        var secondaryButton = new Array();
        $.each(
          this.options.buttons,
          $.proxy(function (key, value) {
            if (key == "primary") {
              this.addButtonBindEvents(
                value.title,
                value.classes ? value.classes : "button button-primary",
                value.callback,
                value.loading ? value.loading : !1
              );
            } else {
              secondaryButton.push(value);
            }
          }, this)
        );
        if (this.options.cancelButton) {
          if (secondaryButton.length === 0) {
            secondaryButton = [{}];
          }
          $.each(
            secondaryButton,
            $.proxy(function (key, value) {
              this.addButtonBindEvents(
                value.title ? value.title : "Vazgeç",
                value.classes ? value.classes : "button button-default",
                value.callback,
                value.loading ? value.loading : !1
              );
            }, this)
          );
        }
      }
      this.injectAllButtons();
    },
    addButtonBindEvents: function (label, classes, clickEvent, loading) {
      var $this = this;
      var closeWithButton = function (event) {
        $this.destroy();
        event.preventDefault();
      };
      var createButton = $('<a href="javascript:void(0)" />')
        .attr({ class: classes })
        .on(
          this.eventType,
          clickEvent
            ? function (event) {
                event.preventDefault();
                if (typeof loading != "undefined" && loading == !0) {
                  $(this).addClass("button-loading");
                }
                clickEvent.call($this, this);
              }
            : closeWithButton
        )
        .text(label);
      this.temporaryButtons.push(createButton);
    },
    injectAllButtons: function () {
      $.each(
        this.temporaryButtons,
        function (key, value) {
          this.$modal.find(this.defaultSelectors.footer).prepend(value);
        }.bind(this)
      );
    },
    addCloseButton: function () {
      if (!this.options.closeButton) {
        return;
      }
      var createCloseButton = $("<a />")
        .addClass("modal-close")
        .attr({ href: "javascript:void(0)" })
        .on(
          this.eventType,
          function (event) {
            this.destroy();
            event.preventDefault();
          }.bind(this)
        );
      this.$modal.append(createCloseButton);
    },
    template: function (template, obj) {
      for (var i in obj) {
        template = template.replace(new RegExp("{" + i + "}", "g"), obj[i]);
      }
      return template;
    },
  });
  $.fn.Modal = function (options) {
    this.each(function () {
      if (!$.data(this, "plugin_" + pluginName) || $(this).is(document)) {
        $.data(this, "plugin_" + pluginName, new UIModalPlugin(this, options));
      }
    });
    return this;
  };
  $.fn.Modal.defaults = {
    width: "90%",
    className: "",
    content: "",
    overlayClick: !0,
    closeButton: !1,
    cancelButton: !0,
    template:
      '<div class="modal-header"><h1>{_TITLE_}</h1></div><div class="modal-body"><div class="modal-contents">{_CONTENTS_}</div></div><div class="modal-footer"></div>',
    buttons: [],
  };
})(jQuery, window, document);
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : "object" == typeof exports
    ? (module.exports = a(require("jquery")))
    : a(jQuery);
})(function (a) {
  function i() {
    var b,
      c,
      d = { height: f.innerHeight, width: f.innerWidth };
    return (
      d.height ||
        ((b = e.compatMode),
        (b || !a.support.boxModel) &&
          ((c = "CSS1Compat" === b ? g : e.body),
          (d = { height: c.clientHeight, width: c.clientWidth }))),
      d
    );
  }
  function j() {
    return {
      top: f.pageYOffset || g.scrollTop || e.body.scrollTop,
      left: f.pageXOffset || g.scrollLeft || e.body.scrollLeft,
    };
  }
  function k() {
    if (b.length) {
      var e = 0,
        f = a.map(b, function (a) {
          var b = a.data.selector,
            c = a.$element;
          return b ? c.find(b) : c;
        });
      for (c = c || i(), d = d || j(); e < b.length; e++)
        if (a.contains(g, f[e][0])) {
          var h = a(f[e]),
            k = { height: h[0].offsetHeight, width: h[0].offsetWidth },
            l = h.offset(),
            m = h.data("inview");
          if (!d || !c) return;
          l.top + k.height > d.top &&
          l.top < d.top + c.height &&
          l.left + k.width > d.left &&
          l.left < d.left + c.width
            ? m || h.data("inview", !0).trigger("inview", [!0])
            : m && h.data("inview", !1).trigger("inview", [!1]);
        }
    }
  }
  var c,
    d,
    h,
    b = [],
    e = document,
    f = window,
    g = e.documentElement;
  (a.event.special.inview = {
    add: function (c) {
      b.push({ data: c, $element: a(this), element: this }),
        !h && b.length && (h = setInterval(k, 250));
    },
    remove: function (a) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        if (d.element === this && d.data.guid === a.guid) {
          b.splice(c, 1);
          break;
        }
      }
      b.length || (clearInterval(h), (h = null));
    },
  }),
    a(f).on("scroll resize scrollstop", function () {
      c = d = null;
    }),
    !g.addEventListener &&
      g.attachEvent &&
      g.attachEvent("onfocusin", function () {
        d = null;
      });
});
(function () {
  "use strict";
  window.currentRevision = window.currentRevision || new Date().getTime();
  var ArrayProto = Array.prototype,
    ObjProto = Object.prototype,
    push = ArrayProto.push,
    slice = ArrayProto.slice,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty;
  window.corePath = window.corePath || "assets";
  window.ream = window.ream || {
    name: "Ream",
    version: "3.2",
    config: {
      asyncMode: !0,
      ajaxCacheTimeout: 300000,
      template: {
        extension: ".tpl",
        rootPath: corePath + "/js/ream/templates/",
        prefix: "revision",
      },
    },
    modules: {},
    instances: {},
    add: function (name, creator) {
      var hold = !1;
      if (this.utils.isDefined(this.instances[name])) {
        console.error("Ream ~ Module " + name + " has already been added.");
        return;
      }
      if (ream.utils.find(":hold", name)) {
        name = name.split(":")[0];
        hold = !0;
      }
      this.instances[name] = { creator: creator };
      return this.init(name, hold);
    },
    remove: function (name) {
      if (this.utils.isUndefined(this.modules[name])) {
        return this.modules;
      }
      if (this.utils.isDefined(this.modules[name])) {
        delete this.modules[name];
      }
    },
    get: function (name) {
      if (this.utils.isUndefined(name)) {
        return this.modules;
      }
      if (this.utils.isDefined(this.modules[name])) {
        return this.modules[name];
      }
    },
    init: function (name, hold) {
      if (!hold) {
        this.call(name, "initialize");
      }
      return this.modules[name];
    },
    call: function (name, fn, query) {
      fn = fn || "initialize";
      if (ream.utils.isUndefined(this.instances[name])) {
        console.error("Ream ~ [" + name + "] module undefined");
        return;
      }
      this.modules[name] = new this.instances[name].creator(this.modules);
      if (
        this.utils.isFunction(this.modules[name][fn]) &&
        ream.utils.isDefined(this.modules[name].initialize)
      ) {
        this.ready(function () {
          this.modules[name][fn].apply(
            this.modules[name],
            Array.prototype.slice.call(arguments, 2)
          );
        });
      }
      this.delegateEvents.add(this.modules[name], name + "_modules");
    },
    ready: function (callback, delay) {
      var DOMLoadTimer = setInterval(
        function () {
          clearInterval(DOMLoadTimer);
          if (callback && this.utils.isFunction(callback)) {
            callback.call(this);
          }
        }.bind(this),
        delay || 13
      );
    },
    events: {
      indexOfListener: function (listeners, listener) {
        var i = listeners.length;
        while (i--) {
          if (listeners[i].listener === listener) {
            return i;
          }
        }
        return -1;
      },
      getListeners: function (event) {
        var events = this.getEvents(),
          response,
          key;
        if (event instanceof RegExp) {
          response = {};
          for (key in events) {
            if (ream.utils.has(events, key) && event.test(key)) {
              response[key] = events[key];
            }
          }
        } else {
          response = events[event] || (events[event] = []);
        }
        return response;
      },
      getListenersAsObject: function (event) {
        var listeners = this.getListeners(event),
          response;
        if (listeners instanceof Array) {
          response = {};
          response[event] = listeners;
        }
        return response || listeners;
      },
      addListener: function (event, listener) {
        var listeners = this.getListenersAsObject(event),
          listenerIsWrapped = typeof listener === "object",
          key;
        for (key in listeners) {
          if (
            ream.utils.has(listeners, key) &&
            this.indexOfListener(listeners[key], listener) === -1
          ) {
            listeners[key].push(
              listenerIsWrapped ? listener : { listener: listener, once: !1 }
            );
          }
        }
        return this;
      },
      addOnceListener: function (event, listener) {
        return this.addListener(event, { listener: listener, once: !0 });
      },
      defineEvent: function (event) {
        this.getListeners(event);
        return this;
      },
      removeListener: function (event, listener) {
        var listeners = this.getListenersAsObject(event),
          index,
          key;
        for (key in listeners) {
          if (ream.utils.has(listeners, key)) {
            index = this.indexOfListener(listeners[key], listener);
            if (index !== -1) {
              listeners[key].splice(index, 1);
            }
          }
        }
        return this;
      },
      removeEvent: function (event) {
        var events = this.getEvents(),
          key;
        if (ream.utils.isString(event)) {
          delete events[event];
        } else if (event instanceof RegExp) {
          for (key in events) {
            if (ream.utils.has(events, key) && event.test(key)) {
              delete events[key];
            }
          }
        } else {
          delete this.dataEvents;
        }
        return this;
      },
      emitEvent: function (event, args) {
        var listeners = this.getListenersAsObject(event),
          listener,
          i,
          key,
          response;
        for (key in listeners) {
          if (ream.utils.has(listeners, key)) {
            i = listeners[key].length;
            while (i--) {
              listener = listeners[key][i];
              if (listener.once === !0) {
                this.removeListener(event, listener.listener);
              }
              response = listener.listener.apply(this, args || []);
              if (response === this.getOnceReturnValue()) {
                this.removeListener(event, listener.listener);
              }
            }
          }
        }
        return this;
      },
      emit: function (event) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(event, args);
      },
      setOnceReturnValue: function (value) {
        this.onceReturnValue = value;
        return this;
      },
      getOnceReturnValue: function () {
        if (ream.utils.has(this, "onceReturnValue")) {
          return this.onceReturnValue;
        } else {
          return !0;
        }
      },
      getEvents: function () {
        return this.dataEvents || (this.dataEvents = {});
      },
      detachEvents: function (detachItems) {
        for (var i in detachItems) {
          ream.events.removeListener(detachItems[i]);
        }
      },
    },
    delegateEvents: {
      cache: [],
      add: function (context, namespace) {
        if (ream.utils.isDefined(context.events)) {
          this.delegate(context.events, context, namespace);
        }
      },
      delegate: function (eventHash, context, namespace) {
        this.delegateHelper(eventHash, context, namespace);
      },
      remove: function (value) {
        return ream.utils.arrayRemove(this.cache, value);
      },
      delegateHelper: function (eventHash, context, namespace) {
        var eventString,
          functionName,
          results = [];
        for (eventString in eventHash) {
          functionName = eventHash[eventString];
          results.push(
            function (functionName) {
              var events,
                eventsArray = eventString.split(", "),
                eventsLength = eventsArray.length,
                newResults = [];
              for (var i = 0, eventsLength; i < eventsLength; i++) {
                events = eventsArray[i];
                newResults.push(
                  function () {
                    var eventDetails = events.split(/\s(.+)/),
                      eventNamespace,
                      oldEventName = eventDetails[0],
                      eventName = eventDetails[0],
                      selector = eventDetails[1],
                      keyString;
                    if (eventName.indexOf(".") === -1) {
                      eventNamespace = ream.utils.isString(functionName)
                        ? functionName
                        : void 0;
                      if (eventName.indexOf("(") > 0) {
                        eventName = eventName.replace(
                          "(",
                          "." + eventNamespace + "("
                        );
                      } else {
                        eventName += "." + eventNamespace;
                      }
                    }
                    if (
                      eventName.indexOf("key") === 0 &&
                      eventName.indexOf("(") > 0
                    ) {
                      keyString = eventName.split("(")[1].replace(")", "");
                      eventName = eventName.split("(")[0];
                    }
                    if (ream.utils.isDefined(namespace)) {
                      eventName += "." + namespace;
                    } else {
                      eventName += ".DelegateEvents";
                    }
                    var delegateListeners = function (event) {
                      var fn,
                        currentTarget = ream.$(event.currentTarget);
                      event.delegateEvents = !0;
                      if (
                        event.type !== "keypress" &&
                        event.type !== "keydown" &&
                        event.type !== "keyup"
                      ) {
                        if (currentTarget.data("preventDefault") !== !1) {
                          event.preventDefault();
                        }
                      }
                      event.stopImmediatePropagation();
                      if (ream.utils.isString(functionName)) {
                        if (!(keyString != null) || keyString != null) {
                          fn = context[functionName];
                        }
                      } else if (ream.utils.isFunction(functionName)) {
                        fn = functionName;
                      }
                      return fn != null
                        ? fn.call(context, event, currentTarget)
                        : void 0;
                    };
                    if (this.cache.indexOf(eventName + "_" + selector) == -1) {
                      ream
                        .$(document)
                        .on(eventName, selector, delegateListeners);
                      this.cache.push(eventName + "_" + selector);
                    }
                  }.bind(this)()
                );
              }
              return newResults;
            }.bind(this)(functionName)
          );
        }
        return results;
      },
    },
    ajax: {
      sync: function (options) {
        if (ream.config.asyncMode) {
          if (!options.hasOwnProperty("async")) {
            options.async = !0;
          }
        }
        this.xhr = ream.$.ajax.apply(this, arguments);
        return this.xhr;
      },
      cache: {
        data: {},
        remove: function (url) {
          delete this.data[url];
        },
        allRemove: function () {
          for (var i in this.data) {
            delete this.data[i];
          }
        },
        key: function (options) {
          var url = options.url.replace(/jQuery.*/, ""),
            cached;
          if (options.cache === !1) {
            url = url.replace(/([?&])_=[^&]*/, "");
          }
          if (options.data) {
            cached = url + "-" + options.type + "-" + (options.data || "");
          } else {
            cached = url + "-" + options.type;
          }
          return cached;
        },
        exist: function (url) {
          return (
            !!this.data[url] &&
            new Date().getTime() - this.data[url].time <
              ream.config.ajaxCacheTimeout
          );
        },
        get: function (url) {
          console.log("Getting in cache for url " + url);
          return this.data[url].data;
        },
        set: function (url, data) {
          this.remove(url);
          this.data[url] = { time: new Date().getTime(), data: data };
        },
      },
    },
    template: {
      getId: function (path) {
        return path.replace(/\//g, "-") + "-template";
      },
      getUrl: function (options) {
        return (
          (ream.utils.has(options, "rootPath")
            ? options.rootPath
            : ream.config.template.rootPath) +
          options.path +
          ream.config.template.extension +
          "?" +
          (ream.config.template.prefix || "cache") +
          "=" +
          currentRevision
        );
      },
      isCached: function (options) {
        var type, cached;
        if (this.isCompileStorage(options)) {
          type = "compiled_templates";
        } else {
          type = "templates";
        }
        if (!ream.utils.isEmptyObject(ream.storage.get("local", type))) {
          ream.storage.get("local", type)[
            this.getCacheObjectType(type, options)
          ]
            ? (cached = !0)
            : (cached = !1);
        } else {
          cached = !1;
        }
        return cached;
      },
      getCacheObjectType: function (type, options) {
        return type == "templates" ? options.path : options.compileStorageId;
      },
      loadTemplate: function (options) {
        return ream.ajax.sync({
          url: this.getUrl(options),
          type: "GET",
          async: !1,
          error: function () {
            console.error(
              "Ream ~ Tema dosyası load edilemedi @ " + this.getUrl(options)
            );
          },
        }).responseText;
      },
      saveTemplate: function (type, options) {
        var result = this.getParseHTML(
          "#" + this.getId(options.path),
          options.template
        );
        if (!ream.utils.isDefined(options.script)) {
          ream.storage.set("local", "templates." + options.path, result);
        }
        if (type == "compile") {
          result = this.compiler(result, options.data);
          ream.storage.set(
            "local",
            "compiled_templates." + options.compileStorageId,
            result
          );
        }
        return result;
      },
      getParseHTML: function (selector, template) {
        var result,
          cloneDiv = ream.$("<div />");
        cloneDiv
          .html(ream.$.parseHTML(template))
          .promise()
          .done(function () {
            result = ream.$(this).find(selector).html();
          });
        cloneDiv.remove();
        return result;
      },
      isCompiledDataEquals: function (options) {
        return ream.utils.objectEquals(
          options.data,
          ream.storage.get("local", "compiled_data." + options.compileStorageId)
        );
      },
      isCompileStorage: function (options) {
        return (
          options.compileStorage && ream.utils.isDefined(options.compileStorage)
        );
      },
      clearData: function (type, cleaned) {
        if (ream.utils.isDefined(cleaned)) {
          for (var i in cleaned) {
            ream.storage.clear(type, cleaned[i]);
          }
        } else {
          ream.storage.clear(type);
        }
      },
      get: function (options) {
        var result,
          template,
          spaceLimit = 4.5,
          data = options.data ? options.data : null,
          revision = ream.storage.get("local", "template_revision");
        if (currentRevision != revision) {
          this.clearData("local", [
            "templates",
            "compiled_templates",
            "compiled_data",
          ]);
          ream.storage.set("local", "template_revision", currentRevision);
        }
        var keys = ["templates", "compiled_templates", "compiled_data"];
        for (var i = 0; i < keys.length; i++) {
          if (ream.utils.isEmptyObject(ream.storage.get("local", keys[i]))) {
            ream.storage.set("local", keys[i], {});
          }
        }
        if (ream.storage.getUsedSpace("local") > spaceLimit) {
          this.clearData("local", ["compiled_data", "compiled_templates"]);
        }
        if (this.isCompileStorage(options)) {
          if (!this.isCompiledDataEquals(options)) {
            this.clearData("local", [
              "compiled_templates." + options.compileStorageId,
            ]);
          }
          ream.storage.set(
            "local",
            "compiled_data." + options.compileStorageId,
            options.data
          );
        }
        if (this.isCached(options)) {
          if (this.isCompileStorage(options)) {
            template = ream.storage.get("local", "compiled_templates")[
              options.compileStorageId
            ];
          } else {
            template = this.compiler(
              ream.storage.get("local", "templates")[options.path],
              data
            );
          }
          if (options.callback && ream.utils.isFunction(options.callback)) {
            options.callback(template);
          }
          result = template;
        } else {
          var script;
          if (
            !ream.utils.isEmptyObject(ream.storage.get("local", "templates"))
          ) {
            script = ream.storage.get("local", "templates")[options.path];
          }
          if (ream.utils.isDefined(script)) {
            template = ream
              .$(
                '<script id="' +
                  this.getId(options.path) +
                  '" type="text/template" />'
              )
              .html(script);
            template = ream.$("<div />").append(template.clone()).html();
          } else {
            template = this.loadTemplate(options);
          }
          ream.utils.extend(options, { template: template, script: script });
          if (this.isCompileStorage(options)) {
            result = this.saveTemplate("compile", options);
          } else {
            result = this.compiler(this.saveTemplate("normal", options), data);
          }
          if (options.callback && ream.utils.isFunction(options.callback)) {
            options.callback(result);
          }
        }
        return result;
      },
      compiler: function (template, data) {
        var compiledTemplate = ream.handlebars.Handlebars.compile(template);
        return compiledTemplate(data);
      },
      render: function (element, type, content, callback, options) {
        var doRender = function () {
          var deferred = ream.$.Deferred(function () {
            ream.$(element)[type](content);
          });
          return deferred.promise(content);
        };
        ream.$.when.apply(doRender()).done(
          function (response) {
            if (callback && ream.utils.isFunction(callback)) {
              callback();
            }
            if (ream.utils.isDefined(options.isRenderedTrigger)) {
              ream.events.emit("onTemplateRendered");
            }
          }.bind(this)
        );
      },
    },
    handlebars: {
      helpers: {},
      addHelper: function (name, helper, argTypes) {
        if (argTypes == null) {
          argTypes = [];
        }
        if (!(argTypes instanceof Array)) {
          argTypes = [argTypes];
        }
        return (this.helpers[name] = function () {
          var arg, args, resultArgs, i, len;
          ream.utils.verify(name, arguments, argTypes);
          args = Array.prototype.slice.apply(arguments);
          resultArgs = [];
          for (i = 0, len = args.length; i < len; i++) {
            arg = args[i];
            if (!ream.utils.isHandlebarsSpecific(arg)) {
              arg = ream.utils.result(arg);
            }
            resultArgs.push(arg);
          }
          return helper.apply(this, resultArgs);
        });
      },
      registerHelpers: function (localHandlebars) {
        var helper, name, ref, results;
        if (localHandlebars) {
          this.Handlebars = localHandlebars;
        } else {
          if (typeof window !== "undefined" && window !== null) {
            this.Handlebars = window.Handlebars;
          }
        }
        this.registerHelper = function (name, helper) {
          return this.Handlebars.registerHelper(name, helper);
        }.bind(this);
        ref = this.helpers;
        results = [];
        for (name in ref) {
          helper = ref[name];
          results.push(this.registerHelper(name, helper));
        }
        return results;
      },
    },
    router: {
      routes: [],
      getPath: function () {
        return this.clearSlashes(
          window.location.href.replace(/^.*\/\/[^\/]+/, "")
        );
      },
      getFragment: function () {
        return decodeURI(this.getPath());
      },
      clearSlashes: function (path) {
        return path.toString().replace(/\/$/, "").replace(/^\//, "");
      },
      before: function (fragment) {
        if (ream.config.asyncMode && ream.utils.isDefined(ream.ajax.xhr)) {
          ream.ajax.xhr.abort();
        }
        ream.events.emit("onRouteBefore", fragment);
      },
      add: function (regExPatterns, handler) {
        if (typeof regExPatterns == "function") {
          handler = regExPatterns;
          regExPatterns = "";
        }
        this.routes.push({ regExPatterns: regExPatterns, handler: handler });
        return this;
      },
      remove: function (path) {
        for (
          var i = 0, route;
          i < this.routes.length, (route = this.routes[i]);
          i++
        ) {
          if (
            route.handler === path ||
            route.re.toString() === path.toString()
          ) {
            this.routes.splice(i, 1);
            return this;
          }
        }
        return this;
      },
      check: function (path) {
        var fragment = path || this.getFragment();
        for (var i = 0; i < this.routes.length; i++) {
          var match = fragment.match(this.routes[i].regExPatterns);
          if (match) {
            match.shift();
            this.routes[i].handler.apply(window.location.host || {}, match);
            return this;
          }
        }
        return this;
      },
      listen: function () {
        var self = this;
        var current = "" || "/";
        var navigateListeners = function () {
          if (current !== self.getFragment()) {
            self.before(self.getFragment());
            current = self.getFragment();
            self.check(current);
          }
        };
        clearInterval(this.interval);
        this.interval = setInterval(navigateListeners, 50);
        return this;
      },
      reload: function () {
        window.location.reload();
        return this;
      },
      isProtocol: function (path) {
        return this.clearSlashes(path).match("^(http|https)://");
      },
      getNavigatePath: function (path) {
        if (ream.utils.isNull(this.isProtocol(path))) {
          path = "/" + this.clearSlashes(path);
        } else {
          path = this.clearSlashes(path);
        }
        return path;
      },
      navigate: function (path) {
        path = path ? path : "/";
        if (path != this.getPath()) {
          if (!ream.utils.isCriOs()) {
            window.location.hash = "#!";
          }
          window.history.pushState({}, null, this.getNavigatePath(path));
          ream.events.emit("onRouteNavigate", path);
        }
        return this;
      },
    },
    storage: {
      storageCache: {},
      makeFormat: function (value) {
        var formatted = value;
        try {
          formatted = JSON.parse(value);
        } catch (e) {}
        return formatted;
      },
      readLocalObj: function (type, namespace, setValue, modifier) {
        if (ream.utils.isObject(setValue)) {
          setValue = JSON.stringify(setValue);
        }
        if (ream.utils.isUndefined(modifier)) {
          modifier = !1;
        }
        var storage =
            window[type == "session" ? "sessionStorage" : "localStorage"],
          valueArray = namespace.split("."),
          valueArrayLength = valueArray.length,
          currentLevel;
        if (!ream.utils.hasStorage()) {
          currentLevel = this.storageCache;
        } else {
          currentLevel =
            window[type == "session" ? "sessionStorage" : "localStorage"];
        }
        var rootKey = valueArray[0],
          objectCopy = {},
          isSetMode = !1;
        if (ream.utils.isDefined(setValue)) {
          isSetMode = !0;
        }
        for (var i = 0; i < valueArrayLength; i++) {
          var key = valueArray[i];
          if (
            ream.utils.isUndefined(currentLevel) ||
            !ream.utils.isObject(currentLevel)
          ) {
            return null;
          }
          if (isSetMode && i === valueArrayLength - 1) {
            if (modifier) {
              var r = this.makeFormat(currentLevel[key]);
              r[modifier].apply(r, JSON.parse(setValue));
              setValue = r;
            }
            currentLevel[key] = setValue;
          }
          if (!(ream.utils.isObject(currentLevel) && key in currentLevel)) {
            if (i !== valueArrayLength - 1) {
              currentLevel[key] = {};
            } else {
              currentLevel[key] = null;
            }
          }
          currentLevel = this.makeFormat(currentLevel[key]);
          if (i === 0) {
            objectCopy = currentLevel;
          }
        }
        if (isSetMode) {
          if (!ream.utils.hasStorage()) {
            this.storageCache[rootKey] = JSON.stringify(objectCopy);
          } else {
            storage[rootKey] = JSON.stringify(objectCopy);
          }
        }
        return currentLevel;
      },
      set: function (type, namespace, value, modifier) {
        var fetchPath = this.readLocalObj(type, namespace, value, modifier);
        return fetchPath;
      },
      get: function (type, namespace) {
        var fetchPath;
        if (namespace) {
          fetchPath = this.readLocalObj(type, namespace);
        } else {
          if (!ream.utils.hasStorage()) {
            fetchPath = this.storageCache;
          } else {
            fetchPath =
              window[type == "session" ? "sessionStorage" : "localStorage"];
          }
        }
        return fetchPath;
      },
      getUsedSpace: function (type, optKey) {
        var allocatedMemory = 0,
          storage = ream.utils.hasStorage()
            ? window[type == "session" ? "sessionStorage" : "localStorage"]
            : !1,
          key;
        if (!storage) {
          return allocatedMemory;
        }
        for (key in storage) {
          if (storage.hasOwnProperty(key) && (!optKey || optKey === key)) {
            allocatedMemory += (storage[key].length * 2) / 1024 / 1024;
          }
        }
        return parseFloat(allocatedMemory.toFixed(2));
      },
      clear: function (type, namespace) {
        var storage =
            window[type == "session" ? "sessionStorage" : "localStorage"],
          valueArray = ream.utils.isDefined(namespace)
            ? namespace.split(".")
            : "";
        if (ream.utils.isDefined(valueArray[1])) {
          if (ream.utils.isNull(this.storageCache)) {
            return;
          }
          var objectCopy;
          if (!ream.utils.hasStorage()) {
            objectCopy = JSON.parse(this.storageCache[valueArray[0]]);
          } else {
            objectCopy = JSON.parse(storage[valueArray[0]]);
          }
          delete objectCopy[valueArray[1]];
          if (!ream.utils.hasStorage()) {
            this.storageCache[valueArray[0]] = JSON.stringify(objectCopy);
          } else {
            storage[valueArray[0]] = JSON.stringify(objectCopy);
          }
        } else {
          if (ream.utils.isDefined(namespace)) {
            if (!ream.utils.hasStorage()) {
              delete this.storageCache[namespace];
            } else {
              storage.removeItem(namespace);
            }
          } else {
            if (!ream.utils.hasStorage()) {
              this.storageCache = {};
            } else {
              storage.clear();
            }
          }
        }
        return this;
      },
    },
    cookie: {
      read: function read(name) {
        var match = document.cookie.match(
          new RegExp("(^|;\\s*)(" + name + ")=([^;]*)")
        );
        return match ? decodeURIComponent(match[3]) : null;
      },
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + "=" + encodeURIComponent(value));
        if (ream.utils.isNumber(expires)) {
          var date = new Date();
          date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
          cookie.push("expires=" + date.toGMTString());
        }
        path = "/";
        if (ream.utils.isString(path)) {
          cookie.push("path=" + path);
        }
        if (ream.utils.isString(domain)) {
          cookie.push("domain=" + domain);
        }
        if (secure === !0) {
          cookie.push("secure");
        }
        document.cookie = cookie.join("; ");
      },
      remove: function remove(name) {
        this.write(name, "", Date.now() - 86400000);
      },
    },
    utils: {
      isMobile: function () {
        return (
          navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/BlackBerry/i) ||
          navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/Opera Mini/i) ||
          navigator.userAgent.match(/IEMobile/i)
        );
      },
      isIpad: function () {
        return this.findDevice("ipad");
      },
      isWindows: function () {
        return this.findDevice("windows");
      },
      isWindowsPhone: function () {
        return this.isWindows() && this.findDevice("phone");
      },
      isAndroid: function () {
        return !this.isWindows() && this.findDevice("android");
      },
      isAndroidTablet: function () {
        return this.isAndroid() && !this.findDevice("mobile");
      },
      isWindowsTablet: function () {
        return (
          this.isWindows() && this.findDevice("touch") && !this.isWindowsPhone()
        );
      },
      isFxos: function () {
        return (
          (this.findDevice("(mobile;") || this.findDevice("(tablet;")) &&
          this.findDevice("; rv:")
        );
      },
      isCriOs: function () {
        return !navigator.userAgent.match("CriOS");
      },
      isFxosTablet: function () {
        return this.isFxos() && this.findDevice("tablet");
      },
      isTablet: function () {
        return (
          this.isIpad() ||
          this.isAndroidTablet() ||
          this.isWindowsTablet() ||
          this.isFxosTablet()
        );
      },
      findDevice: function (needle) {
        return window.navigator.userAgent.toLowerCase().indexOf(needle) !== -1;
      },
      isEmpty: function (value) {
        return !value || 0 === value.length;
      },
      isEmptyObject: function (value) {
        var name;
        for (name in value) {
          return !1;
        }
        return !0;
      },
      isFunction: function (value) {
        return typeof value === "function";
      },
      isObject: function (value) {
        return value !== null && typeof value === "object";
      },
      isArray: function (value) {
        return Object.prototype.toString.call(value) == "[object Array]";
      },
      isString: function (value) {
        return typeof value === "string";
      },
      isNumber: function (value) {
        return typeof value === "number";
      },
      isUndefined: function (value) {
        return typeof value === "undefined";
      },
      isDefined: function (value) {
        return typeof value !== "undefined";
      },
      isNull: function (value) {
        return value === null;
      },
      isBoolean: function (value) {
        return typeof value === "boolean";
      },
      isRegExp: function (value) {
        return Object.prototype.toString.call(value) == "[object RegExp]";
      },
      isUrl: function (str) {
        var regexp =
          /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return regexp.test(str);
      },
      isElement: function (node) {
        return !!(
          node &&
          (node.nodeName || (node.prop && node.attr && node.find))
        );
      },
      isHandlebarsSpecific: function (value) {
        return (value && value.fn != null) || (value && value.hash != null);
      },
      safeString: function (str) {
        if (this.isDefined(ream.handlebars.Handlebars)) {
          return new ream.handlebars.Handlebars.SafeString(str);
        } else {
          console.error("Ream ~ Handlebars is undefined");
        }
      },
      result: function (value) {
        if (this.isFunction(value)) {
          return value();
        } else {
          return value;
        }
      },
      verify: function (name, fnArg, argTypes) {
        var arg, i, _i, msg, len, results;
        if (argTypes == null) {
          argTypes = [];
        }
        fnArg = Array.prototype.slice.apply(fnArg).slice(0, argTypes.length);
        results = [];
        for (i = _i = 0, len = fnArg.length; _i < len; i = ++_i) {
          arg = fnArg[i];
          msg =
            "{{" +
            name +
            "}} requires " +
            argTypes.length +
            " arguments " +
            argTypes.join(", ") +
            ".";
          if (argTypes[i].indexOf("safe:") > -1) {
            if (ream.utils.isHandlebarsSpecific(arg)) {
              results.push(ream.utils.err(msg));
            } else {
              results.push(void 0);
            }
          } else {
            if (this.isUndefined(arg)) {
              results.push(this.err(msg));
            } else {
              results.push(void 0);
            }
          }
        }
        return results;
      },
      err: function (msg) {
        throw new Error(msg);
      },
      addDots: function (str) {
        return str.replace(/\//g, ".");
      },
      addSlashes: function (str) {
        return str.replace(/\./g, "/");
      },
      getUrlParameters: function (url) {
        url = url || window.location.href;
        var vars = {};
        var hashes = url.slice(url.indexOf("#") + 1).split("?");
        if (hashes.length > 1) {
          vars.state = hashes[0];
          hashes = hashes[1].split("&");
        } else {
          hashes = hashes[0].split("&");
        }
        for (var i = 0; i < hashes.length; i++) {
          var hash = hashes[i].split("=");
          if (hash.length > 1) {
            vars[hash[0]] = hash[1];
          } else {
            vars[hash[0]] = null;
          }
        }
        return vars;
      },
      getQueryString: function (field, url) {
        var href = url ? url : window.location.href;
        var reg = new RegExp("[?&]" + field + "=([^&#]*)", "i");
        var string = reg.exec(href);
        return string ? string[1] : null;
      },
      hasStorage: function () {
        var uid = new Date();
        var storage;
        var result;
        try {
          (storage = window.localStorage).setItem(uid, uid);
          result = storage.getItem(uid) == uid;
          storage.removeItem(uid);
          return result && storage;
        } catch (exception) {}
      },
      forEach: function (object, callback, args) {
        var value,
          i = 0,
          length = object.length;
        if (args) {
          if (this.isArray(object)) {
            for (; i < length; i++) {
              value = callback.apply(object[i], args);
              if (value === !1) {
                break;
              }
            }
          } else {
            for (i in object) {
              value = callback.apply(object[i], args);
              if (value === !1) {
                break;
              }
            }
          }
        } else {
          if (this.isArray(object)) {
            for (; i < length; i++) {
              value = callback.call(object[i], i, object[i]);
              if (value === !1) {
                break;
              }
            }
          } else {
            for (i in object) {
              value = callback.call(object[i], i, object[i]);
              if (value === !1) {
                break;
              }
            }
          }
        }
        return object;
      },
      now: function () {
        return new Date().getTime();
      },
      debounce: function (func, wait, immediate) {
        var timeout;
        return function () {
          var context = this,
            args = arguments;
          var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      },
      throttle: function (fn, threshhold, scope) {
        threshhold || (threshhold = 250);
        var last, deferTimer;
        return function () {
          var context = scope || this;
          var now = +new Date(),
            args = arguments;
          if (last && now < last + threshhold) {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
              last = now;
              fn.apply(context, args);
            }, threshhold);
          } else {
            last = now;
            fn.apply(context, args);
          }
        };
      },
      wait: function (callback, hold, scope) {
        scope = scope || this;
        return window.setTimeout(function () {
          callback.apply(scope, arguments);
        }, hold);
      },
      serialize: function (object) {
        var str = [];
        for (var i in object)
          if (object.hasOwnProperty(i)) {
            str.push(
              encodeURIComponent(i) + "=" + encodeURIComponent(object[i])
            );
          }
        return str.join("&");
      },
      serializeJSON: function (form) {
        var options = {};
        var formToArray = form.serializeArray();
        ream.$.each(formToArray, function () {
          if (options[this.name]) {
            if (!options[this.name].push) {
              options[this.name] = [options[this.name]];
            }
            options[this.name].push(this.value || "");
          } else {
            options[this.name] = this.value || "";
          }
        });
        return options;
      },
      size: function (obj, ownPropsOnly) {
        var count = 0,
          key;
        if (isArray(obj) || isString(obj)) {
          return obj.length;
        } else if (isObject(obj)) {
          for (key in obj)
            if (!ownPropsOnly || obj.hasOwnProperty(key)) {
              count++;
            }
        }
        return count;
      },
      find: function (find, str) {
        return new RegExp(find, "g").test(str);
      },
      has: function (object, key) {
        return Object.prototype.hasOwnProperty.call(object, key);
      },
      parseBoolean: function (value) {
        if (this.isBoolean(value)) {
          return value;
        }
        switch (value.toLowerCase()) {
          case "true":
          case "yes":
          case "1":
            return !0;
          case "false":
          case "no":
          case "0":
          case null:
            return !1;
          default:
            return Boolean(value);
        }
      },
      parseHTML: function (html) {
        var text = document.createElement("textarea");
        text.innerHTML = html;
        return text.value;
      },
      convertUrl: function (value) {
        value = value.replace(/&amp;/gi, "&");
        value = value.replace(/&gt;/gi, ">");
        value = value.replace(/&lt;/gi, "<");
        value = value.replace(/&quot;/gi, '"');
        value = value.replace(/&#039;/gi, "'");
        return value;
      },
      escape: function (value) {
        var chars = {
          "&": "&#38;",
          "<": "&#60;",
          ">": "&#62;",
          " ": "&nbsp;",
          "'": "&#39;",
          '"': "&#34;",
          "\n": "<br />",
        };
        value = value.replace(/[&<> '"\n]/g, function (i) {
          if (i in chars) {
            return chars[i];
          }
          return !1;
        });
        return value;
      },
      trim: function (value) {
        return value.toString().replace(/^\s+|\s+$/g, "");
      },
      decode: function (value) {
        return ream.$("<div />").html(value).text();
      },
      extend: function (destination, source) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            destination[key] = source[key];
          }
        }
        return destination;
      },
      objectLength: function (value) {
        var i = 0;
        for (var j in value) {
          if (this.has(value, j)) {
            i++;
          }
        }
        return i;
      },
      objectEquals: function (first, second) {
        return JSON.stringify(first) === JSON.stringify(second);
      },
      arrayEquals: function (first, second) {
        if (!second) {
          return !1;
        }
        if (first.length != second.length) {
          return !1;
        }
        for (var i = 0, l = first.length; i < l; i++) {
          if (first[i] instanceof Array && second[i] instanceof Array) {
            if (!first[i].equals(second[i])) return !1;
          } else if (first[i] != second[i]) {
            return !1;
          }
        }
        return !0;
      },
      arrayDiff: function (first, second) {
        var a = [],
          diff = [];
        for (var i = 0; i < first.length; i++) {
          a[first[i]] = !0;
        }
        for (var i = 0; i < second.length; i++) {
          if (a[second[i]]) delete a[second[i]];
          else a[second[i]] = !0;
        }
        for (var k in a) {
          diff.push(k);
        }
        return diff;
      },
      arrayRemove: function (array, value) {
        for (var i in array) {
          if (array[i] == value) {
            array.splice(i, 1);
            break;
          }
        }
        return array;
      },
      arrayIndexOf: function (array, value) {
        if (array.indexOf) {
          return array.indexOf(value);
        } else {
          var n = array.length;
          while (n--) {
            if (array[n] === value) {
              return n;
            }
          }
          return -1;
        }
      },
      removeArrayItemByIndex: function (array, index) {
        if (index > -1) {
          return array.splice(index, 1);
        }
      },
    },
  };
  function bindJQuery() {
    if (!window.jQuery) {
      throw "Ream: jQuery not found";
      return;
    }
    ream.$ = $;
  }
  function bindHandlebars() {
    if (!window.Handlebars) {
      throw "Ream: Handlebars not found";
      return;
    }
    ream.ready(function () {
      ream.handlebars.registerHelpers(Handlebars);
    });
  }
  bindJQuery();
})();
ream.add("template", function () {
  "use strict";
  ream.handlebars.addHelper(
    "condition",
    function (left, operator, right, options) {
      var bool = !1;
      switch (operator) {
        case "==":
          bool = left == right;
          break;
        case "!=":
          bool = left != right;
          break;
        case ">":
          bool = left > right;
          break;
        case ">=":
          bool = left >= right;
          break;
        case "<":
          bool = left < right;
          break;
        case "<=":
          bool = left <= right;
          break;
        default:
          throw "Unknown operator " + operator;
      }
      if (bool) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    }
  );
  ream.handlebars.addHelper("decodeEntities", function (input) {
    var y = document.createElement("textarea");
    y.innerHTML = input;
    return y.value;
  });
  ream.handlebars.addHelper(
    "raw",
    function (value) {
      return ream.utils.safeString(value);
    },
    "string"
  );
  ream.handlebars.addHelper(
    "select",
    function (items, selected) {
      var output = "";
      var inverted = items.reverse();
      if (ream.utils.isDefined(selected)) {
        for (var i = 0; i < inverted.length; i++) {
          var selectedItem;
          for (var j = 0; j < selected.length; j++) {
            if (inverted[i].id == selected[j].id) {
              selectedItem = inverted[i].id;
              output +=
                '<option value="' +
                inverted[i].id +
                '" selected="selected">' +
                inverted[i].title +
                "</option>";
            }
          }
          if (inverted[i].id != selectedItem) {
            output +=
              '<option value="' +
              inverted[i].id +
              '">' +
              inverted[i].title +
              "</option>";
          }
        }
      } else {
        for (var i = 0; i < inverted.length; i++) {
          output +=
            '<option value="' +
            inverted[i].id +
            '">' +
            inverted[i].title +
            "</option>";
        }
      }
      return ream.utils.safeString(output);
    },
    "string"
  );
  return {
    get: function (options) {
      if (!options) {
        console.error("Ream ~ Options is undefined");
        return;
      }
      return ream.template.get(options);
    },
    render: function (element, type, options, callback) {
      options.callback = function (template) {
        ream.template.render(element, type, template, callback, options);
      };
      return this.get(options);
    },
  };
});
ream.add("ajax", function () {
  "use strict";
  var settings = {
    apiUrl: "/wp-admin/admin-ajax.php",
    methodMap: { send: "POST", read: "GET" },
    notice: {
      messages: {
        theme: { failed: "Tema dosyası load edilemedi." },
        500: "Belirlenemeyen bir hata oluştu. <br /> Lütfen site yöneticinizle iletişime geçiniz.",
        timeout: "Şu anda talebinizi yerine getirmekte sorun yaşıyoruz.",
        503: "Şu anda talebinizi yerine getirmekte sorun yaşıyoruz.",
      },
      button: { text: ["Tamam", "Tekrar Deneyin"] },
    },
  };
  var processing = [];
  var notice = function (message, button) {
    ream.get("plugins").notice(
      message,
      function () {
        ream.get("plugins").modal("hide");
      },
      button
    );
  };
  var wcRequests = [
    "cart",
    "wc-ajax=checkout",
    "apply_coupon",
    "remove_coupon",
    "update_shipping_method",
    "update_order_review",
  ];
  var encodeJsonToUrlEncoded = function (jsonObj) {
    var urlEncoded = Object.keys(jsonObj)
      .map(function (key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(jsonObj[key]);
      })
      .join("&");
    return urlEncoded;
  };
  var parseUrlEncodedJson = function (encoded) {
    var obj = {};
    var pairs = encoded.split("&");
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split("=");
      obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    }
    return obj;
  };
  var prefilter = function () {
    ream.$.ajaxPrefilter(function (options, originalOptions, XHR) {
      if (!ream.utils.isUndefined(options.data)) {
        var parsedData = parseUrlEncodedJson(options.data);
        if (!ream.utils.isUndefined(parsedData.update_cart)) {
          options.url = "/" + ream.$("html").attr("lang") + "/?cart";
        }
      }
      processing.push(options);
      if (!ream.utils.has(originalOptions, "type")) {
        options.type = "POST";
      }
      if (!ream.utils.has(originalOptions, "async")) {
        options.async = !1;
      }
      if (!ream.utils.has(originalOptions, "dataType")) {
        options.dataType = "json";
      }
      if (!ream.utils.has(originalOptions, "timeout")) {
        options.timeout = 30000;
      }
      var originalSuccess = options.success,
        originalBeforeSend = options.beforeSend;
      options.async = !0;
      options.beforeSend = function (xhr, settings) {
        var wcProgress = !1;
        wcRequests.map(function (value) {
          if (settings.url.indexOf(value) != -1) {
            wcProgress = !0;
          }
        });
        if (wcProgress) {
          ream.get("core").loading.start();
        }
        if (!ream.utils.isUndefined(originalBeforeSend)) {
          originalBeforeSend();
        }
      };
      if (options.cache && ream.utils.isDefined(options.cache)) {
        var cacheUrl = ream.ajax.cache.key(originalOptions);
        options.success = function (response) {
          if (!ream.ajax.cache.exist(cacheUrl)) {
            ream.ajax.cache.set(cacheUrl, response);
          }
          if (!ream.utils.isUndefined(originalSuccess)) {
            originalSuccess();
          }
        };
      }
      options.complete = function () {
        processing.splice(-1, 1);
        if (
          options.url.indexOf("apply_coupon") != -1 ||
          options.url.indexOf("remove_coupon") != -1
        ) {
          ream.$(document).trigger("wc_update_cart");
        }
        if (ream.utils.isEmpty(processing)) {
          ream.events.emit("allAjaxRequestComplete");
        }
        if (ream.$("form.processing").length != 0) {
          ream.$("form.processing").removeClass("processing");
        }
        ream.get("core").loading.stop();
      };
      XHR.fail(function (XHR, textStatus, errorThrown) {
        var message = options.url + ": ";
        if (XHR.status == 404) {
          var urlLastId = parseInt(
            options.url.substr(options.url.lastIndexOf("/") + 1)
          );
          if (ream.utils.isNumber(urlLastId)) {
            options.url = options.url.replace(new RegExp(urlLastId), "");
          }
          if (options.url.indexOf(".tpl") > -1) {
            notice(
              settings.notice.messages.theme.failed,
              settings.notice.button.text[0],
              !0
            );
          }
          message += "Requested page not found.";
        } else if (XHR.status == 500) {
          notice(
            settings.notice.messages["500"],
            settings.notice.button.text[0],
            !0
          );
          message += "Internal Server Error";
        } else if (errorThrown == "timeout") {
          message += "Request time out.";
          notice(
            settings.notice.messages.timeout,
            settings.notice.button.text[1]
          );
        } else if (errorThrown == "abort") {
          message += "Request was aborted.";
        } else if (XHR.status === 503) {
          message += "Service Unavailable.";
          notice(
            settings.notice.messages["503"],
            settings.notice.button.text[1]
          );
        } else {
          message += "Unknown error.";
        }
        console.error("Ream ~ " + message);
      });
    });
  };
  var transport = function () {
    ream.$.ajaxTransport("+*", function (options, originalOptions) {
      if (!ream.utils.has(options, "cache")) {
        return;
      }
      var cacheUrl = ream.ajax.cache.key(originalOptions);
      if (ream.ajax.cache.exist(cacheUrl)) {
        return {
          send: function (headers, completeCallback) {
            ream.utils.wait(function () {
              var response = {};
              response.data = ream.ajax.cache.get(cacheUrl);
              completeCallback(200, "OK", response);
            }, 0);
          },
        };
      }
    });
  };
  return {
    initialize: function () {
      prefilter();
      transport();
    },
    request: function (method, options) {
      var type = settings.methodMap[method];
      options || (options = {});
      var params = { type: type };
      if (ream.utils.isUndefined(options.useApiUrl) || options.useApiUrl) {
        options.url =
          settings.apiUrl +
          (ream.utils.isDefined(options.url) ? options.url : "");
      }
      if (params.type !== "GET") {
        params.processData = !1;
      }
      var beforeSend = options.beforeSend;
      options.beforeSend = function (xhr) {
        if (beforeSend) {
          beforeSend(xhr, options);
        }
        if (options.button) {
          ream
            .$(options.button)
            .attr("disabled", !0)
            .addClass("button-loading");
        }
      };
      var success = options.success;
      options.success = function (response, status, xhr) {
        if (success) {
          success(response, status, xhr);
        } else {
          if (options.redirect) {
            window.location = options.redirect;
            return;
          }
          if (options.button) {
            ream
              .$(options.button)
              .removeAttr("disabled")
              .removeClass("button-loading");
          }
        }
      };
      var error = options.error;
      options.error = function (response, status) {
        if (error) {
          error(response, options);
        } else {
          if (options.button) {
            ream
              .$(options.button)
              .removeAttr("disabled")
              .removeClass("button-loading");
          }
        }
      };
      return ream.ajax.sync(ream.utils.extend(params, options));
    },
    when: function (fn) {
      return ream.$.when(fn);
    },
    submit: function (options) {
      if (options.button) {
        if (ream.$(options.button).is(":disabled")) {
          return;
        }
      }
      options.data = ream.$.param(ream.$(options.form).serializeArray());
      return ream.get("ajax").request("send", options);
    },
  };
});
ream.add("validate", function () {
  "use strict";
  var addSettings = function () {
    ream.$.validator.setDefaults({
      errorElement: "div",
      errorClass: "validate-error",
      validClass: "validate-success",
      onsubmit: !1,
      onkeyup: function (element, event) {
        if (event.which === 9 && this.elementValue(element) === "") {
          return;
        } else if (
          element.name in this.submitted ||
          element === this.lastElement
        ) {
          this.element(element);
        }
      },
      unhighlight: function (element, errorClass) {
        element = ream.$(element);
        if (element.parents(".selectbox").length > 0) {
          element.parents(".selectbox").removeClass("selectbox-validate-error");
        }
        element.removeClass("validate-error");
      },
      errorPlacement: function (error, element) {
        if (element.parents(".radio-list").length > 0) {
          error.appendTo(
            element.parents(".radio-list").find(".radio:last-child")
          );
        } else if (element.parents(".checkbox-list").length > 0) {
          if (element.attr("name").indexOf("[]") != -1) {
            error.appendTo(element.parents(".checkbox-list"));
          } else {
            error.appendTo(element.parents(".checkbox"));
          }
        } else if (element.parents(".selectbox").length > 0) {
          element.parents(".selectbox").addClass("selectbox-validate-error");
          if (element.next().is("label")) {
            error.insertAfter(element.next());
          } else {
            error.insertAfter(element);
          }
        } else {
          if (element.next().is("label")) {
            error.insertAfter(element.next());
          } else {
            error.insertAfter(element);
          }
        }
      },
      invalidHandler: function (form, validator) {
        if (!validator.numberOfInvalids()) {
          return;
        }
        ream.events.emit("onInvalidHandler", form.delegateTarget, validator);
      },
    });
  };
  var addMethods = function () {
    ream.$.validator.addMethod(
      "accept",
      function (value, element, param) {
        var typeParam =
            typeof param === "string"
              ? param.replace(/\s/g, "").replace(/,/g, "|")
              : "image/*",
          optionalValue = this.optional(element),
          i,
          file;
        if (optionalValue) {
          return optionalValue;
        }
        if (ream.$(element).attr("type") === "file") {
          typeParam = typeParam.replace(/\*/g, ".*");
          if (element.files && element.files.length) {
            for (i = 0; i < element.files.length; i++) {
              file = element.files[i];
              if (!file.type.match(new RegExp(".?(" + typeParam + ")$", "i"))) {
                return !1;
              }
            }
          }
        }
        return !0;
      },
      "Please enter a value with a valid mimetype."
    );
    ream.$.validator.addMethod(
      "extension",
      function (value, element, param) {
        param =
          typeof param === "string"
            ? param.replace(/,/g, "|")
            : "png|jpe?g|gif";
        return (
          this.optional(element) ||
          value.match(new RegExp(".(" + param + ")$", "i"))
        );
      },
      "Please enter a value with a valid extension."
    );
    ream.$.validator.addMethod(
      "specialDate",
      function (value, element) {
        return value.match(/^\d{4}-\d{2}-\d{2}$/);
      },
      'Please enter a valid "Date". (Ex. 01/01/2000 - Day/Month/Year)'
    );
    ream.$.validator.addMethod(
      "specialNumber",
      function (value, element) {
        return (
          this.optional(element) ||
          value === "NA" ||
          value.match(/^[0-9,\+-_ ]+$/)
        );
      },
      'Please enter a valid "Number".'
    );
    ream.$.validator.addMethod(
      "specialPhone",
      function (value, element) {
        return value.length != 0;
      },
      'Lütfen geçerli bir "Telefon Numarası" girin.'
    );
    ream.$.validator.addMethod(
      "email",
      function (value, element) {
        return /(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*|^"([\001-\010\013\014\016-\037!#-\[\]-\177]|\\[\001-\011\013\014\016-\177])*")@((?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+(?:[A-Z]{2,6}\.?|[A-Z0-9-]{2,}\.?)$)|\[(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}\]$/i.test(
          value
        );
      },
      'Please enter a valid "E-Mail Address".'
    );
  };
  return {
    initialize: function () {
      addSettings();
      addMethods();
    },
    getMethods: function (method) {
      return jQuery.validator.methods[method];
    },
    is: function (element, options) {
      if (!ream.utils.isObject(options) && ream.utils.isUndefined(options)) {
        console.error("Ream ~ Options is undefined");
        return;
      }
      var configuration = {};
      if (ream.utils.has(options, "rules")) {
        ream.utils.extend(configuration, { rules: options.rules });
      }
      if (ream.utils.has(options, "messages")) {
        ream.utils.extend(configuration, { messages: options.messages });
      }
      element.find("*").each(function () {
        if (ream.$(this).attr("type") != "file") {
          this.value = ream.$.trim(ream.$(this).val());
        }
      });
      element.validate(configuration);
      return element.valid();
    },
  };
});
ream.add("router", function () {
  "use strict";
  var route = function (event, isDevice) {
    var target =
      isDevice == "mobile" ? ream.$(event.currentTarget) : ream.$(event.target);
    if (isDevice == "desktop") {
      if (event.which != 1) {
        return;
      }
    }
    var href = target.attr("href") || target.parents("a").attr("href");
    var data =
      ream.utils.isDefined(target.attr("data-router")) ||
      ream.utils.isDefined(target.parents("a").attr("data-router"));
    if (data) {
      if (
        ream.router.getPath() !=
        ream.router.clearSlashes(href).replace(/^.*\/\/[^\/]+/, "")
      ) {
        ream.router.navigate(href);
      } else {
        ream.events.emit("onEqualUrl");
      }
    }
  };
  return {
    events: { "click [data-router]": "route" },
    route: function (event) {
      route.call(this, event, ream.utils.isMobile() ? "mobile" : "desktop");
    },
  };
});
ream.add("plugins", function () {
  "use strict";
  return {
    modal: function (type, options) {
      var modal = ream.$(window).data("plugin_Modal");
      if (type == "show") {
        if (ream.utils.isDefined(modal)) {
          modal.destroy();
        }
        if (!ream.utils.has(options, "width")) {
          ream.utils.extend(options, {
            width: ream.utils.isMobile() ? "90%" : "60%",
          });
        }
        ream.$(window).Modal(options);
        setTimeout(function () {
          ream.get("core").DOMMask();
        }, 150);
      } else {
        if (ream.utils.isDefined(modal)) {
          modal.destroy();
        }
      }
    },
    notice: function (message, callback, text) {
      ream.get("plugins").modal("show", {
        width: "30%",
        content: message,
        overlayClick: !1,
        cancelButton: !1,
        closeButton: !1,
        buttons: {
          primary: {
            title: text ? text : "Tamam",
            classes: "button button-primary",
            callback: function () {
              if (callback && ream.utils.isFunction(callback)) {
                callback();
              } else {
                ream.get("plugins").modal("hide");
              }
            },
          },
        },
      });
    },
  };
});
ream.add("core", function () {
  "use strict";
  var defaultSelectors = {
    body: "body",
    header: "#header",
    scrollTop: ".scroll-top",
  };
  return {
    events: {
      "click .scroll-top": "scrollTop",
      "click .tab-head > ul > li > a": "tabs",
      "blur [data-filled]": "filled",
      'submit [data-action="send-newsletter"]': "sendNewsletter",
      'click [data-action="search"]': "showSearch",
      'click [data-action="search-close"]': "closeSearch",
      'keyup [data-action="send-search"]': "sendSearch",
      'submit [data-action="send-search"]': "sendSearch",
    },
    initialize: function () {
      ream.get("core").DOMLoader();
      ream.get("core").DOMMask();
      ream.get("core").DOMEventListener();
      ream.get("core").DOMProcessing();
      ream.get("core").DOMCursor();
      ream.get("core").DOMCartTotal();
    },
    changeBackgroundImage: function () {
      ream.$("[data-background]").each(function () {
        var target = ream.$(this);
        var src = $(this).attr("data-background");
        ream
          .$("<img />")
          .attr("src", src)
          .on("load", function () {
            target.css("background-image", 'url("' + src + '")');
            target.removeAttr("data-background");
          });
      });
    },
    DOMLoader: function () {
      this.changeBackgroundImage();
    },
    DOMMask: function () {
      ream.$("[data-uppercase]").mask("00000", {
        translation: { 0: { pattern: /[A-Za-z0-9]/ } },
        onKeyPress: function (value, event) {
          event.currentTarget.value = value.toUpperCase();
        },
      });
    },
    DOMEventListener: function () {
      ream.get("core").addFixedProcess();
      ream.$(window).on("scroll", function (event) {
        ream.get("core").addFixedProcess();
      });
      ream.events.addListener("onInvalidHandler", function (form, validator) {
        if (ream.$(form).data("errorScrollTop") !== !1) {
          var value = ream.$(validator.errorList[0].element).offset().top - 110;
          ream.utils.wait(function () {
            ream.get("core").scrollTop(value);
            ream.$("input:focus").trigger("blur");
          }, 100);
        }
      });
    },
    DOMFormreset: function () {
      ream.$("form").each(function () {
        this.reset();
        if (!ream.$(this).find(".input-filled").is('[type="date"]')) {
          ream.$(this).find(".input-filled").removeClass("input-filled");
        }
        ream.$(this).find(".button-loading").removeAttr("disabled");
        ream.$(this).find(".button-loading").removeClass("button-loading");
      });
    },
    DOMProcessing: function () {
      ream.get("core").DOMFormreset();
      ream.$(window).on("pageshow", function () {
        ream.get("core").DOMFormreset();
      });
      ream.$(".default-content-area p").each(function () {
        if (ream.$.trim(ream.$(this).text()) == "") {
          if (ream.$(this).find("img").length == 0) {
            ream.$(this).css("margin-bottom", "0").css("line-height", ".5");
          }
        }
      });
      ream.$("body:not(.page) .default-content-area ul").each(function () {
        if (!ream.$(this).hasClass("no-list-style-type")) {
          if (ream.$(this).css("list-style-type") != "none") {
            ream.$(this).addClass("list-style");
          } else {
            ream.$(this).css("list-style-type", "disc").addClass("list-style");
          }
        }
      });
      ream.ready(function () {
        ream.get("core").convertGoogleMaps();
      }, 150);
      ream.get("core").filled();
      ream.get("core").createTabs();
      ream.get("core").createIsotope();
      ream.get("core").createCounterUp();
      ream.get("core").animated();
      if (ream.utils.isMobile() && !ream.utils.isTablet()) {
        ream.$("html").addClass("mobile");
      }
    },
    DOMCursor: function () {
      var element = ream.$(".cursor");
      if (element.length == 0) {
        return;
      }
      ream.$("[data-cursor]").on("pointermove", function (top) {
        element.css({ opacity: "1" });
        element.css({
          top: top.clientY - element.height() / 2,
          left: top.clientX - element.width() / 2,
        });
      });
      ream
        .$("[data-cursor]")
        .on("mouseenter", function () {
          element.addClass(ream.$(this).attr("data-cursor-class"));
          element.attr("data-text", ream.$(this).attr("data-cursor-title"));
        })
        .on("mouseleave", function () {
          element.removeClass(ream.$(this).attr("data-cursor-class"));
          element.removeAttr("data-text");
          element.css({ opacity: "0" });
        })
        .on("mousedown", function () {
          element.css({ transform: "scale(.8)" });
        })
        .on("mouseup", function () {
          element.css({ transform: "scale(1)" });
        });
      ream
        .$("a, button")
        .on("mouseenter", function () {
          element.addClass("cursor-link");
        })
        .on("mouseleave", function () {
          element.removeClass("cursor-link");
        });
    },
    DOMCartTotal: function () {
      var element = ream.$('[data-selector="quick-cart-total"]');
      if (element.length == 0) {
        return;
      }
      var updateCartTotals = function () {
        ream
          .get("ajax")
          .request("read", {
            data: "action=getCartTotal&nonce=" + window.global_ajax_nonce,
          })
          .done(function (response) {
            if (response.success) {
              element.attr("aria-label", response.results.cart_total);
              element.find("> span").html(response.results.cart_total);
            }
          });
      };
      updateCartTotals();
      ream.$(document.body).on("updated_cart_totals", function () {
        updateCartTotals();
      });
    },
    convertGoogleMaps: function () {
      ream.$("[data-google-maps]").each(function () {
        var type = ream.$(this).attr("data-google-maps"),
          width = ream.$(this).attr("data-google-maps-width") || "100%",
          height = ream.$(this).attr("data-google-maps-height") || "450";
        ream
          .$(this)
          .append(
            '<iframe allowfullscreen frameborder="0" style="border:0" width="' +
              width +
              '" height="' +
              height +
              '" src="' +
              ream.$(this).attr("data-google-maps-id") +
              '"></iframe>'
          );
      });
    },
    loading: {
      start: function (overlay) {
        if (ream.$(".loading-bar").length == 0) {
          ream.$("body").append(ream.get("core").loading.template());
          if (overlay) {
            ream.$(".loading-bar").addClass("overlay");
          }
        }
      },
      stop: function () {
        ream.$(".loading-bar").fadeOut(250, function () {
          ream.$(this).remove();
        });
      },
      template: function () {
        return '<div class="loading-bar"><div class="loader"></div></div>';
      },
    },
    showSearch: function (event, target) {
      if (!ream.$("body").hasClass("search-active")) {
        ream.$("body").addClass("search-active");
        ream.get("core").clearSearch();
        setTimeout(function () {
          ream.$('[name="search-value"]')[0].focus();
        }, 150);
      }
    },
    closeSearch: function (event, target) {
      ream.$("body").removeClass("search-active");
      ream.get("core").clearSearch();
    },
    clearSearch: function () {
      ream.$('.search [name="search-value"]').val("");
      ream.$(".search .search-results").html("");
    },
    sendSearch: function (event, target) {
      event.preventDefault();
      var search = function () {
        var value = ream.$('[name="search-value"]').val();
        var searchResults = ream.$(".search-results");
        if (value.length < 3) {
          if (value.length == 0) {
            searchResults.html("");
          }
          return;
        }
        var type = "products";
        if (ream.utils.isDefined(ream.$(".search").attr("data-search-type"))) {
          type = ream.$(".search").attr("data-search-type");
        }
        ream
          .get("ajax")
          .request("send", {
            data:
              "action=getItems&type=" +
              type +
              "&s=" +
              value +
              "&nonce=" +
              window.global_ajax_nonce,
          })
          .done(function (response) {
            if (response.success) {
              searchResults.html("");
              for (var i = 0; i < response.results.length; i++) {
                searchResults.append(
                  '<a href="' +
                    response.results[i].link +
                    '" class="search-results-item" title="' +
                    response.results[i].title +
                    '">' +
                    '<img src="' +
                    response.results[i].image +
                    '" alt="' +
                    response.results[i].title +
                    '">' +
                    '<div class="search-results-text">' +
                    "<h3>" +
                    response.results[i].title +
                    "</h3>" +
                    "<div>" +
                    response.results[i].short_content +
                    "</div>" +
                    "</div>" +
                    "</a>"
                );
              }
            } else {
              searchResults.html(
                '<span class="search-no-results">Sonuç bulunamadı.</span>'
              );
            }
          });
      };
      clearTimeout(ream.$.data(this, "timer"));
      if (event.keyCode != 13) {
        ream.$(this).data("timer", setTimeout(search, 250));
      }
    },
    isScrolledIntoView: function (elem) {
      var docViewTop = ream.$(window).scrollTop();
      var docViewBottom = docViewTop + ream.$(window).height();
      var elemTop = ream.$(elem).offset().top;
      return docViewBottom >= elemTop;
    },
    addFixedProcess: function () {
      if (ream.get("core").hasFixed()) {
        ream.get("core").addFixedClass("show");
      } else {
        ream.get("core").addFixedClass("hide");
      }
    },
    addFixedClass: function (type) {
      if (type == "show") {
        ream.$(defaultSelectors.header).addClass("changed");
        ream.$(defaultSelectors.scrollTop).addClass("changed");
      } else if (type == "hide") {
        ream.$(defaultSelectors.header).removeClass("changed");
        ream.$(defaultSelectors.scrollTop).removeClass("changed");
      }
    },
    hasFixed: function () {
      if (
        ream.$(window).scrollTop() >
        ream.$(defaultSelectors.header).outerHeight()
      ) {
        return !0;
      } else {
        return !1;
      }
    },
    animated: function () {
      ream.$("[data-animation]").on("inview", function (event) {
        var $this = ream.$(this);
        if (!ream.$($this).hasClass("animate__visible")) {
          if (ream.$($this).attr("data-animation-speed")) {
            setTimeout(function () {
              ream
                .$($this)
                .addClass(
                  "animate__visible " + ream.$($this).attr("data-animation")
                );
            }, parseInt(ream.$($this).attr("data-animation-speed")));
          } else {
            ream
              .$($this)
              .addClass(
                "animate__visible " + ream.$($this).attr("data-animation")
              );
          }
        }
      });
    },
    scrollTop: function (value) {
      if (!ream.utils.isNumber(value) || ream.utils.isUndefined(value)) {
        value = 0;
      }
      ream.$("html, body").animate({ scrollTop: value }, 500);
      return !1;
    },
    filled: function (event, element) {
      var addFilledClass = function (element) {
        var value;
        if (!element.is("select")) {
          value = element.val();
        } else {
          value = element.find("option:selected").val();
        }
        if (value !== "") {
          element.addClass("input-filled");
        } else {
          element.removeClass("input-filled");
        }
      };
      if (ream.utils.isDefined(event)) {
        if (ream.$(event.currentTarget).attr("type") == "date") {
          ream.$(event.currentTarget).addClass("input-filled");
        } else {
          addFilledClass(element);
        }
      } else {
        ream.$("[data-filled]").each(function () {
          if (ream.$(this).attr("type") == "date") {
            ream.$(this).addClass("input-filled");
          } else {
            if (ream.$(this).attr("name") == "security_code") {
              ream.$(this).val("");
            } else {
              addFilledClass(ream.$(this));
            }
          }
        });
      }
    },
    createTabs: function () {
      var tabs = ream.$(".tab");
      if (tabs.length == 0) {
        return;
      }
      tabs.each(function () {
        var tabHead = ream.$(this).find("> .tab-head"),
          tabContent = ream.$(this).find("> .tab-content"),
          tabActiveElement = tabHead.find("li.active").eq(0),
          tabActiveElementIndex = 0;
        if (tabActiveElement.length > 0) {
          tabActiveElementIndex = tabActiveElement.index();
        }
        tabHead.find("> ul > li").eq(tabActiveElementIndex).addClass("active");
        tabContent.find("> div").eq(tabActiveElementIndex).addClass("active");
      });
    },
    tabs: function (event, element) {
      if (element.parent().hasClass("active")) {
        return;
      }
      var tab = element.parents(".tab"),
        tabActiveElementIndex = element.parent().index();
      tab.find(".active").removeClass("active");
      tab
        .find(".tab-head > ul > li")
        .eq(tabActiveElementIndex)
        .addClass("active");
      tab
        .find(".tab-content > div")
        .eq(tabActiveElementIndex)
        .addClass("active");
    },
    createIsotope: function () {
      if (ream.$(".isotope").length == 0) {
        return;
      }
      if (ream.$(".isotope").attr("data-isotope-auto") == "false") {
        return;
      }
      ream.$(".isotope").each(function () {
        var init = ream
          .$(this)
          .find(".isotope-grid")
          .isotope({ itemSelector: ".isotope-item" });
        init.imagesLoaded &&
          init.imagesLoaded().progress(function () {
            init.isotope("layout");
          });
        ream
          .$(this)
          .find(".isotope-options")
          .on("click", "> :not(.active) > a", function (event) {
            var filter = ream.$(this).attr("data-filter");
            ream
              .$(this)
              .parent()
              .addClass("active")
              .siblings()
              .removeClass("active");
            init.isotope({
              layoutMode: "fitRows",
              filter: function () {
                var items = ream.$(this);
                if (filter === "all") {
                  return !0;
                }
                var filters = items.attr("data-filters");
                if (filters) {
                  for (var items in (filters = filters.split(","))) {
                    if (filters[items].replace(/\s/g, "") === filter) {
                      return !0;
                    }
                  }
                }
                return !1;
              },
            });
            event.preventDefault();
          });
      });
    },
    createCounterUp: function () {
      if (ream.$("[data-counter]").length == 0) {
        return;
      }
      ream.$("[data-counter]").counterUp({ delay: 12, time: 1000 });
    },
    sticky: function (note, options) {
      var settings = {
        speed: "fast",
        duplicates: !0,
        autoclose: 3000,
        position: "bottom-right",
        class: "",
      };
      if (!note) {
        note = this.html();
      }
      if (options) {
        ream.utils.extend(settings, options);
      } else {
        settings.position = "bottom-left";
      }
      var display = !0;
      var duplicate = "no";
      var uniqID = Math.floor(Math.random() * 99999);
      ream.$(".sticky-note").each(function () {
        if (ream.$(this).html() == note && ream.$(this).is(":visible")) {
          duplicate = "yes";
          if (!settings.duplicates) {
            display = !1;
          }
        }
        if (ream.$(this).attr("id") == uniqID) {
          uniqID = Math.floor(Math.random() * 9999999);
        }
      });
      if (ream.$(".sticky-queue." + settings.position).length == 0) {
        ream
          .$("body")
          .append('<div class="sticky-queue ' + settings.position + '"></div>');
      }
      if (display) {
        ream
          .$(".sticky-queue." + settings.position)
          .prepend('<div class="sticky" id="' + uniqID + '"></div>');
        if (settings.class != "") {
          ream
            .$(".sticky-queue." + settings.position)
            .find("> .sticky")
            .eq(0)
            .addClass(settings.class);
        }
        ream
          .$("#" + uniqID)
          .append(
            '<div class="sticky-note" rel="' + uniqID + '">' + note + "</div>"
          );
        var height = ream.$("#" + uniqID).height();
        ream.$("#" + uniqID).slideDown(settings.speed);
        display = !0;
      }
      if (settings.autoclose) {
        ream
          .$("#" + uniqID)
          .delay(settings.autoclose)
          .fadeOut(settings.speed, function () {
            ream.$(this).remove();
          });
      }
    },
    sendNewsletter: function (event, element) {},
  };
});
ream.add("layout", function () {
  "use strict";
  return {
    loaderTime: 6500,
    events: {
      "click .mobile-navigation-toggle": "toggle",
      "click .volume-up": "volume",
      "click .volume-mute": "volume",
      "click .accordion .item": "accordion",
    },
    initialize: function () {
      this.pageLoader();
      this.toggleScrolling();
      this.carousel();
      this.buildProductGalleries();
      this.buildIntlTelInput();
      this.videoProcess();
      this.shuffle(".shuffle");
      this.shuffle(".shuffle-child", "children");
      this.marquee();
      this.clock();
      this.inView();
      this.addPlatformClass();
      this.imageTooltip();
      ream.ready(function () {
        ream.get("layout").videoLazy();
      });
      ream.ready(function () {
        ream.get("layout").pixalateImageProcess();
      });
      ream.$(document).click(function (event) {
        if (ream.$(".multiple-select-dropdown")) {
          if (
            !ream
              .$(event.target)
              .parents(".form-group")
              .find(".multiple-select-dropdown").length != 0
          ) {
            ream.$(".js-multiple-select-dropdowns").hide();
          }
        }
      });
      ream.$(".js-multiple-select-dropdown").click(function () {
        ream
          .$(this)
          .closest("div")
          .find(".js-multiple-select-dropdowns")
          .slideToggle();
      });
      ream.$(".js-multiple-select-dropdown-check").change(function () {
        if (ream.$(this).prop("checked") == !0) {
          ream
            .$(this)
            .parent("label")
            .addClass("multiple-select-dropdown-options-option-check");
        } else {
          ream
            .$(this)
            .parent("label")
            .removeClass("multiple-select-dropdown-options-option-check");
        }
      });
    },
    videoLazy: function () {
      var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
      if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function (
          entries,
          observer
        ) {
          entries.forEach(function (video) {
            if (video.isIntersecting) {
              for (var source in video.target.children) {
                var videoSource = video.target.children[source];
                if (
                  typeof videoSource.tagName === "string" &&
                  videoSource.tagName === "SOURCE"
                ) {
                  videoSource.src = videoSource.dataset.src;
                }
              }
              video.target.load();
              video.target.classList.remove("lazy");
              lazyVideoObserver.unobserve(video.target);
            }
          });
        });
        lazyVideos.forEach(function (lazyVideo) {
          lazyVideoObserver.observe(lazyVideo);
        });
      }
    },
    imageTooltip: function () {
      var xOffset = 50;
      var yOffset = 30;
      ream
        .$(".screenshot")
        .on("mouseover", function () {
          ream
            .$("body")
            .append(
              '<div class="screenshot-preview"><img src="' +
                ream.$(this).attr("rel") +
                '" alt="" /></div>'
            );
        })
        .on("mousemove", function () {
          ream
            .$(".screenshot-preview")
            .css("top", event.pageY - xOffset + "px")
            .css("left", event.pageX + yOffset + "px");
        })
        .on("mouseout", function () {
          ream.$(".screenshot-preview").remove();
        });
    },
    addPlatformClass: function () {
      ream.$("html").addClass(ream.get("layout").getPlatformOS().toLowerCase());
    },
    getPlatformOS: function () {
      const userAgent = window.navigator.userAgent;
      let os = null;
      const isIOS =
        (/iPad|iPhone|iPod/.test(userAgent) ||
          (/Mac|Mac OS|MacIntel/gi.test(userAgent) &&
            (navigator.maxTouchPoints > 1 || "ontouchend" in document))) &&
        !window.MSStream;
      if (/Macintosh|Mac|Mac OS|MacIntel|MacPPC|Mac68K/gi.test(userAgent)) {
        os = "Mac OS";
      } else if (isIOS) {
        os = "iOS";
      } else if (/'Win32|Win64|Windows|Windows NT|WinCE/gi.test(userAgent)) {
        os = "Windows";
      } else if (/Android/gi.test(userAgent)) {
        os = "Android";
      } else if (/Linux/gi.test(userAgent)) {
        os = "Linux";
      }
      return os;
    },
    accordion: function (event, target) {
      if (target.hasClass("open")) {
        target.removeClass("open");
        return;
      } else {
        ream.$(".accordion .item").removeClass("open");
      }
      target.addClass("open");
    },
    volume: function (event, target) {
      var status = target.attr("class");
      var video = document.querySelector("video");
      if (status == "volume-up") {
        ream.$(".volume-up").hide();
        ream.$(".volume-mute").show();
        video.muted = !1;
      } else {
        ream.$(".volume-up").show();
        ream.$(".volume-mute").hide();
        video.muted = !0;
      }
    },
    inView: function () {
      ream.$("[inview-pending]").on("inview", function (event) {
        var $this = ream.$(this);
        if (!ream.$($this).hasClass("inview")) {
          ream.$($this).removeAttr("inview-pending").addClass("inview");
        }
      });
    },
    clock: function () {
      ream.get("layout").refreshClock("dublin");
      ream.get("layout").refreshClock("istanbul");
    },
    refreshClock: function (location) {
      var currentTime;
      if (location == "dublin") {
        currentTime = new Date().toLocaleString("en-US", {
          timeZone: "Europe/Dublin",
        });
      } else if (location == "istanbul") {
        currentTime = new Date().toLocaleString("en-US", {
          timeZone: "Europe/Istanbul",
        });
      } else {
        return !1;
      }
      var startTime = new Date(currentTime),
        startS = startTime.getSeconds(),
        startM = startTime.getMinutes() * 60 + startS,
        startH = (startTime.getHours() % 12) * 3600 + startM;
      var now = new Date(currentTime),
        diff = ream.get("layout").timeDifference(startTime, now),
        degS = ((startS + diff) / 60) * 360,
        degM = ((startM + diff) / 3600) * 360,
        degH = ((startH + diff) / 43200) * 360;
      ream
        .$(".clock." + location)
        .find(".hour")
        .css(ream.get("layout").rotate(degH));
      ream
        .$(".clock." + location)
        .find(".minute")
        .css(ream.get("layout").rotate(degM));
      ream
        .$(".clock." + location)
        .find(".second")
        .css(ream.get("layout").rotate(degS));
    },
    timeDifference: function (date1, date2) {
      return Math.round(Math.abs(date2.getTime() - date1.getTime()) / 1000);
    },
    rotate: function (deg) {
      return { transform: "rotate(" + deg + "deg)" };
    },
    horizontalLoop: function (items, config) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({
          repeat: config.repeat,
          paused: config.paused,
          defaults: { ease: "none" },
          onReverseComplete: () =>
            tl.totalTime(tl.rawTime() + tl.duration() * 100),
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap =
          config.snap === !1 ? (v) => v : gsap.utils.snap(config.snap || 1),
        totalWidth,
        curX,
        distanceToStart,
        distanceToLoop,
        item,
        i;
      gsap.set(items, {
        xPercent: (i, el) => {
          let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
              gsap.getProperty(el, "xPercent")
          );
          return xPercents[i];
        },
      });
      gsap.set(items, { x: 0 });
      totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
          gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0);
      for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
          distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(
          item,
          {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0
        )
          .fromTo(
            item,
            {
              xPercent: snap(
                ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
              ),
            },
            {
              xPercent: xPercents[i],
              duration:
                (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: !1,
            },
            distanceToLoop / pixelsPerSecond
          )
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 &&
          (index += index > curIndex ? -length : length);
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
          vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = !0;
        return tl.tweenTo(time, vars);
      }
      tl.next = (vars) => toIndex(curIndex + 1, vars);
      tl.previous = (vars) => toIndex(curIndex - 1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.times = times;
      tl.progress(1, !0).progress(0, !0);
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      return tl;
    },
    marquee: function () {
      var element = ream.$(".marquee");
      if (element.length == 0) {
        return;
      }
      element.each(function () {
        ream
          .$(this)
          .find(".marquee-group")
          .clone()
          .appendTo(this)
          .attr("aria-hidden", "true");
      });
      element.each(function () {
        var boxes = gsap.utils.toArray(ream.$(this).find(".marquee-item"));
        var options = { paused: !1, repeat: -1, speed: 0.25 };
        if (ream.$(this).hasClass("marquee-reverse")) {
          options.reversed = !0;
        }
        var loop = ream.get("layout").horizontalLoop(boxes, options);
        ream
          .$(this)
          .on("mouseenter", function () {
            loop.pause();
          })
          .on("mouseleave", function () {
            loop.resume();
          });
      });
    },
    shuffle: function (selector, type = "default") {
      var shuffle = function (text) {
        var shuffledText = "";
        text = text.trim();
        var words = text.split(" ");
        for (var i = 0; i < words.length; i++) {
          var word = words[i];
          var shuffledWord = "";
          while (word.length > 0) {
            var index = Math.floor(Math.random() * word.length);
            shuffledWord += word.charAt(index);
            word = word.slice(0, index) + word.slice(index + 1);
          }
          shuffledText += shuffledWord + " ";
        }
        return shuffledText.trim();
      };
      var shuffleText = function (element, originalText) {
        var repeatShuffle = function (times, index) {
          if (index == 4) {
            element.text(originalText);
            return;
          }
          var elementTextArray = [];
          var randomText = [];
          for (var i = 0; i < originalText.length; i++) {
            elementTextArray.push(originalText.charAt([i]));
          }
          elementTextArray = elementTextArray.join("");
          randomText = shuffle(elementTextArray);
          setTimeout(function () {
            element.text(randomText);
            index++;
            repeatShuffle(times, index);
          }, 45);
        };
        repeatShuffle(element.text().length, 0);
      };
      var elements = ream.$(selector);
      if (type == "children") {
        var childElements = elements.find(".shuffle-child-item");
        ream.$.each(childElements, function (index, item) {
          ream.$(item).attr("data-text", ream.$(item).text());
        });
        elements.mouseenter(function () {
          ream
            .$(this)
            .find(".shuffle-child-item")
            .each(function () {
              shuffleText(ream.$(this), ream.$(this).attr("data-text"));
            });
        });
        elements.on("inview", function (event) {
          var $this = ream.$(this);
          if (!ream.utils.isUndefined($this.attr("inview-pending"))) {
            if (!$this.hasClass("inview")) {
              $this.find(".shuffle-child-item").each(function () {
                shuffleText(ream.$(this), ream.$(this).attr("data-text"));
              });
            }
          }
        });
      } else if (type == "default") {
        ream.$.each(elements, function (index, item) {
          ream.$(item).attr("data-text", ream.$(item).text());
        });
        elements.mouseenter(function () {
          shuffleText(ream.$(this), ream.$(this).attr("data-text"));
        });
      }
    },
    pixalateImageProcess: function () {
      var images = ream.$(".pixel");
      images.each(function () {
        var count = 5,
          val = 5;
        for (var i = 0; i < count; i++) {
          const canvasPrimary = ream
            .get("layout")
            .pixelateImage(ream.$(this)[0], (val += 1));
          ream.get("layout").appendAfter(canvasPrimary, ream.$(this)[0]);
        }
      });
    },
    pixelateImage: function (img, value) {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const size = value / 100,
        w = canvas.width * size,
        h = canvas.height * size;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);
      ctx.msImageSmoothingEnabled = !1;
      ctx.mozImageSmoothingEnabled = !1;
      ctx.webkitImageSmoothingEnabled = !1;
      ctx.imageSmoothingEnabled = !1;
      ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
      return canvas;
    },
    appendAfter: function (newElement, element) {
      element.parentNode.insertBefore(newElement, element.nextSibling);
    },
    videoProcess: function () {
      var element = ream.$(".section-home-video video");
      if (element.length == 0) {
        return;
      }
      gsap.registerPlugin(ScrollTrigger);
      var videoProcess = gsap.timeline({
        scrollTrigger: {
          trigger: ".site-main",
          start: "0%",
          end: "15%",
          scrub: 1,
        },
        padding: 0,
      });
      videoProcess.from(".section-home-video video", { width: "75%" });
      videoProcess.to(".section-home-video video", { width: "100%" });
    },
    setCookie: function (name, value, minutes) {
      var expires = "";
      if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + minutes * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookie: function (name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    },
    pageLoader: function () {
      if (ream.get("layout").getCookie("pageLoader")) {
        ream.get("layout").loaderTime = 500;
      }
      ream.ready(function () {
        ream.$("body").addClass("is-ready");
        ream.get("layout").setCookie("pageLoader", !0, 60);
        if (ream.$(".page-loader").length != 0) {
          setTimeout(function () {
            ream.$(".page-loader").remove();
          }, 500);
        }
      }, ream.get("layout").loaderTime);
      ream.$("a").on("click", function (event) {
        if (
          !ream.$(event.currentTarget).hasClass("no-loader") &&
          ream.$(event.currentTarget).attr("target") != "_blank"
        ) {
          event.preventDefault();
          var goTo = ream.$(this).attr("href"),
            disallowedLinks = ["", "#", "javascript:void(0);"];
          if (disallowedLinks.indexOf(goTo) == -1) {
            setTimeout(function () {
              window.location = goTo;
            }, 500);
            ream.$("body").addClass("is-loading");
            ream.$("body").removeClass("is-ready");
          }
        }
      });
    },
    remCalc: function (px, base = 16) {
      let tempPx = px;
      if (typeof px === "string" || px instanceof String) {
        tempPx = tempPx.replace("px", "");
      }
      tempPx = parseInt(tempPx);
      return (1 / base) * tempPx + "rem";
    },
    isContinueToggle: !0,
    toggle: function (event, target) {
      if (!ream.get("layout").isContinueToggle) {
        return;
      }
      var height = ream.$(".mobile-navigation-menu-inner-height").outerHeight();
      if (!ream.$("body").hasClass("open-mobile-navigation-menu")) {
        ream.get("layout").isContinueToggle = !1;
        ream.$("body").addClass("open-mobile-navigation-menu");
        setTimeout(function () {
          ream.get("layout").isContinueToggle = !0;
          ream.$("body").addClass("open-mobile-navigation-menu-delay");
        }, 800);
      } else {
        ream.$("body").removeClass("open-mobile-navigation-menu");
        setTimeout(function () {
          ream.$("body").removeClass("open-mobile-navigation-menu-delay");
        }, 600);
      }
    },
    toggleScrolling: function () {
      const body = document.body;
      const scrollUp = "scroll-up";
      const scrollDown = "scroll-down";
      const triggerMenu = document.querySelector("#header");
      let lastScroll = 0;
      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll < 300) {
          body.classList.remove(scrollUp);
          return;
        }
        if (
          currentScroll > lastScroll &&
          !body.classList.contains(scrollDown)
        ) {
          body.classList.remove(scrollUp);
          body.classList.add(scrollDown);
        } else if (
          currentScroll < lastScroll &&
          body.classList.contains(scrollDown)
        ) {
          body.classList.remove(scrollDown);
          body.classList.add(scrollUp);
        }
        lastScroll = currentScroll;
      });
    },
    carousel: function () {
      if (ream.$(".carousel").length == 0) {
        return;
      }
      if (ream.$(".products-carousel").length != 0) {
        var upSellsSplide = new Splide(".products-carousel", {
          type: "slide",
          rewind: !0,
          perPage: 3,
          arrows: !0,
          pagination: !1,
          gap: "1.875rem",
          breakpoints: {
            640: {
              autoplay: "play",
              perPage: 1.2,
              updateOnMove: !0,
              focus: 0,
              trimSpace: !1,
            },
          },
        });
        upSellsSplide.mount();
      }
      if (ream.$(".section-about-images .carousel").length != 0) {
        var aboutImages = new Splide(".section-about-images .carousel", {
          type: "slide",
          rewind: !0,
          autoWidth: !0,
          focus: 0,
          omitEnd: !0,
          perPage: 2,
          arrows: !1,
          pagination: !1,
          gap: "1.5rem",
          breakpoints: {
            640: {
              autoplay: "play",
              perPage: 2,
              updateOnMove: !0,
              focus: 0,
              trimSpace: !1,
            },
          },
        });
        aboutImages.mount();
      }
      if (ream.$(".section-about-testimonials .carousel").length != 0) {
        var aboutTestimonials = new Splide(
          ".section-about-testimonials .carousel",
          {
            type: "loop",
            rewind: !0,
            perPage: 1,
            arrows: !1,
            pagination: !1,
            gap: "1.5rem",
          }
        );
        aboutTestimonials.mount();
        var slideNumber = ream.$(
          ".section-about-testimonials-carousel-per-page > span:eq(0)"
        );
        var slideTotalNumber = ream.$(
          ".section-about-testimonials-carousel-per-page > span:eq(1)"
        );
        slideNumber.html("1");
        slideTotalNumber.html(aboutTestimonials.length);
        aboutTestimonials.on(
          "moved",
          function (newIndex, prevIndex, destIndex) {
            slideNumber.html(newIndex + 1);
          }
        );
        ream
          .$(document)
          .on("click", ".section-about-testimonial-arrow-prev", function () {
            aboutTestimonials.go("<");
          });
        ream
          .$(document)
          .on("click", ".section-about-testimonial-arrow-next", function () {
            aboutTestimonials.go(">");
          });
      }
      console.log("Carousel");
    },
    buildProductGalleries: function () {
      if (ream.$("body.single-product").length != 0) {
        var thumbs = ream.$("[data-thumb]").find("> a");
        thumbs.attr("data-fancybox", "product-gallery");
        Fancybox.bind('[data-fancybox="product-gallery"]');
      }
    },
    buildIntlTelInput: function () {
      if (ream.$('input[name="phone"]').length == 0) {
        return;
      }
      var initPhoneDisplay = function (input) {
        var iti = window.intlTelInput(input, {
          initialCountry: "auto",
          separateDialCode: !0,
          geoIpLookup: function (success, failure) {
            fetch("https://geoip.ideasoftapp.com")
              .then(
                (response) => {
                  if (response.ok) {
                    return response.json();
                  }
                  throw new Error("Request failed!");
                },
                (networkError) => {
                  console.log(networkError.message);
                }
              )
              .then((jsonResponse) => {
                var countryCode =
                  jsonResponse && jsonResponse.country_code
                    ? jsonResponse.country_code
                    : "tr";
                success(countryCode);
              });
          },
          utilsScript:
            "https://LriI8eR13ZRE.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js",
        });
        iti.promise.then(function () {
          var selectedCountry = iti.getSelectedCountryData();
          var dialCode = selectedCountry.dialCode;
          var maskNumber = intlTelInputUtils.getExampleNumber(
            selectedCountry.iso2,
            !0,
            intlTelInputUtils.numberFormat.INTERNATIONAL
          );
          var mask = maskNumber.replace(/[0-9+]/gi, "0");
          ream.$(input).mask(mask);
          ream.$(input).on("countrychange", function () {
            ream.$(input).val("");
            selectedCountry = iti.getSelectedCountryData();
            dialCode = selectedCountry.dialCode;
            maskNumber = intlTelInputUtils.getExampleNumber(
              selectedCountry.iso2,
              !0,
              intlTelInputUtils.numberFormat.INTERNATIONAL
            );
            maskNumber = intlTelInputUtils.formatNumber(
              maskNumber,
              selectedCountry.iso2,
              2
            );
            maskNumber = maskNumber.replace("+" + dialCode + " ", "");
            var mask = maskNumber.replace(/[0-9+]/gi, "0");
            ream.$(input).attr("placeholder", maskNumber);
            ream.$(input).mask(mask);
          });
        });
        ream.$(input).on("blur", function () {
          var fullPhone = iti.getNumber();
          var parentForm = ream.$(this).parents("form");
          if (parentForm.find('input[name="fullphone"]').length == 0) {
            parentForm.prepend(
              '<input type="hidden" name="fullphone" value="' +
                fullPhone +
                '" />'
            );
          } else {
            parentForm.find('input[name="fullphone"]').val(fullPhone);
          }
        });
      };
      document.querySelectorAll('input[name="phone"]').forEach((element) => {
        initPhoneDisplay(element);
      });
    },
  };
});
ream.add("form", function () {
  "use strict";
  return {
    events: {
      "submit #commentform": "sendComments",
      "submit [data-action=send-contactus]": "sendContact",
    },
    initialize: function () {
      this.setCommentFormAttr();
    },
    setCommentFormAttr: function () {
      if (ream.$("#commentform").length != 1) {
        return;
      }
      ream
        .$("#commentform")
        .attr("data-prevent-default", "false")
        .attr("data-error-scroll-top", "false");
    },
    sendComments: function (event, element) {
      var isValidate = ream
        .get("validate")
        .is(element, {
          rules: { comment: { required: !0 }, author: { required: !0 } },
          messages: {
            comment: {
              required: 'Lütfen "Yorumunuz" alanını boş bırakmayınız.',
            },
            author: { required: 'Lütfen "İsiminiz" alanını boş bırakmayınız.' },
          },
        });
      if (!isValidate) {
        event.preventDefault();
      } else {
        ream.utils.wait(function () {
          ream.$(element.find('[type="submit"]')).attr("disabled", !0);
        }, 13);
      }
    },
    sendContact: function (event, element) {
      var isValidate = ream
        .get("validate")
        .is(element, {
          rules: {
            name: { required: !0 },
            email: { email: !0 },
            phone: { specialPhone: !0 },
            company_name: { required: !0 },
            use_personal_data_agreement: { required: !0 },
            security_code: { required: !0, minlength: 5 },
          },
          messages: {
            name: { required: 'Do not leave your "Name" field blank.' },
            company_name: {
              required: 'Do not leave your "Company Name" field blank.',
            },
            email: { required: 'Please enter a valid "E-Mail Address".' },
            use_personal_data_agreement: {
              required: 'Do not leave your "Privacy Policy" field blank',
            },
            security_code: {
              required: "Do not leave your Security Code field blank.",
              minlength: "Security Code must be at least 5 characters.",
            },
          },
        });
      if (!isValidate) {
        event.preventDefault();
      } else {
        ream.utils.wait(function () {
          ream
            .$(element.find('[type="submit"]'))
            .attr("disabled", !0)
            .addClass("button-loading");
        }, 13);
      }
    },
  };
});
ream.add("woocommerce", function () {
  "use strict";
  return {
    events: {},
    initialize: function () {
      if (ream.$(".woocommerce-page").length == 0) {
        return;
      }
    },
  };
});
