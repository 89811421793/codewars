const typing = (param) => {
    const type = Object.prototype.toString.call(param);

    if (type === '[object Undefined]') return 'undefined';
    if (type === '[object String]') return `string="${param}"`;
    if (type === '[object Array]' || type === '[object Object]') {
        return `object=${JSON.stringify(param)}`;
    }
    if (type === '[object Function]') return `function=${param.toString()}`;
    if (param === null) return 'object=null';

    return `${typeof param}=${param}`;
}

/*function typing(param) {
  if (typeof param === 'undefined') return undefined;
  else if (typeof param === "string") return 'string="' + param + '"';
  else if (param === null) return 'object=null';
  else if (typeof param === "object") {
    if (Array.isArray(param)) {
      return "object=" + JSON.stringify(param);
    } else {
      return "object=" + JSON.stringify(param);
    }
  } else if (typeof param === "function") return "function=" + param.toString();
  else return `${typeof param}=${param}`;
}
*/

/*
function typing(param) {
    if (param === null) return 'object=null';
    switch (typeof param) {
        case 'undefined':
            return undefined;
        case 'string':
            return `string="${param}"`;
        case 'object':
            return `object=${JSON.stringify(param)}`;
        case 'function':
            return `function=${param.toString()}`;
        default:
            return `${typeof param}=${param}`;
    }
}
*/

