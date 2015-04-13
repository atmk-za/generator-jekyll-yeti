---
layout: home
title: Home
permalink: /
weight: 1
---

#### Components

Jekyll & Yeti uses modular Foundation components, allowing you to remove unnecessary css and js for an even quicker page load. The remaining sccs is compiled, the css and js is then compressed and concatenated in the final Grunt build.

##### Scss:

All Foundation Scss components are in the main scss file: `jekyll/css/main.scss`. Comment out or delete uneeded components here.

Foundation settings can be overridden here: `jekyll/_scss/_settings.scss`.

##### Javascript:

Foundation scripts are loaded one by one in `jekyll/_includes/footer.html`. Remove unused scripts here, the remaining scripts will be concatenated and uglified into a single foundation script.

#### Deploy

##### Manual: Simply upload the contents of the `dist/` folder to your webserver

##### Github Pages: You can init your repo in the `dist/` folder. Subsequent grunt tasks will ignore the `.git` subfolder

##### Rsync: TODO

#### Grunt

Start Jekyll server (Grunt Shell): `grunt`

Build Jekyll site into `_site` without running server: `grunt build`

Install library via bower: `bower install <lib> --save`

Use Wiredep to inject dependency JS and CSS into html: `grunt bower` 

Build final optimized site (from `jekyll/_site`) into the `/dist` folder: `grunt dist`

