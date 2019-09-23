module.exports = function (md, option) {

  var defaults = {
    redirect: 'https://l.morioh.com/b0a3f595aa?r=',
    regex: {
      link: /((http|https):\/\/(?!([^/]+\.)?morioh.com)[\w\.\/\-=?#]+)/i,
      html: /(<a.*href=)[\"']((http(s)?):\/\/(?!([^/]+\.)?morioh.com)[\w\.\/\-=?#]+)[\"']/gm
    }
  }
  var o = Object.assign(defaults || option);

  md.core.ruler.after('inline', 'redirect', function (state) {
    state.tokens.forEach(function (blockToken) {    

      if (blockToken.type === 'text' || blockToken.type === 'html_block') {
        blockToken.content = blockToken.content.replace(o.regex.html, function (match, arg1, arg2) {
          return arg1 +'"' + o.redirect + encodeURI(arg2) + '" rel="nofollow" target="_blank"';
        });
      }
      else if (blockToken.type === 'inline' && blockToken.children) {
        blockToken.children.forEach(function (token) {
          var type = token.type;
          if (type === 'link_open') {
            var href = token.attrGet('href');
            if (o.regex.link.test(href)) {
              token.attrSet('href', o.redirect + encodeURI(href));
              token.attrSet('rel', 'nofollow');
              token.attrSet('target', '_blank');
            }
          }
          else if (type === 'text' || type === 'html_inline') {

            token.content = token.content.replace(o.regex.html, function (match, arg1, arg2) {
              return arg1 +'"'+ o.redirect + encodeURI(arg2) + '" rel="nofollow" target="_blank"';
            });
          }
        });
      }
    });


  });
};

