

# Replace / Redirect external links with Markdown-it Plugin


### If you don't know Node.js 

[Node.js Tutorial for Beginners in 2020](https://morioh.com/p/0907cef2141c)

[How To Build a Blog with Nest.js, MongoDB, and Vue.js](https://morioh.com/p/74ffc8a798bb)

[Machine Learning In Node.js With TensorFlow.js](https://morioh.com/p/a517bc403340)



### Install

```js
npm i markdown-it-redirect --save
```

### Example

```js

var redirect = require('markdown-it-redirect');
var md = require('markdown-it')({ html: true}).use(redirect, {  
    // default option  
    redirect: 'https://l.morioh.com/b0a3f595aa?r=',
    regex: {
      link: /((http|https):\/\/(?!([^/]+\.)?morioh.com)[\w\.\/\-=?#]+)/i,
      html: /(<a.*href=)[\"']((http(s)?):\/\/(?!([^/]+\.)?morioh.com)[\w\.\/\-=?#]+)[\"']/gm
    }
  
});

var html = md.render('[https://morioh.com/p/e446a15a1022](https://morioh.com/p/e446a15a1022)\
[https://learnstartup.net/p/rJHeJJdk6l](https://learnstartup.net/p/rJHeJJdk6l)\
<a href="https://morioh.com/p/e446a15a1022">https://morioh.com/p/e446a15a1022</a>\
<a href="https://learnstartup.net/p/rJHeJJdk6l">https://learnstartup.net/p/rJHeJJdk6l</a>');

```
// result

<p><a href="https://morioh.com/p/e446a15a1022">https://morioh.com/p/e446a15a1022</a>
<a href="https://l.morioh.com/b0a3f595aa?r=https://learnstartup.net/p/rJHeJJdk6l" rel="nofollow" target="_blank">https://learnstartup.net/p/rJHeJJdk6l</a>
<a href="https://morioh.com/p/e446a15a1022">https://morioh.com/p/e446a15a1022</a>
<a href=https://l.morioh.com/b0a3f595aa?r=https://learnstartup.net/p/rJHeJJdk6l rel="nofollow" target="_blank">https://learnstartup.net/p/rJHeJJdk6l</a></p>

```

