!(function(t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.diagcess = e() : t.diagcess = e();
})(this, () => (() => {
  "use strict";
  var t = { 38: (t2, e2) => {
    Object.defineProperty(e2, "__esModule", { value: true }), e2.CustomEvent = e2.EventType = e2.KeyCodes = void 0, (function(t3) {
      t3[t3.RETURN = 13] = "RETURN", t3[t3.ENTER = 13] = "ENTER", t3[t3.ESC = 27] = "ESC", t3[t3.SPACE = 32] = "SPACE", t3[t3.LEFT = 37] = "LEFT", t3[t3.UP = 38] = "UP", t3[t3.RIGHT = 39] = "RIGHT", t3[t3.DOWN = 40] = "DOWN", t3[t3.A = 65] = "A", t3[t3.B = 66] = "B", t3[t3.C = 67] = "C", t3[t3.D = 68] = "D", t3[t3.E = 69] = "E", t3[t3.F = 70] = "F", t3[t3.G = 71] = "G", t3[t3.H = 72] = "H", t3[t3.I = 73] = "I", t3[t3.J = 74] = "J", t3[t3.K = 75] = "K", t3[t3.L = 76] = "L", t3[t3.M = 77] = "M", t3[t3.N = 78] = "N", t3[t3.O = 79] = "O", t3[t3.P = 80] = "P", t3[t3.Q = 81] = "Q", t3[t3.R = 82] = "R", t3[t3.S = 83] = "S", t3[t3.T = 84] = "T", t3[t3.U = 85] = "U", t3[t3.V = 86] = "V", t3[t3.W = 87] = "W", t3[t3.X = 88] = "X", t3[t3.Y = 89] = "Y", t3[t3.Z = 90] = "Z", t3[t3.COMMA = 188] = "COMMA", t3[t3.PERIOD = 190] = "PERIOD";
    })(e2.KeyCodes || (e2.KeyCodes = {})), (function(t3) {
      t3.CLICK = "click", t3.DBLCLICK = "dblclick", t3.MOUSEDOWN = "mousedown", t3.MOUSEUP = "mouseup", t3.MOUSEOVER = "mouseover", t3.MOUSEOUT = "mouseout", t3.MOUSEMOVE = "mousemove", t3.SELECTSTART = "selectstart", t3.KEYPRESS = "keypress", t3.KEYDOWN = "keydown", t3.KEYUP = "keyup", t3.TOUCHSTART = "touchstart", t3.TOUCHMOVE = "touchmove", t3.TOUCHEND = "touchend", t3.TOUCHCANCEL = "touchcancel";
    })(e2.EventType || (e2.EventType = {}));
    var n2 = (function() {
      function t3(t4, e3, n3) {
        this.src = t4, this.type = e3, this.callback = n3, this.src = t4, this.type = e3, this.callback = n3;
      }
      return t3.prototype.add = function() {
        this.src.addEventListener(this.type, this.callback);
      }, t3.prototype.remove = function() {
        this.src.removeEventListener(this.type, this.callback);
      }, t3;
    })();
    e2.CustomEvent = n2;
  }, 108: function(t2, e2, n2) {
    var o2 = this && this.__values || function(t3) {
      var e3 = "function" == typeof Symbol && Symbol.iterator, n3 = e3 && t3[e3], o3 = 0;
      if (n3) return n3.call(t3);
      if (t3 && "number" == typeof t3.length) return { next: function() {
        return t3 && o3 >= t3.length && (t3 = void 0), { value: t3 && t3[o3++], done: !t3 };
      } };
      throw new TypeError(e3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(e2, "__esModule", { value: true }), e2.ChemObj = void 0;
    var r = n2(502), i = ["circular"], c = (function() {
      function t3(t4, e3) {
        var n3, c2;
        this.annotation_ = t4, this.diagram_ = e3, this.drawnElements = null, this.attributes = /* @__PURE__ */ new Map(), this.up = null, this.down = [], this.link = false, this.drawn_ = null, this.id_ = this.getId_(), this.parent_ = this.getParent_(), this.position = this.getPosition_();
        try {
          for (var a = o2(i), s = a.next(); !s.done; s = a.next()) {
            var l = s.value, u = r.getAttribute(t4, l);
            u && this.attributes.set(l, u);
          }
        } catch (t5) {
          n3 = { error: t5 };
        } finally {
          try {
            s && !s.done && (c2 = a.return) && c2.call(a);
          } finally {
            if (n3) throw n3.error;
          }
        }
      }
      return t3.prototype.getAnnotation = function() {
        return this.annotation_;
      }, t3.prototype.getDiagram = function() {
        return this.diagram_;
      }, t3.prototype.getId = function() {
        return this.id_;
      }, t3.prototype.setDrawnElement = function(t4) {
        this.drawn_ = t4;
      }, t3.prototype.getDrawnElement = function() {
        return this.drawn_;
      }, t3.prototype.getDrawnElements = function() {
        return this.drawnElements || (this.drawnElements = [], this.drawn_ && this.drawnElements.push(this.drawn_)), this.drawnElements;
      }, t3.prototype.complete = function() {
        if (this.down.length && this.down.sort(function(t5, e3) {
          return !t5.position && e3.position ? 1 : t5.position - e3.position;
        }), this.parent_) {
          var t4 = this.getDiagram().get(this.parent_);
          this.up = t4, t4.down.push(this);
        }
      }, t3.prototype.getParent = function() {
        return this.parent_;
      }, t3.prototype.getKey = function() {
        return this.id_ + this.parent_;
      }, t3.prototype.getUp = function() {
        return this.up ? [this.up] : [];
      }, t3.prototype.getDown = function() {
        return this.down;
      }, t3.prototype.getRight = function() {
        if (!this.up) return [];
        var t4 = this.up.getDown(), e3 = t4.indexOf(this);
        if (t4.length > e3 + 1) {
          var n3 = t4[e3 + 1];
          return n3.position ? [n3] : [];
        }
        return this.up.attributes.get("circular") ? [t4[0]] : [];
      }, t3.prototype.getLeft = function() {
        if (!this.up) return [];
        var t4 = this.up.getDown(), e3 = t4.indexOf(this);
        if (e3 > 0) {
          var n3 = t4[e3 - 1];
          return n3.position ? [n3] : [];
        }
        return this.up.attributes.get("circular") ? [t4[t4.length - 1]] : [];
      }, t3.prototype.getId_ = function() {
        var t4 = this.getAnnotation().firstElementChild;
        return t4 ? t4.textContent : "";
      }, t3.prototype.getParent_ = function() {
        var t4 = this.getAnnotation().querySelector("parents > *");
        return t4 ? r.getTextContent(t4) : "";
      }, t3.prototype.getPosition_ = function() {
        return parseInt(r.getTextContent(this.getAnnotation().querySelector("position")), 10);
      }, t3;
    })();
    e2.ChemObj = c;
  }, 187: (t2, e2) => {
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Diagram = void 0;
    var n2 = (function() {
      function t3(t4) {
        this.languages = t4, this.diagram_ = {};
      }
      return t3.prototype.set = function(t4, e3) {
        this.diagram_[t4] = e3;
      }, t3.prototype.get = function(t4) {
        return this.diagram_[t4];
      }, t3.prototype.forEach = function(t4) {
        for (var e3 in this.diagram_) t4.call(this, this.diagram_[e3]);
      }, t3.prototype.find = function(t4) {
        for (var e3 in this.diagram_) {
          var n3 = this.diagram_[e3];
          if (t4.call(this, n3)) return n3;
        }
        return null;
      }, t3.prototype.translate = function(t4) {
        return this.languages ? this.languages.translate(t4) : t4;
      }, t3.prototype.nextLanguage = function() {
        return this.languages ? (this.languages.nextLanguage(), this.languages.active) : null;
      }, t3;
    })();
    e2.Diagram = n2;
  }, 196: (t2, e2, n2) => {
    var o2;
    Object.defineProperty(e2, "__esModule", { value: true }), e2.rewriteUseElements = e2.rewriteTransformations = e2.SelectedElements = e2.SelectedTypes = void 0;
    var r, i = n2(502), c = ["text", "polyline", "line", "rect", "polygon", "use", "circle", "path"], a = ["stroke", "stroke-width", "color", "fill", "background-color", "transform"];
    function s(t3) {
      var e3 = t3, n3 = [];
      do {
        var o3 = e3.getAttribute("transform");
        o3 && n3.unshift(o3), e3 = e3.parentNode;
      } while ("svg" !== e3.tagName);
      return t3.setAttribute("transform", n3.join(" ")), t3;
    }
    function l(t3) {
      var e3 = document.createElementNS("http://www.w3.org/2000/svg", "g"), n3 = t3.getAttribute("id");
      return n3 && (e3.setAttribute("id", n3), t3.removeAttribute("id")), t3.parentNode.replaceChild(e3, t3), e3.appendChild(t3), e3;
    }
    function u(t3) {
      var e3 = t3;
      do {
        (e3 = e3.parentNode).removeAttribute("transform");
      } while ("svg" !== e3.tagName);
    }
    !(function(t3) {
      t3.DEFS = "defs", t3.SUB_DEFS = "subDefs", t3.SUB_SVG = "subSvg";
    })(r = e2.SelectedTypes || (e2.SelectedTypes = {})), e2.SelectedElements = ((o2 = {})[r.DEFS] = [], o2[r.SUB_DEFS] = [], o2[r.SUB_SVG] = [], o2), e2.rewriteTransformations = function(t3) {
      var n3 = i.toArray(t3.querySelectorAll(c.join(",")));
      e2.SelectedElements.SUB_SVG = i.toArray(t3.querySelectorAll("svg svg"));
      var o3 = i.toArray(t3.querySelectorAll(c.map(function(t4) {
        return "svg svg " + t4;
      }).join(",")));
      e2.SelectedElements.SUB_DEFS = i.toArray(t3.querySelectorAll(c.map(function(t4) {
        return "svg defs " + t4;
      }).join(",")));
      var r2 = n3.filter(function(t4) {
        return !o3.includes(t4) && !e2.SelectedElements.SUB_DEFS.includes(t4);
      });
      return (function(t4, e3) {
        e3.forEach(s), t4.forEach(s), e3.forEach(u), t4.forEach(u), e3.forEach(function(t5) {
          var e4 = l(t5), n4 = t5.getAttribute("transform");
          n4 && (e4.setAttribute("transform", n4), t5.removeAttribute("transform"));
        }), t4.filter(function(t5) {
          return t5.hasAttribute("id");
        }).forEach(l);
      })(r2, e2.SelectedElements.SUB_SVG), r2;
    }, e2.rewriteUseElements = function(t3) {
      var n3 = a.map(function(t4) {
        return "".concat(t4, ":inherit;");
      }).join(" ");
      e2.SelectedElements.SUB_DEFS.forEach(function(t4) {
        var o3, r2 = null === (o3 = t4.parentElement) || void 0 === o3 ? void 0 : o3.parentElement;
        r2 && e2.SelectedElements.SUB_SVG.includes(r2) || t4.setAttribute("style", n3);
      });
    };
  }, 216: function(t2, e2, n2) {
    var o2 = this && this.__values || function(t3) {
      var e3 = "function" == typeof Symbol && Symbol.iterator, n3 = e3 && t3[e3], o3 = 0;
      if (n3) return n3.call(t3);
      if (t3 && "number" == typeof t3.length) return { next: function() {
        return t3 && o3 >= t3.length && (t3 = void 0), { value: t3 && t3[o3++], done: !t3 };
      } };
      throw new TypeError(e3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(e2, "__esModule", { value: true }), e2.ControllerFactory = void 0;
    var r = n2(225), i = n2(226), c = n2(778), a = n2(853), s = n2(881), l = n2(234), u = n2(875);
    !(function(t3) {
      var e3, n3 = ((e3 = {})[r.magnifiers.SIMPLE] = function(t4) {
        return new a.SimpleMagnifier(t4);
      }, e3[r.magnifiers.STEP] = function(t4) {
        return new a.StepMagnifier(t4);
      }, e3[r.magnifiers.DUMMY] = function(t4) {
        return new a.DummyMagnifier(t4);
      }, e3[r.colors.MONOCHROME] = function(t4) {
        return new i.Monochrome(t4);
      }, e3[r.colors.CONTRAST] = function(t4) {
        return new i.Contrast(t4);
      }, e3[r.speech.DETAIL] = function(t4) {
        return new u.Detail(t4);
      }, e3[r.speech.EXPERT] = function(t4) {
        return new u.Expert(t4);
      }, e3[r.speech.LANGUAGE] = function(t4) {
        return new u.Language(t4);
      }, e3[r.regions.SPEECH] = function(t4) {
        return new s.Speech(t4);
      }, e3[r.regions.SUBTITLE] = function(t4) {
        return new s.Subtitle(t4);
      }, e3[r.explorers.KEY] = function(t4) {
        return new c.KeyExplorer(t4);
      }, e3[r.explorers.MENU] = function(t4) {
        return new c.MenuExplorer(t4);
      }, e3[r.sound.OSCILLATOR] = function(t4) {
        return new l.Oscillator(t4);
      }, e3[r.sound.VOICING] = function(t4) {
        return new l.Voicing(t4);
      }, e3);
      t3.get = function(t4) {
        var e4, i2, c2 = [], a2 = [].concat(r.options.magnifiers, r.options.regions, r.options.colors, r.options.speech, r.options.sound, r.options.explorers);
        try {
          for (var s2 = o2(a2), l2 = s2.next(); !l2.done; l2 = s2.next()) {
            var u2 = l2.value, p = n3[u2];
            if (p) {
              var h = p(t4);
              c2.push(h);
            }
          }
        } catch (t5) {
          e4 = { error: t5 };
        } finally {
          try {
            l2 && !l2.done && (i2 = s2.return) && i2.call(s2);
          } finally {
            if (e4) throw e4.error;
          }
        }
        return c2;
      };
    })(e2.ControllerFactory || (e2.ControllerFactory = {}));
  }, 221: function(t2, e2, n2) {
    var o2 = this && this.__values || function(t3) {
      var e3 = "function" == typeof Symbol && Symbol.iterator, n3 = e3 && t3[e3], o3 = 0;
      if (n3) return n3.call(t3);
      if (t3 && "number" == typeof t3.length) return { next: function() {
        return t3 && o3 >= t3.length && (t3 = void 0), { value: t3 && t3[o3++], done: !t3 };
      } };
      throw new TypeError(e3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(e2, "__esModule", { value: true }), e2.AbstractController = void 0;
    var r = n2(38), i = (function() {
      function t3(t4) {
        this.container = t4, this._active = false, this.internalEvents_ = [], this.customEvents();
      }
      return Object.defineProperty(t3.prototype, "active", { get: function() {
        return this._active;
      }, set: function(t4) {
        this._active = t4;
      }, enumerable: false, configurable: true }), t3.prototype.activate = function() {
        this.active = true, this.addEvents();
      }, t3.prototype.deactivate = function() {
        this.removeEvents(), this.active = false;
      }, t3.prototype.registerEvent = function(t4, e3, n3) {
        this.internalEvents_.push(new r.CustomEvent(t4, e3, n3));
      }, t3.prototype.addEvents = function() {
        var t4, e3;
        try {
          for (var n3 = o2(this.internalEvents_), r2 = n3.next(); !r2.done; r2 = n3.next()) {
            r2.value.add();
          }
        } catch (e4) {
          t4 = { error: e4 };
        } finally {
          try {
            r2 && !r2.done && (e3 = n3.return) && e3.call(n3);
          } finally {
            if (t4) throw t4.error;
          }
        }
      }, t3.prototype.removeEvents = function() {
        var t4, e3;
        try {
          for (var n3 = o2(this.internalEvents_), r2 = n3.next(); !r2.done; r2 = n3.next()) {
            r2.value.remove();
          }
        } catch (e4) {
          t4 = { error: e4 };
        } finally {
          try {
            r2 && !r2.done && (e3 = n3.return) && e3.call(n3);
          } finally {
            if (t4) throw t4.error;
          }
        }
      }, t3;
    })();
    e2.AbstractController = i;
  }, 225: (t2, e2) => {
    var n2, o2, r, i, c, a;
    Object.defineProperty(e2, "__esModule", { value: true }), e2.config = e2.options = e2.sound = e2.speech = e2.colors = e2.regions = e2.magnifiers = e2.explorers = e2.version = void 0, e2.version = "1.3.3", (function(t3) {
      t3.KEY = "key", t3.MENU = "menu";
    })(n2 = e2.explorers || (e2.explorers = {})), (function(t3) {
      t3.DUMMY = "dummy", t3.STEP = "step", t3.SIMPLE = "simple";
    })(o2 = e2.magnifiers || (e2.magnifiers = {})), (function(t3) {
      t3.SUBTITLE = "subtitle", t3.SPEECH = "speech";
    })(r = e2.regions || (e2.regions = {})), (function(t3) {
      t3.MONOCHROME = "monochrome", t3.CONTRAST = "contrast";
    })(i = e2.colors || (e2.colors = {})), (function(t3) {
      t3.LANGUAGE = "language", t3.EXPERT = "expert", t3.DETAIL = "detail";
    })(c = e2.speech || (e2.speech = {})), (function(t3) {
      t3.OSCILLATOR = "oscillator", t3.VOICING = "voicing";
    })(a = e2.sound || (e2.sound = {})), e2.options = { explorers: [n2.KEY, n2.MENU], magnifiers: [o2.STEP, o2.SIMPLE, o2.DUMMY], regions: [r.SUBTITLE, r.SPEECH], colors: [i.MONOCHROME, i.CONTRAST], speech: [c.LANGUAGE, c.EXPERT, c.DETAIL], sound: [a.OSCILLATOR, a.VOICING] }, e2.config = { MSG_VISIBLE: true, MAG_ACTIVE: o2.STEP, SONIFY: false, VOICING: true, VOICE_LANG: "en", ACTIVE_LANG: "en", SUB_VISIBLE: false, SUBTITLE: null, POLYLINE: false };
  }, 226: function(t2, e2, n2) {
    var o2, r = this && this.__extends || (o2 = function(t3, e3) {
      return o2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e4) {
        t4.__proto__ = e4;
      } || function(t4, e4) {
        for (var n3 in e4) Object.prototype.hasOwnProperty.call(e4, n3) && (t4[n3] = e4[n3]);
      }, o2(t3, e3);
    }, function(t3, e3) {
      if ("function" != typeof e3 && null !== e3) throw new TypeError("Class extends value " + String(e3) + " is not a constructor or null");
      function n3() {
        this.constructor = t3;
      }
      o2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
    });
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Contrast = e2.Monochrome = e2.AbstractColor = void 0;
    var i = n2(854), c = n2(38), a = n2(225), s = (function(t3) {
      function e3() {
        return null !== t3 && t3.apply(this, arguments) || this;
      }
      return r(e3, t3), e3.prototype.update = function() {
      }, e3;
    })(n2(221).AbstractController);
    e2.AbstractColor = s;
    var l = (function(t3) {
      function e3() {
        var e4 = null !== t3 && t3.apply(this, arguments) || this;
        return e4.name = a.colors.MONOCHROME, e4;
      }
      return r(e3, t3), e3.prototype.customEvents = function() {
        var t4 = this;
        this.registerEvent(this.container.molecule.node, c.EventType.KEYDOWN, function(e4) {
          return e4.keyCode === c.KeyCodes.T && i.toggleMonochrome(t4.container.molecule.svg), e4.stopPropagation(), false;
        });
      }, e3;
    })(s);
    e2.Monochrome = l;
    var u = (function(t3) {
      function e3() {
        var e4 = null !== t3 && t3.apply(this, arguments) || this;
        return e4.name = a.colors.CONTRAST, e4.scheme = 0, e4;
      }
      return r(e3, t3), e3.prototype.customEvents = function() {
        var t4 = this;
        this.registerEvent(this.container.molecule.node, c.EventType.KEYDOWN, function(e4) {
          return e4.keyCode === c.KeyCodes.C && t4.container.replaceStyles(i.pickScheme(t4.container.molecule, ++t4.scheme)), e4.stopPropagation(), false;
        });
      }, e3;
    })(s);
    e2.Contrast = u;
  }, 234: function(t2, e2, n2) {
    var o2, r = this && this.__extends || (o2 = function(t3, e3) {
      return o2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e4) {
        t4.__proto__ = e4;
      } || function(t4, e4) {
        for (var n3 in e4) Object.prototype.hasOwnProperty.call(e4, n3) && (t4[n3] = e4[n3]);
      }, o2(t3, e3);
    }, function(t3, e3) {
      if ("function" != typeof e3 && null !== e3) throw new TypeError("Class extends value " + String(e3) + " is not a constructor or null");
      function n3() {
        this.constructor = t3;
      }
      o2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
    });
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Voicing = e2.Oscillator = e2.AbstractSoundController = void 0;
    var i = n2(502), c = n2(38), a = n2(225), s = n2(221), l = n2(899), u = (function(t3) {
      function e3() {
        return null !== t3 && t3.apply(this, arguments) || this;
      }
      return r(e3, t3), e3.prototype.activate = function() {
        t3.prototype.activate.call(this), this.active = this.on();
      }, e3.prototype.deactivate = function() {
        this.stop(), t3.prototype.deactivate.call(this);
      }, e3.prototype.update = function() {
        this.stop();
      }, e3.prototype.getStopKey = function() {
        return c.KeyCodes.K;
      }, e3.prototype.customEvents = function() {
        var t4 = this;
        this.registerEvent(this.container.molecule.node, c.EventType.KEYDOWN, function(e4) {
          return e4.keyCode === t4.getActivationKey() && (t4.active = !t4.active, t4.toggle(t4.active), t4.active ? t4.update() : t4.stop()), e4.keyCode === t4.getRepeatKey() && t4.update(), e4.keyCode === t4.getStopKey() && t4.stop(), e4.stopPropagation(), false;
        });
      }, e3;
    })(s.AbstractController);
    e2.AbstractSoundController = u;
    var p = (function(t3) {
      function e3() {
        var e4 = null !== t3 && t3.apply(this, arguments) || this;
        return e4.name = a.sound.OSCILLATOR, e4.currentOscillators = [], e4;
      }
      return r(e3, t3), e3.prototype.update = function() {
        t3.prototype.update.call(this), this.currentOscillators = l.Sonify.sonify(this.container.activeElement);
      }, e3.prototype.on = function() {
        return a.config.SONIFY;
      }, e3.prototype.toggle = function(t4) {
        a.config.SONIFY = t4;
      }, e3.prototype.stop = function() {
        this.currentOscillators.forEach(function(t4) {
          return t4.stop();
        });
      }, e3.prototype.getActivationKey = function() {
        return c.KeyCodes.O;
      }, e3.prototype.getRepeatKey = function() {
        return c.KeyCodes.P;
      }, e3;
    })(u);
    e2.Oscillator = p;
    var h = (function(t3) {
      function e3() {
        var e4 = null !== t3 && t3.apply(this, arguments) || this;
        return e4.name = a.sound.VOICING, e4.languages = null, e4;
      }
      return r(e3, t3), e3.prototype.update = function() {
        t3.prototype.update.call(this);
        var e4 = new SpeechSynthesisUtterance(this.container.activeElement.getSpeech());
        e4.lang = this.languages ? this.languages.active : a.config.VOICE_LANG, speechSynthesis.speak(e4);
      }, e3.prototype.activate = function() {
        i.hasSpeech() && (this.languages = this.container.molecule.cmlStructure.getRootElement().getDiagram().languages, this.languages && this.languages.updateActive(), t3.prototype.activate.call(this));
      }, e3.prototype.getActivationKey = function() {
        return c.KeyCodes.Y;
      }, e3.prototype.getRepeatKey = function() {
        return c.KeyCodes.U;
      }, e3.prototype.on = function() {
        return a.config.VOICING;
      }, e3.prototype.toggle = function(t4) {
        a.config.VOICING = t4;
      }, e3.prototype.stop = function() {
        i.hasSpeech() && speechSynthesis.cancel();
      }, e3;
    })(u);
    e2.Voicing = h;
  }, 270: function(t2, e2, n2) {
    var o2, r = this && this.__extends || (o2 = function(t3, e3) {
      return o2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e4) {
        t4.__proto__ = e4;
      } || function(t4, e4) {
        for (var n3 in e4) Object.prototype.hasOwnProperty.call(e4, n3) && (t4[n3] = e4[n3]);
      }, o2(t3, e3);
    }, function(t3, e3) {
      if ("function" != typeof e3 && null !== e3) throw new TypeError("Class extends value " + String(e3) + " is not a constructor or null");
      function n3() {
        this.constructor = t3;
      }
      o2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
    }), i = this && this.__values || function(t3) {
      var e3 = "function" == typeof Symbol && Symbol.iterator, n3 = e3 && t3[e3], o3 = 0;
      if (n3) return n3.call(t3);
      if (t3 && "number" == typeof t3.length) return { next: function() {
        return t3 && o3 >= t3.length && (t3 = void 0), { value: t3 && t3[o3++], done: !t3 };
      } };
      throw new TypeError(e3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(e2, "__esModule", { value: true }), e2.AtomSet = void 0;
    var c = n2(502), a = (function(t3) {
      function e3() {
        return null !== t3 && t3.apply(this, arguments) || this;
      }
      return r(e3, t3), e3.prototype.getDrawnElements = function() {
        var t4, e4, n3 = this;
        if (this.drawnElements) return this.drawnElements;
        this.drawnElements = [];
        var o3 = {}, r2 = function(t5) {
          o3[t5.id] || (o3[t5.id] = true, n3.drawnElements.push(t5));
        }, a2 = this.getDrawnElement();
        a2 && r2(a2);
        try {
          for (var s = i(this.getDown()), l = s.next(); !l.done; l = s.next()) {
            (h = l.value).getDrawnElements().forEach(r2), (a2 = h.getDrawnElement()) && r2(a2);
          }
        } catch (e5) {
          t4 = { error: e5 };
        } finally {
          try {
            l && !l.done && (e4 = s.return) && e4.call(s);
          } finally {
            if (t4) throw t4.error;
          }
        }
        for (var u = this.getAnnotation().querySelectorAll("component bond,passive"), p = 0; p < u.length; p++) {
          var h, f = (0, c.getTextContent)(u[p]);
          (h = this.getDiagram().get(f)).getDrawnElements().forEach(r2), (a2 = h.getDrawnElement()) && r2(a2);
        }
        return this.drawnElements;
      }, e3;
    })(n2(736).NeighbourHood);
    e2.AtomSet = a;
  }, 280: function(t2, e2, n2) {
    var o2, r = this && this.__extends || (o2 = function(t3, e3) {
      return o2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e4) {
        t4.__proto__ = e4;
      } || function(t4, e4) {
        for (var n3 in e4) Object.prototype.hasOwnProperty.call(e4, n3) && (t4[n3] = e4[n3]);
      }, o2(t3, e3);
    }, function(t3, e3) {
      if ("function" != typeof e3 && null !== e3) throw new TypeError("Class extends value " + String(e3) + " is not a constructor or null");
      function n3() {
        this.constructor = t3;
      }
      o2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
    });
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Bond = void 0;
    var i = n2(502), c = (function(t3) {
      function e3() {
        var e4 = null !== t3 && t3.apply(this, arguments) || this;
        return e4.ends = [], e4;
      }
      return r(e3, t3), e3.prototype.complete = function() {
        for (var t4 = this.getAnnotation().querySelectorAll("component > atom,active"), e4 = 0, n3 = void 0; n3 = t4[e4]; e4++) {
          var o3 = this.getDiagram().get((0, i.getTextContent)(n3));
          o3 && this.ends.push(o3);
        }
      }, e3;
    })(n2(736).NeighbourHood);
    e2.Bond = c;
  }, 285: function(t2, e2, n2) {
    var o2 = this && this.__values || function(t3) {
      var e3 = "function" == typeof Symbol && Symbol.iterator, n3 = e3 && t3[e3], o3 = 0;
      if (n3) return n3.call(t3);
      if (t3 && "number" == typeof t3.length) return { next: function() {
        return t3 && o3 >= t3.length && (t3 = void 0), { value: t3 && t3[o3++], done: !t3 };
      } };
      throw new TypeError(e3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Languages = void 0;
    var r = n2(225), i = n2(406), c = (function() {
      function t3(t4) {
        this.cmlDocument = t4, this.languages = {}, this.insertLanguages(), this.active = this.defaultActive();
      }
      return t3.createLanguages = function(e3) {
        return 0 === Array.from(e3.querySelectorAll("messages")).filter(function(t4) {
          return t4.childNodes.length;
        }).length ? null : new t3(e3);
      }, t3.prototype.insertLanguages = function() {
        var t4, e3, n3 = this.cmlDocument.querySelectorAll("messages");
        try {
          for (var r2 = o2(Array.from(n3)), c2 = r2.next(); !c2.done; c2 = r2.next()) {
            var a = c2.value, s = a.querySelector("language");
            s && (this.languages[s.textContent] = new i.Language(a));
          }
        } catch (e4) {
          t4 = { error: e4 };
        } finally {
          try {
            c2 && !c2.done && (e3 = r2.return) && e3.call(r2);
          } finally {
            if (t4) throw t4.error;
          }
        }
      }, t3.prototype.updateActive = function() {
        this.active = this.languages[r.config.ACTIVE_LANG] ? r.config.ACTIVE_LANG : this.defaultActive();
      }, t3.prototype.defaultActive = function() {
        return this.languages[r.config.VOICE_LANG] ? r.config.VOICE_LANG : Object.keys(this.languages)[0];
      }, t3.prototype.translate = function(t4) {
        return this.languages[this.active].translate(t4);
      }, t3.prototype.nextLanguage = function() {
        var t4 = Object.keys(this.languages), e3 = t4.indexOf(this.active) + 1;
        this.active = t4.length > e3 ? t4[e3] : t4[0], r.config.ACTIVE_LANG = this.active;
      }, t3;
    })();
    e2.Languages = c;
  }, 297: (t2, e2, n2) => {
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Via = void 0;
    var o2 = n2(502), r = (function() {
      function t3(t4, e3) {
        this.neighbour_ = t4, this.annotation_ = e3, this.type_ = o2.getAttribute(this.annotation_, o2.attr.TYPE);
        var n3 = o2.children(this.annotation_);
        this.connectedBy_ = this.getConnectedBy_(n3[0]), "Connecting bond" === this.type_ && "external" === this.neighbour_.location && (this.neighbour_.from().link = true), void 0 !== this.connectedBy_ && (this.connectedBy_.link = true), this.position_ = parseInt(o2.getTextContent(n3[1]), 10);
      }
      return t3.prototype.getDrawnElements = function() {
        return this.connectedBy_.getDrawnElements() || [];
      }, t3.prototype.getType = function() {
        return this.type_ || "";
      }, t3.prototype.getPosition = function() {
        return this.position_;
      }, t3.prototype.getConnectedBy_ = function(t4) {
        var e3 = this.neighbour_.from().getDiagram(), n3 = o2.getTextContent(t4), r2 = e3.get(n3);
        return r2 || e3.get(n3 + this.neighbour_.from().getId());
      }, t3;
    })();
    e2.Via = r;
  }, 343: function(t2, e2) {
    var n2 = this && this.__values || function(t3) {
      var e3 = "function" == typeof Symbol && Symbol.iterator, n3 = e3 && t3[e3], o3 = 0;
      if (n3) return n3.call(t3);
      if (t3 && "number" == typeof t3.length) return { next: function() {
        return t3 && o3 >= t3.length && (t3 = void 0), { value: t3 && t3[o3++], done: !t3 };
      } };
      throw new TypeError(e3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Bbox = void 0;
    var o2 = (function() {
      function t3(t4, e3, n3, o3) {
        this.x = t4, this.y = e3, this.width = n3, this.height = o3;
      }
      return t3.fromSvgRect = function(e3) {
        return new t3(e3.x, e3.y, e3.width, e3.height);
      }, t3.fromSvgViewBox = function(e3) {
        return new t3(e3.baseVal.x, e3.baseVal.y, e3.baseVal.width, e3.baseVal.height);
      }, t3.getClipBox = function(t4, e3) {
        var n3 = t4.getBBox();
        if (0 !== n3.x || 0 !== n3.y || 0 !== n3.width || 0 !== n3.height) return n3;
        var o3 = t4.cloneNode(true);
        return e3.appendChild(o3), n3 = o3.getBBox(), e3.removeChild(o3), n3;
      }, t3.combineClips = function(e3, n3) {
        var o3 = e3.map(function(e4) {
          return t3.fromSvgRect(t3.getClipBox(e4, n3));
        });
        if (1 === o3.length) return o3[0];
        var r = o3[0];
        return o3.slice(1).reduce(function(t4, e4) {
          return t4.combine(e4);
        }, r);
      }, t3.getBboxStandard = function(t4) {
        var e3, n3, o3, r, i, c = t4.getBBox();
        if (0 === c.x && 0 === c.y && 0 === c.width && 0 === c.height && t4.childNodes && (null === (e3 = t4.childNodes[0]) || void 0 === e3 ? void 0 : e3.transform)) {
          var a = t4.childNodes[0], s = void 0, l = void 0, u = void 0, p = void 0;
          if (a.x && a.y && a.width && a.height) s = a.x.baseVal.value, l = a.y.baseVal.value, u = a.width.baseVal.value, p = a.height.baseVal.value;
          else {
            var h = a.getBBox();
            s = (null === (n3 = h.baseVal) || void 0 === n3 ? void 0 : n3.x) || h.x, l = (null === (o3 = h.baseVal) || void 0 === o3 ? void 0 : o3.y) || h.y, u = (null === (r = h.baseVal) || void 0 === r ? void 0 : r.width) || h.width, p = (null === (i = h.baseVal) || void 0 === i ? void 0 : i.height) || h.height;
          }
          var f = t4.ownerSVGElement.createSVGPoint(), v = a.transform.baseVal;
          f.x = s, f.y = l;
          for (var d = v.length - 1; d >= 0; d--) f = f.matrixTransform(v.getItem(d).matrix);
          c.x = f.x, c.y = f.y, c.width = u, c.height = p;
        }
        return c;
      }, t3.combineBboxes = function(e3) {
        var n3 = /* @__PURE__ */ new Set(), o3 = function(e4) {
          var o4 = t3.getBboxStandard(e4);
          return e4.querySelectorAll("*[clip-path]").forEach(function(t4) {
            return n3.add(t4);
          }), o4;
        }, r = t3.fromSvgRect(o3(e3[0]));
        if (1 === e3.length) return r = t3.performClipping(r, n3);
        var i = e3.slice(1).reduce(function(t4, e4) {
          return t4.combine(o3(e4));
        }, r);
        return i = t3.performClipping(i, n3);
      }, t3.performClipping = function(e3, o3) {
        var r, i;
        if (!o3.size) return e3;
        var c = o3.values().next().value.ownerSVGElement, a = (function(t4) {
          var e4 = /* @__PURE__ */ new Map();
          return t4.querySelectorAll("defs").forEach(function(t5) {
            t5.childNodes.forEach(function(t6) {
              t6 instanceof SVGElement && e4.set(t6.id, t6);
            });
          }), e4;
        })(c), s = /* @__PURE__ */ new Set();
        try {
          for (var l = n2(o3), u = l.next(); !u.done; u = l.next()) {
            var p = u.value.getAttribute("clip-path").match(/^url\(#(.*)\)/), h = p && a.get(p[1]);
            h && s.add(h);
          }
        } catch (t4) {
          r = { error: t4 };
        } finally {
          try {
            u && !u.done && (i = l.return) && i.call(l);
          } finally {
            if (r) throw r.error;
          }
        }
        return s.forEach(function(n3) {
          var o4 = Array.from(n3.childNodes).filter(function(t4) {
            return t4.getBBox;
          }), r2 = t3.combineClips(o4, c);
          e3 = e3.intersect(r2);
        }), e3;
      }, t3.prototype.add = function(e3) {
        return new t3(this.x + e3.x, this.y + e3.y, this.width + e3.width, this.height + e3.height);
      }, t3.prototype.difference = function(t4, e3, n3) {
        var o3 = this.add(t4.scale(-1));
        return e3 && (o3.x = o3.x - e3 / 2, o3.width = o3.width + e3), n3 && (o3.y = o3.y - n3 / 2, o3.height = o3.height + n3), o3;
      }, t3.prototype.scale = function(e3) {
        return new t3(this.x * e3, this.y * e3, this.width * e3, this.height * e3);
      }, t3.prototype.combine = function(e3) {
        var n3 = Math.min(this.x, e3.x), o3 = Math.min(this.y, e3.y);
        return new t3(n3, o3, Math.max(this.x + this.width, e3.x + e3.width) - n3, Math.max(this.y + this.height, e3.y + e3.height) - o3);
      }, t3.prototype.intersect = function(e3) {
        var n3 = Math.max(this.x, e3.x), o3 = Math.max(this.y, e3.y);
        return new t3(n3, o3, Math.min(this.x + this.width, e3.x + e3.width) - n3, Math.min(this.y + this.height, e3.y + e3.height) - o3);
      }, t3.prototype.viewBoxValue = function() {
        return this.x + " " + this.y + " " + this.width + " " + this.height;
      }, t3;
    })();
    e2.Bbox = o2;
  }, 406: (t2, e2, n2) => {
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Language = void 0;
    var o2 = n2(502), r = (function() {
      function t3(t4) {
        this.cmlDocument = t4, this.messages = {}, this.language = this.getLanguage(), this.insertMessages();
      }
      return t3.prototype.getLanguage = function() {
        var t4 = this.cmlDocument.querySelector("language");
        return t4 ? t4.textContent : "";
      }, t3.prototype.insertMessages = function() {
        for (var t4 = this.cmlDocument.querySelectorAll("message"), e3 = 0, n3 = void 0; n3 = t4[e3]; e3++) this.messages[(0, o2.getAttribute)(n3, "msg")] = n3.textContent;
      }, t3.prototype.translate = function(t4) {
        return this.messages[t4];
      }, t3;
    })();
    e2.Language = r;
  }, 428: function(t2, e2, n2) {
    var o2 = this && this.__values || function(t3) {
      var e3 = "function" == typeof Symbol && Symbol.iterator, n3 = e3 && t3[e3], o3 = 0;
      if (n3) return n3.call(t3);
      if (t3 && "number" == typeof t3.length) return { next: function() {
        return t3 && o3 >= t3.length && (t3 = void 0), { value: t3 && t3[o3++], done: !t3 };
      } };
      throw new TypeError(e3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, r = this && this.__read || function(t3, e3) {
      var n3 = "function" == typeof Symbol && t3[Symbol.iterator];
      if (!n3) return t3;
      var o3, r2, i2 = n3.call(t3), c2 = [];
      try {
        for (; (void 0 === e3 || e3-- > 0) && !(o3 = i2.next()).done; ) c2.push(o3.value);
      } catch (t4) {
        r2 = { error: t4 };
      } finally {
        try {
          o3 && !o3.done && (n3 = i2.return) && n3.call(i2);
        } finally {
          if (r2) throw r2.error;
        }
      }
      return c2;
    };
    Object.defineProperty(e2, "__esModule", { value: true }), e2.ViewBox = e2.ZoomOptions = void 0;
    var i = n2(502), c = n2(343), a = function() {
    };
    e2.ZoomOptions = a;
    var s = (function() {
      function t3(t4) {
        this.svg = t4, this.focusgroups = /* @__PURE__ */ new Map(), this.defaultZoomOptions = { xPad: this.svg.width.baseVal.value / 15, yPad: this.svg.height.baseVal.value / 15, duration: 100, delay: 10, wait: 0, callback: function() {
        } }, this.reset();
      }
      return t3.prototype.reset = function() {
        var t4 = c.Bbox.fromSvgRect(this.svg.getBBox()), e3 = new Set(Array.from(this.svg.querySelectorAll("svg *[clip-path]")));
        c.Bbox.performClipping(t4, e3);
      }, t3.prototype.setClass = function(t4, e3) {
        for (var n3 = 0; n3 < t4.length; n3++) i.classList.add(t4[n3], e3);
      }, t3.prototype.clearClass = function(t4, e3) {
        for (var n3 = 0; n3 < t4.length; n3++) i.classList.remove(t4[n3], e3);
      }, t3.prototype.clearActive = function() {
        var t4, e3;
        try {
          for (var n3 = o2(this.focusgroups), i2 = n3.next(); !i2.done; i2 = n3.next()) {
            var c2 = r(i2.value, 2), a2 = c2[0], s2 = c2[1];
            this.clearClass(s2, a2);
          }
        } catch (e4) {
          t4 = { error: e4 };
        } finally {
          try {
            i2 && !i2.done && (e3 = n3.return) && e3.call(n3);
          } finally {
            if (t4) throw t4.error;
          }
        }
        this.focusgroups.clear();
      }, t3.prototype.select = function(t4, e3) {
        var n3 = e3 || "cacc-active", o3 = this.focusgroups.get(n3);
        o3 && this.clearClass(o3, n3), this.setClass(t4, n3), this.focusgroups.set(n3, t4);
      }, t3.prototype.zoom = function(t4, e3) {
        var n3 = this.focusgroups.get(t4);
        n3 && 0 !== n3.length && this.setViewBox_(c.Bbox.combineBboxes(n3), e3);
      }, t3.prototype.setViewBox_ = function(t4, e3) {
        var n3 = this;
        if (e3) {
          for (var o3 = this.completeZoomOptions_(e3), r2 = this.retrieveViewBox_(), i2 = t4.difference(r2, o3.xPad, o3.yPad), c2 = Math.ceil(o3.duration / o3.delay), a2 = i2.scale(1 / c2), s2 = function(t5) {
            return function() {
              return n3.svg.setAttribute("viewBox", r2.add(a2.scale(t5)).viewBoxValue());
            };
          }, l = 1; l <= c2; l++) setTimeout(s2(l), l * o3.delay);
          o3.callback && setTimeout(o3.callback, o3.wait + o3.duration);
        }
      }, t3.prototype.completeZoomOptions_ = function(t4) {
        return t4 ? Object.assign({}, this.defaultZoomOptions, t4) : this.defaultZoomOptions;
      }, t3.prototype.retrieveViewBox_ = function() {
        try {
          return c.Bbox.fromSvgViewBox(this.svg.viewBox);
        } catch (t4) {
          return new c.Bbox(0, 0, 0, 0);
        }
      }, t3;
    })();
    e2.ViewBox = s;
  }, 441: function(t2, e2, n2) {
    var o2 = this && this.__values || function(t3) {
      var e3 = "function" == typeof Symbol && Symbol.iterator, n3 = e3 && t3[e3], o3 = 0;
      if (n3) return n3.call(t3);
      if (t3 && "number" == typeof t3.length) return { next: function() {
        return t3 && o3 >= t3.length && (t3 = void 0), { value: t3 && t3[o3++], done: !t3 };
      } };
      throw new TypeError(e3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(e2, "__esModule", { value: true }), e2.CML = void 0;
    var r = n2(187), i = n2(285), c = n2(528), a = n2(270), s = n2(280), l = (function() {
      function t3(t4) {
        this.cmlDocument = t4, this.root = null, this.map = new r.Diagram(i.Languages.createLanguages(t4)), this.initMap_();
      }
      return t3.prototype.getMap = function() {
        return this.map;
      }, t3.prototype.getRootElement = function() {
        return this.root || (this.root = this.map.find(function(t4) {
          return !(t4 instanceof s.Bond || t4.up);
        })), this.root;
      }, t3.prototype.initMap_ = function() {
        var t4, e3, n3 = Array.from(this.cmlDocument.querySelectorAll("annotations > annotation"));
        try {
          for (var r2 = o2(n3), i2 = r2.next(); !i2.done; i2 = r2.next()) {
            var l2 = i2.value, u = l2.firstElementChild;
            if (u) {
              var p = void 0;
              switch (u.localName.toLowerCase()) {
                case "atom":
                case "active":
                  p = new c.Atom(l2, this.map), this.map.set(p.getKey(), p);
                  break;
                case "bond":
                case "passive":
                  p = new s.Bond(l2, this.map), this.map.set(p.getId(), p);
                  break;
                case "atomset":
                case "grouped":
                  p = new a.AtomSet(l2, this.map), this.map.set(p.getId(), p);
              }
            }
          }
        } catch (e4) {
          t4 = { error: e4 };
        } finally {
          try {
            i2 && !i2.done && (e3 = r2.return) && e3.call(r2);
          } finally {
            if (t4) throw t4.error;
          }
        }
        this.map.forEach(function(t5) {
          return t5.complete();
        });
      }, t3;
    })();
    e2.CML = l;
  }, 502: (t2, e2) => {
    function n2(t3) {
      return e2.prefix_ + "-" + t3;
    }
    Object.defineProperty(e2, "__esModule", { value: true }), e2.noMove = e2.attr = e2.hasSpeech = e2.getDocument = e2.children = e2.classList = e2.getAttribute = e2.getTextContent = e2.toggleExpertMode = e2.EXPERT_MODE = e2.toArray = e2.getId = e2.idCounter_ = e2.addPrefix = e2.prefix_ = void 0, e2.prefix_ = "cacc", e2.addPrefix = n2, e2.idCounter_ = 0, e2.getId = function() {
      return n2("Id-" + e2.idCounter_++);
    }, e2.toArray = function(t3) {
      for (var e3 = [], n3 = 0; n3 < t3.length; n3++) e3.push(t3[n3]);
      return e3;
    }, e2.EXPERT_MODE = true, e2.toggleExpertMode = function() {
      e2.EXPERT_MODE = !e2.EXPERT_MODE;
    }, e2.getTextContent = function(t3) {
      var e3 = t3.textContent;
      return " " !== e3 && (e3 = e3.replace(/^\s*/, "")), e3;
    }, e2.getAttribute = function(t3, e3) {
      return t3.getAttribute(e3) || t3.getAttributeNS("http://www.chemaccess.org/sre-schema", e3) || t3.getAttribute("sre:" + e3);
    }, (function(t3) {
      function e3(t4, e4) {
        t4.classList && t4.classList.add ? t4.classList.add(e4) : t4.className ? o2(t4.className) ? t4.className.baseVal += " " + e4 : t4.className += " " + e4 : t4.className = e4;
      }
      function n3(t4, e4) {
        if (t4.classList && t4.classList.remove && t4.classList.remove(e4), t4.className) {
          var n4 = t4.className;
          o2(n4) ? n4.baseVal = n4.baseVal.replace(" " + e4, "") : t4.className = t4.className.replace(" " + e4, "");
        }
      }
      function o2(t4) {
        return "string" != typeof t4;
      }
      t3.add = e3, t3.remove = n3, t3.toggle = function(t4, r) {
        t4.classList && t4.classList.toggle ? t4.classList.toggle(r) : t4.className ? !(function(t5, e4) {
          return -1 !== (o2(t5) ? t5.baseVal : t5).search(e4);
        })(t4.className, r) ? e3(t4, r) : n3(t4, r) : t4.className = r;
      };
    })(e2.classList || (e2.classList = {})), e2.children = function(t3) {
      if (t3.children) return Array.prototype.slice.call(t3.children);
      for (var e3 = [], n3 = t3.childNodes, o2 = 0, r = void 0; r = n3[o2]; o2++) 1 === r.nodeType && e3.push(r);
      return e3;
    }, e2.getDocument = function() {
      var t3;
      return (null === (t3 = null === window || void 0 === window ? void 0 : window.top) || void 0 === t3 ? void 0 : t3.document) || document;
    }, e2.hasSpeech = function() {
      return !("undefined" == typeof speechSynthesis);
    }, (function(t3) {
      t3.EXPERT_SPEECH = "speech2", t3.SIMPLE_SPEECH = "speech", t3.LOCATION = "location", t3.TYPE = "type";
    })(e2.attr || (e2.attr = {})), e2.noMove = function() {
      var t3 = new AudioContext(), e3 = t3.createOscillator();
      e3.frequency.value = 300, e3.connect(t3.destination), e3.start(t3.currentTime), e3.stop(t3.currentTime + 0.05);
    };
  }, 516: function(t2, e2, n2) {
    var o2 = this && this.__values || function(t3) {
      var e3 = "function" == typeof Symbol && Symbol.iterator, n3 = e3 && t3[e3], o3 = 0;
      if (n3) return n3.call(t3);
      if (t3 && "number" == typeof t3.length) return { next: function() {
        return t3 && o3 >= t3.length && (t3 = void 0), { value: t3 && t3[o3++], done: !t3 };
      } };
      throw new TypeError(e3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, r = this && this.__read || function(t3, e3) {
      var n3 = "function" == typeof Symbol && t3[Symbol.iterator];
      if (!n3) return t3;
      var o3, r2, i2 = n3.call(t3), c2 = [];
      try {
        for (; (void 0 === e3 || e3-- > 0) && !(o3 = i2.next()).done; ) c2.push(o3.value);
      } catch (t4) {
        r2 = { error: t4 };
      } finally {
        try {
          o3 && !o3.done && (n3 = i2.return) && n3.call(i2);
        } finally {
          if (r2) throw r2.error;
        }
      }
      return c2;
    };
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Base = void 0;
    var i = n2(765), c = n2(502), a = n2(854), s = n2(225), l = n2(626);
    !(function(t3) {
      t3.molMap = {}, t3.init = function(e3) {
        var n3, u, p, h;
        void 0 === e3 && (e3 = false);
        var f = l.forDocument();
        if (Object.keys(f).length > 0 && (a.documentCmlStyle(), s.config.SUBTITLE = (function() {
          var t4 = c.getDocument(), e4 = t4.createElement("p");
          e4.classList.add("explorer"), e4.classList.add("cacc-message");
          var n4 = a.getScheme_(1);
          e4.style.cssText += "position:fixed;left:0;bottom:0;" + "background-color: ".concat(n4.bkd, "; color: ").concat(n4.frgd), a.regionStyle_(t4.body), s.config.SUB_VISIBLE || e4.classList.add("cacc-text-invisible");
          return e4;
        })()), e3) {
          try {
            for (var v = o2(Object.values(t3.molMap)), d = v.next(); !d.done; d = v.next()) {
              d.value.removeEvents();
            }
          } catch (t4) {
            n3 = { error: t4 };
          } finally {
            try {
              d && !d.done && (u = v.return) && u.call(v);
            } finally {
              if (n3) throw n3.error;
            }
          }
          t3.molMap = {};
        }
        try {
          for (var g = o2(Object.entries(f)), y = g.next(); !y.done; y = g.next()) {
            var m = r(y.value, 2), E = m[0], b = m[1];
            t3.molMap[E] || (t3.molMap[E] = new i.Container(E, b));
          }
        } catch (t4) {
          p = { error: t4 };
        } finally {
          try {
            y && !y.done && (h = g.return) && h.call(g);
          } finally {
            if (p) throw p.error;
          }
        }
      };
    })(e2.Base || (e2.Base = {}));
  }, 528: function(t2, e2, n2) {
    var o2, r = this && this.__extends || (o2 = function(t3, e3) {
      return o2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e4) {
        t4.__proto__ = e4;
      } || function(t4, e4) {
        for (var n3 in e4) Object.prototype.hasOwnProperty.call(e4, n3) && (t4[n3] = e4[n3]);
      }, o2(t3, e3);
    }, function(t3, e3) {
      if ("function" != typeof e3 && null !== e3) throw new TypeError("Class extends value " + String(e3) + " is not a constructor or null");
      function n3() {
        this.constructor = t3;
      }
      o2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
    }), i = this && this.__values || function(t3) {
      var e3 = "function" == typeof Symbol && Symbol.iterator, n3 = e3 && t3[e3], o3 = 0;
      if (n3) return n3.call(t3);
      if (t3 && "number" == typeof t3.length) return { next: function() {
        return t3 && o3 >= t3.length && (t3 = void 0), { value: t3 && t3[o3++], done: !t3 };
      } };
      throw new TypeError(e3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Atom = void 0;
    var c = n2(502), a = (function(t3) {
      function e3() {
        var e4 = null !== t3 && t3.apply(this, arguments) || this;
        return e4.speech = "", e4.links = false, e4;
      }
      return r(e3, t3), e3.prototype.getSpeech = function() {
        if (this.link && this.links) return this.speakLinks();
        var t4 = [];
        this.neighbourhood.forEach(function(e5) {
          "external" !== e5.location && t4.push(e5.getSpeech());
        });
        var e4 = this.getMessage();
        return this.speech = this.getDiagram().translate(e4) + " " + t4.join(" "), this.speech;
      }, e3.prototype.getDrawnElements = function() {
        if (this.drawnElements) return this.drawnElements;
        this.drawnElements = [];
        var t4 = this.getDrawnElement();
        t4 && this.drawnElements.push(t4);
        for (var e4 = this.getAnnotation().querySelectorAll("component *"), n3 = 0; n3 < e4.length; n3++) {
          (t4 = this.getDiagram().get((0, c.getTextContent)(e4[n3])).getDrawnElement()) && -1 === this.drawnElements.indexOf(t4) && this.drawnElements.push(t4);
        }
        return this.drawnElements;
      }, e3.prototype.getUpperNeighbour_ = function() {
        var t4, e4;
        try {
          for (var n3 = i(this.up.neighbourhood), o3 = n3.next(); !o3.done; o3 = n3.next()) {
            var r2 = o3.value;
            if (-1 !== r2.via().map(function(t5) {
              return t5.getPosition();
            }).indexOf(this.position)) return r2;
          }
        } catch (e5) {
          t4 = { error: e5 };
        } finally {
          try {
            o3 && !o3.done && (e4 = n3.return) && e4.call(n3);
          } finally {
            if (t4) throw t4.error;
          }
        }
        return null;
      }, e3.prototype.speakLinks = function() {
        var t4 = this.getUpperNeighbour_(), e4 = t4 ? t4.getSpeech() : "";
        if (e4) return e4;
        var n3 = [];
        this.neighbourhood.forEach(function(t5) {
          "external" === t5.location && n3.push(t5.getSpeech());
        });
        var o3 = this.getMessage();
        return this.speech = this.getDiagram().translate(o3) + " " + n3.join(" "), this.speech;
      }, e3;
    })(n2(736).NeighbourHood);
    e2.Atom = a;
  }, 626: function(t2, e2, n2) {
    var o2 = this && this.__values || function(t3) {
      var e3 = "function" == typeof Symbol && Symbol.iterator, n3 = e3 && t3[e3], o3 = 0;
      if (n3) return n3.call(t3);
      if (t3 && "number" == typeof t3.length) return { next: function() {
        return t3 && o3 >= t3.length && (t3 = void 0), { value: t3 && t3[o3++], done: !t3 };
      } };
      throw new TypeError(e3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(e2, "__esModule", { value: true }), e2.fromUri_ = e2.getUrlParameters_ = e2.getParam_ = e2.getData_ = e2.getMol_ = e2.forDocument = void 0;
    var r = n2(196), i = 0;
    function c(t3) {
      if (t3.querySelector("div.svg")) {
        t3.setAttribute("has-svg", "true");
        var e3 = t3.querySelector("div.svg > svg");
        r.rewriteTransformations(e3), r.rewriteUseElements(e3);
      } else a(t3, "svg", "data-src", ".svg");
      t3.querySelector("div.cml") ? t3.setAttribute("has-cml", "true") : a(t3, "cml", "data-cml", ".xml");
    }
    function a(t3, e3, n3, o3) {
      var i2 = t3.getAttribute(n3) || s(t3, n3, o3);
      i2 ? u(i2, function(n4) {
        if (n4) {
          t3.setAttribute("has-" + e3, "true");
          var o4 = document.createElement("div");
          o4.classList.add(e3), "svg" === e3 && (r.rewriteTransformations(n4), r.rewriteUseElements(n4)), o4.appendChild(n4.documentElement), t3.appendChild(o4);
        } else t3.setAttribute("has-" + e3, "false");
      }) : t3.setAttribute("has-" + e3, "false");
    }
    function s(t3, e3, n3) {
      if (!t3.id) return null;
      var o3 = l()[t3.id];
      return o3 ? (o3 += n3, t3.setAttribute(e3, o3), o3) : null;
    }
    function l() {
      for (var t3, e3 = {}, n3 = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), o3 = 0; o3 < n3.length; o3++) e3[(t3 = n3[o3].split("="))[0]] = t3[1];
      return e3;
    }
    function u(t3, e3) {
      if ("file:" !== location.protocol) {
        var n3 = new DOMParser(), o3 = new XMLHttpRequest();
        o3.onreadystatechange = function() {
          4 === o3.readyState && 200 === o3.status && e3(n3.parseFromString(o3.responseText, "text/xml"));
        }, o3.open("GET", t3, true), o3.send(null);
      } else e3(null);
    }
    e2.forDocument = function(t3) {
      var e3, n3, r2 = t3 || document, a2 = Array.from(r2.querySelectorAll("div.ChemAccess-element")), s2 = {};
      try {
        for (var l2 = o2(a2), u2 = l2.next(); !u2.done; u2 = l2.next()) {
          var p = u2.value;
          c(p), p.id || (p.id = "ChemAccess-element" + i++), s2[p.id] = p;
        }
      } catch (t4) {
        e3 = { error: t4 };
      } finally {
        try {
          u2 && !u2.done && (n3 = l2.return) && n3.call(l2);
        } finally {
          if (e3) throw e3.error;
        }
      }
      return s2;
    }, e2.getMol_ = c, e2.getData_ = a, e2.getParam_ = s, e2.getUrlParameters_ = l, e2.fromUri_ = u;
  }, 736: function(t2, e2, n2) {
    var o2, r = this && this.__extends || (o2 = function(t3, e3) {
      return o2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e4) {
        t4.__proto__ = e4;
      } || function(t4, e4) {
        for (var n3 in e4) Object.prototype.hasOwnProperty.call(e4, n3) && (t4[n3] = e4[n3]);
      }, o2(t3, e3);
    }, function(t3, e3) {
      if ("function" != typeof e3 && null !== e3) throw new TypeError("Class extends value " + String(e3) + " is not a constructor or null");
      function n3() {
        this.constructor = t3;
      }
      o2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
    });
    Object.defineProperty(e2, "__esModule", { value: true }), e2.NeighbourHood = void 0;
    var i = n2(502), c = n2(108), a = n2(914), s = (function(t3) {
      function e3(e4, n3) {
        var o3 = t3.call(this, e4, n3) || this;
        return o3.neighbourhood = [], o3;
      }
      return r(e3, t3), e3.prototype.complete = function() {
        t3.prototype.complete.call(this);
        for (var e4 = this.getAnnotation().querySelectorAll("neighbours neighbour"), n3 = 0, o3 = void 0; o3 = e4[n3]; n3++) this.neighbourhood.push(new a.Neighbour(this, o3));
      }, e3.prototype.getSpeech = function() {
        return this.getDiagram().translate(this.getMessage());
      }, e3.prototype.getMessage = function() {
        var t4 = i.getAttribute(this.getAnnotation(), i.attr.EXPERT_SPEECH), e4 = i.getAttribute(this.getAnnotation(), i.attr.SIMPLE_SPEECH);
        return i.EXPERT_MODE ? t4 || e4 : e4 || t4;
      }, e3.prototype.getNeighbours = function() {
        return this.neighbourhood;
      }, e3;
    })(c.ChemObj);
    e2.NeighbourHood = s;
  }, 765: function(t2, e2, n2) {
    var o2, r = this && this.__extends || (o2 = function(t3, e3) {
      return o2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e4) {
        t4.__proto__ = e4;
      } || function(t4, e4) {
        for (var n3 in e4) Object.prototype.hasOwnProperty.call(e4, n3) && (t4[n3] = e4[n3]);
      }, o2(t3, e3);
    }, function(t3, e3) {
      if ("function" != typeof e3 && null !== e3) throw new TypeError("Class extends value " + String(e3) + " is not a constructor or null");
      function n3() {
        this.constructor = t3;
      }
      o2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
    }), i = this && this.__awaiter || function(t3, e3, n3, o3) {
      return new (n3 || (n3 = Promise))(function(r2, i2) {
        function c2(t4) {
          try {
            s2(o3.next(t4));
          } catch (t5) {
            i2(t5);
          }
        }
        function a2(t4) {
          try {
            s2(o3.throw(t4));
          } catch (t5) {
            i2(t5);
          }
        }
        function s2(t4) {
          var e4;
          t4.done ? r2(t4.value) : (e4 = t4.value, e4 instanceof n3 ? e4 : new n3(function(t5) {
            t5(e4);
          })).then(c2, a2);
        }
        s2((o3 = o3.apply(t3, e3 || [])).next());
      });
    }, c = this && this.__generator || function(t3, e3) {
      var n3, o3, r2, i2, c2 = { label: 0, sent: function() {
        if (1 & r2[0]) throw r2[1];
        return r2[1];
      }, trys: [], ops: [] };
      return i2 = { next: a2(0), throw: a2(1), return: a2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
        return this;
      }), i2;
      function a2(a3) {
        return function(s2) {
          return (function(a4) {
            if (n3) throw new TypeError("Generator is already executing.");
            for (; i2 && (i2 = 0, a4[0] && (c2 = 0)), c2; ) try {
              if (n3 = 1, o3 && (r2 = 2 & a4[0] ? o3.return : a4[0] ? o3.throw || ((r2 = o3.return) && r2.call(o3), 0) : o3.next) && !(r2 = r2.call(o3, a4[1])).done) return r2;
              switch (o3 = 0, r2 && (a4 = [2 & a4[0], r2.value]), a4[0]) {
                case 0:
                case 1:
                  r2 = a4;
                  break;
                case 4:
                  return c2.label++, { value: a4[1], done: false };
                case 5:
                  c2.label++, o3 = a4[1], a4 = [0];
                  continue;
                case 7:
                  a4 = c2.ops.pop(), c2.trys.pop();
                  continue;
                default:
                  if (!(r2 = c2.trys, (r2 = r2.length > 0 && r2[r2.length - 1]) || 6 !== a4[0] && 2 !== a4[0])) {
                    c2 = 0;
                    continue;
                  }
                  if (3 === a4[0] && (!r2 || a4[1] > r2[0] && a4[1] < r2[3])) {
                    c2.label = a4[1];
                    break;
                  }
                  if (6 === a4[0] && c2.label < r2[1]) {
                    c2.label = r2[1], r2 = a4;
                    break;
                  }
                  if (r2 && c2.label < r2[2]) {
                    c2.label = r2[2], c2.ops.push(a4);
                    break;
                  }
                  r2[2] && c2.ops.pop(), c2.trys.pop();
                  continue;
              }
              a4 = e3.call(t3, c2);
            } catch (t4) {
              a4 = [6, t4], o3 = 0;
            } finally {
              n3 = r2 = 0;
            }
            if (5 & a4[0]) throw a4[1];
            return { value: a4[0] ? a4[1] : void 0, done: true };
          })([a3, s2]);
        };
      }
    }, a = this && this.__values || function(t3) {
      var e3 = "function" == typeof Symbol && Symbol.iterator, n3 = e3 && t3[e3], o3 = 0;
      if (n3) return n3.call(t3);
      if (t3 && "number" == typeof t3.length) return { next: function() {
        return t3 && o3 >= t3.length && (t3 = void 0), { value: t3 && t3[o3++], done: !t3 };
      } };
      throw new TypeError(e3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, s = this && this.__read || function(t3, e3) {
      var n3 = "function" == typeof Symbol && t3[Symbol.iterator];
      if (!n3) return t3;
      var o3, r2, i2 = n3.call(t3), c2 = [];
      try {
        for (; (void 0 === e3 || e3-- > 0) && !(o3 = i2.next()).done; ) c2.push(o3.value);
      } catch (t4) {
        r2 = { error: t4 };
      } finally {
        try {
          o3 && !o3.done && (n3 = i2.return) && n3.call(i2);
        } finally {
          if (r2) throw r2.error;
        }
      }
      return c2;
    };
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Container = void 0;
    var l = n2(854), u = n2(38), p = n2(225), h = n2(221), f = n2(216), v = n2(981), d = n2(428), g = (function(t3) {
      function e3(e4, n3) {
        var o3 = t3.call(this, null) || this;
        return o3.key = e4, o3.mol = n3, o3.name = "Container", o3.controllers = [], o3.initElement().then(function() {
          o3.viewBox = new d.ViewBox(o3.molecule.svg), o3.controllers = o3.controllers.concat(f.ControllerFactory.get(o3)), o3.styles = l.moleculeStyle(o3.molecule), o3.activeElement = o3.molecule.cmlStructure.getRootElement(), o3.customEvents(), o3.getDefaultExplorer();
        }).catch(function() {
          console.error("Failed to initialize element ".concat(e4));
        }), o3;
      }
      return r(e3, t3), e3.loadElement = function(t4) {
        return i(this, void 0, void 0, function() {
          var e4;
          return c(this, function(n3) {
            return e4 = 0, [2, new Promise(function(n4, o3) {
              var r2 = function() {
                t4.hasAttribute("has-svg") && t4.hasAttribute("has-cml") ? n4() : e4 > 5 ? o3(t4) : (e4++, setTimeout(r2, 100));
              };
              r2();
            }).catch(function(t5) {
              "true" !== t5.getAttribute("has-svg") && console.error("Failed to load SVG diagram."), "true" !== t5.getAttribute("has-cml") && console.error("Failed to load XML annotation.");
            })];
          });
        });
      }, e3.prototype.initElement = function() {
        return i(this, void 0, void 0, function() {
          var t4 = this;
          return c(this, function(n3) {
            return [2, e3.loadElement(this.mol).then(function() {
              if ("true" !== t4.mol.getAttribute("has-svg") || "true" !== t4.mol.getAttribute("has-cml")) return Promise.reject("Loading of components failed.");
              var e4 = t4.mol.querySelector("div.svg").children[0], n4 = t4.mol.querySelector("div.cml").children[0];
              return e4 && n4 ? (t4.mol.setAttribute("tabindex", "0"), t4.mol.setAttribute("role", "application"), e4.setAttribute("aria-hidden", "true"), n4.setAttribute("aria-hidden", "true"), t4.mol.hasAttribute("aria-label") || t4.mol.setAttribute("aria-label", "Navigatable ".concat(n4.tagName)), t4.molecule = new v.Molecule(t4.mol, e4, n4), Promise.resolve()) : Promise.reject("Empty Diagram elements.");
            }).catch(function(t5) {
              console.error("Molecule Structure initialisation failed with:", t5);
            })];
          });
        });
      }, e3.prototype.update = function(t4) {
        t4 && (this.activeElement = t4), this.controllers.forEach(function(t5) {
          t5.active && t5.update();
        });
      }, e3.prototype.activate = function() {
        this.molecule.svg.parentElement && (t3.prototype.activate.call(this), this.addStyles(), this.controllers.forEach(function(t4) {
          return t4.activate();
        }));
      }, e3.prototype.deactivate = function() {
        this.update(this.molecule.cmlStructure.getRootElement()), this.controllers.forEach(function(t4) {
          return t4.deactivate();
        }), this.removeStyles(), t3.prototype.deactivate.call(this);
      }, e3.prototype.replaceStyles = function(t4) {
        var e4, n3;
        this.removeStyles();
        try {
          for (var o3 = a(t4), r2 = o3.next(); !r2.done; r2 = o3.next()) {
            var i2 = r2.value;
            this.styles.set(i2.className, i2);
          }
        } catch (t5) {
          e4 = { error: t5 };
        } finally {
          try {
            r2 && !r2.done && (n3 = o3.return) && n3.call(o3);
          } finally {
            if (e4) throw e4.error;
          }
        }
        this.addStyles();
      }, e3.prototype.customEvents = function() {
        var t4, e4 = this;
        (null === (t4 = this.molecule) || void 0 === t4 ? void 0 : t4.node) && (this.registerEvent(this.molecule.node, u.EventType.KEYDOWN, function(t5) {
          return t5.keyCode === u.KeyCodes.SPACE && (e4.update(), t5.preventDefault(), t5.stopPropagation()), false;
        }), new u.CustomEvent(this.molecule.node, u.EventType.KEYDOWN, function(t5) {
          return e4.defaultExplorer && !e4.active && t5.keyCode === u.KeyCodes.ENTER && (e4.defaultExplorer.active = true, e4.activate(), t5.preventDefault(), t5.stopPropagation()), false;
        }).add(), new u.CustomEvent(this.molecule.node, u.EventType.CLICK, function(t5) {
          return e4.defaultExplorer && !e4.active && (e4.defaultExplorer.active = true, e4.activate(), t5.stopPropagation()), false;
        }).add());
      }, e3.prototype.getDefaultExplorer = function() {
        this.defaultExplorer = this.controllers.find(function(t4) {
          return t4.name === p.explorers.KEY;
        }), this.defaultExplorer || (this.defaultExplorer = this.controllers.find(function(t4) {
          return t4.name === p.explorers.MENU;
        }));
      }, e3.prototype.addStyles = function() {
        var t4, e4;
        try {
          for (var n3 = a(this.styles), o3 = n3.next(); !o3.done; o3 = n3.next()) {
            var r2 = s(o3.value, 2)[1];
            this.molecule.node.appendChild(r2);
          }
        } catch (e5) {
          t4 = { error: e5 };
        } finally {
          try {
            o3 && !o3.done && (e4 = n3.return) && e4.call(n3);
          } finally {
            if (t4) throw t4.error;
          }
        }
      }, e3.prototype.removeStyles = function() {
        var t4, e4;
        try {
          for (var n3 = a(this.styles), o3 = n3.next(); !o3.done; o3 = n3.next()) {
            var r2 = s(o3.value, 2)[1];
            try {
              this.molecule.node.removeChild(r2);
            } catch (t5) {
            }
          }
        } catch (e5) {
          t4 = { error: e5 };
        } finally {
          try {
            o3 && !o3.done && (e4 = n3.return) && e4.call(n3);
          } finally {
            if (t4) throw t4.error;
          }
        }
      }, e3;
    })(h.AbstractController);
    e2.Container = g;
  }, 778: function(t2, e2, n2) {
    var o2, r = this && this.__extends || (o2 = function(t3, e3) {
      return o2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e4) {
        t4.__proto__ = e4;
      } || function(t4, e4) {
        for (var n3 in e4) Object.prototype.hasOwnProperty.call(e4, n3) && (t4[n3] = e4[n3]);
      }, o2(t3, e3);
    }, function(t3, e3) {
      if ("function" != typeof e3 && null !== e3) throw new TypeError("Class extends value " + String(e3) + " is not a constructor or null");
      function n3() {
        this.constructor = t3;
      }
      o2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
    });
    Object.defineProperty(e2, "__esModule", { value: true }), e2.MenuExplorer = e2.KeyExplorer = e2.AbstractExplorer = void 0;
    var i = n2(502), c = n2(38), a = n2(225), s = (function(t3) {
      function e3(e4) {
        var n3 = t3.call(this, e4) || this;
        return n3.container = e4, n3.setupControls(), n3;
      }
      return r(e3, t3), e3.prototype.activate = function() {
        this.active && (this.container.update(), this.addControls(), t3.prototype.activate.call(this));
      }, e3.prototype.deactivate = function() {
        this.active && (t3.prototype.deactivate.call(this), this.removeControls());
      }, e3.prototype.addEvents = function() {
        this.active && t3.prototype.addEvents.call(this);
      }, e3.prototype.setupControls = function() {
      }, e3.prototype.addControls = function() {
      }, e3.prototype.removeControls = function() {
      }, e3.prototype.update = function() {
      }, e3.prototype.customEvents = function() {
        var t4 = this, e4 = this.container.molecule.node;
        new c.CustomEvent(e4, c.EventType.KEYDOWN, function(e5) {
          return t4.active && e5.keyCode === c.KeyCodes.ESC && t4.container.deactivate(), t4.container.active || e5.keyCode === t4.getActivationKey() && (t4.active = true, t4.container.activate(), e5.preventDefault()), e5.stopPropagation(), false;
        }).add();
      }, e3;
    })(n2(221).AbstractController);
    e2.AbstractExplorer = s;
    var l = (function(t3) {
      function e3() {
        var e4 = null !== t3 && t3.apply(this, arguments) || this;
        return e4.name = a.explorers.KEY, e4;
      }
      return r(e3, t3), e3.prototype.setupControls = function() {
        var t4 = this, e4 = function(e5, n3) {
          var o3 = n3();
          o3.length > 0 ? t4.container.update(o3[0]) : (0, i.noMove)(), e5.preventDefault();
        };
        this.registerEvent(this.container.molecule.node, c.EventType.KEYDOWN, function(n3) {
          switch (n3.keyCode) {
            case c.KeyCodes.DOWN:
            case c.KeyCodes.D:
              e4(n3, function() {
                return t4.container.activeElement.getDown();
              });
              break;
            case c.KeyCodes.UP:
            case c.KeyCodes.E:
              e4(n3, function() {
                return t4.container.activeElement.getUp();
              });
              break;
            case c.KeyCodes.RIGHT:
            case c.KeyCodes.F:
              e4(n3, function() {
                return t4.container.activeElement.getRight();
              });
              break;
            case c.KeyCodes.LEFT:
            case c.KeyCodes.S:
              e4(n3, function() {
                return t4.container.activeElement.getLeft();
              });
          }
          return n3.stopPropagation(), false;
        });
      }, e3.prototype.getActivationKey = function() {
        return c.KeyCodes.A;
      }, e3;
    })(s);
    e2.KeyExplorer = l;
    var u = (function(t3) {
      function e3() {
        var e4 = null !== t3 && t3.apply(this, arguments) || this;
        return e4.name = a.explorers.MENU, e4;
      }
      return r(e3, t3), e3.prototype.setupControls = function() {
        var t4 = this, e4 = this.container.molecule.createElement("ul");
        e4.classList.add("cacc-controls"), e4.setAttribute("role", "navigation"), this.control_ = e4;
        var n3 = function(e5, n4) {
          var o4 = n4();
          o4.length > 0 ? t4.container.update(o4[0]) : (0, i.noMove)();
        }, o3 = function(e5, o4) {
          t4.registerEvent(e5, c.EventType.KEYDOWN, function(t5) {
            return t5.keyCode !== c.KeyCodes.ENTER && t5.keyCode !== c.KeyCodes.SPACE || (n3(0, o4), t5.preventDefault(), t5.stopPropagation()), false;
          }), t4.registerEvent(e5, c.EventType.CLICK, function(t5) {
            return n3(0, o4), t5.stopPropagation(), false;
          });
        };
        o3(this.makeButton_("Down", e4), function() {
          return t4.container.activeElement.getDown();
        }), o3(this.makeButton_("Up", e4), function() {
          return t4.container.activeElement.getUp();
        }), o3(this.makeButton_("Next", e4), function() {
          return t4.container.activeElement.getRight();
        }), o3(this.makeButton_("Previous", e4), function() {
          return t4.container.activeElement.getLeft();
        });
      }, e3.prototype.addControls = function() {
        var t4 = this.container.molecule.node, e4 = t4.querySelector(".cacc-message");
        e4 ? t4.insertBefore(this.control_, e4) : t4.appendChild(this.control_);
      }, e3.prototype.removeControls = function() {
        this.control_.parentNode.removeChild(this.control_);
      }, e3.prototype.getActivationKey = function() {
        return c.KeyCodes.B;
      }, e3.prototype.makeButton_ = function(t4, e4) {
        var n3 = this.container.molecule.createElement("li");
        return n3.setAttribute("role", "button"), n3.setAttribute("aria-controls", this.container.molecule.node.getAttribute("id")), n3.classList.add("cacc-button"), n3.setAttribute("tabindex", "0"), n3.setAttribute("title", t4), n3.appendChild(document.createTextNode(t4)), e4.appendChild(n3), n3;
      }, e3;
    })(s);
    e2.MenuExplorer = u;
  }, 853: function(t2, e2, n2) {
    var o2, r = this && this.__extends || (o2 = function(t3, e3) {
      return o2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e4) {
        t4.__proto__ = e4;
      } || function(t4, e4) {
        for (var n3 in e4) Object.prototype.hasOwnProperty.call(e4, n3) && (t4[n3] = e4[n3]);
      }, o2(t3, e3);
    }, function(t3, e3) {
      if ("function" != typeof e3 && null !== e3) throw new TypeError("Class extends value " + String(e3) + " is not a constructor or null");
      function n3() {
        this.constructor = t3;
      }
      o2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
    });
    Object.defineProperty(e2, "__esModule", { value: true }), e2.StepMagnifier = e2.SimpleMagnifier = e2.DummyMagnifier = e2.AbstractMagnifier = void 0;
    var i = n2(38), c = n2(225), a = (function(t3) {
      function e3() {
        return null !== t3 && t3.apply(this, arguments) || this;
      }
      return r(e3, t3), Object.defineProperty(e3.prototype, "active", { get: function() {
        return this._active && c.config.MAG_ACTIVE === this.name;
      }, set: function(t4) {
        this._active = t4;
      }, enumerable: false, configurable: true }), e3.prototype.update = function() {
        this.container.viewBox.select(this.container.activeElement.getDrawnElements());
      }, e3.prototype.deactivate = function() {
        this.active && (this.container.viewBox.clearActive(), this.container.viewBox.reset(), t3.prototype.deactivate.call(this));
      }, e3.prototype.customEvents = function() {
        var t4 = this;
        this.registerEvent(this.container.molecule.node, i.EventType.KEYDOWN, function(e4) {
          return e4.keyCode === t4.getActivationKey() && c.config.MAG_ACTIVE !== t4.name && (c.config.MAG_ACTIVE = t4.name, t4.update()), e4.stopPropagation(), false;
        });
      }, e3;
    })(n2(221).AbstractController);
    e2.AbstractMagnifier = a;
    var s = (function(t3) {
      function e3() {
        var e4 = null !== t3 && t3.apply(this, arguments) || this;
        return e4.name = c.magnifiers.DUMMY, e4;
      }
      return r(e3, t3), e3.prototype.getActivationKey = function() {
        return i.KeyCodes.N;
      }, e3.prototype.update = function() {
        this.container.viewBox.reset(), t3.prototype.update.call(this);
      }, e3;
    })(a);
    e2.DummyMagnifier = s;
    var l = (function(t3) {
      function e3() {
        var e4 = null !== t3 && t3.apply(this, arguments) || this;
        return e4.name = c.magnifiers.SIMPLE, e4;
      }
      return r(e3, t3), e3.prototype.update = function() {
        this.container.viewBox.select(this.container.activeElement.getDrawnElements()), this.container.viewBox.zoom("cacc-active");
      }, e3.prototype.getActivationKey = function() {
        return i.KeyCodes.COMMA;
      }, e3;
    })(a);
    e2.SimpleMagnifier = l;
    var u = (function(t3) {
      function e3() {
        var e4 = null !== t3 && t3.apply(this, arguments) || this;
        return e4.name = c.magnifiers.STEP, e4.lastActive = null, e4;
      }
      return r(e3, t3), e3.prototype.update = function() {
        var t4 = this.container.activeElement, e4 = this.container.viewBox, n3 = this.lastActive ? this.lastActive.getDrawnElements() : [];
        this.container.viewBox.select(t4.getDrawnElements(), "cacc-almost"), e4.select(t4.getDrawnElements().concat(n3), "cacc-dummy"), this.lastActive = t4, e4.zoom("cacc-dummy", { duration: 250, delay: 25, wait: 300, callback: function() {
          e4.select([], "cacc-almost"), e4.select(t4.getDrawnElements(), "cacc-active"), e4.zoom("cacc-active", { duration: 250, delay: 25, wait: 300 });
        } });
      }, e3.prototype.getActivationKey = function() {
        return i.KeyCodes.M;
      }, e3;
    })(a);
    e2.StepMagnifier = u;
  }, 854: function(t2, e2, n2) {
    var o2 = this && this.__values || function(t3) {
      var e3 = "function" == typeof Symbol && Symbol.iterator, n3 = e3 && t3[e3], o3 = 0;
      if (n3) return n3.call(t3);
      if (t3 && "number" == typeof t3.length) return { next: function() {
        return t3 && o3 >= t3.length && (t3 = void 0), { value: t3 && t3[o3++], done: !t3 };
      } };
      throw new TypeError(e3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(e2, "__esModule", { value: true }), e2.addStyle = e2.replaceStyle_ = e2.removeStyle_ = e2.svgForegroundStyle_ = e2.svgBackgroundStyle_ = e2.svgHighlightStyle_ = e2.regionStyle_ = e2.svgBaseStyle_ = e2.nodeBackgroundStyle_ = e2.pickScheme = e2.moleculeStyle = e2.getScheme_ = e2.colorSchemes_ = e2.toggleMonochrome = e2.toggleTextVisibility = e2.documentCmlStyle = void 0;
    var r = n2(502), i = n2(225);
    function c(t3) {
      return e2.colorSchemes_[t3 % e2.colorSchemes_.length];
    }
    function a(t3, e3) {
      var n3 = c(e3);
      return [p(t3, n3.bkd), s(t3, n3.bkd), h(t3, n3.frgd), u(t3, n3.active, n3.almost)];
    }
    function s(t3, e3) {
      var n3 = "";
      return f(n3 += "div.".concat(t3.node.id, " { background-color: ").concat(e3, "; }"), "cacc-general-background");
    }
    function l(t3) {
      var e3 = "svg." + t3.id, n3 = "";
      return n3 += "".concat(e3, " { overflow: hidden; }"), n3 += "".concat(e3, " text tspan[baseline-shift] { font-weight: 200; font-size: 13px; }"), n3 += "".concat(e3, " line, svg rect { stroke-width: 1.0;  stroke-linecap: round; }"), n3 += "".concat(e3, " line.").concat("cacc-active", ", svg g.").concat("cacc-active", " line { stroke-width: 3.0; }"), n3 += "".concat(e3, " line.").concat("cacc-almost", ", svg g.").concat("cacc-almost", " line { stroke-width: 2.0; }"), n3 += "".concat(e3, " g.").concat("cacc-active", " text { font-weight: bold; }"), n3 += "".concat(e3, " g#gridSVG g.").concat("cacc-active", " text { font-weight: bold; }"), n3 += "ul.".concat("cacc-controls", " { list-style-type: none; }"), n3 += "".concat(e3, " polyline.").concat("cacc-active", ", svg g.").concat("cacc-active", " polyline { stroke-width: 3.0; }"), n3 += "".concat(e3, " polyline.").concat("cacc-almost", ", svg g.").concat("cacc-almost", " polyline { stroke-width: 2.0; }"), n3 += "".concat(e3, " polygon.").concat("cacc-active", ", svg g.").concat("cacc-active", " polygon { stroke-width: 3.0; }"), n3 += "".concat(e3, " polygon.").concat("cacc-almost", ", svg g.").concat("cacc-almost", " polygon { stroke-width: 2.0; }"), n3 += "".concat(e3, " path.").concat("cacc-active", ", svg g.").concat("cacc-active", " path { stroke-width: 3.0; }"), n3 += "".concat(e3, " path.").concat("cacc-almost", ", svg g.").concat("cacc-almost", " path { stroke-width: 2.0; }"), n3 += "".concat(e3, " rect.").concat("cacc-active", ", svg g.").concat("cacc-active", " rect { stroke-width: 3.0; }"), n3 += "".concat(e3, " rect.").concat("cacc-almost", ", svg g.").concat("cacc-almost", " rect { stroke-width: 2.0; }"), n3 += "".concat(e3, " circle.").concat("cacc-active", ", svg g.").concat("cacc-active", " circle { stroke-width: 3.0; }"), n3 += "".concat(e3, " circle.").concat("cacc-almost", ", svg g.").concat("cacc-almost", " circle { stroke-width: 2.0; }"), n3 += "".concat(e3, " ellipse.").concat("cacc-active", ", svg g.").concat("cacc-active", " ellipse { stroke-width: 3.0; }"), n3 += "".concat(e3, " ellipse.").concat("cacc-almost", ", svg g.").concat("cacc-almost", " ellipse { stroke-width: 2.0; }"), n3 += "".concat(e3, " use.").concat("cacc-active", ", svg g.").concat("cacc-active", " use { stroke-width: 3.0; }"), f(n3 += "".concat(e3, " use.").concat("cacc-almost", ", svg g.").concat("cacc-almost", " use { stroke-width: 2.0; }"), "cacc-base");
    }
    function u(t3, e3, n3) {
      var o3 = "svg." + t3.id, r2 = "";
      return r2 += "".concat(o3, " line.").concat("cacc-active", ", g.").concat("cacc-active", " line { stroke: ").concat(e3, "; }"), r2 += "".concat(o3, " line.").concat("cacc-almost", ", g.").concat("cacc-almost", " line { stroke: ").concat(n3, "; }"), r2 += "".concat(o3, " g.").concat("cacc-active", " text { fill: ").concat(e3, "; }"), r2 += "".concat(o3, " g.").concat("cacc-almost", " text { fill: ").concat(n3, "; }"), r2 += "".concat(o3, " g#gridSVG g.").concat("cacc-active", " text { fill: ").concat(e3, "; }"), r2 += "".concat(o3, " g#gridSVG g.").concat("cacc-almost", " text { fill: ").concat(n3, "; }"), r2 += "".concat(o3, " polyline.").concat("cacc-active", ", g.").concat("cacc-active", " polyline { stroke: ").concat(e3, "; }"), r2 += "".concat(o3, " polyline.").concat("cacc-almost", ", g.").concat("cacc-almost", " polyline { stroke: ").concat(n3, "; }"), r2 += "".concat(o3, " polygon.").concat("cacc-active", ", g.").concat("cacc-active", " polygon { stroke: ").concat(e3, "; }"), r2 += "".concat(o3, " polygon.").concat("cacc-almost", ", g.").concat("cacc-almost", " polygon { stroke: ").concat(n3, "; }"), r2 += "".concat(o3, " path.").concat("cacc-active", ", g.").concat("cacc-active", " path { stroke: ").concat(e3, "; }"), r2 += "".concat(o3, " path.").concat("cacc-almost", ", g.").concat("cacc-almost", " path { stroke: ").concat(n3, "; }"), r2 += "".concat(o3, " rect.").concat("cacc-active", ", g.").concat("cacc-active", " rect { stroke: ").concat(e3, "; }"), r2 += "".concat(o3, " rect.").concat("cacc-almost", ", g.").concat("cacc-almost", " rect { stroke: ").concat(n3, "; }"), r2 += "".concat(o3, " circle.").concat("cacc-active", ", g.").concat("cacc-active", " circle { stroke: ").concat(e3, "; }"), r2 += "".concat(o3, " circle.").concat("cacc-almost", ", g.").concat("cacc-almost", " circle { stroke: ").concat(n3, "; }"), r2 += "".concat(o3, " ellipse.").concat("cacc-active", ", g.").concat("cacc-active", " ellipse { stroke: ").concat(e3, "; }"), r2 += "".concat(o3, " ellipse.").concat("cacc-almost", ", g.").concat("cacc-almost", " ellipse { stroke: ").concat(n3, "; }"), r2 += "".concat(o3, " use.").concat("cacc-active", ", g.").concat("cacc-active", " use { stroke: ").concat(e3, "; }"), f(r2 += "".concat(o3, " use.").concat("cacc-almost", ", g.").concat("cacc-almost", " use { stroke: ").concat(n3, "; }"), "cacc-color-highlight");
    }
    function p(t3, e3) {
      var n3 = "svg." + t3.id, o3 = "";
      return o3 += "".concat(n3, " { background-color: ").concat(e3, "; }"), o3 += "".concat(n3, " g.atom rect { stroke: ").concat(e3, "; fill: ").concat(e3, "; }"), o3 += "div.container { background-color: ".concat(e3, "; }"), o3 += "p.".concat(t3.id, ".").concat("cacc-message", " { background-color: ").concat(e3, "; }"), f(o3 += "p.".concat(t3.id, ".").concat("cacc-message", ".").concat("cacc-text-invisible", " { color: ").concat(e3, "; }"), "cacc-color-background");
    }
    function h(t3, e3) {
      var n3 = "svg." + t3.id, o3 = "";
      return o3 += "".concat(n3, " line { stroke: ").concat(e3, "; fill: ").concat(e3, "; }"), o3 += "".concat(n3, ".").concat("cacc-text-monochrome", " text"), o3 += " { stroke: ".concat(e3, "; fill: ").concat(e3, "; }"), o3 += "".concat(n3, " g#gridSVG text { stroke: ").concat(e3, "; fill: ").concat(e3, "; }"), o3 += "div.container { color: ".concat(e3, "; }"), o3 += "p.".concat(t3.id, ".").concat("cacc-message", " { color: ").concat(e3, "; }"), o3 += "ul.".concat(t3.id, ".").concat("cacc-controls", " { color: ").concat(e3, "; }"), i.config.POLYLINE && (o3 += "".concat(n3, " polyline { stroke: ").concat(e3, "; fill: ").concat(e3, "; }")), o3 += "".concat(n3, " polygon { stroke: ").concat(e3, "; fill: ").concat(e3, "; }"), o3 += "".concat(n3, " path { stroke: ").concat(e3, "; }"), o3 += "".concat(n3, " rect { stroke: ").concat(e3, "; }"), o3 += "".concat(n3, " circle { stroke: ").concat(e3, "; }"), o3 += "".concat(n3, " ellipse { stroke: ").concat(e3, "; }"), f(o3 += "".concat(n3, " use { stroke: ").concat(e3, "; }"), "cacc-color-elements");
    }
    function f(t3, e3) {
      var n3 = document.createElement("style");
      return n3.setAttribute("class", e3), n3.innerHTML = t3, n3;
    }
    function v(t3, e3) {
      var n3 = t3.querySelector("style." + e3);
      return !!n3 && (t3.removeChild(n3), true);
    }
    function d(t3, e3) {
      t3.appendChild(e3);
    }
    e2.documentCmlStyle = function() {
      document.body && d(document.body, f("div.cml { display:none; }", "cacc-cml"));
    }, e2.toggleTextVisibility = function(t3) {
      r.classList.toggle(t3, "cacc-text-invisible");
    }, e2.toggleMonochrome = function(t3) {
      r.classList.toggle(t3, "cacc-text-monochrome");
    }, e2.colorSchemes_ = [{ frgd: "#000", bkd: "#fff", active: "#fd6", almost: "#6df" }, { frgd: "#fff", bkd: "#000", active: "#fd6", almost: "#6df" }, { frgd: "#3C3", bkd: "#000", active: "#fd6", almost: "#6df" }, { frgd: "#ee0", bkd: "#00e", active: "#4f4", almost: "#e3e" }], e2.getScheme_ = c, e2.moleculeStyle = function(t3) {
      var e3, n3, r2 = /* @__PURE__ */ new Map(), i2 = l(t3);
      r2.set(i2.className, i2);
      try {
        for (var c2 = o2(a(t3, 0)), s2 = c2.next(); !s2.done; s2 = c2.next()) {
          var u2 = s2.value;
          r2.set(u2.className, u2);
        }
      } catch (t4) {
        e3 = { error: t4 };
      } finally {
        try {
          s2 && !s2.done && (n3 = c2.return) && n3.call(c2);
        } finally {
          if (e3) throw e3.error;
        }
      }
      return r2;
    }, e2.pickScheme = a, e2.nodeBackgroundStyle_ = s, e2.svgBaseStyle_ = l, e2.regionStyle_ = function(t3) {
      d(t3, f("p.".concat("cacc-message", ".").concat("cacc-text-invisible", " { font-size: 0px; }"), "cacc-region"));
    }, e2.svgHighlightStyle_ = u, e2.svgBackgroundStyle_ = p, e2.svgForegroundStyle_ = h, e2.removeStyle_ = v, e2.replaceStyle_ = function(t3, e3, n3) {
      v(t3, n3), d(t3, f(e3, n3));
    }, e2.addStyle = d;
  }, 875: function(t2, e2, n2) {
    var o2, r = this && this.__extends || (o2 = function(t3, e3) {
      return o2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e4) {
        t4.__proto__ = e4;
      } || function(t4, e4) {
        for (var n3 in e4) Object.prototype.hasOwnProperty.call(e4, n3) && (t4[n3] = e4[n3]);
      }, o2(t3, e3);
    }, function(t3, e3) {
      if ("function" != typeof e3 && null !== e3) throw new TypeError("Class extends value " + String(e3) + " is not a constructor or null");
      function n3() {
        this.constructor = t3;
      }
      o2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
    });
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Language = e2.Expert = e2.Detail = e2.AbstractSpeech = void 0;
    var i = n2(502), c = n2(38), a = n2(225), s = (function(t3) {
      function e3() {
        return null !== t3 && t3.apply(this, arguments) || this;
      }
      return r(e3, t3), e3.prototype.update = function() {
      }, e3;
    })(n2(221).AbstractController);
    e2.AbstractSpeech = s;
    var l = (function(t3) {
      function e3() {
        var e4 = null !== t3 && t3.apply(this, arguments) || this;
        return e4.name = a.speech.DETAIL, e4;
      }
      return r(e3, t3), e3.prototype.customEvents = function() {
        var t4 = this;
        this.registerEvent(this.container.molecule.node, c.EventType.KEYDOWN, function(e4) {
          return e4.keyCode === c.KeyCodes.W && (t4.container.activeElement.link ? (t4.container.activeElement.links = true, t4.container.update(), t4.container.activeElement.links = false) : ((0, i.toggleExpertMode)(), t4.container.update(), (0, i.toggleExpertMode)())), e4.stopPropagation(), false;
        });
      }, e3;
    })(s);
    e2.Detail = l;
    var u = (function(t3) {
      function e3() {
        var e4 = null !== t3 && t3.apply(this, arguments) || this;
        return e4.name = a.speech.EXPERT, e4;
      }
      return r(e3, t3), e3.prototype.customEvents = function() {
        var t4 = this;
        this.registerEvent(this.container.molecule.node, c.EventType.KEYDOWN, function(e4) {
          return e4.keyCode === c.KeyCodes.X && ((0, i.toggleExpertMode)(), t4.container.update()), e4.stopPropagation(), false;
        });
      }, e3;
    })(s);
    e2.Expert = u;
    var p = (function(t3) {
      function e3() {
        var e4 = null !== t3 && t3.apply(this, arguments) || this;
        return e4.name = a.speech.LANGUAGE, e4;
      }
      return r(e3, t3), e3.prototype.customEvents = function() {
        var t4 = this;
        this.registerEvent(this.container.molecule.node, c.EventType.KEYDOWN, function(e4) {
          e4.keyCode === c.KeyCodes.L && (t4.container.molecule.cmlStructure.getMap().nextLanguage() && t4.container.active && t4.container.update());
          return e4.stopPropagation(), false;
        });
      }, e3;
    })(s);
    e2.Language = p;
  }, 881: function(t2, e2, n2) {
    var o2, r = this && this.__extends || (o2 = function(t3, e3) {
      return o2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e4) {
        t4.__proto__ = e4;
      } || function(t4, e4) {
        for (var n3 in e4) Object.prototype.hasOwnProperty.call(e4, n3) && (t4[n3] = e4[n3]);
      }, o2(t3, e3);
    }, function(t3, e3) {
      if ("function" != typeof e3 && null !== e3) throw new TypeError("Class extends value " + String(e3) + " is not a constructor or null");
      function n3() {
        this.constructor = t3;
      }
      o2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
    });
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Speech = e2.Subtitle = e2.LiveRegion = void 0;
    var i = n2(502), c = n2(854), a = n2(38), s = n2(225), l = (function(t3) {
      function e3(e4) {
        var n3 = t3.call(this, e4) || this;
        return n3.container = e4, n3.setupMessage(), n3;
      }
      return r(e3, t3), e3.prototype.setupMessage = function() {
        var t4 = this.container.molecule.createElement("p");
        t4.classList.add("explorer"), t4.setAttribute("aria-live", "assertive"), i.hasSpeech() && (speechSynthesis.onvoiceschanged = function() {
          speechSynthesis.getVoices().length && t4.removeAttribute("aria-live");
        }), t4.setAttribute("tabindex", "-1"), t4.classList.add("cacc-message"), this.message = t4;
      }, e3.prototype.activate = function() {
        this.active || (this.addMessage(), t3.prototype.activate.call(this));
      }, e3.prototype.deactivate = function() {
        this.active && (t3.prototype.deactivate.call(this), this.removeMessage());
      }, e3.prototype.removeMessage = function() {
        var t4;
        null === (t4 = this.message.parentNode) || void 0 === t4 || t4.removeChild(this.message);
      }, e3.prototype.update = function() {
        this.message.textContent = this.container.activeElement.getSpeech();
      }, e3.prototype.customEvents = function() {
        var t4 = this;
        this.registerEvent(this.container.molecule.node, a.EventType.KEYDOWN, function(e4) {
          return e4.keyCode === a.KeyCodes.Z && (t4.toggleMessageVisibility(), s.config.MSG_VISIBLE = !s.config.MSG_VISIBLE), e4.stopPropagation(), false;
        });
      }, e3.prototype.toggleMessageVisibility = function() {
        c.toggleTextVisibility(this.message);
      }, e3;
    })(n2(221).AbstractController);
    e2.LiveRegion = l;
    var u = (function(t3) {
      function e3() {
        var e4 = null !== t3 && t3.apply(this, arguments) || this;
        return e4.name = s.regions.SUBTITLE, e4;
      }
      return r(e3, t3), e3.prototype.addMessage = function() {
        this.container.molecule.node.parentNode.appendChild(this.message), s.config.MSG_VISIBLE || this.message.classList.add("cacc-text-invisible");
      }, e3;
    })(l);
    e2.Subtitle = u;
    var p = (function(t3) {
      function e3() {
        var e4 = null !== t3 && t3.apply(this, arguments) || this;
        return e4.name = s.regions.SPEECH, e4;
      }
      return r(e3, t3), e3.prototype.setupMessage = function() {
        this.message = s.config.SUBTITLE;
      }, e3.prototype.addMessage = function() {
        this.message.parentNode || i.getDocument().body.appendChild(this.message);
      }, e3.prototype.customEvents = function() {
        var t4 = this;
        this.registerEvent(this.container.molecule.node, a.EventType.KEYDOWN, function(e4) {
          return e4.keyCode === a.KeyCodes.V && (t4.toggleMessageVisibility(), s.config.SUB_VISIBLE = !s.config.SUB_VISIBLE), e4.stopPropagation(), false;
        });
      }, e3;
    })(l);
    e2.Speech = p;
  }, 899: function(t2, e2, n2) {
    var o2 = this && this.__values || function(t3) {
      var e3 = "function" == typeof Symbol && Symbol.iterator, n3 = e3 && t3[e3], o3 = 0;
      if (n3) return n3.call(t3);
      if (t3 && "number" == typeof t3.length) return { next: function() {
        return t3 && o3 >= t3.length && (t3 = void 0), { value: t3 && t3[o3++], done: !t3 };
      } };
      throw new TypeError(e3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Sonify = void 0;
    var r = n2(502), i = (function() {
      function t3(t4) {
        this.path = [], this.points = [], this.context = new AudioContext(), this.prepare(t4), this.sonifiable = this.path.length;
      }
      return t3.sonify = function(e3) {
        var n3 = e3.getAnnotation().querySelectorAll("sonification > *"), o3 = [];
        n3.length && (o3 = Array.from(n3).map(function(t4) {
          var n4 = (0, r.getTextContent)(t4), o4 = t4.tagName.toLowerCase(), i3 = n4 + ("active" !== o4 && "sre:active" !== o4 ? "" : n4 === e3.getId() ? e3.getParent() : e3.getId());
          return e3.getDiagram().get(i3);
        }));
        var i2 = new t3(o3);
        return i2.sonifiable ? i2.sonify() : [];
      }, t3.prototype.prepare = function(t4) {
        var e3, n3;
        try {
          for (var r2 = o2(t4), i2 = r2.next(); !i2.done; i2 = r2.next()) {
            var c = i2.value;
            if (c.getDrawnElement()) {
              for (var a = c.getDrawnElement().querySelectorAll("polyline"), s = 0; s < a.length; s++) {
                var l = a[s];
                this.path.push(l);
                for (var u = 0; u < l.points.length; u++) console.log(l.points[u]), this.points.push([l.points[u].x, l.points[u].y]);
              }
              a = c.getDrawnElement().querySelectorAll("path");
              for (s = 0; s < a.length; s++) {
                l = a[s];
                this.path.push(l);
                for (u = 0; u < l.getTotalLength(); u += 1) {
                  var p = l.getPointAtLength(u);
                  this.points.push([p.x, p.y]);
                }
              }
              a = c.getDrawnElement().querySelectorAll("rect");
              for (s = 0; s < a.length; s++) {
                l = a[s];
                this.path.push(l), this.points.push([l.x.animVal.value, l.height.animVal.value ? l.y.animVal.value + l.height.animVal.value : 0]);
              }
            }
          }
        } catch (t5) {
          e3 = { error: t5 };
        } finally {
          try {
            i2 && !i2.done && (n3 = r2.return) && n3.call(r2);
          } finally {
            if (e3) throw e3.error;
          }
        }
      }, t3.prototype.sonifyOld = function() {
        for (var e3 = [], n3 = 0; n3 < this.points.length; n3++) {
          var o3 = this.context.createOscillator();
          e3.push(o3), o3.frequency.value = this.points[n3][1] ? t3.BASE_FREQUENCY + 10 * this.points[n3][1] : 0, o3.type = "sine", o3.connect(this.context.destination);
          var r2 = void 0, i2 = void 0;
          this.points.length > 20 ? (r2 = n3 / 10 + 0.01, i2 = n3 / 10 + 0.1) : (r2 = n3 / 2 + 0.01, i2 = n3 / 2 + 0.5), o3.start(this.context.currentTime + r2), o3.stop(this.context.currentTime + i2);
        }
        return e3;
      }, t3.prototype.sonify = function() {
        var e3, n3, o3 = [], r2 = this.context.createOscillator();
        o3.push(r2), r2.type = "sine", r2.connect(this.context.destination);
        for (var i2 = 0; i2 < this.points.length; i2++) this.points.length > 20 ? (e3 = i2 / 10 + 0.01, n3 = i2 / 10) : (e3 = i2 / 2 + 0.01, n3 = i2 / 2 + 0.5), console.log(e3), i2 ? r2.frequency.setValueAtTime(this.points[i2][1] ? t3.BASE_FREQUENCY - this.points[i2][1] : 0, this.context.currentTime + n3) : (r2.frequency.setValueAtTime(t3.BASE_FREQUENCY - this.points[i2][1], this.context.currentTime), r2.start(this.context.currentTime));
        return r2.stop(this.context.currentTime + n3), o3;
      }, t3.prototype.smooth = function() {
        if (this.points.length) {
          for (var e3 = [this.points[0]], n3 = 0; n3 < this.points.length - 1; n3++) {
            for (var o3 = this.points[n3][0], r2 = this.points[n3][1], i2 = this.points[n3 + 1][0], c = this.points[n3 + 1][1], a = Math.abs(o3 - i2) / t3.SMOOTH_VALUE, s = Math.abs(r2 - c) / t3.SMOOTH_VALUE, l = Math.sign(c - r2), u = 1; u < t3.SMOOTH_VALUE; u++) e3.push([o3 + u * a, r2 + l * u * s]);
            e3.push([i2, c]);
          }
          this.points = e3;
        }
      }, t3.BASE_FREQUENCY = 300, t3.SMOOTH_VALUE = 4, t3;
    })();
    e2.Sonify = i;
  }, 914: (t2, e2, n2) => {
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Neighbour = void 0;
    var o2 = n2(502), r = n2(297), i = (function() {
      function t3(t4, e3) {
        var n3 = this;
        this.from_ = t4, this.annotation_ = e3, this.speech = null, this.speech2 = null;
        var i2 = o2.children(this.annotation_);
        this.to_ = this.from_.getDiagram().get(o2.getTextContent(i2[0])), this.location = o2.getAttribute(this.annotation_, o2.attr.LOCATION), this.via_ = i2.slice(1).map(function(t5) {
          return new r.Via(n3, t5);
        });
      }
      return t3.prototype.from = function() {
        return this.from_;
      }, t3.prototype.to = function() {
        return this.to_;
      }, t3.prototype.via = function() {
        return this.via_;
      }, t3.prototype.getSpeech = function() {
        return this.from_.getDiagram().translate(this.getMessage());
      }, t3.prototype.getMessage = function() {
        if (o2.EXPERT_MODE) {
          if (this.speech2) return this.speech2;
          if (this.speech2 = o2.getAttribute(this.annotation_, o2.attr.EXPERT_SPEECH), this.speech2) return this.speech2;
        }
        return this.speech || (this.speech = o2.getAttribute(this.annotation_, o2.attr.SIMPLE_SPEECH)), this.speech;
      }, t3;
    })();
    e2.Neighbour = i;
  }, 981: (t2, e2, n2) => {
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Molecule = void 0;
    var o2 = n2(502), r = n2(441), i = (function() {
      function t3(t4, e3, n3) {
        this.node = t4, this.svg = e3, this.cml = n3, this.id = o2.getId(), o2.classList.add(this.svg, this.id), o2.classList.add(this.cml, this.id), this.cmlStructure = new r.CML(this.cml), this.topLevelDescription = this.cmlStructure.getRootElement().getSpeech(), this.combine_();
      }
      return t3.prototype.createElement = function(t4) {
        var e3 = document.createElement(t4);
        return e3.classList.add(this.id), e3;
      }, t3.prototype.combine_ = function() {
        var t4 = this;
        this.cmlStructure.getMap().forEach(function(e3) {
          var n3 = t4.svg.getElementById(e3.getId());
          n3 && e3.setDrawnElement(n3);
        });
      }, t3;
    })();
    e2.Molecule = i;
  } }, e = {};
  function n(o2) {
    var r = e[o2];
    if (void 0 !== r) return r.exports;
    var i = e[o2] = { exports: {} };
    return t[o2].call(i.exports, i, i.exports, n), i.exports;
  }
  var o = {};
  return (() => {
    var t2 = o;
    Object.defineProperty(t2, "__esModule", { value: true }), t2.version = t2.Config = t2.Base = void 0;
    var e2 = n(225), r = n(516);
    t2.Base = r.Base, t2.Config = e2.config, t2.version = e2.version;
  })(), o;
})());
//# sourceMappingURL=diagcess.js.map
