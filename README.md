# be-directive (🗃️)

[![NPM version](https://badge.fury.io/js/be-directive.png)](http://badge.fury.io/js/be-directive)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/be-directive?style=for-the-badge)](https://bundlephobia.com/result?p=be-directive)
<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/be-directive?compression=gzip">

Enhances an HTML button so that it prompts the user to pick a local directory / folder, and provides a reference to the chosen directory (FileSystemDirectoryHandle).

```html
<button 🗃️>Pick directory</button>
```

## Viewing Locally

Any web server that serves static files (html, css, js) will do but...

1.  Install git.
2.  Fork/clone this repo.
3.  Install node.
4.  Open command window to folder where you cloned this repo.
5.  > npm install
6.  > npm run serve
7.  Open http://localhost:3030/demo in a modern browser.

## Importing in ES Modules:

```JavaScript
import 'be-directive/be-directive.js';
```

## Using from CDN:

```html
<script type=module crossorigin=anonymous>
    import 'https://esm.run/be-directive';
</script>
```