# generator-jekyll-yeti [![Build Status](https://secure.travis-ci.org/atmk-za/generator-jekyll-yeti.png?branch=master)](https://travis-ci.org/atmk-za/generator-jekyll-yeti)

> [Yeoman](http://yeoman.io) generator


## Getting Started

### Dependencies

[NodeJs](https://nodejs.org/) *tested v0.10.38*

[Ruby](https://www.ruby-lang.org) *tested v2.1.4*

[Jekyll](http://jekyllrb.com/) *tested v2.5.3*

### Install Yo

```bash
npm install -g yo
```

### Install Jekyll-Yeti

To install generator-jekyll-yeti from npm, run:

```bash
npm install -g generator-jekyll-yeti
```

Finally, change into your project directory and initiate the generator :

```bash
yo jekyll-yeti
```

## Screen

![Screenshot](https://github.com/atmk-za/generator-jekyll-yeti/blob/master/screen.png)

## Notes

### Components

Jekyll & Yeti uses modular Foundation components, allowing you to remove unnecessary css and js for an even quicker page load. The remaining sccs is compiled, the css and js is then compressed and concatenated in the final Grunt build.

##### Scss:

All Foundation Scss components are in the main scss file: `jekyll/css/main.scss`. Comment out or delete uneeded components here.

Foundation settings can be overridden here: `jekyll/_scss/_settings.scss`.

##### Javascript:

Foundation scripts are loaded one by one in `jekyll/_includes/footer.html`. Remove unused scripts here, the remaining scripts will be concatenated and uglified into a single foundation script.

### Deploy

##### Manual: 

Simply upload the contents of the `dist/` folder to your webserver

##### Github Pages:

You can init your repo in the `dist/` folder. Subsequent grunt tasks will ignore the `.git` subfolder, keeping version control

##### Rsync: 

TODO

### Grunt

Start Jekyll server (Grunt Shell): `grunt`

Build Jekyll site into `_site` without running server: `grunt build`

Install library via bower: `bower install <lib> --save`

Use Wiredep to inject dependency JS and CSS into html: `grunt bower` 

Build final optimized site (from `jekyll/_site`) into the `/dist` folder: `grunt dist`

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT
