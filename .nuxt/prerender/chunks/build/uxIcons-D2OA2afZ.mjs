import { gsap as gsap$1 } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/gsap/dist/gsap.js';
import { c as Splitting } from './Footer-TWd70w3k.mjs';
import { D as DrawSVGPlugin } from '../_/DrawSVGPlugin.mjs';
import { nextTick } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/server-renderer/index.mjs';
import './server.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/consola/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/pinia/dist/pinia.prod.cjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue-router/dist/vue-router.node.mjs';
import './_plugin-vue_export-helper-CHu_jgWj.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/devalue/index.js';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/node_modules/unhead/dist/utils.mjs';

/*!
 * paths 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
    _numbersExp = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
    _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
    _selectorExp$1 = /(^[#\.][a-z]|[a-y][a-z])/i,
    _DEG2RAD = Math.PI / 180,
    _sin$1 = Math.sin,
    _cos$1 = Math.cos,
    _abs = Math.abs,
    _sqrt$1 = Math.sqrt,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _roundingNum = 1e5,
    //if progress lands on 1, the % will make it 0 which is why we || 1, but not if it's negative because it makes more sense for motion to end at 0 in that case.
_round = function _round(value) {
  return Math.round(value * _roundingNum) / _roundingNum || 0;
};
/* TERMINOLOGY
 - RawPath - an array of arrays, one for each Segment. A single RawPath could have multiple "M" commands, defining Segments (paths aren't always connected).
 - Segment - an array containing a sequence of Cubic Bezier coordinates in alternating x, y, x, y format. Starting anchor, then control point 1, control point 2, and ending anchor, then the next control point 1, control point 2, anchor, etc. Uses less memory than an array with a bunch of {x, y} points.
 - Bezier - a single cubic Bezier with a starting anchor, two control points, and an ending anchor.
 - the variable "t" is typically the position along an individual Bezier path (time) and it's NOT linear, meaning it could accelerate/decelerate based on the control points whereas the "p" or "progress" value is linearly mapped to the whole path, so it shouldn't really accelerate/decelerate based on control points. So a progress of 0.2 would be almost exactly 20% along the path. "t" is ONLY in an individual Bezier piece.
 */
//accepts basic selector text, a path instance, a RawPath instance, or a Segment and returns a RawPath (makes it easy to homogenize things). If an element or selector text is passed in, it'll also cache the value so that if it's queried again, it'll just take the path data from there instead of parsing it all over again (as long as the path data itself hasn't changed - it'll check).


function getRawPath(value) {
  value = _isString(value) && _selectorExp$1.test(value) ? document.querySelector(value) || value : value;
  var e = value.getAttribute ? value : 0,
      rawPath;

  if (e && (value = value.getAttribute("d"))) {
    //implements caching
    if (!e._gsPath) {
      e._gsPath = {};
    }

    rawPath = e._gsPath[value];
    return rawPath && !rawPath._dirty ? rawPath : e._gsPath[value] = stringToRawPath(value);
  }

  return !value ? console.warn("Expecting a <path> element or an SVG path data string") : _isString(value) ? stringToRawPath(value) : _isNumber(value[0]) ? [value] : value;
} //copies a RawPath WITHOUT the length meta data (for speed)
function reverseSegment(segment) {
  var i = 0,
      y;
  segment.reverse(); //this will invert the order y, x, y, x so we must flip it back.

  for (; i < segment.length; i += 2) {
    y = segment[i];
    segment[i] = segment[i + 1];
    segment[i + 1] = y;
  }

  segment.reversed = !segment.reversed;
}

var _createPath = function _createPath(e, ignore) {
  var path = document.createElementNS("http://www.w3.org/2000/svg", "path"),
      attr = [].slice.call(e.attributes),
      i = attr.length,
      name;
  ignore = "," + ignore + ",";

  while (--i > -1) {
    name = attr[i].nodeName.toLowerCase(); //in Microsoft Edge, if you don't set the attribute with a lowercase name, it doesn't render correctly! Super weird.

    if (ignore.indexOf("," + name + ",") < 0) {
      path.setAttributeNS(null, name, attr[i].nodeValue);
    }
  }

  return path;
},
    _typeAttrs = {
  rect: "rx,ry,x,y,width,height",
  circle: "r,cx,cy",
  ellipse: "rx,ry,cx,cy",
  line: "x1,x2,y1,y2"
},
    _attrToObj = function _attrToObj(e, attrs) {
  var props = attrs ? attrs.split(",") : [],
      obj = {},
      i = props.length;

  while (--i > -1) {
    obj[props[i]] = +e.getAttribute(props[i]) || 0;
  }

  return obj;
}; //converts an SVG shape like <circle>, <rect>, <polygon>, <polyline>, <ellipse>, etc. to a <path>, swapping it in and copying the attributes to match.


function convertToPath(element, swap) {
  var type = element.tagName.toLowerCase(),
      circ = 0.552284749831,
      data,
      x,
      y,
      r,
      ry,
      path,
      rcirc,
      rycirc,
      points,
      w,
      h,
      x2,
      x3,
      x4,
      x5,
      x6,
      y2,
      y3,
      y4,
      y5,
      y6,
      attr;

  if (type === "path" || !element.getBBox) {
    return element;
  }

  path = _createPath(element, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points");
  attr = _attrToObj(element, _typeAttrs[type]);

  if (type === "rect") {
    r = attr.rx;
    ry = attr.ry || r;
    x = attr.x;
    y = attr.y;
    w = attr.width - r * 2;
    h = attr.height - ry * 2;

    if (r || ry) {
      //if there are rounded corners, render cubic beziers
      x2 = x + r * (1 - circ);
      x3 = x + r;
      x4 = x3 + w;
      x5 = x4 + r * circ;
      x6 = x4 + r;
      y2 = y + ry * (1 - circ);
      y3 = y + ry;
      y4 = y3 + h;
      y5 = y4 + ry * circ;
      y6 = y4 + ry;
      data = "M" + x6 + "," + y3 + " V" + y4 + " C" + [x6, y5, x5, y6, x4, y6, x4 - (x4 - x3) / 3, y6, x3 + (x4 - x3) / 3, y6, x3, y6, x2, y6, x, y5, x, y4, x, y4 - (y4 - y3) / 3, x, y3 + (y4 - y3) / 3, x, y3, x, y2, x2, y, x3, y, x3 + (x4 - x3) / 3, y, x4 - (x4 - x3) / 3, y, x4, y, x5, y, x6, y2, x6, y3].join(",") + "z";
    } else {
      data = "M" + (x + w) + "," + y + " v" + h + " h" + -w + " v" + -h + " h" + w + "z";
    }
  } else if (type === "circle" || type === "ellipse") {
    if (type === "circle") {
      r = ry = attr.r;
      rycirc = r * circ;
    } else {
      r = attr.rx;
      ry = attr.ry;
      rycirc = ry * circ;
    }

    x = attr.cx;
    y = attr.cy;
    rcirc = r * circ;
    data = "M" + (x + r) + "," + y + " C" + [x + r, y + rycirc, x + rcirc, y + ry, x, y + ry, x - rcirc, y + ry, x - r, y + rycirc, x - r, y, x - r, y - rycirc, x - rcirc, y - ry, x, y - ry, x + rcirc, y - ry, x + r, y - rycirc, x + r, y].join(",") + "z";
  } else if (type === "line") {
    data = "M" + attr.x1 + "," + attr.y1 + " L" + attr.x2 + "," + attr.y2; //previously, we just converted to "Mx,y Lx,y" but Safari has bugs that cause that not to render properly when using a stroke-dasharray that's not fully visible! Using a cubic bezier fixes that issue.
  } else if (type === "polyline" || type === "polygon") {
    points = (element.getAttribute("points") + "").match(_numbersExp) || [];
    x = points.shift();
    y = points.shift();
    data = "M" + x + "," + y + " L" + points.join(",");

    if (type === "polygon") {
      data += "," + x + "," + y + "z";
    }
  }

  path.setAttribute("d", rawPathToString(path._gsRawPath = stringToRawPath(data)));

  if (swap && element.parentNode) {
    element.parentNode.insertBefore(path, element);
    element.parentNode.removeChild(element);
  }

  return path;
} //returns the rotation (in degrees) at a particular progress on a rawPath (the slope of the tangent)

function arcToSegment(lastX, lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
  if (lastX === x && lastY === y) {
    return;
  }

  rx = _abs(rx);
  ry = _abs(ry);

  var angleRad = angle % 360 * _DEG2RAD,
      cosAngle = _cos$1(angleRad),
      sinAngle = _sin$1(angleRad),
      PI = Math.PI,
      TWOPI = PI * 2,
      dx2 = (lastX - x) / 2,
      dy2 = (lastY - y) / 2,
      x1 = cosAngle * dx2 + sinAngle * dy2,
      y1 = -sinAngle * dx2 + cosAngle * dy2,
      x1_sq = x1 * x1,
      y1_sq = y1 * y1,
      radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);

  if (radiiCheck > 1) {
    rx = _sqrt$1(radiiCheck) * rx;
    ry = _sqrt$1(radiiCheck) * ry;
  }

  var rx_sq = rx * rx,
      ry_sq = ry * ry,
      sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);

  if (sq < 0) {
    sq = 0;
  }

  var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt$1(sq),
      cx1 = coef * (rx * y1 / ry),
      cy1 = coef * -(ry * x1 / rx),
      sx2 = (lastX + x) / 2,
      sy2 = (lastY + y) / 2,
      cx = sx2 + (cosAngle * cx1 - sinAngle * cy1),
      cy = sy2 + (sinAngle * cx1 + cosAngle * cy1),
      ux = (x1 - cx1) / rx,
      uy = (y1 - cy1) / ry,
      vx = (-x1 - cx1) / rx,
      vy = (-y1 - cy1) / ry,
      temp = ux * ux + uy * uy,
      angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt$1(temp)),
      angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / _sqrt$1(temp * (vx * vx + vy * vy)));

  isNaN(angleExtent) && (angleExtent = PI); //rare edge case. Math.cos(-1) is NaN.

  if (!sweepFlag && angleExtent > 0) {
    angleExtent -= TWOPI;
  } else if (sweepFlag && angleExtent < 0) {
    angleExtent += TWOPI;
  }

  angleStart %= TWOPI;
  angleExtent %= TWOPI;

  var segments = Math.ceil(_abs(angleExtent) / (TWOPI / 4)),
      rawPath = [],
      angleIncrement = angleExtent / segments,
      controlLength = 4 / 3 * _sin$1(angleIncrement / 2) / (1 + _cos$1(angleIncrement / 2)),
      ma = cosAngle * rx,
      mb = sinAngle * rx,
      mc = sinAngle * -ry,
      md = cosAngle * ry,
      i;

  for (i = 0; i < segments; i++) {
    angle = angleStart + i * angleIncrement;
    x1 = _cos$1(angle);
    y1 = _sin$1(angle);
    ux = _cos$1(angle += angleIncrement);
    uy = _sin$1(angle);
    rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
  } //now transform according to the actual size of the ellipse/arc (the beziers were noramlized, between 0 and 1 on a circle).


  for (i = 0; i < rawPath.length; i += 2) {
    x1 = rawPath[i];
    y1 = rawPath[i + 1];
    rawPath[i] = x1 * ma + y1 * mc + cx;
    rawPath[i + 1] = x1 * mb + y1 * md + cy;
  }

  rawPath[i - 2] = x; //always set the end to exactly where it's supposed to be

  rawPath[i - 1] = y;
  return rawPath;
} //Spits back a RawPath with absolute coordinates. Each segment starts with a "moveTo" command (x coordinate, then y) and then 2 control points (x, y, x, y), then anchor. The goal is to minimize memory and maximize speed.


function stringToRawPath(d) {
  var a = (d + "").replace(_scientific, function (m) {
    var n = +m;
    return n < 0.0001 && n > -1e-4 ? 0 : n;
  }).match(_svgPathExp) || [],
      //some authoring programs spit out very small numbers in scientific notation like "1e-5", so make sure we round that down to 0 first.
  path = [],
      relativeX = 0,
      relativeY = 0,
      twoThirds = 2 / 3,
      elements = a.length,
      points = 0,
      errorMessage = "ERROR: malformed path: " + d,
      i,
      j,
      x,
      y,
      command,
      isRelative,
      segment,
      startX,
      startY,
      difX,
      difY,
      beziers,
      prevCommand,
      flag1,
      flag2,
      line = function line(sx, sy, ex, ey) {
    difX = (ex - sx) / 3;
    difY = (ey - sy) / 3;
    segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
  };

  if (!d || !isNaN(a[0]) || isNaN(a[1])) {
    console.log(errorMessage);
    return path;
  }

  for (i = 0; i < elements; i++) {
    prevCommand = command;

    if (isNaN(a[i])) {
      command = a[i].toUpperCase();
      isRelative = command !== a[i]; //lower case means relative
    } else {
      //commands like "C" can be strung together without any new command characters between.
      i--;
    }

    x = +a[i + 1];
    y = +a[i + 2];

    if (isRelative) {
      x += relativeX;
      y += relativeY;
    }

    if (!i) {
      startX = x;
      startY = y;
    } // "M" (move)


    if (command === "M") {
      if (segment) {
        if (segment.length < 8) {
          //if the path data was funky and just had a M with no actual drawing anywhere, skip it.
          path.length -= 1;
        } else {
          points += segment.length;
        }
      }

      relativeX = startX = x;
      relativeY = startY = y;
      segment = [x, y];
      path.push(segment);
      i += 2;
      command = "L"; //an "M" with more than 2 values gets interpreted as "lineTo" commands ("L").
      // "C" (cubic bezier)
    } else if (command === "C") {
      if (!segment) {
        segment = [0, 0];
      }

      if (!isRelative) {
        relativeX = relativeY = 0;
      } //note: "*1" is just a fast/short way to cast the value as a Number. WAAAY faster in Chrome, slightly slower in Firefox.


      segment.push(x, y, relativeX + a[i + 3] * 1, relativeY + a[i + 4] * 1, relativeX += a[i + 5] * 1, relativeY += a[i + 6] * 1);
      i += 6; // "S" (continuation of cubic bezier)
    } else if (command === "S") {
      difX = relativeX;
      difY = relativeY;

      if (prevCommand === "C" || prevCommand === "S") {
        difX += relativeX - segment[segment.length - 4];
        difY += relativeY - segment[segment.length - 3];
      }

      if (!isRelative) {
        relativeX = relativeY = 0;
      }

      segment.push(difX, difY, x, y, relativeX += a[i + 3] * 1, relativeY += a[i + 4] * 1);
      i += 4; // "Q" (quadratic bezier)
    } else if (command === "Q") {
      difX = relativeX + (x - relativeX) * twoThirds;
      difY = relativeY + (y - relativeY) * twoThirds;

      if (!isRelative) {
        relativeX = relativeY = 0;
      }

      relativeX += a[i + 3] * 1;
      relativeY += a[i + 4] * 1;
      segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
      i += 4; // "T" (continuation of quadratic bezier)
    } else if (command === "T") {
      difX = relativeX - segment[segment.length - 4];
      difY = relativeY - segment[segment.length - 3];
      segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
      i += 2; // "H" (horizontal line)
    } else if (command === "H") {
      line(relativeX, relativeY, relativeX = x, relativeY);
      i += 1; // "V" (vertical line)
    } else if (command === "V") {
      //adjust values because the first (and only one) isn't x in this case, it's y.
      line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
      i += 1; // "L" (line) or "Z" (close)
    } else if (command === "L" || command === "Z") {
      if (command === "Z") {
        x = startX;
        y = startY;
        segment.closed = true;
      }

      if (command === "L" || _abs(relativeX - x) > 0.5 || _abs(relativeY - y) > 0.5) {
        line(relativeX, relativeY, x, y);

        if (command === "L") {
          i += 2;
        }
      }

      relativeX = x;
      relativeY = y; // "A" (arc)
    } else if (command === "A") {
      flag1 = a[i + 4];
      flag2 = a[i + 5];
      difX = a[i + 6];
      difY = a[i + 7];
      j = 7;

      if (flag1.length > 1) {
        // for cases when the flags are merged, like "a8 8 0 018 8" (the 0 and 1 flags are WITH the x value of 8, but it could also be "a8 8 0 01-8 8" so it may include x or not)
        if (flag1.length < 3) {
          difY = difX;
          difX = flag2;
          j--;
        } else {
          difY = flag2;
          difX = flag1.substr(2);
          j -= 2;
        }

        flag2 = flag1.charAt(1);
        flag1 = flag1.charAt(0);
      }

      beziers = arcToSegment(relativeX, relativeY, +a[i + 1], +a[i + 2], +a[i + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + difX * 1, (isRelative ? relativeY : 0) + difY * 1);
      i += j;

      if (beziers) {
        for (j = 0; j < beziers.length; j++) {
          segment.push(beziers[j]);
        }
      }

      relativeX = segment[segment.length - 2];
      relativeY = segment[segment.length - 1];
    } else {
      console.log(errorMessage);
    }
  }

  i = segment.length;

  if (i < 6) {
    //in case there's odd SVG like a M0,0 command at the very end.
    path.pop();
    i = 0;
  } else if (segment[0] === segment[i - 2] && segment[1] === segment[i - 1]) {
    segment.closed = true;
  }

  path.totalPoints = points + i;
  return path;
} //populates the points array in alternating x/y values (like [x, y, x, y...] instead of individual point objects [{x, y}, {x, y}...] to conserve memory and stay in line with how we're handling segment arrays
/*
Takes any of the following and converts it to an all Cubic Bezier SVG data string:
- A <path> data string like "M0,0 L2,4 v20,15 H100"
- A RawPath, like [[x, y, x, y, x, y, x, y][[x, y, x, y, x, y, x, y]]
- A Segment, like [x, y, x, y, x, y, x, y]

Note: all numbers are rounded down to the closest 0.001 to minimize memory, maximize speed, and avoid odd numbers like 1e-13
*/

function rawPathToString(rawPath) {
  if (_isNumber(rawPath[0])) {
    //in case a segment is passed in instead
    rawPath = [rawPath];
  }

  var result = "",
      l = rawPath.length,
      sl,
      s,
      i,
      segment;

  for (s = 0; s < l; s++) {
    segment = rawPath[s];
    result += "M" + _round(segment[0]) + "," + _round(segment[1]) + " C";
    sl = segment.length;

    for (i = 2; i < sl; i++) {
      result += _round(segment[i++]) + "," + _round(segment[i++]) + " " + _round(segment[i++]) + "," + _round(segment[i++]) + " " + _round(segment[i++]) + "," + _round(segment[i]) + " ";
    }

    if (segment.closed) {
      result += "z";
    }
  }

  return result;
}
/*
// takes a segment with coordinates [x, y, x, y, ...] and converts the control points into angles and lengths [x, y, angle, length, angle, length, x, y, angle, length, ...] so that it animates more cleanly and avoids odd breaks/kinks. For example, if you animate from 1 o'clock to 6 o'clock, it'd just go directly/linearly rather than around. So the length would be very short in the middle of the tween.
export function cpCoordsToAngles(segment, copy) {
	var result = copy ? segment.slice(0) : segment,
		x, y, i;
	for (i = 0; i < segment.length; i+=6) {
		x = segment[i+2] - segment[i];
		y = segment[i+3] - segment[i+1];
		result[i+2] = Math.atan2(y, x);
		result[i+3] = Math.sqrt(x * x + y * y);
		x = segment[i+6] - segment[i+4];
		y = segment[i+7] - segment[i+5];
		result[i+4] = Math.atan2(y, x);
		result[i+5] = Math.sqrt(x * x + y * y);
	}
	return result;
}

// takes a segment that was converted with cpCoordsToAngles() to have angles and lengths instead of coordinates for the control points, and converts it BACK into coordinates.
export function cpAnglesToCoords(segment, copy) {
	var result = copy ? segment.slice(0) : segment,
		length = segment.length,
		rnd = 1000,
		angle, l, i, j;
	for (i = 0; i < length; i+=6) {
		angle = segment[i+2];
		l = segment[i+3]; //length
		result[i+2] = (((segment[i] + Math.cos(angle) * l) * rnd) | 0) / rnd;
		result[i+3] = (((segment[i+1] + Math.sin(angle) * l) * rnd) | 0) / rnd;
		angle = segment[i+4];
		l = segment[i+5]; //length
		result[i+4] = (((segment[i+6] - Math.cos(angle) * l) * rnd) | 0) / rnd;
		result[i+5] = (((segment[i+7] - Math.sin(angle) * l) * rnd) | 0) / rnd;
	}
	return result;
}

//adds an "isSmooth" array to each segment and populates it with a boolean value indicating whether or not it's smooth (the control points have basically the same slope). For any smooth control points, it converts the coordinates into angle (x, in radians) and length (y) and puts them into the same index value in a smoothData array.
export function populateSmoothData(rawPath) {
	let j = rawPath.length,
		smooth, segment, x, y, x2, y2, i, l, a, a2, isSmooth, smoothData;
	while (--j > -1) {
		segment = rawPath[j];
		isSmooth = segment.isSmooth = segment.isSmooth || [0, 0, 0, 0];
		smoothData = segment.smoothData = segment.smoothData || [0, 0, 0, 0];
		isSmooth.length = 4;
		l = segment.length - 2;
		for (i = 6; i < l; i += 6) {
			x = segment[i] - segment[i - 2];
			y = segment[i + 1] - segment[i - 1];
			x2 = segment[i + 2] - segment[i];
			y2 = segment[i + 3] - segment[i + 1];
			a = _atan2(y, x);
			a2 = _atan2(y2, x2);
			smooth = (Math.abs(a - a2) < 0.09);
			if (smooth) {
				smoothData[i - 2] = a;
				smoothData[i + 2] = a2;
				smoothData[i - 1] = _sqrt(x * x + y * y);
				smoothData[i + 3] = _sqrt(x2 * x2 + y2 * y2);
			}
			isSmooth.push(smooth, smooth, 0, 0, smooth, smooth);
		}
		//if the first and last points are identical, check to see if there's a smooth transition. We must handle this a bit differently due to their positions in the array.
		if (segment[l] === segment[0] && segment[l+1] === segment[1]) {
			x = segment[0] - segment[l-2];
			y = segment[1] - segment[l-1];
			x2 = segment[2] - segment[0];
			y2 = segment[3] - segment[1];
			a = _atan2(y, x);
			a2 = _atan2(y2, x2);
			if (Math.abs(a - a2) < 0.09) {
				smoothData[l-2] = a;
				smoothData[2] = a2;
				smoothData[l-1] = _sqrt(x * x + y * y);
				smoothData[3] = _sqrt(x2 * x2 + y2 * y2);
				isSmooth[l-2] = isSmooth[l-1] = true; //don't change indexes 2 and 3 because we'll trigger everything from the END, and this will optimize file size a bit.
			}
		}
	}
	return rawPath;
}
export function pointToScreen(svgElement, point) {
	if (arguments.length < 2) { //by default, take the first set of coordinates in the path as the point
		let rawPath = getRawPath(svgElement);
		point = svgElement.ownerSVGElement.createSVGPoint();
		point.x = rawPath[0][0];
		point.y = rawPath[0][1];
	}
	return point.matrixTransform(svgElement.getScreenCTM());
}
// takes a <path> and normalizes all of its coordinates to values between 0 and 1
export function normalizePath(path) {
  path = gsap.utils.toArray(path);
  if (!path[0].hasAttribute("d")) {
    path = gsap.utils.toArray(path[0].children);
  }
  if (path.length > 1) {
    path.forEach(normalizePath);
    return path;
  }
  let _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
      _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
      d = path[0].getAttribute("d"),
      a = d.replace(_scientific, m => { let n = +m; return (n < 0.0001 && n > -0.0001) ? 0 : n; }).match(_svgPathExp),
      nums = a.filter(n => !isNaN(n)).map(n => +n),
      normalize = gsap.utils.normalize(Math.min(...nums), Math.max(...nums)),
      finals = a.map(val => isNaN(val) ? val : normalize(+val)),
      s = "",
      prevWasCommand;
  finals.forEach((value, i) => {
    let isCommand = isNaN(value)
    s += (isCommand && i ? " " : prevWasCommand || !i ? "" : ",") + value;
    prevWasCommand = isCommand;
  });
  path[0].setAttribute("d", s);
}
*/

/*!
 * MorphSVGPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/


var gsap,
    _toArray,
    _lastLinkedAnchor,
    _coreInitted,
    PluginClass,
    _getGSAP = function _getGSAP() {
  return gsap || "undefined" !== "undefined";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _atan2 = Math.atan2,
    _cos = Math.cos,
    _sin = Math.sin,
    _sqrt = Math.sqrt,
    _PI = Math.PI,
    _2PI = _PI * 2,
    _angleMin = _PI * 0.3,
    _angleMax = _PI * 0.7,
    _bigNum = 1e20,
    _numExp = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_selectorExp = /(^[#\.][a-z]|[a-y][a-z])/i,
    _commands = /[achlmqstvz]/i,
    _log = function _log(message) {
  return console && console.warn(message);
},
    _bonusValidated = 1,
    //<name>MorphSVGPlugin</name>
_getAverageXY = function _getAverageXY(segment) {
  var l = segment.length,
      x = 0,
      y = 0,
      i;

  for (i = 0; i < l; i++) {
    x += segment[i++];
    y += segment[i];
  }

  return [x / (l / 2), y / (l / 2)];
},
    _getSize = function _getSize(segment) {
  //rough estimate of the bounding box (based solely on the anchors) of a single segment. sets "size", "centerX", and "centerY" properties on the bezier array itself, and returns the size (width * height)
  var l = segment.length,
      xMax = segment[0],
      xMin = xMax,
      yMax = segment[1],
      yMin = yMax,
      x,
      y,
      i;

  for (i = 6; i < l; i += 6) {
    x = segment[i];
    y = segment[i + 1];

    if (x > xMax) {
      xMax = x;
    } else if (x < xMin) {
      xMin = x;
    }

    if (y > yMax) {
      yMax = y;
    } else if (y < yMin) {
      yMin = y;
    }
  }

  segment.centerX = (xMax + xMin) / 2;
  segment.centerY = (yMax + yMin) / 2;
  return segment.size = (xMax - xMin) * (yMax - yMin);
},
    _getTotalSize = function _getTotalSize(rawPath, samplesPerBezier) {
  if (samplesPerBezier === void 0) {
    samplesPerBezier = 3;
  }

  //rough estimate of the bounding box of the entire list of Bezier segments (based solely on the anchors). sets "size", "centerX", and "centerY" properties on the bezier array itself, and returns the size (width * height)
  var j = rawPath.length,
      xMax = rawPath[0][0],
      xMin = xMax,
      yMax = rawPath[0][1],
      yMin = yMax,
      inc = 1 / samplesPerBezier,
      l,
      x,
      y,
      i,
      segment,
      k,
      t,
      inv,
      x1,
      y1,
      x2,
      x3,
      x4,
      y2,
      y3,
      y4;

  while (--j > -1) {
    segment = rawPath[j];
    l = segment.length;

    for (i = 6; i < l; i += 6) {
      x1 = segment[i];
      y1 = segment[i + 1];
      x2 = segment[i + 2] - x1;
      y2 = segment[i + 3] - y1;
      x3 = segment[i + 4] - x1;
      y3 = segment[i + 5] - y1;
      x4 = segment[i + 6] - x1;
      y4 = segment[i + 7] - y1;
      k = samplesPerBezier;

      while (--k > -1) {
        t = inc * k;
        inv = 1 - t;
        x = (t * t * x4 + 3 * inv * (t * x3 + inv * x2)) * t + x1;
        y = (t * t * y4 + 3 * inv * (t * y3 + inv * y2)) * t + y1;

        if (x > xMax) {
          xMax = x;
        } else if (x < xMin) {
          xMin = x;
        }

        if (y > yMax) {
          yMax = y;
        } else if (y < yMin) {
          yMin = y;
        }
      }
    }
  }

  rawPath.centerX = (xMax + xMin) / 2;
  rawPath.centerY = (yMax + yMin) / 2;
  rawPath.left = xMin;
  rawPath.width = xMax - xMin;
  rawPath.top = yMin;
  rawPath.height = yMax - yMin;
  return rawPath.size = (xMax - xMin) * (yMax - yMin);
},
    _sortByComplexity = function _sortByComplexity(a, b) {
  return b.length - a.length;
},
    _sortBySize = function _sortBySize(a, b) {
  var sizeA = a.size || _getSize(a),
      sizeB = b.size || _getSize(b);

  return Math.abs(sizeB - sizeA) < (sizeA + sizeB) / 20 ? b.centerX - a.centerX || b.centerY - a.centerY : sizeB - sizeA; //if the size is within 10% of each other, prioritize position from left to right, then top to bottom.
},
    _offsetSegment = function _offsetSegment(segment, shapeIndex) {
  var a = segment.slice(0),
      l = segment.length,
      wrap = l - 2,
      i,
      index;
  shapeIndex = shapeIndex | 0;

  for (i = 0; i < l; i++) {
    index = (i + shapeIndex) % wrap;
    segment[i++] = a[index];
    segment[i] = a[index + 1];
  }
},
    _getTotalMovement = function _getTotalMovement(sb, eb, shapeIndex, offsetX, offsetY) {
  var l = sb.length,
      d = 0,
      wrap = l - 2,
      index,
      i,
      x,
      y;
  shapeIndex *= 6;

  for (i = 0; i < l; i += 6) {
    index = (i + shapeIndex) % wrap;
    y = sb[index] - (eb[i] - offsetX);
    x = sb[index + 1] - (eb[i + 1] - offsetY);
    d += _sqrt(x * x + y * y);
  }

  return d;
},
    _getClosestShapeIndex = function _getClosestShapeIndex(sb, eb, checkReverse) {
  //finds the index in a closed cubic bezier array that's closest to the angle provided (angle measured from the center or average x/y).
  var l = sb.length,
      sCenter = _getAverageXY(sb),
      //when comparing distances, adjust the coordinates as if the shapes are centered with each other.
  eCenter = _getAverageXY(eb),
      offsetX = eCenter[0] - sCenter[0],
      offsetY = eCenter[1] - sCenter[1],
      min = _getTotalMovement(sb, eb, 0, offsetX, offsetY),
      minIndex = 0,
      copy,
      d,
      i;

  for (i = 6; i < l; i += 6) {
    d = _getTotalMovement(sb, eb, i / 6, offsetX, offsetY);

    if (d < min) {
      min = d;
      minIndex = i;
    }
  }

  if (checkReverse) {
    copy = sb.slice(0);
    reverseSegment(copy);

    for (i = 6; i < l; i += 6) {
      d = _getTotalMovement(copy, eb, i / 6, offsetX, offsetY);

      if (d < min) {
        min = d;
        minIndex = -i;
      }
    }
  }

  return minIndex / 6;
},
    _getClosestAnchor = function _getClosestAnchor(rawPath, x, y) {
  //finds the x/y of the anchor that's closest to the provided x/y coordinate (returns an array, like [x, y]). The bezier should be the top-level type that contains an array for each segment.
  var j = rawPath.length,
      closestDistance = _bigNum,
      closestX = 0,
      closestY = 0,
      segment,
      dx,
      dy,
      d,
      i,
      l;

  while (--j > -1) {
    segment = rawPath[j];
    l = segment.length;

    for (i = 0; i < l; i += 6) {
      dx = segment[i] - x;
      dy = segment[i + 1] - y;
      d = _sqrt(dx * dx + dy * dy);

      if (d < closestDistance) {
        closestDistance = d;
        closestX = segment[i];
        closestY = segment[i + 1];
      }
    }
  }

  return [closestX, closestY];
},
    _getClosestSegment = function _getClosestSegment(bezier, pool, startIndex, sortRatio, offsetX, offsetY) {
  //matches the bezier to the closest one in a pool (array) of beziers, assuming they are in order of size and we shouldn't drop more than 20% of the size, otherwise prioritizing location (total distance to the center). Extracts the segment out of the pool array and returns it.
  var l = pool.length,
      index = 0,
      minSize = Math.min(bezier.size || _getSize(bezier), pool[startIndex].size || _getSize(pool[startIndex])) * sortRatio,
      //limit things based on a percentage of the size of either the bezier or the next element in the array, whichever is smaller.
  min = _bigNum,
      cx = bezier.centerX + offsetX,
      cy = bezier.centerY + offsetY,
      size,
      i,
      dx,
      dy,
      d;

  for (i = startIndex; i < l; i++) {
    size = pool[i].size || _getSize(pool[i]);

    if (size < minSize) {
      break;
    }

    dx = pool[i].centerX - cx;
    dy = pool[i].centerY - cy;
    d = _sqrt(dx * dx + dy * dy);

    if (d < min) {
      index = i;
      min = d;
    }
  }

  d = pool[index];
  pool.splice(index, 1);
  return d;
},
    _subdivideSegmentQty = function _subdivideSegmentQty(segment, quantity) {
  var tally = 0,
      max = 0.999999,
      l = segment.length,
      newPointsPerSegment = quantity / ((l - 2) / 6),
      ax,
      ay,
      cp1x,
      cp1y,
      cp2x,
      cp2y,
      bx,
      by,
      x1,
      y1,
      x2,
      y2,
      i,
      t;

  for (i = 2; i < l; i += 6) {
    tally += newPointsPerSegment;

    while (tally > max) {
      //compare with 0.99999 instead of 1 in order to prevent rounding errors
      ax = segment[i - 2];
      ay = segment[i - 1];
      cp1x = segment[i];
      cp1y = segment[i + 1];
      cp2x = segment[i + 2];
      cp2y = segment[i + 3];
      bx = segment[i + 4];
      by = segment[i + 5];
      t = 1 / ((Math.floor(tally) || 1) + 1); //progress along the bezier (value between 0 and 1)

      x1 = ax + (cp1x - ax) * t;
      x2 = cp1x + (cp2x - cp1x) * t;
      x1 += (x2 - x1) * t;
      x2 += (cp2x + (bx - cp2x) * t - x2) * t;
      y1 = ay + (cp1y - ay) * t;
      y2 = cp1y + (cp2y - cp1y) * t;
      y1 += (y2 - y1) * t;
      y2 += (cp2y + (by - cp2y) * t - y2) * t;
      segment.splice(i, 4, ax + (cp1x - ax) * t, //first control point
      ay + (cp1y - ay) * t, x1, //second control point
      y1, x1 + (x2 - x1) * t, //new fabricated anchor on line
      y1 + (y2 - y1) * t, x2, //third control point
      y2, cp2x + (bx - cp2x) * t, //fourth control point
      cp2y + (by - cp2y) * t);
      i += 6;
      l += 6;
      tally--;
    }
  }

  return segment;
},
    _equalizeSegmentQuantity = function _equalizeSegmentQuantity(start, end, shapeIndex, map, fillSafe) {
  //returns an array of shape indexes, 1 for each segment.
  var dif = end.length - start.length,
      longer = dif > 0 ? end : start,
      shorter = dif > 0 ? start : end,
      added = 0,
      sortMethod = map === "complexity" ? _sortByComplexity : _sortBySize,
      sortRatio = map === "position" ? 0 : typeof map === "number" ? map : 0.8,
      i = shorter.length,
      shapeIndices = typeof shapeIndex === "object" && shapeIndex.push ? shapeIndex.slice(0) : [shapeIndex],
      reverse = shapeIndices[0] === "reverse" || shapeIndices[0] < 0,
      log = shapeIndex === "log",
      eb,
      sb,
      b,
      x,
      y,
      offsetX,
      offsetY;

  if (!shorter[0]) {
    return;
  }

  if (longer.length > 1) {
    start.sort(sortMethod);
    end.sort(sortMethod);
    offsetX = longer.size || _getTotalSize(longer); //ensures centerX and centerY are defined (used below).

    offsetX = shorter.size || _getTotalSize(shorter);
    offsetX = longer.centerX - shorter.centerX;
    offsetY = longer.centerY - shorter.centerY;

    if (sortMethod === _sortBySize) {
      for (i = 0; i < shorter.length; i++) {
        longer.splice(i, 0, _getClosestSegment(shorter[i], longer, i, sortRatio, offsetX, offsetY));
      }
    }
  }

  if (dif) {
    if (dif < 0) {
      dif = -dif;
    }

    if (longer[0].length > shorter[0].length) {
      //since we use shorter[0] as the one to map the origination point of any brand new fabricated segments, do any subdividing first so that there are more points to choose from (if necessary)
      _subdivideSegmentQty(shorter[0], (longer[0].length - shorter[0].length) / 6 | 0);
    }

    i = shorter.length;

    while (added < dif) {
      x = longer[i].size || _getSize(longer[i]); //just to ensure centerX and centerY are calculated which we use on the next line.

      b = _getClosestAnchor(shorter, longer[i].centerX, longer[i].centerY);
      x = b[0];
      y = b[1];
      shorter[i++] = [x, y, x, y, x, y, x, y];
      shorter.totalPoints += 8;
      added++;
    }
  }

  for (i = 0; i < start.length; i++) {
    eb = end[i];
    sb = start[i];
    dif = eb.length - sb.length;

    if (dif < 0) {
      _subdivideSegmentQty(eb, -dif / 6 | 0);
    } else if (dif > 0) {
      _subdivideSegmentQty(sb, dif / 6 | 0);
    }

    if (reverse && fillSafe !== false && !sb.reversed) {
      reverseSegment(sb);
    }

    shapeIndex = shapeIndices[i] || shapeIndices[i] === 0 ? shapeIndices[i] : "auto";

    if (shapeIndex) {
      //if start shape is closed, find the closest point to the start/end, and re-organize the bezier points accordingly so that the shape morphs in a more intuitive way.
      if (sb.closed || Math.abs(sb[0] - sb[sb.length - 2]) < 0.5 && Math.abs(sb[1] - sb[sb.length - 1]) < 0.5) {
        if (shapeIndex === "auto" || shapeIndex === "log") {
          shapeIndices[i] = shapeIndex = _getClosestShapeIndex(sb, eb, !i || fillSafe === false);

          if (shapeIndex < 0) {
            reverse = true;
            reverseSegment(sb);
            shapeIndex = -shapeIndex;
          }

          _offsetSegment(sb, shapeIndex * 6);
        } else if (shapeIndex !== "reverse") {
          if (i && shapeIndex < 0) {
            //only happens if an array is passed as shapeIndex and a negative value is defined for an index beyond 0. Very rare, but helpful sometimes.
            reverseSegment(sb);
          }

          _offsetSegment(sb, (shapeIndex < 0 ? -shapeIndex : shapeIndex) * 6);
        } //otherwise, if it's not a closed shape, consider reversing it if that would make the overall travel less

      } else if (!reverse && (shapeIndex === "auto" && Math.abs(eb[0] - sb[0]) + Math.abs(eb[1] - sb[1]) + Math.abs(eb[eb.length - 2] - sb[sb.length - 2]) + Math.abs(eb[eb.length - 1] - sb[sb.length - 1]) > Math.abs(eb[0] - sb[sb.length - 2]) + Math.abs(eb[1] - sb[sb.length - 1]) + Math.abs(eb[eb.length - 2] - sb[0]) + Math.abs(eb[eb.length - 1] - sb[1]) || shapeIndex % 2)) {
        reverseSegment(sb);
        shapeIndices[i] = -1;
        reverse = true;
      } else if (shapeIndex === "auto") {
        shapeIndices[i] = 0;
      } else if (shapeIndex === "reverse") {
        shapeIndices[i] = -1;
      }

      if (sb.closed !== eb.closed) {
        //if one is closed and one isn't, don't close either one otherwise the tweening will look weird (but remember, the beginning and final states will honor the actual values, so this only affects the inbetween state)
        sb.closed = eb.closed = false;
      }
    }
  }

  log && _log("shapeIndex:[" + shapeIndices.join(",") + "]");
  start.shapeIndex = shapeIndices;
  return shapeIndices;
},
    _pathFilter = function _pathFilter(a, shapeIndex, map, precompile, fillSafe) {
  var start = stringToRawPath(a[0]),
      end = stringToRawPath(a[1]);

  if (!_equalizeSegmentQuantity(start, end, shapeIndex || shapeIndex === 0 ? shapeIndex : "auto", map, fillSafe)) {
    return; //malformed path data or null target
  }

  a[0] = rawPathToString(start);
  a[1] = rawPathToString(end);

  if (precompile === "log" || precompile === true) {
    _log('precompile:["' + a[0] + '","' + a[1] + '"]');
  }
},
    _offsetPoints = function _offsetPoints(text, offset) {
  if (!offset) {
    return text;
  }

  var a = text.match(_numExp) || [],
      l = a.length,
      s = "",
      inc,
      i,
      j;

  if (offset === "reverse") {
    i = l - 1;
    inc = -2;
  } else {
    i = ((parseInt(offset, 10) || 0) * 2 + 1 + l * 100) % l;
    inc = 2;
  }

  for (j = 0; j < l; j += 2) {
    s += a[i - 1] + "," + a[i] + " ";
    i = (i + inc) % l;
  }

  return s;
},
    //adds a certain number of points while maintaining the polygon/polyline shape (so that the start/end values can have a matching quantity of points to animate). Returns the revised string.
_equalizePointQuantity = function _equalizePointQuantity(a, quantity) {
  var tally = 0,
      x = parseFloat(a[0]),
      y = parseFloat(a[1]),
      s = x + "," + y + " ",
      max = 0.999999,
      newPointsPerSegment,
      i,
      l,
      j,
      factor,
      nextX,
      nextY;
  l = a.length;
  newPointsPerSegment = quantity * 0.5 / (l * 0.5 - 1);

  for (i = 0; i < l - 2; i += 2) {
    tally += newPointsPerSegment;
    nextX = parseFloat(a[i + 2]);
    nextY = parseFloat(a[i + 3]);

    if (tally > max) {
      //compare with 0.99999 instead of 1 in order to prevent rounding errors
      factor = 1 / (Math.floor(tally) + 1);
      j = 1;

      while (tally > max) {
        s += (x + (nextX - x) * factor * j).toFixed(2) + "," + (y + (nextY - y) * factor * j).toFixed(2) + " ";
        tally--;
        j++;
      }
    }

    s += nextX + "," + nextY + " ";
    x = nextX;
    y = nextY;
  }

  return s;
},
    _pointsFilter = function _pointsFilter(a) {
  var startNums = a[0].match(_numExp) || [],
      endNums = a[1].match(_numExp) || [],
      dif = endNums.length - startNums.length;

  if (dif > 0) {
    a[0] = _equalizePointQuantity(startNums, dif);
  } else {
    a[1] = _equalizePointQuantity(endNums, -dif);
  }
},
    _buildPointsFilter = function _buildPointsFilter(shapeIndex) {
  return !isNaN(shapeIndex) ? function (a) {
    _pointsFilter(a);

    a[1] = _offsetPoints(a[1], parseInt(shapeIndex, 10));
  } : _pointsFilter;
},
    _parseShape = function _parseShape(shape, forcePath, target) {
  var isString = typeof shape === "string",
      e,
      type;

  if (!isString || _selectorExp.test(shape) || (shape.match(_numExp) || []).length < 3) {
    e = _toArray(shape)[0];

    if (e) {
      type = (e.nodeName + "").toUpperCase();

      if (forcePath && type !== "PATH") {
        //if we were passed an element (or selector text for an element) that isn't a path, convert it.
        e = convertToPath(e, false);
        type = "PATH";
      }

      shape = e.getAttribute(type === "PATH" ? "d" : "points") || "";

      if (e === target) {
        //if the shape matches the target element, the user wants to revert to the original which should have been stored in the data-original attribute
        shape = e.getAttributeNS(null, "data-original") || shape;
      }
    } else {
      _log("WARNING: invalid morph to: " + shape);

      shape = false;
    }
  }

  return shape;
},
    //adds an "isSmooth" array to each segment and populates it with a boolean value indicating whether or not it's smooth (the control points have basically the same slope). For any smooth control points, it converts the coordinates into angle (x, in radians) and length (y) and puts them into the same index value in a smoothData array.
_populateSmoothData = function _populateSmoothData(rawPath, tolerance) {
  var j = rawPath.length,
      limit = 0.2 * (tolerance || 1),
      smooth,
      segment,
      x,
      y,
      x2,
      y2,
      i,
      l,
      a,
      a2,
      isSmooth,
      smoothData;

  while (--j > -1) {
    segment = rawPath[j];
    isSmooth = segment.isSmooth = segment.isSmooth || [0, 0, 0, 0];
    smoothData = segment.smoothData = segment.smoothData || [0, 0, 0, 0];
    isSmooth.length = 4;
    l = segment.length - 2;

    for (i = 6; i < l; i += 6) {
      x = segment[i] - segment[i - 2];
      y = segment[i + 1] - segment[i - 1];
      x2 = segment[i + 2] - segment[i];
      y2 = segment[i + 3] - segment[i + 1];
      a = _atan2(y, x);
      a2 = _atan2(y2, x2);
      smooth = Math.abs(a - a2) < limit;

      if (smooth) {
        smoothData[i - 2] = a;
        smoothData[i + 2] = a2;
        smoothData[i - 1] = _sqrt(x * x + y * y);
        smoothData[i + 3] = _sqrt(x2 * x2 + y2 * y2);
      }

      isSmooth.push(smooth, smooth, 0, 0, smooth, smooth);
    } //if the first and last points are identical, check to see if there's a smooth transition. We must handle this a bit differently due to their positions in the array.


    if (segment[l] === segment[0] && segment[l + 1] === segment[1]) {
      x = segment[0] - segment[l - 2];
      y = segment[1] - segment[l - 1];
      x2 = segment[2] - segment[0];
      y2 = segment[3] - segment[1];
      a = _atan2(y, x);
      a2 = _atan2(y2, x2);

      if (Math.abs(a - a2) < limit) {
        smoothData[l - 2] = a;
        smoothData[2] = a2;
        smoothData[l - 1] = _sqrt(x * x + y * y);
        smoothData[3] = _sqrt(x2 * x2 + y2 * y2);
        isSmooth[l - 2] = isSmooth[l - 1] = true; //don't change indexes 2 and 3 because we'll trigger everything from the END, and this will optimize file size a bit.
      }
    }
  }

  return rawPath;
},
    _parseOriginFactors = function _parseOriginFactors(v) {
  var a = v.trim().split(" "),
      x = ~v.indexOf("left") ? 0 : ~v.indexOf("right") ? 100 : isNaN(parseFloat(a[0])) ? 50 : parseFloat(a[0]),
      y = ~v.indexOf("top") ? 0 : ~v.indexOf("bottom") ? 100 : isNaN(parseFloat(a[1])) ? 50 : parseFloat(a[1]);
  return {
    x: x / 100,
    y: y / 100
  };
},
    _shortAngle = function _shortAngle(dif) {
  return dif !== dif % _PI ? dif + (dif < 0 ? _2PI : -_2PI) : dif;
},
    _morphMessage = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
    _tweenRotation = function _tweenRotation(start, end, i, linkedPT) {
  var so = this._origin,
      //starting origin
  eo = this._eOrigin,
      //ending origin
  dx = start[i] - so.x,
      dy = start[i + 1] - so.y,
      d = _sqrt(dx * dx + dy * dy),
      //length from starting origin to starting point
  sa = _atan2(dy, dx),
      angleDif,
      _short;

  dx = end[i] - eo.x;
  dy = end[i + 1] - eo.y;
  angleDif = _atan2(dy, dx) - sa;
  _short = _shortAngle(angleDif); //in the case of control points, we ALWAYS link them to their anchor so that they don't get torn apart and rotate the opposite direction. If it's not a control point, we look at the most recently linked point as long as they're within a certain rotational range of each other.

  if (!linkedPT && _lastLinkedAnchor && Math.abs(_short + _lastLinkedAnchor.ca) < _angleMin) {
    linkedPT = _lastLinkedAnchor;
  }

  return this._anchorPT = _lastLinkedAnchor = {
    _next: this._anchorPT,
    t: start,
    sa: sa,
    //starting angle
    ca: linkedPT && _short * linkedPT.ca < 0 && Math.abs(_short) > _angleMax ? angleDif : _short,
    //change in angle
    sl: d,
    //starting length
    cl: _sqrt(dx * dx + dy * dy) - d,
    //change in length
    i: i
  };
},
    _initCore = function _initCore(required) {
  gsap = _getGSAP();
  PluginClass = PluginClass || gsap && gsap.plugins.morphSVG;

  if (gsap && PluginClass) {
    _toArray = gsap.utils.toArray;
    PluginClass.prototype._tweenRotation = _tweenRotation;
    _coreInitted = 1;
  } else if (required) {
    _log("Please gsap.registerPlugin(MorphSVGPlugin)");
  }
};

var MorphSVGPlugin = {
  version: "3.13.0",
  name: "morphSVG",
  rawVars: 1,
  // otherwise "render" would be interpreted as a function-based value.
  register: function register(core, Plugin) {
    gsap = core;
    PluginClass = Plugin;

    _initCore();
  },
  init: function init(target, value, tween, index, targets) {
    _coreInitted || _initCore(1);

    if (!value) {
      _log("invalid shape");

      return false;
    }

    _isFunction(value) && (value = value.call(tween, index, target, targets));
    var type, p, pt, shape, isPoly, shapeIndex, map, startSmooth, endSmooth, start, end, i, j, l, startSeg, endSeg, precompiled, sData, eData, originFactors, useRotation, offset;

    if (typeof value === "string" || value.getBBox || value[0]) {
      value = {
        shape: value
      };
    } else if (typeof value === "object") {
      // if there are any function-based values, parse them here (and make a copy of the object so we're not modifying the original)
      type = {};

      for (p in value) {
        type[p] = _isFunction(value[p]) && p !== "render" ? value[p].call(tween, index, target, targets) : value[p];
      }

      value = type;
    }

    var cs = target.nodeType ? window.getComputedStyle(target) : {},
        fill = cs.fill + "",
        fillSafe = !(fill === "none" || (fill.match(_numExp) || [])[3] === "0" || cs.fillRule === "evenodd"),
        origins = (value.origin || "50 50").split(",");
    type = (target.nodeName + "").toUpperCase();
    isPoly = type === "POLYLINE" || type === "POLYGON";

    if (type !== "PATH" && !isPoly && !value.prop) {
      _log("Cannot morph a <" + type + "> element. " + _morphMessage);

      return false;
    }

    p = type === "PATH" ? "d" : "points";

    if (!value.prop && !_isFunction(target.setAttribute)) {
      return false;
    }

    shape = _parseShape(value.shape || value.d || value.points || "", p === "d", target);

    if (isPoly && _commands.test(shape)) {
      _log("A <" + type + "> cannot accept path data. " + _morphMessage);

      return false;
    }

    shapeIndex = value.shapeIndex || value.shapeIndex === 0 ? value.shapeIndex : "auto";
    map = value.map || MorphSVGPlugin.defaultMap;
    this._prop = value.prop;
    this._render = value.render || MorphSVGPlugin.defaultRender;
    this._apply = "updateTarget" in value ? value.updateTarget : MorphSVGPlugin.defaultUpdateTarget;
    this._rnd = Math.pow(10, isNaN(value.precision) ? 2 : +value.precision);
    this._tween = tween;

    if (shape) {
      this._target = target;
      precompiled = typeof value.precompile === "object";
      start = this._prop ? target[this._prop] : target.getAttribute(p);

      if (!this._prop && !target.getAttributeNS(null, "data-original")) {
        target.setAttributeNS(null, "data-original", start); //record the original state in a data-original attribute so that we can revert to it later.
      }

      if (p === "d" || this._prop) {
        start = stringToRawPath(precompiled ? value.precompile[0] : start);
        end = stringToRawPath(precompiled ? value.precompile[1] : shape);

        if (!precompiled && !_equalizeSegmentQuantity(start, end, shapeIndex, map, fillSafe)) {
          return false; //malformed path data or null target
        }

        if (value.precompile === "log" || value.precompile === true) {
          _log('precompile:["' + rawPathToString(start) + '","' + rawPathToString(end) + '"]');
        }

        useRotation = (value.type || MorphSVGPlugin.defaultType) !== "linear";

        if (useRotation) {
          start = _populateSmoothData(start, value.smoothTolerance);
          end = _populateSmoothData(end, value.smoothTolerance);

          if (!start.size) {
            _getTotalSize(start); //adds top/left/width/height values

          }

          if (!end.size) {
            _getTotalSize(end);
          }

          originFactors = _parseOriginFactors(origins[0]);
          this._origin = start.origin = {
            x: start.left + originFactors.x * start.width,
            y: start.top + originFactors.y * start.height
          };

          if (origins[1]) {
            originFactors = _parseOriginFactors(origins[1]);
          }

          this._eOrigin = {
            x: end.left + originFactors.x * end.width,
            y: end.top + originFactors.y * end.height
          };
        }

        this._rawPath = target._gsRawPath = start;
        j = start.length;

        while (--j > -1) {
          startSeg = start[j];
          endSeg = end[j];
          startSmooth = startSeg.isSmooth || [];
          endSmooth = endSeg.isSmooth || [];
          l = startSeg.length;
          _lastLinkedAnchor = 0; //reset; we use _lastLinkedAnchor in the _tweenRotation() method to help make sure that close points don't get ripped apart and rotate opposite directions. Typically we want to go the shortest direction, but if the previous anchor is going a different direction, we override this logic (within certain thresholds)

          for (i = 0; i < l; i += 2) {
            if (endSeg[i] !== startSeg[i] || endSeg[i + 1] !== startSeg[i + 1]) {
              if (useRotation) {
                if (startSmooth[i] && endSmooth[i]) {
                  //if BOTH starting and ending values are smooth (meaning control points have basically the same slope), interpolate the rotation and length instead of the coordinates (this is what makes things smooth).
                  sData = startSeg.smoothData;
                  eData = endSeg.smoothData;
                  offset = i + (i === l - 4 ? 7 - l : 5); //helps us accommodate wrapping (like if the end and start anchors are identical and the control points are smooth).

                  this._controlPT = {
                    _next: this._controlPT,
                    i: i,
                    j: j,
                    l1s: sData[i + 1],
                    l1c: eData[i + 1] - sData[i + 1],
                    l2s: sData[offset],
                    l2c: eData[offset] - sData[offset]
                  };
                  pt = this._tweenRotation(startSeg, endSeg, i + 2);

                  this._tweenRotation(startSeg, endSeg, i, pt);

                  this._tweenRotation(startSeg, endSeg, offset - 1, pt);

                  i += 4;
                } else {
                  this._tweenRotation(startSeg, endSeg, i);
                }
              } else {
                pt = this.add(startSeg, i, startSeg[i], endSeg[i], 0, 0, 0, 0, 0, 1);
                pt = this.add(startSeg, i + 1, startSeg[i + 1], endSeg[i + 1], 0, 0, 0, 0, 0, 1) || pt;
              }
            }
          }
        }
      } else {
        pt = this.add(target, "setAttribute", target.getAttribute(p) + "", shape + "", index, targets, 0, _buildPointsFilter(shapeIndex), p);
      }

      if (useRotation) {
        this.add(this._origin, "x", this._origin.x, this._eOrigin.x, 0, 0, 0, 0, 0, 1);
        pt = this.add(this._origin, "y", this._origin.y, this._eOrigin.y, 0, 0, 0, 0, 0, 1);
      }

      if (pt) {
        this._props.push("morphSVG");

        pt.end = shape;
        pt.endProp = p;
      }
    }

    return _bonusValidated;
  },
  render: function render(ratio, data) {
    var rawPath = data._rawPath,
        controlPT = data._controlPT,
        anchorPT = data._anchorPT,
        rnd = data._rnd,
        target = data._target,
        pt = data._pt,
        s,
        space,
        easeInOut,
        segment,
        l,
        angle,
        i,
        j,
        x,
        y,
        sin,
        cos,
        offset;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    if (ratio === 1 && data._apply) {
      pt = data._pt;

      while (pt) {
        if (pt.end) {
          if (data._prop) {
            target[data._prop] = pt.end;
          } else {
            target.setAttribute(pt.endProp, pt.end); //make sure the end value is exactly as specified (in case we had to add fabricated points during the tween)
          }
        }

        pt = pt._next;
      }
    } else if (rawPath) {
      //rotationally position the anchors
      while (anchorPT) {
        angle = anchorPT.sa + ratio * anchorPT.ca;
        l = anchorPT.sl + ratio * anchorPT.cl; //length

        anchorPT.t[anchorPT.i] = data._origin.x + _cos(angle) * l;
        anchorPT.t[anchorPT.i + 1] = data._origin.y + _sin(angle) * l;
        anchorPT = anchorPT._next;
      } //smooth out the control points


      easeInOut = ratio < 0.5 ? 2 * ratio * ratio : (4 - 2 * ratio) * ratio - 1;

      while (controlPT) {
        i = controlPT.i;
        segment = rawPath[controlPT.j];
        offset = i + (i === segment.length - 4 ? 7 - segment.length : 5); //accommodates wrapping around of smooth points, like if the start and end anchors are on top of each other and their handles are smooth.

        angle = _atan2(segment[offset] - segment[i + 1], segment[offset - 1] - segment[i]); //average the angles

        sin = _sin(angle);
        cos = _cos(angle);
        x = segment[i + 2];
        y = segment[i + 3];
        l = controlPT.l1s + easeInOut * controlPT.l1c; //length

        segment[i] = x - cos * l;
        segment[i + 1] = y - sin * l;
        l = controlPT.l2s + easeInOut * controlPT.l2c;
        segment[offset - 1] = x + cos * l;
        segment[offset] = y + sin * l;
        controlPT = controlPT._next;
      }

      target._gsRawPath = rawPath;

      if (data._apply) {
        s = "";
        space = " ";

        for (j = 0; j < rawPath.length; j++) {
          segment = rawPath[j];
          l = segment.length;
          s += "M" + (segment[0] * rnd | 0) / rnd + space + (segment[1] * rnd | 0) / rnd + " C";

          for (i = 2; i < l; i++) {
            //this is actually faster than just doing a join() on the array, possibly because the numbers have so many decimal places
            s += (segment[i] * rnd | 0) / rnd + space;
          }
        }

        if (data._prop) {
          target[data._prop] = s;
        } else {
          target.setAttribute("d", s);
        }
      }
    }

    data._render && rawPath && data._render.call(data._tween, rawPath, target);
  },
  kill: function kill(property) {
    this._pt = this._rawPath = 0;
  },
  getRawPath: getRawPath,
  stringToRawPath: stringToRawPath,
  rawPathToString: rawPathToString,
  normalizeStrings: function normalizeStrings(shape1, shape2, _ref) {
    var shapeIndex = _ref.shapeIndex,
        map = _ref.map;
    var result = [shape1, shape2];

    _pathFilter(result, shapeIndex, map);

    return result;
  },
  pathFilter: _pathFilter,
  pointsFilter: _pointsFilter,
  getTotalSize: _getTotalSize,
  equalizeSegmentQuantity: _equalizeSegmentQuantity,
  convertToPath: function convertToPath$1(targets, swap) {
    return _toArray(targets).map(function (target) {
      return convertToPath(target, swap !== false);
    });
  },
  defaultType: "linear",
  defaultUpdateTarget: true,
  defaultMap: "size"
};
_getGSAP() && gsap.registerPlugin(MorphSVGPlugin);

const sceneA = [
  {
    fill: "#08000E",
    d: "m81.27 69.111.83-4.237.571.027h.002a.036.036 0 0 0 .035-.028c.941-4.655.465-11.66.457-11.763 0-.037-.006-2.449-1.488-10.01l.682-.13a.035.035 0 0 0 .028-.04c-.018-.097-1.723-9.726-6.61-19.725-2.872-5.875-6.263-10.726-10.078-14.42C60.94 4.181 55.506 1.375 49.543.44c-.01-.022-.025-.04-.05-.044-.096-.017-9.797-1.691-20.61 1.974-6.35 2.152-11.838 5.698-16.308 10.54C6.989 18.957 2.985 27.055.673 36.98l.002.005c-.002.002-.003.003-.003.006s.003.005.003.009c0 .008.002.016.005.023.003.005.005.01.009.014l.005.01c.003 0 .007 0 .01.002.003.003.006.008.01.01l1.095.477C.98 41.93.796 47.784.755 50.331a1.665 1.665 0 0 0-.554.996C-.836 57.987 2.467 61.549 2.74 61.83l-.028.012-.058.022.016.059c.005.024.217.9.429 2.376-1.381 3.65-1.427 8.42-.184 13.581-.423 4.658 1.044 10.047 4.112 14.977 2.783 4.47 6.53 7.983 10.554 9.888.96.456 1.906.802 2.834 1.047 4.252 3.001 8.619 4.67 12.454 4.67 2.14 0 4.117-.519 5.814-1.614.342-.22.66-.467.969-.725.146-.085.29-.17.433-.261 1.501-.969 2.669-2.321 3.518-3.962.444-.193.874-.42 1.287-.681.05-.024.1-.047.147-.073a8.2 8.2 0 0 0 1.098 1.076c1.325 1.066 2.934 1.676 4.73 1.868 1.18.534 2.514.81 3.976.81.998 0 2.055-.13 3.158-.38.178.01.357.018.539.018 5.303 0 12.167-3.965 17.478-10.632 3.482-4.372 5.787-9.24 6.492-13.71.37-2.345.272-4.43-.26-6.167-.021-1.86-.35-3.516-.978-4.918ZM16.2 33.903a.069.069 0 0 0 .048-.056c.66.089 5.98.484 8.865-9.353 1.799-6.136 5.352-12.002 10.172-15.757 1.94-.06 6.78.161 12.395 3.143 4.267 2.269 8.138 5.666 11.505 10.098 4.21 5.542 7.64 12.727 10.193 21.355a2.394 2.394 0 0 0 2.55 1.71c.935 3.792 1.134 8.112 1.155 8.646-.51.133-.877.588-.893 1.12-.05 1.637-.3 3.314-.458 4.235-6.062-3.253-16.523 1.39-24.18 11.004a43.644 43.644 0 0 0-1.23 1.628 50.175 50.175 0 0 0-2.307-3.89C35.348 54.581 22.08 47.846 14.44 52.771c-.018.012-.034.026-.051.037a46.689 46.689 0 0 1-.303-3.375 3.066 3.066 0 0 0-.709-1.803c-.103-5.932.82-12.23.97-13.216l1.853-.51Zm64.377 5.858c.229.903.402 1.655.524 2.215l-.524-2.215Z"
  },
  {
    fill: "#E2556C",
    d: "M13.23 33.858 1.87 37.221l-.035.174-.89-.39 12.998-4.015 2.02.832-1.596.441c-.002-.025-.014-.05-.04-.061l-.993-.43a.069.069 0 0 0-.062.002.069.069 0 0 0-.036.05c-.002.012-.003.023-.006.034Zm67.48 34.199c.187.3.355.617.509.948l.81-4.136-.615-.03h-.001a18.182 18.182 0 0 1-2.751-.466c.942 1.014 1.622 2.26 2.048 3.684Zm1.541 6.512c-.018.865-.1 1.771-.248 2.715-.8 5.066-3.414 10.587-7.363 15.545-4.867 6.111-10.884 10.218-16.186 11.569 5.266.048 12.134-3.905 17.45-10.58 3.468-4.353 5.764-9.198 6.464-13.644.331-2.102.284-3.991-.117-5.605Zm-79.11-9.972c-1.25 3.498-1.297 7.993-.182 12.862.027-.226.052-.452.089-.675.79-4.988.46-9.479.093-12.187Zm18.46-4.819c-2.19-1.114-4.307-1.825-6.293-2.134.287 1.082.511 1.661.517 1.675a.073.073 0 0 1-.028.085l-.436.271c.516 1.773 1.353 4.237 2.535 6.542 4.69 1.61 9.782 5.77 13.647 11.659 3.232 4.924 5.003 10.136 5.254 14.576h.01c.244 4.305-.93 7.658-3.314 9.543-.019.015-.035.031-.055.046-.164.127-.336.25-.512.363-1.267.818-2.743 1.205-4.341 1.205-.44 0-.89-.032-1.347-.09-1.122.475-2.35.713-3.651.713-.902 0-1.84-.118-2.801-.345 6.487 4.484 13.198 5.824 17.82 2.843 7.576-4.884 6.723-19.548-1.902-32.689-4.183-6.37-9.546-11.436-15.103-14.263Zm-3.96 42.841c-3.998-1.895-7.725-5.388-10.494-9.836C3.854 87.49 2.41 81.667 3.19 76.796c1.214-7.657-.21-14.16-.369-14.847l.137-.053c4.79 1.11 10.285-1.123 10.927-1.394a.065.065 0 0 0 .04.04.071.071 0 0 0 .06-.008l1.253-.78c.847 2.895 2.534 7.6 5.18 10.481.906.986 1.88 2.027 2.936 2.96 2.04 1.798 3.848 3.952 5.372 6.399 5.708 9.172 5.512 19.594-.437 23.23-2.877 1.758-6.657 1.685-10.647-.205Zm6.932-27.206c.031.033 3.148 3.308 5.37 7.994 1.304 2.75 2.05 5.441 2.215 7.998.207 3.195-.497 6.188-2.09 8.897a.034.034 0 0 0 .03.052c.012 0 .024-.005.03-.017 1.602-2.72 2.308-5.728 2.1-8.937-.165-2.565-.913-5.265-2.222-8.024-2.226-4.696-5.35-7.977-5.382-8.01-.013-.014-.036-.014-.05-.002a.034.034 0 0 0-.001.049Zm-9.774-14.928a50.04 50.04 0 0 0 1.488 3.938c.834 1.95 2.122 4.566 3.522 5.95.007.007.016.01.026.01a.035.035 0 0 0 .024-.01.035.035 0 0 0 0-.05c-1.393-1.376-2.676-3.982-3.507-5.927-.902-2.109-1.48-3.915-1.486-3.932a.035.035 0 0 0-.044-.023.035.035 0 0 0-.023.043Zm7.458 39.6c.998-.528 1.808-1.358 2.404-2.462l-.03-.018c.925-1.716 1.274-3.997 1.008-6.597-.27-2.66-1.173-5.473-2.609-8.136-1.876-3.48-4.452-6.324-7.253-8.006-2.807-1.685-5.504-2.004-7.596-.895a5.576 5.576 0 0 0-1.853 1.606l-.03-.02c-2.519 3.36-2.083 9.78 1.06 15.612 1.88 3.486 4.46 6.334 7.266 8.02 1.714 1.028 3.387 1.549 4.91 1.549.98 0 1.898-.217 2.723-.653Zm55.288-61.928.756 3.088a2.56 2.56 0 0 0 2.645 1.935l.386-.08c-.019-.1-.093-.492-.232-1.126l-.522-2.208c-.844-3.345-2.453-8.789-5.107-14.494-2.52-5.416-5.477-10.001-8.785-13.629-4.134-4.533-8.835-7.574-13.971-9.04C45.31.49 38.687 1.206 33.03 4.733c-3.023 1.883-5.788 4.586-8.22 8.03-1.944 2.758-3.68 5.995-5.158 9.62-2.52 6.175-3.43 11.406-3.438 11.46.009 0 .02.003.033.004.66.089 5.98.484 8.864-9.353 1.8-6.136 5.353-12.002 10.173-15.757.031-.025.064-.049.096-.073 3.617-2.79 7.939-4.393 12.768-4.03 13.8 1.038 25.315 17.465 29.396 33.523Z"
  },
  {
    fill: "#00E5FF",
    d: "m82.645 64.83-1.187-.06c.628-2.841.859-6.146.728-10.394-.015-.467.14-.816.459-1.037.186-.128.375-.174.452-.188.036.554.446 7.197-.452 11.679Zm-.53-10.452c-.023-.75.387-1.07.692-1.207l-.79.064h-.004a.031.031 0 0 1-.022-.008c-.003-.003-.003-.006-.004-.01l-8.9.564h-.002a.039.039 0 0 1-.025-.01 1.124 1.124 0 0 0-.799 1.04c-.051 1.658-.307 3.354-.464 4.27.364.202.715.426 1.045.685l4.975 3.81c.27.218.517.456.755.702 1.425.363 2.613.472 2.815.49.628-2.84.859-6.143.728-10.39ZM65.85 66.054c-.703-.498-1.555-.734-2.502-.734-3.47 0-8.243 3.17-11.904 8.249a27.48 27.48 0 0 0-2.454 4.108c1.605 4.473 2.3 8.801 2.064 12.553.252.019.512.021.782.002.003-.098.01-.2.017-.301.004-.099.008-.197.015-.296.01-.113.023-.228.035-.343.012-.101.02-.203.034-.307.015-.115.035-.233.052-.348.018-.106.032-.21.05-.318.021-.117.048-.236.072-.354.022-.109.042-.217.067-.327.026-.118.059-.238.088-.357.028-.113.053-.225.084-.337.031-.118.067-.238.102-.357.034-.116.066-.231.102-.348.037-.12.08-.238.118-.359.04-.118.077-.236.119-.355.042-.118.087-.238.132-.357.045-.121.088-.242.136-.363.044-.116.095-.231.142-.347.053-.126.102-.252.157-.38.049-.111.101-.225.153-.337.058-.13.114-.26.176-.39.052-.111.11-.224.163-.335.065-.132.127-.263.194-.394.056-.109.115-.217.174-.327.07-.133.138-.267.212-.401.058-.105.119-.209.178-.313.079-.137.154-.275.236-.412.062-.106.128-.21.193-.315.081-.135.162-.27.247-.403.072-.117.15-.232.226-.347.08-.123.158-.245.24-.367a25.52 25.52 0 0 1 .814-1.143l.13-.171.2-.262c.051-.066.105-.13.156-.196l.18-.226.19-.23c.05-.061.1-.123.15-.181.062-.074.127-.147.19-.22.052-.063.105-.124.157-.185.058-.067.118-.132.177-.198l.174-.195.181-.196c.058-.06.116-.124.174-.186.06-.065.122-.127.183-.19l.176-.183.179-.178c.06-.062.122-.123.183-.183l.178-.171.187-.18.177-.162.192-.175.176-.157.194-.17c.058-.051.116-.1.176-.15l.196-.165c.058-.048.118-.094.176-.143l.197-.16.177-.136c.067-.052.132-.103.199-.153l.176-.13c.066-.049.133-.099.2-.147l.174-.123c.067-.047.135-.095.202-.14.057-.04.116-.078.173-.117l.203-.135.171-.108c.07-.043.137-.087.206-.129l.168-.1c.069-.04.139-.084.207-.123l.165-.092c.07-.04.14-.08.21-.117.055-.03.11-.057.164-.086.07-.037.14-.074.21-.108l.16-.08.21-.1.159-.071c.071-.032.141-.064.211-.094a8.54 8.54 0 0 1 .156-.064c.07-.028.14-.059.21-.085l.156-.058c.07-.025.138-.052.208-.076l.153-.051.208-.067.15-.044c.07-.02.138-.04.206-.058.05-.014.099-.025.15-.037a4.437 4.437 0 0 1 .35-.079l.2-.039c.049-.01.097-.015.144-.023l.201-.029c.047-.007.093-.01.14-.016.054-.006.107-.013.161-.017.03-2.179-.62-3.802-1.88-4.695Zm-47.864.338c.72 1.376 1.562 2.688 2.536 3.748.903.983 1.872 2.021 2.926 2.95 2.05 1.807 3.866 3.97 5.397 6.43 5.025 8.075 5.491 17.12 1.513 21.725.9-.19 1.736-.521 2.49-1.007 2.283-1.471 3.6-4.147 3.812-7.738-.241-4.423-2.006-9.628-5.236-14.547-3.812-5.809-8.818-9.93-13.438-11.561ZM11.732 46.7c-5.767.615-9.403 2.594-10.78 3.48-.07.046-.135.097-.197.151a1.665 1.665 0 0 0-.554.996C-.836 57.987 2.467 61.549 2.74 61.83l.02.021c.065.016.131.03.197.044 4.79 1.111 10.285-1.122 10.927-1.393l-.004-.003c-2.289-5.929-2.152-13.556-2.148-13.8Zm.141.085c-.011.887-.029 7.98 2.109 13.584l1.69-1.053c-.175-.475-1.414-4.013-1.727-9.875a2.954 2.954 0 0 0-2.072-2.656Zm69.023-3.603a2.561 2.561 0 0 1-2.595-1.938l-.756-3.087C73.465 22.1 61.95 5.672 48.15 4.634c-4.83-.363-9.152 1.24-12.77 4.03.125-.003.258-.005.403-.005 2.2 0 6.735.401 11.926 3.158 4.277 2.272 8.157 5.676 11.531 10.116 4.216 5.549 7.65 12.742 10.207 21.38a2.324 2.324 0 0 0 2.703 1.626l8.746-1.757ZM27.43 6.57c.535-.47 1.081-.915 1.636-1.332C32.97 2.297 37.349.602 42.14.165c-3.646.117-8.316.678-13.217 2.34C22.596 4.65 17.13 8.183 12.676 13.006 7.131 19.012 3.15 27.047.84 36.89l13.044-4.028c.018-.125.08-.51.194-1.098.454-2.678 1.54-6.727 3.398-10.98a47.051 47.051 0 0 1 2.773-5.496c2.07-3.492 4.478-6.41 7.182-8.72Z"
  },
  {
    fill: "#A66EFF",
    d: "M80.862 68.598c1.507 6.108-1.356 15.171-7.896 23.15-6.684 8.153-15.27 12.808-21.66 12.375-.144-.011-.29-.017-.43-.032-1.801-.189-3.412-.801-4.74-1.869a8.002 8.002 0 0 1-1.098-1.075c.286-.146.568-.302.84-.477a9.778 9.778 0 0 0 2.334-2.124c6.066.354 14.169-4.175 20.412-12.012 8.149-10.23 10.038-22.214 4.22-26.768l4.973 3.81a8.025 8.025 0 0 1 .845.798c.942 1.013 1.622 2.258 2.048 3.683.054.178.106.357.152.54Zm-37.772-.215C34.818 55.78 22.405 49.09 14.669 52.8c-.089.043-.178.087-.265.132.18 1.402.405 2.592.62 3.55 7.386.278 16.593 6.561 23.178 16.594 6.954 10.594 8.862 22.14 5.401 28.824a9.697 9.697 0 0 0 1.288-.681c.027-.017.055-.033.082-.051.32-.206.618-.434.909-.674 6.622-5.472 5.505-19.47-2.792-32.111Zm-10.164 31.972a7.528 7.528 0 0 1-2.731 1.067 8.456 8.456 0 0 1-1.832 1.521 8.637 8.637 0 0 1-.884.465c1.996.212 3.838-.134 5.37-1.122 2.483-1.6 3.828-4.645 3.848-8.646-.406 3.07-1.697 5.379-3.771 6.715Zm-31.09-62.96-.027.141C.98 41.93.796 47.786.755 50.333c.062-.055.127-.107.197-.152 1.377-.887 5.013-2.866 10.78-3.48v-.01a.076.076 0 0 1 .03-.056.073.073 0 0 1 .061-.01l.017.004c.058.016.115.036.171.057.006-1.217.103-6.188 1.22-12.828L1.868 37.221l-.034.174ZM73.083 53.69v.021l8.89-.562c-.403-5.51-1.266-9.839-1.275-9.881v-.007l-8.776 1.76c.002.008.003.016.006.023.934 3.792 1.133 8.113 1.155 8.646Z"
  },
  {
    fill: "#B5D100",
    d: "M80.862 68.598c1.191 2.225 1.548 5.193 1 8.665-.795 5.043-3.399 10.54-7.333 15.48-7.27 9.128-17.1 13.769-23.222 11.38 6.388.434 14.975-4.222 21.659-12.375 6.54-7.979 9.403-17.042 7.896-23.15Zm-32.65 29.948c1.67-2.085 2.61-4.905 2.835-8.175a5.61 5.61 0 0 0 .787 0v.004l.077-.007.064-.005v-.001c3.575-.302 8.077-3.544 11.492-8.283 2.677-3.715 4.319-7.895 4.402-11.2h.002l.001-.063.001-.078c.026-2.221-.642-3.88-1.94-4.797-3.345-2.37-9.897 1.016-14.603 7.546a27.535 27.535 0 0 0-2.407 4.008 45.07 45.07 0 0 0-2.13-4.908 37.613 37.613 0 0 1 3.166-3.878.036.036 0 0 0-.002-.05.038.038 0 0 0-.025-.01.033.033 0 0 0-.025.013 41.184 41.184 0 0 0-.68.746l-.007.008v.002a.044.044 0 0 0-.007.008h-.002a.053.053 0 0 1-.007.008v.001a.053.053 0 0 0-.007.008v.001l-.023.025a.231.231 0 0 0-.007.008l-.001.002-.006.007-.001.001-.007.007-.001.001a.044.044 0 0 1-.007.008l-.001.001a.03.03 0 0 0-.006.007l-.001.002-.007.008-.009.009-.007.008v.001l-.007.007-.002.002a.029.029 0 0 1-.006.007v.001a.03.03 0 0 0-.007.007v.003l-.008.007h-.001l-.007.008h-.001c-.001.003-.004.007-.006.008l-.001.001-.006.008-.001.001-.007.007-.001.003a.03.03 0 0 0-.006.006l-.003.003-.005.007s-.002 0-.003.002l-.004.007-.003.002-.006.007v.001c-.003.003-.004.005-.007.006l-.002.004a.024.024 0 0 0-.005.005l-.002.003c-.002.002-.003.004-.006.005a.002.002 0 0 1-.002.003.03.03 0 0 1-.006.007l-.001.002-.006.006-.002.003-.006.006-.002.004-.005.005-.004.004-.003.004-.004.004-.003.006-.004.003-.004.005-.003.003-.005.006-.003.003c0 .002-.003.004-.004.006l-.004.002c-.001.003-.002.005-.005.006l-.002.004-.003.004-.005.005-.004.004c0 .002-.002.003-.003.005l-.004.004a.023.023 0 0 1-.004.005l-.004.004-.004.006-.003.003c0 .001-.003.003-.003.005a.009.009 0 0 0-.005.004l-.003.004-.004.005-.003.004c-.002.001-.003.002-.004.005a.009.009 0 0 0-.005.005s0 .002-.002.003l-.006.006s0 .002-.002.003c-.001.001-.002.004-.005.006l-.003.003-.005.006-.002.004c-.003 0-.004.003-.005.004l-.003.005-.004.003c-.001.003-.003.004-.005.005a.017.017 0 0 1-.003.005l-.002.002a.03.03 0 0 1-.006.007l-.001.001a.033.033 0 0 0-.006.008l-.003.002-.005.007c-.002 0-.002.002-.003.003a.03.03 0 0 0-.006.007l-.002.002-.007.008v.001l-.007.007-.002.003-.004.004v.002a.017.017 0 0 0-.007.007s0 .002-.002.003a.017.017 0 0 0-.006.007l-.002.002-.006.007-.002.002a.014.014 0 0 1-.006.006l-.003.003c0 .003-.003.005-.005.007l-.002.001-.007.01a.12.12 0 0 1-.012.014s-.002 0-.002.002l-.007.007v.001c-.002.004-.004.006-.007.008v.002l-.008.008v.002a.459.459 0 0 0-.008.007l-.001.002-.007.008-.001.001-.02.023v.002c-.002.002-.005.004-.007.008h-.001l-.007.01h-.001l-.007.01h-.002l-.007.008v.002l-.02.023-.008.009v.001l-.008.01-.008.009-.008.009v.001l-.015.019h-.001l-.004.005-.008.01a.067.067 0 0 0-.007.009l-.001.001-.007.008-.001.001-.007.01h-.002l-.026.033-.003.001-.006.008v.001l-.008.008v.002l-.008.008-.001.002-.007.008v.001c-.01.01-.019.022-.028.033h-.001l-.007.009-.001.002-.006.008-.001.002-.007.008h-.002c-.007.009-.012.017-.02.025l-.006.01c-.002 0-.002 0-.003.002 0 .002-.003.004-.006.007v.002a.032.032 0 0 0-.007.007l-.002.002-.006.007c0 .001 0 .002-.002.002l-.006.009h-.001l-.02.025h-.001l-.007.01h-.001l-.006.008-.002.003a.03.03 0 0 1-.006.007s-.001.002-.003.002l-.004.007c-.001.001-.001.002-.003.002l-.005.007-.003.004-.003.003-.003.004a.014.014 0 0 1-.005.005c0 .002-.002.003-.003.004 0 .002-.002.004-.004.006a.058.058 0 0 0-.004.003l-.003.006-.004.003c-.001.003-.003.005-.005.006l-.002.004a.02.02 0 0 0-.005.005l-.003.004-.004.004a.02.02 0 0 1-.004.006l-.003.004c0 .002-.003.003-.004.005l-.003.004-.004.006-.004.004c0 .002-.002.003-.003.004a.009.009 0 0 1-.005.004l-.003.005-.004.005a.017.017 0 0 1-.003.004l-.005.005-.002.005c-.003 0-.003.002-.005.004l-.004.005-.002.003-.006.006c0 .001 0 .002-.002.003l-.005.006-.002.004c-.002 0-.004.003-.005.006-.002 0-.002 0-.003.003l-.005.006-.002.003c-.003.001-.003.004-.005.005l-.003.005c-.002 0-.003.003-.004.004l-.003.005c-.002 0-.003.003-.004.004l-.003.004a.024.024 0 0 1-.005.006l-.002.003-.005.007-.002.002a.03.03 0 0 0-.006.007s-.001.003-.003.003l-.004.007-.003.002-.004.007-.003.002c0 .002-.003.004-.004.006l-.003.003c-.002.001-.003.004-.004.006l-.003.002-.005.007c0 .002-.002.003-.003.003 0 .002-.003.004-.006.007v.002l-.007.007c0 .001 0 .002-.002.003a.017.017 0 0 0-.005.007l-.002.003c-.002 0-.003.003-.005.005l-.002.004a.035.035 0 0 0-.006.007v.001a.03.03 0 0 1-.007.007v.002l-.007.007v.002a.02.02 0 0 0-.007.009h-.002a.021.021 0 0 1-.006.009l-.001.001-.006.008-.001.001c-.002.004-.005.006-.007.008v.001l-.007.01c-.002.002-.005.004-.007.008l-.001.002-.006.006-.001.002a.044.044 0 0 1-.007.008v.002l-.006.006-.002.003a.03.03 0 0 1-.006.007.044.044 0 0 1-.007.009l-.001.001c-.003.002-.004.006-.006.008l-.001.001-.006.008-.001.002-.007.008-.006.009-.001.001-.014.017s0 .002-.002.002l-.005.008h-.002a.062.062 0 0 0-.007.01l-.007.008v.001l-.007.008-.007.01-.007.008v.002a.12.12 0 0 0-.015.017v.002l-.007.008c-.004.005-.01.011-.014.018l-.008.01-.014.017h-.001l-.021.027a.27.27 0 0 1-.014.019l-.007.01h-.001a37.598 37.598 0 0 0-.978 1.311c-.142-.28-.286-.559-.435-.839.394-.547.801-1.091 1.23-1.629 7.659-9.614 18.118-14.258 24.18-11.004.022.011.043.025.065.038.365.2.715.426 1.047.685 5.818 4.552 3.93 16.535-4.22 26.766C62.38 94.37 54.278 98.9 48.212 98.546Zm17.466-38.377a.036.036 0 0 0-.035-.035H65.45l-.01.001H65.383l-.012.002h-.015c-3.746.098-8.22 2.11-12.387 5.612a.034.034 0 0 0-.003.049.035.035 0 0 0 .027.012.033.033 0 0 0 .022-.008c4.234-3.559 8.836-5.6 12.628-5.6.018.003.035-.014.035-.033Zm4.886 1.592c2.18 1.706 3.227 4.715 2.953 8.475a.037.037 0 0 0 .032.038h.004a.035.035 0 0 0 .035-.032c.008-.113.015-.225.02-.336V69.9l.003-.032v-.012l.002-.036v-.012l.003-.03V69.733s0-.002.002-.003v-.011l.001-.027v-.01l.001-.005v-.006c0-.007 0-.014.002-.02V69.537l.002-.014V68.81l-.001-.022V68.728l-.001-.024V68.647c0-.002 0-.003-.002-.005V68.6c0-.009 0-.018-.002-.029v-.011l-.001-.034v-.006l-.001-.04c-.001-.014-.001-.027-.003-.04v-.006c-.052-1.21-.259-2.332-.621-3.337a5.876 5.876 0 0 1-.014-.038c-.004-.012-.009-.022-.012-.034l-.002-.003v-.002l-.01-.027c0-.003-.002-.004-.002-.005l-.002-.004-.009-.025c0-.002 0-.003-.002-.004l-.001-.005-.01-.023v-.006l-.003-.003-.01-.03a.465.465 0 0 1-.016-.036l-.01-.028v-.001l-.002-.004-.002-.005a.094.094 0 0 1-.008-.019v-.005c-.002 0-.002-.002-.003-.004l-.003-.004-.009-.024-.001-.005-.001-.004-.012-.028-.002-.005-.003-.004c-.002-.008-.005-.015-.009-.023l-.002-.005v-.001l-.001-.004-.01-.023-.002-.004-.001-.002-.001-.003v-.001l-.003-.004a.112.112 0 0 0-.008-.018v-.001l-.001-.004h-.001l-.001-.004v-.001l-.003-.004a.089.089 0 0 0-.008-.019l-.002-.004v-.001l-.001-.004-.003-.004v-.004l-.002-.001a.075.075 0 0 0-.006-.014l-.001-.004-.002-.004v-.001l-.002-.004-.002-.004v-.001l-.002-.005-.004-.01s0-.002-.002-.003l-.002-.004v-.002s-.002 0-.002-.003c0-.001-.002-.002-.002-.005a.117.117 0 0 1-.008-.017v-.001l-.002-.004-.003-.004v-.005h-.002l-.001-.004a.601.601 0 0 0-.007-.014l-.001-.004h-.002v-.006c-.002 0-.002-.002-.003-.003v-.001l-.001-.004a.895.895 0 0 0-.007-.013l-.001-.005h-.002v-.004l-.003-.005-.002-.004v-.001c-.003-.006-.005-.012-.009-.017v-.002s0-.002-.002-.003v-.001l-.001-.004-.002-.004c-.002-.001-.002-.003-.003-.005a.119.119 0 0 1-.006-.013c0-.002 0-.003-.002-.004v-.001l-.002-.004v-.001l-.001-.004h-.002c-.002-.005-.004-.012-.008-.018v-.005h-.002l-.001-.003v-.001l-.003-.004c0-.002 0-.003-.002-.004l-.008-.018-.002-.004v-.001l-.003-.004c0-.002 0-.002-.002-.003v-.001l-.008-.018-.003-.005v-.003l-.002-.001-.001-.004h-.001l-.008-.018c-.002-.001-.002-.002-.003-.005v-.003l-.002-.001-.001-.004v-.001l-.003-.003-.008-.018-.002-.004v-.002l-.002-.003v-.001l-.003-.004-.002-.004a.132.132 0 0 0-.007-.013v-.001l-.001-.004h-.001l-.002-.004v-.001c0-.002-.002-.003-.002-.003h-.001l-.001-.004v-.002l-.007-.012-.003-.005c0-.001 0-.002-.002-.003v-.001l-.002-.004v-.001l-.001-.004h-.002l-.005-.013-.003-.005v-.001l-.002-.002v-.002l-.002-.003v-.001l-.003-.004-.002-.004c-.001-.004-.004-.006-.005-.008v-.002s0-.002-.002-.003v-.001l-.002-.003v-.002c-.002 0-.002-.002-.003-.002v-.005l-.002-.001-.001-.004-.007-.012v-.001l-.003-.004v-.001l-.002-.003-.002-.004v-.001l-.003-.004a.132.132 0 0 1-.007-.013c0-.002 0-.003-.002-.004v-.002L72.511 64l-.001-.002-.001-.003-.002-.001c0-.001 0-.003-.002-.004l-.007-.013-.001-.004-.001-.001-.001-.004h-.002v-.003l-.002-.001-.001-.004-.001-.001-.001-.003h-.002a.034.034 0 0 0-.004-.01l-.001-.003-.002-.001v-.004h-.002l-.001-.003-.001-.001-.001-.004-.002-.001v-.004a.034.034 0 0 1-.005-.009h-.002v-.003l-.002-.001-.001-.004-.001-.001-.001-.003v-.002c-.002 0-.002 0-.003-.002V63.9l-.002-.004-.007-.012-.001-.001-.001-.004-.002-.001v-.002c0-.002-.002-.002-.002-.002l-.001-.003v-.001l-.002-.004-.007-.012s-.002 0-.002-.002v-.003l-.002-.001-.001-.002-.001-.002-.001-.003-.002-.001v-.004h-.002l-.001-.003-.001-.001-.005-.008v-.002l-.002-.003-.003-.003v-.002s0-.002-.002-.003l-.001-.001-.001-.003h-.001c0-.002 0-.003-.002-.004l-.002-.005a.008.008 0 0 1-.002-.005l-.003-.003v-.001l-.002-.004h-.001l-.001-.003-.001-.002-.002-.003-.002-.004h-.001l-.001-.005h-.001a.008.008 0 0 0-.003-.005s0-.002-.002-.003v-.001l-.002-.004c0-.002-.002-.002-.002-.003v-.001l-.002-.004h-.001l-.002-.004-.003-.005-.004-.008-.002-.001v-.003h-.002l-.001-.004-.001-.001-.001-.004h-.002v-.003l-.002-.001-.002-.004a.018.018 0 0 0-.005-.008v-.001l-.002-.004h-.001c0-.002-.002-.002-.002-.003v-.001l-.002-.004h-.001l-.001-.003-.001-.001-.002-.004-.003-.004-.002-.005v-.001c-.002 0-.002-.001-.003-.002v-.003l-.002-.002-.001-.001-.001-.003s-.002 0-.002-.002v-.002l-.002-.001-.001-.003h-.001l-.001-.004c-.002 0-.002-.002-.002-.002l-.004-.008-.003-.003v-.001l-.002-.002-.001-.003-.001-.002-.001-.001-.002-.003-.002-.004-.001-.001-.002-.004c-.002-.001-.002-.002-.003-.005 0 0 0-.002-.002-.003l-.001-.001-.001-.002c0-.002-.002-.002-.002-.003v-.002l-.002-.001-.001-.002-.001-.003-.001-.002-.002-.001c0-.001 0-.003-.002-.004l-.002-.004-.001-.002s-.002 0-.002-.002v-.001l-.002-.002-.001-.003-.001-.002-.001-.001-.002-.002v-.002c-.002 0-.002-.002-.002-.002l-.001-.002-.001-.002-.001-.002c-.002 0-.002-.002-.003-.004 0-.001 0-.003-.002-.004h-.001l-.001-.003-.002-.002v-.003l-.002-.001-.001-.002-.001-.002c-.001 0-.001-.002-.003-.002v-.002l-.002-.002v-.002l-.006-.008c0-.002 0-.002-.002-.003l-.001-.001-.001-.004h-.002v-.003l-.002-.001-.001-.004-.001-.001-.003-.002v-.002s0-.002-.002-.003v-.001l-.002-.004h-.001l-.003-.003v-.002s0-.002-.002-.003l-.002-.003v-.001l-.003-.004-.002-.003-.001-.001-.001-.003h-.002c0-.003 0-.004-.002-.006h-.001l-.001-.003-.001-.001-.002-.002v-.003s-.002 0-.002-.002l-.001-.001-.002-.003-.002-.002v-.001l-.002-.002-.001-.003h-.001c0-.002-.001-.003-.003-.004v-.001l-.002-.004-.001-.001-.002-.002v-.002c-.002 0-.002-.002-.003-.003v-.001l-.002-.002-.001-.002-.001-.002-.002-.002v-.002c-.002 0-.002-.002-.002-.002l-.002-.003-.003-.005-.003-.003v-.001l-.002-.003v-.002c-.002 0-.002-.001-.003-.002v-.002l-.002-.002h-.001l-.001-.004c-.002 0-.002-.002-.002-.002v-.002l-.002-.001-.002-.005h-.001l-.002-.003v-.001l-.003-.004-.002-.003v-.001l-.003-.003-.002-.004-.001-.002-.001-.002h-.002c0-.002 0-.003-.002-.004v-.002l-.002-.003h-.001l-.003-.004c0-.002 0-.003-.002-.003v-.002l-.002-.003h-.002v-.003l-.002-.001-.002-.004-.006-.008-.002-.003-.002-.001V63.3l-.002-.001-.001-.002-.001-.002-.003-.002v-.001c0-.001 0-.002-.002-.003h-.001l-.002-.004c0-.002-.002-.003-.003-.005 0 0 0-.002-.002-.003l-.001-.001-.001-.004h-.002v-.003l-.002-.001-.002-.003h-.001c0-.002-.002-.002-.002-.003v-.002l-.002-.003h-.001l-.002-.004-.002-.001v-.003h-.002l-.001-.003-.001-.001c-.001-.002-.001-.003-.003-.003v-.002l-.002-.001-.001-.003-.002-.002-.003-.003v-.001c0-.002-.002-.003-.003-.004 0-.002-.001-.003-.003-.005 0 0 0-.002-.002-.003l-.001-.001-.001-.002-.001-.003h-.003v-.003l-.002-.002-.001-.002-.001-.002-.002-.001c0-.001 0-.003-.002-.004h-.001l-.002-.004-.003-.004-.002-.003-.001-.001-.001-.003h-.002c0-.002 0-.003-.002-.004v-.001l-.002-.003h-.001c0-.002-.002-.003-.003-.004a.014.014 0 0 0-.003-.005l-.003-.004c0-.002 0-.003-.002-.003l-.001-.002-.001-.003h-.001c-.002 0-.002-.002-.003-.003v-.001c0-.001-.002-.001-.002-.003h-.001l-.003-.003v-.001c0-.002-.002-.002-.003-.005l-.002-.003-.002-.001v-.003s-.002 0-.002-.002l-.001-.001-.001-.002-.003-.003-.002-.003-.001-.001-.001-.003h-.001l-.006-.009-.003-.003v-.002s-.002 0-.002-.002l-.001-.001-.002-.002s0-.002-.002-.002v-.002l-.002-.001-.002-.002-.001-.003s-.002 0-.002-.002v-.001l-.003-.004h-.001l-.001-.003-.002-.001-.002-.002-.001-.002-.001-.002-.001-.001-.003-.002v-.003s-.002 0-.002-.002l-.001-.001-.003-.002v-.002s0-.002-.002-.003l-.001-.001-.002-.003s-.002 0-.002-.002v-.001l-.002-.002-.001-.003h-.001l-.001-.003-.002-.001c0-.002 0-.003-.002-.003v-.002l-.002-.002H71.9l-.003-.004v-.002l-.002-.002-.002-.002v-.002c-.002 0-.002-.001-.003-.002v-.001c0-.002-.002-.002-.002-.003h-.001l-.003-.003v-.002l-.002-.002-.001-.002-.001-.001-.003-.003c0-.002-.002-.003-.003-.004v-.001l-.002-.002c0-.002 0-.002-.002-.003v-.002l-.003-.001-.001-.002-.001-.002s-.002 0-.002-.002v-.001l-.003-.003-.002-.003-.002-.001-.002-.005h-.001l-.001-.003-.001-.001c-.002 0-.002-.002-.003-.003 0-.002-.002-.002-.002-.003l-.001-.001-.001-.003h-.002c0-.002-.002-.003-.002-.003l-.001-.001-.002-.004c-.002 0-.002-.002-.003-.003v-.001l-.003-.004h-.001l-.002-.003v-.001c-.002 0-.002-.002-.003-.003h-.001l-.001-.003-.002-.001c0-.002 0-.003-.002-.003l-.002-.003-.001-.001-.005-.007-.001-.003-.003-.002v-.001l-.002-.002-.001-.002-.002-.002H71.8v-.003l-.002-.001-.001-.003h-.001c-.001-.002-.001-.003-.003-.003v-.001c0-.002-.002-.003-.003-.004l-.001-.001-.001-.002-.002-.001c0-.002 0-.003-.002-.003h-.001l-.001-.003-.001-.003c-.002 0-.002 0-.003-.002v-.001l-.002-.002-.001-.002-.003-.002-.003-.004v-.002a.002.002 0 0 1-.002-.002l-.002-.001c0-.001 0-.002-.002-.002l-.001-.002-.001-.002-.001-.001-.003-.002v-.003s-.002 0-.003-.002v-.001l-.003-.002v-.002c-.002 0-.002-.002-.003-.003l-.004-.004c0-.002 0-.002-.002-.003l-.001-.001-.001-.002-.001-.002c-.002 0-.002 0-.003-.002v-.001l-.002-.002-.001-.003h-.003v-.003l-.002-.002-.002-.002-.003-.003v-.001l-.002-.002-.001-.002-.001-.002-.001-.001-.003-.002v-.002s-.002 0-.002-.002l-.001-.001c-.001-.001-.001-.002-.003-.002v-.002s-.002 0-.002-.002l-.001-.001-.004-.003v-.003l-.002-.001-.001-.002-.002-.001c0-.002-.002-.002-.002-.003l-.002-.002-.001-.001-.001-.002-.001-.002s-.002 0-.002-.002v-.001l-.003-.002-.001-.002-.003-.003-.003-.004h-.001l-.001-.002-.002-.002v-.002c-.002 0-.002 0-.002-.002-.001 0-.002 0-.002-.002l-.001-.001-.002-.002v-.002c-.002 0-.002 0-.003-.002l-.001-.001-.003-.003c0-.002-.002-.003-.003-.004l-.001-.002-.001-.002c-.002 0-.002 0-.002-.002h-.002l-.001-.003-.001-.001-.001-.003h-.003v-.002c0-.001 0-.002-.002-.002l-.001-.002-.003-.003-.003-.003v-.002c-.001 0-.002 0-.002-.002l-.002-.001-.002-.002-.001-.002-.002-.002v-.001a.087.087 0 0 0-.003-.002v-.003h-.003l-.001-.003-.002-.002v-.002c-.002 0-.003-.002-.003-.003h-.001c-.001-.001-.001-.002-.003-.002v-.003c-.002 0-.002 0-.003-.002l-.001-.001-.001-.001c0-.001-.002-.001-.002-.003l-.003-.003-.001-.001-.001-.002c-.002 0-.002-.002-.003-.002a.114.114 0 0 0-.003-.004l-.001-.002-.003-.003c0-.001 0-.002-.002-.002l-.001-.001a.002.002 0 0 0-.003-.003v-.002l-.002-.001-.001-.001-.002-.003h-.002v-.003l-.002-.002-.002-.003h-.001l-.003-.003v-.003h-.003l-.001-.002-.002-.002v-.001l-.003-.003-.001-.002-.001-.001-.002-.001-.002-.003h-.001l-.001-.003-.001-.001-.004-.004h-.001l-.001-.003-.001-.001-.003-.003c0-.002-.002-.002-.002-.003l-.001-.001-.003-.003c0-.002-.002-.002-.002-.003l-.002-.001-.001-.002-.002-.002-.004-.004-.001-.003h-.002c0-.002 0-.002-.002-.003l-.001-.001-.001-.002-.001-.002h-.003v-.003l-.002-.001-.002-.003h-.002v-.003l-.002-.001-.003-.004h-.002v-.002l-.003-.002-.001-.002-.001-.002h-.003v-.003l-.002-.001-.001-.003h-.001l-.003-.003v-.001l-.002-.003a.002.002 0 0 1-.002-.002c-.002 0-.003-.001-.003-.002v-.001l-.003-.003h-.001l-.002-.002-.002-.002-.001-.002-.001-.002-.003-.001V62.5l-.002-.002-.001-.002-.002-.002-.002-.001-.003-.004h-.001l-.001-.003-.002-.001-.002-.002-.001-.002-.001-.002-.003-.001v-.002l-.002-.002-.002-.002-.001-.001-.003-.002v-.002s-.002 0-.003-.002l-.001-.001-.003-.002v-.002s-.002 0-.002-.002l-.001-.002-.003-.001v-.003h-.002l-.001-.002-.002-.002-.002-.001c0-.002 0-.003-.002-.003h-.001l-.002-.003-.002-.001c0-.001 0-.003-.002-.004h-.001l-.002-.003-.002-.001c0-.002 0-.002-.002-.003h-.001l-.001-.002-.001-.002c-.002 0-.002-.002-.003-.002l-.003-.003-.001-.001-.003-.002v-.002l-.003-.003-.001-.001-.003-.003c0-.002-.002-.002-.002-.003l-.001-.001-.003-.001V62.4h-.002l-.002-.003-.001-.001-.002-.001c0-.002 0-.002-.002-.003h-.001l-.004-.004v-.002s-.002 0-.002-.002h-.001l-.002-.003-.002-.001v-.003h-.003l-.001-.002-.001-.002c-.002 0-.002-.002-.003-.002v-.002l-.003-.001-.001-.001-.003-.002v-.003c-.002 0-.003 0-.003-.002l-.001-.001-.003-.003c-.002 0-.002-.002-.002-.002l-.002-.002-.002-.001v-.003h-.003l-.001-.003-.001-.001c0-.001-.002-.001-.002-.003a.002.002 0 0 1-.002-.002l-.001-.001-.004-.002v-.002c-.002 0-.002 0-.002-.002l-.002-.001-.001-.002-.002-.001s0-.002-.002-.002l-.001-.002-.001-.001-.003-.002v-.002h-.003l-.001-.003-.001-.001-.004-.004h-.001l-.002-.002-.002-.002-.002-.001-.001-.003h-.001l-.001-.002-.003-.002v-.002h-.003l-.001-.003-.002-.001v-.001l-.004-.004h-.001l-.003-.003v-.001l-.003-.003h-.001l-.002-.002-.002-.001-.001-.002-.001-.002-.003-.002v-.001l-.002-.001-.002-.001-.001-.003h-.002c0-.002-.002-.003-.003-.004l-.001-.002-.003-.002v-.001l-.003-.002-.001-.001-.001-.002h-.003v-.003l-.003-.001-.001-.002-.002-.002-.002-.002-.001-.001-.004-.004-.002-.002-.002-.002-.001-.001c-.002 0-.002-.002-.003-.002v-.002l-.002-.001-.002-.002-.002-.002h-.002l-.001-.002-.002-.002v-.001c-.002-.001-.003-.001-.003-.003 0 0-.002 0-.002-.002l-.002-.001-.002-.002s0-.002-.002-.002l-.001-.002-.001-.001-.003-.001v-.002c-.002 0-.002 0-.002-.002l-.002-.002-.001-.001c-.002 0-.002-.001-.003-.002l-.007-.007s0-.002-.002-.002l-.001-.002-.003-.001v-.001l-.002-.002-.002-.002h-.001l-.003-.003v-.001c-.002 0-.003-.001-.003-.002l-.001-.002c-.002 0-.002 0-.003-.002l-.004-.004h-.002v-.003l-.002-.001-.002-.001-.001-.003h-.003v-.002l-.003-.002-.001-.001-.003-.003c-.002 0-.002-.002-.003-.002l-.001-.001-.003-.004-.003-.003-.001-.001-.003-.002v-.002c-.002 0-.002 0-.003-.002l-.001-.001-.002-.001c0-.002 0-.002-.002-.002l-.001-.002h-.001l-.003-.003v-.001l-.004-.003h-.001l-.003-.003v-.001c0-.002-.002-.002-.003-.003h-.001c-.002 0-.002-.002-.003-.002v-.001l-.002-.002-.002-.002h-.002c0-.002 0-.002-.002-.003l-.001-.001-.001-.001-.003-.003h-.002l-.002-.003-.001-.001-.003-.003c0-.002-.002-.002-.003-.003l-.001-.001-.002-.001c0-.002 0-.002-.002-.003h-.001l-.001-.002-.003-.002v-.002c-.002 0-.003 0-.004-.002v-.001l-.004-.002v-.001l-.003-.003h-.001c-.002 0-.003-.002-.003-.003v-.001c-.002 0-.002-.002-.003-.002h-.001l-.003-.003v-.001l-.003-.002-.001-.002c-.002 0-.002 0-.003-.002l-.004-.003v-.002c-.002 0-.003 0-.004-.002l-.001-.001-.002-.001-.002-.001c0-.002 0-.003-.002-.003H71c0-.002-.001-.002-.002-.003l-.002-.001-.002-.001-.001-.002-.001-.002-.001-.001-.007-.006-.002-.001-.002-.002-.001-.002-.002-.002h-.002s0-.002-.002-.003l-.001-.001-.002-.002h-.002c0-.002 0-.002-.002-.003l-.001-.001-.002-.002h-.002c0-.002-.002-.003-.003-.004l-.001-.001-.003-.002c0-.002-.002-.002-.002-.003h-.002l-.001-.003-.003-.001v-.003h-.003l-.001-.002-.002-.001-.002-.002-.001-.002-.004-.002v-.001l-.003-.002-.001-.002-.003-.002v-.001l-.003-.001-.001-.001-.003-.003c-.002 0-.003-.002-.003-.003l-.001-.001-.003-.001v-.002l-.004-.002-.001-.002c-.002 0-.002-.001-.003-.002v-.002H70.9l-.001-.002-.003-.002v-.002h-.003l-.001-.003-.003-.001v-.001l-.003-.003h-.001c-.002 0-.002-.002-.003-.003l-.004-.003h-.002c0-.002 0-.002-.002-.003l-.001-.001-.002-.002-.002-.001-.002-.002h-.001l-.002-.003-.002-.001-.002-.001-.001-.002-.002-.002-.002-.001-.003-.002-.001-.001-.003-.003-.003-.003-.001-.001c-.001 0-.001-.002-.003-.002l-.003-.003-.001-.001-.003-.001v-.002c-.002 0-.002 0-.003-.002l-.001-.001-.004-.002v-.001c0-.002-.002-.002-.003-.003h-.001c-.002 0-.002 0-.003-.002v-.001l-.003-.002-.001-.002h-.003v-.002l-.003-.001-.001-.001-.003-.003-.008-.007h-.001l-.002-.003-.003-.001v-.001l-.003-.002-.001-.002-.003-.001-.002-.001-.001-.001-.003-.003c0-.002-.002-.002-.003-.003l-.001-.001-.004-.002v-.002s-.002 0-.003-.002l-.001-.001-.003-.001v-.002s-.002 0-.003-.002h-.001l-.003-.002v-.001l-.003-.003h-.001c-.002 0-.002-.002-.003-.002v-.001l-.004-.004h-.002s0-.002-.002-.002l-.001-.001-.002-.002-.002-.001s0-.002-.002-.002l-.001-.002-.002-.001-.002-.001c0-.001-.002-.001-.002-.003h-.001l-.004-.002v-.001l-.004-.004c-.001 0-.003 0-.004-.002l-.002-.002-.002-.001-.003-.003-.003-.002-.001-.001-.003-.002v-.002h-.003l-.001-.002-.004-.002v-.001l-.003-.003h-.002c0-.002 0-.002-.002-.003l-.002-.001-.003-.003s-.002 0-.002-.002l-.001-.001-.002-.001-.002-.001c0-.002 0-.002-.002-.002h-.001l-.002-.003-.002-.001-.003-.002-.001-.002-.003-.002-.003-.002-.001-.001-.003-.003c-.002 0-.003-.002-.003-.002l-.002-.001-.003-.002v-.002h-.003l-.001-.002-.004-.003-.003-.003h-.002s0-.002-.002-.002l-.001-.001-.002-.002c-.002 0-.002-.002-.002-.002h-.002l-.002-.002-.003-.002v-.001c-.002 0-.002-.002-.003-.002h-.001l-.004-.004-.003-.002-.001-.002c-.002 0-.002 0-.003-.002v-.001l-.003-.001-.003-.001v-.003h-.003c0-.002-.001-.002-.002-.003l-.002-.001-.002-.002h-.001l-.004-.004a.114.114 0 0 0-.004-.004h-.001c-.002 0-.002-.002-.003-.002v-.001l-.004-.002-.002-.002-.002-.002-.001-.001-.002-.001-.002-.001c0-.002-.002-.003-.003-.003l-.004-.003c-.003-.002-.005-.005-.009-.006v-.001l-.003-.002s-.002 0-.002-.002h-.002l-.001-.002-.004-.002v-.001l-.003-.002h-.001l-.004-.003a.058.058 0 0 0-.003-.003h-.001l-.007-.006h-.002l-.003-.004-.004-.002v-.001l-.004-.002a.058.058 0 0 0-.004-.004l-.02-.015-.004-.002h-.001l-.004-.004c-1.18-.875-2.6-1.344-4.174-1.444h-.003a.035.035 0 0 0-.035.032.034.034 0 0 0 .033.037c1.668.106 3.107.623 4.275 1.536Zm-4.535 24.828a.04.04 0 0 0 .022.008c.01 0 .021-.004.027-.012l.11-.13v-.001c.004-.005.008-.008.011-.014h.001c.004-.005.007-.01.012-.014a34.151 34.151 0 0 0 .586-.716l.011-.013c0-.002.002-.002.002-.003l.002-.003a.202.202 0 0 0 .005-.005l.002-.002c0-.002.002-.004.003-.005l.002-.002.005-.007.005-.006.001-.001.004-.005.002-.002.004-.005.004-.007h.001l.005-.006.002-.003.003-.003c0-.001 0-.003.002-.003l.004-.004v-.002l.004-.004.003-.002c0-.003.002-.004.004-.006l.001-.002.004-.004.002-.003.003-.004.002-.002.002-.004.003-.002c0-.002.002-.003.004-.006h.001l.004-.005.002-.004.003-.002.002-.004.002-.002.003-.003v-.002l.007-.008.002-.003.002-.002.004-.004v-.002l.004-.004.003-.003v-.002l.006-.006.002-.004c.001 0 .002 0 .002-.002.001-.001.003-.002.003-.004l.003-.003.001-.002.004-.004v-.002a.027.027 0 0 0 .006-.006l.002-.003.002-.004.003-.002.002-.004.002-.002.004-.003v-.003l.007-.008a.017.017 0 0 0 .004-.006h.002c0-.002.002-.004.003-.005l.001-.001.004-.005v-.001a.129.129 0 0 1 .013-.014v-.001l.004-.005.001-.002.004-.004h.001a.631.631 0 0 1 .007-.011l.004-.004s0-.002.002-.002l.002-.004.001-.002.004-.003.001-.003c.002-.003.005-.005.006-.008h.001a.114.114 0 0 1 .004-.004c0-.002 0-.003.002-.004l.002-.003.003-.003s0-.002.002-.003l.002-.002.003-.004c0-.001 0-.002.003-.003l.004-.006.002-.002.002-.004.001-.002.004-.004.002-.002.003-.003.007-.01s0-.002.002-.002l.002-.004.003-.002s0-.002.002-.003l.002-.004.003-.003v-.001l.008-.008v-.002a.015.015 0 0 1 .004-.004l.002-.001c0-.002.002-.004.003-.005v-.001l.005-.005.011-.016h.002c0-.002.002-.003.003-.005h.001c.001-.003.003-.004.004-.005l.013-.017c0-.002.002-.003.003-.005h.001l.015-.022h.002l.003-.005v-.001a.515.515 0 0 0 .042-.053v-.001l.005-.005v-.001a.266.266 0 0 0 .016-.021l.005-.006.02-.026.017-.022a.515.515 0 0 0 .025-.032c2.675-3.507 4.536-7.212 5.513-10.666a.036.036 0 0 0-.024-.044l-.01-.001c-.016 0-.03.01-.035.025-1.074 3.803-3.146 7.701-5.99 11.271a40.51 40.51 0 0 1-.75.913c-.015.013-.012.034.003.047Zm-2.86 3.005a.038.038 0 0 0-.026-.011.036.036 0 0 0-.025.01c-3.899 3.643-8.34 6.066-12.186 6.646-.018.002-.031.021-.029.04.002.017.018.03.035.03h.005c3.83-.578 8.227-2.931 12.224-6.665a.035.035 0 0 0 .001-.05Zm-19.272-21.73c-4.182-6.372-9.545-11.437-15.102-14.264-3.029-1.541-5.918-2.315-8.512-2.315-2.09 0-3.986.507-5.614 1.515 7.736-3.708 20.15 2.98 28.42 15.583 8.298 12.641 9.414 26.639 2.793 32.111 7.485-4.938 6.608-19.54-1.985-32.63ZM15.023 56.483c.086.374.168.714.247 1.017 2.018.307 4.168 1.021 6.396 2.154 5.578 2.838 10.961 7.92 15.155 14.311 8.28 12.615 9.407 26.633 2.83 32.158.147-.085.291-.17.434-.261 1.501-.969 2.669-2.321 3.518-3.962 3.46-6.684 1.553-18.23-5.401-28.824C31.617 63.043 22.41 56.76 15.023 56.483Zm7.945 26.421c-1.87-3.469-4.436-6.302-7.227-7.978-2.785-1.672-5.458-1.989-7.526-.894a5.482 5.482 0 0 0-1.832 1.588c-.917 1.7-1.263 3.968-1 6.555.27 2.65 1.17 5.455 2.602 8.11 1.87 3.47 4.437 6.303 7.227 7.979 2.785 1.672 5.458 1.989 7.527.894a5.522 5.522 0 0 0 1.831-1.59c.916-1.699 1.263-3.966.999-6.553-.27-2.651-1.17-5.456-2.6-8.11ZM14.221 34.31l-.861-.373c-1.123 6.707-1.204 11.697-1.208 12.803.414.168.78.419 1.08.73-.086-6.088.887-12.509.989-13.16Zm5.365-11.95c1.48-3.631 3.22-6.872 5.167-9.635 2.436-3.453 5.208-6.161 8.24-8.052 3.553-2.214 7.486-3.324 11.752-3.324 2.547 0 5.213.396 7.99 1.188 5.148 1.468 9.86 4.517 14.004 9.06 3.314 3.634 6.274 8.226 8.796 13.648 4.156 8.93 5.75 17.228 5.865 17.838l.91-.175c-.115-.637-1.861-9.98-6.599-19.673-2.868-5.867-6.253-10.712-10.064-14.4-4.76-4.607-10.2-7.41-16.172-8.333-7.71-1.194-14.562.42-20.366 4.792-4.458 3.36-8.332 8.44-11.2 14.697-2.38 5.19-3.6 10.187-3.924 12.904l2.168.893c.093-.517 1.033-5.546 3.433-11.429Zm61.188 20.927c.083.419.886 4.601 1.27 9.858l1.05-.066c-.005-.31-.094-2.861-1.485-9.962l-.835.17Z"
  },
  {
    fill: "#08000E",
    d: "m81.27 69.111.83-4.237.571.027h.002a.036.036 0 0 0 .035-.028c.943-4.665.463-11.695.457-11.765 0-.067-.015-2.496-1.488-10.008l.682-.13a.035.035 0 0 0 .028-.04c-.017-.097-1.723-9.726-6.61-19.725-2.872-5.875-6.262-10.726-10.078-14.42C60.94 4.181 55.506 1.375 49.543.44c-.008-.022-.024-.04-.05-.044-.096-.017-9.798-1.691-20.608 1.974-6.353 2.153-11.84 5.698-16.31 10.54C6.99 18.957 2.986 27.055.674 36.98l.002.005c-.002.002-.003.003-.003.006s.003.005.003.009c0 .008.002.016.005.023l.009.014.005.01c.003 0 .007 0 .01.002.003.003.006.008.01.01l1.095.477.026-.14-.89-.39 12.998-4.016 2.02.832-1.596.441c-.002-.025-.014-.05-.039-.061l-.994-.43a.069.069 0 0 0-.062.002.072.072 0 0 0-.036.05l-.005.034c-1.116 6.638-1.213 11.611-1.219 12.827-.057-.02-.113-.04-.171-.057l-.018-.005a.067.067 0 0 0-.06.012.068.068 0 0 0-.03.054v.01c-.005.244-.14 7.871 2.148 13.8 0 0 .003 0 .003.002a.068.068 0 0 0 .04.039.082.082 0 0 0 .024.003.072.072 0 0 0 .037-.01l1.252-.78c.848 2.895 2.535 7.6 5.181 10.481.905.986 1.878 2.028 2.937 2.96 2.04 1.8 3.846 3.952 5.37 6.399 5.708 9.172 5.512 19.593-.435 23.23-2.877 1.759-6.659 1.686-10.647-.205-4-1.894-7.727-5.388-10.495-9.835-3.294-5.293-4.737-11.117-3.96-15.989 1.215-7.655-.208-14.158-.367-14.844l.136-.055c-.066-.015-.132-.028-.198-.045l-.02-.02-.026.01-.059.024.016.059c.005.024.217.9.429 2.376-1.38 3.65-1.426 8.42-.184 13.58-.423 4.657 1.045 10.048 4.113 14.977 2.782 4.471 6.53 7.983 10.554 9.889.959.456 1.906.801 2.834 1.047 4.252 3.001 8.62 4.669 12.454 4.669 2.14 0 4.117-.518 5.815-1.613.341-.22.66-.467.968-.725 6.576-5.525 5.45-19.543-2.83-32.158-4.196-6.392-9.578-11.473-15.157-14.31-2.227-1.134-4.377-1.848-6.395-2.155-.08-.303-.162-.643-.246-1.017a39.132 39.132 0 0 1-.621-3.551c.087-.045.176-.09.265-.132 1.628-1.008 3.524-1.515 5.614-1.515 2.594 0 5.483.775 8.513 2.315 5.557 2.827 10.92 7.892 15.101 14.264 8.594 13.09 9.47 27.692 1.985 32.63-.29.24-.59.468-.91.675-.026.018-.054.033-.08.05.048-.024.098-.047.146-.072.287-.146.568-.302.84-.477a9.793 9.793 0 0 0 2.334-2.124c1.67-2.085 2.61-4.905 2.835-8.175a5.61 5.61 0 0 0 .787 0v.004l.077-.006.064-.005v-.002c3.575-.302 8.077-3.544 11.493-8.283 2.676-3.715 4.318-7.895 4.402-11.2h.001l.001-.063.001-.077c.026-2.22-.642-3.88-1.94-4.798-3.345-2.368-9.897 1.016-14.603 7.547a27.53 27.53 0 0 0-2.407 4.008 44.972 44.972 0 0 0-2.129-4.909c.392-.552.802-1.097 1.227-1.633.619-.774 1.27-1.53 1.938-2.245a.035.035 0 0 0-.002-.05.037.037 0 0 0-.023-.01c-.01 0-.02.004-.027.013a41.184 41.184 0 0 0-.68.746l-.006.01h-.001a.044.044 0 0 0-.007.008c-.003.003-.006.005-.007.009h-.002l-.007.008v.001l-.022.025-.007.008s0 .002-.002.002l-.006.007-.001.001-.007.007-.001.002-.007.007-.001.001-.006.008-.001.002c-.003.002-.005.004-.007.008-.003.002-.005.004-.007.008h-.002a.036.036 0 0 0-.005.008l-.003.001c0 .002-.003.005-.006.007v.002l-.008.007v.001c-.003.004-.006.005-.007.008v.002l-.008.007h-.001l-.007.009-.001.001-.006.007-.001.001-.006.007-.001.001-.007.008-.001.002-.006.006-.003.003-.005.007-.002.002-.005.007-.003.002c0 .002-.003.005-.006.007v.002l-.007.006-.002.003-.005.005-.002.003a.03.03 0 0 1-.006.007v.002c-.003.002-.006.003-.007.006 0 0 0 .002-.002.002l-.006.007-.002.002c-.001.003-.004.005-.006.007l-.001.003-.006.005-.002.004c-.002 0-.004.003-.005.004l-.004.004-.003.006-.004.003c0 .002-.003.004-.004.005l-.003.003c0 .002-.003.004-.004.006l-.004.003c0 .003-.003.004-.004.006 0 .001-.003.002-.003.004-.002 0-.003.003-.004.005l-.004.004-.003.003-.005.006-.002.004c-.003 0-.004.003-.005.004l-.004.004a.023.023 0 0 1-.004.005c0 .002-.001.003-.003.004l-.005.006-.003.003-.003.005-.005.004-.002.004a812347886.066 812347886.066 0 0 0-.008.01c-.002 0-.003.003-.004.004l-.005.005s0 .002-.002.003a.021.021 0 0 0-.005.006l-.002.003a.32.32 0 0 0-.008.01l-.006.005-.002.004-.005.005-.003.004-.004.003c-.001.003-.002.004-.005.006l-.003.004-.001.002-.007.007-.001.002a.033.033 0 0 1-.006.007c-.001.001-.001.002-.003.002l-.005.007-.003.003-.006.007-.002.002-.006.008v.001a.044.044 0 0 0-.008.008l-.001.002a.017.017 0 0 1-.004.004l-.002.002a.03.03 0 0 0-.006.007c0 .002 0 .002-.002.003l-.006.007-.001.002-.007.007-.002.002-.005.007-.004.002c0 .003-.003.005-.005.007 0 .001-.002.001-.002.003a.053.053 0 0 0-.007.008l-.012.014-.002.002-.005.008-.002.001-.007.008v.001l-.008.008v.002a.044.044 0 0 0-.008.008h-.001l-.007.009v.001a2.366 2.366 0 0 0-.02.023l-.001.002a.061.061 0 0 0-.007.009h-.001l-.007.009-.001.001-.007.008-.002.001-.007.008v.002l-.02.023-.008.01v.001a.039.039 0 0 1-.008.008v.002a.058.058 0 0 1-.008.008.062.062 0 0 1-.008.01l-.015.019a.009.009 0 0 0-.005.005l-.008.01-.007.009-.001.001-.007.008-.001.002a.044.044 0 0 0-.007.008l-.028.034-.002.002-.007.007v.001c-.002.004-.005.006-.007.008 0 .002 0 .002-.002.003-.001.002-.005.004-.006.008v.001l-.008.008-.001.001-.028.034c-.004.003-.005.006-.007.01h-.001a.046.046 0 0 0-.007.008l-.001.002-.007.009h-.002l-.018.024-.001.001a.044.044 0 0 0-.007.008c-.002.001-.002.001-.002.003l-.007.007v.002l-.007.007c0 .001 0 .002-.002.003l-.006.007v.001l-.008.009-.001.002-.02.023v.001l-.007.008-.002.002c-.001.003-.004.005-.006.007l-.001.003-.007.007-.001.003c-.003.001-.004.005-.006.006l-.003.003-.005.007-.003.003-.003.003-.001.004a.033.033 0 0 0-.006.007c-.001 0-.003 0-.003.002l-.005.007c-.002 0-.002.002-.003.003-.002.001-.003.004-.004.006l-.004.002-.003.006a.058.058 0 0 0-.009.01.016.016 0 0 0-.003.004l-.004.003c0 .003-.002.004-.003.006l-.004.004c0 .002-.002.003-.004.005l-.003.004c0 .002-.003.003-.004.006l-.004.004c0 .002-.002.003-.003.004l-.004.006-.003.003c-.003.002-.004.004-.005.006l-.003.003a.023.023 0 0 0-.004.006.058.058 0 0 0-.007.008l-.005.005c0 .001 0 .002-.002.003l-.005.006-.003.003a.027.027 0 0 1-.005.006c0 .001 0 .003-.002.004-.001.002-.004.003-.005.006a.114.114 0 0 1-.003.003l-.004.006-.003.003-.004.006-.003.004-.005.005-.003.004c-.002 0-.003.003-.004.004l-.002.004-.006.007-.002.002-.005.007-.002.002-.006.007-.001.003-.006.007-.003.003a.027.027 0 0 0-.004.006.002.002 0 0 1-.003.002c0 .002-.002.005-.004.006l-.003.003c0 .003-.003.004-.004.006-.001.001-.001.002-.003.002 0 .003-.003.005-.005.007l-.002.004c-.002.001-.004.005-.005.007-.002 0-.002.001-.003.002 0 .002-.003.005-.006.007v.002l-.007.007-.002.003-.005.007s-.002 0-.002.002l-.006.007v.001l-.007.008v.001l-.007.008v.002c-.003.003-.006.005-.007.008v.002l-.008.007-.001.002-.006.007-.001.002-.007.008-.007.01-.007.008-.001.002-.005.006-.002.002a.044.044 0 0 1-.007.008v.002l-.006.006-.002.003-.006.007a.055.055 0 0 1-.007.01l-.001.001a.033.033 0 0 1-.006.007l-.001.002-.006.007v.002l-.007.008h-.001l-.006.009-.001.001-.014.017c0 .002 0 .002-.002.002l-.005.008h-.002c-.002.004-.003.007-.007.01l-.005.008-.002.001a.034.034 0 0 0-.005.008l-.002.001-.007.009-.007.009v.001l-.014.017v.002l-.008.008a.241.241 0 0 1-.014.018l-.007.01c-.006.005-.01.012-.015.018l-.02.026-.002.002-.014.017v.001l-.007.008v.001l-.015.018c-.334.429-.655.86-.964 1.292a48.554 48.554 0 0 0-2.74-4.729c-4.196-6.39-9.578-11.473-15.157-14.31-5.59-2.844-10.712-3.095-14.42-.704-.017.012-.033.025-.05.036a46.694 46.694 0 0 1-.303-3.375 3.066 3.066 0 0 0-.71-1.802c-.102-5.933.82-12.231.971-13.216l1.852-.511a.068.068 0 0 0 .049-.057l-.033-.005c.01-.053.918-5.285 3.437-11.46 1.48-3.624 3.215-6.86 5.16-9.618 2.43-3.446 5.195-6.148 8.22-8.033C38.686 1.206 45.31.49 52.714 2.602c5.136 1.467 9.837 4.508 13.97 9.041 3.31 3.627 6.266 8.213 8.786 13.629 2.654 5.705 4.262 11.149 5.107 14.494.228.9.4 1.648.522 2.208.138.634.213 1.026.232 1.126l-.386.08a.7.7 0 0 1-.05.002L72.15 44.94a2.324 2.324 0 0 1-2.703-1.626c-2.557-8.638-5.99-15.831-10.207-21.38-3.374-4.44-7.254-7.844-11.531-10.116-5.19-2.757-9.724-3.158-11.926-3.158-.145 0-.278.001-.402.005-.032.024-.065.047-.096.073 1.94-.06 6.78.161 12.395 3.143 4.267 2.269 8.138 5.666 11.505 10.098 4.21 5.542 7.64 12.727 10.195 21.355a2.392 2.392 0 0 0 2.549 1.71c-.003-.007-.004-.015-.006-.023l8.778-1.76-.002.007c.009.042.872 4.37 1.276 9.881l-8.89.562-.001-.02a1.196 1.196 0 0 0-.893 1.12c-.051 1.637-.3 3.313-.46 4.234l.066.038c.159-.916.413-2.612.464-4.27.015-.487.34-.903.8-1.042.006.006.016.01.025.01h.002l8.899-.563.004.01a.036.036 0 0 0 .024.008h.002l.79-.064c-.305.137-.714.457-.69 1.207.13 4.247-.102 7.55-.729 10.39a18.529 18.529 0 0 1-2.815-.489l.089.095c1.514.374 2.734.464 2.752.466l.617.03-.812 4.135a8.864 8.864 0 0 0-.508-.948c.053.179.107.357.152.54 1.191 2.226 1.548 5.194 1.001 8.666-.796 5.043-3.4 10.541-7.334 15.48-7.271 9.128-17.1 13.769-23.222 11.38-.145-.01-.29-.016-.432-.031 1.184.531 2.514.795 3.95.795.997 0 2.043-.127 3.123-.368.194.011.39.02.59.02 5.302 0 12.166-3.965 17.478-10.633 3.482-4.372 5.788-9.24 6.492-13.71.369-2.343.27-4.427-.26-6.166-.022-1.86-.35-3.516-.979-4.919ZM3.14 64.597c.368 2.708.699 7.2-.092 12.187-.037.223-.062.449-.09.675-1.116-4.869-1.068-9.364.183-12.862Zm48.306 8.972c3.66-5.08 8.432-8.25 11.902-8.25.948 0 1.799.237 2.504.735 1.26.893 1.91 2.516 1.88 4.696-.053.004-.107.011-.16.017l-.14.015-.203.03-.142.022-.203.04-.146.03a6.59 6.59 0 0 0-.203.05c-.05.01-.099.022-.15.036-.068.017-.137.038-.206.058l-.15.044c-.069.02-.138.044-.207.067-.05.017-.102.032-.154.05-.068.025-.138.05-.207.077-.052.02-.104.037-.155.058l-.21.084c-.053.022-.105.042-.157.065-.07.03-.14.061-.21.094l-.16.07-.21.102c-.053.027-.107.051-.16.079a7.12 7.12 0 0 0-.21.108 5.27 5.27 0 0 0-.164.086 18.342 18.342 0 0 0-.582.332l-.17.1-.203.129c-.058.036-.115.071-.172.108-.068.044-.135.09-.203.135l-.174.116-.202.141-.173.123c-.067.047-.133.097-.2.147a8.74 8.74 0 0 0-.177.13l-.197.152-.178.138-.197.16-.176.141-.197.167c-.059.05-.117.098-.175.149-.066.055-.13.113-.194.17l-.177.156-.19.176c-.06.054-.12.107-.178.163l-.188.179c-.06.057-.119.113-.177.171-.062.06-.122.121-.183.182l-.18.179-.175.181-.183.191-.174.188c-.06.064-.121.129-.18.195l-.174.194c-.06.067-.12.132-.178.199l-.158.184-.188.22-.15.182-.192.23c-.06.074-.12.15-.179.226-.052.066-.105.13-.156.196-.068.087-.133.175-.2.262l-.13.17a28.096 28.096 0 0 0-.816 1.144c-.081.122-.158.244-.239.366-.074.115-.153.231-.226.347-.085.134-.165.269-.247.404-.065.105-.13.21-.193.315-.08.137-.157.275-.236.413-.058.104-.12.208-.177.312-.073.133-.142.267-.213.401-.058.109-.117.217-.173.327-.067.13-.13.263-.194.393l-.163.336c-.062.13-.118.26-.177.39-.05.113-.103.225-.152.338-.055.126-.105.252-.156.38-.048.115-.098.23-.143.345-.048.123-.09.243-.136.364-.045.12-.09.239-.132.358-.042.119-.08.237-.12.355-.039.119-.08.239-.117.358-.036.117-.068.232-.101.348-.035.12-.072.238-.104.356-.03.113-.056.224-.083.338-.03.119-.062.238-.089.357-.024.11-.044.219-.066.327-.025.118-.05.237-.071.354-.02.106-.034.212-.05.318-.018.116-.04.234-.054.348-.013.104-.022.205-.033.308-.012.114-.027.229-.035.342-.008.1-.01.198-.016.296-.005.1-.014.202-.015.302-.271.017-.531.016-.783-.003.235-3.752-.459-8.08-2.064-12.554a27.278 27.278 0 0 1 2.455-4.108Zm-22.601 5.95c-1.53-2.459-3.346-4.622-5.397-6.43-1.052-.928-2.023-1.966-2.926-2.949-.974-1.06-1.817-2.372-2.535-3.748 4.619 1.63 9.626 5.751 13.439 11.561 3.229 4.919 4.994 10.124 5.236 14.547-.213 3.591-1.53 6.267-3.813 7.738a7.367 7.367 0 0 1-2.49 1.007c3.979-4.606 3.512-13.65-1.514-21.725Zm-.482 23.424a8.456 8.456 0 0 0 1.832-1.521 7.51 7.51 0 0 0 2.73-1.067c2.075-1.336 3.366-3.644 3.772-6.715-.02 4.002-1.365 7.046-3.848 8.646-1.533.988-3.374 1.334-5.37 1.122.302-.139.598-.291.884-.465Zm-6.762-43.165c5.557 2.827 10.92 7.893 15.103 14.264 8.625 13.14 9.478 27.804 1.902 32.688-4.622 2.981-11.333 1.641-17.82-2.843.96.227 1.899.345 2.8.345 1.303 0 2.53-.238 3.652-.713.457.058.907.09 1.347.09 1.598 0 3.074-.387 4.34-1.205.177-.113.349-.234.513-.363.02-.015.036-.031.055-.046 2.385-1.885 3.558-5.238 3.313-9.543h-.01c-.25-4.44-2.02-9.652-5.253-14.576-3.865-5.89-8.958-10.05-13.647-11.659-1.182-2.305-2.019-4.77-2.535-6.542l.436-.27a.073.073 0 0 0 .028-.086c-.006-.014-.229-.593-.517-1.675 1.986.31 4.102 1.02 6.293 2.134Zm-7.656-10.337c.313 5.862 1.552 9.4 1.727 9.874l-1.69 1.054c-2.138-5.603-2.12-12.697-2.109-13.584a2.954 2.954 0 0 1 2.072 2.656Zm-.712-1.972a3.117 3.117 0 0 0-1.08-.73c.003-1.106.084-6.096 1.208-12.803l.86.372c-.102.652-1.075 7.073-.988 13.16Zm.65-14.607L.84 36.892c2.31-9.844 6.29-17.879 11.836-23.886 4.453-4.822 9.92-8.356 16.247-10.502C33.823.843 38.493.282 42.14.165c-4.791.437-9.17 2.131-13.073 5.072-.555.418-1.1.862-1.636 1.333-2.704 2.31-5.111 5.227-7.182 8.719a47.051 47.051 0 0 0-2.773 5.497c-1.86 4.252-2.944 8.3-3.398 10.98-.114.587-.176.972-.194 1.096Zm61.653-7.618c-2.523-5.422-5.483-10.014-8.797-13.648-4.144-4.543-8.855-7.59-14.004-9.06-2.776-.792-5.442-1.188-7.99-1.188-4.266 0-8.199 1.11-11.751 3.324-3.031 1.89-5.805 4.599-8.24 8.052-1.948 2.763-3.687 6.004-5.168 9.634-2.4 5.883-3.34 10.912-3.433 11.429l-2.168-.893c.324-2.717 1.544-7.714 3.924-12.904 2.868-6.255 6.742-11.338 11.2-14.697C34.915.92 41.767-.693 49.477.501c5.97.922 11.411 3.726 16.173 8.334 3.81 3.688 7.196 8.532 10.063 14.399 4.738 9.692 6.483 19.036 6.599 19.673l-.911.175c-.113-.608-1.71-8.907-5.864-17.838Zm6.509 27.9c-.385-5.257-1.188-9.439-1.27-9.858l.834-.17c1.391 7.101 1.48 9.653 1.485 9.962l-1.05.066Zm-.587 11.627c.628-2.842.859-6.147.728-10.395-.015-.467.14-.816.459-1.037.186-.128.375-.174.452-.188.036.554.446 7.197-.452 11.679l-1.187-.06Zm.91 15.403c-.7 4.446-2.996 9.292-6.463 13.644-5.317 6.675-12.185 10.628-17.451 10.581 5.302-1.352 11.319-5.459 16.186-11.57 3.95-4.958 6.564-10.477 7.363-15.545.148-.944.23-1.85.248-2.715.4 1.614.448 3.503.117 5.605Zm-16.725-20.04c.018 0 .035.016.035.035 0 .02-.017.036-.035.036-3.792 0-8.396 2.04-12.628 5.6a.036.036 0 0 1-.05-.005c-.013-.014-.01-.036.003-.049 4.166-3.502 8.642-5.514 12.387-5.612h.015l.011-.001H65.44c.003 0 .007 0 .01-.002H65.636c.003-.002.006-.002.007-.002Zm1.131 25.493c2.845-3.57 4.917-7.468 5.991-11.271a.036.036 0 0 1 .035-.025h.01c.018.007.029.026.024.045-.976 3.453-2.838 7.16-5.514 10.665-.005.01-.012.018-.02.028l-.004.004-.016.022-.021.027-.004.006h-.001l-.015.02-.001.002c-.002 0-.003.003-.004.004l-.001.001a.269.269 0 0 1-.016.021l-.004.006h-.001l-.02.027h-.001l-.004.005-.016.022h-.001l-.004.006-.012.016-.004.005-.001.001a.015.015 0 0 0-.004.005c-.004.005-.009.01-.012.016l-.004.005h-.001l-.004.005v.001l-.004.005-.001.001-.007.008-.002.001c0 .003 0 .003-.002.005l-.002.002c0 .002-.001.003-.003.004l-.002.002-.002.004-.003.002-.007.01s-.002.001-.002.003l-.001.002-.004.004v.002l-.004.003-.001.003a.019.019 0 0 0-.005.005l-.004.004c0 .001 0 .002-.002.003 0 .002-.001.003-.002.003 0 0-.001.003-.003.003l-.002.002-.002.004-.003.003-.002.004-.001.001-.007.008-.001.002-.004.004v.002l-.003.004-.003.002-.003.003-.007.01-.001.002c-.001.001-.003.002-.004.005l-.004.005-.002.001-.011.014v.002l-.004.004-.002.003-.002.003-.002.001a.015.015 0 0 1-.003.005h-.001a.044.044 0 0 1-.007.009l-.001.002-.004.004-.001.002-.002.004c-.002 0-.003 0-.003.002l-.002.003-.004.004a.02.02 0 0 1-.004.006l-.001.002a.058.058 0 0 0-.004.003l-.001.003-.002.003c-.002.001-.003.002-.003.004 0 0-.002 0-.003.002l-.001.003-.005.006-.002.002-.003.004-.002.003-.002.003c-.002 0-.003.002-.004.003l-.001.002-.004.004-.005.008c-.002.001 0 0 0 .001l-.004.004-.001.002-.004.004-.002.002-.002.003-.004.005v.001l-.006.006-.002.002-.002.004c-.001 0-.001.002-.003.002 0 .001 0 .002-.002.003l-.002.004-.004.003v.003l-.006.005s0 .002-.002.003l-.002.004c-.001 0-.001.002-.003.002l-.003.004-.001.002a.114.114 0 0 1-.004.004v.002a.32.32 0 0 1-.007.006v.001l-.004.006-.002.001-.003.005-.002.002-.004.005h-.001l-.005.008c-.002 0-.003.003-.006.005v.003l-.004.004-.003.003a.015.015 0 0 1-.003.004l-.004.004v.002l-.011.013-.001.001c-.19.237-.38.47-.573.702l-.013.014c-.004.004-.007.01-.012.014l-.011.013v.002a5.903 5.903 0 0 0-.11.13.037.037 0 0 1-.027.012.043.043 0 0 1-.023-.008.035.035 0 0 1-.004-.05c.253-.296.507-.602.75-.91ZM50.938 96.31a.035.035 0 0 1-.035-.03.035.035 0 0 1 .03-.04c3.845-.58 8.286-3.003 12.185-6.646a.036.036 0 0 1 .025-.01c.009 0 .018.004.025.011a.035.035 0 0 1 0 .05c-3.997 3.733-8.394 6.087-12.224 6.665h-.006Zm21.104-33.08.002.003h.001c0 .002.002.002.002.003v.001l.002.004.001.001.001.002.001.001c.002 0 .002.002.003.003 0 .002.002.003.002.003l.001.001c0 .002.001.003.003.004l.002.005h.001l.002.003v.001l.003.002v.002s0 .002.002.002l.001.001.001.002.002.003.002.002v.001l.002.004a.017.017 0 0 0 .004.004l.002.004.002.003.002.001v.003h.002l.001.003.001.002.003.003c0 .002.002.002.002.003l.001.001c.001.004.004.006.005.008v.002s.002 0 .002.002l.001.001c.001.001.001.002.003.002v.002s0 .002.002.003l.001.001.001.002.001.002.002.003v.001l.003.004.002.003.002.001v.004l.002.001.002.002v.001l.003.003.002.004.001.002.001.002.001.001.003.004.002.004.001.001.001.003h.002v.004l.002.001.002.003.003.004v.002s.002 0 .002.002h.001l.001.003.001.002.003.004.002.003.001.002.001.003.002.001.002.003h.001l.001.003.001.002.002.003c0 .002 0 .002.002.003l.001.001.001.004h.001l.003.004v.002l.002.002.001.002.003.002v.002l.002.002.001.002.001.003h.001c0 .002.002.002.002.003v.001l.003.004.002.004.002.001v.003h.002l.002.003v.002l.003.003v.001l.002.002.001.002.001.003.001.001.002.002v.002c.002 0 .002.002.003.004l.002.004h.002v.003c0 .001.002.001.002.003l.001.002h.001c0 .002.001.003.003.003v.002s0 .002.002.003v.001l.002.002.001.002a.019.019 0 0 0 .005.008h.001l.001.003c0 .001 0 .002.002.002v.003h.002l.001.003.001.003.001.002h.002v.003l.002.001a.011.011 0 0 0 .002.004v.001c.001.001.003.002.003.004l.002.003.001.002.001.003h.001c0 .002.002.003.002.003v.001c.002.001.002.003.002.003l.001.002.002.002v.001l.003.003c0 .003.002.004.002.005h.001l.001.004.002.001v.004h.002l.001.003.001.001.001.002.002.003v.002l.002.001.002.004.003.004c0 .003.002.003.003.004l.002.004v.002a.051.051 0 0 1 .003.002v.001c0 .001 0 .002.002.002v.003a.051.051 0 0 0 .002.002v.001l.003.004.004.008h.002v.004c.002 0 .002 0 .002.002l.002.002.001.004c.002 0 .002.002.002.002v.002l.002.001.002.004.003.004a.01.01 0 0 1 .002.005l.002.003.001.001.002.004v.001l.002.002.001.001.001.004.001.001a.025.025 0 0 1 .003.002v.003l.002.002v.001l.005.008c0 .003.002.003.002.004h.001l.001.004c.002 0 .002 0 .002.002v.002l.002.001.001.003.001.002s.001.002.003.002v.001a.057.057 0 0 1 .004.008v.001l.003.004c0 .002.002.002.002.003l.001.001.001.004.001.001.002.002v.002l.002.003.001.001.002.004c0 .002.002.003.003.004v.001c0 .002 0 .003.002.004l.001.003.001.002.002.003v.001l.003.002v.002l.002.003v.001l.003.004c0 .002 0 .003.002.004v.001l.002.004.003.003v.002s0 .002.002.003l.002.004h.002v.004l.002.001.001.004.006.008v.001l.002.003v.002c.001 0 .001.002.003.002v.004c.002 0 .002.002.002.002l.001.003h.001l.003.005.007.013c0 .002 0 .002.002.003v.001l.002.004c.001.002.001.003.003.003v.001a.12.12 0 0 1 .01.017l.001.004.001.001.002.004s0 .002.002.003v.001l.002.004.003.004a.032.032 0 0 0 .004.01l.003.003v.005h.002l.001.003.001.002.001.003.002.001v.003l.002.002.005.008s0 .002.002.003v.001l.002.004v.001l.001.003c.002 0 .002 0 .002.002v.002l.002.001.001.004h.001c.003.004.004.009.006.013h.001l.001.004.002.001v.003c.002 0 .002.002.002.002l.001.003.001.001.001.004.007.013.003.004v.001l.002.004.002.003v.001l.003.004.007.014s0 .002.002.003v.002l.001.003h.001l.002.004v.002l.002.002v.001l.002.004c.003.003.004.006.005.009l.002.004.003.004v.001l.002.004.002.004v.001l.003.004c.002.004.004.009.007.012v.005l.002.001.001.004h.001l.001.004v.001l.003.004.007.013c0 .002 0 .003.002.004v.001l.002.004.003.003v.005l.002.001.006.013.001.001.001.004.003.004.002.004.002.004v.001l.008.018.003.004c0 .002 0 .003.002.004v.001l.002.005.002.003c.003.006.005.012.009.017v.001l.002.004v.001l.001.004h.002v.004l.01.018.001.004h.001c0 .002.002.002.002.005l.002.005.01.017v.004h.002v.005l.003.004.002.004v.001a.114.114 0 0 0 .009.018v.004h.002l.001.004.002.005.006.013v.001l.003.004v.001l.002.004.001.004h.001l.001.004.009.018v.001l.002.004.002.004v.001l.003.004v.005h.002c.001.004.003.009.006.013v.005h.002l.001.004.003.004v.005h.002c.001.005.003.01.006.014 0 0 0 .003.002.004l.001.005h.001l.002.003v.002s0 .002.002.003v.001a.109.109 0 0 0 .008.017v.002l.002.003v.001c0 .001.002.001.002.004l.002.004.002.005.004.008c0 .002 0 .004.002.005l.002.004v.001l.002.004v.001l.002.004.002.004v.001a.112.112 0 0 0 .006.013v.001l.001.004h.001c0 .002 0 .003.002.004a.099.099 0 0 0 .002.005l.001.005c.004.007.006.011.008.018h.001l.002.005.002.004.001.005h.001a.27.27 0 0 1 .007.019l.003.003v.001l.002.004.001.005h.001l.01.023v.005h.002l.001.005.01.023c0 .001.002.002.002.005l.002.004.012.028v.006c.002 0 .002.002.003.003v.001a.365.365 0 0 0 .01.023v.005l.003.004.002.004.007.019.002.005c0 .002 0 .003.002.005l.01.028.016.037.01.029.002.004.002.005.009.023.001.005.002.004c.004.008.006.017.009.025l.002.004.001.005c.005.01.007.018.01.028l.003.005.012.033.014.038c.364 1.006.569 2.127.621 3.337v.006c.002.013.002.026.003.04v.046a.323.323 0 0 1 .002.034v.006l.001.005V68.601l.001.006v.012l.002.023V68.789c.002.008.002.015.002.023V68.916l.001.024V69.264l-.001.01V69.57l-.001.013V69.625l-.001.004v.023l-.002.021v.021c0 .01 0 .017-.002.027v.016l-.001.025v.001l-.001.005v.01l-.001.033c0 .001 0 .003-.002.004v.043l-.002.005v.006l-.001.032-.001.006-.021.336a.034.034 0 0 1-.035.033h-.003a.035.035 0 0 1-.032-.039c.274-3.76-.775-6.77-2.953-8.474-1.17-.914-2.608-1.431-4.276-1.538a.035.035 0 0 1-.034-.037.036.036 0 0 1 .036-.032h.002c1.575.1 2.996.57 4.175 1.444l.004.004.004.002c.006.006.013.01.02.015l.004.003.004.003v.001l.004.002a.017.017 0 0 0 .004.004l.009.006a.114.114 0 0 0 .003.003h.001c.001.001.001.002.003.002v.002h.004l.001.002.003.002v.001c.002 0 .003.002.003.003h.001l.004.002.001.001.008.006.004.002v.001l.003.003h.001c.002 0 .003.002.003.002v.001l.004.002.002.002.002.002.001.001.004.002a.015.015 0 0 1 .004.004l.004.003v.001c.002 0 .003.002.003.002h.003c0 .002 0 .002.002.003l.001.001.002.003h.002s0 .002.002.002l.001.001.002.002c.002 0 .002 0 .002.002 0 0 .003 0 .004.002l.004.003v.001c0 .002.002.002.003.002h.001c0 .002.002.002.003.003v.001l.003.001.001.002c.002 0 .002 0 .003.002v.001l.004.001v.001l.004.003h.001l.004.003v.001l.003.001.001.002.003.002v.001c.002 0 .003.001.003.002l.001.002h.003v.002c.002 0 .003 0 .003.002h.001l.004.002v.002s.002 0 .003.002l.001.001c.002 0 .003.001.003.002v.002h.003l.001.002.003.001v.001l.003.002.001.002h.003v.002a594459151.891 594459151.891 0 0 1 .004.003l.004.003h.001l.002.003.002.001.002.002h.001l.002.003.003.001.002.001.001.001c0 .002.001.002.003.003.002 0 .002.002.003.002l.001.001.004.004s.002 0 .003.002l.001.001.003.001v.001a.087.087 0 0 1 .003.003h.003v.003l.003.001.001.002h.003v.003l.002.001.003.002v.002c.002 0 .003 0 .004.002l.001.001.002.001.003.001c0 .002 0 .003.002.003h.001l.001.002.003.001.002.002.001.002a.087.087 0 0 0 .004.003l.002.001.001.002.004.002c0 .002.002.002.003.003l.001.001c0 .002.002.002.003.003l.003.002.001.001.003.002v.002h.003l.001.002.003.002v.001l.008.006.001.001.002.003h.002l.002.002.002.001.001.003h.002a1172293581.628 1172293581.628 0 0 1 .004.003l.003.002.003.004.004.002v.001c.002.001.003.001.003.003h.001l.003.002v.001l.003.002.002.001.002.002v.002l.003.001.002.001c0 .001.002.001.002.003l.004.003.001.001.003.002s0 .002.002.002h.001l.001.002.003.002v.001c.002 0 .003.002.003.002h.001l.003.003v.001l.003.003h.003c0 .002 0 .002.002.003l.001.001.002.001.002.001c0 .002.002.002.002.003h.002l.001.003.002.001.002.002h.001l.002.003.003.001v.002c.002 0 .002 0 .003.002h.003v.003c.002 0 .003.001.003.002l.001.002.003.002a.088.088 0 0 1 .003.002l.001.001.003.003c.002 0 .003.002.003.003l.001.001.003.001v.002c.002 0 .003 0 .003.002l.001.001.004.004c.002 0 .002 0 .003.002l.001.001c.002 0 .002.001.003.002v.002h.003l.001.002c.002 0 .002 0 .003.002v.001l.003.003h.001c.002 0 .002.002.003.002v.001l.004.004c.002 0 .003 0 .003.002l.002.001.001.002.003.001v.002h.002l.002.003.003.001v.002c.002 0 .002.002.002.002l.002.002.001.001.007.006.002.001.002.002.001.002h.002c0 .002 0 .002.002.002 0 .001 0 .002.002.002l.001.001.002.003h.002s0 .002.002.002l.001.001.002.004h.002l.003.003h.001l.001.002.003.002v.002l.003.001.001.002c.002 0 .002.002.003.002v.002h.002l.002.002.002.001.002.002.001.002.004.003.003.002.001.002a.051.051 0 0 0 .003.002v.001c.002 0 .002.001.003.002l.001.002h.003v.002l.002.002.002.001.001.003h.002c0 .002.002.002.002.003l.002.001.003.003.003.003.001.001.003.001v.002s.002 0 .002.002l.002.001.001.001.003.002.002.002h.001c0 .002.001.002.003.003v.001a.088.088 0 0 1 .005.005l.002.001v.001l.003.002.001.002h.003v.003l.002.001.002.002.001.002h.002a.025.025 0 0 0 .002.003l.001.001.004.004v.001l.003.001.001.001c0 .002.001.002.003.003l.002.003.001.001c.001 0 .002.001.002.003h.002l.002.002.001.001a.051.051 0 0 0 .002.002l.002.002.003.003v.001l.002.001.002.002.002.002h.001a.025.025 0 0 0 .002.003l.002.001c0 .002 0 .002.002.002l.001.002.002.001.002.001a8062188425.577 8062188425.577 0 0 0 .003.004l.007.007h.001l.001.003.002.001.002.001.001.002a.025.025 0 0 0 .002.002l.002.001.002.002.001.002h.001l.003.003v.001a.088.088 0 0 1 .003.002l.002.003h.002c0 .002 0 .002.002.003l.001.001.002.002.002.002v.001l.002.001.002.002.001.002c.002 0 .002 0 .003.002v.001a.051.051 0 0 1 .003.002h.001l.003.004v.001l.003.002.001.001a.088.088 0 0 0 .004.004l.002.002.001.001c.002 0 .002.002.003.002v.002l.002.001.002.001.002.002c0 .002 0 .002.002.002l.002.003.001.001c.002 0 .002.001.003.003.002 0 .002.002.003.002l.001.002.002.001v.002c.002 0 .002 0 .003.002l.001.001.003.001v.002l.003.003c.001 0 .002 0 .002.002l.003.001c0 .001 0 .003.002.004h.001s.001.002.003.002v.002l.002.002h.002l.001.003.002.001.002.001.001.003h.001l.003.003v.001l.002.001.003.004.002.001.002.002.001.002h.001l.003.003v.001l.003.002.001.002.001.002.003.001v.001a.025.025 0 0 1 .003.002l.001.002c.002 0 .002.002.003.003l.003.002.001.003h.003v.003l.002.001a8062188425.577 8062188425.577 0 0 0 .008.01h.001l.002.002.002.002a.051.051 0 0 1 .002.003l.003.002v.001l.002.002.002.002h.001c0 .002.002.002.002.003l.002.001.001.002.001.002h.003v.003l.002.001.002.002.001.002c.002 0 .003.002.004.003l.001.001.001.003h.001c.002 0 .002.002.003.002v.002l.003.001.001.003h.002v.003l.003.001.001.002.001.002h.002a.058.058 0 0 0 .003.004l.001.002.003.002v.001l.002.002.001.002.002.002.002.001.002.001.001.001.001.003h.001a.043.043 0 0 1 .003.003v.001l.004.004h.002s0 .002.002.003v.001l.002.003h.001c.002 0 .003.002.003.003v.001c.002 0 .002.001.003.003l.003.002v.002c.002 0 .002.001.003.003h.001l.003.003v.001a764285917.248 764285917.248 0 0 1 .004.004l.003.002v.001l.002.002.001.002a.051.051 0 0 0 .002.002l.002.001a.025.025 0 0 0 .002.002l.001.002.001.002.001.001.003.002v.001l.003.004.001.001a.051.051 0 0 1 .003.002v.002c.002 0 .002 0 .003.002l.001.001.002.002v.002h.003l.001.003.001.001.003.002v.002h.002a.043.043 0 0 0 .002.003l.003.002v.003h.003l.001.003.002.001v.003h.003l.001.003.001.001c.002.001.002.001.002.003h.002l.001.003.001.001a254761972.418 254761972.418 0 0 0 .005.005h.001a.025.025 0 0 0 .002.003s.002.001.002.003l.002.002a.025.025 0 0 1 .002.002l.001.001.002.003h.002l.001.003.001.001.001.001.002.003.003.003.001.001c.001 0 .001.002.003.002v.002l.002.001.002.002.001.002s.002 0 .002.002l.003.003.001.001.001.003h.002c0 .002 0 .002.002.003l.001.001.002.004.002.001.002.002.001.001.001.003h.001l.002.003.002.001.001.003h.001l.003.003v.001l.002.003h.001l.002.003.003.001v.004h.002l.002.003.002.001v.003h.002l.002.003.001.001s.002.001.002.003c.002 0 .002.002.003.003l.001.001.003.002v.002c.002 0 .002.002.003.003l.001.001.001.003h.002s0 .002.002.002l.001.002.001.001.001.003h.003v.003l.002.001.001.003c.001 0 .003 0 .003.002v.001c.002.001.003.002.003.004h.001c.001 0 .001.002.003.002v.002l.003.002v.002c.001 0 .002 0 .002.002l.002.001v.002a1139314427.53 1139314427.53 0 0 0 .004.004l.001.001.003.002v.002c.002 0 .002.002.003.003h.001l.003.004s0 .002.002.003l.001.001.001.002c.002 0 .002 0 .002.002h.002l.001.003.001.001.001.002c.002 0 .002.002.003.003v.001l.003.004a.114.114 0 0 1 .005.004l.001.002.001.002a764285917.248 764285917.248 0 0 0 .006.007l.001.002.001.002.003.001v.003c.002 0 .002 0 .003.002l.004.003v.002s0 .002.002.002l.001.002.003.001v.002s0 .002.002.002l.001.002.001.001.003.003.002.003a733058603.687 733058603.687 0 0 1 .003.004c.002 0 .002.002.003.003v.001l.003.002.001.002s.002 0 .002.002v.001c.002 0 .002.001.003.002l.001.002.001.002.002.001v.002l.002.001.002.003h.001l.003.004v.002a.051.051 0 0 1 .003.002l.001.002.002.002v.002c.002 0 .002 0 .003.002l.001.001.001.002.002.002v.002l.002.001a.051.051 0 0 1 .002.002l.001.002c.002 0 .002.002.003.003a.058.058 0 0 1 .003.003v.002l.003.002v.001l.003.004.002.003.002.001.002.002.001.002.001.002.001.001.003.002v.002a.058.058 0 0 1 .003.003l.001.001.002.002v.002c.002 0 .002.002.003.002l.001.002.001.002c.002 0 .002 0 .002.002l.002.002.001.001.001.002.001.002c.002 0 .002 0 .003.002v.001a.087.087 0 0 0 .006.007v.001l.002.003h.001l.002.003.002.001v.002c.002 0 .002.002.002.002l.002.002.001.002s.002.001.002.003l.007.008.002.003.001.001.001.003h.001l.003.003v.001c0 .001.002.001.002.003h.001l.003.004v.001l.002.003h.001l.002.004c.002 0 .002 0 .002.002l.002.002h.001l.001.003.001.001c0 .002.002.002.002.003l.003.003.001.001.001.003h.002c0 .002 0 .003.002.004l.003.005v.001c.002 0 .002.001.003.002v.002s.002 0 .002.002l.001.001.003.002v.002s0 .002.002.002h.001l.002.003v.002c.002 0 .002.002.003.003v.001l.003.004.003.003v.001l.002.002.001.002.002.002.002.002v.003h.003l.001.002.001.002.002.002v.002c.002 0 .002 0 .003.002l.001.002.003.004s0 .002.002.003l.001.001.001.003h.001l.002.003v.001c.002.001.002.003.002.003l.001.002.002.001.002.002v.003h.002l.003.004v.002s.002 0 .003.002v.002l.002.001.001.003.001.002.002.001.002.002.001.002.001.002h.001a.051.051 0 0 1 .003.003v.001c0 .003.002.003.003.004v.001l.003.004.002.003.001.001.002.002s0 .002.002.002v.002l.002.001.002.002.001.002.002.003v.001l.005.007.002.001.002.003h.001l.001.003.001.001.002.002v.003c.002 0 .002.001.002.002l.001.001.002.003h.002v.004l.002.001.002.004.001.001.002.002v.002c.002 0 .002 0 .003.002l.001.001.001.002c0 .001.002.001.002.003l.002.002.001.001.001.002.001.002.003.003.002.005h.001l.003.003v.001a.025.025 0 0 0 .002.002l.001.002.001.003.001.001c.002 0 .002.002.003.003 0 0 0 .002.002.003v.001l.002.004h.002c0 .002 0 .003.002.004l.002.004.001.001.002.002v.002c.002 0 .002.002.003.002l.001.002.001.002c.002 0 .002.002.002.002l.002.002v.001l.002.003.001.002.004.004ZM8.18 73.968a5.593 5.593 0 0 0-1.853 1.608l-.03-.02c-2.519 3.36-2.083 9.779 1.06 15.612 1.88 3.486 4.46 6.334 7.266 8.019 1.714 1.029 3.387 1.55 4.91 1.549.98 0 1.898-.216 2.723-.652.998-.53 1.808-1.358 2.404-2.462l-.03-.018c.925-1.716 1.274-3.997 1.01-6.597-.273-2.66-1.175-5.473-2.61-8.136-1.877-3.482-4.452-6.325-7.253-8.006-2.807-1.685-5.505-2.004-7.597-.896Zm7.56.957c2.79 1.675 5.357 4.51 7.227 7.978 1.43 2.655 2.33 5.46 2.6 8.111.266 2.587-.082 4.854-.998 6.554a5.522 5.522 0 0 1-1.831 1.589c-2.069 1.095-4.742.778-7.527-.894-2.79-1.676-5.357-4.51-7.227-7.98-1.432-2.654-2.331-5.458-2.602-8.11-.263-2.587.083-4.855 1-6.554a5.493 5.493 0 0 1 1.832-1.588c2.068-1.095 4.741-.778 7.526.894Zm14.327 25.376c1.593-2.709 2.297-5.702 2.09-8.897-.165-2.557-.91-5.248-2.215-7.998-2.222-4.686-5.339-7.96-5.37-7.994a.033.033 0 0 1 0-.049.034.034 0 0 1 .05.001c.032.033 3.156 3.314 5.383 8.01 1.309 2.759 2.057 5.458 2.222 8.024.208 3.209-.5 6.216-2.1 8.938a.037.037 0 0 1-.03.017.055.055 0 0 1-.018-.004.034.034 0 0 1-.012-.048Zm-13.781-35.88a50.04 50.04 0 0 1-1.488-3.938.035.035 0 0 1 .024-.044c.018-.004.038.005.044.024.006.017.585 1.823 1.486 3.932.831 1.945 2.114 4.551 3.506 5.927a.035.035 0 0 1 0 .05.032.032 0 0 1-.024.01.038.038 0 0 1-.025-.01c-1.4-1.384-2.689-4-3.523-5.95Z"
  }
];
const sceneB = [
  {
    fill: "#E2556C",
    d: "M81.7 1.114C57.155-5.491 49.166 19.438 49.166 19.438S41.177-5.491 16.635 1.114c-23.389 6.294-28.97 55.134 29.322 80.288a8.105 8.105 0 0 0 6.42 0C110.67 56.248 105.089 7.408 81.7 1.114Z"
  },
  {
    fill: "#A66EFF",
    d: "M25.739 52.855a2.702 2.702 0 1 1-3.752 3.888C11.42 46.547 8.828 36.26 8.513 29.425c-.346-7.51 1.9-12.607 1.996-12.82a2.7 2.7 0 0 1 3.571-1.357 2.7 2.7 0 0 1 1.362 3.561c-.03.072-1.866 4.361-1.517 10.64.466 8.415 4.442 16.29 11.815 23.405Zm4.07 4.132a2.824 2.824 0 1 0-.001 5.648 2.824 2.824 0 0 0 0-5.648Z"
  },
  { fill: null, d: "" },
  { fill: null, d: "" },
  { fill: null, d: "" },
  { fill: null, d: "" }
];
const sceneC = [
  {
    fill: "#E2556C",
    d: "M58.506 56.286c61.125 34.21 15.588 70.097-3.443 2.72 19.031 67.422-38.559 60.625-4.35-.5-34.209 61.125-70.096 15.588-2.718-3.443-67.423 19.031-60.627-38.559.498-4.35-61.125-34.209-15.587-70.096 3.443-2.718-19.03-67.423 38.56-60.627 4.35.498 34.21-61.125 70.097-15.587 2.72 3.443 67.422-19.03 60.625 38.56-.5 4.35Z"
  },
  {
    fill: "#FF8E72",
    d: "M62.04 53.522c0 .28-.013.558-.04.836a8.7 8.7 0 0 1-.326 1.638 8.614 8.614 0 0 1-1.068 2.26 8.516 8.516 0 0 1-14.596-.718 8.346 8.346 0 0 1-.64-1.542 8.533 8.533 0 0 1 1.567-7.877 8.432 8.432 0 0 1 1.182-1.182 8.509 8.509 0 0 1 3.742-1.769 8.384 8.384 0 0 1 3.324 0 8.533 8.533 0 0 1 2.353.842 8.527 8.527 0 0 1 2.008 1.489 8.498 8.498 0 0 1 2.495 6.023Z"
  },
  { fill: null, d: "" },
  { fill: null, d: "" },
  { fill: null, d: "" },
  { fill: null, d: "" }
];
const sceneD = [
  {
    fill: "#E5742C",
    d: "M58.92 60.138c48.477 42.554-42.192 61.451-21.26 4.434-20.932 57.017-66.938-23.368-10.792-18.86-56.146-4.508 6.105-73.118 14.607-16.1-8.502-57.018 75.989-19.042 19.807 8.903 56.145-27.909 46.115 64.177-2.362 21.623Z"
  },
  {
    fill: "#08000E",
    d: "M58.337 48.727a12.36 12.36 0 0 1-5.49 10.274c-.337.224-.684.431-1.04.623-.358.191-.723.364-1.096.518a12.343 12.343 0 0 1-13.466-2.678 12.627 12.627 0 0 1-.814-.898 12.206 12.206 0 0 1-1.345-2.015 12.364 12.364 0 0 1-.928-2.238 12.382 12.382 0 0 1 .408-8.315c.156-.373.328-.74.52-1.095a12.19 12.19 0 0 1 1.345-2.015 12.606 12.606 0 0 1 1.713-1.712 12.518 12.518 0 0 1 2.014-1.346 12.308 12.308 0 0 1 7.035-1.4 12.709 12.709 0 0 1 2.375.473 12.411 12.411 0 0 1 5.151 3.087c.286.287.557.585.815.898a12.519 12.519 0 0 1 1.345 2.015 12.195 12.195 0 0 1 .926 2.238 12.343 12.343 0 0 1 .532 3.586Z"
  },
  { fill: null, d: "" },
  { fill: null, d: "" },
  { fill: null, d: "" },
  { fill: null, d: "" }
];
const sceneE = [
  {
    fill: "#A66EFF",
    d: "m75.549 61.169-2.906-12.647c2.037-1.743 4.473-2.76 7.093-2.76 7.13 0 12.91 7.512 12.91 16.778 0 9.267-5.78 16.778-12.91 16.778S66.827 71.807 66.827 62.54c0-4.417 1.314-8.435 3.461-11.43l2.586 11.254c.097.422.423.773.868.935l3.569 1.304c.178.065.363.096.547.096.567 0 1.107-.303 1.336-.805.303-.659-.052-1.413-.79-1.683l-2.855-1.042Zm-53.676.842 10.138-2.152c-.294-2.388-.976-4.606-1.96-6.543l-8.178 8.695Zm-2.606-16.248c-7.13 0-12.91 7.51-12.91 16.777 0 9.267 5.78 16.778 12.91 16.778s12.91-7.511 12.91-16.778v-.062l-13.888 2.95a1.723 1.723 0 0 1-.335.034c-.492 0-.962-.227-1.23-.614a1.183 1.183 0 0 1 .125-1.508l11.707-12.45c-2.348-3.16-5.641-5.127-9.29-5.127Z"
  },
  {
    fill: "#A66EFF",
    d: "m70.288 51.11 2.586 11.254c.097.422.423.773.868.935l3.569 1.304c.178.065.363.096.547.096.567 0 1.107-.303 1.336-.805.303-.659-.052-1.413-.79-1.683l-2.855-1.042-2.906-12.647-.758-3.298c-.003-.012-.008-.027-.009-.04-.008-.027-.505-1.981.171-3.281.255-.493.678-.892 1.362-1.056.566-.138.998-.13 1.241.01.952-.295 1.927-.51 2.917-.639-.33-.917-1.437-2.007-3.343-2.047l-2.337-12.106-2.468.26c-.144.015-.287 0-.421-.035l.59 3.047L38.66 41.129l-.838-3.914c-1.74-.406-2.77.792-2.77.792l1.041 4.872-3.323 3.532-4.214 4.48L16.85 63.34a1.183 1.183 0 0 0-.125 1.508c.268.388.738.614 1.23.614.11 0 .223-.011.335-.035l18.606-3.95a4.114 4.114 0 0 1-.195-1.26c0-.492.085-.966.244-1.404L21.873 62.01l8.177-8.695 6.741-7.168 2.216 10.357a4.107 4.107 0 0 1 2.882-.279l-2.674-12.5 30.876-11.773.277 1.43-27.98 23.013c.87.358 1.59 1.009 2.041 1.829l26.523-21.812.462 2.392c-2.126 1.087-2.671 3.305-2.61 5.16.02.67.12 1.293.256 1.798l1.228 5.347Zm-34.472 8.242c.09-.02.182.03.204.11.023.08-.031.162-.121.182L21.16 62.969a.188.188 0 0 1-.04.004c-.077 0-.145-.046-.164-.114-.023-.08.031-.162.121-.182l14.738-3.325Zm.171-15.12L19.842 61.704a.175.175 0 0 1-.129.056.188.188 0 0 1-.107-.035.14.14 0 0 1-.022-.213l16.144-17.472a.18.18 0 0 1 .236-.021.138.138 0 0 1 .023.211Zm5.166 10.653a.26.26 0 0 1-.031.003c-.08 0-.151-.05-.166-.123l-3.619-16.729c-.017-.082.044-.16.134-.176.092-.016.18.037.197.12l3.619 16.728c.017.082-.042.16-.134.177Zm28.366-24.426-29.67 11.12a.168.168 0 0 1-.063.013.168.168 0 0 1-.155-.093c-.036-.077.004-.164.09-.196L69.388 30.18c.086-.032.183.004.22.08.037.077-.004.166-.09.198Zm.964 4.04L44.1 56.196a.181.181 0 0 1-.238-.01.139.139 0 0 1 .01-.212l26.384-21.696a.182.182 0 0 1 .238.008.14.14 0 0 1-.011.213Zm.575-7.653c-.016-.082.045-.16.137-.175.09-.014.179.04.194.122l2.146 10.78c.016.083-.045.16-.137.176l-.03.001c-.079 0-.15-.05-.164-.124l-2.146-10.78Zm.212 12.725a.181.181 0 0 1 .236-.021.14.14 0 0 1 .025.211c-.02.021-1.914 2.14-1.672 4.563.238 2.39 3.647 16.487 3.923 17.63l4.348 1.833c.084.035.12.125.08.2a.173.173 0 0 1-.151.086.182.182 0 0 1-.072-.013l-4.422-1.866a.153.153 0 0 1-.094-.102c-.15-.622-3.699-15.245-3.948-17.74-.255-2.548 1.664-4.69 1.747-4.781Z"
  },
  {
    fill: "#A66EFF",
    d: "m35.051 38.007-.337-1.57-.338-1.58c-.15-.701.363-1.378 1.146-1.513.784-.133 1.541.325 1.692 1.027l.118.556.49 2.288c-1.741-.406-2.77.792-2.77.792Zm7.337 18.389a4.07 4.07 0 0 0-1.57-.312c-.65 0-1.265.152-1.81.421a4.143 4.143 0 0 0-2.063 2.306 4.164 4.164 0 0 0-.05 2.666c.283.891.86 1.65 1.616 2.164a4.088 4.088 0 0 0 2.308.71c.934 0 1.797-.314 2.488-.84l-3.208-2.219c-.433-.299-.512-.855-.178-1.24.336-.389.957-.46 1.39-.16l3.18 2.2a4.144 4.144 0 0 0-.062-3.866 4.129 4.129 0 0 0-2.041-1.83Zm29.811-33.291c.427 0 .798-.28.857-.668.067-.424-.264-.816-.738-.874a5.614 5.614 0 0 1-1.042-.232c-1.496-.485-2.697-1.573-3.19-2.958l-3.475-9.751H79.65l-2.26 9.83c-.218.954-.638 1.757-1.164 2.316a.879.879 0 0 1 .115.32l.213 1.463.003.024c1.2-.724 2.134-2.08 2.532-3.81l2.92-12.708c.224-.971.666-1.822 1.244-2.396l.843-.837c.351-.35.737-.58 1.133-.688a1.21 1.21 0 0 1-.352-.843c0-.27.091-.52.248-.727-.844.137-1.651.558-2.318 1.221l-.843.837c-.791.787-1.364 1.867-1.653 3.122l-.305 1.326H64.06l-.5-1.405c-.45-1.262-1.361-2.383-2.565-3.154l-1.306-.837a7.442 7.442 0 0 0-3.79-1.15c.176.213.282.479.282.767 0 .294-.112.564-.297.782a5.56 5.56 0 0 1 2.794.86l1.307.837c.903.58 1.586 1.42 1.923 2.364l4.528 12.708c.652 1.828 2.228 3.27 4.197 3.925.463.155.947.267 1.448.329.039.005.079.007.12.007ZM39.696 29.14a.182.182 0 0 0-.236-.014c-.061.047-6.05 4.713-8.466 4.713-.091 0-.168.068-.168.15 0 .083.077.151.168.151 2.541 0 8.438-4.592 8.686-4.788a.14.14 0 0 0 .016-.212Zm36.108-6.338c-.033-.078-.13-.117-.216-.088-.846.28-2.008-.002-2.019-.004-.09-.023-.182.023-.208.104-.025.08.028.163.118.185.034.008.574.14 1.21.14.333 0 .69-.036 1.015-.144.087-.03.133-.116.1-.194Zm-6.42 3.117h.021c.114-.014 2.804-.327 3.718-.632.087-.03.132-.116.1-.194-.033-.077-.13-.118-.216-.088-.88.293-3.617.612-3.645.615-.092.011-.157.086-.147.168.013.077.084.131.168.131Z"
  },
  {
    fill: "#E5742C",
    d: "M35.522 33.344c.784-.133 1.541.325 1.692 1.027l.118.556c1.462-1.191 2.799-2.709 3.971-3.43 1.697-1.045 2.902-2.426 1.37-3.403-1.532-.977-4.083.808-5.743 1.583-1.657.775-8.592 2.594-8.592 4.548 0 1.954 3.127 2.695 5.842 2.325.178-.024.357-.063.534-.113l-.338-1.58c-.15-.701.363-1.378 1.146-1.513Zm-4.528.796c-.091 0-.168-.068-.168-.151 0-.082.077-.15.168-.15 2.415 0 8.405-4.666 8.466-4.713a.18.18 0 0 1 .235.015.138.138 0 0 1-.015.211c-.248.196-6.145 4.788-8.686 4.788Zm53.88-32.849c0-.268.093-.518.25-.725.26-.34.698-.566 1.195-.566h6.785c.797 0 1.444.578 1.444 1.291 0 .715-.647 1.293-1.444 1.293h-6.785c-.437 0-.826-.174-1.09-.448a1.213 1.213 0 0 1-.356-.845ZM69.418 26.325l2.467-.261.81-.085c.218-.024.423-.107.586-.238l2.928-2.361a.895.895 0 0 0 .344-.805v-.024l-.216-1.463a.852.852 0 0 0-.115-.32c-.205-.347-.638-.559-1.098-.496l-2.998.407c-.413.057-.733.318-.851.652.334.108.682.188 1.042.232.474.059.805.45.738.874-.06.388-.432.668-.857.668a.894.894 0 0 1-.122-.008 7.506 7.506 0 0 1-1.445-.328c-.034.014-.066.03-.102.04l-1.978.605c-.552.17-.849.705-.665 1.2l.398 1.067c.113.303.386.524.713.61.133.034.276.05.421.034Zm6.285-3.33a3.254 3.254 0 0 1-1.015.144c-.636 0-1.176-.132-1.21-.14-.09-.022-.143-.106-.118-.185.026-.08.118-.127.208-.104.011.002 1.174.285 2.018.002.085-.029.184.012.217.09.032.077-.013.163-.1.193Zm-6.342 2.625c.028-.003 2.766-.322 3.645-.616.087-.029.183.012.216.09.032.077-.013.163-.1.193-.916.305-3.604.618-3.718.632h-.022c-.084 0-.157-.054-.168-.13-.012-.083.055-.158.147-.169ZM99 62.54c0 5.62-1.738 10.978-4.898 15.085C90.494 82.312 85.257 85 79.735 85c-5.523 0-10.76-2.688-14.366-7.376-3.161-4.107-4.9-9.464-4.9-15.085 0-5.618 1.739-10.975 4.9-15.082a19.863 19.863 0 0 1 3.434-3.491c.022.67.122 1.292.257 1.797l1.228 5.347c-2.147 2.995-3.461 7.013-3.461 11.43 0 9.267 5.78 16.778 12.91 16.778 7.129 0 12.909-7.511 12.909-16.778 0-9.266-5.78-16.777-12.91-16.777-2.62 0-5.058 1.016-7.093 2.759l-.758-3.298c-.003-.012-.008-.027-.009-.04-.008-.027-.505-1.981.171-3.281a17.51 17.51 0 0 1 5.52-1.684 17.027 17.027 0 0 1 2.169-.138c5.521 0 10.758 2.688 14.366 7.376C97.262 51.564 99 56.921 99 62.54Zm-60.49 1.1c-.211 5.217-1.925 10.147-4.878 13.985C30.026 82.312 24.79 85 19.266 85c-5.522 0-10.759-2.688-14.365-7.376C1.74 73.517 0 68.16 0 62.54c0-5.619 1.74-10.976 4.901-15.083 3.606-4.688 8.843-7.376 14.365-7.376 5.097 0 9.951 2.29 13.504 6.33l-4.214 4.48c-2.348-3.161-5.641-5.128-9.29-5.128-7.129 0-12.908 7.51-12.908 16.777 0 9.266 5.78 16.778 12.909 16.778 7.13 0 12.91-7.512 12.91-16.778v-.062l4.718-1c.283.89.86 1.649 1.615 2.162Zm-.514-6.432c-.466.44-.83.989-1.052 1.604L32.01 59.86c-.294-2.388-.976-4.606-1.96-6.543l4.412-4.694c1.695 2.532 2.896 5.458 3.533 8.585ZM56.18 1.291c0 .295-.112.566-.298.784a1.501 1.501 0 0 1-1.146.509H44.219c-.798 0-1.445-.578-1.445-1.293 0-.713.647-1.291 1.445-1.291h10.516a1.5 1.5 0 0 1 1.16.525c.179.214.284.48.284.766Zm-11.688 60.8 5.279 3.652h.263c.757 0 1.371.547 1.371 1.224 0 .677-.614 1.226-1.371 1.226h-7.967c-.757 0-1.371-.549-1.371-1.226 0-.677.614-1.224 1.371-1.224h4.468l-3.227-2.232-3.208-2.219c-.433-.299-.512-.855-.178-1.24.335-.389.958-.46 1.39-.16l3.18 2.2Zm28.713-24.465-2.146-10.78c-.016-.082.045-.16.137-.175.09-.014.179.04.194.122l2.146 10.78c.016.083-.045.16-.137.176l-.03.001c-.079 0-.15-.05-.164-.124Zm-1.934 1.945a.181.181 0 0 1 .236-.021.14.14 0 0 1 .025.211c-.02.021-1.914 2.14-1.672 4.563.238 2.39 3.647 16.487 3.923 17.63l4.348 1.833c.084.035.12.125.08.2a.173.173 0 0 1-.151.086.182.182 0 0 1-.072-.013l-4.422-1.866a.153.153 0 0 1-.094-.102c-.15-.622-3.699-15.245-3.948-17.74-.255-2.548 1.664-4.69 1.747-4.781Zm-1.661-9.31c.036.077-.005.166-.09.198l-29.67 11.12a.168.168 0 0 1-.063.013.168.168 0 0 1-.155-.093c-.036-.077.004-.164.09-.196L69.388 30.18c.086-.032.183.004.22.08Zm.885 4.025a.14.14 0 0 1-.011.213L44.1 56.196a.181.181 0 0 1-.238-.01.139.139 0 0 1 .01-.212l26.384-21.696a.182.182 0 0 1 .238.008ZM41.287 54.708c.017.082-.042.16-.134.177a.26.26 0 0 1-.031.003c-.08 0-.151-.05-.166-.123l-3.619-16.729c-.017-.082.044-.16.134-.176.092-.016.18.037.197.12l3.619 16.728ZM35.964 44.02a.138.138 0 0 1 .023.211L19.842 61.705a.175.175 0 0 1-.129.056.188.188 0 0 1-.107-.035.14.14 0 0 1-.022-.213l16.144-17.472a.18.18 0 0 1 .236-.021ZM21.078 62.677l14.738-3.325c.09-.02.182.03.204.11.023.08-.031.162-.121.182L21.16 62.969a.188.188 0 0 1-.04.004c-.077 0-.145-.046-.164-.114-.023-.08.031-.162.121-.182Z"
  },
  { fill: null, d: "" },
  { fill: null, d: "" }
];
async function buildUXTL(container) {
  await nextTick();
  const scope = container;
  if (!scope) return;
  gsap$1.registerPlugin(MorphSVGPlugin);
  gsap$1.registerPlugin(DrawSVGPlugin);
  const layers = sceneA.map(
    (_, i) => scope.querySelector(`#uxicons-layer-${i + 1}`)
  );
  const tl = gsap$1.timeline({
    defaults: { duration: 1, ease: "power1.out" }
  });
  const scenes = [sceneC, sceneE, sceneB, sceneD, sceneA];
  const morphDuration = 1;
  const betweenScenes = 1;
  const delay = 0.6;
  const wrapper = scope.querySelector("#ux-icons");
  const outline = scope.querySelector("#uxIcons-main-card-outline");
  const heading = scope.querySelector("#uxIcons-main-card-heading");
  const secondary = scope.querySelector("#uxIcons-main-secondary-heading");
  const footer = scope.querySelector("#uxIcons-main-footer-text");
  const buttonPaths = scope.querySelectorAll("#uxIcons-main-button path");
  const secondaries = gsap$1.utils.toArray(".uxIcons-secondary-card");
  const roleSection = container.querySelector("#roles");
  const roles = roleSection.querySelectorAll("li");
  const roleLabel = roleSection.querySelector(".label");
  const roleSelect = roleSection.querySelector(".select-field");
  let roleTl;
  tl.call(() => {
    const resetItems = (void 0).querySelectorAll("uxIcons-main-card", "#uxIcons-main-card-svg", "#uxIcons");
    if (resetItems.length) resetItems.forEach((resetItem) => resetItem.removeAttribute("style"));
  }, null);
  sceneA.forEach((cfg, i) => {
    gsap$1.set(layers[i], {
      attr: { d: cfg.d, fill: cfg.fill, stroke: cfg.stroke || "none" },
      autoAlpha: 1
    });
  });
  tl.set("#uxIcons", { scale: 2.5, autoAlpha: 0 });
  tl.set(wrapper, { autoAlpha: 0 });
  tl.set(outline, { drawSVG: "0%", fill: "none" });
  gsap$1.set(heading, { scaleX: 0, transformOrigin: "0% 50%" });
  gsap$1.set(secondary, { drawSVG: "0%" });
  gsap$1.set(footer, { drawSVG: "0%" });
  gsap$1.set(buttonPaths, { drawSVG: "0%" });
  gsap$1.set(secondaries, { x: 0, y: 0, autoAlpha: 0 });
  gsap$1.set(roleSection, { y: 0, filter: "none", autoAlpha: 1 });
  gsap$1.set(roleLabel, { y: -50, autoAlpha: 0, scale: 0.4 });
  gsap$1.set(roleSelect, { x: -50, autoAlpha: 0, scale: 0.4 });
  gsap$1.set(secondaries, {
    x: 0,
    autoAlpha: 0
  });
  gsap$1.set("#uxIcons-main-card", { y: "-15dvh" });
  gsap$1.set("#uxIcons", {
    scale: 2.5,
    autoAlpha: 0
  });
  roles.forEach((li) => gsap$1.set(li, { y: 500, autoAlpha: 0, filter: "none", opacity: 1 }));
  if (roles.length) {
    roleTl = gsap$1.timeline({ paused: true });
    const D_IN = 0.5;
    const D_CHARS = 0.7;
    const PAUSE = 0.8;
    const D_OUT = 0.8;
    const OVERLAP_IN = 0.4;
    const OVERLAP_OUT = 0.4;
    let currentTime = 0;
    roleTl.fromTo(
      roleLabel,
      { y: -50, autoAlpha: 0, scale: 0.4 },
      {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(0.9)"
      }
    );
    roleTl.fromTo(
      roleSelect,
      { x: -50, autoAlpha: 0, scale: 0.4 },
      {
        x: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 1,
        ease: "elastic.out(0.9)"
      }
    );
    roles.forEach((role, i) => {
      const split = Splitting()[0];
      const chars = (split == null ? void 0 : split.chars) || [];
      roleTl.to(role, {
        y: 0,
        autoAlpha: 1,
        duration: D_IN,
        ease: "elastic.out(1, 0.7)"
      }, currentTime);
      roleTl.from(chars, {
        x: () => gsap$1.utils.random(-50, 50),
        y: () => gsap$1.utils.random(-40, 0),
        autoAlpha: 0,
        duration: D_CHARS,
        ease: "power3.out",
        stagger: { amount: 0.1, from: "random" }
      }, currentTime + (D_IN - OVERLAP_IN));
      const outTime = currentTime + D_IN + D_CHARS + PAUSE;
      roleTl.to(role, {
        y: -100,
        filter: "blur(10px)",
        autoAlpha: 0,
        duration: D_OUT,
        ease: "power3.out"
      }, outTime);
      currentTime += D_IN + D_CHARS + PAUSE + (D_OUT - OVERLAP_OUT);
    });
    roleTl.duration(currentTime + OVERLAP_OUT);
    roleTl.set(roles, { y: 500, autoAlpha: 0 });
  }
  tl.timeScale(0.8);
  tl.to(["#uxIcons", wrapper], {
    autoAlpha: 1,
    duration: 0.3
  });
  scenes.forEach((scene, sceneIndex) => {
    const startTime = sceneIndex * betweenScenes + delay;
    scene.forEach((cfg, i) => {
      if (!cfg.d) {
        tl.set(layers[i], { autoAlpha: 0 }, startTime);
      } else {
        tl.set(layers[i], { autoAlpha: 1 }, startTime);
        tl.to(
          layers[i],
          {
            morphSVG: cfg.d,
            attr: { fill: cfg.fill, stroke: cfg.stroke },
            duration: morphDuration
          },
          startTime
        );
      }
    });
  });
  tl.fromTo(
    "#uxIcons",
    {
      rotate: 0,
      scale: 2.5
    },
    {
      rotate: 360,
      scale: 1,
      transformOrigin: "50% 50%",
      duration: 1.4
    },
    4
  );
  tl.to("#uxIcons-main-card", {
    y: 0,
    duration: 0.6,
    ease: "elastic.out(0.9)"
  }, "-=2.2");
  tl.call(() => roleTl.play(0), null, "-=2");
  tl.addLabel("cardsEntrance", "-=1");
  tl.to("#uxIcons-main-card-svg", { autoAlpha: "100%", duration: 0.2 }, "cardsEntrance");
  tl.to(outline, { drawSVG: "100%", duration: 1 }, "cardsEntrance").to(outline, { fill: "#F5F5F5", duration: 0.4 }, "-=0.3").to(heading, { scaleX: 1, duration: 1, ease: "power2.out" }, "-=0.6").to(secondary, { drawSVG: "100%", duration: 0.8 }, "-=0.2").to(footer, { drawSVG: "100%", duration: 0.8 }, "-=0.2").to(buttonPaths, { drawSVG: "100%", duration: 0.8, stagger: 0.1 }, "-=0.2");
  tl.addLabel("secondaries", "-=2.5");
  secondaries.forEach((sec, i) => {
    let x = 100;
    if (i === 0) x = -414;
    if (i === 1) x = -207;
    if (i === 2) x = 207;
    if (i === 3) x = 414;
    tl.to(
      sec,
      {
        x,
        autoAlpha: 1,
        duration: 0.6,
        ease: "power2.out"
      },
      "secondaries"
    );
  });
  tl.to(
    ".uxIcons-secondary-card-icon",
    {
      rotation: 360,
      transformOrigin: "50% 50%",
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.1
    },
    "secondaries+=0.2"
  );
  secondaries.forEach((sec, i) => {
    let x = 100;
    if (i === 0) x = 414;
    if (i === 1) x = 207;
    if (i === 2) x = -207;
    if (i === 3) x = -414;
    tl.to(
      sec,
      {
        x,
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3
      },
      "secondaries+=4"
    );
  });
  secondaries.forEach((sec, i) => {
    let x = 100;
    if (i === 0) x = 207;
    if (i === 1) x = -414;
    if (i === 2) x = 414;
    if (i === 3) x = -207;
    tl.to(
      sec,
      {
        x,
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3
      },
      "secondaries+=8"
    );
  });
  tl.to(
    [".uxIcons-secondary-card-icon", "#uxIcons"],
    {
      rotation: 0,
      transformOrigin: "50% 50%",
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.1
    },
    "secondaries+=12"
  );
  tl.addLabel("rollout");
  tl.to(
    [secondaries, "#uxIcons-main-card"],
    {
      x: (i, el, list) => (i - (list.length - 1) / 2) * 200,
      y: (i) => i % 2 ? 300 : -300,
      autoAlpha: 0,
      duration: 1,
      ease: "power2.in",
      stagger: 0.1
    },
    "rollout"
  );
  tl.fromTo(roleSection, {
    y: 0,
    filter: "none",
    autoAlpha: 1
  }, {
    y: "-100dvh",
    filter: "blur(5px)",
    autoAlpha: 1,
    ease: "elastic.out(0.6)",
    duration: 0.6
  }, "rollout");
  tl.to(["uxIcons-main-card", "#uxIcons-main-card-svg", "#uxIcons"], {
    clearProps: "all"
  });
  tl.call(() => {
    const resetItems = (void 0).querySelectorAll("uxIcons-main-card", "#uxIcons-main-card-svg", "#uxIcons");
    if (resetItems.length) resetItems.forEach((resetItem) => resetItem.removeAttribute("style"));
    tl.pause(0);
  }, null);
  return tl;
}

export { buildUXTL };
//# sourceMappingURL=uxIcons-D2OA2afZ.mjs.map
